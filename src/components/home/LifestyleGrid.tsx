import React from 'react';
import { Link } from 'react-router-dom';
import { LIFESTYLE_STAMPS } from '../../data/cities';

export const LifestyleGrid: React.FC = () => {
  const groupStamp = LIFESTYLE_STAMPS.find((s) => s.id === 'group')!;
  const couplesStamp = LIFESTYLE_STAMPS.find((s) => s.id === 'couples')!;
  const petStamp = LIFESTYLE_STAMPS.find((s) => s.id === 'pet')!;
  const familyStamp = LIFESTYLE_STAMPS.find((s) => s.id === 'family')!;
  const soloStamp = LIFESTYLE_STAMPS.find((s) => s.id === 'solo')!;

  const renderCard = (stamp: typeof groupStamp, isTall = false) => (
    <Link
      key={stamp.id}
      to={`/guides/paris?stamp=${stamp.slug}`}
      className={`group relative rounded-sm overflow-hidden bg-[#1C1C1A] block focus:outline-none focus:ring-2 focus:ring-[#C5A059] ${isTall ? 'min-h-[380px] md:h-full' : 'aspect-[4/3] md:aspect-auto md:h-[260px]'
        }`}
    >
      <img
        src={stamp.imageAsset}
        alt={stamp.homeTitle}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D]/90 via-[#0E0E0D]/30 to-transparent" />

      {/* Bottom Left Content */}
      <div className="absolute bottom-5 left-5 right-5 text-left">
        <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-1.5 group-hover:text-[#C5A059] transition-colors">
          {stamp.homeTitle}
        </h3>
        <p className="text-xs text-white/75 leading-relaxed line-clamp-2">
          {stamp.shortDescription}
        </p>
      </div>
    </Link>
  );

  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            PERSONALIZED ETIQUETTE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] font-normal mb-4">
            Tailored to Your Lifestyle
          </h2>
          <p className="text-xs sm:text-sm text-[#141413]/65 leading-relaxed">
            Every journey has its own rhythm. Add specialized Lifestyle Stamps to customize your
            city guide for who you are traveling with.
          </p>
        </div>

        {/* 3-Column Bento Grid: Left Stacked (Group, Couples), Center Tall (Pet Owner), Right Stacked (Family, Solo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:h-[540px]">
          {/* Left Column */}
          <div className="flex flex-col gap-5 h-full">
            <div className="flex-1">{renderCard(groupStamp)}</div>
            <div className="flex-1">{renderCard(couplesStamp)}</div>
          </div>

          {/* Center Tall Column: Pet Owner */}
          <div className="h-full">{renderCard(petStamp, true)}</div>

          {/* Right Column */}
          <div className="flex flex-col gap-5 h-full">
            <div className="flex-1">{renderCard(familyStamp)}</div>
            <div className="flex-1">{renderCard(soloStamp)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

