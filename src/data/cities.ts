import { CityGuide, LifestyleStamp, ArchitectureModuleSpec } from '../types/guide';

export const LIFESTYLE_STAMPS: LifestyleStamp[] = [
  {
    id: 'group',
    slug: 'group',
    homeTitle: 'Group of Friends',
    guideTitle: 'Group Explorer',
    shortDescription:
      'Celebrate together while respecting residential quiet hours, shared courtyards, and local nightlife flow.',
    guideDescription:
      'Navigate group dining, shared apartment entryways, and lively evenings without disrupting neighbors.',
    imageAsset: '/assets/img-lifestyle-group.png',
    stampIconAsset: '/assets/stamp-group.png',
    bentoPosition: 'top-left',
    etiquetteHighlights: [
      'Lower voices in residential stairwells and courtyards after 21:00.',
      'Avoid rolling luggage loudly across cobblestone courtyards late at night.',
      'Split into smaller tables or book ahead for groups larger than 4 at neighborhood bistros.',
    ],
  },
  {
    id: 'couples',
    slug: 'couples',
    homeTitle: 'Couples',
    guideTitle: "Couple's Explorer",
    shortDescription:
      'Enjoy your romantic getaway while respecting local customs, intimate dining norms, and privacy.',
    guideDescription:
      'Enjoy your romantic getaway while respecting local customs, intimate dining norms, and neighborhood privacy.',
    imageAsset: '/assets/img-lifestyle-couples.png',
    stampIconAsset: '/assets/stamp-couple.png',
    bentoPosition: 'bottom-left',
    etiquetteHighlights: [
      'Understand local norms around public displays of affection near sacred or historic sites.',
      'Embrace unhurried terrace dining—never rush the check in European cafés.',
      'Respect residential balconies and shared terrace quiet hours.',
    ],
  },
  {
    id: 'pet',
    slug: 'pet',
    homeTitle: 'Pet Owner',
    guideTitle: 'Pet Explorer',
    shortDescription:
      'Travel smoothly with your four-legged companion by mastering local transit, café, and park rules.',
    guideDescription:
      'Learn what’s expected when traveling with pets in apartments, public parks, transit, and local cafés.',
    imageAsset: '/assets/img-course-pet.png',
    stampIconAsset: '/assets/stamp-pet.png',
    bentoPosition: 'center-tall',
    etiquetteHighlights: [
      'Always ask the host and café staff before bringing dogs onto indoor seating areas.',
      'Wipe paws before entering historic wooden-floor apartment hallways on rainy days.',
      'Check local leash laws and designated dog-friendly green spaces before off-leash play.',
    ],
  },
  {
    id: 'family',
    slug: 'family',
    homeTitle: 'Family with Kids',
    guideTitle: 'Family Explorer',
    shortDescription:
      'Feel welcome everywhere by understanding local expectations for children in restaurants and apartments.',
    guideDescription:
      'Understand local expectations for children in shared apartment buildings, dining out, and cultural spaces.',
    imageAsset: '/assets/img-lifestyle-family.png',
    stampIconAsset: '/assets/stamp-family.png',
    bentoPosition: 'top-right',
    etiquetteHighlights: [
      'Remove outdoor shoes indoors in historic apartments to keep downstairs neighbors comfortable.',
      'Learn which transit lines have step-free stroller access before rush hour.',
      'Prepare kids for quiet-voice norms inside neighborhood bakeries, shrines, and galleries.',
    ],
  },
  {
    id: 'solo',
    slug: 'solo',
    homeTitle: 'Solo Traveler',
    guideTitle: 'Solo Explorer',
    shortDescription:
      'Explore with confidence through local social cues, counter-dining customs, and street-smart awareness.',
    guideDescription:
      'Travel with confidence through local social cues, solo dining norms, and neighborhood safety awareness.',
    imageAsset: '/assets/img-lifestyle-solo.png',
    stampIconAsset: '/assets/stamp-solo.png',
    bentoPosition: 'bottom-right',
    etiquetteHighlights: [
      'Use counter seating at bustling cafés and ramen bars during peak lunch hours.',
      'Keep building entry codes and keys private when chatting with new acquaintances.',
      'Know neighborhood-specific evening transit routes and well-lit walking corridors.',
    ],
  },
];

