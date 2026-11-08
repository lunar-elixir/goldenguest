import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  {
    id: 'guest',
    microLabel: 'TRAVEL CONSCIOUSLY',
    headlineLines: [
      'Discover the local etiquette',
      'and everyday customs',
      'to travel with ease.',
    ],
    ctaLabel: 'BECOME A GOLDENGUEST',
    ctaLink: '/membership',
    image: '/assets/banner-guest.png',
  },
  {
    id: 'host',
    microLabel: 'HARMONY FOR EVERY STAY',
    headlineLines: [
      'Empower your guests',
      'with local awareness',
      'before check-in.',
    ],
    ctaLabel: 'EXPLORE CITY GUIDES',
    ctaLink: '/badges',
    image: '/assets/banner-host.png',
  },
];

export const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = HERO_SLIDES[activeSlide];

  return (
    <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] flex items-center overflow-hidden bg-[#141413]">
      {/* Background Image with Smooth Transition */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt="Conscious travelers exploring local customs"
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
        {/* Left-to-right editorial dark gradient for crisp serif readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#141413]/90 via-[#141413]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/60 via-transparent to-[#141413]/25" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.26em] uppercase text-[#C5A059] mb-4">
            {slide.microLabel}
          </p>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] text-white font-normal leading-[1.16] tracking-tight mb-8">
            {slide.headlineLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={slide.ctaLink}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              {slide.ctaLabel}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom-Right Slide Indicators (matching reference screenshot) */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-2.5">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveSlide(idx)}
            aria-label={`Show ${s.id} hero slide`}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === activeSlide
                ? 'w-7 bg-[#C5A059]'
                : 'w-2 bg-white/45 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

