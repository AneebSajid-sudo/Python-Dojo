// =============================================
// Python Dojo — Lesson Data
// =============================================

const LESSONS = [
  // ─── LESSON 1: What is Python? ─────────────
  {
    id: 1,
    icon: "🐍",
    title: "What is Python?",
    desc: "Meet the language that powers Instagram, Netflix, and NASA.",
    content: `
      <h3>🤔 So What Even Is Python?</h3>
      <p>Python is a <strong>programming language</strong> — basically a way to give instructions to your computer. Think of it like learning a new language, except instead of talking to people, you're talking to machines.</p>
      <p>Python was created by <strong>Guido van Rossum</strong> in 1991 and it's become one of the most popular languages in the world. Why? Because it's <strong>simple, readable, and powerful</strong>.</p>

      <h3>🌍 Who Uses Python?</h3>
      <ul>
        <li><strong>Instagram</strong> — their entire backend runs on Python</li>
        <li><strong>Netflix</strong> — uses Python for recommendations</li>
        <li><strong>NASA</strong> — uses Python for scientific computing</li>
        <li><strong>Google</strong> — Python is one of their main languages</li>
        <li><strong>AI & Machine Learning</strong> — Python dominates this field</li>
      </ul>

      <h3>💡 Why Python is Perfect for Beginners</h3>
      <p>Other languages look like this:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">Java (other language)</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">public class</span> HelloWorld {
    <span class="kw">public static void</span> <span class="fn">main</span>(String[] args) {
        System.out.<span class="fn">println</span>(<span class="str">"Hello, World!"</span>);
    }
}</pre>
        </div>
      </div>

      <p>Python looks like this:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">Python</span>
        </div>
        <div class="code-body">
          <pre><span class="fn">print</span>(<span class="str">"Hello, World!"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Hello, World!</div>
      </div>

      <p>See the difference? Python is <strong>clean and readable</strong> — it almost looks like English!</p>

      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>Pro tip:</strong> You don't need to be a math genius or have any prior experience to learn Python. If you can follow a recipe, you can write code.
        </div>
      </div>

      <h3>🛠️ Getting Python on Your Computer</h3>
      <p>To run Python code, you need to install it:</p>
      <ol>
        <li>Go to <strong>python.org</strong></li>
        <li>Download the latest version (Python 3.x)</li>
        <li>Install it — <strong>make sure to check "Add Python to PATH"</strong> during installation</li>
        <li>Open your terminal/command prompt and type <code>python --version</code> to verify</li>
      </ol>

      <div class="callout info">
        <span class="callout-icon">ℹ️</span>
        <div class="callout-body">
          You can also practice Python online at <strong>replit.com</strong> or <strong>python.org/shell</strong> — no installation needed!
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What is Python?",
        options: ["A type of snake", "A programming language", "A video game", "A website"],
        correct: 1,
      },
      {
        question: "Who created Python?",
        options: ["Elon Musk", "Bill Gates", "Guido van Rossum", "Mark Zuckerberg"],
        correct: 2,
      },
      {
        question: 'What does print("Hello") do in Python?',
        options: ["Prints a physical paper", "Shows Hello on the screen", "Creates a variable", "Deletes a file"],
        correct: 1,
      },
    ],
  },

  // ─── LESSON 2: Variables & Data Types ──────
  {
    id: 2,
    icon: "📦",
    title: "Variables & Data Types",
    desc: "Learn how to store and label information in Python.",
    content: `
      <h3>📦 What Are Variables?</h3>
      <p>A <strong>variable</strong> is like a labeled box where you store information. You give the box a name, and put something inside it.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">variables.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Creating variables</span>
name <span class="op">=</span> <span class="str">"Aneeb"</span>
age <span class="op">=</span> <span class="num">20</span>
height <span class="op">=</span> <span class="num">5.9</span>
is_cool <span class="op">=</span> <span class="kw">True</span>

<span class="fn">print</span>(name)
<span class="fn">print</span>(age)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Aneeb
20</div>
      </div>

      <p>The <code>=</code> sign in Python doesn't mean "equals" like in math. It means <strong>"assign"</strong> — you're putting a value into the variable.</p>

      <h3>🎨 Data Types — The Different Kinds of Data</h3>
      <p>Python has several basic data types:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">data_types.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># String (str) — text, always in quotes</span>
greeting <span class="op">=</span> <span class="str">"Hello, World!"</span>

<span class="cmt"># Integer (int) — whole numbers</span>
score <span class="op">=</span> <span class="num">100</span>

<span class="cmt"># Float — decimal numbers</span>
temperature <span class="op">=</span> <span class="num">98.6</span>

<span class="cmt"># Boolean (bool) — True or False</span>
is_raining <span class="op">=</span> <span class="kw">False</span>

<span class="cmt"># Check the type of any variable</span>
<span class="fn">print</span>(<span class="fn">type</span>(greeting))
<span class="fn">print</span>(<span class="fn">type</span>(score))
<span class="fn">print</span>(<span class="fn">type</span>(temperature))
<span class="fn">print</span>(<span class="fn">type</span>(is_raining))</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">&lt;class 'str'&gt;
&lt;class 'int'&gt;
&lt;class 'float'&gt;
&lt;class 'bool'&gt;</div>
      </div>

      <h3>📝 Naming Rules for Variables</h3>
      <ul>
        <li>Can contain letters, numbers, and underscores</li>
        <li><strong>Cannot start with a number</strong> — <code>2cool</code> is invalid ❌</li>
        <li><strong>No spaces</strong> — use underscores instead: <code>my_name</code> ✅</li>
        <li>Case-sensitive — <code>Name</code> and <code>name</code> are different variables</li>
        <li>Use descriptive names: <code>player_score</code> is better than <code>x</code></li>
      </ul>

      <div class="callout warning">
        <span class="callout-icon">⚠️</span>
        <div class="callout-body">
          <strong>Watch out!</strong> Don't use Python's built-in words as variable names. For example, don't name a variable <code>print</code>, <code>type</code>, or <code>list</code> — that'll break things.
        </div>
      </div>

      <h3>🔄 Changing Variables</h3>
      <p>You can update a variable at any time — just assign a new value:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">update.py</span>
        </div>
        <div class="code-body">
          <pre>mood <span class="op">=</span> <span class="str">"happy"</span>
<span class="fn">print</span>(mood)

mood <span class="op">=</span> <span class="str">"excited"</span>
<span class="fn">print</span>(mood)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">happy
excited</div>
      </div>
    `,
    quiz: [
      {
        question: "What does the = sign do in Python?",
        options: ["Checks if two things are equal", "Assigns a value to a variable", "Deletes a variable", "Creates a function"],
        correct: 1,
      },
      {
        question: 'What is the data type of "Hello"?',
        options: ["int", "float", "str", "bool"],
        correct: 2,
      },
      {
        question: "Which variable name is INVALID?",
        options: ["my_name", "player1", "2fast", "_score"],
        correct: 2,
      },
    ],
  },

  // ─── LESSON 3: Strings ────────────────────
  {
    id: 3,
    icon: "✏️",
    title: "Working with Strings",
    desc: "Master text manipulation — the bread and butter of programming.",
    content: `
      <h3>✏️ What Are Strings?</h3>
      <p>Strings are just <strong>text</strong>. Anything wrapped in quotes is a string in Python. You can use single quotes <code>'</code> or double quotes <code>"</code> — both work the same.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">strings.py</span>
        </div>
        <div class="code-body">
          <pre>name <span class="op">=</span> <span class="str">"Python"</span>
greeting <span class="op">=</span> <span class="str">'Hello there!'</span>
message <span class="op">=</span> <span class="str">"It's a beautiful day"</span>

<span class="fn">print</span>(name)
<span class="fn">print</span>(greeting)</pre>
        </div>
      </div>

      <h3>🔗 String Concatenation (Combining Strings)</h3>
      <p>You can combine strings using the <code>+</code> operator:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">concat.py</span>
        </div>
        <div class="code-body">
          <pre>first <span class="op">=</span> <span class="str">"Big"</span>
last <span class="op">=</span> <span class="str">"Anti"</span>
full <span class="op">=</span> first <span class="op">+</span> <span class="str">" "</span> <span class="op">+</span> last

<span class="fn">print</span>(full)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Big Anti</div>
      </div>

      <h3>✨ f-Strings (The Best Way to Format Strings)</h3>
      <p>f-strings let you put variables <strong>directly inside</strong> your text. Just put <code>f</code> before the quote and use <code>{curly braces}</code>:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">fstrings.py</span>
        </div>
        <div class="code-body">
          <pre>name <span class="op">=</span> <span class="str">"Aneeb"</span>
age <span class="op">=</span> <span class="num">20</span>

<span class="cmt"># Using an f-string</span>
message <span class="op">=</span> <span class="str">f"My name is {name} and I'm {age} years old"</span>
<span class="fn">print</span>(message)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">My name is Aneeb and I'm 20 years old</div>
      </div>

      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>f-strings are your best friend.</strong> They're the cleanest way to mix variables and text. Always use them instead of ugly string concatenation with <code>+</code>.
        </div>
      </div>

      <h3>🧰 Useful String Methods</h3>
      <p>Strings come with built-in <strong>methods</strong> (actions you can perform on them):</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">methods.py</span>
        </div>
        <div class="code-body">
          <pre>text <span class="op">=</span> <span class="str">"  Hello, Python!  "</span>

<span class="fn">print</span>(text.<span class="fn">upper</span>())        <span class="cmt"># "  HELLO, PYTHON!  "</span>
<span class="fn">print</span>(text.<span class="fn">lower</span>())        <span class="cmt"># "  hello, python!  "</span>
<span class="fn">print</span>(text.<span class="fn">strip</span>())        <span class="cmt"># "Hello, Python!" (removes spaces)</span>
<span class="fn">print</span>(text.<span class="fn">replace</span>(<span class="str">"Python"</span>, <span class="str">"World"</span>))
<span class="fn">print</span>(<span class="fn">len</span>(text))            <span class="cmt"># 18 (length of string)</span></pre>
        </div>
      </div>

      <h3>🔢 String Indexing</h3>
      <p>Each character in a string has a position (index), starting from <strong>0</strong>:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">indexing.py</span>
        </div>
        <div class="code-body">
          <pre>word <span class="op">=</span> <span class="str">"Python"</span>
<span class="cmt">#        P  y  t  h  o  n</span>
<span class="cmt">#        0  1  2  3  4  5</span>

<span class="fn">print</span>(word[<span class="num">0</span>])    <span class="cmt"># P</span>
<span class="fn">print</span>(word[<span class="num">1</span>])    <span class="cmt"># y</span>
<span class="fn">print</span>(word[<span class="num">-1</span>])   <span class="cmt"># n (last character)</span>
<span class="fn">print</span>(word[<span class="num">0</span>:<span class="num">3</span>])  <span class="cmt"># Pyt (slicing)</span></pre>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does the + operator do with strings?",
        options: ["Adds numbers", "Combines (concatenates) strings", "Deletes a string", "Creates a new variable"],
        correct: 1,
      },
      {
        question: 'What does f"Hello {name}" do?',
        options: ["Prints the letter f", "Inserts the value of name into the string", "Creates a file", "Causes an error"],
        correct: 1,
      },
      {
        question: 'If word = "Hello", what is word[0]?',
        options: ["H", "e", "Hello", "1"],
        correct: 0,
      },
    ],
  },

  // ─── LESSON 4: Numbers & Math ─────────────
  {
    id: 4,
    icon: "🔢",
    title: "Numbers & Math",
    desc: "Do math like a calculator — but way cooler.",
    content: `
      <h3>🔢 Numbers in Python</h3>
      <p>Python handles two main types of numbers:</p>
      <ul>
        <li><strong>Integers (int)</strong> — whole numbers: <code>42</code>, <code>-7</code>, <code>0</code></li>
        <li><strong>Floats (float)</strong> — decimal numbers: <code>3.14</code>, <code>-0.5</code>, <code>99.99</code></li>
      </ul>

      <h3>➕ Basic Math Operations</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">math.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Basic operations</span>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">+</span> <span class="num">5</span>)     <span class="cmt"># Addition:       15</span>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">-</span> <span class="num">5</span>)     <span class="cmt"># Subtraction:    5</span>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">*</span> <span class="num">5</span>)     <span class="cmt"># Multiplication: 50</span>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">/</span> <span class="num">3</span>)     <span class="cmt"># Division:       3.3333...</span>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">//</span> <span class="num">3</span>)    <span class="cmt"># Floor division: 3</span>
<span class="fn">print</span>(<span class="num">10</span> <span class="op">%</span> <span class="num">3</span>)     <span class="cmt"># Modulo (remainder): 1</span>
<span class="fn">print</span>(<span class="num">2</span> <span class="op">**</span> <span class="num">10</span>)    <span class="cmt"># Power: 1024</span></pre>
        </div>
      </div>

      <div class="callout info">
        <span class="callout-icon">ℹ️</span>
        <div class="callout-body">
          <strong>// (floor division)</strong> rounds down to the nearest whole number.<br>
          <strong>% (modulo)</strong> gives you the remainder. Super useful for checking if a number is even or odd!
        </div>
      </div>

      <h3>📊 Variables in Math</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">calc.py</span>
        </div>
        <div class="code-body">
          <pre>price <span class="op">=</span> <span class="num">29.99</span>
tax_rate <span class="op">=</span> <span class="num">0.08</span>
quantity <span class="op">=</span> <span class="num">3</span>

subtotal <span class="op">=</span> price <span class="op">*</span> quantity
tax <span class="op">=</span> subtotal <span class="op">*</span> tax_rate
total <span class="op">=</span> subtotal <span class="op">+</span> tax

<span class="fn">print</span>(<span class="str">f"Subtotal: ${'$'}{subtotal:.2f}"</span>)
<span class="fn">print</span>(<span class="str">f"Tax:      ${'$'}{tax:.2f}"</span>)
<span class="fn">print</span>(<span class="str">f"Total:    ${'$'}{total:.2f}"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Subtotal: $89.97
Tax:      $7.20
Total:    $97.17</div>
      </div>

      <h3>⚡ Shortcut Operators</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">shortcuts.py</span>
        </div>
        <div class="code-body">
          <pre>score <span class="op">=</span> <span class="num">100</span>

score <span class="op">+=</span> <span class="num">10</span>    <span class="cmt"># Same as: score = score + 10  → 110</span>
score <span class="op">-=</span> <span class="num">5</span>     <span class="cmt"># Same as: score = score - 5   → 105</span>
score <span class="op">*=</span> <span class="num">2</span>     <span class="cmt"># Same as: score = score * 2   → 210</span>

<span class="fn">print</span>(score)   <span class="cmt"># 210</span></pre>
        </div>
      </div>

      <h3>🔀 Type Conversion</h3>
      <p>Sometimes you need to convert between types:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">convert.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># String to number</span>
user_input <span class="op">=</span> <span class="str">"42"</span>
number <span class="op">=</span> <span class="fn">int</span>(user_input)
<span class="fn">print</span>(number <span class="op">+</span> <span class="num">8</span>)   <span class="cmt"># 50</span>

<span class="cmt"># Number to string</span>
age <span class="op">=</span> <span class="num">25</span>
<span class="fn">print</span>(<span class="str">"I am "</span> <span class="op">+</span> <span class="fn">str</span>(age) <span class="op">+</span> <span class="str">" years old"</span>)</pre>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does 10 // 3 return?",
        options: ["3.33", "3", "4", "1"],
        correct: 1,
      },
      {
        question: "What does 10 % 3 return?",
        options: ["3", "0", "1", "10"],
        correct: 2,
      },
      {
        question: "What does score += 5 do?",
        options: ["Sets score to 5", "Adds 5 to score", "Multiplies score by 5", "Checks if score equals 5"],
        correct: 1,
      },
    ],
  },

  // ─── LESSON 5: User Input ─────────────────
  {
    id: 5,
    icon: "⌨️",
    title: "Getting User Input",
    desc: "Make your programs interactive — talk to your users!",
    content: `
      <h3>⌨️ The input() Function</h3>
      <p>The <code>input()</code> function lets your program <strong>ask the user for information</strong>. The program pauses and waits for them to type something.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">input_demo.py</span>
        </div>
        <div class="code-body">
          <pre>name <span class="op">=</span> <span class="fn">input</span>(<span class="str">"What's your name? "</span>)
<span class="fn">print</span>(<span class="str">f"Hey {name}! Welcome to the Python Dojo! 🐍"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">What's your name? Aneeb
Hey Aneeb! Welcome to the Python Dojo! 🐍</div>
      </div>

      <div class="callout warning">
        <span class="callout-icon">⚠️</span>
        <div class="callout-body">
          <strong>Important:</strong> <code>input()</code> always returns a <strong>string</strong>, even if the user types a number. You need to convert it if you want to do math!
        </div>
      </div>

      <h3>🔢 Getting Number Input</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">age_input.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Wrap input() in int() to convert to a number</span>
age <span class="op">=</span> <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"How old are you? "</span>))
future_age <span class="op">=</span> age <span class="op">+</span> <span class="num">10</span>

