# 🐍 Python Dojo

Welcome to the **Python Dojo**, an interactive, gamified web application designed to teach Python programming from the ground up. Whether you are a complete beginner or looking to practice your skills, the Dojo provides a hands-on learning experience directly in your browser.

## 🌟 Features

*   **16 Comprehensive Lessons:** Journey from basic variables and loops to advanced topics like Object-Oriented Programming (OOP) and Error Handling.
*   **Standard Library & APIs:** Learn how to use essential built-in libraries like `random` and `datetime`, plus fetch real-world data using the `requests` library.
*   **Guided Mini-Projects:** Build a Password Generator and a Number Guessing game to put your knowledge to the test.
*   **Gamified Progression:** Earn XP for completing quizzes correctly.
*   **⚔️ The Battle Arena:** A fully integrated, browser-based code editor using Ace Editor and WebAssembly (Pyodide). Write and execute real Python code client-side to defeat coding "bosses" without needing a backend server!

## 🚀 How to Run Locally

Because the Python Dojo is a 100% client-side application, there is no complicated setup or backend server required.

1. Clone or download this repository.
2. Open the `index.html` file in any modern web browser.
3. Start learning! 

*(Note: When you open the Battle Arena for the first time, it may take a few seconds to load the Pyodide WebAssembly environment).*

## 💻 Tech Stack

*   **Frontend UI:** HTML5, CSS3 (Vanilla + Tailwind CSS for the Battle Arena layout).
*   **Logic:** JavaScript (ES6+), handling state, routing, and quiz validation via `localStorage`.
*   **Code Editor:** [Ace Editor](https://ace.c9.io/) for syntax highlighting and IDE features.
*   **Python Engine:** [Pyodide](https://pyodide.org/) compiling CPython to WebAssembly, allowing real Python execution entirely in the browser.
