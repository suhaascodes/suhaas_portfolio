# Suhaas Bandari &bull; Developer & DevOps Portfolio

A highly interactive, premium, video-focused developer portfolio website built for **Suhaas Charan Bandari** to showcase technical expertise, academic background, DevOps skills, and creative interests.

---

## 🚀 Key Features

*   **Interactive Preloader**: Splash screen with a custom water-fill name animation and a modern "Enter Experience" entry flow which unlocks and starts audio playback.
*   **Immersive Video Hero**: High-definition video loop playing with customizable play/pause and mute/unmute overlay controls.
*   **About Card & Academic Grid**: A sleek digital badge card displaying a profile headshot alongside education credentials (CBIT Hyderabad, CSE BE, 8.62 CGPA).
*   **Interactive CLI Dev Terminal**: An authentic interactive command-line terminal interface built into the About section. Supports live input with interactive commands:
    *   `help` - Lists all available commands.
    *   `about` - Shows a brief developer bio.
    *   `skills` - Outputs categorized core technologies.
    *   `projects` - Lists featured systems/web projects.
    *   `contact` - Displays email and social handles.
    *   `matrix` - Enters a full-screen retro green digital code rain matrix simulation (exit using `q` or `Esc`).
    *   `clear` - Clears the terminal output history.
*   **Compiler Logs Console**: Located in the Skills section. Clicking on any technical skill card triggers a realistic compiler-style streaming diagnostic readout using a responsive typewriter effect and a blinking block cursor (`█`).
*   **"Bug Catcher" Retro Arcade Game**: A fully playable retro mini-game integrated directly into the Skills console viewport.
    *   **Controls**: Arrow keys (PC) or smooth press-and-hold touch buttons (Mobile/Tablets) to control the debugger bar.
    *   **Mechanics**: Catch descending code bugs (`BUG`, `ERR`, `LAG`, etc.) to resolve them and earn **+100 XP**, or shoot lasers using the Spacebar.
    *   **Audio**: Immersive, offline synthesized 8-bit sound effects (lasers, catches, explosions, victory fanfares, gameovers) generated dynamically using the native **Web Audio API**.
    *   **Progression**: Features persistent scoring, live counts, game-over states, and victory thresholds (1000 XP).
*   **Tactile UI Sound Design**: Global mechanical keyboard tactile click sounds integrated for all active click targets (buttons, links, anchors, custom cursors) with fine-tuned volume styling for satisfying haptic engagement.
*   **Engineering Workflow (Services)**: Scroll-triggered checkboard illustrating custom development lifecycle stages (Define & Analyze, Architect & Design, Develop & Integrate, CI/CD & Deploy).
*   **Featured Projects**: Detailed project cards showcasing key highlights and tech tags for:
    *   **FlowForge** — Full Stack Kanban Project Management Platform (React, Node, Express, MongoDB).
    *   **Spotify-Inspired Web App** with a containerized Docker setup and automated GitHub Actions CI/CD.
*   **Professional Certifications**: Grid of credentials covering Oracle Cloud Infrastructure (OCI) DevOps, OCI Foundations, Cisco Cybersecurity, and NPTEL Ethical Hacking.
*   **Achievements & Creative Outlets**: Highlights extracurricular achievements in college hackathons, digital music production, and live piano/singing performances.

---

## 🛠️ Technology Stack

*   **Framework**: React 19
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS v4 & Vanilla CSS
*   **Animations**: Framer Motion, Canvas API, & AOS (Animate on Scroll)
*   **Audio Synthesis**: Web Audio API (Sine/Triangle/Sawtooth Wave Oscillators)
*   **Package Manager**: npm

---

## ⚡ Setup & Local Development

### 1. Install Dependencies
Run a clean install to download all packages:
```bash
npm install
```

### 2. Run the Development Server
Launch the local hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build & Preview
Compile and run the optimized production bundle:
```bash
npm run build
```
Preview the built files locally:
```bash
npm run preview
```
