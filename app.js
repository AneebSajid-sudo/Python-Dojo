// =============================================
// Python Dojo — App Logic
// =============================================

// ─── State ─────────────────────────────────
let currentLesson = 0;
let completedLessons = new Set();
let totalXP = 0;
let quizAnswers = {};

// ─── DOM Elements ──────────────────────────
const welcomeScreen = document.getElementById("welcomeScreen");
const lessonScreen = document.getElementById("lessonScreen");
const quizScreen = document.getElementById("quizScreen");
const completionScreen = document.getElementById("completionScreen");
const lessonNav = document.getElementById("lessonNav");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.getElementById("progressText");
const xpBadge = document.getElementById("xpBadge");

// ─── Initialize ────────────────────────────
function init() {
  loadProgress();
  buildNav();
  updateProgress();
  initParticles();
}

// ─── Mobile Menu Toggle ────────────────────
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const sidebarBackdrop = document.getElementById('sidebarBackdrop');

function toggleSidebar() {
  sidebar.classList.toggle('open');
  sidebarBackdrop.classList.toggle('show');
}

if (navToggle) {
  navToggle.addEventListener('click', toggleSidebar);
}
if (sidebarBackdrop) {
  sidebarBackdrop.addEventListener('click', toggleSidebar);
}

// ─── Navigation ────────────────────────────
function buildNav() {
  lessonNav.innerHTML = "";
  LESSONS.forEach((lesson, idx) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = `
      <span class="nav-icon">${lesson.icon}</span>
      <span>${lesson.title}</span>
      <span class="nav-check">✓</span>
    `;
    btn.onclick = () => goToLesson(idx);
    if (completedLessons.has(idx)) btn.classList.add("completed");
    li.appendChild(btn);
    lessonNav.appendChild(li);
  });
}

function setActiveNav(idx) {
  const buttons = lessonNav.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === idx);
  });
}

// ─── Screen Switching ──────────────────────
function showScreen(screen) {
  [welcomeScreen, lessonScreen, quizScreen, completionScreen].forEach((s) =>
    s.classList.remove("active")
  );
  screen.classList.add("active");

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── Start Learning ────────────────────────
function startLearning() {
  goToLesson(0);
}

// ─── Go To Lesson ──────────────────────────
function goToLesson(idx) {
  if (idx < 0 || idx >= LESSONS.length) return;

  currentLesson = idx;
  const lesson = LESSONS[idx];

  document.getElementById("lessonBadge").textContent = `Lesson ${idx + 1}`;
  document.getElementById("lessonTitle").textContent = lesson.title;
  document.getElementById("lessonDesc").textContent = lesson.desc;
  document.getElementById("lessonBody").innerHTML = lesson.content;

  // Prev/Next buttons
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.style.visibility = idx === 0 ? "hidden" : "visible";

  if (completedLessons.has(idx)) {
    // Already completed — show "Next Lesson"
    if (idx === LESSONS.length - 1) {
      nextBtn.textContent = "🏆 Complete Course";
      nextBtn.onclick = () => showCompletion();
    } else {
      nextBtn.innerHTML = "Next Lesson →";
      nextBtn.onclick = () => goToLesson(idx + 1);
    }
  } else {
    nextBtn.innerHTML = "Take Quiz 🧠";
    nextBtn.onclick = () => startQuiz(idx);
  }

  // Add copy buttons to code blocks
  setTimeout(() => {
    document.querySelectorAll('.code-block').forEach(block => {
      const header = block.querySelector('.code-header');
      const pre = block.querySelector('pre');
      if (header && pre && !header.querySelector('.copy-btn')) {
        const btn = document.createElement('button');
        btn.className = 'copy-btn';
        btn.textContent = 'Copy';
        btn.addEventListener('click', () => {
          navigator.clipboard.writeText(pre.textContent).then(() => {
            btn.textContent = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
              btn.textContent = 'Copy';
              btn.classList.remove('copied');
            }, 2000);
          });
        });
        header.appendChild(btn);
      }
    });
  }, 50);

  setActiveNav(idx);
  showScreen(lessonScreen);

  // Close mobile sidebar
  if (window.innerWidth <= 900) {
    sidebar.classList.remove('open');
    sidebarBackdrop.classList.remove('show');
  }
}

