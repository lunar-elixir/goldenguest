import React from 'react';

const STAKEHOLDERS = [
  {
    id: 'guests',
    label: 'FOR GUESTS',
    title: 'Travel With Confidence',
    icon: '/assets/icon-guest.png',
    description:
      'Skip awkward cultural missteps and feel at home from day one. Understand local dining, tipping, and building norms while unlocking neighborhood perks.',
  },
  {
    id: 'hosts',
    label: 'FOR HOSTS',
    title: 'Welcome Mindful Guests',
    icon: '/assets/icon-host.png',
    description:
      'Share a 15-minute city etiquette guide before check-in to protect property harmony, prevent noise complaints, and foster 5-star mutual trust.',
  },
  {
    id: 'communities',
    label: 'FOR COMMUNITIES',
    title: 'Preserve Local Culture',
    icon: '/assets/icon-community.png',
    description:
      'Encourage peaceful coexistence in residential buildings and historic districts while connecting conscious visitors with authentic local businesses.',
  },
];

export const EnrichesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            SHARED VALUE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] font-normal mb-4">
            Travel That Enriches Everyone
          </h2>
          <p className="text-xs sm:text-sm text-[#141413]/65 leading-relaxed">
            GoldenGuest creates a circle of mutual respect between conscious travelers, caring
            hosts, and the vibrant neighborhoods that welcome them.
          </p>
        </div>

        {/* 3-Column Icon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STAKEHOLDERS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm p-8 sm:p-10 text-center border border-[#141413]/5 shadow-sm flex flex-col items-center transition-all duration-300 hover:shadow-md"
            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-9 h-9 object-contain icon-gold-filter"
                />
              </div>

              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#141413]/80">
                {item.label}
              </span>

              <div className="w-16 h-[1px] bg-[#C5A059] my-3.5" />

              <h3 className="font-serif text-xl text-[#141413] font-medium mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#141413]/65 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

