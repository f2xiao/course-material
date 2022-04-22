"use strict";
exports.id = 2930;
exports.ids = [2930];
exports.modules = {

/***/ 9395:
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
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/web-security/index.html.vue?vue&type=template&id=2b646c7a



function ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_OutboundLink = (0,external_vue_.resolveComponent)("OutboundLink")
  const _component_CodeGroup = (0,external_vue_.resolveComponent)("CodeGroup")
  const _component_CodeGroupItem = (0,external_vue_.resolveComponent)("CodeGroupItem")

  _push(`<!--[--><h1 id="web-security" tabindex="-1"><a class="header-anchor" href="#web-security" aria-hidden="true">#</a> Web Security</h1><p>Many web applications contains security vulnerabilities hackers can exploit. Let&#39;s take a look at the most commonly used ones, and how we can prevent them.</p><iframe width="560" height="314" src="https://www.youtube.com/embed/T5QJR3iXvZg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="web-security.pdf">web-security.pdf</a></li><li><a href="web-security.pptx">web-security.pptx</a></li></ul><h2 id="fun-from-xkcd" tabindex="-1"><a class="header-anchor" href="#fun-from-xkcd" aria-hidden="true">#</a> Fun from xkcd:</h2><ul><li><a href="https://xkcd.com/463/" target="_blank" rel="noopener noreferrer">Voting Machines`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://xkcd.com/327/" target="_blank" rel="noopener noreferrer">Exploits of a Mom`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://xkcd.com/538/" target="_blank" rel="noopener noreferrer">Security`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2><ul><li><a href="https://owasp.org/Top10/A00_2021_Introduction/" target="_blank" rel="noopener noreferrer">OWASP Top 10:2021`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.cnet.com/news/2019-data-breach-hall-of-shame-these-were-the-biggest-data-breaches-of-the-year/" target="_blank" rel="noopener noreferrer">2019 Data Breach Hall of Shame: These were the biggest data breaches of the year`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><p>The rest of the recommended readings are primarily articles giving examples of vulnerabilities that have existed. You don&#39;t need to read all of them, but look through a few to get a good understanding of what a vulnerability can be in practice.</p><h3 id="hardware-related-articles" tabindex="-1"><a class="header-anchor" href="#hardware-related-articles" aria-hidden="true">#</a> Hardware related articles</h3><ul><li><a href="https://it.slashdot.org/story/21/11/15/2249200/high-severity-bios-flaws-affect-numerous-intel-processors" target="_blank" rel="noopener noreferrer">High Severity BIOS Flaws Affect Numerous Intel Processors`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://hardware.slashdot.org/story/21/11/15/2233229/ddr4-memory-protections-are-broken-wide-open-by-new-rowhammer-technique" target="_blank" rel="noopener noreferrer">DDR4 Memory Protections Are Broken Wide Open By New Rowhammer Technique`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://mobile.slashdot.org/story/21/12/05/049252/nine-wifi-routers-used-by-millions-were-vulnerable-to-226-flaws" target="_blank" rel="noopener noreferrer">Nine WiFi Routers Used by Millions Were Vulnerable to 226 Flaws`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="os-related-articles" tabindex="-1"><a class="header-anchor" href="#os-related-articles" aria-hidden="true">#</a> OS related articles</h3><ul><li><a href="https://linux.slashdot.org/story/21/04/29/2115235/new-malware-found-lurking-in-64-bit-linux-installs" target="_blank" rel="noopener noreferrer">New Malware Found Lurking In 64-Bit Linux Installs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="framework-library-related-articles" tabindex="-1"><a class="header-anchor" href="#framework-library-related-articles" aria-hidden="true">#</a> Framework/Library related articles</h3><ul><li><a href="https://github.com/faisalman/ua-parser-js/issues/536#issuecomment-949742904" target="_blank" rel="noopener noreferrer">Example of hijacked npm package`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://snyk.io/blog/sequelize-orm-npm-library-found-vulnerable-to-sql-injection-attacks/" target="_blank" rel="noopener noreferrer">Sequelize ORM npm library found vulnerable to SQL Injection attacks`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>* <a href="https://www.bleepingcomputer.com/news/security/somebody-tried-to-hide-a-backdoor-in-a-popular-javascript-npm-package/" target="_blank" rel="noopener noreferrer">Somebody Tried to Hide a Backdoor in a Popular JavaScript npm Package`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.bleepingcomputer.com/news/security/popular-coa-npm-library-hijacked-to-steal-user-passwords/" target="_blank" rel="noopener noreferrer">Popular &#39;coa&#39; NPM library hijacked to steal user passwords`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://blog.npmjs.org/post/175824896885/incident-report-npm-inc-operations-incident-of" target="_blank" rel="noopener noreferrer">Incident report: npm, Inc. operations incident of July 12, 2018`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.theregister.co.uk/2018/06/05/zip_slip_bug_archives/" target="_blank" rel="noopener noreferrer">Loose .zips sink chips: How poisoned archives can hack your computer`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://robertchen.cc/blog/2021/09/20/npm-rce" target="_blank" rel="noopener noreferrer">5 RCEs in npm for \$15,000`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="app-related-articles" tabindex="-1"><a class="header-anchor" href="#app-related-articles" aria-hidden="true">#</a> App related articles</h3><ul><li><a href="https://motherboard.vice.com/en_us/article/wnjwb4/the-myspace-worm-that-changed-the-internet-forever" target="_blank" rel="noopener noreferrer">The MySpace Worm that Changed the Internet Forever`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.zdnet.com/article/tweetdeck-wasnt-actually-hacked-and-everyone-was-silly/" target="_blank" rel="noopener noreferrer">TweetDeck wasn&#39;t actually hacked, and everyone was silly`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://motherboard.vice.com/en_us/article/9kmj4v/spyware-company-spyfone-terabytes-data-exposed-online-leak" target="_blank" rel="noopener noreferrer">Spyware Company Leaves ‘Terabytes’ of Selfies, Text Messages, and Location Data Exposed Online`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.checkmarx.com/2018/01/23/tinder-someone-may-watching-swipe-2/" target="_blank" rel="noopener noreferrer">Are You on Tinder? Someone May Be Watching You Swipe`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.forbes.com/sites/thomasbrewster/2018/09/29/how-facebook-was-hacked-and-why-its-a-disaster-for-internet-security/#521220f82033" target="_blank" rel="noopener noreferrer">How Facebook Was Hacked And Why It&#39;s A Disaster For Internet Security`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/20/10/02/2057240/a-security-flaw-in-grindr-let-anyone-easily-hijack-user-accounts" target="_blank" rel="noopener noreferrer">A Security Flaw In Grindr Let Anyone Easily Hijack User Accounts`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.bleepingcomputer.com/news/security/starbucks-devs-leave-api-key-in-github-public-repo/" target="_blank" rel="noopener noreferrer">Starbucks Devs Leave API Key in GitHub Public Repo`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.zdnet.com/article/cryptocurrency-wallet-caught-sending-user-passwords-to-googles-spellchecker/" target="_blank" rel="noopener noreferrer">Cryptocurrency wallet caught sending user passphrases to Google&#39;s spellchecker`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/20/06/16/2157228/dating-apps-exposed-845gb-of-explicit-photos-chats-and-more" target="_blank" rel="noopener noreferrer">Dating Apps Exposed 845GB of Explicit Photos, Chats, and More`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://techcrunch.com/2019/12/24/twitter-android-bug-phone-numbers/" target="_blank" rel="noopener noreferrer">A Twitter app bug was used to match 17 million phone numbers to user accounts`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.svt.se/nyheter/inrikes/undermalig-sakerhet-i-piras-app-workish" target="_blank" rel="noopener noreferrer">Undermålig säkerhet i artisten Linda Piras app Workish`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.vpnmentor.com/blog/report-biostar2-leak/" target="_blank" rel="noopener noreferrer">Report: Data Breach in Biometric Security Platform Affecting Millions of Users`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.csoonline.com/article/3385525/critical-magento-sql-injection-flaw-could-be-targeted-by-hackers-soon.html" target="_blank" rel="noopener noreferrer">Critical Magento SQL injection flaw could be targeted by hackers soon`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/21/10/08/1938200/brewdog-exposes-data-of-200000-customers-and-shareholders" target="_blank" rel="noopener noreferrer">BrewDog Exposes Data of 200,000 Customers and Shareholders`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/21/04/30/2213244/click-studios-asks-customers-to-stop-tweeting-about-its-passwordstate-data-breach" target="_blank" rel="noopener noreferrer">Click Studios Asks Customers To Stop Tweeting About Its Passwordstate Data Breach`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://tech.slashdot.org/story/21/04/22/2035245/a-new-facebook-bug-exposes-millions-of-email-addresses" target="_blank" rel="noopener noreferrer">A New Facebook Bug Exposes Millions of Email Addresses`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/21/10/28/1415201/a-security-bug-in-health-app-docket-exposed-covid-19-vaccine-records" target="_blank" rel="noopener noreferrer">A Security Bug in Health App Docket Exposed COVID-19 Vaccine Records`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/21/10/28/209235/zalescom-leaked-customer-data-just-like-sister-firms-jared-and-kay-jewelers-did-in-2018" target="_blank" rel="noopener noreferrer">Zales.com Leaked Customer Data, Just Like Sister Firms Jared and Kay Jewelers Did In 2018`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/21/12/07/2225251/line-pay-leaks-around-133000-users-data-to-github" target="_blank" rel="noopener noreferrer">LINE Pay Leaks Around 133,000 Users&#39; Data To GitHub`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://tech.slashdot.org/story/21/04/28/1828223/digitalocean-says-customer-billing-data-exposed-by-a-security-flaw" target="_blank" rel="noopener noreferrer">DigitalOcean Says Customer Billing Data &#39;Exposed&#39; by a Security Flaw`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/21/04/29/1833204/experian-api-exposed-credit-scores-of-most-americans" target="_blank" rel="noopener noreferrer">Experian API Exposed Credit Scores of Most Americans`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a>* <a href="https://news.slashdot.org/story/21/07/23/2314256/hole-blasted-in-guntrader-uk-firearms-sales-websites-crm-database-breached-111k-users-info-spilled-online" target="_blank" rel="noopener noreferrer">Hole Blasted In Guntrader: UK Firearms Sales Website&#39;s CRM Database Breached, 111K Users&#39; Info Spilled Online`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://slashdot.org/story/21/07/02/2314202/apps-with-58-million-google-play-downloads-stole-users-facebook-passwords" target="_blank" rel="noopener noreferrer">Apps With 5.8 Million Google Play Downloads Stole Users&#39; Facebook Passwords`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://news.slashdot.org/story/21/11/08/2212205/robinhood-says-it-was-hacked-and-extorted-but-nobody-lost-any-money" target="_blank" rel="noopener noreferrer">Robinhood Says It Was Hacked and Extorted But Nobody Lost Any Money`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/21/03/29/2119238/incompetent-developers-blamed-for-nz-patient-privacy-breach-of-covid-19-vaccine-booking-systems" target="_blank" rel="noopener noreferrer">&#39;Incompetent Developers&#39; Blamed For NZ Patient Privacy Breach of COVID-19 Vaccine Booking Systems`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/20/01/06/2018246/unpatched-us-government-website-gets-pwned-by-pro-iran-script-kiddie" target="_blank" rel="noopener noreferrer">Unpatched US Government Website Gets Pwned By Pro-Iran Script Kiddie`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://blog.shoebpatel.com/2021/01/23/The-Secret-Parameter-LFR-and-Potential-RCE-in-NodeJS-Apps/" target="_blank" rel="noopener noreferrer">The Secret Parameter, LFR, and Potential RCE in NodeJS Apps`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="app-with-device-related-articles" tabindex="-1"><a class="header-anchor" href="#app-with-device-related-articles" aria-hidden="true">#</a> App with device related articles</h3><ul><li><a href="https://it.slashdot.org/story/18/06/18/2016220/" target="_blank" rel="noopener noreferrer">The &#39;World&#39;s Worst&#39; Smart Padlock Is Even Worse Than Previously Thought`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/21/01/11/1737218/hacker-locks-internet-connected-chastity-cage-demands-ransom" target="_blank" rel="noopener noreferrer">Hacker Locks Internet-Connected Chastity Cage, Demands Ransom`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.cnet.com/news/smart-alarms-left-3m-cars-vulnerable-to-hackers-who-could-turn-off-motors/" target="_blank" rel="noopener noreferrer">Smart alarms left 3 million cars vulnerable to hackers who could turn off motors`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/20/11/23/2318230/smart-doorbells-for-sale-on-amazon-ebay-came-stocked-with-security-vulnerabilities" target="_blank" rel="noopener noreferrer">&#39;Smart&#39; Doorbells For Sale On Amazon, eBay Came Stocked With Security Vulnerabilities`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://yro.slashdot.org/story/21/07/02/2043258/passwords-in-amazon-echo-dots-live-on-even-after-you-factory-reset-the-device" target="_blank" rel="noopener noreferrer">Passwords In Amazon Echo Dots Live On Even After You Factory-Reset the Device`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="web-browser-related" tabindex="-1"><a class="header-anchor" href="#web-browser-related" aria-hidden="true">#</a> Web browser related</h3><ul><li><a href="https://it.slashdot.org/story/21/05/14/2044200/scheme-flooding-technique-may-be-used-to-deanonymize-you" target="_blank" rel="noopener noreferrer">&#39;Scheme Flooding&#39; Technique May Be Used To Deanonymize You`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/" target="_blank" rel="noopener noreferrer">Race conditions in security dialogs`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://arstechnica.com/information-technology/2018/05/malicious-chrome-extensions-infect-more-than-100000-users-again/" target="_blank" rel="noopener noreferrer">Malicious Chrome extensions infect 100,000-plus users, again`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/21/02/09/1920256/browser-favicons-can-be-used-as-undeletable-supercookies-to-track-you-online" target="_blank" rel="noopener noreferrer">Browser &#39;Favicons&#39; Can Be Used as Undeletable &#39;Supercookies&#39; To Track You Online`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.bleepingcomputer.com/news/security/css-is-so-overpowered-it-can-deanonymize-facebook-users/" target="_blank" rel="noopener noreferrer">CSS Is So Overpowered It Can Deanonymize Facebook Users`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://www.zdnet.com/article/google-chrome-impacted-by-new-magellan-2-0-vulnerabilities/?mid=1" target="_blank" rel="noopener noreferrer">Google Chrome impacted by new Magellan 2.0 vulnerabilities`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h3 id="various-articles" tabindex="-1"><a class="header-anchor" href="#various-articles" aria-hidden="true">#</a> Various articles</h3><ul><li><a href="https://tech.slashdot.org/story/21/02/09/2134244/cops-are-playing-music-while-citizens-are-filming-to-trigger-copyright-filters" target="_blank" rel="noopener noreferrer">Cops Are Playing Music While Citizens Are Filming To Trigger Copyright Filters`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://it.slashdot.org/story/21/02/10/2343251/breached-water-plant-employees-used-the-same-teamviewer-password-and-no-firewall" target="_blank" rel="noopener noreferrer">Breached Water Plant Employees Used the Same TeamViewer Password and No Firewall`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://news.slashdot.org/story/21/11/18/2227206/thousands-of-firefox-users-accidentally-commit-login-cookies-on-github" target="_blank" rel="noopener noreferrer">Thousands of Firefox Users Accidentally Commit Login Cookies On GitHub`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li><li><a href="https://developers.slashdot.org/story/21/11/20/1954259/github-fixes-a-private-package-names-leak-and-serious-authorization-bug" target="_blank" rel="noopener noreferrer">GitHub Fixes a Private-Package-Names Leak and Serious Authorization Bug`)
  _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent))
  _push(`</a></li></ul><h2 id="cross-site-scripting-xss" tabindex="-1"><a class="header-anchor" href="#cross-site-scripting-xss" aria-hidden="true">#</a> Cross-Site Scripting (XSS)</h2><h3 id="vulnerability" tabindex="-1"><a class="header-anchor" href="#vulnerability" aria-hidden="true">#</a> Vulnerability</h3><p>The vulnerability Cross-Site Scripting (XSS) is when a hacker manage to inject client-side code (HTML, CSS or JavaScript, etc.) on your website that is executed by your users&#39; web browsers when they visit your website. By injecting client-side JavaScript code a hacker can tell the users&#39; web browsers to do some bad things for the user, such as:</p><ul><li>Read information found on the webpage (which might be sensitive information about the user if she has logged in to an account) and then send that information to the hacker&#39;s own server in an HTTP request.</li><li>Send HTTP requests to various websites. These websites will think the requests are intentionally sent by the user, so they will happily carry out the requests. This is especially troublesome if the user has logged in to an account on these websites.</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>In the search form below users should be able to enter search terms, and then get back a list with the search result. To indicate to the user what she has searched for, it also displays the search term. In this example, the search result is never displayed, only what the user searched for. Try entering a search term containing HTML code, for example <code>&lt;b&gt;Hi!&lt;/b&gt;</code>, or <code>&lt;b onclick=&quot;alert(&#39;Hi!&#39;)&quot;&gt;Click me!&lt;/b&gt;</code> (client-side JavaScript must be enabled in your web browser for the example to work). Although these examples are not harmful to the user, it shows the potential danger with the vulnerability if a hacker takes advantage of it.</p><form onsubmit="event.preventDefault(); document.getElementById(&#39;rrr&#39;).innerHTML = &#39;You searched for: &#39;+document.getElementById(&#39;sss&#39;).value"><p> Search: <input id="sss"><input type="submit" value="Go"></p></form><p id="rrr"></p></div><h3 id="protection" tabindex="-1"><a class="header-anchor" href="#protection" aria-hidden="true">#</a> Protection</h3><p>When data comes from an untrusted source (for example a user or a third-party application you are using) you must escape the HTML code before sending it to the web browser as part of the webpage in the HTTP response. You can escape the data by replacing the following characters in it (the characters that have special meaning in HTML syntax) with their corresponding entity names:</p><ul><li><code>&lt;</code> can be replaced with <code>&amp;lt;</code>.</li><li><code>&gt;</code> can be replaced with <code>&amp;gt;</code>.</li><li><code>&quot;</code> can be replaced with <code>&amp;quot;</code>.</li><li><code>&#39;</code> can be replaced with <code>&amp;apos;</code>.</li></ul><p>When the web browser for example sees <code>&amp;lt;</code>, it will display the <code>&lt;</code> character.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>With proper protection, the search form in the previous example would work like the one shown below (client-side JavaScript must be enabled in your web browser for the example to work).</p><form onsubmit="event.preventDefault(); document.getElementById(&#39;rrrr&#39;).innerText = &#39;You searched for: &#39;+document.getElementById(&#39;ssss&#39;).value"><p> Search: <input id="ssss"><input type="submit" value="Go"></p></form><p id="rrrr"></p></div>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Node.js/Express" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${_scopeId}> When you use \`request.send(&quot;Input from a client.&quot;)\` you are responsible for escaping the input yourself. When you pass input to a view, the view engine usually escapes the data for you. For example, when using Handlebars as your view engine, data you insert into the view using \`{{expression}}\` will escape the HTML code in \`expression\`. This is usually what you want to happen, but if you for some reason don&#39;t want that, you can use \`{{{expression}}}\`, which won&#39;t escape the HTML code in \`expression\`, but then you are responsible to make sure that no XSS vulnerability exists. </p>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, " When you use `request.send(\"Input from a client.\")` you are responsible for escaping the input yourself. When you pass input to a view, the view engine usually escapes the data for you. For example, when using Handlebars as your view engine, data you insert into the view using `{{expression}}` will escape the HTML code in `expression`. This is usually what you want to happen, but if you for some reason don't want that, you can use `{{{expression}}}`, which won't escape the HTML code in `expression`, but then you are responsible to make sure that no XSS vulnerability exists. ")
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "PHP" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>PHP has a function called <a href="https://www.php.net/manual/en/function.htmlspecialchars.php" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>htmlspecialchars()`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a> you can use to escape HTML code.</p>`)
            } else {
              return [
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("PHP has a function called "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://www.php.net/manual/en/function.htmlspecialchars.php",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("htmlspecialchars()"),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(" you can use to escape HTML code.")
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Node.js/Express" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, " When you use `request.send(\"Input from a client.\")` you are responsible for escaping the input yourself. When you pass input to a view, the view engine usually escapes the data for you. For example, when using Handlebars as your view engine, data you insert into the view using `{{expression}}` will escape the HTML code in `expression`. This is usually what you want to happen, but if you for some reason don't want that, you can use `{{{expression}}}`, which won't escape the HTML code in `expression`, but then you are responsible to make sure that no XSS vulnerability exists. ")
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "PHP" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("PHP has a function called "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://www.php.net/manual/en/function.htmlspecialchars.php",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("htmlspecialchars()"),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(" you can use to escape HTML code.")
              ])
            ]),
            _: 1
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<h2 id="cross-site-request-forgery-csrf" tabindex="-1"><a class="header-anchor" href="#cross-site-request-forgery-csrf" aria-hidden="true">#</a> Cross-Site Request Forgery (CSRF)</h2><h3 id="vulnerability-1" tabindex="-1"><a class="header-anchor" href="#vulnerability-1" aria-hidden="true">#</a> Vulnerability</h3><p>The vulnerability Cross-Site Request Forgery (CSRF) is about tricking the user&#39;s web browser into sending HTTP requests to other websites that is gainable for the hacker. This is especially troublesome if the user is logged in to an account on these websites, for example:</p><ol><li>Alice sends her correct login credentials to bank.com.</li><li>bank.com creates a session containing an identifier for Alice&#39;s bank account.</li><li>Alice web browser stores the session&#39;s identifier in a cookie.</li><li>Alice somehow ends up at bad-website.com, which contains client-side code from a hacker.</li><li>The bad client-side code tells Alice&#39;s web browser to send an HTTP request to bank.com to transfer \$1000 to the hacker&#39;s own bank account. Since Alice before logged in to bank.com, that cookie with the session identifier is attached to the request, so to bank.com it looks like the HTTP request is intentionally sent by Alice, so bank.com carries out the request.</li></ol><h2 id="sql-injection" tabindex="-1"><a class="header-anchor" href="#sql-injection" aria-hidden="true">#</a> SQL injection</h2><h3 id="vulnerability-2" tabindex="-1"><a class="header-anchor" href="#vulnerability-2" aria-hidden="true">#</a> Vulnerability</h3><p>The vulnerability SQL injection is when a hacker manages to alter an SQL query the web application sends to the database. This happen when the web application tries to dynamically build the SQL query with some values it has received from the client, and the hacker can alter the query by providing a carefully chosen value.</p><p>Imagine a website containing user accounts. The URI <code>/accounts/ACCOUNT_ID</code> is used to identify the account with the id <code>ACCOUNT_ID</code>. For example, <code>/accounts/3</code> identifies the account with the id <code>3</code>. When a GET request for this URI is received, the web application needs to send a query like <code>SELECT * FROM accounts WHERE id = ACCOUNT_ID</code> to the database. If that query is dynamically generated like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;/accounts/:ACCOUNT_ID&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> <span class="token constant">ACCOUNT_ID</span> <span class="token operator">=</span> request<span class="token punctuation">.</span>params<span class="token punctuation">.</span><span class="token constant">ACCOUNT_ID</span>
    
    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM accounts WHERE id = &quot;</span><span class="token operator">+</span><span class="token constant">ACCOUNT_ID</span>
    
    <span class="token comment">// Send query to DB.</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Then the hacker can use a clever <code>ACCOUNT_ID</code> to alter the query sent to the database. If an expected account id like <code>3</code> is used, then the query sent to the database will be <code>SELECT * FROM accounts WHERE id = 3</code>, but if the hacker uses an account id like <code>-1 OR username = &#39;Alice&#39;</code>, then the query sent to the database will be <code>SELECT * FROM accounts WHERE id = -1 OR username = &#39;Alice&#39;</code>, which the hacker can use to to retrieve Alice&#39;s account. This might not be a big deal, but if the hacker would use the account id <code>-1 OR password = &#39;abc123&#39;</code>, he would get back the first user to have the password <code>abc123</code>, and can then simply login to that account (assuming passwords aren&#39;t hashed).</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Below you can change the URI and see how the query to the database changes (requires client-side JavaScript to be enabled).</p><p><code>GET /accounts/<input oninput="document.getElementById(&#39;ppp&#39;).innerText = this.value"></code></p><p><code>SELECT * FROM accounts WHERE id = <span id="ppp"></span></code></p></div><h3 id="protection-1" tabindex="-1"><a class="header-anchor" href="#protection-1" aria-hidden="true">#</a> Protection</h3><p>Don&#39;t use input from the client (a query string parameter, a cookie, the body of the request, a dynamic URI parameter, etc.) to dynamically generate SQL queries sent to the database. Instead, use placeholders for dynamic values in the query, and pass the values separately to the database.</p>`)
  _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroup, null, {
    default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "Node.js/Express/SQLite 3" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<div class="language-javascript ext-js line-numbers-mode"${
                _scopeId
              }><pre class="language-javascript"${
                _scopeId
              }><code${
                _scopeId
              }>app<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>get</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string"${
                _scopeId
              }>&quot;/accounts/:ACCOUNT_ID&quot;</span><span class="token punctuation"${
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
              }>const</span> <span class="token constant"${
                _scopeId
              }>ACCOUNT_ID</span> <span class="token operator"${
                _scopeId
              }>=</span> request<span class="token punctuation"${
                _scopeId
              }>.</span>params<span class="token punctuation"${
                _scopeId
              }>.</span><span class="token constant"${
                _scopeId
              }>ACCOUNT_ID</span>
    
    <span class="token keyword"${
                _scopeId
              }>const</span> query <span class="token operator"${
                _scopeId
              }>=</span> <span class="token string"${
                _scopeId
              }>&quot;SELECT * FROM accounts WHERE id = ?&quot;</span>
    <span class="token keyword"${
                _scopeId
              }>const</span> values <span class="token operator"${
                _scopeId
              }>=</span> <span class="token punctuation"${
                _scopeId
              }>[</span><span class="token constant"${
                _scopeId
              }>ACCOUNT_ID</span><span class="token punctuation"${
                _scopeId
              }>]</span>
    
    <span class="token comment"${
                _scopeId
              }>// Send query and values to DB.</span>
    
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
              }></div></div>`)
            } else {
              return [
                (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createTextVNode)("app"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/accounts/:ACCOUNT_ID\""),
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
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "ACCOUNT_ID"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(" request"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createTextVNode)("params"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "ACCOUNT_ID"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" query "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string" }, "\"SELECT * FROM accounts WHERE id = ?\""),
                      (0,external_vue_.createTextVNode)("\n    "),
                      (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                      (0,external_vue_.createTextVNode)(" values "),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token constant" }, "ACCOUNT_ID"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createTextVNode)("\n    \n    "),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send query and values to DB."),
                      (0,external_vue_.createTextVNode)("\n    \n"),
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
                    (0,external_vue_.createVNode)("br")
                  ])
                ])
              ]
            }
          }),
          _: 1
        }, _parent, _scopeId))
        _push((0,server_renderer.ssrRenderComponent)(_component_CodeGroupItem, { title: "PHP" }, {
          default: (0,external_vue_.withCtx)((_, _push, _parent, _scopeId) => {
            if (_push) {
              _push(`<p${
                _scopeId
              }>Using the old (now deprecated) <code${
                _scopeId
              }>mysql_***()</code> functions, you needed to escape untrusted values yourself by calling the function <a href="https://www.php.net/manual/en/function.mysql-real-escape-string.php" target="_blank" rel="noopener noreferrer"${
                _scopeId
              }>mysql_real_escape_string()`)
              _push((0,server_renderer.ssrRenderComponent)(_component_OutboundLink, null, null, _parent, _scopeId))
              _push(`</a>:</p><div class="language-php ext-php line-numbers-mode"${
                _scopeId
              }><pre class="language-php"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token function"${
                _scopeId
              }>mysql_connect</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token comment"${
                _scopeId
              }>/* Connection settings... */</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token variable"${
                _scopeId
              }>\$ACCOUNT_ID</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token variable"${
                _scopeId
              }>\$_GET</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string single-quoted-string"${
                _scopeId
              }>&#39;ACCOUNT_ID&#39;</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token variable"${
                _scopeId
              }>\$result</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>mysql_query</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token string double-quoted-string"${
                _scopeId
              }>&quot;SELECT * FROM accounts WHERE id = &quot;</span><span class="token operator"${
                _scopeId
              }>.</span><span class="token function"${
                _scopeId
              }>mysql_real_escape_string</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$ACCOUNT_ID</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>
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
              }></div></div><p${
                _scopeId
              }>Many programmers often forgot to call this functions, leading to that many SQL injection vulnerabilities existed. To prevent programmers from forgetting this, the <code${
                _scopeId
              }>mysql_***()</code> functions were deprecated, and the <code${
                _scopeId
              }>mysqli_***()</code> functions and PDO were introduced instead. Using the newer <code${
                _scopeId
              }>mysqli_***()</code> functions you use placeholders in prepared statements like this:</p><div class="language-php ext-php line-numbers-mode"${
                _scopeId
              }><pre class="language-php"${
                _scopeId
              }><code${
                _scopeId
              }><span class="token variable"${
                _scopeId
              }>\$connection</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>mysqli_connect</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token comment"${
                _scopeId
              }>/* Connection settings... */</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token variable"${
                _scopeId
              }>\$ACCOUNT_ID</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token variable"${
                _scopeId
              }>\$_GET</span><span class="token punctuation"${
                _scopeId
              }>[</span><span class="token string single-quoted-string"${
                _scopeId
              }>&#39;ACCOUNT_ID&#39;</span><span class="token punctuation"${
                _scopeId
              }>]</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token variable"${
                _scopeId
              }>\$statement</span> <span class="token operator"${
                _scopeId
              }>=</span> <span class="token function"${
                _scopeId
              }>mysqli_prepare</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$connection</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token string double-quoted-string"${
                _scopeId
              }>&quot;SELECT * FROM accounts WHERE id = ?&quot;</span><span class="token punctuation"${
                _scopeId
              }>)</span>

