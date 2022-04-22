"use strict";
exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 1952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exam_2022_02_13_html)
});

// EXTERNAL MODULE: ./node_modules/vue/server-renderer/index.mjs
var server_renderer = __webpack_require__(4498);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vuepress/bundler-webpack/lib/build/ssr/vuepressLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2022-02-13.html.vue?vue&type=template&id=b51299dc


function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 id="exam-2022-02-13" tabindex="-1"><a class="header-anchor" href="#exam-2022-02-13" aria-hidden="true">#</a> Exam 2022-02-13</h1><p>Here you find the questions, sample answers and marking guidelines for the exam 2022-02-13.</p><h2 id="information" tabindex="-1"><a class="header-anchor" href="#information" aria-hidden="true">#</a> Information</h2><p>Start by reading through all questions. Max score is 30 points.</p><ul><li>For grade 3, 40% of max score (12 points) is required.</li><li>For grade 4, 60% of max score (18 points) is required.</li><li>For grade 5, 80% of max score (24 points) is required.</li></ul><p>During the test, you are only allowed to use:</p><ul><li>The computer you sit at to only answer the questions on this exam (you may not run any other program).</li><li>A dictionary to translate to/from English from/to your native language.</li><li>Pen and paper to sketch things (does not need to be submitted).</li></ul><p>Write your answers in either English or Swedish. If you write your answers in Swedish, make sure to not introduce any translation confusement. <strong>Write proper sentences (spelling, upper/lower case characters, punctuation, etc.).</strong> Answers that do not do this good enough/are vague/are ununderstandable cannot receive full score on the questions.</p><p>Answers that are more or less copies of sample answers given to you or copies of text found somewhere else will be rewarded 0 points. Use your own words to answer the questions.</p><p>Good luck!</p><h2 id="question-1-1p" tabindex="-1"><a class="header-anchor" href="#question-1-1p" aria-hidden="true">#</a> Question 1 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Place the following lines of code in such order they can be executed (read underscores as white-spaces/indentation (Inspera doesn&#39;t allow the text to begin with white-spaces 😞)).</p><ul><li><code>____color = input(&quot;Enter color: &quot;)</code></li><li><code>____print(color_twice)</code></li><li><code>color_twice = color + color</code></li><li><code>color = get_color()</code></li><li><code>____return color</code></li><li><code>if color == &quot;red&quot;:</code></li><li><code>def get_color():</code></li></ul><p>You will get:</p><ul><li>1 point for all in correct order</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    color <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter color: &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> color
color <span class="token operator">=</span> get_color<span class="token punctuation">(</span><span class="token punctuation">)</span>
color_twice <span class="token operator">=</span> color <span class="token operator">+</span> color
<span class="token keyword">if</span> color <span class="token operator">==</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>color_twice<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for all in correct order</li></ul></div></div><h2 id="question-2-1p" tabindex="-1"><a class="header-anchor" href="#question-2-1p" aria-hidden="true">#</a> Question 2 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>How many statements and expressions does the following code contain?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Claire&quot;</span><span class="token punctuation">]</span>
names_string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token keyword">for</span> name <span class="token keyword">in</span> names_string<span class="token punctuation">:</span>
    names_string <span class="token operator">=</span> names_string <span class="token operator">+</span> name
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Number of of statements: ...</p><p>Number of expressions: ...</p><p>You will get:</p><ul><li>1 point for both correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>Number of of statements: <code>4</code></p><p>Number of expressions: <code>9</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for both correct</li></ul></div></div><h2 id="question-3-1p" tabindex="-1"><a class="header-anchor" href="#question-3-1p" aria-hidden="true">#</a> Question 3 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What type of error does the code below contain? Syntax error, Logical error, Runtime error or no error at all? The purpose of the function is to compute the sum of the numbers it receives e.g. <code>get_sum(2, 3)</code> → <code>5</code>.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_sum</span><span class="token punctuation">(</span>number_1<span class="token punctuation">,</span> number_2<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> number_1 <span class="token operator">+</span> number_1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>Logical error</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-4-1p" tabindex="-1"><a class="header-anchor" href="#question-4-1p" aria-hidden="true">#</a> Question 4 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What values will be stored in the variables <code>i</code> and <code>x</code> after the following code has been executed?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">3</span>
x <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> i <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> x <span class="token operator">+</span> i
    i <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The variable <code>i</code> will store: ...</p><p>The variable <code>x</code> will store: ...</p><p>You will get:</p><ul><li>1 point for both correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>The variable <code>i</code> will store: <code>0</code></p><p>The variable <code>x</code> will store: <code>6</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for both correct</li></ul></div></div><h2 id="question-5-1p" tabindex="-1"><a class="header-anchor" href="#question-5-1p" aria-hidden="true">#</a> Question 5 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What is what in the code below?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">double</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> number<span class="token operator">*</span>number
