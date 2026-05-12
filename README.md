<div align="center">

<!-- Animated Header Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=C9A84C&height=200&section=header&text=Prakhar%20Verma&fontSize=60&fontColor=0B0B0F&fontAlignY=38&desc=AI%2FML%20Engineer%20%26%20Full%20Stack%20Developer&descAlignY=58&descSize=18&descColor=0B0B0F&animation=fadeIn" width="100%"/>

<!-- Animated Typing SVG -->
<a href="https://github.com/prakhar9044-code">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=22&pause=1000&color=C9A84C&center=true&vCenter=true&width=600&lines=AI%2FML+Engineer+%26+Full+Stack+Developer;Building+Intelligent+Systems+%F0%9F%A7%A0;Crafting+Premium+Digital+Experiences+%E2%9C%A8;LLMs+%7C+RAG+%7C+React+%7C+Python+%7C+Node.js;Open+to+Work+%F0%9F%9F%A2" alt="Typing SVG" />
</a>

<br/>

<!-- Badges row -->
<p>
  <a href="https://linkedin.com/in/prakharai1212">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/prakhar9044-code">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="mailto:pra9044rma@rediffmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/>
  </a>
  <a href="https://resume-prakharcodess.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-C9A84C?style=for-the-badge&logo=vercel&logoColor=black" alt="Portfolio"/>
  </a>
  <a href="https://leetcode.com/u/jxLXeIbuH1/">
    <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode"/>
  </a>
</p>

<!-- Status badges -->
<p>
  <img src="https://img.shields.io/badge/Status-Open%20to%20Work-4ade80?style=flat-square&logo=checkmarx&logoColor=white"/>
  <img src="https://img.shields.io/badge/B.Tech-Computer%20Science%20(AI%20%26%20ML)-C9A84C?style=flat-square&logo=academia&logoColor=white"/>
  <img src="https://img.shields.io/badge/University-Lovely%20Professional%20University-C9A84C?style=flat-square"/>
</p>

<!-- Visitor counter -->
<img src="https://api.visitorbadge.io/api/visitors?path=prakhar.dev.portfolio.v3&label=PORTFOLIO%20VISITORS&labelColor=%230B0B0F&countColor=%23C9A84C&style=flat-square" alt="Visitor Badge"/>

</div>

---

## 🌐 Live Preview

<div align="center">

