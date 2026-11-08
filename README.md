# GoldenGuest 🌍✨

**Setting the standard for responsible tourism through interactive city etiquette guides, cultural diffing, and verifiable local readiness.**

[![Live Demo](https://img.shields.io/badge/Live_Platform-goldenguest.org-C5A059?style=flat&logo=vercel&logoColor=white)](https://goldenguest.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3+-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

🔗 **Live Production Preview:** [https://goldenguest.org](https://goldenguest.org)

---

## Overview

**GoldenGuest** is a non-profit, open-source, and community-driven web platform designed to bridge the gap between conscious travelers, short-term rental hosts, and neighborhood communities. While short-term rentals have transformed how people travel, unwritten local customs, noise expectations, and shared-space etiquette often get lost in translation creating friction for residents and uncertainty for guests.

Rather than generic travel tips, GoldenGuest turns local cultural readiness into an engaging, 15-minute interactive experience powered by a **Git-backed Open-Source Local Wiki**, a deterministic **Origin-Aware Cultural Diffing Engine**, and **gamified QR badges**.

> **Privacy & Architecture Note:** GoldenGuest is architected as a privacy-first, 100% client-side application. It requires no user authentication, no email capture, and processes zero personal identifiable information (PII).

---

## Core Architecture & Features

* **Git-Backed Open-Source Local Wiki:** City etiquette guides (starting with Paris, Barcelona, London, Rome, and Tokyo) are powered by structured JSON/TypeScript schemas maintained directly in this repository. Local residents and contributors can draft, validate, and submit authentic neighborhood customs, safety tips, and hidden local spots via a client-side schema builder and GitHub Pull Requests.
* **Origin-Aware "Cultural Delta" Engine:** Travelers select their home country baseline before starting a guide. A deterministic TypeScript rule-matching engine compares origin and destination cultural matrices, automatically collapsing familiar customs the traveler already shares with the destination into an optional *"Shared Customs & Curiosities"* drawer while surfacing high-impact local differences inside the required track.
* **Core & Optional Learning Tracks:**
  * **The Art of Living (Required):** High-priority everyday customs, quiet hours, and shared-space norms required to unlock a destination badge.
  * **Discover Like a Local (Optional):** Authentic neighborhood spots, independent shops, and avoiding tourist traps.
  * **Stay Safe & Aware (Optional):** Street smarts, local scam awareness, and neighborhood safety essentials.
* **Tailored Lifestyle Stamps:** Specialized etiquette sub-modules tailored to specific travel profiles:
  * 🐾 **Pet Explorer:** Local pet regulations and etiquette in rentals, public spaces, and transit.
  * 👨‍👩‍👧 **Family Explorer:** Local expectations around children in shared spaces, restaurants, and quiet hours.
  * 🎉 **Group Explorer:** Group dynamics, noise management, and respecting residential nightlife boundaries.
  * 🥂 **Couple's Explorer:** Navigating local norms around privacy and public affection.
  * 🧭 **Solo Explorer:** Personal space, local social boundaries, and solo safety.
* **Gamified Progression & Local Economy Perks:** Interactive real-world scenario challenges, progress streaks, and collectible SVG *Lifestyle Stamps* culminate in a **Digital GoldenGuest Passport**. Completing city modules unlocks verifiable client-side QR badges that travelers can share with hosts during booking or scan at participating independent businesses for local partner perks.

---

## Tech Stack

* **Framework:** React 18 (Vite) + TypeScript
* **Routing:** React Router v6 (`react-router-dom`)
* **Styling & Icons:** Tailwind CSS + Lucide React (`lucide-react`)
* **State & Persistence:** Client-side state hooks + LocalStorage / IndexedDB for local Passport and quiz persistence
* **Testing (Planned):** Vitest + React Testing Library
* **Deployment:** Vercel (CI/CD linked to `main` branch with SPA rewrite rules)

---

## Project Architecture

```text
goldenguest/
├── public/
│   └── assets/                   # Static badge graphics, city imagery, and UI mockups
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Main navigation & language utility header
│   │   │   └── Footer.tsx        # Platform footer & open-source repository links
│   │   └── home/
│   │       ├── HeroSection.tsx   # Landing hero & primary call-to-action
│   │       ├── WhyExistsSection.tsx
│   │       ├── HowItWorksSection.tsx
│   │       ├── EnrichesSection.tsx
│   │       ├── CityGuidesGrid.tsx
│   │       ├── LifestyleGrid.tsx
│   │       ├── Testimonials.tsx
│   │       ├── ImpactStats.tsx
│   │       └── PocketPassport.tsx
│   ├── data/
│   │   └── cities.ts             # Strongly-typed seed data for Cities, Wiki rules & Lifestyle Stamps
│   ├── pages/
│   │   ├── HomePage.tsx          # Main landing experience
│   │   └── ActiveDevPreview.tsx  # Architecture preview & module queue for internal routes
│   ├── types/
│   │   └── guide.ts              # TypeScript interfaces (CityGuide, CulturalRule, OriginProfile, LifestyleStamp)
│   └── App.tsx                   # Application router & layout wrapper
├── vercel.json                   # SPA routing configuration for Vercel
├── LICENSE
├── package.json
└── README.md