doubled <span class="token operator">=</span> double<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Pair each code piece with its corresponding name.</p><p>Code pieces:</p><ul><li><code>double</code></li><li><code>12</code></li><li><code>number*number</code></li><li><code>number</code></li></ul><p>Names:</p><ul><li>Argument</li><li>Parameter</li><li>Expression</li><li>Function</li></ul><p><strong>Note:</strong> Some code pieces may match multiple names, but there is only one way to get all 4 pairs right.</p><p>You will get:</p><ul><li>1 point for all correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><ul><li>Argument: <code>12</code></li><li>Parameter: <code>number</code></li><li>Expression: <code>number*number</code></li><li>Function: <code>double</code></li></ul></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for all correct</li></ul></div></div><h2 id="question-6-1p" tabindex="-1"><a class="header-anchor" href="#question-6-1p" aria-hidden="true">#</a> Question 6 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Which one of the following statements is a bad suggestion on how to represent data?</p><ul><li>To represent the number of trees in a wood, one can use an integer, e.g. <code>number_of_trees = 974</code></li><li>To represent a tree of a specific type and an age (in years), one can use a list containing a string and an integer, e.g. <code>tree = [&quot;Oak&quot;, 21]</code></li><li>To represent a tree with a length (how tall it is in centimeter), one can use an integer, e.g. <code>tree_length = 623</code></li><li>To represent the radius of a tree (in centimeters), one can use an integer, e.g. <code>tree_radius = 10</code></li><li>To represent the names of different tree types, one can use a list with strings, e.g. <code>tree_type_names = [&quot;Oak&quot;, &quot;Birch&quot;]</code></li><li>All other statements are good ways of representing data</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>To represent a tree of a specific type and an age (in years), one can use a list containing a string and an integer, e.g. <code>tree = [&quot;Oak&quot;, 21]</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-7-1p" tabindex="-1"><a class="header-anchor" href="#question-7-1p" aria-hidden="true">#</a> Question 7 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>The following expression:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Creates a range containing some integers. What is the sum of the integers in that range?</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>The sum is: <code>5</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-8-1p" tabindex="-1"><a class="header-anchor" href="#question-8-1p" aria-hidden="true">#</a> Question 8 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Explain why it&#39;s often better to create functions and writing your code in them, instead of writing code without creating your own functions.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>By putting your code in a function you can re-use it multiple times by calling the function. If the code is not inside a function, you can&#39;t re-use it.</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for re-using code, or:</li><li>1 point for code easier to test, or:</li><li>1 point for code better structured/easier to read</li><li>-0.1 points for not starting a sentence with uppercase character</li><li>-0.25 points for each described thing that isn&#39;t relevant/I can&#39;t understand</li></ul></div></div><h2 id="question-9-1p" tabindex="-1"><a class="header-anchor" href="#question-9-1p" aria-hidden="true">#</a> Question 9 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What integers should be assigned to the variables <code>x</code> and <code>y</code> to slice out the values <code>&quot;c&quot;</code> and <code>&quot;d&quot;</code> in the code below?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">]</span>
x <span class="token operator">=</span> ?
y <span class="token operator">=</span> ?
my_new_list <span class="token operator">=</span> my_list<span class="token punctuation">[</span>x<span class="token punctuation">:</span>y<span class="token punctuation">]</span>
<span class="token comment"># my_new_list should now be [&quot;c&quot;, &quot;d&quot;]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You will get:</p><ul><li>1 point for both correct</li></ul></div><div class="exam-sample-answer"><h2>Sample answer</h2><p><code>x</code>: <code>2</code></p><p><code>y</code>: <code>4</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for both correct</li></ul></div></div><h2 id="question-10-1p" tabindex="-1"><a class="header-anchor" href="#question-10-1p" aria-hidden="true">#</a> Question 10 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Write the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span>c<span class="token operator">+</span>c <span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>As code making use of a loop instead of a list comprehension expression. Your own code should have the exact same meaning as the code above.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> c <span class="token keyword">in</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">:</span>
    my_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>c<span class="token operator">+</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that is largely correct</li><li>Point reduction for errors: <ul><li>-0.5 points for each indentation error</li><li>-0.5 points for missing <code>(</code> and <code>)</code></li><li>-0.5 points for using <code>[</code> and <code>]</code> instead of <code>(</code> and <code>)</code></li><li>-1 point for not creating the <code>my_list</code> variable</li></ul></li></ul></div></div><h2 id="question-11-1p" tabindex="-1"><a class="header-anchor" href="#question-11-1p" aria-hidden="true">#</a> Question 11 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Write the following code:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span>x<span class="token operator">*</span>x <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">if</span> is_odd<span class="token punctuation">(</span><span class="token number">7.5</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>As code making use of a loop instead of a list comprehension expression. Your own code should have the exact same meaning as the code above.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> is_odd<span class="token punctuation">(</span><span class="token number">7.5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        my_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>x<span class="token operator">*</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.1 points for each small syntax error, such as each missing <code>:</code></li><li>-0.5 points for each indentation error</li><li>-0.5 points for missing <code>(</code> and <code>)</code></li><li>-1 point for not calling <code>is_odd()</code></li><li>-1 point for failing to create the <code>my_list</code> variable</li></ul></li></ul></div></div><h2 id="question-12-1p" tabindex="-1"><a class="header-anchor" href="#question-12-1p" aria-hidden="true">#</a> Question 12 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Here is a quite complex structure with information about different movies:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>movies <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;action&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;GoldenEye&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">110</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mission Impossible&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">115</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Pearl Harbor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">160</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string">&quot;drama&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Titanic&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">180</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Love Actually&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;runtime&quot;</span><span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>Given this structure, write an <strong>expression</strong> that evaluates to the name of the movie with the runtime <code>160</code>, i.e. <code>Pearl Harbor</code>.</p><p><strong>Note</strong>: Do not write a statement, and simply writing <code>Pearl Harbor</code> is of course not OK; the value needs to be retrieved from the structure.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p><code>movies[&quot;action&quot;][2][&quot;name&quot;]</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0 points for answers being a statement</li><li>1 point for an answer that is an expression that works</li></ul></div></div><h2 id="question-13-1p" tabindex="-1"><a class="header-anchor" href="#question-13-1p" aria-hidden="true">#</a> Question 13 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Suggest how the following data in Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s castle&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;color&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;red&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s home&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;color&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;lime&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Can be expressed in XML format.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>houses</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>house</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Alice&#39;s castle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>color</span><span class="token punctuation">&gt;</span></span>red<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>color</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>house</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>house</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Bob&#39;s home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>color</span><span class="token punctuation">&gt;</span></span>lime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>color</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>house</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>houses</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.1 points for each wrong extra character, such as <code>&#39;</code></li><li>-0.25 points for surrounding values with double quotes</li><li>-0.5 points for calling the <code>&lt;house&gt;</code> element for <code>&lt;houses&gt;</code></li><li>-0.75 points for missing the <code>&lt;house&gt;</code> element</li><li>-1 point for using <code>[</code> and <code>]</code> instead of <code>&lt;</code> and <code>&gt;</code></li></ul></li></ul></div></div><h2 id="question-14-1p" tabindex="-1"><a class="header-anchor" href="#question-14-1p" aria-hidden="true">#</a> Question 14 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Suggest how the following data in Python:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s castle&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;color&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;red&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s home&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;color&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;lime&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Can be expressed in CSV format. Do not write any extra characters not needed, but use as few characters as possible.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-csv ext-csv line-numbers-mode"><pre class="language-csv"><code><span class="token value">Alice&#39;s castle</span><span class="token punctuation">,</span><span class="token value">red</span>
