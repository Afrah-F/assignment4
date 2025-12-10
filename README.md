# Assignment 4 – Advanced Personal Portfolio
**Student:** Afrah Mohammed  
**Course:** Web Application Development  
**Submission Date:** December 2025  
**Live Demo:** https://afrah-f.github.io/assignment4/

---

## Project Overview

This is a fully responsive, modern, and interactive personal portfolio website built from scratch using **pure HTML, CSS, and Vanilla JavaScript** — no external frameworks or libraries.

The project implements all required advanced features for **Assignment 4** while maintaining clean, semantic, and highly performant code.

---

## Key Features Implemented

| Feature                        | Implementation                                                                 |
|--------------------------------|-----------------------------------------------------------------------------------|
| GitHub API Integration         | Fetches and displays the 6 most recently updated repositories in real time     |
| Dynamic Projects Section       | Live filtering, searching, and multi-criteria sorting (date & title)          |
| Expandable Project Details     | Smooth `<details><summary>` cards with custom styling and animation            |
| Theme Toggle (Light/Dark)      | Fully functional with `localStorage` persistence                               |
| Personalized Welcome Gate     | First-visit modal that saves the user's name via `localStorage`                |
| Advanced Form Validation       | Client-side validation (required fields, email format, min length) + visual feedback |
| Custom Cursor & Particles      | Enhanced visual experience with animated cursor and subtle floating particles  |
| Back-to-Top Button             | Appears on scroll with smooth behavior                                         |
| Smooth Scrolling               | Native smooth scroll for all internal links                                    |
| 100% Responsive Design         | Mobile-first approach with full mobile and desktop compatibility              |
| Performance Optimized          | Lazy-loaded images, efficient DOM manipulation, minimal reflows/repaints      |

---

## State Management

- `localStorage` used for:
    - Username (welcome gate)
    - Theme preference (dark/light mode)
- In-memory state variables for:
    - Active filter
    - Search query
    - Current sort option

---

## Folder Structure
assignment4/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── images/
│       ├── club.png
│       ├── online.png
│       └── elec.png
├── docs/
│   ├── technical-documentation.md
│   └── ai-usage-report.md
├── .gitignore
└── README.md


---

## Technical Highlights

- Pure Vanilla JavaScript (ES6+) – no dependencies
- Semantic HTML5 and accessible elements (`aria-live`, proper labels, etc.)
- Mobile-first responsive design using CSS Grid and Flexbox
- Custom CSS variables for seamless theme switching
- Efficient event delegation and DOM management
- Clean separation of concerns (HTML → CSS → JS)

---

## How to Run Locally
git clone https://github.com/Afrah-F/assignment4.git
cd assignment4
# 
#Detailed documentation included in the /docs folder:

technical-documentation.md – Full explanation of architecture and implementation
ai-usage-report.md – Transparent disclosure of AI assistance (used only for code review, debugging, and documentation)


Live Website
https://afrah-f.github.io/assignment4/

Contact & Links

GitHub: https://github.com/Afrah-F
Email: afrah3000r@gmail.com
Phone: +966 597 306 601

```


