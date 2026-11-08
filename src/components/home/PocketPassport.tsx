import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, QrCode, Smartphone } from 'lucide-react';

const POCKET_FEATURES = [
  'Instant QR verification for hosts and participating neighborhood cafés',
  '100% client-side privacy—stored locally in your browser with zero PII',
  'Collect destination medallions and tailored Lifestyle Stamps as you travel',
];

export const PocketPassport: React.FC = () => {
  const [viewMode, setViewMode] = useState<'phones' | 'card'>('phones');

  return (
    <section className="py-16 sm:py-20 bg-dark-map text-white overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Copy & Bullet Points */}
          <div className="lg:col-span-6">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
              DIGITAL PASSPORT &amp; QR BADGES
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-5">
              Everything in Your Pocket
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-7 max-w-lg">
              Your GoldenGuest Passport and earned City Badges live right on your phone—ready to
              share with your host before arrival or scan for special perks at local establishments.
              No app store download or personal account required.
            </p>

            <ul className="space-y-3.5 mb-8">
              {POCKET_FEATURES.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/85">
                  <span className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#C5A059]" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/guides/paris"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] text-xs font-semibold tracking-[0.18em] uppercase rounded-sm transition-colors"
              >
                PREVIEW PARIS BADGE
              </Link>
              <button
                type="button"
                onClick={() => setViewMode(viewMode === 'phones' ? 'card' : 'phones')}
                className="inline-flex items-center gap-2 px-4 py-3 border border-white/20 hover:border-[#C5A059] text-xs tracking-wider uppercase text-white/80 hover:text-[#C5A059] rounded-sm transition-colors"
              >
                {viewMode === 'phones' ? (
                  <>
                    <QrCode className="w-4 h-4 text-[#C5A059]" />
                    <span>Inspect High-Res QR Card</span>
                  </>
                ) : (
                  <>
                    <Smartphone className="w-4 h-4 text-[#C5A059]" />
                    <span>Show Dual Mobile Mockup</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Dual Mobile Mockups / High-Res Paris Passport Card */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {viewMode === 'phones' ? (
              <div className="relative max-w-md w-full flex justify-center">
                <img
                  src="/assets/GoldenGuest-MobileApp.png"
                  alt="GoldenGuest Mobile Passport and Paris Art de Vivre Certified QR Badge"
                  className="w-full max-w-[420px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div className="relative max-w-xs w-full flex justify-center">
                <img
                  src="/assets/GoldenGuest-Passport.png"
                  alt="Paris Art de Vivre Certified QR Passport Card"
                  className="w-full max-w-[300px] h-auto rounded-lg shadow-2xl border border-[#C5A059]/30 transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