<span class="token value">Bob&#39;s home</span><span class="token punctuation">,</span><span class="token value">blue</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.5 points for writing a space after the delimiter</li><li>-0.5 points for surrounding the value with a quote character when not needed</li><li>-0.5 points for having a blank line between entries</li></ul></li></ul></div></div><h2 id="question-15-1p" tabindex="-1"><a class="header-anchor" href="#question-15-1p" aria-hidden="true">#</a> Question 15 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Explain the difference between a function printing its result, and a function returning its result. Which one is usually better to use, and why?</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p>If a function computes a result and then prints it (i.e. shows the result in the shell/terminal/console), then the function can only be used for computing and printing the result. If the function instead of printing returns the result, then the one calling the function can decide what should happen with the result (printing it, storing it in a file, use it in another computation, etc.), and the function can be re-used in many more situations, so returning the result is usually better than printing the result.</p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0.5 points for explaining the difference/each type of function</li><li>0.5 points for correct motivation which one is usually best</li><li>Point reductions: <ul><li>-0.1 points for not starting sentence with uppercase character</li><li>-0.25 points for each claim that is false</li></ul></li></ul></div></div><h2 id="question-16-1p" tabindex="-1"><a class="header-anchor" href="#question-16-1p" aria-hidden="true">#</a> Question 16 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>What will be stored in the variable <code>sum</code> after the following code has been executed?</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">a</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
    number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">5</span>

