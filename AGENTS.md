# AGENTS.md

## Project: Personal Portfolio Website

You are an AI coding agent working on a personal portfolio website.

Your job is to IMPLEMENT the website based on the provided visual reference.

The visual reference is the SOURCE OF TRUTH.

Do not redesign the website based on your own assumptions.
Do not replace the visual direction with a generic SaaS, dashboard, or template design.

---

## 1. PRIMARY OBJECTIVE

Recreate the portfolio website shown in the provided reference image as accurately as possible.

Priority order:

1. Visual accuracy
2. Responsive behavior
3. User experience
4. Code quality
5. Performance

The final implementation should feel like the same website as the reference image, not merely a website with similar content.

---

## 2. TECHNOLOGY STACK

Use:

- React
- Vite
- Tailwind CSS
- JavaScript or TypeScript based on the existing project
- Framer Motion
- Lucide React

Do NOT introduce another frontend framework.

Do NOT migrate the project to Next.js.

Do NOT use Bootstrap.

Do NOT use Material UI.

Do NOT use unnecessary UI component libraries.

---

## 3. DESIGN SOURCE OF TRUTH

The uploaded portfolio reference image must be treated as the primary design reference.

Reference characteristics:

- Light mode
- White background
- Deep navy typography
- Lime green accent
- Soft gray/blue decorative elements
- Editorial / asymmetric layout
- Modern personal portfolio
- Playful but professional
- Hand-drawn decorative arrows and notes
- Floating cards
- Layered imagery
- Large typography
- Rounded cards
- Soft shadows
- Organic shapes
- Modern 2026 portfolio aesthetic

Main colors:

```txt
Background:
#FFFFFF

Primary Navy:
#061B41

Accent Lime:
#B8F500

Secondary Text:
#718096

Soft Background:
#F5F8FA
```

Do not randomly introduce additional dominant colors.

---

## 4. VISUAL STYLE

The website must NOT look like:

- Generic Bootstrap portfolio
- Generic Tailwind template
- Standard developer portfolio
- Dashboard
- Corporate landing page
- AI-generated template
- Excessively rounded SaaS UI
- Dark developer portfolio

The visual direction should remain:

**Editorial + asymmetric + playful + professional + modern.**

Use:

- asymmetric composition
- overlapping images
- floating cards
- organic background shapes
- handwritten annotations
- irregular positioning
- layered elements
- subtle rotation
- large typography
- generous whitespace

---

## 5. PAGE STRUCTURE

The page should contain:

1. Navbar
2. Hero
3. About Me
4. Featured Projects
5. Other Projects
6. Contact / CTA

The page should be a single scrolling portfolio unless the existing project already requires routing.

---

## 6. NAVBAR

Desktop navigation:

- Logo / personal mark on the left
- Home
- About
- Projects
- Contact
- Download CV button on the right

The navbar should be clean and lightweight.

Active navigation item:

- dark navy text
- lime underline/accent

Download CV:

- navy background
- white text
- rounded pill/button
- download icon

Mobile:

- responsive navigation
- do not allow the navbar to overflow
- use a clean mobile menu

---

## 7. HERO SECTION

Hero is the most visually important section.

Layout:

Desktop:

- left side = introduction and typography
- right side = large personal photo composition

Content:

Small label:

"Hello! I'm"

Main heading:

"Lazzian"

"Al Falah"

Use large bold typography.

"Lazzian" should use navy.

"Al Falah" should use lime.

Description:

"I'm a software developer who loves turning ideas into real-world applications. I enjoy building clean, scalable systems with modern technologies and always excited to learn something new."

Buttons:

- See My Work
- Contact Me

Tech stack section below:

- React
- Node.js
- SQL Server
- Tailwind

Use the provided visual assets where applicable.

---

## 8. HERO IMAGE COMPOSITION

Do NOT simply render the portrait as a normal rectangular image.

The reference uses:

- personal cutout photography
- layered cards
- floating labels
- decorative arrows
- abstract lime shapes
- navy cards
- hand-written annotations

The composition should feel like multiple elements floating together.

Important:

