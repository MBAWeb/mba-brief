# NEXT — MBA Brief Project Roadmap

This document outlines the **approved next steps** for the MBA Brief project. It exists to:

* Preserve context between work sessions
* Prevent accidental refactors or changes
* Provide a clear, intentional development path

---

## ⚠️ Ground Rules (Read First)

1. **No code changes should be made unless explicitly approved.**
2. All recommendations must be **explained before implementation**.
3. Prefer **small, reversible steps** over large refactors.
4. This project prioritizes **clarity and learning**, not speed.

---

## 📌 Current State (Baseline)

### Project

* **Name:** MBA Brief
* **Type:** Concept AI tool landing page
* **Purpose:** Portfolio project for MBA Web Studio

### Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS
* Deployed on Vercel

### Deployment

* **Live URL:** [https://mba-brief.vercel.app/projects/mba-brief](https://mba-brief.vercel.app/projects/mba-brief)
* Root route (`/`) intentionally not used

### Sections Completed

* Navbar (anchor-based navigation)
* Hero section
* Features grid
* Proof section (stats row)
* Pricing cards
* Final CTA (client component)

### Known Architecture Notes

* Page-level file currently marked with `"use client"`
* Interactivity exists only in Final CTA (email form)
* Components currently live in a single `page.jsx` file

---

## 🧭 Approved Future Directions (Choose One at a Time)

### Option A — Component Refactor (Recommended First)

**Goal:** Improve maintainability and realism without changing UI.

Proposed steps:

* Extract components into `/components` directory:

  * `Navbar.jsx`
  * `Hero.jsx`
  * `FeaturesGrid.jsx`
  * `StatsRow.jsx`
  * `PricingCards.jsx`
  * `FinalCTA.jsx`
* Keep `/projects/mba-brief/page.jsx` focused on composition only
* Revisit `"use client"` placement (limit to interactive components)

⚠️ Do not proceed without explicit approval.

---

### Option B — Visual & UX Polish

**Goal:** Improve perceived quality without structural changes.

Possible tasks:

* Consistent vertical rhythm between sections
* Improve mobile spacing and stacking
* Subtle hover and focus states
* Optional micro-animations (non-essential)

---

### Option C — Portfolio Integration

**Goal:** Integrate MBA Brief into the main MBA Web Studio portfolio.

Possible tasks:

* Add project card to portfolio homepage
* Write short case study summary
* Add links:

  * Live demo (Vercel)
  * GitHub repository

---

## 🚫 Explicitly Out of Scope (For Now)

* Backend or API integration
* Real authentication
* Real email submission handling
* Database or persistence
* Performance optimization

---

## 📝 Notes for Future Sessions

* Always confirm intent before editing files
* Ask for clarification if instructions feel ambiguous
* Maintain step-by-step explanations
* Treat this as a **learning-first** build, not a tutorial dump

---

*Last updated: add new entries below as decisions are made.*