<span class="token function"${
                _scopeId
              }>mysqli_stmt_bind_param</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$statement</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token string double-quoted-string"${
                _scopeId
              }>&quot;i&quot;</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token variable"${
                _scopeId
              }>\$ACCOUNT_ID</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token function"${
                _scopeId
              }>mysqli_stmt_execute</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$statement</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token function"${
                _scopeId
              }>mysqli_stmt_bind_result</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$statement</span><span class="token punctuation"${
                _scopeId
              }>,</span> <span class="token variable"${
                _scopeId
              }>\$result</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>

<span class="token function"${
                _scopeId
              }>mysqli_stmt_fetch</span><span class="token punctuation"${
                _scopeId
              }>(</span><span class="token variable"${
                _scopeId
              }>\$statement</span><span class="token punctuation"${
                _scopeId
              }>)</span><span class="token punctuation"${
                _scopeId
              }>;</span>
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
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("Using the old (now deprecated) "),
                  (0,external_vue_.createVNode)("code", null, "mysql_***()"),
                  (0,external_vue_.createTextVNode)(" functions, you needed to escape untrusted values yourself by calling the function "),
                  (0,external_vue_.createVNode)("a", {
                    href: "https://www.php.net/manual/en/function.mysql-real-escape-string.php",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    (0,external_vue_.createTextVNode)("mysql_real_escape_string()"),
                    (0,external_vue_.createVNode)(_component_OutboundLink)
                  ]),
                  (0,external_vue_.createTextVNode)(":")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-php ext-php line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-php" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysql_connect"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "/* Connection settings... */"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_GET"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'ACCOUNT_ID'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$result"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysql_query"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"SELECT * FROM accounts WHERE id = \""),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "."),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysql_real_escape_string"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
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
                ]),
                (0,external_vue_.createVNode)("p", null, [
                  (0,external_vue_.createTextVNode)("Many programmers often forgot to call this functions, leading to that many SQL injection vulnerabilities existed. To prevent programmers from forgetting this, the "),
                  (0,external_vue_.createVNode)("code", null, "mysql_***()"),
                  (0,external_vue_.createTextVNode)(" functions were deprecated, and the "),
                  (0,external_vue_.createVNode)("code", null, "mysqli_***()"),
                  (0,external_vue_.createTextVNode)(" functions and PDO were introduced instead. Using the newer "),
                  (0,external_vue_.createVNode)("code", null, "mysqli_***()"),
                  (0,external_vue_.createTextVNode)(" functions you use placeholders in prepared statements like this:")
                ]),
                (0,external_vue_.createVNode)("div", { class: "language-php ext-php line-numbers-mode" }, [
                  (0,external_vue_.createVNode)("pre", { class: "language-php" }, [
                    (0,external_vue_.createVNode)("code", null, [
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$connection"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_connect"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token comment" }, "/* Connection settings... */"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_GET"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                      (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'ACCOUNT_ID'"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_prepare"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$connection"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"SELECT * FROM accounts WHERE id = ?\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_bind_param"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"i\""),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_execute"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_bind_result"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                      (0,external_vue_.createTextVNode)(),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$result"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                      (0,external_vue_.createTextVNode)("\n\n"),
                      (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_fetch"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                      (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                      (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
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
      } else {
        return [
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "Node.js/Express/SQLite 3" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("div", { class: "language-javascript ext-js line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-javascript" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createTextVNode)("app"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "get"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"/accounts/:ACCOUNT_ID\""),
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
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "ACCOUNT_ID"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(" request"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createTextVNode)("params"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "ACCOUNT_ID"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" query "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string" }, "\"SELECT * FROM accounts WHERE id = ?\""),
                    (0,external_vue_.createTextVNode)("\n    "),
                    (0,external_vue_.createVNode)("span", { class: "token keyword" }, "const"),
                    (0,external_vue_.createTextVNode)(" values "),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token constant" }, "ACCOUNT_ID"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createTextVNode)("\n    \n    "),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "// Send query and values to DB."),
                    (0,external_vue_.createTextVNode)("\n    \n"),
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
                  (0,external_vue_.createVNode)("br")
                ])
              ])
            ]),
            _: 1
          }),
          (0,external_vue_.createVNode)(_component_CodeGroupItem, { title: "PHP" }, {
            default: (0,external_vue_.withCtx)(() => [
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("Using the old (now deprecated) "),
                (0,external_vue_.createVNode)("code", null, "mysql_***()"),
                (0,external_vue_.createTextVNode)(" functions, you needed to escape untrusted values yourself by calling the function "),
                (0,external_vue_.createVNode)("a", {
                  href: "https://www.php.net/manual/en/function.mysql-real-escape-string.php",
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, [
                  (0,external_vue_.createTextVNode)("mysql_real_escape_string()"),
                  (0,external_vue_.createVNode)(_component_OutboundLink)
                ]),
                (0,external_vue_.createTextVNode)(":")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-php ext-php line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-php" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysql_connect"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "/* Connection settings... */"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_GET"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'ACCOUNT_ID'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$result"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysql_query"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"SELECT * FROM accounts WHERE id = \""),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "."),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysql_real_escape_string"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
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
              ]),
              (0,external_vue_.createVNode)("p", null, [
                (0,external_vue_.createTextVNode)("Many programmers often forgot to call this functions, leading to that many SQL injection vulnerabilities existed. To prevent programmers from forgetting this, the "),
                (0,external_vue_.createVNode)("code", null, "mysql_***()"),
                (0,external_vue_.createTextVNode)(" functions were deprecated, and the "),
                (0,external_vue_.createVNode)("code", null, "mysqli_***()"),
                (0,external_vue_.createTextVNode)(" functions and PDO were introduced instead. Using the newer "),
                (0,external_vue_.createVNode)("code", null, "mysqli_***()"),
                (0,external_vue_.createTextVNode)(" functions you use placeholders in prepared statements like this:")
              ]),
              (0,external_vue_.createVNode)("div", { class: "language-php ext-php line-numbers-mode" }, [
                (0,external_vue_.createVNode)("pre", { class: "language-php" }, [
                  (0,external_vue_.createVNode)("code", null, [
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$connection"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_connect"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token comment" }, "/* Connection settings... */"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$_GET"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "["),
                    (0,external_vue_.createVNode)("span", { class: "token string single-quoted-string" }, "'ACCOUNT_ID'"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "]"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token operator" }, "="),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_prepare"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$connection"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"SELECT * FROM accounts WHERE id = ?\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_bind_param"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token string double-quoted-string" }, "\"i\""),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$ACCOUNT_ID"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_execute"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_bind_result"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ","),
                    (0,external_vue_.createTextVNode)(),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$result"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
                    (0,external_vue_.createTextVNode)("\n\n"),
                    (0,external_vue_.createVNode)("span", { class: "token function" }, "mysqli_stmt_fetch"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, "("),
                    (0,external_vue_.createVNode)("span", { class: "token variable" }, "$statement"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ")"),
                    (0,external_vue_.createVNode)("span", { class: "token punctuation" }, ";"),
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
          })
        ]
      }
    }),
    _: 1
  }, _parent))
  _push(`<!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-security/index.html.vue?vue&type=template&id=2b646c7a

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/web-security/index.html.vue

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

/***/ 6463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-1ea863d6",
  "path": "/lectures/web-security/",
  "title": "Web Security",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "Web Security"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Lecture material",
      "slug": "lecture-material",
      "children": []
    },
    {
      "level": 2,
      "title": "Fun from xkcd:",
      "slug": "fun-from-xkcd",
      "children": []
    },
    {
      "level": 2,
      "title": "Recommended reading",
      "slug": "recommended-reading",
      "children": [
        {
          "level": 3,
          "title": "Hardware related articles",
          "slug": "hardware-related-articles",
          "children": []
        },
        {
          "level": 3,
          "title": "OS related articles",
          "slug": "os-related-articles",
          "children": []
        },
        {
          "level": 3,
          "title": "Framework/Library related articles",
          "slug": "framework-library-related-articles",
          "children": []
        },
        {
          "level": 3,
          "title": "App related articles",
          "slug": "app-related-articles",
          "children": []
        },
        {
          "level": 3,
          "title": "App with device related articles",
          "slug": "app-with-device-related-articles",
          "children": []
        },
        {
          "level": 3,
          "title": "Web browser related",
          "slug": "web-browser-related",
          "children": []
        },
        {
          "level": 3,
          "title": "Various articles",
          "slug": "various-articles",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Cross-Site Scripting (XSS)",
      "slug": "cross-site-scripting-xss",
      "children": [
        {
          "level": 3,
          "title": "Vulnerability",
          "slug": "vulnerability",
          "children": []
        },
        {
          "level": 3,
          "title": "Protection",
          "slug": "protection",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Cross-Site Request Forgery (CSRF)",
      "slug": "cross-site-request-forgery-csrf",
      "children": [
        {
          "level": 3,
          "title": "Vulnerability",
          "slug": "vulnerability-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "SQL injection",
      "slug": "sql-injection",
      "children": [
        {
          "level": 3,
          "title": "Vulnerability",
          "slug": "vulnerability-2",
          "children": []
        },
        {
          "level": 3,
          "title": "Protection",
          "slug": "protection-1",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/web-security/README.md",
  "git": {
    "updatedTime": 1642356151000
  }
}


/***/ })

};
;
//# sourceMappingURL=2930.app.js.map