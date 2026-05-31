# Portfolio Editing Guide
**Putri Lestari Wijaya — Portfolio**

This guide explains how to edit every section of your portfolio.
Open `index.html` in VS Code and use **Ctrl+F** to find the section you want to change.

---

## 📁 File Structure

```
portfolio/
├── index.html        ← main file, all content is here
├── css/
│   └── style.css     ← all colors, fonts, spacing
├── js/
│   └── slider.js     ← image slider logic (don't edit)
├── images/           ← put your project photos here
└── GUIDE.md          ← this file
```

---

## 🎨 Change Colors & Fonts

Open `css/style.css` and find the `:root` block at the very top:

```css
:root {
  --navy:       #0f1e3c;   /* main dark color */
  --gold:       #c8a96e;   /* accent color */
  --cream:      #f8f5ef;   /* page background */
}
```

Replace any hex code with your preferred color.
Use [coolors.co](https://coolors.co) to find nice color combos.

---

## 🖼️ Adding Your Profile Photo

1. Put your photo in the `images/` folder — name it `profile.jpg` (or `.png`)
2. Open `index.html`, find this line:
   ```html
   <div class="avatar">PLW</div>
   ```
3. Replace it with:
   ```html
   <div class="avatar">
     <img src="images/profile.jpg" alt="Putri Lestari Wijaya">
   </div>
   ```

**Tips for best result:**
- Use a **square photo** (1:1 ratio) — cropped into a circle automatically
- Minimum size: **300×300px**
- Keep file size under **200KB** for fast loading
- Face centered in the frame works best

---

## 👤 Section: HEADER

**File:** `index.html` — look for `<!-- HEADER -->`

| What to change | Where |
|---|---|
| Your initials in the circle | `<div class="avatar">PLW</div>` |
| Your full name | `<h1>Putri Lestari Wijaya</h1>` |
| Short bio | `<p class="header-desc">...</p>` |
| Email address | `href="mailto:YOUR@EMAIL"` and the visible text |
| LinkedIn URL | `href="https://linkedin.com/in/YOUR-PROFILE"` |

**To add GitHub or other link**, copy one `<a>` block inside `.header-links`:
```html
<a href="https://github.com/yourusername" target="_blank">
  <span class="link-dot"></span> GitHub
</a>
```

---

## 📝 Section: ABOUT

**File:** `index.html` — look for `<!-- ABOUT -->`

**Edit the paragraphs:**
```html
<div class="about-text">
  <p>Your first paragraph here...</p>
  <p>Your second paragraph here...</p>
</div>
```

**Edit the stat cards** (the 3 number boxes on the right):
```html
<div class="stat-card">
  <div class="stat-number">5th</div>       ← change the number
  <div class="stat-label">Semester at President University</div>  ← change the label
</div>
```
To add a 4th card, copy the whole `<div class="stat-card">...</div>` block.

---

## 🛠️ Section: SKILLS

**File:** `index.html` — look for `<!-- SKILLS -->`

**Change a skill bar percentage:**
```html
<div class="skill-name">
  <span>HTML & CSS</span>
  <span class="skill-pct">80%</span>   ← change this text
</div>
<div class="skill-bar">
  <div class="skill-fill" style="width:80%"></div>  ← change this number too
</div>
```
Both numbers must match.

**Add a new skill bar** — copy this block inside the correct column:
```html
<div class="skill-item">
  <div class="skill-name"><span>Skill Name</span><span class="skill-pct">XX%</span></div>
  <div class="skill-bar"><div class="skill-fill" style="width:XX%"></div></div>
</div>
```
Use `class="skill-fill gold"` for gold-colored bars (data skills),
or `class="skill-fill"` for navy bars (web skills).

**Add/remove a tag pill** (the rounded badges):
```html
<span class="tag">New Tool</span>   ← add this
```
Just delete the whole `<span class="tag">...</span>` line to remove one.

**Add a new skill category** — copy this whole block and paste after the last category:
```html
<div>
  <div class="skill-category-title">Your Category Name</div>
  <div class="tags">
    <span class="tag">Tool 1</span>
    <span class="tag">Tool 2</span>
  </div>
</div>
```

---

## 💼 Section: PROJECTS

**File:** `index.html` — look for `<!-- PROJECT 1 -->`, `<!-- PROJECT 2 -->`, etc.

Each project has two parts: the **image slider** (top) and the **project body** (bottom).

### Edit project info
Inside `.project-body`, change:
```html
<div class="project-cat">Data Science · Course Assignment</div>
<!-- ↑ category label — change this -->

<h3>Your Project Title Here</h3>
<!-- ↑ project title -->

<span class="project-year">2024</span>
<!-- ↑ year -->

<p>Your project description here. Explain what you built, what you did, and the result.</p>
<!-- ↑ description paragraph -->
```

### Edit tech stack tags
```html
<div class="project-tags">
  <span class="project-tag">Python</span>
  <span class="project-tag">Pandas</span>
  <!-- add or remove tags here -->
</div>
```

### Add a new project
Copy everything between `<!-- ── PROJECT X ──` and `<!-- ── END PROJECT X ──` 
and paste it inside `.projects-grid`. Change the number in the comment.

### Add photos to a project
**Option A — Click in browser:**
Open `index.html` in your browser → click the grey image area → select your photos.
*(Note: photos won't save if you close and reopen the file)*

**Option B — Permanent photos (recommended):**
1. Put your image files in the `images/` folder (e.g. `images/project1-a.jpg`)
2. In `index.html`, find the project's `<div class="slider-wrap" data-slider>` 
3. Add your images as hidden `<img>` tags with a `data-src` attribute — 
   or simply replace the upload zone with a static `<img>` tag:

```html
<!-- Replace the upload-zone label with this: -->
<div class="slide">
  <img src="images/project1-a.jpg" alt="Project screenshot">
</div>
<div class="slide">
  <img src="images/project1-b.jpg" alt="Project screenshot 2">
</div>
```
And remove the `<label class="upload-zone">...</label>` block.

---

## 🎓 Section: EDUCATION

**File:** `index.html` — look for `<!-- EDUCATION -->`

```html
<h3>B.Sc. Information Systems</h3>
<!-- ↑ degree name -->

<div class="edu-meta">
  President University · Cikarang, West Java · 2022 – Present
</div>
<!-- ↑ university, location, years -->

<div class="edu-courses">
  <strong>Focus:</strong> Data Science<br>
  Relevant courses: Web Programming, Database Systems, ...
</div>
<!-- ↑ your focus and list of courses -->
```

**To add a second education entry** (e.g. high school), copy the whole `<div class="edu-card">` block and paste it below, with a `margin-top: 16px` style.

---

## 📬 Section: CONTACT

**File:** `index.html` — look for `<!-- CONTACT -->`

**Email card:**
```html
<a class="contact-card" href="mailto:YOUR@EMAIL.com">
  <div class="contact-card-label">Email</div>
  <div class="contact-card-value">YOUR@EMAIL.com</div>   ← visible text
</a>
```

**LinkedIn card:**
```html
<a class="contact-card" href="https://linkedin.com/in/YOUR-URL" target="_blank">
  <div class="contact-card-label">LinkedIn</div>
  <div class="contact-card-value">Your Name</div>
</a>
```

**Add a third card** (e.g. GitHub):
```html
<a class="contact-card" href="https://github.com/yourusername" target="_blank">
  <div class="contact-card-label">GitHub</div>
  <div class="contact-card-value">yourusername</div>
  <div class="contact-card-hint">Click to open GitHub ↗</div>
</a>
```
Also change the contact grid in `style.css` from 2 columns to 3:
```css
.contact-grid { grid-template-columns: repeat(3, 1fr); }
```

---

## 🌐 Section: FOOTER

**File:** `index.html` — look for `<!-- FOOTER -->`

```html
<footer>
  © 2025 Putri Lestari Wijaya · Information Systems – Data Science · President University
</footer>
```
Change the year, name, or tagline freely.

---

## 🚀 How to Open the Portfolio

1. Double-click `index.html` — opens in your browser
2. For live preview while editing: use **VS Code + Live Server extension**
   - Install Live Server from VS Code Extensions
   - Right-click `index.html` → **Open with Live Server**
   - Page auto-refreshes every time you save

---

## 💡 Tips

- Always keep a backup copy of `index.html` before making big changes
- Use **Ctrl+Z** to undo mistakes in VS Code
- Images should ideally be **16:9 ratio** for the project slider (e.g. screenshots)
- Keep image file sizes under **500KB** for fast loading
- To host online for free: upload the whole folder to [GitHub Pages](https://pages.github.com/) or [Netlify](https://netlify.com)