function prevLesson() {
  if (currentLesson > 0) goToLesson(currentLesson - 1);
}

function nextLesson() {
  // handled by dynamic onclick
}

// ─── Quiz ──────────────────────────────────
function startQuiz(lessonIdx) {
  const lesson = LESSONS[lessonIdx];
  quizAnswers = {};

  document.getElementById("quizTitle").textContent = `Quiz: ${lesson.title}`;
  document.getElementById("quizSubtitle").textContent = `Test what you learned in Lesson ${lessonIdx + 1}`;

  const quizBody = document.getElementById("quizBody");
  quizBody.innerHTML = "";

  lesson.quiz.forEach((q, qIdx) => {
    const div = document.createElement("div");
    div.className = "quiz-question";
    div.innerHTML = `
      <h4><span class="q-num">Q${qIdx + 1}.</span> ${q.question}</h4>
      <div class="quiz-options" id="q${qIdx}-options" role="radiogroup">
        ${q.options
          .map(
            (opt, oIdx) => `
          <div class="quiz-option" onclick="selectOption(${qIdx}, ${oIdx})" id="q${qIdx}-o${oIdx}" tabindex="0" role="radio" aria-checked="false" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();selectOption(${qIdx}, ${oIdx})}">
            <input type="radio" name="q${qIdx}" />
            <label>${escapeHtml(opt)}</label>
          </div>
        `
          )
          .join("")}
      </div>
    `;
    quizBody.appendChild(div);
  });

  document.getElementById("submitQuiz").classList.remove("hidden");
  document.getElementById("submitQuiz").style.display = "";
  document.getElementById("quizResults").classList.add("hidden");
  document.getElementById("quizNav").classList.add("hidden");

  showScreen(quizScreen);
}

function selectOption(qIdx, oIdx) {
  // Deselect all in this question
  const options = document.querySelectorAll(`#q${qIdx}-options .quiz-option`);
  options.forEach((opt) => opt.classList.remove("selected"));

  // Select clicked
  document.getElementById(`q${qIdx}-o${oIdx}`).classList.add("selected");
  quizAnswers[qIdx] = oIdx;

  // Set actual radio checked for a11y
  const radio = document.querySelector(`#q${qIdx}-o${oIdx} input[type="radio"]`);
  if (radio) radio.checked = true;
}

