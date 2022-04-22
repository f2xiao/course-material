"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 9723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1666);
// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/git-basics/index.html.vue?vue&type=template&id=54f919db



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")
  const _component_FigureNumber = (0,external_vue_.resolveComponent)("FigureNumber")
  const _component_Figure = (0,external_vue_.resolveComponent)("Figure")

  _push(`<!--[--><h1 id="git-basics" tabindex="-1"><a class="header-anchor" href="#git-basics" aria-hidden="true">#</a> Git Basics</h1><p>Git is a version control system you can use to remember previous versions of the source code (or whatever type of files you need to version control) in your projects. It was created by <a href="https://en.wikipedia.org/wiki/Linus_Torvalds" target="_blank" rel="noopener noreferrer">Linus Torvalds`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> in 2005 when he couldn&#39;t find a good version control system he could use for the Linux kernel he was working on. Git quickly became a popular version control system, especially for open source projects thanks to GitHub hosting the source code online for free. <a href="https://trends.google.com/trends/explore?date=all&amp;q=%2Fm%2F05vqwg,%2Fm%2F012ct9,%2Fm%2F08441_,%2Fm%2F08w6d6,%2Fm%2F09d6g&amp;hl=en-US&amp;tz=&amp;tz=" target="_blank" rel="noopener noreferrer">Git is today (2019) one of the most commonly used version control systems.`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></p><h2 id="why-use-a-version-control-system" tabindex="-1"><a class="header-anchor" href="#why-use-a-version-control-system" aria-hidden="true">#</a> Why use a version control system?</h2><p>So, why bother spending time on learning Git? Turns out that using a version control system have some very valuable benefits for projects, and all big software projects do today use some type of version control system.</p><div class="custom-container warning"><p class="custom-container-title">Just examples</p><p>The benefits described below are just examples, and not a complete list of all the benefits with using a version control system.</p></div><h3 id="benefit-1-knowing-when-what-changed" tabindex="-1"><a class="header-anchor" href="#benefit-1-knowing-when-what-changed" aria-hidden="true">#</a> Benefit 1: Knowing when what changed</h3><p>If a security bug is introduced into software, we can use the version control system to go back in time and see for how long time the bug has existed. This is especially important for libraries which other applications makes use of, because the libraries will most likely exist in different versions, and applications making use of the library need to know if the specific version of the library they are using contains the vulnerability or not.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When <a href="http://heartbleed.com/" target="_blank" rel="noopener noreferrer">The Heartbleed Bug`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> was discovered in OpenSSL, they could quickly say:</p><blockquote><p>Bug was introduced to OpenSSL in December 2011 and has been out in the wild since OpenSSL release 1.0.1 on 14th of March 2012. OpenSSL 1.0.1g released on 7th of April 2014 fixes the bug.</p></blockquote></div><p>With the same reasoning, applications need to version control their code as well, so if, for example, a website contains a security vulnerability, one can quickly see for how long time the vulnerability has existed. Maybe only newly registered users since the bug was introduced have had their data compromised?</p><h3 id="benefit-2-keeping-track-of-who-did-what" tabindex="-1"><a class="header-anchor" href="#benefit-2-keeping-track-of-who-did-what" aria-hidden="true">#</a> Benefit 2: Keeping track of who did what</h3><p>When you find a vulnerability/bug, you always want to have as much information as possible about it, including who introduced the bug. Was it on purpose or not? What relevant code was introduced? With a version control system, that is quite easy to find out.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When a new developer took over the npm package <em>event-stream</em> (a library in Node.js), he started to inject bad code into it, which was executed by all new applications (and some old ones that was updated) using this library. See <a href="https://github.com/dominictarr/event-stream/issues/116" target="_blank" rel="noopener noreferrer">issue #116 on the event-stream&#39;s GitHub repository`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>. Thanks to using a version control system, it was quite easy to discover all changes made by that programmer, and his changes to the code could be reverted back.</p></div><h3 id="benefit-3-dealing-with-concurrent-changes" tabindex="-1"><a class="header-anchor" href="#benefit-3-dealing-with-concurrent-changes" aria-hidden="true">#</a> Benefit 3: Dealing with concurrent changes</h3><p>In bigger software projects, there are often multiple programmers working on the source code at the same time. Each of them have their own copy of the source code, and when one programmer is done implementing a new feature, she needs to share her version of the source code with the other programmers, so their copy of the source code contains the new feature as well. But at the same time, these other programmers will be half way through implementing their own features, which might clash with the changes made by the first programmer. This is a non-trivial problem to solve, but version control systems gives us good tools to deal with it.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p><a href="https://royal.pingdom.com/linux-kernel-development-numbers/" target="_blank" rel="noopener noreferrer">1 316 developers were involved in the development of the Linux kernel version 3.2`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h3 id="benefit-4-backups" tabindex="-1"><a class="header-anchor" href="#benefit-4-backups" aria-hidden="true">#</a> Benefit 4: Backups</h3><p>By using a <em>distributed</em> version control system (such as Git) you automatically get backups of your code. Each programmer that works on the project has a copy of the source code (and the previous versions of it) on her own computer. So if 10 programmers work on the same project, you have (at least) 10 copies of the source code on 10 different computers, so if one programmer&#39;s computer crashes and the source code on that computer is lost, there are still 9 copies left on the other computers. Your source code will never be truly lost again.</p><h2 id="how-does-git-work" tabindex="-1"><a class="header-anchor" href="#how-does-git-work" aria-hidden="true">#</a> How does Git work?</h2><p><a href="https://en.wikipedia.org/wiki/Comparison_of_version-control_software#General_information" target="_blank" rel="noopener noreferrer">There exists many different version control systems`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>, but let us focus on Git alone. Many other version control systems work in a similiar way and often use the same terms, but each term might have a little bit different meaning.</p><p>In the text below the term <em>project folder</em> refers to a folder on your computer in which you put all the files that belongs to a project you are working on. If the project for example is about creating a new website, then the project folder could be a folder named <code>the-project</code>, and in this folder you put all the source files (in this case all the HTML files, CSS files, images, etc.) the website consists of.</p><div class="custom-container tip"><p class="custom-container-title">Installing Git</p><p>Download and install Git from <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git-scm.com`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p></div><h3 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories" aria-hidden="true">#</a> Repositories</h3><p>Version control systems make use of <em>repositories</em>. When you have a project you want to version control, you tell your version control system to create a new repository for you for that project. The repository is responsible for remembering all the different versions you have of your source files. So a single computer can contain multiple repositories: one for each project you version control.</p><p>How a version control system internally represents a repository is not something we need to worry that much about, but it is good to know that Git uses a folder named <code>.git</code> in the project folder for this. The repository will contain all the different versions of the source files you want to remember. If you later delete the <code>.git</code> folder in your project folder, then you have deleted your entire repository for that project, and all the versions of your source files you have asked Git to remember for you will be gone. Be careful to not delete a <code>.git</code> folder by accident!</p><p>To create a new Git repository for your project, go to the project folder and run the command <code>git init</code>. This will create the <code>.git</code> folder in your project folder for you. So far we haven&#39;t asked Git to remember any new version of the project for us, so the repository will at the moment be an empty repository (although the <code>.git</code> folder will already contain some files Git uses internally).</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Since the name of the <code>.git</code> folder starts with a dot, most file explorers don&#39;t display this folder unless you change a setting in your file explorer telling it to display files and folders that starts with a dot. How you change that settings depends on which file explorer you use (Google it...).</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-powershell ext-powershell line-numbers-mode"${
                _scopeId
              }><pre class="language-powershell"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }># Which directory are we currently standing in?</span>
