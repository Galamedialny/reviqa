export const contactEn = {
  phoneDisplay: "+421 917 072 074",
  phone: "+421917072074",
  email: "info@reviqa.sk",
  address: "Hitschova 5022/2, 058 01 Poprad – Spišská Sobota, Slovakia",
  whatsapp:
    "https://wa.me/421917072074?text=Hello%2C%20I%20am%20interested%20in%20an%20initial%20consultation%20at%20REVIQA.",
};

export type EnglishService = {
  slug: string;
  slovakSlug: string;
  short: string;
  title: string;
  eyebrow: string;
  intro: string;
  image: string;
  process: string[];
  benefits: string[];
  audience: string;
  suitableFor: string[];
  modalities: string[];
  details: [string, string][];
  faq: [string, string][];
};

export const servicesEn: EnglishService[] = [
  {
    slug: "hyperbaric-oxygen-therapy",
    slovakSlug: "hyperbaricka-oxygenoterapia",
    short: "HBOT",
    title: "Hyperbaric oxygen therapy (HBOT)",
    eyebrow: "Supporting oxygen availability",
    intro: "A scientifically established procedure in which the client breathes oxygen in a pressurised environment. Its purpose is to increase oxygen availability to tissues and support an individual regeneration plan.",
    image: "/assets/service-hbot-concept.jpg",
    process: [
      "Before treatment, we assess your health, possible contraindications and the suitability of HBOT.",
      "During the approximately 60-minute session, pressure in the chamber is increased and then reduced in a controlled manner.",
      "You rest comfortably and remain in contact with the operator; the protocol is set individually.",
      "After the session, we assess tolerance and recommend further frequency according to your plan.",
    ],
    benefits: ["increased oxygen availability", "support for tissue renewal", "support for natural healing processes", "support for vitality", "support for focus and cognitive function", "recovery after physical strain"],
    audience: "For clients whose initial professional assessment confirms that hyperbaric oxygen therapy is appropriate.",
    suitableFor: ["persistent fatigue", "recovery after injuries and procedures", "athletes and increased physical load", "skin and healing concerns", "reduced vitality", "other situations following professional recommendation"],
    modalities: ["individual HBOT protocol", "single session", "series of 5 sessions", "series of 10 sessions", "combination with other care modules"],
    details: [
      ["Increased oxygen availability", "HBOT increases the availability of oxygen in blood and tissues. The specific effect depends on pressure, duration, protocol and the client’s health."],
      ["Cell renewal and healing", "Within regeneration plans, HBOT is used to support natural healing processes, tissue renewal and recovery after selected types of strain."],
      ["Inflammatory load, discomfort and vitality", "HBOT may form part of an individual plan supporting the management of inflammatory load, discomfort, immunity, energy and vitality. Suitability is always assessed individually."],
      ["Brain and nervous system", "HBOT may also support cognition, concentration and selected neuroprotective mechanisms. It does not replace neurological examination or medical treatment."],
    ],
    faq: [
      ["What will I feel during the session?", "During pressure changes you may feel pressure in your ears, similar to flying. The operator will explain how to equalise it."],
      ["How many sessions will I need?", "The number depends on your goal, health and response. Our pricing includes a single session and series of 5 or 10 sessions."],
      ["Is HBOT suitable for everyone?", "No. An individual assessment of pulmonary, ear and other health risks is required before treatment."],
    ],
  },
  {
    slug: "molecular-hydrogen-therapy",
    slovakSlug: "molekularny-vodik",
    short: "H₂ therapy",
    title: "Molecular hydrogen therapy (H₂)",
    eyebrow: "Regeneration at cellular level",
    intro: "Hydrogen is the smallest molecule. At REVIQA, it is incorporated into personalised plans through inhalation or hydrogen-rich water according to the individual goal.",
    image: "/assets/service-hydrogen-concept.jpg",
    process: [
      "We discuss your goal, health and the role of hydrogen therapy within the complete plan.",
      "We select molecular hydrogen inhalation, hydrogen-rich water or an appropriate combination.",
      "Frequency and duration are set according to the individual protocol.",
      "We monitor tolerance and adjust the plan to your needs.",
    ],
    benefits: ["selective antioxidant support", "support for cellular balance", "support for energy and vitality", "support for the brain and nervous system", "support for regeneration", "integration into a longevity plan"],
    audience: "For clients wishing to support regeneration, vitality and cellular protection within an individually assessed programme.",
    suitableFor: ["persistent fatigue", "physical and mental workload", "post-exercise recovery", "inflammatory load", "immune support", "healthy ageing and longevity"],
    modalities: ["molecular hydrogen inhalation", "hydrogen-rich water", "individual protocol", "combination with HBOT", "long-term regeneration programme"],
    details: [
      ["Selective antioxidant support", "Molecular hydrogen is studied for its selective antioxidant activity and its potential to support cellular protection against oxidative stress."],
      ["Reaching the cellular level", "Because of its small molecular size, hydrogen can pass through biological membranes. The method of administration is always adapted to the client’s individual condition and goal."],
      ["Energy, vitality and the nervous system", "Hydrogen therapy may support mitochondrial function, cellular energy, vitality and overall mental performance, including concentration and sleep."],
      ["Regeneration and longevity", "Hydrogen is used as a complementary element of a wider plan, not as a substitute for diagnosis or treatment of disease."],
    ],
    faq: [
      ["What is the difference between inhalation and hydrogen-rich water?", "Inhalation delivers hydrogen through the respiratory system, while hydrogen-rich water delivers it through the digestive system. The choice depends on the goal and protocol."],
      ["Can it be combined with HBOT?", "A combination is possible only when recommended within the individual plan and when no contraindications are present."],
      ["Is hydrogen a medicine?", "We present it as a complementary regeneration method. It does not replace medical diagnosis, prescribed treatment or medication."],
    ],
  },
  {
    slug: "molecular-oxygen-therapy",
    slovakSlug: "molekularny-kyslik",
    short: "O₂ therapy",
    title: "Molecular oxygen therapy (O₂)",
    eyebrow: "Supporting oxygenation and regeneration",
    intro: "Oxygen therapy is integrated into a personalised regeneration protocol to support oxygenation, cellular energy and the body’s natural regenerative processes.",
    image: "/assets/service-diagnostics-concept.jpg",
    process: [
      "We assess your current health, individual needs and possible restrictions.",
      "We select the appropriate method and individual settings for oxygen therapy.",
      "Comfort and tolerance are monitored throughout the application.",
      "When appropriate, the therapy is combined with other REVIQA Method™ modules.",
    ],
    benefits: ["support for oxygenation", "support for cellular energy", "post-exertion recovery", "support for vitality", "individual settings", "part of a personalised protocol"],
    audience: "For adults and children following individual assessment, when oxygen therapy is an appropriate part of a personalised regeneration protocol.",
    suitableFor: ["reduced vitality and fatigue", "recovery after physical or mental strain", "sports recovery", "convalescence following professional recommendation", "support for concentration and performance", "individual regeneration and longevity programmes"],
    modalities: ["individually configured oxygen protocol", "inhaled oxygen support", "combination with other REVIQA Method™ modules", "series according to an individual plan"],
    details: [
      ["Supporting oxygen availability", "Oxygen therapy may help improve oxygen availability to the body. The method and intensity are set according to the client’s health and goal."],
      ["Cellular energy and regeneration", "Oxygen is essential for cellular energy production. Within an individual protocol, we use it to support natural regenerative and adaptive processes."],
      ["Performance and vitality", "The therapy may form part of a programme focused on coping with strain, supporting vitality and returning to everyday or sporting activities."],
      ["Part of a wider plan", "Oxygen therapy does not replace diagnosis or treatment. It is included only after individual assessment as one module of the REVIQA Method™."],
    ],
    faq: [
      ["How is oxygen therapy configured?", "The method, intensity and frequency are based on an individual assessment of health, goals and tolerance."],
      ["Is oxygen therapy suitable for children?", "Yes, only after individual assessment and with settings appropriate to age and health. A child attends with a legal guardian."],
      ["Does oxygen therapy replace medical treatment?", "No. It is a complementary regeneration method and does not replace medical diagnosis, prescribed treatment or medication."],
    ],
  },
  {
    slug: "photobiomodulation",
    slovakSlug: "fotobiomodulacia",
    short: "Light therapy",
    title: "Photobiomodulation (660–850 nm)",
    eyebrow: "The science of light. The energy of life.",
    intro: "Photobiomodulation uses selected wavelengths of red and near-infrared light to support natural cellular and regenerative processes.",
    image: "/assets/service-pbm-concept.jpg",
    process: [
      "We identify the target area and objective and rule out possible contraindications.",
      "Wavelength, distance, intensity and exposure time are configured.",
      "During the non-invasive application, you wear eye protection and rest comfortably.",
      "Across a series of sessions, we monitor your response and adjust the protocol when needed.",
    ],
    benefits: ["support for cellular ATP energy", "support for the regulation of inflammatory load", "support for healing and tissue renewal", "support for muscles and joints", "support for the brain and nerves", "support for vitality and longevity"],
    audience: "For adults and children when light therapy is appropriate after professional assessment and a safe protocol can be established.",
    suitableFor: ["skin and superficial tissue regeneration", "muscles, tendons and joints", "recovery after strain", "support for healing", "performance support", "longevity programmes"],
    modalities: ["red light at approximately 660 nm", "near-infrared light at approximately 810–850 nm", "local application", "series according to an individual plan"],
    details: [
      ["How light works", "Photons of red and near-infrared light are absorbed by cellular structures, where they may influence cytochrome c oxidase activity, mitochondria and cellular ATP energy production."],
      ["Red light at 660 nm", "Red light at approximately 660 nm is used primarily for skin, superficial tissues and support for natural healing processes and collagen production."],
      ["Near-infrared light at 810–850 nm", "Near-infrared light penetrates deeper and is therefore used when working with muscles, joints and deeper structures. Exact parameters depend on the equipment and the client’s needs."],
      ["Supporting vitality and longevity", "Photobiomodulation may support mitochondrial and antioxidant mechanisms, oxidative-stress regulation and natural cellular renewal. Every protocol is set individually."],
    ],
    faq: [
      ["Is the therapy painful?", "The application is non-invasive. You may feel gentle warmth; intensity is configured for a safe and comfortable experience."],
      ["Why are different wavelengths used?", "Different wavelengths penetrate tissue to different depths and are selected according to the target area and objective."],
      ["Do I need protective eyewear?", "Eye protection is used with intense light sources according to the equipment and protocol."],
    ],
  },
  {
    slug: "chiro-neurogenic-manual-therapy",
    slovakSlug: "chiromanualne-terapie",
    short: "Chiro-neurogenic therapy",
    title: "Chiro-neurogenic manual regenerative therapy",
    eyebrow: "Movement, nervous system and context",
    intro: "Our proprietary method precisely combines specialised manual techniques with a deep understanding of the connection between the nervous and movement systems.",
    image: "/assets/service-manual-concept.jpg",
    process: [
      "A conversation and functional assessment of the spine, joints, muscles, fascia and movement patterns.",
      "Selection of gentle manual techniques according to the client’s goal, age and tolerance.",
      "Targeted work with tension, mobility and the functional relationships of the nervous system.",
      "Recommendations for movement and next steps, including appropriate technologies.",
    ],
    benefits: ["release of muscular and fascial tension", "support for mobility", "support for spine and joint function", "support for the nervous system", "support for the lymphatic system", "targeted work with sensitive areas"],
    audience: "For clients with back, neck, joint or muscle discomfort, functional restrictions, overload or a need for targeted regeneration.",
    suitableFor: ["back, neck, joint and muscle discomfort", "restricted mobility and stiffness", "muscular and fascial tension", "sports-related overload", "swelling after professional assessment", "prevention and an active life"],
    modalities: [],
    details: [],
    faq: [
      ["Does treatment always involve manipulation?", "No. The technique depends on assessment, age, condition and informed consent. We often work gently and without rapid manipulative movements."],
      ["Is it suitable for children?", "Yes, following individual assessment and with age-appropriate techniques. A child attends with a legal guardian."],
      ["Can individual techniques be combined?", "Yes. The combination is selected only after assessment and with regard to tissue response and the overall plan."],
      ["How should I prepare?", "We recommend comfortable clothing and information about diagnoses, surgery, injuries, medication and current limitations."],
    ],
  },
  {
    slug: "physio-regenerative-guidance",
    slovakSlug: "fyzioterapeuticke-poradenstvo",
    short: "Physio-regenerative guidance",
    title: "Physio-regenerative guidance",
    eyebrow: "Continue your care at home",
    intro: "After therapy, we teach you simple and safe exercises that you can perform independently at home. Your individual plan builds on therapy, supports movement habits and helps maintain progress.",
    image: "/assets/service-physio-home-exercise.jpg",
    process: [
      "We assess your current movement, options, restrictions and response to completed therapies.",
      "We select a small number of clear exercises according to your goal and condition.",
      "We demonstrate each exercise and you practise technique, breathing and pace under supervision.",
      "You receive clear guidance on frequency, duration and signals from your body to monitor.",
      "At follow-up, we assess progress and adapt the difficulty and plan.",
    ],
    benefits: ["continuity after therapy", "support for healthy movement habits", "greater confidence with home exercise", "support for mobility and stability", "gradual development of independence", "long-term movement care"],
    audience: "For adults and children after individual assessment who want to continue safely with home exercise and participate actively in their movement plan.",
    suitableFor: ["continuing after manual or regenerative therapy", "stiffness and restricted mobility", "improving stability and coordination", "returning to everyday movement after strain", "preventing repeated overload", "building a regular home routine"],
    modalities: ["individual movement plan", "practical technique coaching", "mobility exercises", "stability exercises", "breathing and relaxation", "recommended frequency and scope", "follow-up and plan adjustment"],
    details: [
      ["Exercise that builds on therapy", "The home plan reflects your therapy, functional assessment and goals. It is not a generic routine shared by every client."],
      ["A simple, sustainable plan", "We prefer a smaller number of well-mastered exercises. You know exactly how to perform each one, how many repetitions to use and how often to practise."],
      ["Technique and safety", "You first practise under supervision. We observe alignment, range of movement, breathing and the body’s response so that you can exercise confidently at home."],
      ["Independence between visits", "Regular, appropriate activity helps you continue care actively between appointments and supports longer-term movement habits."],
      ["Review and gradual progress", "At follow-up, we assess what is working and what needs adjustment. Difficulty increases only when technique is safe and the body responds appropriately."],
      ["When to stop", "Exercise should not continue through marked or new pain. Stop and seek professional advice if your condition worsens or you experience dizziness, breathlessness, weakness or another unusual symptom."],
    ],
    faq: [
      ["Will I receive the same exercises as other clients?", "No. Exercise selection, range, repetitions and frequency are adapted to your condition, goal and response to therapy."],
      ["How long should I exercise at home?", "We design a realistic and sustainable plan. Exact duration and frequency are set by the specialist after assessment."],
      ["Will I need equipment?", "Many exercises require no equipment. If a mat, resistance band or other simple aid is useful, we explain how to use it safely."],
      ["What if I feel pain?", "Mild muscular effort may be normal, but sharp, new or worsening pain is not. Stop the exercise and contact us so that we can adjust your plan."],
      ["How will I know whether my technique is correct?", "You practise the technique during your appointment. We check it again at follow-up and correct or simplify the exercise if needed."],
    ],
  },
];

