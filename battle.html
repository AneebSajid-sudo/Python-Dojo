// =============================================
// Python Dojo — Battle Arena Logic
// =============================================

// --- State ---
let pyodideReady = false;
let pyodideInstance = null;
let editor = null;
let bossDefeated = false;

// --- DOM Elements ---
const runBtn = document.getElementById("runCodeBtn");
const consoleOutput = document.getElementById("consoleOutput");
const pyodideStatus = document.getElementById("pyodideStatus");
const clearBtn = document.getElementById("clearConsoleBtn");
const bossHpBar = document.getElementById("bossHpBar");
const bossHpText = document.getElementById("bossHpText");
const sidebarXP = document.getElementById("sidebarXP");

// --- Initialization ---
async function init() {
    // 1. Initialize Ace Editor
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow_night_eighties");
    editor.session.setMode("ace/mode/python");
    editor.setOptions({
        fontSize: "14px",
        fontFamily: "'JetBrains Mono', monospace",
        showPrintMargin: false,
        wrap: true
    });
    
    // Load local storage XP
    try {
        const data = JSON.parse(localStorage.getItem("pythonDojo"));
        if (data && data.xp) {
            sidebarXP.textContent = `⚡ ${data.xp} XP`;
        }
    } catch(e) {}

    // 2. Initialize Pyodide
    try {
        pyodideInstance = await loadPyodide();
        
        // Setup stdout redirection to capture print() statements
        pyodideInstance.setStdout({
            batched: (msg) => {
                logToConsole(msg, "text-on-surface");
            }
        });
        
        pyodideReady = true;
        pyodideStatus.textContent = "[OK]";
        pyodideStatus.className = "text-secondary font-bold";
        
        // Enable Run button
        runBtn.disabled = false;
        runBtn.className = "group flex items-center gap-4 bg-primary text-on-primary font-headline-md py-4 px-8 rounded-xl glow-primary hover:scale-[1.02] active:scale-95 transition-all cursor-pointer";
        runBtn.innerHTML = `
            <span class="font-bold">Run Code & Attack</span>
            <span class="material-symbols-outlined group-hover:rotate-12 transition-transform" style="font-variation-settings: 'FILL' 1;">swords</span>
        `;
        
        logToConsole(">> System Ready. Awaiting commands.", "text-secondary/70");

    } catch (err) {
        pyodideStatus.textContent = "[FAILED]";
        pyodideStatus.className = "text-error font-bold";
        logToConsole(">> Error loading Python environment: " + err.message, "text-error");
    }

    // Mobile menu toggle
    const battleToggle = document.getElementById('battleMenuToggle');
    const battleSidebar = document.getElementById('battleSidebar');
    const battleBackdrop = document.getElementById('battleBackdrop');
    if (battleToggle && battleSidebar && battleBackdrop) {
        battleToggle.addEventListener('click', () => {
            battleSidebar.classList.toggle('-translate-x-full');
            battleBackdrop.classList.toggle('hidden');
        });
        battleBackdrop.addEventListener('click', () => {
            battleSidebar.classList.add('-translate-x-full');
            battleBackdrop.classList.add('hidden');
        });
    }
}

// --- Console Helper ---
function logToConsole(message, cssClass = "text-on-surface") {
    const p = document.createElement("p");
    p.className = cssClass;
    p.textContent = message;
    consoleOutput.appendChild(p);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

clearBtn.addEventListener("click", () => {
    consoleOutput.innerHTML = "";
});

// --- Battle Logic ---
runBtn.addEventListener("click", async () => {
    if (!pyodideReady || bossDefeated) return;
    
    const userCode = editor.getValue();
    
    logToConsole(">> Running tests...", "text-secondary mt-2");
    
    const testCode = `
import sys
import io

original_stdout = sys.stdout
sys.stdout = io.StringIO()

try:
${userCode.split('\n').map(line => '    ' + line).join('\n')}
except Exception as e:
    print(f"ERROR: {e}")

user_output = sys.stdout.getvalue()
sys.stdout = original_stdout

def _run_tests():
    try:
        result = reverse_string("python")
        if result != "nohtyp":
            return {"success": False, "msg": f"Test 1 Failed: reverse_string('python') returned '{result}', expected 'nohtyp'"}
        result2 = reverse_string("hello")
        if result2 != "olleh":
            return {"success": False, "msg": f"Test 2 Failed: reverse_string('hello') returned '{result2}', expected 'olleh'"}
        return {"success": True, "output": user_output}
    except NameError:
        return {"success": False, "msg": "Function reverse_string not found!"}
    except Exception as e:
        return {"success": False, "msg": f"Test Error: {e}"}

_run_tests()
`;

    try {
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('TIMEOUT')), 5000)
        );
        const result = await Promise.race([
            pyodideInstance.runPythonAsync(testCode),
            timeoutPromise
        ]);
        const resObj = result.toJs();
        
        if (resObj.get("success")) {
            const printOutput = resObj.get("output");
            if (printOutput) {
                 logToConsole("Output: " + printOutput.trim(), "text-on-surface-variant");
            }
            logToConsole(">> Test Case 1: 'python' -> 'nohtyp' [PASSED]", "text-secondary font-bold");
            logToConsole(">> Test Case 2: 'hello' -> 'olleh' [PASSED]", "text-secondary font-bold");
            triggerVictory();
        } else {
            logToConsole(">> " + resObj.get("msg"), "text-error font-bold");
            bossFlash("error");
        }
        
    } catch (err) {
        if (err.message === 'TIMEOUT') {
            logToConsole(">> Execution timed out (5s). Check for infinite loops.", "text-error font-bold");
        } else {
            logToConsole(">> Syntax Error in your code:\n" + err.message, "text-error");
        }
        bossFlash("error");
    }
});

function bossFlash(type) {
    const bossContainer = document.querySelector(".glow-error");
    if(bossContainer) {
        const oldClass = bossContainer.className;
        bossContainer.className = bossContainer.className.replace("glow-error", type === "error" ? "glow-secondary" : "glow-primary");
        setTimeout(() => {
            bossContainer.className = oldClass;
        }, 300);
    }
}

function triggerVictory() {
    bossDefeated = true;
    
    // Update HP Bar
    bossHpBar.style.width = "0%";
    bossHpText.textContent = "0% / 100%";
    bossHpText.className = "text-secondary font-bold";
    document.querySelector(".text-error.font-bold").className = "text-secondary font-bold";
    
    // Add XP
    try {
        const data = JSON.parse(localStorage.getItem("pythonDojo")) || { xp: 0, completed: [] };
        data.xp += 500;
        localStorage.setItem("pythonDojo", JSON.stringify(data));
        sidebarXP.textContent = `⚡ ${data.xp} XP`;
    } catch(e) {}
    
    // Console message
    logToConsole(">> BOSS DEFEATED! +500 XP Earned!", "text-primary text-lg font-bold mt-2");
    
    // Button change
    runBtn.innerHTML = `
        <span class="font-bold">Victory!</span>
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">emoji_events</span>
    `;
    runBtn.className = "group flex items-center gap-4 bg-secondary text-on-secondary font-headline-md py-4 px-8 rounded-xl glow-secondary transition-all";
}

// Boot
init();
