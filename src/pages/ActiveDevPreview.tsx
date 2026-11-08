import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useSearchParams } from 'react-router-dom';
import {
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Code2,
  BookOpen,
  Award,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  QrCode,
} from 'lucide-react';
import {
  CITY_GUIDES,
  LIFESTYLE_STAMPS,
  ARCHITECTURE_ROADMAP,
  FAQ_ITEMS,
} from '../data/cities';

interface ActiveDevPreviewProps {
  section?: 'mission' | 'membership' | 'badges' | 'faqs';
}

export const ActiveDevPreview: React.FC<ActiveDevPreviewProps> = ({ section }) => {
  const { cityId } = useParams<{ cityId: string }>();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Interactive states for City Guide View
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);
  const [selectedStamps, setSelectedStamps] = useState<string[]>([]);
  const [quizActive, setQuizActive] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>(['paris']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setQuizActive(false);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setExpandedModuleId(null);

    const preselectedStamp = searchParams.get('stamp');
    if (preselectedStamp) {
      setSelectedStamps([preselectedStamp]);
    }
  }, [cityId, location.pathname, searchParams]);

  // Load unlocked badges from LocalStorage (100% Client-Side, Zero PII)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('goldenguest_unlocked_badges');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setUnlockedBadges(parsed);
        }
      } else {
        localStorage.setItem('goldenguest_unlocked_badges', JSON.stringify(['paris']));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleUnlockBadge = (id: string) => {
    const updated = unlockedBadges.includes(id)
      ? unlockedBadges
      : [...unlockedBadges, id];
    setUnlockedBadges(updated);
    try {
      localStorage.setItem('goldenguest_unlocked_badges', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const toggleStamp = (slug: string) => {
    setSelectedStamps((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  // ============================================================================
  // CASE 1: CITY GUIDE PAGE (/guides/:cityId) — Matches Reference Screenshot + Interactive Preview
  // ============================================================================
  if (cityId) {
    const city = CITY_GUIDES.find((c) => c.id === cityId.toLowerCase()) || CITY_GUIDES[0];
    const relatedGuides = CITY_GUIDES.filter((c) => c.id !== city.id);
    const requiredModule = city.modules.find((m) => m.type === 'required')!;
    const optionalModules = city.modules.filter((m) => m.type === 'optional');

    const petStamp = LIFESTYLE_STAMPS.find((s) => s.slug === 'pet')!;
    const otherStamps = LIFESTYLE_STAMPS.filter((s) => s.slug !== 'pet');

    const isBadgeUnlocked = unlockedBadges.includes(city.id);
    const correctCount = city.sampleQuiz.filter(
      (q) => quizAnswers[q.id] === q.correctIndex
    ).length;

    const handleQuizSubmit = () => {
      setQuizSubmitted(true);
      if (correctCount >= Math.ceil(city.sampleQuiz.length / 2)) {
        toggleUnlockBadge(city.id);
      }
    };

    return (
      <main className="w-full bg-[#FAF9F6] pb-20">
        {/* Top Breadcrumb Bar (matching reference screenshot) */}
        <div className="bg-[#EFECE6] border-b border-[#141413]/10 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
            <nav className="flex items-center gap-2 text-[#141413]/60">
              <Link to="/" className="text-[#C5A059] hover:underline">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#141413]/40" />
              <Link to="/badges" className="text-[#C5A059] hover:underline">
                City Badges
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-[#141413]/40" />
              <span className="text-[#141413] font-medium">{city.name}</span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#141413] text-[#C5A059] text-[10px] tracking-widest uppercase font-medium">
              <Sparkles className="w-3 h-3" />
              <span>Interactive Guide &amp; Phase 2 Preview</span>
            </div>
          </div>
        </div>

        {/* Main 2-Column Split Layout (Sticky Left Image + Right Scrolling Modules) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Sticky City Card with GoldenGuest Laurel Overlay */}
            <div className="lg:col-span-5 lg:sticky lg:top-8">
              <div className="relative aspect-square w-full rounded-sm overflow-hidden shadow-xl bg-[#141413] border border-[#141413]/10">
                <img
                  src={city.heroImage}
                  alt={`${city.name} street scene`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#141413]/35" />
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <img
                    src="/assets/GoldenGues-Org_Logo.png"
                    alt="GoldenGuest Membership Laurel"
                    className="w-3/4 max-w-[260px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Quick Local Etiquette Snapshot Card */}
              <div className="mt-6 bg-white rounded-sm p-6 border border-[#141413]/10 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#C5A059]">
                    {city.name} Quick Etiquette Snapshot
                  </span>
                  <span className="text-[11px] text-[#141413]/50">
                    ~{city.readTimeMinutes} min guide
                  </span>
                </div>
                <dl className="space-y-2.5 text-xs">
                  <div>
                    <dt className="font-semibold text-[#141413]">Quiet Hours:</dt>
                    <dd className="text-[#141413]/70">{city.localHighlights.quietHours}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#141413]">Essential Greeting:</dt>
                    <dd className="text-[#141413]/70">{city.localHighlights.greetingCustom}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#141413]">Neighborhood Rule:</dt>
                    <dd className="text-[#141413]/70">{city.localHighlights.neighborhoodRule}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* RIGHT COLUMN: City Header + Inside This Guide + Lifestyle Stamps + Ready CTA */}
            <div className="lg:col-span-7 space-y-10">
              {/* 1. City Guide Header & Badge Medallion */}
              <div className="text-center px-2 sm:px-6 pb-8 border-b border-[#141413]/10">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2">
                  EARN YOUR CITY BADGE
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl text-[#141413] font-normal mb-4">
                  {city.name} City Guide
                </h1>
                <p className="text-xs sm:text-sm text-[#141413]/70 leading-relaxed max-w-lg mx-auto mb-7">
                  {city.guideIntro}
                </p>

                <div className="flex flex-col items-center">
                  <img
                    src={city.badgeImage}
                    alt={city.certificationTitle}
                    className="w-28 h-28 sm:w-32 sm:h-32 object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                  />
                  {isBadgeUnlocked && (
                    <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/15 text-[#A8843E] text-[11px] font-semibold tracking-wider uppercase">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Unlocked in Your Local Passport</span>
                    </span>
                  )}
                </div>
              </div>

              {/* 2. "Inside This Guide" Section (Matches Reference Screenshot) */}
              <div className="bg-[#EFECE6] rounded-md p-6 sm:p-8">
                <div className="text-center mb-6">
                  <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-1">
                    WHAT YOU WILL LEARN
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141413] font-normal">
                    Inside This Guide
                  </h2>
                </div>

                {/* Required Module Dark Card: The Art of Living */}
                <div className="bg-[#1C1C1A] text-white rounded-md p-6 sm:p-7 mb-4 shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center mb-4">
                      <img
                        src={requiredModule.iconAsset}
                        alt={requiredModule.title}
                        className="w-5 h-5 object-contain icon-gold-filter"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedModuleId(
                          expandedModuleId === requiredModule.id ? null : requiredModule.id
                        )
                      }
                      className="text-[11px] text-[#C5A059] hover:underline flex items-center gap-1"
                    >
                      <span>
                        {expandedModuleId === requiredModule.id
                          ? 'Hide Etiquette Rules'
                          : 'Preview Etiquette Rules'}
                      </span>
                      {expandedModuleId === requiredModule.id ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-sm bg-[#C5A059] text-[#141413] text-[9px] font-bold tracking-[0.18em] uppercase mb-2.5">
                    {requiredModule.badgeLabel}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-2">
                    {requiredModule.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {requiredModule.summary}
                  </p>

                  {expandedModuleId === requiredModule.id && (
                    <div className="mt-5 pt-4 border-t border-white/15 space-y-2.5">
                      <p className="text-[10px] tracking-widest uppercase text-[#C5A059] font-semibold">
                        Key Etiquette Takeaways ({city.name}):
                      </p>
                      <ul className="space-y-2 text-xs text-white/85">
                        {requiredModule.keyEtiquettePoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#C5A059] font-bold">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 2 Optional Modules Side-by-Side White Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {optionalModules.map((mod) => {
                    const isExpanded = expandedModuleId === mod.id;
                    return (
                      <div
                        key={mod.id}
                        className="bg-white rounded-md p-6 shadow-sm border border-[#141413]/5 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div className="w-9 h-9 rounded bg-[#FAF9F6] border border-[#141413]/10 flex items-center justify-center">
                              <img
                                src={mod.iconAsset}
                                alt={mod.title}
                                className="w-5 h-5 object-contain icon-gold-filter"
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedModuleId(isExpanded ? null : mod.id)
                              }
                              className="text-[11px] text-[#C5A059] hover:underline font-medium"
                            >
                              {isExpanded ? 'Close' : 'Preview'}
                            </button>
                          </div>

                          <span className="inline-block px-2 py-0.5 rounded-sm bg-[#EFECE6] text-[#141413]/70 text-[9px] font-semibold tracking-[0.18em] uppercase mb-2">
                            {mod.badgeLabel}
                          </span>

                          <h3 className="font-serif text-lg text-[#141413] font-medium mb-1.5">
                            {mod.title}
                          </h3>

                          <p className="text-xs text-[#141413]/65 leading-relaxed">
                            {mod.summary}
                          </p>
                        </div>

                        {isExpanded && (
                          <ul className="mt-4 pt-3 border-t border-[#141413]/10 space-y-1.5 text-xs text-[#141413]/80">
                            {mod.keyEtiquettePoints.map((pt, i) => (
                              <li key={i} className="flex items-start gap-1.5">
                                <span className="text-[#C5A059] font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. "Lifestyle Stamps" Section (Matches Reference Screenshot) */}
              <div className="bg-[#EFECE6] rounded-md p-6 sm:p-8">
                <div className="text-center mb-6">
                  <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-1">
                    TAILORED TO YOUR TRAVEL STYLE
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#141413] font-normal mb-2">
                    Lifestyle Stamps
                  </h2>
                  <p className="text-xs text-[#141413]/65 max-w-md mx-auto leading-relaxed">
                    Every trip is unique. Click any Lifestyle Stamp below to customize your{' '}
                    {city.name} guide with tailored etiquette tips.
                  </p>
                </div>

                {/* Top Full-Width White Card: Pet Explorer */}
                <button
                  type="button"
                  onClick={() => toggleStamp(petStamp.slug)}
                  className={`w-full text-center bg-white rounded-md p-6 mb-4 shadow-sm border transition-all flex flex-col items-center ${
                    selectedStamps.includes(petStamp.slug)
                      ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30'
                      : 'border-[#141413]/5 hover:border-[#C5A059]/50'
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-[#C5A059] flex items-center justify-center mb-3 shadow-sm">
                    <img
                      src={petStamp.stampIconAsset}
                      alt={petStamp.guideTitle}
                      className="w-6 h-6 object-contain icon-light-filter"
                    />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-[#141413] mb-1">
                    {petStamp.guideTitle}
                  </h3>
                  <p className="text-xs text-[#141413]/65 max-w-md leading-relaxed">
                    {petStamp.guideDescription}
                  </p>
                  {selectedStamps.includes(petStamp.slug) && (
                    <div className="mt-4 pt-3 border-t border-[#141413]/10 text-left w-full">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] mb-1.5">
                        ✓ Added to Your {city.name} Guide:
                      </p>
                      <ul className="space-y-1 text-xs text-[#141413]/80">
                        {petStamp.etiquetteHighlights.map((h, i) => (
                          <li key={i}>• {h}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </button>

                {/* 2x2 Grid of Other 4 Lifestyle Stamps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherStamps.map((stamp) => {
                    const isSelected = selectedStamps.includes(stamp.slug);
                    return (
                      <button
                        key={stamp.id}
                        type="button"
                        onClick={() => toggleStamp(stamp.slug)}
                        className={`text-center bg-white rounded-md p-6 shadow-sm border transition-all flex flex-col items-center ${
                          isSelected
                            ? 'border-[#C5A059] ring-2 ring-[#C5A059]/30'
                            : 'border-[#141413]/5 hover:border-[#C5A059]/50'
                        }`}
                      >
                        <div className="w-11 h-11 rounded-full bg-[#C5A059] flex items-center justify-center mb-3 shadow-sm">
                          <img
                            src={stamp.stampIconAsset}
                            alt={stamp.guideTitle}
                            className="w-6 h-6 object-contain icon-light-filter"
                          />
                        </div>
                        <h3 className="font-serif text-base font-semibold text-[#141413] mb-1">
                          {stamp.guideTitle}
                        </h3>
                        <p className="text-xs text-[#141413]/65 leading-relaxed">
                          {stamp.guideDescription}
                        </p>
                        {isSelected && (
                          <div className="mt-4 pt-3 border-t border-[#141413]/10 text-left w-full">
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-[#C5A059] mb-1">
                              ✓ Stamp Active:
                            </p>
                            <ul className="space-y-1 text-[11px] text-[#141413]/80">
                              {stamp.etiquetteHighlights.map((h, i) => (
                                <li key={i}>• {h}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. "Ready to Get Your Badge?" Dark CTA Box (Matches Reference Screenshot) */}
              <div className="bg-[#1C1C1A] text-white rounded-sm p-8 sm:p-10 text-center shadow-xl">
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-2">
                  Ready to Get Your Badge?
                </h2>
                <p className="text-xs sm:text-sm text-white/65 mb-6">
                  Unlock this guide and earn your {city.name} cultural readiness badge today.
                </p>

                <button
                  type="button"
                  onClick={() => setQuizActive(!quizActive)}
                  className="w-full py-3.5 px-6 bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-colors mb-5"
                >
                  BECOME A GOLDENGUEST
                </button>

                <p className="text-[11px] text-white/50 mb-3">
                  Already a GoldenGuest?
                </p>

                <button
                  type="button"
                  onClick={() => setQuizActive(true)}
                  className="w-full py-3 px-6 border border-[#C5A059]/60 hover:border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059]/10 text-xs font-medium tracking-[0.15em] uppercase rounded-sm transition-colors"
                >
                  {quizActive ? ' Cultural Readiness Quiz Open Below' : 'Start This Guide'}
                </button>
              </div>

              {/* 5. Interactive Cultural Readiness Quiz Sandbox & Phase 2 Architecture Preview */}
              {quizActive && (
                <div className="bg-white rounded-md p-6 sm:p-8 border-2 border-[#C5A059] shadow-xl">
                  <div className="flex items-center justify-between border-b border-[#141413]/10 pb-4 mb-6">
                    <div>
                      <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#C5A059]">
                        INTERACTIVE ARCHITECTURE PREVIEW · ZERO-PII QUIZ ENGINE
                      </span>
                      <h3 className="font-serif text-2xl text-[#141413]">
                        {city.name} Cultural Readiness Quiz
                      </h3>
                    </div>
                    <img
                      src={city.badgeImage}
                      alt={city.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  <div className="space-y-6">
                    {city.sampleQuiz.map((q, qIdx) => (
                      <div
                        key={q.id}
                        className="p-4 rounded bg-[#FAF9F6] border border-[#141413]/10"
                      >
                        <p className="text-xs italic text-[#141413]/70 mb-1.5">
                          Scenario {qIdx + 1}: {q.scenario}
                        </p>
                        <p className="text-sm font-semibold text-[#141413] mb-3">
                          {q.question}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((opt, oIdx) => {
                            const isPicked = quizAnswers[q.id] === oIdx;
                            const isCorrect = q.correctIndex === oIdx;
                            return (
                              <button
                                key={oIdx}
                                type="button"
                                onClick={() =>
                                  setQuizAnswers((prev) => ({ ...prev, [q.id]: oIdx }))
                                }
                                className={`w-full text-left px-3.5 py-2.5 rounded text-xs border transition-colors flex items-center justify-between ${
                                  quizSubmitted
                                    ? isCorrect
                                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium'
                                      : isPicked
                                      ? 'bg-amber-50 border-amber-500 text-amber-950'
                                      : 'bg-white border-[#141413]/10 text-[#141413]/60'
                                    : isPicked
                                    ? 'bg-[#C5A059]/15 border-[#C5A059] text-[#141413] font-medium'
                                    : 'bg-white border-[#141413]/10 hover:border-[#C5A059]/60 text-[#141413]/80'
                                }`}
                              >
                                <span>{opt}</span>
                                {quizSubmitted && isCorrect && (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                        {quizSubmitted && (
                          <p className="mt-3 text-xs text-[#141413]/75 bg-[#EFECE6] p-2.5 rounded">
                            <strong>Cultural Context:</strong> {q.explanation}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    {!quizSubmitted ? (
                      <button
                        type="button"
                        onClick={handleQuizSubmit}
                        className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-colors"
                      >
                        Verify Readiness &amp; Mint {city.name} Badge
                      </button>
                    ) : (
                      <div className="flex flex-wrap items-center justify-between w-full gap-4 bg-[#141413] text-white p-4 rounded-sm">
                        <div className="flex items-center gap-3">
                          <Award className="w-6 h-6 text-[#C5A059]" />
                          <div>
                            <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                              {city.certificationTitle} Unlocked!
                            </p>
                            <p className="text-xs text-white/75">
                              Score: {correctCount}/{city.sampleQuiz.length} · Saved locally to your
                              browser Passport (Zero PII).
                            </p>
                          </div>
                        </div>
                        <Link
                          to="/membership"
                          className="px-4 py-2 bg-[#C5A059] text-[#141413] text-[11px] font-semibold uppercase tracking-wider rounded-sm"
                        >
                          View QR Passport
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Phase 2 & 3 Active Development Roadmap Note for City Guides */}
              <div className="bg-white rounded-md p-6 border border-[#141413]/10 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-2">
                  <Layers className="w-4 h-4" />
                  <span>In Active Development · Guide Architecture Roadmap</span>
                </div>
                <p className="text-xs text-[#141413]/70 leading-relaxed mb-3">
                  This {city.name} City Guide runs on GoldenGuest&apos;s schema-driven client
                  engine (`src/data/cities.ts`). Below are the modules queued for Phase 2 &amp;
                  Phase 3:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#141413]/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Phase 2 · Queued
                    </span>
                    <p className="font-medium text-[#141413] mt-0.5">
                      Audio Phrasebook &amp; Illustrated Story Cards
                    </p>
                    <p className="text-[#141413]/60 text-[11px] mt-0.5">
                      Swipeable 15-minute visual chapter deck with native audio pronunciations.
                    </p>
                  </div>
                  <div className="p-3 rounded bg-[#FAF9F6] border border-[#141413]/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                      Phase 3 · Planned
                    </span>
                    <p className="font-medium text-[#141413] mt-0.5">
                      {city.partnerPerksCount}+ Neighborhood Partner Perks Map
                    </p>
                    <p className="text-[#141413]/60 text-[11px] mt-0.5">
                      Zero-tracking OpenStreetMap view of local bakeries &amp; cafés honoring the{' '}
                      {city.name} badge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Guides Section (Matches bottom of City Guide reference screenshot) */}
          <div className="mt-20 pt-12 border-t border-[#141413]/10">
            <h2 className="font-serif text-xl sm:text-2xl text-[#141413] font-medium mb-6">
              Related Guides
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedGuides.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/guides/${rel.id}`}
                  className="group relative aspect-[4/4.5] rounded-sm overflow-hidden bg-[#141413] shadow-md block"
                >
                  <img
                    src={rel.heroImage}
                    alt={rel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-4 inset-x-4 text-center">
                    <h3 className="font-serif text-xl text-white group-hover:text-[#C5A059] transition-colors">
                      {rel.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/badges"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#C5A059] hover:text-[#A8843E] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to City Badges</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================================
  // CASE 2: INTERNAL PLATFORM ROUTES (/mission, /membership, /badges, /faqs)
  // Interactive "In Active Development / Architecture Preview" + Route-Specific Experience
  // ============================================================================
  const activeKey = section || 'mission';
  const spec = ARCHITECTURE_ROADMAP[activeKey] || ARCHITECTURE_ROADMAP.mission;

  return (
    <main className="w-full bg-[#FAF9F6] pb-24">
      {/* Architecture Preview Hero Banner */}
      <section className="bg-dark-map text-white py-16 sm:py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-[11px] font-semibold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>In Active Development · Architecture Preview</span>
              </div>

              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2">
                {spec.microLabel}
              </p>

              <h1 className="font-serif text-3xl sm:text-5xl text-white font-normal mb-4 leading-tight">
                {spec.pageTitle}
              </h1>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mb-6">
                {spec.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>100% Client-Side · Zero PII</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10">
                  <Code2 className="w-4 h-4 text-[#C5A059]" />
                  <span>MIT Open-Source Architecture</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-[#0E0E0D] border border-white/15 rounded-md p-6 flex flex-col items-center text-center max-w-xs w-full shadow-2xl">
                <img
                  src={spec.heroAsset}
                  alt={spec.pageTitle}
                  className="max-h-48 w-auto object-contain rounded mb-4"
                />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C5A059]">
                  GoldenGuest Open Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Route-Specific Interactive Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 space-y-16">
        {/* ------------------------------------------------------------------ */}
        {/* ROUTE: /badges — Interactive City Badges & Lifestyle Stamps Catalog */}
        {/* ------------------------------------------------------------------ */}
        {activeKey === 'badges' && (
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#141413]/10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-1">
                  INTERACTIVE DESTINATION CATALOG
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141413]">
                  Select a City Badge to Launch Its Guide
                </h2>
              </div>
              <p className="text-xs text-[#141413]/60 mt-2 sm:mt-0">
                Showing {CITY_GUIDES.length} live city guides · Click any card to inspect
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {CITY_GUIDES.map((city) => {
                const isEarned = unlockedBadges.includes(city.id);
                return (
                  <Link
                    key={city.id}
                    to={`/guides/${city.id}`}
                    className="group bg-white rounded-sm border border-[#141413]/10 shadow-sm hover:shadow-xl transition-all p-5 flex flex-col items-center text-center"
                  >
                    <div className="relative w-28 h-28 mb-4">
                      <img
                        src={city.badgeImage}
                        alt={city.certificationTitle}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C5A059]">
                      {city.country}
                    </span>
                    <h3 className="font-serif text-xl text-[#141413] mt-0.5 mb-1 group-hover:text-[#C5A059] transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-[11px] text-[#141413]/65 leading-relaxed mb-4 flex-1">
                      {city.shortBlurb}
                    </p>
                    <span
                      className={`w-full py-2 px-3 rounded-sm text-[10px] font-semibold tracking-widest uppercase transition-colors ${
                        isEarned
                          ? 'bg-[#C5A059]/15 text-[#A8843E] border border-[#C5A059]/40'
                          : 'bg-[#141413] text-white group-hover:bg-[#C5A059] group-hover:text-[#141413]'
                      }`}
                    >
                      {isEarned ? '✓ Earned · Open Guide' : 'Explore Guide →'}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* ROUTE: /membership — Interactive Client-Side Passport & Zero-PII Wallet */}
        {/* ------------------------------------------------------------------ */}
        {activeKey === 'membership' && (
          <section className="bg-white rounded-md p-8 sm:p-10 border border-[#141413]/10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                  <QrCode className="w-4 h-4" />
                  <span>Client-Side LocalStorage Passport Preview</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#141413]">
                  Your Verifiable GoldenGuest Passport
                </h2>
                <p className="text-xs sm:text-sm text-[#141413]/70 leading-relaxed">
                  {spec.overview}
                </p>

                <div className="pt-2">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#141413]">
                      Badges Stored in This Browser ({unlockedBadges.length}/5):
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setUnlockedBadges(['paris']);
                        localStorage.setItem(
                          'goldenguest_unlocked_badges',
                          JSON.stringify(['paris'])
                        );
                      }}
                      className="inline-flex items-center gap-1 text-[11px] text-[#141413]/50 hover:text-[#141413]"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset Demo State</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {CITY_GUIDES.map((city) => {
                      const unlocked = unlockedBadges.includes(city.id);
                      return (
                        <div
                          key={city.id}
                          className={`p-3 rounded border text-center flex flex-col items-center ${
                            unlocked
                              ? 'bg-[#FAF9F6] border-[#C5A059]'
                              : 'bg-gray-50 border-gray-200 opacity-55'
                          }`}
                        >
                          <img
                            src={city.badgeImage}
                            alt={city.name}
                            className="w-14 h-14 object-contain mb-2"
                          />
                          <span className="font-serif text-sm font-medium text-[#141413]">
                            {city.name}
                          </span>
                          {unlocked ? (
                            <span className="text-[10px] text-[#A8843E] font-semibold uppercase mt-1">
                              ✓ Certified
                            </span>
                          ) : (
                            <Link
                              to={`/guides/${city.id}`}
                              className="text-[10px] text-[#C5A059] hover:underline uppercase mt-1"
                            >
                              Take Quiz →
                            </Link>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center">
                <img
                  src="/assets/GoldenGuest-Passport.png"
                  alt="Paris Art de Vivre Certified QR Passport"
                  className="w-full max-w-[290px] rounded-md shadow-xl border border-[#C5A059]/40"
                />
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* ROUTE: /mission — Editorial Stories & Community Stewardship */}
        {/* ------------------------------------------------------------------ */}
        {activeKey === 'mission' && (
          <section className="space-y-10">
            <div className="bg-white rounded-md p-8 border border-[#141413]/10 shadow-sm">
              <h2 className="font-serif text-2xl text-[#141413] mb-3">
                Why Open-Source Cultural Readiness Matters
              </h2>
              <p className="text-xs sm:text-sm text-[#141413]/75 leading-relaxed">
                {spec.overview}
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2">
                EDITORIAL PERSPECTIVES
              </p>
              <h3 className="font-serif text-2xl text-[#141413] mb-6">
                Research &amp; Stories Queued for Phase 2 Publication
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Beyond Rental Bans: How Education Restores Neighborhood Trust',
                    image: '/assets/img-blog-ban.png',
                    tag: 'URBAN POLICY',
                  },
                  {
                    title: 'The Unwritten Etiquette of Historic European Apartment Courtyards',
                    image: '/assets/img-blog-etiquette.png',
                    tag: 'LOCAL CUSTOMS',
                  },
                  {
                    title: 'Traveling with Grace: Why Small Greetings Transform Hospitality',
                    image: '/assets/img-blog-grace.png',
                    tag: 'MINDFUL TRAVEL',
                  },
                ].map((post, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-sm overflow-hidden border border-[#141413]/10 shadow-sm flex flex-col"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#141413]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C5A059]">
                          {post.tag}
                        </span>
                        <h4 className="font-serif text-lg text-[#141413] mt-1.5">
                          {post.title}
                        </h4>
                      </div>
                      <span className="mt-4 text-[11px] text-[#141413]/50 uppercase tracking-wider">
                        Phase 2 Editorial Module
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* ROUTE: /faqs — Interactive FAQ Accordion */}
        {/* ------------------------------------------------------------------ */}
        {activeKey === 'faqs' && (
          <section className="bg-white rounded-md p-8 border border-[#141413]/10 shadow-sm">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#141413] mb-6">
              Platform, Privacy &amp; Badge Verification
            </h2>

            <div className="divide-y divide-[#141413]/10">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left flex items-center justify-between gap-4 py-1"
                    >
                      <span className="font-serif text-lg text-[#141413] font-medium">
                        {item.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#C5A059] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#141413]/50 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="mt-2.5 text-xs sm:text-sm text-[#141413]/70 leading-relaxed pr-6">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* SHARED ARCHITECTURE QUEUE (Phase 1 Live / Phase 2 Queued / Phase 3 Planned) */}
        {/* ------------------------------------------------------------------ */}
        <section>
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-1.5">
              MODULAR IMPLEMENTATION ROADMAP
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#141413]">
              Phase 1, Phase 2 &amp; Phase 3 Module Queue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {spec.modules.map((mod, idx) => {
              const isLive = mod.phase.includes('Phase 1');
              return (
                <div
                  key={idx}
                  className={`rounded-sm p-6 sm:p-7 border flex flex-col justify-between ${
                    isLive
                      ? 'bg-[#141413] text-white border-[#C5A059]/50 shadow-lg'
                      : 'bg-white text-[#141413] border-[#141413]/10 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm ${
                          isLive
                            ? 'bg-[#C5A059] text-[#141413]'
                            : 'bg-[#EFECE6] text-[#141413]/80'
                        }`}
                      >
                        {mod.phase}
                      </span>
                      <BookOpen
                        className={`w-4 h-4 ${
                          isLive ? 'text-[#C5A059]' : 'text-[#141413]/40'
                        }`}
                      />
                    </div>

                    <h3 className="font-serif text-xl font-medium mb-2">{mod.title}</h3>

                    <code
                      className={`block text-[11px] font-mono mb-3 px-2 py-1 rounded ${
                        isLive
                          ? 'bg-white/10 text-[#C5A059]'
                          : 'bg-[#FAF9F6] text-[#A8843E]'
                      }`}
                    >
                      {mod.modulePath}
                    </code>

                    <p
                      className={`text-xs leading-relaxed mb-5 ${
                        isLive ? 'text-white/75' : 'text-[#141413]/70'
                      }`}
                    >
                      {mod.description}
                    </p>
                  </div>

                  <ul
                    className={`space-y-1.5 text-[11px] pt-4 border-t ${
                      isLive
                        ? 'border-white/15 text-white/80'
                        : 'border-[#141413]/10 text-[#141413]/75'
                    }`}
                  >
                    {mod.technicalNotes.map((note, nIdx) => (
                      <li key={nIdx} className="flex items-start gap-2">
                        <span className="text-[#C5A059] font-bold">✓</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