<span class="fn">print</span>(<span class="str">f"In 10 years, you'll be {future_age}!"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">How old are you? 20
In 10 years, you'll be 30!</div>
      </div>

      <h3>🎯 Mini Project: Simple Calculator</h3>
      <p>Let's combine what we know to build a tiny calculator:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">calculator.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Simple Calculator</span>
num1 <span class="op">=</span> <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Enter first number: "</span>))
num2 <span class="op">=</span> <span class="fn">float</span>(<span class="fn">input</span>(<span class="str">"Enter second number: "</span>))

<span class="fn">print</span>(<span class="str">f"Sum:        {num1 + num2}"</span>)
<span class="fn">print</span>(<span class="str">f"Difference: {num1 - num2}"</span>)
<span class="fn">print</span>(<span class="str">f"Product:    {num1 * num2}"</span>)
<span class="fn">print</span>(<span class="str">f"Quotient:   {num1 / num2}"</span>)</pre>
        </div>
      </div>

      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>Use <code>float()</code> instead of <code>int()</code></strong> when you want to allow decimal numbers. <code>int()</code> only works with whole numbers.
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does input() return?",
        options: ["An integer", "A float", "A string", "A boolean"],
        correct: 2,
      },
      {
        question: 'How do you get a number from the user?',
        options: [
          'number("Enter: ")',
          'int(input("Enter: "))',
          'input(int("Enter: "))',
          'get_number("Enter: ")',
        ],
        correct: 1,
      },
      {
        question: "What happens if you try to do math with a string?",
        options: ["It works fine", "Python converts it automatically", "You get an error", "It returns 0"],
        correct: 2,
      },
    ],
  },

  // ─── LESSON 6: If Statements ──────────────
  {
    id: 6,
    icon: "🔀",
    title: "If Statements (Conditionals)",
    desc: "Teach your program to make decisions.",
    content: `
      <h3>🔀 Making Decisions in Code</h3>
      <p>Just like you make decisions every day ("If it's raining, bring an umbrella"), Python can make decisions too using <strong>if statements</strong>.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">if_basic.py</span>
        </div>
        <div class="code-body">
          <pre>age <span class="op">=</span> <span class="num">18</span>

<span class="kw">if</span> age <span class="op">>=</span> <span class="num">18</span>:
    <span class="fn">print</span>(<span class="str">"You're an adult! 🎉"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="str">"You're still a minor."</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">You're an adult! 🎉</div>
      </div>

      <div class="callout info">
        <span class="callout-icon">ℹ️</span>
        <div class="callout-body">
          <strong>Indentation matters in Python!</strong> The code inside an <code>if</code> block MUST be indented (usually 4 spaces). This is how Python knows which code belongs to the if statement.
        </div>
      </div>

      <h3>📊 Comparison Operators</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">comparisons.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Comparison operators</span>
x <span class="op">=</span> <span class="num">10</span>

x <span class="op">==</span> <span class="num">10</span>    <span class="cmt"># Equal to              → True</span>
x <span class="op">!=</span> <span class="num">5</span>     <span class="cmt"># Not equal to          → True</span>
x <span class="op">></span> <span class="num">5</span>      <span class="cmt"># Greater than          → True</span>
x <span class="op"><</span> <span class="num">20</span>     <span class="cmt"># Less than             → True</span>
x <span class="op">>=</span> <span class="num">10</span>    <span class="cmt"># Greater than or equal → True</span>
x <span class="op"><=</span> <span class="num">10</span>    <span class="cmt"># Less than or equal    → True</span></pre>
        </div>
      </div>

      <h3>🔗 elif — Multiple Conditions</h3>
      <p>Use <code>elif</code> (short for "else if") when you have more than two possibilities:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">grades.py</span>
        </div>
        <div class="code-body">
          <pre>score <span class="op">=</span> <span class="num">85</span>

<span class="kw">if</span> score <span class="op">>=</span> <span class="num">90</span>:
    grade <span class="op">=</span> <span class="str">"A"</span>
<span class="kw">elif</span> score <span class="op">>=</span> <span class="num">80</span>:
    grade <span class="op">=</span> <span class="str">"B"</span>
<span class="kw">elif</span> score <span class="op">>=</span> <span class="num">70</span>:
    grade <span class="op">=</span> <span class="str">"C"</span>
<span class="kw">elif</span> score <span class="op">>=</span> <span class="num">60</span>:
    grade <span class="op">=</span> <span class="str">"D"</span>
<span class="kw">else</span>:
    grade <span class="op">=</span> <span class="str">"F"</span>

<span class="fn">print</span>(<span class="str">f"Your grade: {grade}"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Your grade: B</div>
      </div>

      <h3>🧠 Logical Operators: and, or, not</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">logical.py</span>
        </div>
        <div class="code-body">
          <pre>age <span class="op">=</span> <span class="num">25</span>
has_id <span class="op">=</span> <span class="kw">True</span>

<span class="cmt"># Both must be true</span>
<span class="kw">if</span> age <span class="op">>=</span> <span class="num">18</span> <span class="kw">and</span> has_id:
    <span class="fn">print</span>(<span class="str">"Welcome in!"</span>)

<span class="cmt"># At least one must be true</span>
<span class="kw">if</span> age <span class="op"><</span> <span class="num">13</span> <span class="kw">or</span> age <span class="op">></span> <span class="num">65</span>:
    <span class="fn">print</span>(<span class="str">"You get a discount!"</span>)

<span class="cmt"># Flip a condition</span>
is_banned <span class="op">=</span> <span class="kw">False</span>
<span class="kw">if</span> <span class="kw">not</span> is_banned:
    <span class="fn">print</span>(<span class="str">"You can play the game!"</span>)</pre>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does == check for?",
        options: ["Assignment", "Equality (are they the same?)", "Greater than", "Not equal"],
        correct: 1,
      },
      {
        question: "What is elif short for?",
        options: ["else finally", "else if", "elif is its own thing", "element if"],
        correct: 1,
      },
      {
        question: 'What keyword checks if BOTH conditions are true?',
        options: ["or", "not", "and", "both"],
        correct: 2,
      },
    ],
  },

  // ─── LESSON 7: Loops ─────────────────────
  {
    id: 7,
    icon: "🔁",
    title: "Loops",
    desc: "Repeat actions without writing the same code over and over.",
    content: `
      <h3>🔁 Why Loops?</h3>
      <p>Imagine you wanted to print "Hello" 100 times. Writing <code>print("Hello")</code> 100 times? Nah. That's what <strong>loops</strong> are for — they repeat code automatically.</p>

      <h3>🔄 For Loops</h3>
      <p>A <code>for</code> loop runs code a <strong>specific number of times</strong>:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">for_loop.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Print numbers 0 through 4</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="fn">print</span>(i)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">0
1
2
3
4</div>
      </div>

      <p><code>range(5)</code> generates numbers from 0 to 4 (5 numbers total). You can also customize it:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">range_examples.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># range(start, stop)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>):
    <span class="fn">print</span>(i)       <span class="cmt"># 1, 2, 3, 4, 5</span>

<span class="cmt"># range(start, stop, step)</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">0</span>, <span class="num">20</span>, <span class="num">5</span>):
    <span class="fn">print</span>(i)       <span class="cmt"># 0, 5, 10, 15</span>

<span class="cmt"># Loop through a string</span>
<span class="kw">for</span> letter <span class="kw">in</span> <span class="str">"Python"</span>:
    <span class="fn">print</span>(letter)  <span class="cmt"># P, y, t, h, o, n</span></pre>
        </div>
      </div>

      <h3>🔄 While Loops</h3>
      <p>A <code>while</code> loop keeps running <strong>as long as a condition is true</strong>:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">while_loop.py</span>
        </div>
        <div class="code-body">
          <pre>count <span class="op">=</span> <span class="num">0</span>

<span class="kw">while</span> count <span class="op"><</span> <span class="num">5</span>:
    <span class="fn">print</span>(<span class="str">f"Count is {count}"</span>)
    count <span class="op">+=</span> <span class="num">1</span>

<span class="fn">print</span>(<span class="str">"Done!"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Count is 0
Count is 1
Count is 2
Count is 3
Count is 4
Done!</div>
      </div>

      <div class="callout warning">
        <span class="callout-icon">⚠️</span>
        <div class="callout-body">
          <strong>Infinite loop alert!</strong> If you forget to update the condition (like <code>count += 1</code>), the loop runs forever! If that happens, press <strong>Ctrl+C</strong> to stop it.
        </div>
      </div>

      <h3>⏹️ break and continue</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">break_continue.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># break — exit the loop early</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>):
    <span class="kw">if</span> i <span class="op">==</span> <span class="num">5</span>:
        <span class="kw">break</span>
    <span class="fn">print</span>(i)     <span class="cmt"># 0, 1, 2, 3, 4</span>

<span class="cmt"># continue — skip to the next iteration</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="num">5</span>):
    <span class="kw">if</span> i <span class="op">==</span> <span class="num">2</span>:
        <span class="kw">continue</span>
    <span class="fn">print</span>(i)     <span class="cmt"># 0, 1, 3, 4 (skips 2)</span></pre>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What does range(5) produce?",
        options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "5, 4, 3, 2, 1"],
        correct: 1,
      },
      {
        question: "What does break do in a loop?",
        options: ["Pauses the loop", "Exits the loop completely", "Skips to the next iteration", "Breaks the computer"],
        correct: 1,
      },
      {
        question: "When does a while loop stop?",
        options: ["After 10 iterations", "When the condition becomes False", "When Python gets tired", "It never stops"],
        correct: 1,
      },
    ],
  },

  // ─── LESSON 8: Lists ─────────────────────
  {
    id: 8,
    icon: "📋",
    title: "Lists",
    desc: "Store multiple items in a single variable.",
    content: `
      <h3>📋 What Are Lists?</h3>
      <p>A <strong>list</strong> is a collection that holds multiple items in a specific order. Think of it like a playlist — it has songs in a specific order, you can add/remove songs, and you can access any song by its position.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">lists.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Creating lists</span>
fruits <span class="op">=</span> [<span class="str">"apple"</span>, <span class="str">"banana"</span>, <span class="str">"cherry"</span>]
numbers <span class="op">=</span> [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
mixed <span class="op">=</span> [<span class="str">"hello"</span>, <span class="num">42</span>, <span class="kw">True</span>, <span class="num">3.14</span>]
empty <span class="op">=</span> []

<span class="fn">print</span>(fruits)
<span class="fn">print</span>(<span class="fn">len</span>(fruits))  <span class="cmt"># 3</span></pre>
        </div>
      </div>

      <h3>🔍 Accessing List Items</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">access.py</span>
        </div>
        <div class="code-body">
          <pre>colors <span class="op">=</span> [<span class="str">"red"</span>, <span class="str">"green"</span>, <span class="str">"blue"</span>, <span class="str">"yellow"</span>]

<span class="fn">print</span>(colors[<span class="num">0</span>])    <span class="cmt"># red (first item)</span>
<span class="fn">print</span>(colors[<span class="num">2</span>])    <span class="cmt"># blue</span>
<span class="fn">print</span>(colors[<span class="num">-1</span>])   <span class="cmt"># yellow (last item)</span>
<span class="fn">print</span>(colors[<span class="num">1</span>:<span class="num">3</span>])  <span class="cmt"># ['green', 'blue'] (slicing)</span></pre>
        </div>
      </div>

      <h3>✏️ Modifying Lists</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">modify.py</span>
        </div>
        <div class="code-body">
          <pre>games <span class="op">=</span> [<span class="str">"GTA"</span>, <span class="str">"Minecraft"</span>, <span class="str">"Fortnite"</span>]

<span class="cmt"># Add items</span>
games.<span class="fn">append</span>(<span class="str">"Valorant"</span>)       <span class="cmt"># Add to the end</span>
games.<span class="fn">insert</span>(<span class="num">1</span>, <span class="str">"Elden Ring"</span>)  <span class="cmt"># Insert at position 1</span>

<span class="cmt"># Remove items</span>
games.<span class="fn">remove</span>(<span class="str">"Fortnite"</span>)      <span class="cmt"># Remove by value</span>
popped <span class="op">=</span> games.<span class="fn">pop</span>()           <span class="cmt"># Remove & return last item</span>

<span class="cmt"># Change an item</span>
games[<span class="num">0</span>] <span class="op">=</span> <span class="str">"GTA VI"</span>

<span class="fn">print</span>(games)</pre>
        </div>
      </div>

      <h3>🔁 Looping Through Lists</h3>
      <p>This is where loops and lists become <strong>best friends</strong>:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">loop_list.py</span>
        </div>
        <div class="code-body">
          <pre>friends <span class="op">=</span> [<span class="str">"Ali"</span>, <span class="str">"Sara"</span>, <span class="str">"Omar"</span>, <span class="str">"Zara"</span>]

<span class="kw">for</span> friend <span class="kw">in</span> friends:
    <span class="fn">print</span>(<span class="str">f"Hey {friend}! 👋"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Hey Ali! 👋
Hey Sara! 👋
Hey Omar! 👋
Hey Zara! 👋</div>
      </div>

      <h3>⚡ List Comprehensions (Advanced but Cool)</h3>
      <p>A shortcut to create lists in one line:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">comprehension.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Create a list of squares</span>
squares <span class="op">=</span> [x<span class="op">**</span><span class="num">2</span> <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">1</span>, <span class="num">6</span>)]
<span class="fn">print</span>(squares)  <span class="cmt"># [1, 4, 9, 16, 25]</span>

<span class="cmt"># Filter even numbers</span>
evens <span class="op">=</span> [x <span class="kw">for</span> x <span class="kw">in</span> <span class="fn">range</span>(<span class="num">10</span>) <span class="kw">if</span> x <span class="op">%</span> <span class="num">2</span> <span class="op">==</span> <span class="num">0</span>]
<span class="fn">print</span>(evens)    <span class="cmt"># [0, 2, 4, 6, 8]</span></pre>
        </div>
      </div>

      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>Don't worry if list comprehensions look confusing right now.</strong> They're just a shortcut. You can always use a regular for loop instead — it does the same thing!
        </div>
      </div>
    `,
    quiz: [
      {
        question: 'If fruits = ["apple", "banana", "cherry"], what is fruits[1]?',
        options: ["apple", "banana", "cherry", "Error"],
        correct: 1,
      },
      {
        question: "Which method adds an item to the END of a list?",
        options: ["insert()", "append()", "add()", "push()"],
        correct: 1,
      },
      {
        question: "What does .pop() do?",
        options: ["Adds an item", "Removes and returns the last item", "Sorts the list", "Reverses the list"],
        correct: 1,
      },
    ],
  },

  // ─── LESSON 9: Functions ──────────────────
  {
    id: 9,
    icon: "⚙️",
    title: "Functions",
    desc: "Create reusable blocks of code — the key to clean programming.",
    content: `
      <h3>⚙️ What Are Functions?</h3>
      <p>A <strong>function</strong> is a reusable block of code that performs a specific task. Instead of writing the same code over and over, you put it in a function and call it whenever you need it.</p>

      <p>Think of it like a recipe. You define the recipe once, then you can cook it anytime.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">functions.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Defining a function</span>
<span class="kw">def</span> <span class="fn">greet</span>():
    <span class="fn">print</span>(<span class="str">"Hello! Welcome to the Dojo! 🥋"</span>)

<span class="cmt"># Calling the function</span>
<span class="fn">greet</span>()
<span class="fn">greet</span>()  <span class="cmt"># You can call it as many times as you want!</span></pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Hello! Welcome to the Dojo! 🥋
Hello! Welcome to the Dojo! 🥋</div>
      </div>

      <h3>📥 Parameters (Giving Functions Input)</h3>
      <p>Parameters let you pass information INTO a function:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">params.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">def</span> <span class="fn">greet</span>(name):
    <span class="fn">print</span>(<span class="str">f"Hey {name}! What's good? 👋"</span>)

<span class="fn">greet</span>(<span class="str">"Aneeb"</span>)
<span class="fn">greet</span>(<span class="str">"Ali"</span>)

<span class="cmt"># Multiple parameters</span>
<span class="kw">def</span> <span class="fn">add</span>(a, b):
    <span class="fn">print</span>(<span class="str">f"{a} + {b} = {a + b}"</span>)

<span class="fn">add</span>(<span class="num">5</span>, <span class="num">3</span>)
<span class="fn">add</span>(<span class="num">100</span>, <span class="num">200</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">Hey Aneeb! What's good? 👋
Hey Ali! What's good? 👋
5 + 3 = 8
100 + 200 = 300</div>
      </div>

      <h3>📤 Return Values (Getting Output from Functions)</h3>
      <p>Functions can <strong>send back</strong> a result using <code>return</code>:</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">return.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">def</span> <span class="fn">square</span>(number):
    <span class="kw">return</span> number <span class="op">**</span> <span class="num">2</span>

result <span class="op">=</span> <span class="fn">square</span>(<span class="num">5</span>)
<span class="fn">print</span>(result)      <span class="cmt"># 25</span>
<span class="fn">print</span>(<span class="fn">square</span>(<span class="num">9</span>))  <span class="cmt"># 81</span>

<span class="cmt"># Use it in calculations</span>
total <span class="op">=</span> <span class="fn">square</span>(<span class="num">3</span>) <span class="op">+</span> <span class="fn">square</span>(<span class="num">4</span>)
<span class="fn">print</span>(total)       <span class="cmt"># 25 (9 + 16)</span></pre>
        </div>
      </div>

      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>print() vs return:</strong> <code>print()</code> just shows something on screen. <code>return</code> actually sends the value back so you can USE it in your code.
        </div>
      </div>

      <h3>🎯 Default Parameters</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">defaults.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">def</span> <span class="fn">power</span>(base, exponent<span class="op">=</span><span class="num">2</span>):
    <span class="kw">return</span> base <span class="op">**</span> exponent

<span class="fn">print</span>(<span class="fn">power</span>(<span class="num">5</span>))       <span class="cmt"># 25 (uses default exponent=2)</span>
<span class="fn">print</span>(<span class="fn">power</span>(<span class="num">5</span>, <span class="num">3</span>))    <span class="cmt"># 125 (overrides to exponent=3)</span></pre>
        </div>
      </div>

      <h3>🎨 Real-World Example</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">real_world.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">def</span> <span class="fn">calculate_tip</span>(bill, tip_percent<span class="op">=</span><span class="num">15</span>):
    tip <span class="op">=</span> bill <span class="op">*</span> (tip_percent <span class="op">/</span> <span class="num">100</span>)
    total <span class="op">=</span> bill <span class="op">+</span> tip
    <span class="kw">return</span> total

dinner <span class="op">=</span> <span class="fn">calculate_tip</span>(<span class="num">50</span>)       <span class="cmt"># 15% tip</span>
fancy  <span class="op">=</span> <span class="fn">calculate_tip</span>(<span class="num">50</span>, <span class="num">20</span>)   <span class="cmt"># 20% tip</span>

<span class="fn">print</span>(<span class="str">f"With 15% tip: ${'$'}{dinner:.2f}"</span>)  <span class="cmt"># $57.50</span>
<span class="fn">print</span>(<span class="str">f"With 20% tip: ${'$'}{fancy:.2f}"</span>)   <span class="cmt"># $60.00</span></pre>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "What keyword do you use to create a function?",
        options: ["func", "function", "def", "create"],
        correct: 2,
      },
      {
        question: "What does return do in a function?",
        options: ["Prints a value", "Sends a value back to the caller", "Stops the program", "Creates a variable"],
        correct: 1,
      },
      {
        question: "What is a parameter?",
        options: [
          "A type of loop",
          "A variable defined inside a function",
          "Input that you pass to a function",
          "A Python keyword",
        ],
        correct: 2,
      },
    ],
  },

  // ─── LESSON 10: Dictionaries ──────────────
  {
    id: 10,
    icon: "📖",
    title: "Dictionaries",
    desc: "Store data in key-value pairs — like a real dictionary!",
    content: `
      <h3>📖 What Are Dictionaries?</h3>
      <p>A <strong>dictionary</strong> stores data as <strong>key-value pairs</strong>. Think of a real dictionary: you look up a <strong>word</strong> (key) and get its <strong>definition</strong> (value).</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">dict.py</span>
        </div>
        <div class="code-body">
          <pre><span class="cmt"># Creating a dictionary</span>
player <span class="op">=</span> {
    <span class="str">"name"</span>: <span class="str">"Aneeb"</span>,
    <span class="str">"level"</span>: <span class="num">5</span>,
    <span class="str">"xp"</span>: <span class="num">1250</span>,
    <span class="str">"is_active"</span>: <span class="kw">True</span>
}

<span class="fn">print</span>(player)</pre>
        </div>
      </div>

      <h3>🔍 Accessing Values</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">access_dict.py</span>
        </div>
        <div class="code-body">
          <pre>player <span class="op">=</span> {<span class="str">"name"</span>: <span class="str">"Aneeb"</span>, <span class="str">"level"</span>: <span class="num">5</span>, <span class="str">"xp"</span>: <span class="num">1250</span>}

<span class="cmt"># Access by key</span>
<span class="fn">print</span>(player[<span class="str">"name"</span>])     <span class="cmt"># Aneeb</span>
<span class="fn">print</span>(player[<span class="str">"level"</span>])    <span class="cmt"># 5</span>

<span class="cmt"># Safe access with .get() (no error if key missing)</span>
<span class="fn">print</span>(player.<span class="fn">get</span>(<span class="str">"xp"</span>))       <span class="cmt"># 1250</span>
<span class="fn">print</span>(player.<span class="fn">get</span>(<span class="str">"rank"</span>, <span class="str">"N/A"</span>))  <span class="cmt"># N/A (default value)</span></pre>
        </div>
      </div>

      <h3>✏️ Modifying Dictionaries</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">modify_dict.py</span>
        </div>
        <div class="code-body">
          <pre>profile <span class="op">=</span> {<span class="str">"name"</span>: <span class="str">"Aneeb"</span>, <span class="str">"age"</span>: <span class="num">20</span>}

<span class="cmt"># Add / Update</span>
profile[<span class="str">"city"</span>] <span class="op">=</span> <span class="str">"Lahore"</span>     <span class="cmt"># Add new key</span>
profile[<span class="str">"age"</span>] <span class="op">=</span> <span class="num">21</span>             <span class="cmt"># Update existing key</span>

<span class="cmt"># Delete</span>
<span class="kw">del</span> profile[<span class="str">"age"</span>]               <span class="cmt"># Remove a key</span>

<span class="fn">print</span>(profile)
<span class="cmt"># {'name': 'Aneeb', 'city': 'Lahore'}</span></pre>
        </div>
      </div>

      <h3>🔁 Looping Through Dictionaries</h3>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">loop_dict.py</span>
        </div>
        <div class="code-body">
          <pre>scores <span class="op">=</span> {<span class="str">"math"</span>: <span class="num">95</span>, <span class="str">"english"</span>: <span class="num">87</span>, <span class="str">"science"</span>: <span class="num">92</span>}

<span class="cmt"># Loop through keys</span>
<span class="kw">for</span> subject <span class="kw">in</span> scores:
    <span class="fn">print</span>(subject)

<span class="cmt"># Loop through values</span>
<span class="kw">for</span> score <span class="kw">in</span> scores.<span class="fn">values</span>():
    <span class="fn">print</span>(score)

<span class="cmt"># Loop through both keys AND values</span>
<span class="kw">for</span> subject, score <span class="kw">in</span> scores.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="str">f"{subject}: {score}"</span>)</pre>
        </div>
      </div>
      <div class="output-block">
        <div class="output-label">Output</div>
        <div class="output-body">math: 95