<span class="token keyword">def</span> <span class="token function">b</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">list</span><span class="token punctuation">:</span>
        number <span class="token operator">=</span> number <span class="token operator">+</span> <span class="token number">3</span>

<span class="token keyword">def</span> <span class="token function">c</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">list</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span>

my_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>

a<span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
c<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>
a<span class="token punctuation">(</span>my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
b<span class="token punctuation">(</span>my_list<span class="token punctuation">)</span>

<span class="token builtin">sum</span> <span class="token operator">=</span> my_list<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> my_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><code>sum</code>: ...</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><p><code>sum</code>: <code>2</code></p></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for correct answer</li></ul></div></div><h2 id="question-17-1p" tabindex="-1"><a class="header-anchor" href="#question-17-1p" aria-hidden="true">#</a> Question 17 (1p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Implement the function <code>get_weekday_number</code>, which receives a string as argument representing the name of a weekday, and returns the number of the week that weekday is. You need to support the weekdays shown in the table below.</p><table><thead><tr><th>Weekday name</th><th>Weekday number</th></tr></thead><tbody><tr><td>Monday</td><td>1</td></tr><tr><td>Tuesday</td><td>2</td></tr><tr><td>Wednesday</td><td>3</td></tr><tr><td>Thursday</td><td>4</td></tr><tr><td>Friday</td><td>5</td></tr><tr><td>Saturday</td><td>6</td></tr><tr><td>Sunday</td><td>7</td></tr></tbody></table><p>If the received name is not one of those in the table, <code>-1</code> should be returned.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>get_weekday_number(&quot;Thursday&quot;)   →   4
get_weekday_number(&quot;Christmas Day&quot;)   →   -1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>weekday_numbers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Monday&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Tuesday&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Wednesday&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Thursday&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Friday&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Saturday&quot;</span><span class="token punctuation">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Sunday&quot;</span><span class="token punctuation">:</span> <span class="token number">7</span>
<span class="token punctuation">}</span>
<span class="token keyword">def</span> <span class="token function">get_weekday_number</span><span class="token punctuation">(</span>weekday<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> weekday <span class="token keyword">in</span> weekday_numbers<span class="token punctuation">:</span>
        <span class="token keyword">return</span> weekday_numbers<span class="token punctuation">[</span>weekday<span class="token punctuation">]</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for a solution that works</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for each forgotten/incorrectly used <code>:</code>, <code>=</code>, etc.</li><li>-0.1 points for each string not surrounded by quotes</li><li>-0.1 points for each bad variable name</li><li>-0.2 points for returning <code>-1</code> as a string</li><li>-0.2 points for returning a number with a constantly wrong offset</li><li>-0.25 points for indentation error</li><li>-0.25 points for incorrect conditions</li><li>-0.75 points for using <code>input()</code> instead of a parameter</li></ul></li></ul></div></div><h2 id="question-18-2p" tabindex="-1"><a class="header-anchor" href="#question-18-2p" aria-hidden="true">#</a> Question 18 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Write a program that keeps asking the user to enter a word (a string not containing a space character) until the user enters <code>stop</code>. If the user enters more than one word (i.e. a string containing the space character), print an error message to the user. The program should print the number of single words the user entered. When running the program, it can look like this (bold text represents text entered by the user).</p><div style="${
    (0,server_renderer.ssrRenderStyle)({"font-family":"'Courier New'"})
  }"><p>Enter a word or stop: <strong>car</strong><br> Enter a word or stop: <strong>table</strong><br> Enter a word or stop: <strong>yellow sun</strong><br> No, &#39;yellow sun&#39; is not a single word. Enter a word or stop: <strong>Floor</strong><br> Enter a word or stop: <strong>stop</strong><br> You entered 3 single words.</p></div><p><strong>Note</strong>: The output should have the very same format as in the example above (including white-spaces, but with the exception of the boldness of the input, of course).</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>number_of_single_words_entered <span class="token operator">=</span> <span class="token number">0</span>
entered_text <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