Use absolute positioning only where it improves the visual composition.

Do not make the entire layout dependent on fragile absolute positioning.

The hero must remain responsive.

---

## 9. ABOUT SECTION

The section contains:

Left:

- personal photo
- lime/soft background shape
- handwritten note

Center:

Small label:

"ABOUT ME"

Large heading:

"Turning Ideas"

"into Real Impact"

Use lime for "Real Impact".

Description about:

- web development
- problem solving
- creating products
- modern technologies
- continuous learning

Right:

Three visual cards:

1. Clean & Scalable Code
2. Modern UI/UX Focus
3. Continuous Learning

Cards should have different visual treatment and slight rotations.

---

## 10. PROJECT SECTION

Heading:

"Featured Projects"

Use:

"Featured" = navy

"Projects" = lime

Supporting description below.

Main featured project:

### WMS - Warehouse Management System

Description:

"Inventory and warehouse management system for manufacturing company with modern and clean interface."

Technology badges:

- React
- SQL Server
- Tailwind

The WMS project should receive the strongest visual emphasis.

Use the provided WMS screenshot asset.

---

## 11. PROJECT CARDS

Projects include:

### WMS - Warehouse Management System

Stack:

- React
- SQL Server
- Tailwind

### Project Management App

Stack:

- React
- Express.js
- Tailwind

### Send.it - Shipping App

Stack:

- Figma
- UI/UX
- Prototype

### LazyTech Store

Stack:

- React
- Node.js
- Tailwind

### School Management System

Stack:

- PHP
- MySQL
- Bootstrap

Use the provided project images/screenshots.

Do not replace them with generated placeholder images.

---

## 12. ASSET USAGE

There are 17 extracted assets provided with this project.

Use those assets instead of recreating them.

Expected asset organization:

```txt
src/
└── assets/
    ├── profile/
    ├── projects/
    ├── illustrations/
    └── icons/
```

Suggested mapping:

```txt
01_hero_portrait.png
02_about_portrait.png
03_clean_scalable_illustration.png
04_modern_uiux_illustration.png
05_continuous_learning_illustration.png
06_wms_project_visual.png
07_wms_dashboard_screenshot.png
08_project_management_visual.png
09_project_management_screenshot.png
10_sendit_app_visual.png
11_sendit_phone_screens.png
12_lazytech_store_visual.png
13_lazytech_screenshot.png
14_school_management_visual.png
15_school_management_screenshot.png
16_contact_portrait.png
17_tech_stack_icons.png
```

IMPORTANT:

Do not replace these assets with random stock images.

Do not generate fake screenshots.

Do not use external image URLs when a local asset exists.

---

## 13. CONTACT SECTION

The bottom section should have a strong navy background.

Main heading:

"Let's Build"

"Something Great"

"Together!"

Use lime for "Together!".

Include:

- Email
- Location
- LinkedIn

Also include a contact form.

Fields:

- Your Name
- Your Email
- Message

Button:

"Send Message"

The personal portrait should appear on the right side of the composition.

---

## 14. ANIMATION

Use Framer Motion.

Animations should feel polished and subtle.

Recommended:

- fade + slide on section entrance
- staggered text appearance
- floating cards
- subtle image movement
- hover lift
- project card hover
- button hover
- navigation underline animation

Do NOT over-animate.

Avoid:

- excessive bouncing
- aggressive scaling
- spinning UI
- distracting infinite animations

Animations should support the design.

---

## 15. RESPONSIVE DESIGN

Desktop:

- maximize visual composition
- asymmetric layouts
- overlapping elements

Tablet:

- reduce spacing
- simplify overlapping elements
- preserve hierarchy

Mobile:

- single column
- readable typography
- images remain visible
- cards stack naturally
- decorative elements may be reduced
- no horizontal scrolling

The website MUST work at:

```txt
320px
375px
390px
430px
768px
1024px
1280px
1440px+
```

Never allow:

```css
overflow-x: hidden;
```

to be used merely to hide broken layouts.

Fix the actual layout problem instead.

---

## 16. COMPONENT ARCHITECTURE