[![Portfolio Live](https://img.shields.io/badge/🚀%20VIEW%20LIVE%20PORTFOLIO-C9A84C?style=for-the-badge&logoColor=black)](https://resume-prakharcodess.vercel.app)

> **Premium dark-themed portfolio** built with React + Vite + Tailwind CSS — featuring cinematic animations, a galaxy Three.js background, and a full suite of professional sections.

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Design System](#-design-system)
- [🏗️ Project Structure](#-project-structure)
- [⚙️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📦 Deployment](#-deployment)
- [📄 Sections Overview](#-sections-overview)
- [🏆 Certifications](#-certifications)
- [📊 GitHub Stats](#-github-stats)
- [📬 Contact](#-contact)

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎬 Animations
- **Cinematic Split-Panel Preloader** — top & bottom panels slide apart revealing the site
- **Staggered text entrance** — each hero element fades + slides up with spring easing
- **SVG arc light streak** — three layered gold arcs draw themselves on load
- **Floating stat cards** — independent float loops at different speeds
- **Infinite dual-row marquee** — testimonials scroll in opposite directions
- **Skill bar animations** — bars fill with shimmer on scroll-in

</td>
<td width="50%">

### 💎 Premium UI
- **Dark AMOLED theme** — `#0B0B0F` base with subtle surface layers
- **Gold accent system** — `#C9A84C` / `#E2C47A` used intentionally
- **Custom cursor** — dot + ring that responds to hover states
- **Glassmorphism cards** — `backdrop-filter: blur` with subtle borders
- **Magnetic hover effects** — cards and buttons physically react to cursor
- **Film grain overlay** — subtle noise texture for depth

</td>
</tr>
<tr>
<td width="50%">

### 📱 Fully Responsive
- Mobile-first approach with Tailwind breakpoints
- Hero portrait hides gracefully on smaller screens
- Navigation collapses to a clean hamburger menu
- All grids reflow to single-column on mobile

</td>
<td width="50%">

### ⚡ Performance
- Vite production build with tree-shaking
- Base64-embedded assets for zero-dependency standalone HTML
- Lazy intersection observer for scroll reveals
- Lighthouse score: **90+**

</td>
</tr>
</table>

---

## 🎨 Design System

<div align="center">

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#0B0B0F` | Page background |
| `--surface` | `#141418` | Card backgrounds |
| `--surface2` | `#1C1C22` | Nested surfaces |
| `--gold` | `#C9A84C` | Primary accent |
| `--gold-light` | `#E2C47A` | Hover state |
| `--text` | `#F4F2FF` | Primary text |
| `--muted` | `#6B6880` | Secondary text |
| `--border` | `rgba(255,255,255,0.06)` | Card borders |

</div>

**Typography Stack:**
```
Display  → DM Serif Display  (headings, hero name)
Body     → Inter / DM Sans   (paragraphs, UI)
Mono     → JetBrains Mono    (labels, badges, code)
```

---

## 🏗️ Project Structure

```
prakhar-portfolio/
│
├── 📁 public/
│   └── PROFILE.png              # Transparent profile photo
│
├── 📁 src/
│   ├── App.jsx                  # Complete portfolio — all sections & data
│   ├── index.css                # Global styles, design tokens, animations
│   └── main.jsx                 # React entry point
│
├── index.html                   # App shell with font/icon CDN links
├── package.json                 # Dependencies
├── vite.config.js               # Vite build configuration
├── tailwind.config.js           # Design token extensions
├── postcss.config.js            # CSS processing
└── README.md                    # This file
```

> 💡 **Everything lives in `src/App.jsx`** — data, components, and logic are co-located for simplicity and fast iteration.

---

## ⚙️ Tech Stack

<div align="center">

### Core
![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_3-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Animation & 3D
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)
![CSS Animations](https://img.shields.io/badge/CSS_Keyframes-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

</div>

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm  >= 9.0.0
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/prakhar9044-code/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# → http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

### One-File Deployment (Standalone HTML)

The portfolio can also be used as a **single self-contained HTML file** with all assets embedded:

```bash
npm run build
# Then inline CSS + JS into index.html
# Result: one portable .html file that works without any server
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
# Option 1 — Vercel CLI
npm install -g vercel
vercel

# Option 2 — GitHub Integration
# 1. Push to GitHub
# 2. Import repo at vercel.com/new
# 3. Framework: Vite  |  Build: npm run build  |  Output: dist
# 4. Deploy → done ✓
```

### Deploy to Netlify

```bash
npm run build
# Drag & drop the /dist folder at app.netlify.com/drop
```

### Environment

No environment variables required — the portfolio is fully static.

---

## 📄 Sections Overview

<details>
<summary><b>🏠 Hero Section</b></summary>

- Full-viewport split layout (text left, portrait right)
- Staggered fade-up text animations with spring easing
- Three layered SVG gold arc light streaks that draw on load
- Floating stat cards (5+ AI Projects, 15+ Certifications, Open to Work)
- Availability badge, tech stack pills, CTA buttons
- Cinematic radial gold bloom behind portrait

</details>

<details>
<summary><b>👤 About Section</b></summary>

- Professional bio with trait cards (Problem Solver, Quick Learner, Team Player, Detail Oriented)
- Personal info card (location, email, availability, resume download)
- Stats grid: 5+ Projects · 15+ Certifications · 10+ Technologies · 3+ Hackathons
- Education timeline (LPU → Jain School → Virendra Swarup)

</details>

<details>
<summary><b>💼 Experience Timeline</b></summary>

- Sticky left panel with heading + education mini-timeline
- Vertical gold timeline with dot markers
- Roles: Event Coordinator @ Coding Blocks · Technical Lead @ LPU · GDG Member · Kalrashukla Classes

</details>

<details>
<summary><b>🚀 Projects Section</b></summary>

- Grid/list toggle view
- 5 project cards with tech stacks, live demo + GitHub links
- **Featured Case Study** panel: Problem → Solution → Impact breakdown
- Projects: Nexus AI · CiviSync · Spendex AI · PeopleConnect · EDU REV

</details>

<details>
<summary><b>🛠️ Skills Section</b></summary>

- Tab-switching panels: Languages · Frontend · Backend · AI/ML · Tools & Cyber
- Animated skill bars with stagger (fixed: no IntersectionObserver bug)
- Full badge cloud of 40+ technologies

</details>

<details>
<summary><b>🏆 Achievements Section</b></summary>

- 4 achievement highlight cards
- Full 15-certification grid with issuer colors and verify links
- Oracle · IBM · Google · AWS · Qualcomm · Deloitte · Infosys · SoloLearn (×9)

</details>

<details>
<summary><b>💬 Testimonials Section</b></summary>

- **Dual-row infinite marquee** — rows scroll in opposite directions
- Pause on hover
- Fade masks on edges
- Gold star ratings + author avatars

</details>

<details>
<summary><b>📬 Contact Section</b></summary>

- Contact info cards (email, phone, location)
- Contact form → mailto integration with success state
- Social icons row (GitHub · LinkedIn · HackerRank · LeetCode · StackOverflow)

</details>

<details>
<summary><b>🔗 Footer</b></summary>

- 4-column layout: Brand · Quick Links · Resources · Newsletter
- Visitor counter badge
- Back-to-top button

</details>

---

## 🏆 Certifications

<div align="center">

| Certification | Issuer | Verify |
|---|---|---|
| Oracle Cloud Infrastructure 2025 — Data Science Professional | Oracle | [🔗 Verify](https://catalog-education.oracle.com/ords/certview/sharebadge?id=A04A17CEE858F4A8CFD5CB45ABBC63AABDBA1CED20C1D2309DFD5432D6455385) |
| Cybersecurity Fundamentals | IBM | [🔗 Verify](https://www.credly.com/badges/cd49251b-f877-44ae-8363-c688a4d7fc0a/public_url) |
| Generative AI | Google | [🔗 Verify](https://www.coursera.org/account/accomplishments/verify/4N6N6VEY9XY5) |
| Artificial Intelligence | Amazon AWS | [🔗 Verify](https://www.credly.com/badges/03de804d-b0b2-49a8-bd77-ca98772f8097) |
| AI Upskilling | Qualcomm | — |
| Technology Job Simulation | Deloitte · Forage | — |
| Full Stack React | Infosys Springboard | — |
| Machine Learning | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-CU61JZ8H) |
| Intro to LLMs | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-WC1ZLCOY) |
| Prompt Engineering | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-VBGFKZIQ) |
| Python Basics | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-WITL9IVS) |
| Python Intermediate | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-9EMDNQJB) |
| HTML Programming | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-LQSAGVIJ) |
| CSS Fundamentals | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-3MQ5JO6Z) |
| Write with AI | SoloLearn | [🔗 Verify](https://www.sololearn.com/en/certificates/CC-FJ5GTNAM) |

</div>

---

## 📊 GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=prakhar9044-code&show_icons=true&theme=transparent&title_color=C9A84C&icon_color=C9A84C&text_color=F4F2FF&border_color=C9A84C30&hide_border=false&include_all_commits=true&count_private=true" width="48%" alt="GitHub Stats"/>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=prakhar9044-code&layout=compact&theme=transparent&title_color=C9A84C&text_color=F4F2FF&border_color=C9A84C30&hide_border=false" width="48%" alt="Top Languages"/>

</div>

<div align="center">

<img src="https://github-readme-streak-stats.herokuapp.com?user=prakhar9044-code&theme=transparent&ring=C9A84C&fire=E2C47A&currStreakLabel=C9A84C&sideLabels=F4F2FF&dates=6B6880&border=C9A84C30" width="60%" alt="GitHub Streak"/>

</div>

<div align="center">

<img src="https://github-readme-activity-graph.vercel.app/graph?username=prakhar9044-code&bg_color=0B0B0F&color=C9A84C&line=C9A84C&point=E2C47A&area=true&area_color=C9A84C&hide_border=true" width="96%" alt="Activity Graph"/>

</div>

---

## 🧠 Skills At A Glance

<div align="center">

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Backend & Databases**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

**AI / ML / GenAI**

![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)
![Midjourney](https://img.shields.io/badge/Midjourney-000000?style=for-the-badge&logo=midjourney&logoColor=white)

**Tools & Cybersecurity**

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![Kali Linux](https://img.shields.io/badge/Kali_Linux-557C94?style=for-the-badge&logo=kalilinux&logoColor=white)
![Arduino](https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=arduino&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)

</div>

---

## 🚀 Featured Projects

<table>
<tr>
<td width="50%">

### 🧠 Nexus AI — Career Strategist
LLM-powered SaaS platform generating hyper-personalised career roadmaps via RAG pipelines and market trend analysis.

**Tech:** Python · LLMs · RAG · React.js · Node.js

[![Live](https://img.shields.io/badge/Live-C9A84C?style=flat-square&logo=vercel&logoColor=black)](https://github.com/prakhar9044-code)
[![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/prakhar9044-code)

</td>
<td width="50%">

### 🏙️ CiviSync — Smart Civic Platform
Offline-first SaaS connecting citizens, authorities, NGOs & contractors for civic issue resolution with geospatial mapping.

**Tech:** React.js · Supabase · PostgreSQL · Leaflet.js

[![Live](https://img.shields.io/badge/Live-C9A84C?style=flat-square&logo=vercel&logoColor=black)](https://civisync-rho.vercel.app/)
[![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/prakhar9044-code)

</td>
</tr>
<tr>
<td width="50%">

### 💸 Spendex AI — Finance Dashboard
Frontend SaaS for corporate payroll, treasury & expense tracking with real-time AI forecasting and browser-based PDF reports.

**Tech:** React.js · Chart.js · AI Forecasting · Node.js

[![Live](https://img.shields.io/badge/Live-C9A84C?style=flat-square&logo=vercel&logoColor=black)](https://spendex-ai-uyxw.vercel.app/)
[![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/prakhar9044-code)

</td>
<td width="50%">

### 🤝 PeopleConnect — Welfare Ecosystem
Hyper-local resource discovery platform for food, shelter & medical aid with mental wellness and deep work tools.

**Tech:** HTML5 · CSS3 · JavaScript · Maps API

[![Live](https://img.shields.io/badge/Live-C9A84C?style=flat-square&logo=vercel&logoColor=black)](https://peopleconnect-rho.vercel.app/)
[![Repo](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/prakhar9044-code)

</td>
</tr>
</table>

---

## 🎓 Education

<div align="center">

| Period | Degree | Institution | Grade |
|---|---|---|---|
| 2025 – 2029 | B.Tech CSE (AI & ML) | Lovely Professional University | Active |
| Graduated 2025 | Senior Secondary (12th) | The Jain International School | — |
| Graduated 2023 | Higher Secondary (10th) | Dr. Virendra Swarup Public School | **93.4%** |

</div>

---

## 🏅 Hackathons & Achievements

<div align="center">

| Award | Event |
|---|---|
| 🥇 1st Place | Graph-E-Thon 3.0 — Unstop |
| 🏆 Winner | COD-A-FESTX 3.0 — Lovely Professional University |
| 🌐 Participant | WEB-A-THON 2.0 — Lovely Professional University |
| ⚡ Participant | COD-A-FEST 3.0 — LYNQUP PRIVATE LIMITED |
| 🎯 Top Performer | EDUREV Talent Hunt 2025 — United Latino Students Association |
| 🎤 Technical Lead | Computing & AI Innovation Expo '26 · InnoTek '26 (500+ attendees) |
| 📘 House Captain | Class Representative — 93.4% board results |

</div>

---

## 💻 Coding Profiles

<div align="center">

[![HackerRank](https://img.shields.io/badge/HackerRank-00EA64?style=for-the-badge&logo=hackerrank&logoColor=black)](https://www.hackerrank.com/profile/prakhar9044verma)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/jxLXeIbuH1/)
[![GeeksForGeeks](https://img.shields.io/badge/GeeksForGeeks-2F8D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white)](https://www.geeksforgeeks.org/user/prakhar9044verma/)
[![StackOverflow](https://img.shields.io/badge/Stack_Overflow-F58025?style=for-the-badge&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/31419366/prakhar-verma)
[![HackerEarth](https://img.shields.io/badge/HackerEarth-323754?style=for-the-badge&logo=hackerearth&logoColor=white)](https://www.hackerearth.com/@prakhar9044-code/)
[![DataCamp](https://img.shields.io/badge/DataCamp-03EF62?style=for-the-badge&logo=datacamp&logoColor=black)](https://www.datacamp.com/portfolio/prakhar9044verma)

</div>

---

## 📬 Contact

<div align="center">

| Platform | Link |
|---|---|
| 📧 **Email** | [pra9044rma@rediffmail.com](mailto:pra9044rma@rediffmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/prakharai1212](https://linkedin.com/in/prakharai1212) |
| 🐙 **GitHub** | [github.com/prakhar9044-code](https://github.com/prakhar9044-code) |
| 🌐 **Portfolio** | [resume-prakharcodess.vercel.app](https://resume-prakharcodess.vercel.app) |
| 📍 **Location** | Jalandhar, Punjab, India |

</div>

---

## 📜 License

```
MIT License — © 2025 Prakhar Verma
Feel free to use this as inspiration, but please don't copy it wholesale
and claim it as your own work. Give credit where it's due. ✌️
```

---

<div align="center">

<!-- Footer wave -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=C9A84C&height=120&section=footer&animation=fadeIn" width="100%"/>

**Designed & Engineered with ♥ by Prakhar Verma**

*If you found this useful, consider giving it a ⭐ — it means a lot!*

[![GitHub Stars](https://img.shields.io/github/stars/prakhar9044-code?style=social)](https://github.com/prakhar9044-code)
[![GitHub Followers](https://img.shields.io/github/followers/prakhar9044-code?style=social)](https://github.com/prakhar9044-code)

</div>
