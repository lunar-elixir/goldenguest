import React from 'react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    number: '1',
    title: 'EXPLORE YOUR CITY GUIDE',
    description:
      'Discover your destination’s unwritten rules in a 15-minute interactive guide covering apartment acoustics, greetings, dining norms, and street awareness.',
  },
  {
    number: '2',
    title: 'COMPLETE THE CULTURAL QUIZ',
    description:
      'Test your local readiness with brief, practical scenarios tailored to real neighborhood life and add optional Lifestyle Stamps for your trip.',
  },
  {
    number: '3',
    title: 'EARN YOUR BADGE & PERKS',
    description:
      'Unlock your verifiable GoldenGuest City Badge and QR Passport to share with your host before check-in and enjoy perks at local partner spots.',
  },
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-dark-map text-white border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: 3 Numbered Steps */}
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
              A SIMPLE PATH TO BETTER TRAVEL
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-10">
              How GoldenGuest Works
            </h2>

            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="w-9 h-9 rounded-full bg-[#C5A059] text-[#141413] font-serif font-bold text-base flex items-center justify-center shrink-0 mt-0.5 shadow-md">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/65 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: GoldenGuest Membership Laurel Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B0B0A] border border-white/10 rounded-sm p-8 sm:p-10 text-center shadow-2xl flex flex-col items-center">
              <img
                src="/assets/GoldenGues-Org_Logo.png"
                alt="GoldenGuest Membership Laurel"
                className="w-56 sm:w-64 h-auto object-contain mb-6"
              />

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-7 max-w-sm">
                Show hosts, neighbors, and local communities your commitment to respectful,
                conscious travel—100% free and private.
              </p>

              <Link
                to="/membership"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] text-xs font-semibold tracking-[0.2em] uppercase rounded-sm transition-all duration-200 w-full sm:w-auto"
              >
                BECOME A MEMBER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