\$ <span class="token string"${
                _scopeId
              }>&quot;<span class="token variable"${
                _scopeId
              }>\$pwd</span>&quot;</span>
    C:\\Users\\peter\\the<span class="token operator"${
                _scopeId
              }>-</span>project

<span class="token comment"${
                _scopeId
              }># What does that directory contain?</span>
\$ <span class="token function"${
                _scopeId
              }>dir</span> <span class="token operator"${
                _scopeId
              }>-</span>Name <span class="token operator"${
                _scopeId
              }>-</span>Force
    <span class="token comment"${
                _scopeId
              }># (no output = nothing)</span>

<span class="token comment"${
                _scopeId
              }># Create a new repository for the directory we are standing in.</span>
\$ git init
    Initialized empty Git repository in C:<span class="token operator"${
                _scopeId
              }>/</span>Users<span class="token operator"${
                _scopeId
              }>/</span>peter<span class="token operator"${
                _scopeId
              }>/</span>the<span class="token operator"${
                _scopeId
              }>-</span>project<span class="token operator"${
                _scopeId
              }>/</span><span class="token punctuation"${
                _scopeId
              }>.</span>git<span class="token operator"${
                _scopeId
              }>/</span>

<span class="token comment"${
                _scopeId
              }># What does the directory contain now?</span>
