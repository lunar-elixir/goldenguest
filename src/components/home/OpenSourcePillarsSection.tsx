import React from 'react';
import { Link } from 'react-router-dom';
import { GitBranch, BookOpenCheck, Compass, ShieldCheck } from 'lucide-react';

const PILLARS = [
  {
    id: 'open-source-core',
    icon: GitBranch,
    codeTag: 'OSS · v1.0',
    emblemLabel: 'OPEN STANDARD',
    title: 'Open-Source Core',
    statusLabel: 'MIT LICENSED',
  },
  {
    id: 'local-etiquette-wiki',
    icon: BookOpenCheck,
    codeTag: 'WIKI · PRs',
    emblemLabel: 'CIVIC COMMONS',
    title: 'Local Etiquette Wiki',
    statusLabel: 'COMMUNITY AUTHORED',
  },
  {
    id: 'cultural-delta-engine',
    icon: Compass,
    codeTag: 'DELTA · I18N',
    emblemLabel: 'ADAPTIVE GUIDE',
    title: 'Cultural Delta Engine',
    statusLabel: 'ORIGIN TAILORED',
  },
  {
    id: 'zero-pii-architecture',
    icon: ShieldCheck,
    codeTag: 'LOCAL · ZERO-DB',
    emblemLabel: 'PRIVACY FIRST',
    title: 'Zero-PII Architecture',
    statusLabel: '100% CLIENT-SIDE',
  },
];

export const OpenSourcePillarsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
            HOW WE&apos;RE BUILT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#141413] font-normal mb-4">
            An Open-Source Initiative, Community Powered
          </h2>
          <p className="text-xs sm:text-sm text-[#141413]/65 leading-relaxed">
            GoldenGuest is an independent open-source platform built with local residents and
            contributors worldwide. Transparent, privacy-first, and built to last.
          </p>
        </div>

        {/* 4-Card Grid Replicating Original Visual Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <Link
                key={pillar.id}
                to="/mission"
                className="group bg-white rounded-sm border border-[#141413]/5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              >
                {/* Upper Emblem / Crest Zone (matching the top 60% height of the reference cards) */}
                <div className="px-6 pt-10 pb-9 flex flex-col items-center justify-center flex-1">
                  <div className="flex items-center gap-3.5">
                    {/* Architectural Crest Icon Box */}
                    <div className="w-14 h-14 rounded-sm bg-[#FAF9F6] border border-[#C5A059]/35 group-hover:border-[#C5A059] group-hover:bg-[#141413] flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6 text-[#141413] group-hover:text-[#C5A059] transition-colors duration-300 stroke-[1.75]" />
                    </div>

                    {/* Editorial Typographic Seal beside the Icon */}
                    <div className="text-left border-l border-[#141413]/15 pl-3.5">
                      <span className="block font-serif text-xs font-bold tracking-[0.16em] uppercase text-[#141413]">
                        {pillar.codeTag}
                      </span>
                      <span className="block text-[9px] tracking-[0.2em] uppercase text-[#C5A059] font-semibold mt-0.5">
                        {pillar.emblemLabel}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Full-Width Gold Horizontal Rule (matching the exact gold divider line in home_5.png) */}
                <div className="w-full h-[1.5px] bg-[#C5A059]/55 group-hover:bg-[#C5A059] transition-colors" />

                {/* Bottom Caption Zone */}
                <div className="px-6 py-6 text-center bg-white">
                  <h3 className="font-serif text-lg text-[#141413] font-semibold group-hover:text-[#A8843E] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#141413]/45 font-semibold mt-1.5">
                    {pillar.statusLabel}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

