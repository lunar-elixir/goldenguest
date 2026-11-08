# Contributing to GoldenGuest 🌍✨

Thank you for helping build the open-source commons for responsible tourism, interactive city etiquette guides, and verifiable cultural readiness!

GoldenGuest is a community-driven, privacy-first platform released under the [MIT License](./LICENSE). We welcome contributions from **local neighborhood residents**, **short-term rental hosts**, **cultural researchers**, and **frontend engineers**.

---

## 🛡️ Core Architectural Guardrails

Every contribution to GoldenGuest must respect two foundational principles:

1. **100% Zero-PII & Privacy-First:**
   - GoldenGuest runs entirely client-side in the user's browser.
   - Do **not** introduce user authentication, email capture forms, newsletter popups, third-party tracking pixels, or server-side user databases.
   - All badge progress and quiz states must remain locally persisted via `localStorage` or `IndexedDB`.
2. **Community-Authored & Non-Commercial Tone:**
   - Etiquette rules should be written with warmth, empathy, and cultural context—explaining *why* a local custom matters to neighbors rather than lecturing travelers.

---

## 🏙️ How to Propose or Edit a City Etiquette Guide (Local Wiki)

All City Guides (`Paris`, `Barcelona`, `London`, `Rome`, `Tokyo`, and upcoming Tier-2 cities) and `Lifestyle Stamps` are strongly typed and stored directly in this repository:

- **Schema Definitions:** [`src/types/guide.ts`](./src/types/guide.ts) (`CityGuide`, `GuideModule`, `LifestyleStamp`, `QuizQuestion`)
- **Seed Data & Cultural Rules:** [`src/data/cities.ts`](./src/data/cities.ts)

### Checklist for Adding a New City or Etiquette Rule:
1. Define the `CityGuide` entry in `src/data/cities.ts` with:
   - **Required Track (`The Art of Living`):** 4–6 high-impact unwritten rules covering apartment acoustics, quiet hours, greetings, and waste/recycling sorting.
   - **Optional Tracks (`Discover Like a Local` & `Stay Safe & Aware`):** Authentic neighborhood customs and street-smart safety tips.
   - **Scenario Quiz (`sampleQuiz`):** 2–5 realistic situational questions with a `correctIndex` and a warm cultural `explanation`.
2. Verify TypeScript compilation locally by running:
   ```bash
   npm run build
   ```

---

## 💻 Development Workflow & Pull Request Process

1. **Fork & Clone the Repository:**
   ```bash
   git clone https://github.com/<your-username>/goldenguest.git
   cd goldenguest
   npm install
   npm run dev
   ```
2. **Create a Topic Branch:**
   Use a descriptive branch prefix (`feat/`, `fix/`, `docs/`, `chore/`):
   ```bash
   git checkout -b feat/interactive-module-reader
   ```
3. **Follow Conventional Commits:**
   - `feat(guide): add interactive flashcard deck for The Art of Living`
   - `feat(quiz): implement client-side readiness score validation hook`
   - `docs(wiki): add Kyoto Gion district quiet-hours etiquette rules`
   - `fix(navbar): improve keyboard focus navigation on language selector`
4. **Verify Production Build Before Opening a PR:**
   Ensure `npm run build` (`tsc && vite build`) passes with **zero** TypeScript or Vite bundling errors.