english: 87
science: 92</div>
      </div>

      <h3>🏗️ Nested Dictionaries</h3>
      <p>Dictionaries can contain other dictionaries — this is super common in real-world data:</p>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">nested.py</span>
        </div>
        <div class="code-body">
          <pre>school <span class="op">=</span> {
    <span class="str">"student1"</span>: {<span class="str">"name"</span>: <span class="str">"Ali"</span>,  <span class="str">"gpa"</span>: <span class="num">3.8</span>},
    <span class="str">"student2"</span>: {<span class="str">"name"</span>: <span class="str">"Sara"</span>, <span class="str">"gpa"</span>: <span class="num">3.9</span>},
}

<span class="fn">print</span>(school[<span class="str">"student1"</span>][<span class="str">"name"</span>])  <span class="cmt"># Ali</span>
<span class="fn">print</span>(school[<span class="str">"student2"</span>][<span class="str">"gpa"</span>])   <span class="cmt"># 3.9</span></pre>
        </div>
      </div>

      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>Dictionaries are EVERYWHERE.</strong> JSON data from APIs? Dictionaries. User profiles? Dictionaries. Game stats? Dictionaries. Master them and you'll be set!
        </div>
      </div>
    `,
    quiz: [
      {
        question: "How do you access a value in a dictionary?",
        options: ['dict.value("key")', 'dict["key"]', "dict(key)", "dict.key"],
        correct: 1,
      },
      {
        question: "What does .get() do differently from bracket notation?",
        options: [
          "It's faster",
          "It returns None instead of an error if the key doesn't exist",
          "It deletes the key",
          "It adds a new key",
        ],
        correct: 1,
      },
      {
        question: "Which method gives you both keys and values when looping?",
        options: [".keys()", ".values()", ".items()", ".all()"],
        correct: 2,
      },
    ],
  },

  // ─── LESSON 11: Error Handling ─────────────
  {
    id: 11,
    icon: "⚠️",
    title: "Error Handling (Try/Except)",
    desc: "Stop your programs from crashing when things go wrong.",
    content: `
      <h3>💥 When Code Goes Boom</h3>
      <p>Errors happen. If you ask a user for a number, and they type "pizza", Python will panic and crash with a <strong>ValueError</strong>. We use <strong>try and except</strong> blocks to catch these errors gracefully.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">try_except.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">try</span>:
    age <span class="op">=</span> <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Enter your age: "</span>))
    <span class="fn">print</span>(<span class="str">f"You are {age} years old."</span>)
