import React from 'react';

const WHY_CARDS = [
  {
    id: 'travel-changed',
    title: 'Travel changed cities life',
    image: '/assets/why-GoldenGuest-1.png',
    alt: 'Host welcoming travelers into an apartment building',
    description:
      'Short-term stays have transformed how we experience destinations—bringing travelers out of hotel zones and straight into residential buildings and daily neighborhood life.',
  },
  {
    id: 'unwritten-rules',
    title: 'Most rules are unwritten',
    image: '/assets/why-GoldenGuest-2.png',
    alt: 'Neighbors and guests passing on a residential staircase',
    description:
      'From quiet hours in historic courtyards to recycling habits and local greetings, the customs that keep a neighborhood peaceful are rarely posted on a wall.',
  },
  {
    id: 'awareness-harmony',
    title: 'Awareness builds harmony',
    image: '/assets/why-GoldenGuest-3.png',
    alt: 'Traveler enjoying a warm moment with a local shopkeeper',
    description:
      'Just 15 minutes of cultural preparation turns friction into mutual respect—helping guests feel genuinely welcome while protecting the rhythm of local communities.',
  },
];

export const WhyExistsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            THE HEART OF CONSCIOUS TRAVEL
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] font-normal">
            Why GoldenGuest Exists
          </h2>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_CARDS.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-sm overflow-hidden shadow-sm border border-[#141413]/5 flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#1C1C1A]">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-7 sm:p-8 text-center flex-1 flex flex-col items-center">
                <h3 className="font-serif text-xl sm:text-[22px] text-[#141413] font-medium">
                  {card.title}
                </h3>

                {/* Small Gold Diamond Separator */}
                <div className="my-3.5 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#C5A059] inline-block" />
                </div>

                <p className="text-xs sm:text-sm text-[#141413]/70 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