<span class="token keyword">while</span> entered_text <span class="token operator">!=</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">:</span>
    
    entered_text <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter a word or stop: &quot;</span><span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> entered_text <span class="token operator">!=</span> <span class="token string">&quot;stop&quot;</span><span class="token punctuation">:</span>
        
        <span class="token keyword">if</span> <span class="token string">&quot; &quot;</span> <span class="token keyword">in</span> entered_text<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;No, &#39;&quot;</span><span class="token operator">+</span>entered_text<span class="token operator">+</span><span class="token string">&quot;&#39; is not a single word.&quot;</span><span class="token punctuation">)</span>
            <span class="token comment"># Or (to get rid of the line break):</span>
            <span class="token comment"># print(&quot;No, &#39;&quot;+entered_text+&quot;&#39; is not a single word.&quot;, end=&quot; &quot;)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            number_of_single_words_entered <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You entered &quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>number_of_single_words_entered<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot; single words.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><p><strong>The intention was the example would contain an extra line break. Solutions that do respective do not contain the missing line break in the example will be accepted (see the comment in the sample answer).</strong></p><ul><li>2 points for a program that largely works</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for concatenating string with int</li><li>-0.1 points for each bad variable name</li><li>-0.1 points for each space/<code>&#39;</code> error in output</li><li>-0.2 points for being inconsistent with variable name convention</li><li>-0.2 points for indentation error</li><li>-0.2 points for reading variable before it has been created</li><li>-0.2 points for checking if empty string (instead of space) is in input</li><li>-0.2 points for creating tuple instead of list</li><li>-0.25 points for each logical error</li><li>-0.25 for maybe printing the error message multiple times for one and the same input</li><li>-0.25 points for creating a function but never call it</li><li>-0.25 points for incorrectly looking for a space in a string</li><li>-1 point for program creating a function, but never calling it</li><li>-1 point for function returning instead of printing</li></ul></li></ul></div></div><h2 id="question-19-2p" tabindex="-1"><a class="header-anchor" href="#question-19-2p" aria-hidden="true">#</a> Question 19 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Implement the function <code>is_any_word_longer_than_5</code>, which receives a list of strings, and returns:</p><ul><li><code>True</code> if any of the strings is longer than 5 characters</li><li><code>False</code> otherwise</li></ul><p>Write two different implementations of the function: one using a <code>while</code> loop, and another one using a <code>for</code> loop.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>is_any_word_longer_than_5([&quot;Peter&quot;, &quot;Alex&quot;])  →  False
is_any_word_longer_than_5([&quot;Oscar&quot;, &quot;Alexandra&quot;, &quot;Claire&quot;])  →  True
is_any_word_longer_than_5([])  →  False
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">is_any_word_longer_than_5</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> word <span class="token keyword">in</span> words<span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token keyword">def</span> <span class="token function">is_any_word_longer_than_5</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
    index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> index <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">:</span>
        word <span class="token operator">=</span> words<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        index <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for the function with the <code>for</code> loop largely working</li><li>1 point for the function with the <code>while</code> loop largely working</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.1 points for each bad name</li><li>-0.1 points for each wrong function name</li><li>-0.1 points for using <code>true</code>/<code>false</code> instead of <code>True</code>/<code>False</code></li><li>-0.5 points if implementing <code>is_all_words_shorter_than_6()</code></li><li>-0.75 points for always returning <code>True</code>/<code>False</code> in first iteration</li></ul></li></ul></div></div><h2 id="question-20-2p" tabindex="-1"><a class="header-anchor" href="#question-20-2p" aria-hidden="true">#</a> Question 20 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Implement the function <code>get_prime_numbers_between</code>, which receives two numbers as argument (the first is lower than the second), and returns a list containing the prime numbers between the two numbers (including both numbers).</p><p>To check if a number is a prime number, use the function <code>is_prime</code>, which returns <code>True</code> if the number you pass to it is a prime number, otherwise <code>False</code>.</p><p>Sample usage:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>is_prime(3)  →  True
is_prime(4)  →  False