<span class="kw">except</span> <span class="typ">ValueError</span>:
    <span class="fn">print</span>(<span class="str">"Whoops! Please enter a valid number, not text!"</span>)</pre>
        </div>
      </div>
      
      <p>The code inside the <code>try</code> block runs first. If it hits an error, instead of crashing, it jumps immediately to the <code>except</code> block.</p>
    `,
    quiz: [
      {
        question: "What is the purpose of a try/except block?",
        options: ["To make code run faster", "To catch errors and prevent crashes", "To create a loop", "To define a function"],
        correct: 1,
      },
      {
        question: "If the code in the 'try' block succeeds with no errors, what happens to the 'except' block?",
        options: ["It runs anyway", "It is skipped", "The program crashes", "It runs twice"],
        correct: 1,
      }
    ],
  },

  // ─── LESSON 12: Object-Oriented Programming (OOP) ─────────────
  {
    id: 12,
    icon: "📦",
    title: "Object-Oriented Programming",
    desc: "Level up your code by building custom Objects.",
    content: `
      <h3>🤖 What is OOP?</h3>
      <p>Object-Oriented Programming (OOP) lets you group data (variables) and behaviors (functions) together into a single package called an <strong>Object</strong>. You design these objects using a blueprint called a <strong>Class</strong>.</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">classes.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">class</span> <span class="typ">Dog</span>:
    <span class="cmt"># The __init__ method runs when you create a new dog</span>
    <span class="kw">def</span> <span class="fn">__init__</span>(<span class="kw">self</span>, name, breed):
        <span class="kw">self</span>.name <span class="op">=</span> name
        <span class="kw">self</span>.breed <span class="op">=</span> breed

    <span class="kw">def</span> <span class="fn">bark</span>(<span class="kw">self</span>):
        <span class="fn">print</span>(<span class="str">f"{self.name} says Woof!"</span>)