export const faqsEn: [string, string][] = [
  ["What happens during the first visit?", "We begin with a conversation and an assessment of your needs and goals. We then propose an individual plan and explain the recommended approach."],
  ["Do I need to book in advance?", "Yes. REVIQA works by appointment so that every client receives sufficient time, privacy and an unhurried visit."],
  ["Does the centre also work with children?", "Yes. The suitability of each method is assessed individually, and a child attends with a legal guardian."],
  ["How long does a visit take?", "A personalised REVIQA Method™ regeneration protocol takes up to 90 minutes. HBOT takes approximately 60 minutes. The duration of further care is adapted to the individual plan."],
  ["Can several therapies be combined?", "Yes, when appropriate. The combination and order are determined by an individual plan rather than a universal package."],
  ["How do I know whether a therapy is suitable for me?", "Before starting, we discuss your health, treatment and possible restrictions. Suitability is determined by professional assessment."],
  ["Where can I park?", "Parking is available directly on the centre’s premises at Hitschova 5022/2 in Poprad."],
  ["Can I book outside regular opening hours?", "Yes. Appointments outside regular hours and at weekends can be arranged subject to need and availability."],
];

export const programmesEn = [
  { name: "RESET", price: "€305", note: "The first step towards regeneration", items: ["2 individual sessions", "individual care plan", "HBOT option according to plan"] },
  { name: "RESTORE", price: "€455", note: "Return to what you love", items: ["3 individual sessions", "individual care plan", "HBOT option according to plan"] },
  { name: "REGENERATE", price: "€755", note: "Renew strength and vitality", items: ["5 individual sessions", "individual care plan", "HBOT according to the individual plan"] },
  { name: "LONGEVITY", price: "€1,495", note: "Make time work for you", items: ["10 individual sessions", "comprehensive long-term plan", "ongoing assessment and optimisation"] },
];
