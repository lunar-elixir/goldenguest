import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { WhyExistsSection } from '../components/home/WhyExistsSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { EnrichesSection } from '../components/home/EnrichesSection';
import { CityGuidesGrid } from '../components/home/CityGuidesGrid';
import { LifestyleGrid } from '../components/home/LifestyleGrid';
import { Testimonials } from '../components/home/Testimonials';
import { ImpactStats } from '../components/home/ImpactStats';
import { PocketPassport } from '../components/home/PocketPassport';
import { OpenSourcePillarsSection } from '../components/home/OpenSourcePillarsSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <WhyExistsSection />
      <HowItWorksSection />
      <EnrichesSection />
      <CityGuidesGrid />
      <LifestyleGrid />
      <Testimonials />
      <ImpactStats />
      <PocketPassport />
      <OpenSourcePillarsSection />
    </main>
  );
};