<span class="cmt"># Creating actual objects from our blueprint</span>
dog1 <span class="op">=</span> <span class="typ">Dog</span>(<span class="str">"Buddy"</span>, <span class="str">"Golden Retriever"</span>)
dog1.<span class="fn">bark</span>() <span class="cmt"># Outputs: Buddy says Woof!</span></pre>
        </div>
      </div>
      
      <div class="callout tip">
        <span class="callout-icon">💡</span>
        <div class="callout-body">
          <strong>self</strong> is just a way for the object to refer to itself. When Buddy barks, <code>self.name</code> knows it means "Buddy".
        </div>
      </div>
    `,
    quiz: [
      {
        question: "In Python OOP, what is a Class?",
        options: ["A blueprint for creating objects", "A type of loop", "An error message", "A built-in math function"],
        correct: 0,
      },
      {
        question: "What is the special method that runs automatically when you create a new object?",
        options: ["start()", "create()", "__init__()", "new()"],
        correct: 2,
      }
    ],
  },

  // ─── LESSON 13: Standard Libraries ─────────────
  {
    id: 13,
    icon: "📚",
    title: "Standard Libraries",
    desc: "Don't reinvent the wheel. Use Python's built-in toolkits.",
    content: `
      <h3>🛠️ Importing Modules</h3>
      <p>Python comes with a massive library of pre-written code. You just have to <code>import</code> it to use it!</p>

      <h4>🎲 Random</h4>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">random_demo.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">import</span> random

