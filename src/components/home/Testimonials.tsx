import React from 'react';

const TESTIMONIALS = [
  {
    id: 'jonathan',
    quote:
      'Sharing the GoldenGuest Paris guide before check-in completely transformed how guests care for our historic courtyard building. We have had zero neighbor noise complaints in six months.',
    author: 'Jonathan L.',
    role: 'Boutique Host · Paris',
  },
  {
    id: 'aymeric',
    quote:
      'I used to worry about accidentally breaking unwritten local rules in Tokyo and Rome. Completing the 15-minute guide gave me real confidence—and the local café perks were a lovely bonus.',
    author: 'Aymeric G.',
    role: 'GoldenGuest Member · Frequent Traveler',
  },
  {
    id: 'lucia',
    quote:
      'Tourism works best when visitors understand that our historic streets are also our homes. GoldenGuest bridges that cultural gap with warmth and respect rather than scolding.',
    author: 'Lucía D.',
    role: 'Neighborhood Resident · Barcelona',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-dark-map text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Section Header (matching reference screenshot) */}
        <div className="mb-12">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            REAL STORIES FROM OUR COMMUNITY
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
            Trusted by Guests, Hosts, and Communities
          </h2>
        </div>

        {/* 3 Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F6] text-[#141413] rounded-sm p-8 sm:p-10 shadow-lg flex flex-col items-center text-center justify-between"
            >
              {/* Large Gold Quotation Marks */}
              <div className="font-serif text-5xl leading-none text-[#C5A059] select-none mb-3">
                &ldquo;
              </div>

              <p className="text-xs sm:text-sm text-[#141413]/80 italic leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="w-full flex flex-col items-center">
                <div className="w-10 h-[1px] bg-[#C5A059] mb-3.5" />
                <p className="font-serif text-base font-semibold text-[#141413]">
                  {item.author}
                </p>
                <p className="text-[11px] tracking-wider uppercase text-[#141413]/55 mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