export const CITY_GUIDES: CityGuide[] = [
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    motto: 'Art de Vivre',
    heroImage: '/assets/img-guide-paris.png',
    badgeImage: '/assets/badge-paris.png',
    certificationTitle: 'Paris · Art de Vivre Certified',
    shortBlurb:
      'Master Haussmann apartment acoustics, the sacred "Bonjour", and Parisian terrace etiquette.',
    guideIntro:
      'Everything you need to know about local life and etiquette in Paris to feel at home, respect the neighborhood, and earn your badge in under 15 minutes.',
    readTimeMinutes: 15,
    partnerPerksCount: 180,
    localHighlights: {
      quietHours: '22:00 – 07:00 (strictly observed in Haussmann courtyards & wooden-floor flats)',
      greetingCustom: 'Always say a warm "Bonjour" (or "Bonsoir" after 18:00) before asking any question.',
      diningTip: 'Carafes of tap water ("une carafe d’eau") and bread are complimentary; ask for the bill ("l’addition") when ready.',
      neighborhoodRule: 'Heavy courtyard doors must close gently; never prop security doors open.',
    },
    modules: [
      {
        id: 'paris-art-of-living',
        title: 'The Art of Living',
        type: 'required',
        badgeLabel: 'REQUIRED FOR BADGE',
        durationMinutes: 8,
        iconAsset: '/assets/icon-module-life.png',
        summary:
          'Master the essential unwritten rules of everyday Parisian life—from Haussmann apartment acoustics and courtyard quiet hours to the golden rule of "Bonjour" and terrace dining.',
        keyEtiquettePoints: [
          'The Sacred Greeting: Begin every interaction in a shop, bakery, or elevator with "Bonjour, Madame/Monsieur". Skipping it is considered deeply impolite.',
          'Haussmann Acoustics: Classic Parisian apartments have thin 19th-century parquet floors. Remove hard-soled shoes indoors after 21:00.',
          'Courtyard & Stairwell Harmony: Inner courtyards amplify sound like an amphitheater. Keep voices at a whisper when returning home at night.',
          'Recycling & Sorting: Use the yellow bin for packaging/cardboard, green bin for glass (never dump glass after 21:00), and regular bin for general waste.',
        ],
      },
      {
        id: 'paris-discover-local',
        title: 'Discover Like a Local',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 4,
        iconAsset: '/assets/icon-module-explore.png',
        summary:
          'Go beyond tourist traps to experience neighborhood boulangeries, covered markets, and authentic café culture.',
        keyEtiquettePoints: [
          'Terrace Seating: Small round tables on the sidewalk are for coffee or drinks; tables set with placemats or cloths are reserved for full meals.',
          'Boulangerie Etiquette: Decide on your pastry while in line and ask for a "baguette de tradition" for the freshest artisanal loaf.',
          'Market Touch Rule: At open-air markets (marchés), let the vendor select your produce rather than squeezing fruit yourself.',
        ],
      },
      {
        id: 'paris-stay-safe',
        title: 'Stay Safe & Aware',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 3,
        iconAsset: '/assets/icon-module-safety.png',
        summary:
          'Street smarts, common tourist scams to avoid around major monuments, and Métro navigation essentials.',
        keyEtiquettePoints: [
          'Petition & Friendship Bracelet Scams: Politely say "Non, merci" and keep walking near Sacré-Cœur and the Eiffel Tower.',
          'Métro Doors & Seating: Fold down jump-seats ("strapontins") must be vacated when the train car becomes crowded.',
          'Emergency Numbers: Dial 112 for European emergency services or 15 for medical assistance (SAMU).',
        ],
      },
    ],
    sampleQuiz: [
      {
        id: 'paris-q1',
        scenario: 'You walk into a small neighborhood boulangerie in Le Marais to buy a croissant.',
        question: 'What is the most important first thing to do before ordering?',
        options: [
          'Point directly at the pastry so you do not hold up the line',
          'Make eye contact and say "Bonjour Madame/Monsieur" before speaking',
          'Ask immediately if the staff speaks English',
        ],
        correctIndex: 1,
        explanation:
          'In France, "Bonjour" is the essential social key that acknowledges the other person’s dignity before any transaction begins.',
      },
      {
        id: 'paris-q2',
        scenario: 'You return to your 4th-floor Haussmann apartment at 23:30 after a wonderful dinner.',
        question: 'How should you navigate the building courtyard and apartment floors?',
        options: [
          'Chat normally in the courtyard since you are still outdoors',
          'Carry suitcases up the wooden stairs quietly and remove hard shoes indoors',
          'Run the washing machine and empty glass bottles into the courtyard bin',
        ],
        correctIndex: 1,
        explanation:
          'Historic Parisian courtyards echo strongly, and 19th-century wooden floors transmit footsteps directly to the ceiling below.',
      },
      {
        id: 'paris-q3',
        scenario: 'You are riding the Paris Métro during the evening rush hour sitting on a folding seat ("strapontin") near the doors.',
        question: 'What is the unwritten local rule when the carriage fills up?',
        options: [
          'Keep your seat—first come, first served',
          'Stand up so the folding seat retracts and creates standing room for others',
          'Place your backpack on the floor between the doors',
        ],
        correctIndex: 1,
        explanation:
          'Parisians always stand up from folding jump-seats ("strapontins") during crowded periods so more passengers can fit comfortably.',
      },
    ],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    motto: "L'Art de Viure",
    heroImage: '/assets/img-guide-barcelona.png',
    badgeImage: '/assets/badge-barcelona.png',
    certificationTitle: "Barcelona · L'Art de Viure Certified",
    shortBlurb:
      'Respect residential "convivència", beach-to-street dress norms, and Catalan neighborhood rhythms.',
    guideIntro:
      'Everything you need to know about local life and etiquette in Barcelona to honor residential harmony, enjoy authentic tapas culture, and earn your badge in under 15 minutes.',
    readTimeMinutes: 15,
    partnerPerksCount: 145,
    localHighlights: {
      quietHours: '22:00 – 08:00 (especially on balconies, terraces, and narrow Gothic Quarter streets)',
      greetingCustom: 'A friendly "Bon dia" (Catalan) or "Buenos días" (Spanish) warms every local interaction.',
      diningTip: 'Lunch is typically 13:30–15:30 ("Menú del migdia") and dinner starts after 20:30.',
      neighborhoodRule: 'Swimwear is strictly for the beach—always wear a shirt and footwear when walking into town.',
    },
    modules: [
      {
        id: 'bcn-art-of-living',
        title: 'The Art of Living',
        type: 'required',
        badgeLabel: 'REQUIRED FOR BADGE',
        durationMinutes: 8,
        iconAsset: '/assets/icon-module-life.png',
        summary:
          'Understand "convivència" (peaceful coexistence) in Barcelona’s dense historic neighborhoods, balcony acoustics, and water conservation.',
        keyEtiquettePoints: [
          'Balcony & Narrow Street Acoustics: Sound bounces between stone facades in El Born, Gràcia, and Eixample. Move balcony conversations indoors after 22:00.',
          'Beach-to-City Dress Code: Walking shirtless or in only a bikini away from the seafront promenade is frowned upon and carries a municipal fine.',
          'Water Mindfulness: Catalonia takes drought conservation seriously—keep showers brief and report any dripping taps.',
          'Bilingual Warmth: Catalan and Spanish are both official. Saying "Bon dia" and "Mercès / Gràcies" is deeply appreciated by locals.',
        ],
      },
      {
        id: 'bcn-discover-local',
        title: 'Discover Like a Local',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 4,
        iconAsset: '/assets/icon-module-explore.png',
        summary:
          'Experience "La Hora del Vermut", neighborhood bodegas, and authentic Catalan markets respectfully.',
        keyEtiquettePoints: [
          'Market Respect: Historic markets like Santa Caterina and La Boqueria are active grocery hubs for residents—avoid blocking narrow aisles for photos.',
          'La Hora del Vermut: Pre-lunch vermouth and olives around noon on weekends is a cherished neighborhood social ritual.',
          'Sobremesa: Lingering for conversation after a meal is part of local culture, though be mindful during peak weekday lunch hours.',
        ],
      },
      {
        id: 'bcn-stay-safe',
        title: 'Stay Safe & Aware',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 3,
        iconAsset: '/assets/icon-module-safety.png',
        summary:
          'Keep your belongings secure on terraces and the Metro while enjoying a relaxed Mediterranean stay.',
        keyEtiquettePoints: [
          'Terrace Table Awareness: Never leave phones on the edge of outdoor café tables or bags hanging loosely on the back of chairs.',
          'Bike Lanes ("Carril Bici"): Watch for two-way bike lanes on Eixample sidewalks before stepping off the curb.',
          'Beach Belongings: Take turns swimming at Barceloneta rather than leaving bags unattended on the sand.',
        ],
      },
    ],
    sampleQuiz: [
      {
        id: 'bcn-q1',
        scenario: 'You just finished a sunny afternoon swim at Barceloneta beach and want to walk into El Born for tapas.',
        question: 'What is the local rule before leaving the beachfront promenade?',
        options: [
          'Walk straight into town in your swimsuit to dry off in the sun',
          'Put on a shirt/top, shorts or skirt, and footwear before entering city streets',
          'Wrap a beach towel around your shoulders and walk barefoot',
        ],
        correctIndex: 1,
        explanation:
          'Barcelona enforces a civic dress code prohibiting walking in only swimwear or shirtless on city streets away from the beach.',
      },
      {
        id: 'bcn-q2',
        scenario: 'Your apartment in Gràcia has a charming balcony overlooking a narrow residential street.',
        question: 'How should you use the balcony after 22:00?',
        options: [
          'Host a late-night dinner with music since Spanish nightlife starts late',
          'Step inside and close balcony shutters/doors so neighbors who work early can sleep',
          'Speak loudly so friends down on the street can hear you',
        ],
        correctIndex: 1,
        explanation:
          'While nightlife venues stay open late, residential buildings are home to families and workers—balcony noise echoes intensely down narrow streets.',
      },
    ],
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    motto: 'The Art of Living',
    heroImage: '/assets/img-guide-london.png',
    badgeImage: '/assets/badge-london.png',
    certificationTitle: 'London · The Art of Living Certified',
    shortBlurb:
      'Master Tube escalator flow, the unspoken art of queueing, pub bar etiquette, and Victorian terrace peace.',
    guideIntro:
      'Everything you need to know about local life and etiquette in London to navigate the Underground like a native, respect residential mews, and earn your badge in under 15 minutes.',
    readTimeMinutes: 15,
    partnerPerksCount: 160,
    localHighlights: {
      quietHours: '23:00 – 07:00 across residential boroughs, garden squares, and converted Victorian flats',
      greetingCustom: '"Please", "Thank you", and "Sorry" are the everyday currency of British politeness.',
      diningTip: 'At traditional pubs, order food and drinks directly at the bar (and remember your table number!).',
      neighborhoodRule: 'On Tube escalators: always stand on the right, walk on the left.',
    },
    modules: [
      {
        id: 'lon-art-of-living',
        title: 'The Art of Living',
        type: 'required',
        badgeLabel: 'REQUIRED FOR BADGE',
        durationMinutes: 8,
        iconAsset: '/assets/icon-module-life.png',
        summary:
          'Navigate converted Victorian townhouses, British queueing etiquette, Tube escalator rules, and neighborhood pub customs.',
        keyEtiquettePoints: [
          'Escalator Golden Rule: Stand on the right side of Underground escalators and keep luggage tucked in front of you so commuters can walk on the left.',
          'The Sacred Queue: Whether waiting for a bus, coffee, or museum entry, respect the queue order unconditionally.',
          'Victorian Terrace Conversions: Many London flats are converted townhouses—close heavy front doors gently and walk softly on stairs.',
          'Polite Phrasing: "Sorry" is used both to apologize and to politely get someone’s attention ("Sorry, excuse me").',
        ],
      },
      {
        id: 'lon-discover-local',
        title: 'Discover Like a Local',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 4,
        iconAsset: '/assets/icon-module-explore.png',
        summary:
          'Understand traditional pub ordering, Sunday roasts, and London’s village-like neighborhoods.',
        keyEtiquettePoints: [
          'Pub Bar Etiquette: Wait your turn at the bar through eye contact with the bartender—never wave cash or snap fingers.',
          'Private Garden Squares: Many gated green squares in Kensington and Bloomsbury are strictly for keyholding residents.',
          'Contactless Transit: Tap in and out with contactless card or phone rather than stopping at ticket gates to search for paper tickets.',
        ],
      },
      {
        id: 'lon-stay-safe',
        title: 'Stay Safe & Aware',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 3,
        iconAsset: '/assets/icon-module-safety.png',
        summary:
          'Look the right way when crossing streets and keep phones secure along busy high streets.',
        keyEtiquettePoints: [
          'Look Right First: Traffic drives on the left—always check the white "LOOK RIGHT / LOOK LEFT" markings painted at crosswalks.',
          'Curbside Phone Safety: Avoid holding your phone loosely near the curb where mopeds or e-bikes pass quickly.',
          'Emergency & Non-Emergency: Dial 999 for emergencies or 111 for non-urgent NHS medical advice.',
        ],
      },
    ],
    sampleQuiz: [
      {
        id: 'lon-q1',
        scenario: 'You are descending a long escalator into Piccadilly Circus Underground station with a carry-on suitcase.',
        question: 'Where should you position yourself and your suitcase?',
        options: [
          'Stand side-by-side with your travel companion so you can chat',
          'Stand on the right side and place your suitcase on the step directly in front of or behind you',
          'Stand on the left side and place your suitcase on the right',
        ],
        correctIndex: 1,
        explanation:
          'Standing on the right with luggage kept in single file keeps the left lane clear for Londoners rushing to catch trains.',
      },
      {
        id: 'lon-q2',
        scenario: 'You sit down at a cozy neighborhood pub in Notting Hill for drinks and fish & chips.',
        question: 'How does service typically work in a traditional British pub?',
        options: [
          'Wait at your table until a server brings menus and takes your order',
          'Note your table number and order food and drinks directly at the bar',
          'Wave your hand to call the bartender over to your table',
        ],
        correctIndex: 1,
        explanation:
          'In traditional British pubs, guests order and pay directly at the bar counter rather than waiting for table service.',
      },
    ],
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    motto: "L'Arte di Vivere",
    heroImage: '/assets/img-guide-rome.png',
    badgeImage: '/assets/badge-rome.png',
    certificationTitle: "Rome · L'Arte di Vivere Certified",
    shortBlurb:
      'Honor monument protection rules, palazzo courtyard peace, espresso bar customs, and sacred dress codes.',
    guideIntro:
      'Everything you need to know about local life and etiquette in Rome to respect ancient monuments, enjoy authentic Roman dining, and earn your badge in under 15 minutes.',
    readTimeMinutes: 15,
    partnerPerksCount: 110,
    localHighlights: {
      quietHours: '14:00 – 16:00 ("riposo" afternoon rest) and 22:30 – 07:30 in historic palazzi',
      greetingCustom: 'Greet shopkeepers with "Buongiorno" in the morning and "Buonasera" from late afternoon onward.',
      diningTip: 'Standing at the bar ("al banco") for your morning espresso costs less than sitting at a table ("al tavolo").',
      neighborhoodRule: 'Never sit or eat on the Spanish Steps or wade in historic fountains—both are strictly fined.',
    },
    modules: [
      {
        id: 'rome-art-of-living',
        title: 'The Art of Living',
        type: 'required',
        badgeLabel: 'REQUIRED FOR BADGE',
        durationMinutes: 8,
        iconAsset: '/assets/icon-module-life.png',
        summary:
          'Learn how to live harmoniously inside centuries-old Roman palazzi, respect sacred monuments, and master Italian coffee and dining rituals.',
        keyEtiquettePoints: [
          'Protecting Living History: Sitting on the Spanish Steps, eating against ancient fountains, or touching marble sculptures is prohibited to preserve heritage.',
          'Palazzo Courtyards & Vintage Elevators: Historic caged elevators require you to close both inner and outer doors completely so neighbors on other floors can call the lift.',
          'Sacred Site Dress Code: Shoulders and knees must be covered for all visitors entering churches and basilicas.',
          'The Riposo Rhythm: Many residential buildings observe quiet afternoon rest hours between 14:00 and 16:00.',
        ],
      },
      {
        id: 'rome-discover-local',
        title: 'Discover Like a Local',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 4,
        iconAsset: '/assets/icon-module-explore.png',
        summary:
          'Experience Roman coffee bars, Piazza aperitivo, and authentic Trastevere and Monti trattorias.',
        keyEtiquettePoints: [
          'Al Banco vs. Al Tavolo: Pay at the register ("la cassa") first, then present your receipt at the bar for a quick standing espresso.',
          'Nasone Fountains: Rome’s cast-iron street fountains ("nasoni") pour fresh, cold mountain spring water—place a finger over the bottom spout to drink from the top arc!',
          'Coperto Explained: A small per-person "pane e coperto" cover charge on restaurant bills is standard and legal.',
        ],
      },
      {
        id: 'rome-stay-safe',
        title: 'Stay Safe & Aware',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 3,
        iconAsset: '/assets/icon-module-safety.png',
        summary:
          'Navigate Roman pedestrian crossings confidently and avoid tourist traps near major piazzas.',
        keyEtiquettePoints: [
          'Crossing Roman Streets: Make steady eye contact with approaching drivers and walk at a predictable pace across zebra crossings.',
          'Official Taxis Only: Always use official white taxis with a "COMUNE DI ROMA" crest and meter from designated taxi stands.',
          'Gladiator & Rose Sellers: Politely decline "free" roses or unrequested photo props near the Colosseum.',
        ],
      },
    ],
    sampleQuiz: [
      {
        id: 'rome-q1',
        scenario: 'Your Roman apartment is in a 19th-century palazzo with a classic wrought-iron cage elevator.',
        question: 'What must you always remember when exiting the elevator on your floor?',
        options: [
          'Leave the wooden door slightly ajar for ventilation',
          'Close both the inner folding gate and the outer door firmly',
          'Press the emergency stop button when unloading luggage',
        ],
        correctIndex: 1,
        explanation:
          'Classic Italian cage elevators will not move for any other floor in the building if either the inner gate or outer door is left even slightly open!',
      },
      {
        id: 'rome-q2',
        scenario: 'You grab a delicious gelato near Piazza di Spagna and want to sit down to eat it.',
        question: 'Where should you sit to enjoy your gelato?',
        options: [
          'Right on the marble steps of the Spanish Steps (Scalinata di Trinità dei Monti)',
          'On the rim of the Barcaccia fountain at the base of the steps',
          'On a public bench or stroll through the piazza—sitting or eating on the Spanish Steps is prohibited',
        ],
        correctIndex: 2,
        explanation:
          'To protect the delicate travertine marble, Rome strictly prohibits sitting, eating, or drinking on the Spanish Steps and historic fountains.',
      },
    ],
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    motto: '生きる芸術 · Wa (Harmony)',
    heroImage: '/assets/img-guide-tokyo.png',
    badgeImage: '/assets/badge-tokyo.png',
    certificationTitle: 'Tokyo · Art of Harmony Certified',
    shortBlurb:
      'Master shoe-off genkan entryways, silent train carriages, waste sorting, and onsen/shrine etiquette.',
    guideIntro:
      'Everything you need to know about local life and etiquette in Tokyo to honor "Wa" (social harmony), navigate residential apartments flawlessly, and earn your badge in under 15 minutes.',
    readTimeMinutes: 15,
    partnerPerksCount: 135,
    localHighlights: {
      quietHours: '21:00 – 08:00 (whisper-quiet indoor & balcony norms in Tokyo residential wards)',
      greetingCustom: 'A slight bow and "Sumimasen" (excuse me / thank you for your trouble) goes a long way.',
      diningTip: 'Tipping is not practiced in Japan and can cause confusion—say "Gochisōsama deshita" when leaving instead!',
      neighborhoodRule: 'Always remove outdoor shoes at the "genkan" (stepped entryway) before stepping onto apartment flooring.',
    },
    modules: [
      {
        id: 'tokyo-art-of-living',
        title: 'The Art of Living',
        type: 'required',
        badgeLabel: 'REQUIRED FOR BADGE',
        durationMinutes: 8,
        iconAsset: '/assets/icon-module-life.png',
        summary:
          'Honor the Japanese principle of "Meiwaku" (not causing trouble to others) in apartments, trains, and quiet residential lanes.',
        keyEtiquettePoints: [
          'The Sacred Genkan: Never wear outdoor shoes past the recessed entryway step ("genkan"). Use provided house slippers—and switch to bathroom slippers inside the restroom!',
          'Silent Trains: Keep phones on silent ("Manner Mode"), avoid phone calls on trains, and speak in a low murmur.',
          'Carry Your Trash: Public trash bins are rare in Tokyo. Carry a small pouch for wrappers and sort waste carefully into Burnable, PET Bottles, Cans, and Glass at your stay.',
          'No Eating While Walking: Enjoy street snacks right beside the stall where you bought them, then dispose of the skewer/wrapper at the vendor’s bin.',
        ],
      },
      {
        id: 'tokyo-discover-local',
        title: 'Discover Like a Local',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 4,
        iconAsset: '/assets/icon-module-explore.png',
        summary:
          'Navigate izakayas, ramen ticket machines, shrines, and neighborhood bathhouses ("sentō") with grace.',
        keyEtiquettePoints: [
          'Oshibori Wet Towels: Use the hot/cold hand towel provided at restaurants only to wipe your hands before eating, then fold it neatly on its tray.',
          'Chopstick Etiquette: Never stick chopsticks upright in a bowl of rice or pass food from chopstick to chopstick.',
          'Shrine vs. Temple: Bow and purify hands at the "chōzuya" water pavilion before approaching a Shinto shrine or Buddhist temple.',
        ],
      },
      {
        id: 'tokyo-stay-safe',
        title: 'Stay Safe & Aware',
        type: 'optional',
        badgeLabel: 'OPTIONAL',
        durationMinutes: 3,
        iconAsset: '/assets/icon-module-safety.png',
        summary:
          'Earthquake readiness, IC transit cards, and navigating nightlife districts smartly.',
        keyEtiquettePoints: [
          'Backpack Etiquette on Trains: Wear your backpack on your front or place it on the overhead rack in crowded train cars.',
          'Avoid Street Touts: In bustling nightlife districts like Kabukichō or Roppongi, never follow street touts into unverified bars.',
          'Earthquake Preparedness: Know where your apartment exit is and keep the "Safety Tips" alert app enabled.',
        ],
      },
    ],
    sampleQuiz: [
      {
        id: 'tokyo-q1',
        scenario: 'You arrive at your Tokyo apartment with two suitcases after a rainy walk from the station.',
        question: 'Where must outdoor shoes and wet luggage wheels stay?',
        options: [
          'Roll the suitcases straight into the bedroom and take your shoes off by the bed',
          'Keep outdoor shoes in the recessed "genkan" entryway and wipe luggage wheels before lifting bags inside',
          'Wear outdoor shoes on wooden floors and only remove them on tatami mats',
        ],
        correctIndex: 1,
        explanation:
          'In Japan, the "genkan" marks the strict boundary between the outside world and the clean indoor living space.',
      },
      {
        id: 'tokyo-q2',
        scenario: 'You buy a warm taiyaki pastry from a street stall in Asakusa.',
        question: 'What is the polite way to eat it?',
        options: [
          'Walk down the crowded shopping street while eating it and look for a public trash can later',
          'Step to the designated eating spot beside the vendor, finish it there, and return the wrapper to the shop’s bin',
          'Bring it onto the subway train to eat during your ride',
        ],
        correctIndex: 1,
        explanation:
          'Eating while walking ("arukigui") is considered bad manners in Japan because it risks spilling on others, and vendors provide bins right at the stall.',
      },
    ],
  },
];