<span class="cmt"># Pick a random number between 1 and 10</span>
lucky_num <span class="op">=</span> random.<span class="fn">randint</span>(<span class="num">1</span>, <span class="num">10</span>)

<span class="cmt"># Pick a random item from a list</span>
weapons <span class="op">=</span> [<span class="str">"Sword"</span>, <span class="str">"Bow"</span>, <span class="str">"Magic Staff"</span>]
my_weapon <span class="op">=</span> random.<span class="fn">choice</span>(weapons)</pre>
        </div>
      </div>

      <h4>⏰ Datetime</h4>
      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">time_demo.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">import</span> datetime

now <span class="op">=</span> datetime.datetime.<span class="fn">now</span>()
<span class="fn">print</span>(<span class="str">f"The current year is {now.year}"</span>)</pre>
        </div>
      </div>
    `,
    quiz: [
      {
        question: "How do you bring a library like 'random' into your code?",
        options: ["use random", "include random", "import random", "require random"],
        correct: 2,
      },
      {
        question: "Which random method picks a random element from a list?",
        options: ["random.randint()", "random.choice()", "random.pick()", "random.select()"],
        correct: 1,
      }
    ],
  },


  // ─── LESSON 14: Third-Party Libraries (Requests) ─────────────
  {
    id: 14,
    icon: "🌐",
    title: "Working with APIs",
    desc: "Fetch data from the internet using the Requests library.",
    content: `
      <h3>🌐 Talking to the Internet</h3>
      <p>The <code>requests</code> library is the most popular way to make HTTP requests in Python. You can use it to fetch data from APIs (like getting weather data, crypto prices, or random jokes).</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">api_demo.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">import</span> requests

