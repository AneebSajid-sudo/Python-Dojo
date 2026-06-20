# Python-Dojo🐍 

Python Dojo — Technical Stack & Architecture
This document outlines the architecture, libraries, and technologies used to build the Python Dojo web application. It is designed to be uploaded directly to GitHub alongside the source code.

🏗️ Project Overview
Python Dojo is a fully client-side, interactive web application designed to teach Python from scratch. It features a completely custom gamified UI, an XP progression system, and an integrated "Battle Arena" where users can write and execute real Python code directly in the browser to defeat "bosses".

💻 Tech Stack & Languages
1. Frontend Technologies
HTML5: Structural layout and semantic elements.
CSS3 (Vanilla & Custom): Used for the primary learning modules. Features modern design paradigms like glassmorphism, CSS variables for theming, flexbox/grid layouts, and custom animations.
Tailwind CSS (via CDN): Utilized exclusively for the highly complex "Battle Arena" interface to rapidly prototype a responsive, utility-first layout exported from Google Stitch.
JavaScript (ES6+): Handles all application logic, including DOM manipulation, state management, quiz grading, and Pyodide integration.
2. Core Libraries & APIs
Pyodide (v0.25.0):

Purpose: This is the core engine powering the "Battle Arena". Pyodide is a port of CPython to WebAssembly (Wasm).
Usage: It allows the application to take user-written Python code from the editor, compile it, and execute it entirely client-side without needing a backend server. We intercept sys.stdout to print the output directly to our custom HTML terminal.
Ace Editor (v1.32.6):

Purpose: A high-performance code editor embedded in the web page.
Usage: Used in the Battle Arena to provide a realistic IDE experience, featuring Python syntax highlighting, line numbers, auto-indentation, and the "Tomorrow Night Eighties" dark theme.
Google Fonts & Icons:

Fonts: Inter, JetBrains Mono (for code), Sora, and Hanken Grotesk.
Icons: Material Symbols Outlined for scalable, modern iconography.
3. Data Storage & State Management
localStorage API:
Purpose: Persistent state management.
Usage: The app uses the browser's native local storage to save the user's XP (totalXP) and the IDs of completed lessons (completedLessons). This ensures progression is saved across page reloads and when navigating between the main lessons and the Battle Arena.