export const ARCHITECTURE_ROADMAP: Record<string, {
  pageTitle: string;
  microLabel: string;
  subtitle: string;
  heroAsset: string;
  overview: string;
  modules: ArchitectureModuleSpec[];
}> = {
  mission: {
    pageTitle: 'Our Mission & Open-Source Governance',
    microLabel: 'COMMUNITY-DRIVEN · PRIVACY-FIRST',
    subtitle:
      'Bridging the gap between conscious travelers, local hosts, and neighborhood communities through open cultural education.',
    heroAsset: '/assets/img-page-about.png',
    overview:
      'GoldenGuest is an open-source (MIT) civic hospitality platform. We believe responsible tourism grows through empathy and preparation rather than restriction. Every guide is authored with local neighborhood associations and hosts, running 100% client-side with zero personal data collection.',
    modules: [
      {
        phase: 'Phase 1 · Live',
        title: 'Zero-PII Client-Side Core & Schema Engine',
        modulePath: 'src/data/cities.ts · src/types/guide.ts',
        description:
          'Strongly-typed TypeScript schema for City Guides, Core/Optional Learning Tracks, and Lifestyle Stamps with zero external analytics or trackers.',
        technicalNotes: [
          '100% static client-side bundle deployable to Vercel Edge Network',
          'No cookies, no email capture, no user database required',
          'MIT-licensed open-source repository for community contributions',
        ],
      },
      {
        phase: 'Phase 2 · Queued',
        title: 'Community Pull-Request Guide Authoring Pipeline',
        modulePath: 'content/cities/*.json · scripts/validate-guide.ts',
        description:
          'Decentralized contribution workflow allowing local neighborhood associations and hosts to propose new city etiquette rules via validated JSON schemas.',
        technicalNotes: [
          'Zod schema validation for multi-language etiquette modules',
          'Automated cultural reviewer checklist in GitHub Actions',
          'Editorial diff preview for neighborhood stewards',
        ],
      },
      {
        phase: 'Phase 3 · Planned',
        title: 'Open Hospitality Research & Municipal Impact Dashboard',
        modulePath: 'src/pages/MissionImpact.tsx',
        description:
          'Aggregated, anonymous open data benchmarks helping cities measure how pre-arrival etiquette guides reduce neighborhood noise friction.',
        technicalNotes: [
          'Privacy-preserving local evaluation templates for hosts',
          'Downloadable PDF courtyard placards in 8 languages',
        ],
      },
    ],
  },
  membership: {
    pageTitle: 'GoldenGuest Membership & Local Passport',
    microLabel: 'VERIFIABLE CULTURAL READINESS',
    subtitle:
      'A free, privacy-first digital credential stored locally in your browser—never on a central corporate server.',
    heroAsset: '/assets/GoldenGuest-Passport.png',
    overview:
      'Unlike traditional travel platforms that lock badges behind accounts and email harvesting, GoldenGuest Membership works like a local cryptographic wallet in your browser. Complete a 15-minute City Guide quiz to mint your destination badge locally.',
    modules: [
      {
        phase: 'Phase 1 · Live',
        title: 'Interactive Cultural Readiness Quiz & LocalStorage Passport',
        modulePath: 'src/pages/ActiveDevPreview.tsx',
        description:
          'Interactive scenario-based quiz engine that awards verifiable City Badges and persists progress directly in browser LocalStorage.',
        technicalNotes: [
          'Zero-login instant badge unlocking upon passing city scenario quizzes',
          'Client-side state persistence across sessions',
          'Instant reset/export controls for full user data sovereignty',
        ],
      },
      {
        phase: 'Phase 2 · Queued',
        title: 'Offline-First IndexedDB & Signed QR Verification',
        modulePath: 'src/services/passportCrypto.ts',
        description:
          'Client-side Ed25519 signature encoding into QR badges so local cafés and hosts can verify completion offline without calling a server.',
        technicalNotes: [
          'Web Crypto API signature verification payload',
          'Apple Wallet / Google Wallet pass generator (.pkpass static export)',
          'PWA Service Worker for offline access during flights',
        ],
      },
      {
        phase: 'Phase 3 · Planned',
        title: 'Host Pre-Check-In Link Generator',
        modulePath: 'src/components/passport/HostShareLink.tsx',
        description:
          'Allows hosts to generate a custom welcome URL (e.g., goldenguest.org/guides/paris?lifestyle=pet) for incoming guests.',
        technicalNotes: [
          'URL query parameter pre-selection of Lifestyle Stamps',
          'Printable QR welcome card generator for short-term rental hosts',
        ],
      },
    ],
  },
  badges: {
    pageTitle: 'City Badges & Lifestyle Stamps Directory',
    microLabel: '5 DESTINATIONS · 5 LIFESTYLE STAMPS',
    subtitle:
      'Explore all verifiable GoldenGuest City Badges and specialized travel stamps available in the open-source catalog.',
    heroAsset: '/assets/badge-paris.png',
    overview:
      'Each GoldenGuest City Badge represents mastery of a city’s "Art of Living" track—covering shared apartment acoustics, greetings, dining norms, and street awareness. Pair any City Badge with Lifestyle Stamps tailored to how you travel.',
    modules: [
      {
        phase: 'Phase 1 · Live',
        title: 'Core 5 Global Destinations & 5 Lifestyle Stamps',
        modulePath: 'src/data/cities.ts',
        description:
          'Full guide architectures for Paris, Barcelona, London, Rome, and Tokyo, plus Pet, Family, Group, Couples, and Solo Explorer stamps.',
        technicalNotes: [
          'High-resolution bespoke medallion artwork for every city',
          'Interactive guide & quiz preview available for all 5 destinations',
        ],
      },
      {
        phase: 'Phase 2 · Queued',
        title: 'Tier-2 Destination Expansion (Kyoto, Lisbon, Amsterdam, Venice, Mexico City)',
        modulePath: 'src/data/cities-tier2.ts',
        description:
          'Community-contributed etiquette guides for high-pressure historic neighborhoods experiencing rapid tourism growth.',
        technicalNotes: [
          'Neighborhood-specific micro-modules (e.g., Gion in Kyoto, Alfama in Lisbon)',
          'Seasonal etiquette alerts (Carnival, Sakura season, Festa Major)',
        ],
      },
      {
        phase: 'Phase 3 · Planned',
        title: 'Local Partner Perks Directory (Zero-Tracking Redemption)',
        modulePath: 'src/components/badges/PartnerPerksMap.tsx',
        description:
          'Curated directory of independent neighborhood bakeries, bookstores, and cafés offering small perks when shown a GoldenGuest QR badge.',
        technicalNotes: [
          'OpenStreetMap / Leaflet integration with zero Google Maps tracking',
          'Visual QR badge presentation mode for in-person redemption',
        ],
      },
    ],
  },
  faqs: {
    pageTitle: 'Frequently Asked Questions & Architecture Specs',
    microLabel: 'TRANSPARENCY · PRIVACY · OPEN SOURCE',
    subtitle:
      'Everything travelers, hosts, and open-source contributors need to know about how GoldenGuest works.',
    heroAsset: '/assets/GoldenGues-Org_Logo.png',
    overview:
      'Have questions about our privacy-first model, how City Badges work without user accounts, or how to contribute a city guide on GitHub? Explore our interactive FAQ and technical architecture answers below.',
    modules: [
      {
        phase: 'Phase 1 · Live',
        title: 'Zero-PII Architecture & Open-Source Licensing',
        modulePath: 'LICENSE · README.md',
        description:
          'Why does GoldenGuest have no login or newsletter form? Because responsible tourism shouldn’t cost your personal privacy.',
        technicalNotes: [
          'Licensed under the permissive MIT License',
          'Zero third-party cookies, zero email harvesting, zero server databases',
        ],
      },
      {
        phase: 'Phase 2 · Queued',
        title: 'Multi-Language i18n Bundle (EN, FR, ES, CAT, IT, JA)',
        modulePath: 'src/i18n/locales/*.json',
        description:
          'Native translations so travelers can read guides in their home language while learning key phrases in the local language.',
        technicalNotes: [
          'Lightweight JSON dictionary loader in Navbar language selector',
          'Phonetic pronunciation guides for local greetings',
        ],
      },
      {
        phase: 'Phase 3 · Planned',
        title: 'Embeddable Host Widget (Web Component)',
        modulePath: 'packages/host-widget/index.ts',
        description:
          'A lightweight, zero-dependency `<goldenguest-badge>` web component that hosts can embed on their personal booking sites.',
        technicalNotes: [
          'Shadow DOM isolated styling',
          'Under 8KB gzipped bundle size',
        ],
      },
    ],
  },
};

