import React from 'react';
import { Link } from 'react-router-dom';
import { CITY_GUIDES } from '../../data/cities';

export const CityGuidesGrid: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-dark-map text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            EXPLORE BY DESTINATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-4">
            Find Your City Guide
          </h2>
          <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
            Learn the local art of living before you arrive. Select a destination to explore its
            15-minute cultural guide and earn your badge.
          </p>
        </div>

        {/* 5 Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {CITY_GUIDES.map((city) => (
            <Link
              key={city.id}
              to={`/guides/${city.id}`}
              className="group relative aspect-[4/5] rounded-sm overflow-hidden bg-[#1C1C1A] border border-white/10 shadow-lg block focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <img
                src={city.heroImage}
                alt={`${city.name} City Guide`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Warm Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0D]/90 via-[#0E0E0D]/25 to-transparent" />

              {/* Subtle Top Motto Tag on Hover */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] tracking-[0.18em] uppercase bg-[#141413]/85 text-[#C5A059] px-2.5 py-1 rounded-sm border border-[#C5A059]/30">
                  {city.motto}
                </span>
              </div>

              {/* Bottom Centered City Title */}
              <div className="absolute bottom-5 inset-x-4 text-center">
                <h3 className="font-serif text-2xl text-white font-normal tracking-wide group-hover:text-[#C5A059] transition-colors">
                  {city.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Primary Gold CTA */}
        <div className="text-center">
          <Link
            to="/badges"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            SEE ALL DESTINATIONS
          </Link>
        </div>
      </div>
    </section>
  );
};

