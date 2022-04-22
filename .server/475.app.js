"use strict";
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 6362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index_html)
});

;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/lectures/uml-use-case-diagrams/index.html.vue?vue&type=template&id=2021de3b

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="uml-use-case-diagrams" tabindex="-1"><a class="header-anchor" href="#uml-use-case-diagrams" aria-hidden="true">#</a> UML Use-Case Diagrams</h1><p>This lecture teaches you how to draw UML Use-Case Diagrams, and why they are important to draw.</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why?</h2><p>So, why waste time on learning how to draw use-case diagrams? What good do they do? Turns out they actually solve a quite big and common problem in big projects.</p><p>When building a system, there are many participants involved. At least, there is:</p><ul><li>the customer who wants to have the system built</li><li>the developer who is responsible for building the system</li></ul><p>Most often the the customer is represented by many different type of end-users (the people who will use the system after it has been built), and it usually takes too long time to implement the system by a single developer, so usually there are multiple developers implementing it. So, when building most systems, many different humans are involved.</p><p>Unfortunately, we humans are individuals, so we all have our own idea of how the system should work in the end, and what functionality it should contain. A customer saying <em>I need a system for selling groceries</em> might expect the system to contain special functionality for those that are allergic, so they can hide the groceries they can&#39;t eat, but the developers implementing the system might not even know that some people are allergic to some groceries, so they never even considered that functionality at all. And in the end, the developers deliver a system that doesn&#39;t fulfills the requirements the customer had, and the customer doesn&#39;t want to pay for that, so everybody are unhappy with the project:</p><ul><li>the customer is unhappy because she didn&#39;t get the system she needed</li><li>the developers are unhappy because they wasted a lot of time on building a system no one wants to pay for</li></ul><p>Avoiding such a situation is extremely important for a project to be successful. So, how can we avoid it? <em>By clearly specifying what functionality the system should contain in the beginning of the project.</em> One way to specify that is by drawing a use-case diagram. But first, let&#39;s go through what use-cases are.</p><h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use-cases</h2><p>So, the first step in a project is to agree on what functionality the system you will create should contain. This functionality is often expressed as use-cases. A <em>use-case</em> is a description of one operation a user of the system needs to be able to use the system for.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the system is a shopping website, then the following use-cases might be good to have:</p><ul><li>Add product</li><li>View new orders</li><li>Mark order as handled</li><li>Find product</li><li>Add product to basket</li><li>Remove product from basket</li><li>Checkout products in basket</li><li>Etc.</li></ul></div><p>Each use-case describes one functionality the system needs to contain, and all use-cases together describes the functionality of the entire system.</p><div class="custom-container warning"><p class="custom-container-title">Naming the use-case</p><p>The name of the use-case should be a goal the user want to achieve. <em>Enter product name</em> is not a good use-case, because no user is happy with just entering a product name into the system. <em>Delete product by name</em> is better, because the name reflects the goal is to delete a product by entering its name.</p><p>Similarly, <em>Login</em> is not a good use-case, because the user hasn&#39;t achieved any useful accomplishment by just logging in. Logging in is rather a step part of other use-cases.</p></div><p>Now when the functionality of the system has been specified as use-cases, all involved in the project will have the same understanding of what functionality the system needs to contain 😃</p><h2 id="actors" tabindex="-1"><a class="header-anchor" href="#actors" aria-hidden="true">#</a> Actors</h2><p>Most often, a system have different type of users.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>In the previous example about the shopping website, we had the following two type of users:</p><ul><li><em>Admin</em>/<em>Owner</em>, who should add new products to the website, view new orders, etc.</li><li><em>Customer</em>, who should find products, add products to basket, etc.</li></ul></div><p>Often, a system have many more than just 2 different type of users.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>If the shopping website is very big, there are probably also specialized people using the system, such as:</p><ul><li><em>Accounter</em>, who needs to deal with taxes, etc., and therefor need to be able to view how many of each product that has been sold, etc.</li><li><em>Deliverer</em>, who delivers the ordered products to the customer, and need to see which the next unhandled order is, etc.</li><li>Etc.</li></ul></div><p>These different type of users are called <em>actors</em>, and when specifying a use-case, you should also clearly indicate which actors that will do the use-case. This is very important, because if you by accident end up having a use-case no actor wants to do, then you add functionality to the system no user will ever use, which is a a bit unnecessary 😅</p><div class="custom-container danger"><p class="custom-container-title">Naming actors</p><p>Don&#39;t name an actor <em>User</em>. The name of the actor should reflect what type of user it is, so try to come up with a more specific name. If the system is going to be used by an organization, they typically have already come up with suitable names for actors, such as <em>Boss</em>, <em>Developer</em>, <em>Scheduler</em>, <em>UX Expert</em>, etc.</p><p>Using <em>User</em> is bad even if your system only has one actor. Because it might be that it only has one actor TODAY, but one year from now you might need to add more functionality to the system, introducing new actors, and then you can&#39;t call one of them for <em>User</em>, because they are all users of the system! So, use good descriptive names already from the beginning, even if you only have one actor.</p></div><p>An actor doesn&#39;t have to be a human. If another system will be using our system, that other system will be an actor too!</p><div class="custom-container danger"><p class="custom-container-title">Implementation details aren&#39;t actor!</p><p>Don&#39;t show implementation details as actors. For example, if the system is an Android application storing data in a Firestore database, some students thinks their system is only the Android application, and that the Firestore database is an actor. That&#39;s not the case; the system includes both the Android application and the Firestore database, and the Firestore database is an implementation detail of the system, and not an actor using the system.</p><p>If your new system is used by/uses an <strong>existing</strong> system, then that existing system becomes an actor.</p></div><h2 id="drawing-the-diagram" tabindex="-1"><a class="header-anchor" href="#drawing-the-diagram" aria-hidden="true">#</a> Drawing the Diagram</h2><p>So, now when you know what use-cases and actors are, let&#39;s take a look at how we can visualize them in a use-case diagram!</p><h3 id="_1-adding-the-system" tabindex="-1"><a class="header-anchor" href="#_1-adding-the-system" aria-hidden="true">#</a> 1. Adding the system</h3><p>The first thing you should draw in a use-case diagram is the system. It is represented by a big rectangle. The borders of the rectangle is called <em>the system boundaries</em>. What goes inside the rectangle is part of the system, and what goes outside is not part of the system.</p><p>Centered at the top of the rectangle you should write the name of the system, so the reader knows which system it is.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Picture of use-case diagram with system boundaries.</p></div><h3 id="_2-adding-actors" tabindex="-1"><a class="header-anchor" href="#_2-adding-actors" aria-hidden="true">#</a> 2. Adding actors</h3><p>The actors are added as symbols outside the system. When the actor is a human, you typically visualize it as a stickman, like 웃. If the actor is another system, then you can use the logo of that system, or whatever you think is the best way to indicate which system it is. Below the stickman/logo you write the name of the actor.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Picture of use-case diagram with system boundaries and actors.</p></div><h3 id="_3-adding-use-cases" tabindex="-1"><a class="header-anchor" href="#_3-adding-use-cases" aria-hidden="true">#</a> 3. Adding use-cases</h3><p>Each use-case is added as an oval inside the system boundaries. In the center of the oval, write the name of the use-case. Then, for each actor that will do that use-case, draw a line from the actor to the use-case.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Picture of use-case diagram with system boundaries, actors and use-cases.</p></div><h3 id="premium-features" tabindex="-1"><a class="header-anchor" href="#premium-features" aria-hidden="true">#</a> Premium features</h3><p>To make the use-case diagram even more useful you can use relations, like <em>includes</em>, <em>extends</em> and <em>generalization</em>.</p><div class="custom-container danger"><p class="custom-container-title">Don&#39;t overuse relations!</p><p>The goal with use-case diagram is to visualize who needs to use which functionality of the system in a way that&#39;s very easy to interpret. The more relations you add to the diagram, the harder it will be to interpret it, so don&#39;t add relations just because you can. Especially, don&#39;t try to add relations just to have some 🤦</p></div><h4 id="using-includes" tabindex="-1"><a class="header-anchor" href="#using-includes" aria-hidden="true">#</a> Using includes</h4><p>When different use-cases partly require the user to do the same thing, you can extract that common thing and put it in a new use-case, and then use <em>includes</em> arrow from the original use-case to the new one. That includes arrow should be read as <em>Doing the original use-case also includes doing the use-case the arrow points to</em>.</p><p>Optimally the new extra use-case is a good use-case on it&#39;s own (i.e. a goal on its own the user is happy with achieving). In that case, you can also add a line between the actor to the new extra use-case.</p><div class="custom-container tip"><p class="custom-container-title">Example</p><p>Picture of use-case diagram with system boundaries, actors and use-cases.</p></div><p>When use-cases are implemented as functions, a use-case that includes another use-case can simply call that other function to carry out the other use-case, as shown in the pseudocode below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	username <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	password <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	account <span class="token operator">=</span> <span class="token function">getAccountFromDatabase</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
	
	<span class="token keyword">return</span> account
	
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	loggedInAccount <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Includes relation.</span>
	
	title <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	content <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token function">storeBlogpostInDatabase</span><span class="token punctuation">(</span>loggedInAccount<span class="token punctuation">.</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">deleteOwnBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	loggedInAccount <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Includes relation.</span>
	
	blogpostId <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	blogpost <span class="token operator">=</span> <span class="token function">getBlogpostFromDatabase</span><span class="token punctuation">(</span>blogpostId<span class="token punctuation">)</span>
	
	<span class="token keyword">if</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>accountId <span class="token operator">==</span> loggedInAccount<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token function">removeBlogpostFromDatabase</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>When use-cases are implemented as classes, a use-case that includes another use-case can simply make use of that other class, as shown in the pseudocode below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">LoginUseCase</span><span class="token punctuation">{</span>
	
	account<span class="token operator">:</span> <span class="token keyword">null</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		username <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		password <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token keyword">this</span><span class="token punctuation">.</span>account <span class="token operator">=</span> <span class="token function">getAccountFromDatabase</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CreateBlogpostUseCase</span><span class="token punctuation">{</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		loginUseCase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginUseCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Includes relation.</span>
		loginUseCase<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		title <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		content <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token function">storeBlogpostInDatabase</span><span class="token punctuation">(</span>loginUseCase<span class="token punctuation">.</span>account<span class="token punctuation">.</span>id<span class="token punctuation">,</span> title<span class="token punctuation">,</span> content<span class="token punctuation">)</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">DeleteOwnBlogpostUseCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		loginUseCase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginUseCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Includes relation.</span>
		loginUseCase<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		blogpostId <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		blogpost <span class="token operator">=</span> <span class="token function">getBlogpostFromDatabase</span><span class="token punctuation">(</span>blogpostId<span class="token punctuation">)</span>
		
		<span class="token keyword">if</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">.</span>accountId <span class="token operator">==</span> loginUseCase<span class="token punctuation">.</span>account<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token function">removeBlogpostFromDatabase</span><span class="token punctuation">(</span>blogpost<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h4 id="using-extends" tabindex="-1"><a class="header-anchor" href="#using-extends" aria-hidden="true">#</a> Using extends</h4><p>When a use-case can be carried out in different ways, and all the ways have some part of their ways in common, you can have one use-case for that common part, and then let the other use-cases with their unique parts extend the first one.</p><p>When use-cases are implemented as functions, a use-case that extends another use-case can be implemented as a function call to carry out the common part, as shown in the pseudocode below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	<span class="token comment">// Base functionality for all accounts.</span>
	age <span class="token operator">=</span> <span class="token function">enterNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	partialAccount <span class="token operator">=</span> <span class="token punctuation">{</span>
		age
	<span class="token punctuation">}</span>
	
	<span class="token keyword">return</span> partialAccount
	
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createAccountWithUsernameAndPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	partialAccount <span class="token operator">=</span> <span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Extends relation.</span>
	
	username <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	password <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token function">storeAccountInDatabase</span><span class="token punctuation">(</span>partialAccount<span class="token punctuation">.</span>age<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createAccountWithGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	partialAccount <span class="token operator">=</span> <span class="token function">createAccount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Extends relation.</span>
	
	googleAccount <span class="token operator">=</span> <span class="token function">loginWithGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token function">storeAccountInDatabase</span><span class="token punctuation">(</span>partialAccount<span class="token punctuation">.</span>age<span class="token punctuation">,</span> googleAccount<span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>When use-cases are implemented as classes, one use-case extending another use-case can be implemented through inheritance, as shown in the pseudocode below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">CreateAccountUseCase</span><span class="token punctuation">{</span>
	
	age<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token comment">// Base functionality for all accounts.</span>
		age <span class="token operator">=</span> <span class="token function">enterNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CreateAccountWithGoogleUseCase</span>
      <span class="token keyword">extends</span> <span class="token class-name">CreateAccountUseCase</span><span class="token punctuation">{</span> <span class="token comment">// Extends relation.</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Extends relation.</span>
		
		googleAccount <span class="token operator">=</span> <span class="token function">loginWithGoogle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token function">storeAccountInDatabase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> googleAccount<span class="token punctuation">)</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CreateAccountWithUsernameAndPasswordUseCase</span>
      <span class="token keyword">extends</span> <span class="token class-name">CreateAccountUseCase</span><span class="token punctuation">{</span> <span class="token comment">// Extends relation.</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Extends relation.</span>
		
		username <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		password <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token function">storeAccountInDatabase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">,</span> username<span class="token punctuation">,</span> text<span class="token punctuation">)</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h4 id="using-generalization" tabindex="-1"><a class="header-anchor" href="#using-generalization" aria-hidden="true">#</a> Using generalization</h4><p>When multiple different use-cases have the same goal, but can be achieved in different ways, and the ways have nothing in common except the goal, you can use a generalization relationship. Add one use-case for the general goal they have in common, and then one use-case for each practical way the use-case can be achieved, and draw arrows from the practical use-cases to the general use-case.</p><p>When use-cases are implemented as functions, the practical use-cases can be implemented as separate functions.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">commentOnBlogpostAnonymously</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	blogpostId <span class="token operator">=</span> <span class="token function">enterNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	name <span class="token operator">=</span> <span class="token string">&quot;Anonymous&quot;</span>
	comment <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token function">storeComment</span><span class="token punctuation">(</span>blogpostId<span class="token punctuation">,</span> name<span class="token punctuation">,</span> comment<span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commentOnBlogpostIdentifiable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
	loggedInAccount <span class="token operator">=</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	lastViewedBlogpost <span class="token operator">=</span> <span class="token function">getLastViewedBlogpost</span><span class="token punctuation">(</span>loggedInAccount<span class="token punctuation">)</span>
	name <span class="token operator">=</span> loggedInAccount<span class="token punctuation">.</span>username
	comment <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	
	<span class="token function">storeComment</span><span class="token punctuation">(</span>lastViewedBlogpost<span class="token punctuation">.</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> comment<span class="token punctuation">)</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>When generalized use-cases are implemented as classes, the generalized use-case is often implemented as an interface, which the other use-case classes implements, as shown in the pseudocode below.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">interface</span> <span class="token class-name">CommentOnBlogpost</span><span class="token punctuation">{</span>
	abstract <span class="token function">commentOnBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CommentOnBlogpostAnonymouslyUseCase</span>
      <span class="token keyword">implements</span> <span class="token class-name">CommentOnBlogpost</span><span class="token punctuation">{</span> <span class="token comment">// Generalization relation.</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commentOnBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">commentOnBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		blogpostId <span class="token operator">=</span> <span class="token function">enterNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Anonymous&quot;</span>
		comment <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token function">storeComment</span><span class="token punctuation">(</span>blogpostId<span class="token punctuation">,</span> name<span class="token punctuation">,</span> comment<span class="token punctuation">)</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">CommentOnBlogpostIdentifiableUseCase</span>
      <span class="token keyword">implements</span> <span class="token class-name">CommentOnBlogpost</span><span class="token punctuation">{</span> <span class="token comment">// Generalization relation.</span>
	
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">commentOnBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">commentOnBlogpost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		
		loginUseCase <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginUseCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		loginUseCase<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		lastViewedBlogpost <span class="token operator">=</span> <span class="token function">getLastViewedBlogpost</span><span class="token punctuation">(</span>loginUseCase<span class="token punctuation">.</span>loggedInAccount<span class="token punctuation">)</span>
		name <span class="token operator">=</span> loginUseCase<span class="token punctuation">.</span>loggedInAccount<span class="token punctuation">.</span>username
		comment <span class="token operator">=</span> <span class="token function">enterText</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		
		<span class="token function">storeComment</span><span class="token punctuation">(</span>lastViewedBlogpost<span class="token punctuation">.</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> comment<span class="token punctuation">)</span>
		
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><!--]-->`)
}
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/lectures/uml-use-case-diagrams/index.html.vue

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

/***/ 7037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-c804b61c",
  "path": "/lectures/uml-use-case-diagrams/",
  "title": "UML Use-Case Diagrams",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto",
    "navbarTitle": "UML Use-Case Diagrams"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Why?",
      "slug": "why",
      "children": []
    },
    {
      "level": 2,
      "title": "Use-cases",
      "slug": "use-cases",
      "children": []
    },
    {
      "level": 2,
      "title": "Actors",
      "slug": "actors",
      "children": []
    },
    {
      "level": 2,
      "title": "Drawing the Diagram",
      "slug": "drawing-the-diagram",
      "children": [
        {
          "level": 3,
          "title": "1. Adding the system",
          "slug": "_1-adding-the-system",
          "children": []
        },
        {
          "level": 3,
          "title": "2. Adding actors",
          "slug": "_2-adding-actors",
          "children": []
        },
        {
          "level": 3,
          "title": "3. Adding use-cases",
          "slug": "_3-adding-use-cases",
          "children": []
        },
        {
          "level": 3,
          "title": "Premium features",
          "slug": "premium-features",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "lectures/uml-use-case-diagrams/README.md",
  "git": {
    "updatedTime": null
  }
}


/***/ })

};
;
//# sourceMappingURL=475.app.js.map