export const FAQ_ITEMS = [
  {
    question: 'Why is there no account login or email registration on GoldenGuest?',
    answer:
      'GoldenGuest is built on a strict Zero-PII (Personal Identifiable Information) architecture. We believe learning local etiquette and earning a cultural readiness badge should be frictionless and 100% private. Your earned badges and quiz completions are stored locally in your browser (LocalStorage), never on a central server.',
  },
  {
    question: 'How long does it take to complete a City Guide and earn a badge?',
    answer:
      'Each City Guide is designed to be completed in under 15 minutes—for example, while on the train or plane to your destination. Completing the required "The Art of Living" module and passing the short scenario quiz immediately unlocks your City Badge.',
  },
  {
    question: 'How do hosts and local cafés verify my GoldenGuest Badge?',
    answer:
      'Once you unlock a City Badge, your digital GoldenGuest Passport displays a high-contrast medallion and verification QR code right on your phone screen. You can show it to your host at check-in or at participating neighborhood establishments.',
  },
  {
    question: 'Is GoldenGuest really 100% open-source?',
    answer:
      'Yes! The entire GoldenGuest web platform is released under the MIT License. Local residents, hosts, and developers can inspect the code, propose new etiquette tips, or author new City Guides via GitHub pull requests.',
  },
  {
    question: 'What are Lifestyle Stamps and how do they work?',
    answer:
      'Lifestyle Stamps (Pet Explorer, Family Explorer, Group Explorer, Couple’s Explorer, and Solo Explorer) are optional 3-minute micro-modules that tailor a City Guide to your specific travel group—helping you navigate rules like dogs on transit, stroller access, or residential quiet hours for groups.',
  },
];

