export interface QuizQuestion {
  id: string;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GuideModule {
  id: string;
  title: string;
  type: 'required' | 'optional';
  badgeLabel: string;
  durationMinutes: number;
  iconAsset: string;
  summary: string;
  keyEtiquettePoints: string[];
}

export interface LifestyleStamp {
  id: string;
  slug: 'pet' | 'family' | 'group' | 'couples' | 'solo';
  homeTitle: string;
  guideTitle: string;
  shortDescription: string;
  guideDescription: string;
  imageAsset: string;
  stampIconAsset: string;
  bentoPosition: 'top-left' | 'bottom-left' | 'center-tall' | 'top-right' | 'bottom-right';
  etiquetteHighlights: string[];
}

export interface CityGuide {
  id: string;
  name: string;
  country: string;
  motto: string;
  heroImage: string;
  badgeImage: string;
  certificationTitle: string;
  shortBlurb: string;
  guideIntro: string;
  readTimeMinutes: number;
  partnerPerksCount: number;
  modules: GuideModule[];
  sampleQuiz: QuizQuestion[];
  localHighlights: {
    quietHours: string;
    greetingCustom: string;
    diningTip: string;
    neighborhoodRule: string;
  };
}

export interface ArchitectureModuleSpec {
  phase: 'Phase 1 · Live' | 'Phase 2 · Queued' | 'Phase 3 · Planned';
  title: string;
  modulePath: string;
  description: string;
  technicalNotes: string[];
}

