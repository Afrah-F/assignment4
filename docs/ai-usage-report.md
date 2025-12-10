# AI Usage Report – Assignment 4
**Student:** Afrah Mohammed  
**Course:** Web Application Development  
**Assignment:** 4 – Advanced Personal Portfolio  
**Date:** December 2025

---

## 1. Overview

Throughout Assignment 4, I used AI (primarily **Grok by xAI** and **ChatGPT**) as a **learning partner and productivity assistant**, not as a code generator that replaces my own work.  
My goal was to understand every line of code in the final project, be able to explain it, and make meaningful personal modifications.

---

## 2. AI Tools Used

| Tool               | Purpose                                           |
|--------------------|---------------------------------------------------|
| Grok (xAI)         | Main assistant – code explanation, debugging, feature suggestions, design ideas |
| ChatGPT (OpenAI)   | Secondary help for documentation structure and quick syntax checks |

---

## 3. How AI Was Used (With Specific Examples)

### 3.1 GitHub API Integration
- I wrote the initial `fetch` call myself.
- Asked Grok to review error handling and spinner logic.
- Grok suggested adding `cache: 'no-store'`, better status-code checks, and graceful fallback messages.
- **My contribution:** Changed username, limited to 6 repos, styled cards to match my design, added fade-in animation.

### 3.2 Dynamic Projects (Filter + Search + Sort)
- I already had basic filtering from previous assignments.
- Asked AI to help combine **filter → search → sort** in a single efficient `render()` function.
- AI provided a clean structure with `match()` and `compare()` helpers.
- **My edits:** Adapted data structure, rewrote sorting logic, added Arabic-friendly `localeCompare`, styled the chips and search bar myself.

### 3.3 Expandable “More Details” Cards
- I wanted a beautiful `<details><summary>` with custom arrow animation.
- Grok gave me the CSS for rotating arrow and background change on open.
- I modified colors, spacing, and added hover effects to perfectly match my purple theme.

### 3.4 Theme Toggle & Name Gate
- Implemented both features myself in earlier assignments.
- Used AI only to suggest small improvements (button emoji change, smoother classList handling).
- All logic and localStorage usage are 100% my own understanding.

### 3.5 Contact Form Validation
- Wrote the core validation logic myself.
- Asked AI to review the email regex and suggest clearer error messages.
- I chose the final messages, styling, and success animation.

### 3.6 Visual Enhancements
- Custom cursor, floating particles, typing animation, hover effects on project cards – all ideas and implementation started with me.
- AI helped refine CSS performance (e.g., using `transform` instead of `top/left`, `will-change`).

### 3.7 Documentation & README
- I wrote the content myself.
- Used AI only to improve English phrasing, formatting, and to create clean Markdown tables.

---

## 4. What I Did NOT Let AI Do

- Never copied entire files without understanding.
- Never submitted AI-generated code as-is.
- Never used AI to write the project data (my real projects, images, descriptions).
- All creative decisions (colors, layout, animations, user experience) are completely mine.

---

## 5. Challenges & Learning Outcomes

| Challenge                              | How I Solved It                                 | What I Learned                              |
|----------------------------------------|--------------------------------------------------|---------------------------------------------|
| AI suggestions didn’t match my folder structure | Manually adjusted all paths and tested locally | Importance of relative paths & browser dev tools |
| Some AI code was over-engineered        | Simplified functions, removed unnecessary parts | Write only what I need – keep it maintainable |
| Understanding complex logic (filter+sort) | Stepped through code line-by-line with AI explanation | How to chain multiple array methods cleanly |

Result: I now fully understand and can explain **every single feature** in my portfolio.

---

## 6. Summary – My Honest Position on AI

AI was an incredibly helpful tutor and pair-programmer for this assignment.  
It saved me hours of searching and helped me write cleaner, more professional code.  
However, **I remained in full control** – I tested everything, modified everything, and made sure the final project reflects **my skills, my style, and my effort**.

I believe this is the responsible and modern way to use AI in education:  
**Not to replace learning, but to accelerate and deepen it.**

---

**Signed,**  
**Afrah Mohammed**  
Computer Science Student | Future Front-End Developer