get_prime_numbers_between(3, 4)   →  [3]
get_prime_numbers_between(2, 10)  →  [2, 3, 5, 7]
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">get_prime_numbers_between</span><span class="token punctuation">(</span>smallest<span class="token punctuation">,</span> highest<span class="token punctuation">)</span><span class="token punctuation">:</span>
    prime_numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> number <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>smallest<span class="token punctuation">,</span> highest<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> is_prime<span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">:</span>
            prime_numbers<span class="token punctuation">.</span>append<span class="token punctuation">(</span>number<span class="token punctuation">)</span>
    <span class="token keyword">return</span> prime_numbers
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>2 points for a solution largely working</li><li>Point reduction for small mistakes or doing weird things: <ul><li>-0.25 for using <code>&quot;False&quot;</code>, or similar.</li><li>-0.25 for not calling <code>is_prime()</code> correct in the condition</li><li>-0.25 for adding first parameter to the list twice</li><li>-0.5 points for each global variable</li><li>-0.5 points for not retuning anything from the function</li><li>-1 point if implementing <code>get_prime_numbers_between_1_and(highest)</code></li></ul></li></ul></div></div><h2 id="question-21-3p" tabindex="-1"><a class="header-anchor" href="#question-21-3p" aria-hidden="true">#</a> Question 21 (3p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>Below is some data about houses owned by some humans.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Palace&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Home&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&#39;s Cabin&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s Home&quot;</span><span class="token punctuation">,</span>     <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&#39;s Cabin&quot;</span><span class="token punctuation">,</span>    <span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>It&#39;s warm in the summer, and to cool down one can open all the windows in the houses. However, people are lazy and don&#39;t want to do that themselves, so they pay someone to open all the windows for them. That someone charges:</p><ul><li>100 SEK to visit a house...</li><li>...+ 10 SEK each for each room he needs to enter in the house...</li><li>...+ 20 SEK each for each window he opens</li></ul><p>Each room contains at least 1 window.</p><p>Write code that first computes which human that must pay the highest total cost to open all windows in all the houses she owns, and then prints the cost of the most expensive house that human owns. The correct answer for the data given above is <code>590</code>.</p><p><strong>Note</strong>: Your code should still work as expected if one adds/removes houses to/from the list. <code>Alice</code> and <code>Bob</code> are not the only ones who can own a house.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>COST_PER_HOUSE <span class="token operator">=</span> <span class="token number">100</span>
COST_PER_ROOM <span class="token operator">=</span> <span class="token number">10</span>
COST_PER_WINDOW <span class="token operator">=</span> <span class="token number">20</span>

