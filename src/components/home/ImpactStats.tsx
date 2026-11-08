import React from 'react';

const STATS_GRID = [
  {
    value: '50+',
    label: 'City & Lifestyle Badges',
    sublabel: 'Modular etiquette tracks',
  },
  {
    value: '700+',
    label: 'Local Partner Perks',
    sublabel: 'Independent cafés & shops',
  },
  {
    value: '960+',
    label: 'Mindful Stays',
    sublabel: 'Harmonious host check-ins',
  },
  {
    value: '100%',
    label: 'Community-Authored',
    sublabel: 'Open-source & privacy-first',
  },
];

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            OUR GROWING IMPACT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] font-normal mb-4">
            Travel That Moves with the City
          </h2>
          <p className="text-xs sm:text-sm text-[#141413]/65 leading-relaxed">
            Together, conscious travelers, hosts, and residents are setting a new standard for
            respectful hospitality across global destinations.
          </p>
        </div>

        {/* Split Layout: Left 3K Highlight Card + Right 2x2 Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Highlight Box: 3K GoldenGuest Members */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-sm p-10 sm:p-12 text-center shadow-sm border border-[#141413]/5 overflow-hidden flex flex-col items-center justify-center min-h-[240px]">
              {/* Subtle Laurel Watermark */}
              <img
                src="/assets/GoldenGues-Org_Logo.png"
                alt=""
                aria-hidden="true"
                className="absolute w-44 h-44 object-contain opacity-[0.08] pointer-events-none select-none"
              />
              <span className="relative font-serif text-5xl sm:text-6xl text-[#C5A059] font-normal tracking-tight mb-2">
                3K
              </span>
              <span className="relative text-xs font-semibold tracking-[0.22em] uppercase text-[#141413]">
                GoldenGuest Members
              </span>
              <span className="relative text-[11px] text-[#141413]/55 mt-1">
                Committed to mindful local travel
              </span>
            </div>
          </div>

          {/* Right 2x2 Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-y-10 gap-x-6 text-center">
            {STATS_GRID.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-serif text-3xl sm:text-4xl text-[#C5A059] font-normal mb-1.5">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#141413] tracking-wide">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#141413]/55 mt-0.5">{stat.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

