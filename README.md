<div align="center">

# <img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="6px" /><br />

# ⚡ VANCEDESIGN · PORTFOLIO TEMPLATE

### _A Production Visual & Digital Systems Designer Portfolio_

#### Engineered in Pure Vanilla JavaScript · Web Audio API · Procedural Canvas 2D · Interactive CAD Schematics

<br />

[![Live Preview](https://img.shields.io/badge/PREVIEW-LIVE%20DEMO-5fe0ff?style=for-the-badge&logo=vercel&logoColor=04060b)](https://vancedesign.com)
[![Vite](https://img.shields.io/badge/BUNDLER-VITE%205.x-bd34fe?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](<https://img.shields.io/badge/CORE-VANILLA%20JS%20(ES2024)-f7df1e?style=for-the-badge&logo=javascript&logoColor=04060b>)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Audio](https://img.shields.io/badge/DSP-WEB%20AUDIO%20API-ff5f85?style=for-the-badge&logo=audio&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![License](https://img.shields.io/badge/LICENSE-MIT-39ff14?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](LICENSE)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="4px" />

</div>

<br />

## 📑 TABLE OF CONTENTS

- [Overview](#-overview)
- [Key Systems & Animations](#-key-systems--animations)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Repository Structure](#-repository-structure)
- [Quick Start / Local Setup](#-quick-start--local-setup)
- [Complete GitHub Publishing Guide](#-complete-github-publishing-guide)
  - [Bypassing the 100-File Drag-and-Drop Limit](#-bypassing-the-100-file-drag-and-drop-limit)
  - [Method A: The Browser VS Code Shortcut (Recommended)](#method-a-the-browser-vs-code-shortcut-recommended--zero-file-limit)
  - [Method B: The Two-Batch Drag-and-Drop Method](#method-b-the-two-batch-web-drag-and-drop-method)
  - [Method C: GitHub Desktop (Visual App)](#method-c-github-desktop-visual-one-click)
  - [Method D: Terminal Git (3 Commands)](#method-d-terminal-git-cli)
- [Enabling GitHub Pages (Free Hosting)](#-enabling-github-pages-free-live-hosting)
- [Customization Guide](#-customization-guide)
- [License](#-license)

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="3px" />

## 🔭 OVERVIEW

**VANCEDESIGN** is a bespoke, ultra-high-performance creative director and systems designer portfolio template. Designed with an authentic, human-crafted cyber-editorial aesthetic, it eschews bloated third-party animation libraries in favor of native web APIs:

- **0 Heavy Dependencies** — Zero React overhead, zero GSAP, zero Three.js bloat. Runs silky smooth 120 FPS on all modern devices.
- **Bespoke Human Touch** — Nuanced copywriting, authentic design case studies, real camera EXIF telemetry, and realistic photography rolls.
- **Tactile Procedural Audio** — Built-in ambient drone synthesizer with LFO-modulated lowpass filter harmonics and micro-synthesizer UI click blips.
- **Full Responsive Viewport Adaptation** — Down to 320px mobile screens with touch-optimized drawer menus, swipe gestures, and full accessibility.

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="3px" />

## ⚡ KEY SYSTEMS & ANIMATIONS

| Module                       | Implementation            | Description                                                                                                             |
| :--------------------------- | :------------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| **Boot Sequence**            | `async/await` + SVG Rings | Interactive splash plate → circular progress ring with live percentage counter and system initialization terminal logs. |
| **Ambient Streaks**          | HTML5 Canvas 2D           | Real-time procedural glowing cyan light streaks calculated at 45° diagonal vectors across the viewport.                 |
| **Audio Synthesizer**        | Web Audio API             | Lowpass filtered tri-oscillator harmonic drone with bandpass-filtered micro-click UI feedback.                          |
| **Holographic 3D Tilt**      | Pointer Events + CSS Vars | Dynamic card parallax tracking with specular `--gx`/`--gy` lighting glints and 3D rotational lerping.                   |
| **CAD Blueprints**           | Inline SVG + DOMParser    | Interactive vector schematics with live node hover detection, draft stroke animations, and ghost UI previews.           |
| **Horizontal Card Deck**     | Sticky CSS + Lerp RAF     | Sticky horizontal project scroll with smooth inertial lerp, card scaling, and live HUD counters (`01 / 05`).            |
| **Dynamic Line Scanner**     | Web Animations API        | Sweeps an animated laser highlight bar across text lines by computing client bounding rect ranges.                      |
| **Contact Sheet & Lightbox** | Dynamic Bin-Packing       | Responsive photograph contact sheet with duotone SVG filters, roll switcher, and full-screen EXIF modal dialog.         |
| **Flippable Contact Card**   | CSS 3D Transforms         | Two-sided interactive contact card with input validation, spam protection, and live digital clock.                      |

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="3px" />

## 🛠️ ARCHITECTURE & TECH STACK

```
┌─────────────────────────────────────────────────────────────┐
│                    VANCEDESIGN ARCHITECTURE                  │
├──────────────────────────────┬──────────────────────────────┤
│ CORE RUNTIME                 │ Pure Vanilla JavaScript (ESM)│
│ STYLING & TOKENS             │ CSS Custom Properties (Tokens)│
│ PROCEDURAL SOUND             │ Web Audio API (No MP3 files) │
│ BACKGROUND DYNAMICS          │ Canvas 2D + SVG Duotone Ramps│
│ INTERACTIVE VECTOR GRAPHICS  │ Dynamic Inline SVG Schematics│
│ MOTION PIPELINE              │ CSS Transitions + Web Anim API│
│ BUNDLER                      │ Vite 5.x (Lightning Fast HMR)│
└──────────────────────────────┴──────────────────────────────┘
```

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="3px" />

## 📁 REPOSITORY STRUCTURE

```bash
vancedesign-portfolio/
├── .gitignore               # Clean git exclusions (node_modules, dist, cache)
├── index.html               # Semantic HTML5 root with duotone filters & HUD
├── package.json             # Project metadata and Vite scripts
├── vite.config.js           # Server & preview configuration
├── src/
│   ├── main.js              # Full interactive engine (audio, canvas, deck, rolls)
│   └── style.css            # Complete design system tokens & animations (4k lines)
└── public/
    ├── favicon.svg          # Vector geometric brand monogram
    ├── favicon-32.png       # Standard browser favicon
    ├── apple-touch-icon.png # iOS home screen icon
    ├── og.png               # Social share preview image (1200x630)
    ├── kaelen-vance-resume.pdf # Print-ready designer resume
    └── media/
        ├── portrait.jpg     # Creative director subject photo
        ├── proj-*.svg       # 5 Interactive CAD blueprint schematics
        └── rolls/           # Photography rolls (g=grid, m=mobile, f=full)
            ├── gt3-aug26/   # Automotive on location roll (16 frames)
            └── studio-apr26/# Studio portraiture roll (16 frames)
```

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="3px" />

## 🚀 QUICK START / LOCAL SETUP

### Prerequisites

- Node.js `v18+` or `v20+` installed.

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/Muhammad112233-creator/Portfolio-Template-24.git

# Enter project directory
cd vancedesign-portfolio

# Install Vite dev dependency
npm install
```

### 2. Start Local Development Server

```bash
npm run dev
```

Open **`http://localhost:3000`** in your browser. Live reload (HMR) is active.

### 3. Build for Production

```bash
npm run build
```

Creates a standalone, minified, lightning-fast static build in the `dist/` directory.

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="3px" />

## 🎨 CUSTOMIZATION GUIDE

### 1. Name & Brand Identity

Open **`index.html`** and **`src/main.js`**:

- Replace `"Kaelen Vance"` with your name.
- Replace `"VANCEDESIGN"` with your studio or monogram brand name.
- Update `<meta>` tags and `<script type="application/ld+json">`.

### 2. Colors & Cyber Theme

Open **`src/style.css`** (top `:root` block):

```css
:root {
  --ink-000: #04060b; /* Pure deep black */
  --ink-100: #080c15; /* Background base */
  --panel: rgba(20, 27, 42, 0.66); /* Glass panels */
  --accent: #5fe0ff; /* Primary neon (Change to #00ff88 green or #ff0055 pink) */
  --flash: #7ce9ff; /* Highlight flash */
  --line: #232e45; /* Cybernetic grid lines */
}
```

### 3. Projects & Case Studies

Open **`src/main.js`** and modify the `projectsData` array:

- Add your own case study titles, descriptions, tags, and step narratives.
- Point `img:` to your custom SVG diagram or screenshot.

### 4. Experience Trajectory

Open **`src/main.js`** and edit `experienceData`:

- Add your career timeline, company names, locations, and bullet summaries.
- The interactive laser text scanner will automatically adapt to your copy length!

### 5. Equipment & Skills

Open **`src/main.js`** and update `stackData`:

- Set custom tools, categories, and proficiency percentage (`lvl: 90`).

<br />

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="4px" />

<div align="center">

### ⚡ CRAFTED WITH OBSESSIVE ATTENTION TO DETAIL ⚡

Designed for high-impact creative directors, visual systems architects, and senior engineers.

**[⬆ Back to Top](#-vancedesign--portfolio-template)**

</div>

<div align="center">

## 🌟 Support the Project

If you find this template useful, please consider giving it a star! It helps others discover the repository and supports future development.

</div>

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" width="100%" height="6px" />