<span class="token comment"># Initialize a dict keeping track of the cost for each owner.</span>
costs_by_owner <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">for</span> house <span class="token keyword">in</span> houses<span class="token punctuation">:</span>
    costs_by_owner<span class="token punctuation">[</span>house<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment"># Compute the cost for each owner.</span>
<span class="token keyword">for</span> house <span class="token keyword">in</span> houses<span class="token punctuation">:</span>
    costs_by_owner<span class="token punctuation">[</span>house<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token punctuation">(</span>
        COST_PER_HOUSE <span class="token operator">+</span>
        COST_PER_ROOM <span class="token operator">*</span> house<span class="token punctuation">[</span><span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">]</span> <span class="token operator">+</span>
        COST_PER_WINDOW <span class="token operator">*</span> house<span class="token punctuation">[</span><span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>

<span class="token comment"># Find the owner with the highest cost.</span>
highest_cost <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
highest_cost_owner <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>

<span class="token keyword">for</span> owner <span class="token keyword">in</span> costs_by_owner<span class="token punctuation">:</span>
    cost <span class="token operator">=</span> costs_by_owner<span class="token punctuation">[</span>owner<span class="token punctuation">]</span>
    <span class="token keyword">if</span> highest_cost <span class="token operator">&lt;</span> cost<span class="token punctuation">:</span>
        highest_cost <span class="token operator">=</span> cost
        highest_cost_owner <span class="token operator">=</span> owner

<span class="token comment"># Find the houses owned by that owner.</span>
houses_to_consider <span class="token operator">=</span> <span class="token punctuation">[</span>house <span class="token keyword">for</span> house <span class="token keyword">in</span> houses <span class="token keyword">if</span> house<span class="token punctuation">[</span><span class="token string">&quot;owner&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> highest_cost_owner<span class="token punctuation">]</span>

<span class="token comment"># Find the most expensive house.</span>
highest_cost <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">for</span> house <span class="token keyword">in</span> houses_to_consider<span class="token punctuation">:</span>
    
    cost <span class="token operator">=</span> <span class="token punctuation">(</span>
        COST_PER_HOUSE <span class="token operator">+</span>
        COST_PER_ROOM <span class="token operator">*</span> house<span class="token punctuation">[</span><span class="token string">&quot;number_of_rooms&quot;</span><span class="token punctuation">]</span> <span class="token operator">+</span>
        COST_PER_WINDOW <span class="token operator">*</span> house<span class="token punctuation">[</span><span class="token string">&quot;number_of_windows&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span>
    
    <span class="token keyword">if</span> highest_cost <span class="token operator">&lt;</span> cost<span class="token punctuation">:</span>
        highest_cost <span class="token operator">=</span> cost

<span class="token comment"># Show the result.</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The most expensive house owned by the one paying the most costs &quot;</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>highest_cost<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>1 point for computing the costs for all owners</li><li>1 point for finding the owner with the highest cost</li><li>1 point for finding the highest house cost belonging to the owner with the highest cost</li><li>Point reduction for errors: <ul><li>-0.1 points for each bad variable name</li><li>-0.1 points for each minor mistake, such as single character syntax errors</li></ul></li></ul></div></div><h2 id="question-22-2p" tabindex="-1"><a class="header-anchor" href="#question-22-2p" aria-hidden="true">#</a> Question 22 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>The class <code>Lock</code> represents a lock that can be unlocked by the correct 4 digit code. The one creating a new instance of the class gets to decide which the correct code should be. One can then pass one digit at a time to the lock, and when the last 4 digits passed to lock are the same as the correct code, the lock should be unlocked. Passing a (wrong) digit to the lock after that should lock it again.</p><p>The class <code>Lock</code> has the following constructor/methods:</p><table><thead><tr><th>Constructor/Method</th><th>Description</th></tr></thead><tbody><tr><td><code>Lock(correct_code)</code></td><td>Creates a new lock (that is locked) with the given <code>correct_code</code> (string containing 4 digits).</td></tr><tr><td><code>is_unlocked()</code></td><td>Returns <code>True</code> if the last 4 digits passed to the lock is the correct code, otherwise <code>False</code></td></tr><tr><td><code>try_unlock(digit)</code></td><td>Passes the <code>digit</code> (number) to the lock in an attempt to unlock it.</td></tr></tbody></table><p>Write a program making use of the class. In the program, the correct code should be <code>0321</code>. You should then ask the user to enter a digit at a time until the lock unlocks.</p><p>Sample usage:</p><div style="${
    (0,server_renderer.ssrRenderStyle)({"font-family":"monospace","padding-left":"2em"})
  }"><p>Enter next digit to use in the lock: <strong>5</strong><br> Enter next digit to use in the lock: <strong>3</strong><br> Enter next digit to use in the lock: <strong>1</strong><br> Enter next digit to use in the lock: <strong>7</strong><br> Enter next digit to use in the lock: <strong>2</strong><br> Enter next digit to use in the lock: <strong>0</strong><br> Enter next digit to use in the lock: <strong>3</strong><br> Enter next digit to use in the lock: <strong>2</strong><br> Enter next digit to use in the lock: <strong>1</strong><br> The lock is now unlocked!</p></div><p><strong>Note</strong>: The output should look precisely as in the example above (including white-spaces, but with the exception of the boldness from the input, of course).</p><p><strong>Note</strong>: No error handling is needed; you can expect the user to always enter a digit.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>lock <span class="token operator">=</span> Lock<span class="token punctuation">(</span><span class="token string">&quot;0321&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">while</span> <span class="token keyword">not</span> lock<span class="token punctuation">.</span>is_unlocked<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    
    next_digit <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter next digit to use in the lock: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    
    lock<span class="token punctuation">.</span>try_unlock<span class="token punctuation">(</span>next_digit<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The lock is now unlocked!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>2 points for an answer that largely works</li><li>Point reduction for errors: <ul><li>-0.1 points for passing string to <code>try_unlock()</code></li><li>-0.25 points for not using <code>0321</code> as the correct code</li><li>-0.25 points for not passing the correct code as a string</li><li>-0.25 points for each badly named variable (e.g. <code>start</code> or <code>test</code> for the lock object)</li><li>-0.25 points for not using <code>()</code> when calling a method</li><li>-1 point for doing unnecessary things, such as storing user input in a list yourself</li></ul></li></ul></div></div><h2 id="question-23-2p" tabindex="-1"><a class="header-anchor" href="#question-23-2p" aria-hidden="true">#</a> Question 23 (2p)</h2><div class="exam-question-container"><div class="exam-question"><h2>Question</h2><p>The class <code>Lock</code> represents a lock that can be unlocked by the correct 4 digit code. The one creating a new instance of the class gets to decide which the correct code should be. One can then pass one digit at a time to the lock, and when the last 4 digits passed to lock are the same as the correct code, the lock should be unlocked. Passing a (wrong) digit to the lock after that should lock it again.</p><p>The class <code>Lock</code> has the following constructor/methods:</p><table><thead><tr><th>Constructor/Method</th><th>Description</th></tr></thead><tbody><tr><td><code>Lock(correct_code)</code></td><td>Creates a new lock (that is locked) with the given <code>correct_code</code> (string containing 4 digits).</td></tr><tr><td><code>is_unlocked()</code></td><td>Returns <code>True</code> if the last 4 digits passed to the lock is the correct code, otherwise <code>False</code></td></tr><tr><td><code>try_unlock(digit)</code></td><td>Passes the <code>digit</code> (number) to the lock in an attempt to unlock it.</td></tr></tbody></table><p>Implement the <code>Lock</code> class per the description above.</p></div><div class="exam-sample-answer"><h2>Sample answer</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Lock</span><span class="token punctuation">:</span>
    
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> correct_code<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>correct_code <span class="token operator">=</span> correct_code
        self<span class="token punctuation">.</span>tried_digits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    
    <span class="token keyword">def</span> <span class="token function">is_unlocked</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        
        code_length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>correct_code<span class="token punctuation">)</span>
        
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>tried_digits<span class="token punctuation">)</span> <span class="token operator">&lt;</span> code_length<span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        
        <span class="token keyword">for</span> correct_index <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>code_length<span class="token punctuation">)</span><span class="token punctuation">:</span>
            test_index <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>tried_digits<span class="token punctuation">)</span> <span class="token operator">-</span> code_length <span class="token operator">+</span> correct_index
            <span class="token keyword">if</span> self<span class="token punctuation">.</span>correct_code<span class="token punctuation">[</span>correct_index<span class="token punctuation">]</span> <span class="token operator">!=</span> self<span class="token punctuation">.</span>tried_digits<span class="token punctuation">[</span>test_index<span class="token punctuation">]</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token boolean">False</span>
        
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    
    <span class="token keyword">def</span> <span class="token function">try_unlock</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> digit<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>tried_digits<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">(</span>digit<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div></div><div class="exam-marking-guidelines"><h2>Marking guidelines</h2><ul><li>0.5 points for having the constructor, methods and all parameters correct</li><li>1.5 points for largely having the implementation of the constructor and all methods correct</li><li>Point reduction for errors: <ul><li>-0.1 points for not converting <code>digit</code> parameter to string</li><li>-0.25 points for missing the <code>self</code> parameter</li><li>-0.25 points for initializing an instance variable in a method instead of constructor</li><li>-0.5 points for changing instance variables in <code>is_unlocked()</code></li><li>-0.75 points for code crashing when less than 4 digits have been entered</li></ul></li></ul></div></div><!--]-->`)
}
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2022-02-13.html.vue?vue&type=template&id=b51299dc

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(3744);
;// CONCATENATED MODULE: ./src/.vuepress/.temp/pages/courses/introduction-to-script-programming/exams/exam-2022-02-13.html.vue

const script = {}

;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['ssrRender',ssrRender]])

