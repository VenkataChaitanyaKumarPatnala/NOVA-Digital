# My Business Website Project: Nova Digital

## About This Project
This is a website I built for **Nova Digital**, a fictional digital agency. It includes **4** pages (Home, About, Services, Contact) and has the following main features:
* Fully responsive layout that works on mobile and desktop.
* Interactive mobile navigation menu.
* Contact form with client-side email validation.
* Professional styling using SASS variables and mixins.

## What I Learned
* **HTML5 Structure:** I learned how to use semantic tags properly (like `<header>`, `<main>`, `<nav>`, and `<footer>`) to improve accessibility and SEO.
* **CSS Layouts:** I mastered **CSS Grid** for the Services/Team sections and **Flexbox** for the navigation bar to create flexible, responsive designs.
* **SASS Organization:** I learned to organize CSS using **Variables** (for consistent colors/fonts) and **Mixins** to write cleaner, more maintainable code.
* **JavaScript:** I added interactive features like a **hamburger menu toggle** for mobile devices and **form validation logic** to prevent incorrect submissions.
* **Accessibility:** I made sure the website works for everyone by using semantic elements, proper contrast ratios, and accessible form labels.

## Challenges & Solutions
**Challenge 1: Making the layout responsive**
* *Solution*: Used **CSS Grid** with media queries. I changed the `grid-template-columns` from 3 columns on desktop to 1 column on mobile (`max-width: 768px`) to ensure content stays readable.

**Challenge 2: Configuring the SASS Compiler**
* *Solution*: I installed the "Live Sass Compiler" extension in VS Code and configured the `settings.json` file to ensure the compiled `.css` files were saved automatically into the correct `css/` folder, keeping my project structure clean.

## How to View This Website
1.  **Download the project files** (or clone the repository).
2.  **Open `index.html`** in your browser (Chrome, Firefox, or Edge).
3.  *Optional*: To edit styles, open the project in VS Code and run "Watch Sass" to compile changes from `scss/` to `css/`.

## Screenshots
*(Images are located in the `images/` folder)*
* **Desktop View:** See screenshots in this folder for the full grid layout.
* **Mobile View:** See screenshots in this folder for the responsive menu.

---

## Technical Documentation & Quality Standards
*The following sections are included to meet the Technical & Architecture requirements.*

### Setup Instructions
1.  Clone this repository.
2.  Open the folder in VS Code.
3.  Install **Live Sass Compiler** (by Glenn Marks).
4.  Click "Watch Sass" in the bottom status bar to enable style compilation.

### Code Structure
```text
business-website/
│── index.html          # Homepage with semantic structure
│── contact.html        # Contact page with form
│── css/                # Compiled CSS (Do not edit directly)
│── scss/               # Source SASS files (Variables, Mixins)
│── js/                 # JavaScript logic (Menu, Validation)
└── images/             # Optimized assets