Use reusable components.

Suggested structure:

```txt
src/
├── assets/
│   ├── profile/
│   ├── projects/
│   ├── illustrations/
│   └── icons/
│
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── SkillCards
│   ├── FeaturedProject
│   ├── ProjectCard
│   ├── ProjectsGrid
│   ├── Contact
│   ├── ContactForm
│   └── DecorativeElements
│
├── data/
│   └── projects
│
├── App
└── main
```

Avoid putting the entire website inside `App.jsx`.

---

## 17. CODE QUALITY

Follow these rules:

- components should have one clear responsibility
- avoid duplicated JSX
- use arrays for repeated project cards
- keep project data separate from presentation
- use semantic HTML
- use accessible buttons and links
- provide alt text for images
- avoid unnecessary state
- avoid unnecessary dependencies
- do not create giant components

---

## 18. TAILWIND RULES

Use Tailwind for styling.

Do not create massive CSS files for simple styling.

Custom CSS is allowed when Tailwind alone would make the design unnecessarily difficult.

Use CSS for:

- complex decorative shapes
- special animations
- custom typography effects
- irregular clipping
- advanced visual composition

---

## 19. IMPORTANT AGENT BEHAVIOR

Before modifying code:

1. Inspect the existing repository.
2. Understand the current structure.
3. Identify the current framework/version.
4. Check package.json.
5. Check existing Tailwind configuration.
6. Check existing assets.
7. Reuse existing functionality where possible.

Do not blindly rewrite the entire project.

Do not delete existing functionality unless explicitly required.

---

## 20. IMPLEMENTATION PROCESS

Work incrementally.

### Phase 1

Build:

- Navbar
- Hero
- About

Then verify the layout.

### Phase 2

Build:

- Featured Projects
- Project Cards
- Project Grid

Then verify responsive behavior.

### Phase 3

Build:

- Contact section
- Contact form
- Footer

### Phase 4

Add:

- animations
- hover states
- micro interactions
- responsive refinements

### Phase 5

Perform visual polish.

Check:

- spacing
- typography
- image positioning
- card sizes
- border radius
- shadows
- colors
- responsive layout
- animation timing

---

## 21. VISUAL QA

After implementation, compare the result against the reference image.

Pay special attention to:

- hero composition
- portrait positioning
- typography scale
- project card hierarchy
- section spacing
- lime/navy balance
- decorative arrows
- floating cards
- contact composition

If something looks generic, improve it.

If something differs from the reference without a technical reason, correct it.

---

## 22. DO NOT DO THESE THINGS

Never:

- redesign the page into a different style
- use dark mode as the primary design
- use Bootstrap
- use Material UI
- replace provided images with stock images
- create fake project screenshots
- remove important visual decorations
- make every card identical
- make every section perfectly centered
- overuse gradients
- use excessive glassmorphism
- add unnecessary 3D effects
- add excessive animation
- use browser default alerts
- use browser default form styling if a custom UI is expected
- introduce unnecessary libraries

---

## 23. FINAL DEFINITION OF DONE

The implementation is considered complete when:

- [ ] React/Vite application runs successfully
- [ ] Tailwind is working
- [ ] Navbar implemented
- [ ] Hero implemented
- [ ] About implemented
- [ ] Featured Projects implemented
- [ ] All project cards implemented
- [ ] Contact section implemented
- [ ] All provided assets are used correctly
- [ ] Responsive layout works
- [ ] Framer Motion animations work
- [ ] No horizontal overflow
- [ ] No broken images
- [ ] No console errors
- [ ] No unnecessary dependencies
- [ ] Visual appearance closely matches the reference
- [ ] Mobile layout has been checked
- [ ] Desktop layout has been checked

---

## 24. AGENT RESPONSE FORMAT

After completing a task, report:

### Changed

List the files/components changed.

### Implemented

List the functionality/design implemented.

### Assets

List the assets used or added.

### Validation

Report:

- build status
- lint status if available
- responsive checks
- known issues

### Next

Only mention remaining work if something is genuinely unfinished.

Do not claim something is complete if it has not been tested.