function submitQuiz() {
  const lesson = LESSONS[currentLesson];

  // Validate all questions answered
  const totalQs = lesson.quiz.length;
  const answeredQs = Object.keys(quizAnswers).length;
  if (answeredQs < totalQs) {
    const results = document.getElementById("quizResults");
    results.classList.remove("hidden");
    results.innerHTML = `
      <h3>⚠️ Hold Up!</h3>
      <p>Please answer all ${totalQs} questions before submitting.</p>
    `;
    return;
  }

  let correct = 0;

  lesson.quiz.forEach((q, qIdx) => {
    const options = document.querySelectorAll(`#q${qIdx}-options .quiz-option`);
    const userAnswer = quizAnswers[qIdx];

    options.forEach((opt, oIdx) => {
      opt.style.pointerEvents = "none";
      if (oIdx === q.correct) {
        opt.classList.add("correct");
      }
      if (userAnswer === oIdx && oIdx !== q.correct) {
        opt.classList.add("wrong");
      }
    });

    if (userAnswer === q.correct) correct++;
  });

  const total = lesson.quiz.length;
  const percentage = Math.round((correct / total) * 100);
  const passed = percentage >= 60;

  const results = document.getElementById("quizResults");
  results.classList.remove("hidden");

  if (passed) {
    const xpMultiplier = 25 + (currentLesson * 5);
    const xpEarned = correct * xpMultiplier;
    results.innerHTML = `
      <h3>🎉 Great Job!</h3>
      <div class="score-big">${correct}/${total}</div>
      <p>You scored ${percentage}% — you passed!</p>
      <p style="margin-top: 8px; color: var(--accent-amber);">+${xpEarned} XP earned!</p>
    `;

    // Mark completed
    completedLessons.add(currentLesson);
    totalXP += xpEarned;
    buildNav();
    updateProgress();
    saveProgress();
    showXPPopup(xpEarned);
  } else {
    results.innerHTML = `
      <h3>😅 Almost There!</h3>
      <div class="score-big">${correct}/${total}</div>
      <p>You need at least 60% to pass. Review the lesson and try again!</p>
    `;
  }

  document.getElementById("submitQuiz").style.display = "none";
  document.getElementById("quizNav").classList.remove("hidden");

  // Update continue button
  const quizNav = document.getElementById("quizNav");
  if (passed) {
    if (currentLesson === LESSONS.length - 1) {
      quizNav.innerHTML = `<button class="btn-primary btn-glow" onclick="showCompletion()">🏆 Complete Course</button>`;
    } else {
      quizNav.innerHTML = `<button class="btn-primary" onclick="goToLesson(${currentLesson + 1})">Next Lesson →</button>`;
    }
  } else {
    quizNav.innerHTML = `<button class="btn-secondary" onclick="goToLesson(${currentLesson})">📖 Review Lesson</button>`;
  }
}

function continueAfterQuiz() {
  // handled by dynamic innerHTML
}

// ─── Progress ──────────────────────────────
function updateProgress() {
  const pct = Math.round((completedLessons.size / LESSONS.length) * 100);
  progressFill.style.width = pct + "%";
  progressText.textContent = `${pct}% Complete`;
  xpBadge.textContent = `⚡ ${totalXP} XP`;
}

// ─── XP Popup ──────────────────────────────
function showXPPopup(amount) {
  // Create overlay
  let overlay = document.querySelector(".overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
  }

  // Create popup
  let popup = document.querySelector(".xp-popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.className = "xp-popup";
    document.body.appendChild(popup);
  }

  popup.innerHTML = `
    <div class="xp-amount">+${amount} XP</div>
    <div class="xp-label">Experience Earned</div>
  `;

  requestAnimationFrame(() => {
    overlay.classList.add("show");
    popup.classList.add("show");
  });

  setTimeout(() => {
    overlay.classList.remove("show");
    popup.classList.remove("show");
  }, 1800);
}

// ─── Completion ────────────────────────────
function showCompletion() {
  const stats = document.getElementById("completionStats");
  stats.innerHTML = `
    <div class="stat-card">
      <div class="stat-value">${completedLessons.size}</div>
      <div class="stat-label">Lessons Done</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${totalXP}</div>
      <div class="stat-label">XP Earned</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">🐍</div>
      <div class="stat-label">Python Warrior</div>
    </div>
  `;
  showScreen(completionScreen);
}

function restartCourse() {
  completedLessons.clear();
  totalXP = 0;
  currentLesson = 0;
  saveProgress();
  buildNav();
  updateProgress();
  showScreen(welcomeScreen);
}

// ─── Persistence ───────────────────────────
function saveProgress() {
  try {
    localStorage.setItem(
      "pythonDojo",
      JSON.stringify({
        completed: [...completedLessons],
        xp: totalXP,
      })
    );
  } catch (e) {}
}

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem("pythonDojo"));
    if (data) {
      completedLessons = new Set(data.completed || []);
      totalXP = data.xp || 0;
    }
  } catch (e) {}
}

// ─── Helpers ───────────────────────────────
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ─── Particles Background ──────────────────
function initParticles() {
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((w * h) / 18000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });
}

// ─── Boot ──────────────────────────────────
init();