<span class="cmt"># We ask a joke API for a random joke</span>
response <span class="op">=</span> requests.<span class="fn">get</span>(<span class="str">"https://official-joke-api.appspot.com/random_joke"</span>)

<span class="cmt"># Convert the response to a dictionary</span>
data <span class="op">=</span> response.<span class="fn">json</span>()

<span class="fn">print</span>(data[<span class="str">"setup"</span>])
<span class="fn">print</span>(data[<span class="str">"punchline"</span>])</pre>
        </div>
      </div>
      
      <p>With just 4 lines of code, you are pulling live data from the web!</p>
    `,
    quiz: [
      {
        question: "Which library is used to fetch data from the internet?",
        options: ["random", "requests", "internet", "fetch"],
        correct: 1,
      },
      {
        question: "What format do APIs usually return data in, which you can easily convert to a Python Dictionary?",
        options: ["HTML", "JSON", "XML", "CSV"],
        correct: 1,
      }
    ],
  },

  // ─── LESSON 15: Mini-Project 1 ─────────────
  {
    id: 15,
    icon: "🔐",
    title: "Project: Password Generator",
    desc: "Build a program that generates secure passwords.",
    content: `
      <h3>🔐 Let's Build Something</h3>
      <p>Combine your knowledge of Strings, Loops, and the <code>random</code> library to build a password generator!</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">password_gen.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">import</span> random