/* harmony default export */ const exam_2022_02_13_html = (__exports__);

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

/***/ 7780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const data = {
  "key": "v-43b69cf1",
  "path": "/courses/introduction-to-script-programming/exams/exam-2022-02-13.html",
  "title": "Exam 2022-02-13",
  "lang": "en-US",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Information",
      "slug": "information",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 1 (1p)",
      "slug": "question-1-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 2 (1p)",
      "slug": "question-2-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 3 (1p)",
      "slug": "question-3-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 4 (1p)",
      "slug": "question-4-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 5 (1p)",
      "slug": "question-5-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 6 (1p)",
      "slug": "question-6-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 7 (1p)",
      "slug": "question-7-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 8 (1p)",
      "slug": "question-8-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 9 (1p)",
      "slug": "question-9-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 10 (1p)",
      "slug": "question-10-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 11 (1p)",
      "slug": "question-11-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 12 (1p)",
      "slug": "question-12-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 13 (1p)",
      "slug": "question-13-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 14 (1p)",
      "slug": "question-14-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 15 (1p)",
      "slug": "question-15-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 16 (1p)",
      "slug": "question-16-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 17 (1p)",
      "slug": "question-17-1p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 18 (2p)",
      "slug": "question-18-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 19 (2p)",
      "slug": "question-19-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 20 (2p)",
      "slug": "question-20-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 21 (3p)",
      "slug": "question-21-3p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 22 (2p)",
      "slug": "question-22-2p",
      "children": []
    },
    {
      "level": 2,
      "title": "Question 23 (2p)",
      "slug": "question-23-2p",
      "children": []
    }
  ],
  "filePathRelative": "courses/introduction-to-script-programming/exams/exam-2022-02-13.md",
  "git": {
    "updatedTime": 1645806182000
  }
}


/***/ })

};
;
//# sourceMappingURL=251.app.js.map