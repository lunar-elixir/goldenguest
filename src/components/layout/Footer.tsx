import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Code2, ShieldCheck, Globe, BookOpen, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111110] text-white border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Laurel Logo */}
          <div className="lg:col-span-3 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block">
              <img
                src="/assets/GoldenGues-Org_Logo.png"
                alt="GoldenGuest Logo"
                className="h-32 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Column 2: About Us Blurb */}
          <div className="lg:col-span-3 text-center md:text-left">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              About Us
            </h3>
            <p className="text-xs text-white/60 leading-relaxed">
              GoldenGuest is an open-source, community-driven platform setting the standard for
              responsible tourism through interactive city etiquette guides, lifestyle stamps, and
              verifiable cultural readiness badges.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-[11px] text-[#C5A059]">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>100% Client-Side · Zero PII Collected</span>
            </div>
          </div>

          {/* Column 3: About Links */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <Link to="/mission" className="hover:text-[#C5A059] transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/membership" className="hover:text-[#C5A059] transition-colors">
                  Membership &amp; Passport
                </Link>
              </li>
              <li>
                <Link to="/badges" className="hover:text-[#C5A059] transition-colors">
                  City Badges
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#C5A059] transition-colors">
                  Architecture &amp; FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: City Guides Links */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              City Guides
            </h3>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <Link to="/guides/paris" className="hover:text-[#C5A059] transition-colors">
                  Paris · Art de Vivre
                </Link>
              </li>
              <li>
                <Link to="/guides/barcelona" className="hover:text-[#C5A059] transition-colors">
                  Barcelona · L&apos;Art de Viure
                </Link>
              </li>
              <li>
                <Link to="/guides/london" className="hover:text-[#C5A059] transition-colors">
                  London · Art of Living
                </Link>
              </li>
              <li>
                <Link to="/guides/rome" className="hover:text-[#C5A059] transition-colors">
                  Rome · L&apos;Arte di Vivere
                </Link>
              </li>
              <li>
                <Link to="/guides/tokyo" className="hover:text-[#C5A059] transition-colors">
                  Tokyo · Art of Harmony
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Open-Source Repository & Community */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white mb-4">
              Open Source
            </h3>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              Community-authored under the permissive MIT License. No user tracking, no newsletter
              spam, no corporate lock-in.
            </p>
            <a
              href="https://github.com/goldenguest/goldenguest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#141413] text-xs font-medium transition-all"
            >
              <Code2 className="w-4 h-4 shrink-0" />
              <span>Open-Source Repository (MIT)</span>
            </a>

            <div className="flex items-center justify-center md:justify-start gap-2.5 mt-4">
              <Link
                to="/mission"
                title="Global Community"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#141413] flex items-center justify-center text-white/70 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/badges"
                title="City Guides Catalog"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#141413] flex items-center justify-center text-white/70 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/membership"
                title="Digital Passport"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#C5A059] hover:text-[#141413] flex items-center justify-center text-white/70 transition-colors"
              >
                <Award className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#0B0B0A] py-5 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-white/40">
          <span>
            &copy; {new Date().getFullYear()} GoldenGuest.org · Open-Source Community Initiative (MIT)
          </span>
          <span className="text-white/30">
            Privacy-First Client Architecture · Zero Personal Data Collection
          </span>
        </div>

        {/* Scroll to Top Button (matching reference screenshot bottom-right gold circle) */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-[#C5A059] hover:bg-[#D4B475] text-[#141413] shadow-lg flex items-center justify-center transition-transform hover:-translate-y-0.5 z-40"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </footer>
  );
};