<span class="kw">import</span> string

<span class="kw">def</span> <span class="fn">generate_password</span>(length):
    <span class="cmt"># Get all possible letters, numbers, and symbols</span>
    characters <span class="op">=</span> string.ascii_letters <span class="op">+</span> string.digits <span class="op">+</span> string.punctuation
    
    password <span class="op">=</span> <span class="str">""</span>
    <span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(length):
        <span class="cmt"># Pick a random character and add it</span>
        password <span class="op">+=</span> random.<span class="fn">choice</span>(characters)
        
    <span class="kw">return</span> password

<span class="fn">print</span>(<span class="str">"Your new password is:"</span>)
<span class="fn">print</span>(<span class="fn">generate_password</span>(<span class="num">12</span>))</pre>
        </div>
      </div>
      
      <p><strong>Try it out!</strong> Copy this code and run it in the Battle Arena Playground!</p>
    `,
    quiz: [
      {
        question: "In this project, what does random.choice() do?",
        options: ["Chooses the length of the password", "Picks one random character from the list of options", "Shuffles the string", "Generates a random number"],
        correct: 1,
      }
    ],
  },

  // ─── LESSON 16: Mini-Project 2 ─────────────
  {
    id: 16,
    icon: "🎮",
    title: "Project: Number Guesser",
    desc: "Build a game where the user guesses a secret number.",
    content: `
      <h3>🎮 The Number Guessing Game</h3>
      <p>Use Variables, While Loops, If Statements, and the Random library!</p>

      <div class="code-block">
        <div class="code-header">
          <div class="code-dots"><span></span><span></span><span></span></div>
          <span class="code-label">guesser.py</span>
        </div>
        <div class="code-body">
          <pre><span class="kw">import</span> random

secret <span class="op">=</span> random.<span class="fn">randint</span>(<span class="num">1</span>, <span class="num">100</span>)
guess <span class="op">=</span> <span class="num">0</span>
attempts <span class="op">=</span> <span class="num">0</span>

<span class="fn">print</span>(<span class="str">"I'm thinking of a number between 1 and 100!"</span>)

<span class="kw">while</span> guess <span class="op">!=</span> secret:
    guess <span class="op">=</span> <span class="fn">int</span>(<span class="fn">input</span>(<span class="str">"Your guess: "</span>))
    attempts <span class="op">+=</span> <span class="num">1</span>
    
    <span class="kw">if</span> guess <span class="op">&lt;</span> secret:
        <span class="fn">print</span>(<span class="str">"Too low!"</span>)
    <span class="kw">elif</span> guess <span class="op">&gt;</span> secret:
        <span class="fn">print</span>(<span class="str">"Too high!"</span>)

<span class="fn">print</span>(<span class="str">f"You got it in {attempts} tries!"</span>)</pre>
        </div>
      </div>
      
      <p><strong>Boom!</strong> You just built a fully functional game in Python. You are officially a programmer.</p>
    `,
    quiz: [
      {
        question: "Why do we use a 'while' loop here instead of a 'for' loop?",
        options: ["Because while loops are faster", "Because we don't know exactly how many tries it will take the user", "Because for loops cannot use input()"],
        correct: 1,
      }
    ],
  }
];