\$ <span class="token function"${
                _scopeId
              }>dir</span> <span class="token operator"${
                _scopeId
              }>-</span>Name <span class="token operator"${
                _scopeId
              }>-</span>Force
    <span class="token punctuation"${
                _scopeId
              }>.</span>git
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
                (0,external_vue_.createVNode)("div", { class: "language-powershell ext-powershell line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-powershell" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Which directory are we currently standing in?"),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, [
                        (0,external_vue_.createTextVNode)("\""),
                        (0,external_vue_.createVNode)("span", { class: "token variable" }, "$pwd"),
                        (0,external_vue_.createTextVNode)("\"")
                      ]),
                      (0,external_vue_.createTextVNode)("\n    C:\\Users\\peter\\the"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("project\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does that directory contain?"),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "dir"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("Name "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("Force\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output = nothing)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create a new repository for the directory we are standing in."),
                      (0,external_vue_.createTextVNode)("\n$ git init\n    Initialized empty Git repository in C:"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                      (0,external_vue_.createTextVNode)("Users"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                      (0,external_vue_.createTextVNode)("peter"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                      (0,external_vue_.createTextVNode)("the"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("project"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("git"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does the directory contain now?"),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "dir"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("Name "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("Force\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("git\n")
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Linux" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-bash ext-sh line-numbers-mode"${
                _scopeId
              }><pre class="language-bash"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }># TODO</span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# TODO"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-powershell ext-powershell line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-powershell" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Which directory are we currently standing in?"),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, [
                      (0,external_vue_.createTextVNode)("\""),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$pwd"),
                      (0,external_vue_.createTextVNode)("\"")
                    ]),
                    (0,external_vue_.createTextVNode)("\n    C:\\Users\\peter\\the"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("project\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does that directory contain?"),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "dir"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("Name "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("Force\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output = nothing)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create a new repository for the directory we are standing in."),
                    (0,external_vue_.createTextVNode)("\n$ git init\n    Initialized empty Git repository in C:"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                    (0,external_vue_.createTextVNode)("Users"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                    (0,external_vue_.createTextVNode)("peter"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                    (0,external_vue_.createTextVNode)("the"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("project"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("git"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does the directory contain now?"),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "dir"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("Name "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("Force\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("git\n")
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Linux" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# TODO"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
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
  _push(`</div><h3 id="commits-versions" tabindex="-1"><a class="header-anchor" href="#commits-versions" aria-hidden="true">#</a> Commits (versions)</h3><p>To tell the repository to remember a specific version of your project, you send the repository a <em>commit</em>. A commit describes the changes made to project since the previous commit. This way, each commit can be seen as a snapshot of what the project look like at the moment the commit was created. By using these commits Git is able to restore the source files so they contain precisely the same content as they did at a specific commit/version of your project.</p><p>A commit in Git primarily contains:</p><ul><li>A unique identifier for the commit (a hash value like the hexadecimal string <code>e4728bc8aa2...</code>)</li><li>The unique identifier of the previous commit</li><li>Which changes that has been made to the project (files created/edited/deleted) since the previous commit</li><li>A human readable message explaining the changes that has been made since the previous commit</li><li>The name of the developer who created the commit</li><li>The time at which the commit was created</li></ul><p>Before you tell Git to create a new commit for you, you must first tell Git which changes you want to put into the commit (you can change files without putting those changes into the next commit you create, which might seem a bit weird, but can be useful). If you have created a new file or made changes to an existing file, you need to run the command <code>git add THE_FILE_NAME.EXT</code> to tell Git that the changes you have made to the file named <code>THE_FILE_NAME.EXT</code> should be part of the next commit you create. Run <code>git add THE_FILE_NAME.EXT</code> one time for each file you have created/changed and want to be part of the next commit.</p><p>Then use the command <code>git commit -m &quot;A descriptive message...&quot;</code> to tell Git to create a new commit with the added files and with the human readable message <code>A descriptive message...</code> (that you of course should change to a message describing the changes you have made since the previous commit). Git will figure out the other information (your name, previous commit unique identifier, current time, etc.) on its own or simply ask you to enter it.</p><p>Some useful <code>git</code> commands:</p><ul><li><code>git add THE_FILE_NAME.EXT</code> will add the file <code>THE_FILE_NAME.EXT</code> to the next commit you create</li><li><code>git add THE_FOLDER_NAME/*</code> will add all the files in the folder named <code>THE_FOLDER_NAME</code> to the next commit you create</li><li><code>git add .</code> will add all changes you have made to any file in the entire project folder</li><li><code>git rm THE_FILE_NAME.EXT</code> will remove the file named <code>THE_FILE_NAME.EXT</code> in the next commit you create <br><strong>Note</strong>: When you use <code>git rm THE_FILE_NAME.EXT</code>, the previous versions of the file <code>THE_FILE_NAME.EXT</code> in earlier commits will still be remembered by your repository, but the project folder will no longer contain the file</li><li><code>git status</code> will show you which files you have added/removed/&quot;changed and not added&quot; to the next commit you will create</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>When using the various <code>git</code> commands, it will often tell you that you are working on a branch called <code>master</code> or <code>main</code>. We&#39;ll get back to what branches are in the next lecture, but for now, just accept/ignore the fact that you are working on the <code>master</code> or <code>main</code> branch.</p></div><div class="custom-container tip"><p class="custom-container-title">Example (continuation of previous example)</p><p>In the previous example we had just setup a new Git repository for an empty project folder. Now, let us create and change some files in our project folder!</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-powershell ext-powershell line-numbers-mode"${
                _scopeId
              }><pre class="language-powershell"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master

    No commits yet

    nothing to commit <span class="token punctuation"${
                _scopeId
              }>(</span>create<span class="token operator"${
                _scopeId
              }>/</span><span class="token function"${
                _scopeId
              }>copy</span> files and use <span class="token string"${
                _scopeId
              }>&quot;git add&quot;</span> to track<span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }># Create file-1.txt containing some text.</span>
\$ <span class="token string"${
                _scopeId
              }>&quot;Content file 1&quot;</span> &gt; file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    <span class="token comment"${
                _scopeId
              }># (no output)</span>

<span class="token comment"${
                _scopeId
              }># What does the directory now contain?</span>
\$ <span class="token function"${
                _scopeId
              }>dir</span> <span class="token operator"${
                _scopeId
              }>-</span>Name <span class="token operator"${
                _scopeId
              }>-</span>Force
    <span class="token punctuation"${
                _scopeId
              }>.</span>git
    file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># What does file-1.txt contain?</span>
\$ <span class="token function"${
                _scopeId
              }>cat</span> file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    Content file 1

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master

    No commits yet

    Untracked files:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git add &lt;file&gt;...&quot;</span> to include in what will be committed<span class="token punctuation"${
                _scopeId
              }>)</span>

            file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt

    nothing added to commit but untracked files present <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git add&quot;</span> to track<span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }># Add file-1.txt in the next commit we will create.</span>
\$ git add file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    <span class="token comment"${
                _scopeId
              }># (no output)</span>

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master

    No commits yet

    Changes to be committed:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git rm --cached &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation"${
                _scopeId
              }>)</span>

            new file:   file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># Create next commit.</span>
\$ git commit <span class="token operator"${
                _scopeId
              }>-</span>m <span class="token string"${
                _scopeId
              }>&quot;The first commit.&quot;</span>
    <span class="token namespace"${
                _scopeId
              }>[master (root-commit) 543ec8a]</span> The first commit<span class="token punctuation"${
                _scopeId
              }>.</span>
    1 file changed<span class="token punctuation"${
                _scopeId
              }>,</span> 0 insertions<span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>+</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>,</span> 0 deletions<span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>-</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    create mode 100644 file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master
    nothing to commit<span class="token punctuation"${
                _scopeId
              }>,</span> working tree clean

<span class="token comment"${
                _scopeId
              }># Create file-2.txt containing some text.</span>
\$ <span class="token string"${
                _scopeId
              }>&quot;Content file 2&quot;</span> &gt; file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    <span class="token comment"${
                _scopeId
              }># (no output)</span>

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master
    Untracked files:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git add &lt;file&gt;...&quot;</span> to include in what will be committed<span class="token punctuation"${
                _scopeId
              }>)</span>

            file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt

    nothing added to commit but untracked files present <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git add&quot;</span> to track<span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token comment"${
                _scopeId
              }># Add file-2.txt in the next commit we will create.</span>
\$ git add file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    <span class="token comment"${
                _scopeId
              }># (no output)</span>

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master
    Changes to be committed:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation"${
                _scopeId
              }>)</span>

            new file:   file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># Change the content in file-1.txt.</span>
\$ <span class="token string"${
                _scopeId
              }>&quot;Updated content file 1&quot;</span> &gt; file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    <span class="token comment"${
                _scopeId
              }># (no output)</span>

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master
    Changes to be committed:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation"${
                _scopeId
              }>)</span>

            new file:   file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt

    Changes not staged <span class="token keyword"${
                _scopeId
              }>for</span> commit:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git add &lt;file&gt;...&quot;</span> to update what will be committed<span class="token punctuation"${
                _scopeId
              }>)</span>
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git checkout -- &lt;file&gt;...&quot;</span> to discard changes in working directory<span class="token punctuation"${
                _scopeId
              }>)</span>

            modified:   file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># Add the changes we made to file-1.txt in the next commit we will create.</span>
\$ git add file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt
    <span class="token comment"${
                _scopeId
              }># (no output)</span>

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master
    Changes to be committed:
      <span class="token punctuation"${
                _scopeId
              }>(</span>use <span class="token string"${
                _scopeId
              }>&quot;git reset HEAD &lt;file&gt;...&quot;</span> to unstage<span class="token punctuation"${
                _scopeId
              }>)</span>

            modified:   file<span class="token operator"${
                _scopeId
              }>-</span>1<span class="token punctuation"${
                _scopeId
              }>.</span>txt
            new file:   file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># Create next commit.</span>
\$ git commit <span class="token operator"${
                _scopeId
              }>-</span>m <span class="token string"${
                _scopeId
              }>&quot;The second commit.&quot;</span>
    <span class="token namespace"${
                _scopeId
              }>[master 25bdb4c]</span> The second commit<span class="token punctuation"${
                _scopeId
              }>.</span>
    2 files changed<span class="token punctuation"${
                _scopeId
              }>,</span> 0 insertions<span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>+</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>,</span> 0 deletions<span class="token punctuation"${
                _scopeId
              }>(</span><span class="token operator"${
                _scopeId
              }>-</span><span class="token punctuation"${
                _scopeId
              }>)</span>
    create mode 100644 file<span class="token operator"${
                _scopeId
              }>-</span>2<span class="token punctuation"${
                _scopeId
              }>.</span>txt

<span class="token comment"${
                _scopeId
              }># What is the current status of our source files?</span>
\$ git status
    On branch master
    nothing to commit<span class="token punctuation"${
                _scopeId
              }>,</span> working tree clean
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
              }><span class="line-number"${
                _scopeId
              }>33</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>34</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>35</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>36</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>37</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>38</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>39</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>40</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>41</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>42</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>43</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>44</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>45</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>46</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>47</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>48</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>49</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>50</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>51</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>52</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>53</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>54</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>55</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>56</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>57</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>58</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>59</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>60</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>61</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>62</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>63</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>64</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>65</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>66</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>67</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>68</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>69</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>70</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>71</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>72</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>73</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>74</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>75</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>76</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>77</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>78</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>79</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>80</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>81</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>82</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>83</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>84</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>85</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>86</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>87</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>88</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>89</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>90</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>91</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>92</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>93</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>94</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>95</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>96</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>97</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>98</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>99</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>100</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>101</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>102</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>103</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>104</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>105</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>106</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>107</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>108</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>109</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>110</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>111</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>112</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>113</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>114</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>115</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>116</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>117</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>118</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>119</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>120</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>121</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>122</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>123</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>124</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>125</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>126</span><br${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>127</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-powershell ext-powershell line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-powershell" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n\n    No commits yet\n\n    nothing to commit "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("create"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "copy"),
                      (0,external_vue_.createTextVNode)(" files and use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add\""),
                      (0,external_vue_.createTextVNode)(" to track"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create file-1.txt containing some text."),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Content file 1\""),
                      (0,external_vue_.createTextVNode)(" > file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does the directory now contain?"),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "dir"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("Name "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("Force\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("git\n    file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does file-1.txt contain?"),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "cat"),
                      (0,external_vue_.createTextVNode)(" file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    Content file 1\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n\n    No commits yet\n\n    Untracked files:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add <file>...\""),
                      (0,external_vue_.createTextVNode)(" to include in what will be committed"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n    nothing added to commit but untracked files present "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add\""),
                      (0,external_vue_.createTextVNode)(" to track"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Add file-1.txt in the next commit we will create."),
                      (0,external_vue_.createTextVNode)("\n$ git add file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n\n    No commits yet\n\n    Changes to be committed:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git rm --cached <file>...\""),
                      (0,external_vue_.createTextVNode)(" to unstage"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            new file:   file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create next commit."),
                      (0,external_vue_.createTextVNode)("\n$ git commit "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("m "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first commit.\""),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token namespace" }, "[master (root-commit) 543ec8a]"),
                      (0,external_vue_.createTextVNode)(" The first commit"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("\n    1 file changed"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" 0 insertions"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" 0 deletions"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    create mode 100644 file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    nothing to commit"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" working tree clean\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create file-2.txt containing some text."),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Content file 2\""),
                      (0,external_vue_.createTextVNode)(" > file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Untracked files:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add <file>...\""),
                      (0,external_vue_.createTextVNode)(" to include in what will be committed"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n    nothing added to commit but untracked files present "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add\""),
                      (0,external_vue_.createTextVNode)(" to track"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Add file-2.txt in the next commit we will create."),
                      (0,external_vue_.createTextVNode)("\n$ git add file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git reset HEAD <file>...\""),
                      (0,external_vue_.createTextVNode)(" to unstage"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            new file:   file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Change the content in file-1.txt."),
                      (0,external_vue_.createTextVNode)("\n$ "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Updated content file 1\""),
                      (0,external_vue_.createTextVNode)(" > file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git reset HEAD <file>...\""),
                      (0,external_vue_.createTextVNode)(" to unstage"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            new file:   file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n    Changes not staged "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                      (0,external_vue_.createTextVNode)(" commit:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add <file>...\""),
                      (0,external_vue_.createTextVNode)(" to update what will be committed"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git checkout -- <file>...\""),
                      (0,external_vue_.createTextVNode)(" to discard changes in working directory"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            modified:   file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Add the changes we made to file-1.txt in the next commit we will create."),
                      (0,external_vue_.createTextVNode)("\n$ git add file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("use "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git reset HEAD <file>...\""),
                      (0,external_vue_.createTextVNode)(" to unstage"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n            modified:   file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("1"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n            new file:   file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create next commit."),
                      (0,external_vue_.createTextVNode)("\n$ git commit "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("m "),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second commit.\""),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token namespace" }, "[master 25bdb4c]"),
                      (0,external_vue_.createTextVNode)(" The second commit"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("\n    2 files changed"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" 0 insertions"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" 0 deletions"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    create mode 100644 file"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("2"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("txt\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                      (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    nothing to commit"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(" working tree clean\n")
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
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "62"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "63"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "64"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "65"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "66"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "67"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "68"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "69"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "70"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "71"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "72"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "73"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "74"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "75"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "76"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "77"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "78"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "79"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "80"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "81"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "82"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "83"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "84"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "85"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "86"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "87"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "88"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "89"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "90"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "91"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "92"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "93"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "94"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "95"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "96"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "97"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "98"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "99"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "100"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "101"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "102"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "103"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "104"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "105"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "106"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "107"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "108"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "109"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "110"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "111"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "112"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "113"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "114"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "115"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "116"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "117"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "118"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "119"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "120"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "121"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "122"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "123"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "124"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "125"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "126"),
                    (0,external_vue_.createVNode)("br"),
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "127"),
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Linux" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-bash ext-sh line-numbers-mode"${
                _scopeId
              }><pre class="language-bash"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }># TODO...</span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# TODO..."),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-powershell ext-powershell line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-powershell" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n\n    No commits yet\n\n    nothing to commit "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("create"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "/"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "copy"),
                    (0,external_vue_.createTextVNode)(" files and use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add\""),
                    (0,external_vue_.createTextVNode)(" to track"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create file-1.txt containing some text."),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Content file 1\""),
                    (0,external_vue_.createTextVNode)(" > file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does the directory now contain?"),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "dir"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("Name "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("Force\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("git\n    file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What does file-1.txt contain?"),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "cat"),
                    (0,external_vue_.createTextVNode)(" file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    Content file 1\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n\n    No commits yet\n\n    Untracked files:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add <file>...\""),
                    (0,external_vue_.createTextVNode)(" to include in what will be committed"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n    nothing added to commit but untracked files present "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add\""),
                    (0,external_vue_.createTextVNode)(" to track"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Add file-1.txt in the next commit we will create."),
                    (0,external_vue_.createTextVNode)("\n$ git add file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n\n    No commits yet\n\n    Changes to be committed:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git rm --cached <file>...\""),
                    (0,external_vue_.createTextVNode)(" to unstage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            new file:   file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create next commit."),
                    (0,external_vue_.createTextVNode)("\n$ git commit "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("m "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The first commit.\""),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "[master (root-commit) 543ec8a]"),
                    (0,external_vue_.createTextVNode)(" The first commit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("\n    1 file changed"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" 0 insertions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" 0 deletions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    create mode 100644 file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    nothing to commit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" working tree clean\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create file-2.txt containing some text."),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Content file 2\""),
                    (0,external_vue_.createTextVNode)(" > file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Untracked files:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add <file>...\""),
                    (0,external_vue_.createTextVNode)(" to include in what will be committed"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n    nothing added to commit but untracked files present "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add\""),
                    (0,external_vue_.createTextVNode)(" to track"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Add file-2.txt in the next commit we will create."),
                    (0,external_vue_.createTextVNode)("\n$ git add file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git reset HEAD <file>...\""),
                    (0,external_vue_.createTextVNode)(" to unstage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            new file:   file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Change the content in file-1.txt."),
                    (0,external_vue_.createTextVNode)("\n$ "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"Updated content file 1\""),
                    (0,external_vue_.createTextVNode)(" > file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git reset HEAD <file>...\""),
                    (0,external_vue_.createTextVNode)(" to unstage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            new file:   file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n    Changes not staged "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "for"),
                    (0,external_vue_.createTextVNode)(" commit:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git add <file>...\""),
                    (0,external_vue_.createTextVNode)(" to update what will be committed"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git checkout -- <file>...\""),
                    (0,external_vue_.createTextVNode)(" to discard changes in working directory"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            modified:   file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Add the changes we made to file-1.txt in the next commit we will create."),
                    (0,external_vue_.createTextVNode)("\n$ git add file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# (no output)"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    Changes to be committed:\n      "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("use "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"git reset HEAD <file>...\""),
                    (0,external_vue_.createTextVNode)(" to unstage"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n            modified:   file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("1"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n            new file:   file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Create next commit."),
                    (0,external_vue_.createTextVNode)("\n$ git commit "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("m "),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"The second commit.\""),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token namespace" }, "[master 25bdb4c]"),
                    (0,external_vue_.createTextVNode)(" The second commit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("\n    2 files changed"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" 0 insertions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" 0 deletions"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    create mode 100644 file"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("2"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("txt\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# What is the current status of our source files?"),
                    (0,external_vue_.createTextVNode)("\n$ git status\n    On branch master\n    nothing to commit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(" working tree clean\n")
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
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "33"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "34"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "35"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "36"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "37"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "38"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "39"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "40"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "41"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "42"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "43"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "44"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "45"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "46"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "47"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "48"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "49"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "50"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "51"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "52"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "53"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "54"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "55"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "56"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "57"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "58"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "59"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "60"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "61"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "62"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "63"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "64"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "65"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "66"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "67"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "68"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "69"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "70"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "71"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "72"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "73"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "74"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "75"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "76"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "77"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "78"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "79"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "80"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "81"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "82"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "83"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "84"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "85"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "86"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "87"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "88"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "89"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "90"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "91"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "92"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "93"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "94"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "95"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "96"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "97"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "98"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "99"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "100"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "101"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "102"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "103"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "104"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "105"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "106"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "107"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "108"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "109"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "110"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "111"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "112"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "113"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "114"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "115"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "116"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "117"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "118"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "119"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "120"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "121"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "122"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "123"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "124"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "125"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "126"),
                  (0,external_vue_.createVNode)("br"),
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "127"),
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Linux" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# TODO..."),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
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
  _push(`</div><p>For small projects with a single developer (as in the example above), the repository usually consists of a single chain of commits, as visualized in `)
  _push((0,server_renderer.ssrRenderComponent)(_component_FigureNumber, null, null, _parent))
  _push(` below (<code>Commit 4</code> is the latest commit):</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_Figure, { caption: "Visualization of the commits in a repository with 4 commits." }, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="language-text ext-text line-numbers-mode"${
          _scopeId
        }><pre class="language-text"${
          _scopeId
        }><code${
          _scopeId
        }>Commit 1      &lt;--      Commit 2      &lt;--      Commit 3      &lt;--      Commit 4
</code></pre><div class="line-numbers"${
          _scopeId
        }><span class="line-number"${
          _scopeId
        }>1</span><br${
          _scopeId
        }></div></div>`)
      } else {
        return [
          (0,external_vue_.createVNode)("div", { class: "language-text ext-text line-numbers-mode" }, [
            (0,external_vue_.createVNode)("pre", { class: "language-text" }, [
              (0,external_vue_.createVNode)("code", null, "Commit 1      <--      Commit 2      <--      Commit 3      <--      Commit 4\n")
            ]),
            (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
              (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
              (0,external_vue_.createVNode)("br")
            ])
          ])
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<p>As long as we don&#39;t make use of branches, the repository will always consist of a sequence of commits like that (we will introduce branches in next lecture).</p><p>To view all the commits in the repository (on the branch you are working on), you can use the command <code>git log</code> (it doesn&#39;t show how the files in each commit has been changed, but that info is stored in each commit too).</p><div class="custom-container tip"><p class="custom-container-title">Example (continuation of previous example)</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-powershell ext-powershell line-numbers-mode"${
                _scopeId
              }><pre class="language-powershell"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }># Show all commits.</span>
\$ git log
    commit 25bdb4c8b4e1d00e9cb885ff8d3a9b85cdafec17 <span class="token punctuation"${
                _scopeId
              }>(</span>HEAD <span class="token operator"${
                _scopeId
              }>-</span>&gt; master<span class="token punctuation"${
                _scopeId
              }>)</span>
    Author: Peter L<span class="token operator"${
                _scopeId
              }>-</span>G &lt;my<span class="token punctuation"${
                _scopeId
              }>.</span>email@site<span class="token punctuation"${
                _scopeId
              }>.</span>com&gt;
    Date:   Wed Apr 24 11:24:53 2019 <span class="token operator"${
                _scopeId
              }>+</span>0200

        The second commit<span class="token punctuation"${
                _scopeId
              }>.</span>

    commit 543ec8a30c37a037d500af5db985e2175f808458
    Author: Peter L<span class="token operator"${
                _scopeId
              }>-</span>G &lt;my<span class="token punctuation"${
                _scopeId
              }>.</span>email@site<span class="token punctuation"${
                _scopeId
              }>.</span>com&gt;
    Date:   Wed Apr 24 11:21:50 2019 <span class="token operator"${
                _scopeId
              }>+</span>0200

        The first commit<span class="token punctuation"${
                _scopeId
              }>.</span>
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
                (0,external_vue_.createVNode)("div", { class: "language-powershell ext-powershell line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-powershell" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Show all commits."),
                      (0,external_vue_.createTextVNode)("\n$ git log\n    commit 25bdb4c8b4e1d00e9cb885ff8d3a9b85cdafec17 "),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createTextVNode)("HEAD "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("> master"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n    Author: Peter L"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("G <my"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("email@site"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("com>\n    Date:   Wed Apr 24 11:24:53 2019 "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)("0200\n\n        The second commit"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("\n\n    commit 543ec8a30c37a037d500af5db985e2175f808458\n    Author: Peter L"),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                      (0,external_vue_.createTextVNode)("G <my"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("email@site"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("com>\n    Date:   Wed Apr 24 11:21:50 2019 "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                      (0,external_vue_.createTextVNode)("0200\n\n        The first commit"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
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
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Linux" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-bash ext-sh line-numbers-mode"${
                _scopeId
              }><pre class="language-bash"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token comment"${
                _scopeId
              }># TODO</span>
</code></pre><div class="line-numbers"${
                _scopeId
              }><span class="line-number"${
                _scopeId
              }>1</span><br${
                _scopeId
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "# TODO"),
                      (0,external_vue_.createTextVNode)("\n")
                    ])
                  ]),
                  (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                    (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Windows PowerShell" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-powershell ext-powershell line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-powershell" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# Show all commits."),
                    (0,external_vue_.createTextVNode)("\n$ git log\n    commit 25bdb4c8b4e1d00e9cb885ff8d3a9b85cdafec17 "),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createTextVNode)("HEAD "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("> master"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n    Author: Peter L"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("G <my"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("email@site"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("com>\n    Date:   Wed Apr 24 11:24:53 2019 "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createTextVNode)("0200\n\n        The second commit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("\n\n    commit 543ec8a30c37a037d500af5db985e2175f808458\n    Author: Peter L"),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "-"),
                    (0,external_vue_.createTextVNode)("G <my"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("email@site"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("com>\n    Date:   Wed Apr 24 11:21:50 2019 "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "+"),
                    (0,external_vue_.createTextVNode)("0200\n\n        The first commit"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
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
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Linux" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-bash ext-sh line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-bash" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "# TODO"),
                    (0,external_vue_.createTextVNode)("\n")
                  ])
                ]),
                (0,external_vue_.createVNode)("div", { class: "line-numbers" }, [
                  (0,external_vue_.createVNode)("span", { class: "line-number" }, "1"),
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
  _push(`</div><h3 id="switching-versions" tabindex="-1"><a class="header-anchor" href="#switching-versions" aria-hidden="true">#</a> Switching versions</h3><p>To view a specific version of the project, you simply tell Git <em>Show me the files as they looked like in commit <code>XXX</code></em>, where <code>XXX</code> is the unique identifier for the commit. When you do this, Git will change the files and folders in the project folder so they look precisely the way they did in commit <code>XXX</code>. The command used for this is <code>git reset XXX</code>. It is easy as that to jump between different versions of your source code! However, you better first learn about the HEAD pointer in Git before you create new commits after you have run this command.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You can&#39;t use the command <code>git reset XXX</code> if you have made changes to the source files you haven&#39;t committed yet (because then those changes would be lost).</p></div><h3 id="the-head-pointer" tabindex="-1"><a class="header-anchor" href="#the-head-pointer" aria-hidden="true">#</a> The HEAD pointer</h3><p>In Git, each repository also contains a pointer called HEAD. It points to the branch you are currently working on, but since we avoid introducing branches in this lecture, you can for now see it as that the HEAD pointer points to the last commit you&#39;ve created/the commit you are currently working on. That&#39;s how Git knows which the &quot;previous commit&quot; should be when you create a new commit: it simply uses the commit the HEAD pointer points to as the previous commit, and then when you create a new commit it changes the HEAD pointer to point to the newly created commit.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you have created two commits, it would look like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                        HEAD
                          ↓
Commit 1      &lt;--      Commit 2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you then create a third commit, it will look like this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                                               HEAD
                                                 ↓
Commit 1      &lt;--      Commit 2      &lt;--      Commit 3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>When you use the command <code>git reset XXX</code>, Git will change the files in your project folder to look the way they did in commit <code>XXX</code>, but it will not change the HEAD pointer to point to commit <code>XXX</code>. If you use the command <code>git reset XXX</code> to change the files so they look the way they did in <code>Commit 2</code> above, and then make changes and create a new commit, then you would end up with this:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                                                                      HEAD
                                                                        ↓
Commit 1      &lt;--      Commit 2      &lt;--      Commit 3      &lt;--      Commit 4
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>That is, Commit 3 will still be in the chain of commits, but Commit 4 is rather a continuation of Commit 2.</p></div><p>If you want to switch to an earlier commit and change the HEAD pointer to point to that earlier commit, you can use the command <code>git reset --hard XXX</code>.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If you have the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                                               HEAD
                                                 ↓
Commit 1      &lt;--      Commit 2      &lt;--      Commit 3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>And then use <code>git reset --hard XXX</code> to change the source files to what they looked like in Commit 2, you would end up with the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                        HEAD
                          ↓
Commit 1      &lt;--      Commit 2      &lt;--      Commit 3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you now create a new commit, you would end up with the following:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>                        HEAD
                          ↓
                       Commit 4
                          ↓
Commit 1      &lt;--      Commit 2      &lt;--      Commit 3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><p>Using <code>git reset --hard XXX</code> creates a new branch (or rather: the first commit after this command creates a new branch). It is not recommended to create branches this way, because you can forget commits (<code>git log</code> only displays the chain of commits the HEAD pointer points to, so you need to remember the other commits not part of this chain yourself (<code>Commit 3</code> in the example above)). So don&#39;t create branches this way; Git has better support for working with branches through various commands which we will cover in next lecture. But this serve as a good example of how you should think of commits and the HEAD pointer.</p><h2 id="when-to-commit" tabindex="-1"><a class="header-anchor" href="#when-to-commit" aria-hidden="true">#</a> When to commit</h2><p>A good question is <em>How do I know when it is time to create a new commit?</em> Is it good practice to create a new commit each day? Or should you create commits more often than that? Or less? Or is it the size of the commit (how many lines of you code you have removed/added/modified since the previous commit) that determines when to create a new commit? Are changes including 200 lines of code a good size of a commit? Well, it turns out that the best practice has nothing to do with these properties.</p><p>A good commit should contain a single new feature you have added to the project, or a bug that you have fixed, or similar. This way, it makes more sense to browse through the log of all commits afterwards. If it takes you 1 hour or 10 days to implement the feature/fix the bug, or if it requires changes to 20 lines of code or 2000 lines of code doesn&#39;t matter, although it is good to avoid commits with too big changes. If the feature you should implement is quite big, try to break it down into more smaller features, e.g. instead of implementing the feature <em>Manage blogposts</em> on a website, break it down into these features:</p><ul><li>Create blog posts</li><li>Read blog posts</li><li>Update blog posts</li><li>Delete blog posts</li></ul><p>This way, you end up with 4 smaller commits, instead of one large commit.</p><p>The best way to make use of a version control system is to work in a very structured way. Always before you start to write/change code in the project, you must have a goal that you want to achieve (the feature to implement or the bug to fix), and when this goal has been achieved, it is time to create a new commit.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the project is about writing a book, then it could be suitable to create a new commit each time you&#39;re done writing a chapter in the book. If spelling mistakes later are discovered, or if you want to improve a chapter by rephrasing sentences or paragraphs, then it could be suitable to create a new commit after each correction/rephrasing.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the project is about creating a website, then it could be suitable to create a new commit each time you have implemented a new webpage on the website. If you later discover a bug or want to improve a webpage, you create a new commit when you have fixed the bug/improved that webpage.</p></div><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the project is about completing some lab assignments, then it could be suitable to create a new commit each time you have completed one of the assignments and each time you have fixed a mistake in an assignment you thought you had previously completed but now have corrected.</p></div><h2 id="using-git-through-a-gui" tabindex="-1"><a class="header-anchor" href="#using-git-through-a-gui" aria-hidden="true">#</a> Using Git through a GUI</h2><p>There exist applications with graphical user interfaces you can use to manage your Git repositories. This includes many IDE:s you can use to write source code. By using such an application, you don&#39;t need to remember all the details about the Git commands (arguments and flags), so this can be an easier way for you to get started with Git. However, these applications use the Git commands under the hood for you, so it is still good have a basic understanding of how the different Git commands work, because your workflow when using Git (creating commits, etc.) is the same no matter if you use it through a graphical user interface or a command line interface.</p><h2 id="practising" tabindex="-1"><a class="header-anchor" href="#practising" aria-hidden="true">#</a> Practising</h2><p>Play around with <a href="http://git-school.github.io/visualizing-git/#free" target="_blank" rel="noopener noreferrer">Visualizing Git`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> to learn how commits work. With this tool, you never use <code>git add</code>; just use <code>git commit -m &quot;Message&quot;</code> directly to create a new commit, and imagine that the commit contains changed/new files. You can also try to use <code>git reset --hard XXX</code>.</p><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><p>If you want to learn more about the basics in Git, read the following chapters from <a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer">Pro Git`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a> by <em>Scott Chacon</em> and <em>Ben Straub</em> (available for free online in multiple different formats):</p><ul><li><a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control" target="_blank" rel="noopener noreferrer">Chapter 1: Getting Started`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository" target="_blank" rel="noopener noreferrer">Chapter 2: Git Basics`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a><ul><li>You can skip the parts about using a remote repository (<code>git clone</code>, <code>git pull</code>, <code>git push</code>, ...); that&#39;s something you&#39;ll learn in the third lecture</li></ul></li></ul><p>If you find it a bit hard to start using Git, <a href="https://xkcd.com/1597/" target="_blank" rel="noopener noreferrer">you&#39;re not alone`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>.</p><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/git-basics/index.html.vue?vue&type=template&id=54f919db

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/git-basics/index.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const index_html = (__exports__);

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

/***/ 8472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-052963ee",
  "path": "/lectures/git-basics/",
  "title": "Git Basics",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Git Basics"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Why use a version control system?",
      "slug": "why-use-a-version-control-system",
      "children": [
        {
          "level": 3,
          "title": "Benefit 1: Knowing when what changed",
          "slug": "benefit-1-knowing-when-what-changed",
          "children": []
        },
        {
          "level": 3,
          "title": "Benefit 2: Keeping track of who did what",
          "slug": "benefit-2-keeping-track-of-who-did-what",
          "children": []
        },
        {
          "level": 3,
          "title": "Benefit 3: Dealing with concurrent changes",
          "slug": "benefit-3-dealing-with-concurrent-changes",
          "children": []
        },
        {
          "level": 3,
          "title": "Benefit 4: Backups",
          "slug": "benefit-4-backups",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "How does Git work?",
      "slug": "how-does-git-work",
      "children": [
        {
          "level": 3,
          "title": "Repositories",
          "slug": "repositories",
          "children": []
        },
        {
          "level": 3,
          "title": "Commits (versions)",
          "slug": "commits-versions",
          "children": []
        },
        {
          "level": 3,
          "title": "Switching versions",
          "slug": "switching-versions",
          "children": []
        },
        {
          "level": 3,
          "title": "The HEAD pointer",
          "slug": "the-head-pointer",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "When to commit",
      "slug": "when-to-commit",
      "children": []
    },
    {
      "level": 2,
      "title": "Using Git through a GUI",
      "slug": "using-git-through-a-gui",
      "children": []
    },
    {
      "level": 2,
      "title": "Practising",
      "slug": "practising",
      "children": []
    },
    {
      "level": 2,
      "title": "Recommended reading",
      "slug": "recommended-reading",
      "children": []
    }
  ],
  "filePathRelative": "lectures/git-basics/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=583.app.js.map