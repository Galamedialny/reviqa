export const contactDe = {
  phoneDisplay: "+421 917 072 074",
  phone: "+421917072074",
  email: "info@reviqa.sk",
  address: "Hitschova 5022/2, 058 01 Poprad – Spišská Sobota, Slowakei",
  whatsapp:
    "https://wa.me/421917072074?text=Guten%20Tag%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Erstberatung%20bei%20REVIQA.",
};

export type GermanService = {
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

export const servicesDe: GermanService[] = [
  {
    slug: "hyperbare-sauerstofftherapie",
    slovakSlug: "hyperbaricka-oxygenoterapia",
    short: "HBOT",
    title: "Hyperbare Sauerstofftherapie (HBOT)",
    eyebrow: "Unterstützung der Sauerstoffversorgung",
    intro: "Ein wissenschaftlich etabliertes Verfahren, bei dem der Klient in einer Umgebung mit erhöhtem Druck Sauerstoff einatmet. Ziel ist es, die Sauerstoffverfügbarkeit im Gewebe im Rahmen eines individuellen Regenerationsplans zu erhöhen.",
    image: "/assets/service-hbot-concept.jpg",
    process: [
      "Vor der Anwendung beurteilen wir den Gesundheitszustand, mögliche Kontraindikationen und die Eignung von HBOT.",
      "Während der etwa 60-minütigen Sitzung wird der Druck in der Kammer kontrolliert erhöht und anschließend wieder gesenkt.",
      "Sie ruhen bequem und bleiben mit dem Bedienpersonal in Kontakt; das Protokoll wird individuell festgelegt.",
      "Nach der Sitzung beurteilen wir die Verträglichkeit und empfehlen die weitere Häufigkeit entsprechend Ihrem Plan.",
    ],
    benefits: ["höhere Sauerstoffverfügbarkeit", "Unterstützung der Geweberegeneration", "Unterstützung natürlicher Heilungsprozesse", "Förderung von Vitalität", "Unterstützung von Konzentration und Kognition", "Erholung nach körperlicher Belastung"],
    audience: "Für Klienten, bei denen eine fachliche Erstbeurteilung die Eignung der hyperbaren Sauerstofftherapie bestätigt.",
    suitableFor: ["anhaltende Müdigkeit", "Regeneration nach Verletzungen und Eingriffen", "Sport und erhöhte körperliche Belastung", "Unterstützung von Haut und Heilung", "verminderte Vitalität", "weitere Situationen nach fachlicher Empfehlung"],
    modalities: ["individuelles HBOT-Protokoll", "Einzelanwendung", "Serie von 5 Anwendungen", "Serie von 10 Anwendungen", "Kombination mit weiteren Modulen"],
    details: [
      ["Erhöhte Sauerstoffverfügbarkeit", "HBOT erhöht die Verfügbarkeit von Sauerstoff in Blut und Gewebe. Die konkrete Wirkung hängt von Druck, Dauer, Protokoll und Gesundheitszustand ab."],
      ["Zellerneuerung und Heilung", "In Regenerationsplänen wird HBOT zur Unterstützung natürlicher Heilungsprozesse, der Geweberegeneration und der Erholung nach ausgewählten Belastungen eingesetzt."],
      ["Entzündungsbelastung, Beschwerden und Vitalität", "HBOT kann Bestandteil eines individuellen Plans zur Unterstützung bei entzündlicher Belastung, Beschwerden, Immunität, Energie und Vitalität sein. Die Eignung wird immer individuell beurteilt."],
      ["Gehirn und Nervensystem", "HBOT kann auch Kognition, Konzentration und ausgewählte neuroprotektive Mechanismen unterstützen. Sie ersetzt weder eine neurologische Untersuchung noch eine medizinische Behandlung."],
    ],
    faq: [
      ["Was spüre ich während der Anwendung?", "Bei Druckänderungen kann ein Druckgefühl in den Ohren entstehen, ähnlich wie beim Fliegen. Wir erklären Ihnen den Druckausgleich."],
      ["Wie viele Anwendungen benötige ich?", "Die Anzahl hängt von Ziel, Gesundheitszustand und Reaktion ab. Möglich sind Einzelanwendungen sowie Serien von 5 oder 10 Anwendungen."],
      ["Ist HBOT für jeden geeignet?", "Nein. Vor der Anwendung müssen unter anderem Lunge, Ohren und weitere gesundheitliche Risiken individuell beurteilt werden."],
    ],
  },
  {
    slug: "molekulare-wasserstofftherapie",
    slovakSlug: "molekularny-vodik",
    short: "H₂-Therapie",
    title: "Molekulare Wasserstofftherapie (H₂)",
    eyebrow: "Regeneration auf Zellebene",
    intro: "Wasserstoff ist das kleinste Molekül. Bei REVIQA wird er je nach individuellem Ziel durch Inhalation oder wasserstoffreiches Wasser in personalisierte Pläne integriert.",
    image: "/assets/service-hydrogen-concept.jpg",
    process: [
      "Wir besprechen Ihr Ziel, Ihren Gesundheitszustand und die Rolle der Wasserstofftherapie im Gesamtplan.",
      "Wir wählen Inhalation, wasserstoffreiches Wasser oder eine geeignete Kombination.",
      "Häufigkeit und Dauer richten sich nach dem individuellen Protokoll.",
      "Wir beobachten die Verträglichkeit und passen den Plan an Ihre Bedürfnisse an.",
    ],
    benefits: ["selektive antioxidative Unterstützung", "Unterstützung des zellulären Gleichgewichts", "Energie und Vitalität", "Unterstützung von Gehirn und Nervensystem", "Unterstützung der Regeneration", "Einbindung in einen Longevity-Plan"],
    audience: "Für Klienten, die Regeneration, Vitalität und Zellschutz innerhalb eines individuell beurteilten Programms unterstützen möchten.",
    suitableFor: ["anhaltende Müdigkeit", "körperliche und mentale Belastung", "Erholung nach Sport", "entzündliche Belastung", "Unterstützung der Immunität", "gesundes Altern und Langlebigkeit"],
    modalities: ["Inhalation von molekularem Wasserstoff", "wasserstoffreiches Wasser", "individuelles Protokoll", "Kombination mit HBOT", "langfristiges Regenerationsprogramm"],
    details: [
      ["Selektive antioxidative Unterstützung", "Molekularer Wasserstoff wird hinsichtlich seiner selektiven antioxidativen Aktivität und seines Potenzials zum Schutz von Zellen vor oxidativem Stress erforscht."],
      ["Wirkung auf Zellebene", "Aufgrund seiner geringen Molekülgröße kann Wasserstoff biologische Membranen passieren. Die Art der Anwendung wird an Zustand und Ziel des Klienten angepasst."],
      ["Energie, Vitalität und Nervensystem", "Die Therapie kann Mitochondrien, Zellenergie, Vitalität und mentale Leistungsfähigkeit einschließlich Konzentration und Schlaf unterstützen."],
      ["Regeneration und Longevity", "Wasserstoff wird ergänzend in einen umfassenderen Plan eingebunden und ersetzt weder Diagnostik noch die Behandlung von Erkrankungen."],
    ],
    faq: [
      ["Was ist der Unterschied zwischen Inhalation und Wasser?", "Bei der Inhalation gelangt Wasserstoff über die Atemwege in den Körper, bei wasserstoffreichem Wasser über das Verdauungssystem. Die Wahl richtet sich nach Ziel und Protokoll."],
      ["Kann die Therapie mit HBOT kombiniert werden?", "Eine Kombination ist möglich, wenn sie Teil des individuellen Plans ist und keine Kontraindikationen bestehen."],
      ["Ist Wasserstoff ein Arzneimittel?", "Wir setzen ihn als ergänzende Regenerationsmethode ein. Er ersetzt keine medizinische Diagnostik, verordnete Behandlung oder Medikamente."],
    ],
  },
  {
    slug: "molekulare-sauerstofftherapie",
    slovakSlug: "molekularny-kyslik",
    short: "O₂-Therapie",
    title: "Molekulare Sauerstofftherapie (O₂)",
    eyebrow: "Sauerstoffversorgung und Regeneration",
    intro: "Die Sauerstofftherapie wird in ein personalisiertes Regenerationsprotokoll integriert, um Sauerstoffversorgung, Zellenergie und natürliche Regenerationsprozesse zu unterstützen.",
    image: "/assets/service-diagnostics-concept.jpg",
    process: [
      "Wir beurteilen Ihren aktuellen Zustand, Ihre individuellen Bedürfnisse und mögliche Einschränkungen.",
      "Wir wählen eine geeignete Methode und individuelle Einstellungen.",
      "Komfort und Verträglichkeit werden während der Anwendung überwacht.",
      "Wenn sinnvoll, kombinieren wir die Therapie mit weiteren Modulen der REVIQA Method™.",
    ],
    benefits: ["Unterstützung der Sauerstoffversorgung", "Unterstützung der Zellenergie", "Erholung nach Belastung", "Förderung der Vitalität", "individuelle Einstellung", "Teil eines personalisierten Protokolls"],
    audience: "Für Erwachsene und Kinder nach individueller Beurteilung, wenn Sauerstofftherapie ein geeigneter Bestandteil des Regenerationsprotokolls ist.",
    suitableFor: ["verminderte Vitalität und Müdigkeit", "Erholung nach körperlicher oder mentaler Belastung", "Sportregeneration", "Rekonvaleszenz nach fachlicher Empfehlung", "Unterstützung von Konzentration und Leistung", "individuelle Regenerations- und Longevity-Programme"],
    modalities: ["individuell eingestelltes Sauerstoffprotokoll", "inhalative Sauerstoffunterstützung", "Kombination mit weiteren REVIQA-Modulen", "Serie nach individuellem Plan"],
    details: [
      ["Unterstützung der Sauerstoffverfügbarkeit", "Die Sauerstofftherapie kann die Verfügbarkeit von Sauerstoff für den Körper verbessern. Methode und Intensität richten sich nach Zustand und Ziel."],
      ["Zellenergie und Regeneration", "Sauerstoff ist für die zelluläre Energieproduktion unerlässlich. Im individuellen Protokoll unterstützt er natürliche regenerative und adaptive Prozesse."],
      ["Leistung und Vitalität", "Die Therapie kann Teil eines Programms zur Bewältigung von Belastung, zur Förderung der Vitalität und zur Rückkehr in Alltag oder Sport sein."],
      ["Teil eines umfassenderen Plans", "Die Sauerstofftherapie ersetzt keine Diagnostik oder Behandlung. Sie wird erst nach individueller Beurteilung als Modul der REVIQA Method™ eingesetzt."],
    ],
    faq: [
      ["Wie wird die Sauerstofftherapie eingestellt?", "Methode, Intensität und Häufigkeit ergeben sich aus der individuellen Beurteilung von Zustand, Zielen und Verträglichkeit."],
      ["Ist sie für Kinder geeignet?", "Ja, ausschließlich nach individueller Beurteilung und mit altersgerechter Einstellung. Kinder kommen in Begleitung einer erziehungsberechtigten Person."],
      ["Ersetzt sie eine medizinische Behandlung?", "Nein. Sie ist eine ergänzende Regenerationsmethode und ersetzt weder Diagnostik noch verordnete Behandlung oder Medikamente."],
    ],
  },
  {
    slug: "photobiomodulation",
    slovakSlug: "fotobiomodulacia",
    short: "Lichttherapie",
    title: "Photobiomodulation (660–850 nm)",
    eyebrow: "Die Wissenschaft des Lichts. Die Energie des Lebens.",
    intro: "Die Photobiomodulation nutzt ausgewählte Wellenlängen von rotem und nahem infrarotem Licht zur Unterstützung natürlicher zellulärer und regenerativer Prozesse.",
    image: "/assets/service-pbm-concept.jpg",
    process: [
      "Wir bestimmen Zielbereich und Zielsetzung und schließen mögliche Kontraindikationen aus.",
      "Wellenlänge, Abstand, Intensität und Expositionszeit werden eingestellt.",
      "Während der nicht invasiven Anwendung tragen Sie Augenschutz und ruhen bequem.",
      "Bei einer Serie beobachten wir die Reaktion und passen das Protokoll bei Bedarf an.",
    ],
    benefits: ["Unterstützung der zellulären ATP-Energie", "Regulation entzündlicher Belastung", "Unterstützung von Heilung und Geweberegeneration", "Unterstützung von Muskeln und Gelenken", "Unterstützung von Gehirn und Nerven", "Vitalität und Longevity"],
    audience: "Für Erwachsene und Kinder, wenn die Lichttherapie nach fachlicher Beurteilung geeignet ist und ein sicheres Protokoll festgelegt werden kann.",
    suitableFor: ["Haut und oberflächliches Gewebe", "Muskeln, Sehnen und Gelenke", "Erholung nach Belastung", "Unterstützung der Heilung", "Leistungsunterstützung", "Longevity-Programme"],
    modalities: ["rotes Licht bei etwa 660 nm", "nahes Infrarotlicht bei etwa 810–850 nm", "lokale Anwendung", "Serie nach individuellem Plan"],
    details: [
      ["Wie Licht wirkt", "Photonen des roten und nahinfraroten Lichts werden von Zellstrukturen absorbiert und können Cytochrom-c-Oxidase, Mitochondrien und die zelluläre ATP-Produktion beeinflussen."],
      ["Rotes Licht mit 660 nm", "Rotes Licht um 660 nm wird vor allem für Haut, oberflächliches Gewebe sowie zur Unterstützung natürlicher Heilungsprozesse und der Kollagenbildung eingesetzt."],
      ["Nahes Infrarotlicht mit 810–850 nm", "Nahes Infrarotlicht dringt tiefer ein und wird daher für Muskeln, Gelenke und tiefer liegende Strukturen eingesetzt. Die Parameter hängen vom Gerät und vom individuellen Bedarf ab."],
      ["Vitalität und Longevity", "Photobiomodulation kann mitochondriale und antioxidative Mechanismen, die Regulation von oxidativem Stress und die natürliche Zellerneuerung unterstützen. Jedes Protokoll wird individuell festgelegt."],
    ],
    faq: [
      ["Ist die Anwendung schmerzhaft?", "Die Anwendung ist nicht invasiv. Sie können eine leichte Wärme spüren; die Intensität wird sicher und angenehm eingestellt."],
      ["Warum werden verschiedene Wellenlängen verwendet?", "Verschiedene Wellenlängen dringen unterschiedlich tief in das Gewebe ein und werden je nach Zielbereich ausgewählt."],
      ["Brauche ich einen Augenschutz?", "Bei intensiven Lichtquellen wird entsprechend Gerät und Protokoll ein Augenschutz verwendet."],
    ],
  },
  {
    slug: "chironeurogene-manuelle-therapie",
    slovakSlug: "chiromanualne-terapie",
    short: "Chironeurogene Therapie",
    title: "Chironeurogene manuelle regenerative Therapie",
    eyebrow: "Bewegung, Nervensystem und Zusammenhänge",
    intro: "Unsere eigene Methode verbindet spezialisierte manuelle Techniken präzise mit einem tiefen Verständnis der Wechselwirkung zwischen Nerven- und Bewegungssystem.",
    image: "/assets/service-manual-concept.jpg",
    process: [
      "Gespräch und funktionelle Beurteilung von Wirbelsäule, Gelenken, Muskeln, Faszien und Bewegungsmustern.",
      "Auswahl sanfter manueller Techniken entsprechend Ziel, Alter und Verträglichkeit.",
      "Gezielte Arbeit an Spannung, Beweglichkeit und funktionellen Zusammenhängen des Nervensystems.",
      "Empfehlungen für Bewegung und weitere Schritte einschließlich geeigneter Technologien.",
    ],
    benefits: ["Lösung muskulärer und faszialer Spannung", "Unterstützung der Beweglichkeit", "Unterstützung von Wirbelsäule und Gelenken", "Unterstützung des Nervensystems", "Unterstützung des Lymphsystems", "gezielte Arbeit an empfindlichen Bereichen"],
    audience: "Für Klienten mit Beschwerden an Rücken, Nacken, Gelenken oder Muskeln, funktionellen Einschränkungen, Überlastung oder Bedarf an gezielter Regeneration.",
    suitableFor: ["Beschwerden an Rücken, Nacken, Gelenken und Muskeln", "eingeschränkte Beweglichkeit und Steifheit", "muskuläre und fasziale Spannung", "sportliche Überlastung", "Schwellungen nach fachlicher Beurteilung", "Prävention und aktives Leben"],
    modalities: [],
    details: [],
    faq: [
      ["Beinhaltet die Therapie immer Manipulationen?", "Nein. Die Technik richtet sich nach Befund, Alter, Zustand und Einwilligung. Häufig arbeiten wir sanft und ohne schnelle manipulative Bewegungen."],
      ["Ist sie für Kinder geeignet?", "Ja, nach individueller Beurteilung und mit altersgerechten Techniken. Kinder kommen in Begleitung einer erziehungsberechtigten Person."],
      ["Können verschiedene Verfahren kombiniert werden?", "Ja. Die Kombination wird erst nach der Beurteilung und unter Berücksichtigung der Gewebereaktion sowie des Gesamtplans ausgewählt."],
      ["Wie soll ich mich vorbereiten?", "Wir empfehlen bequeme Kleidung und Informationen zu Diagnosen, Operationen, Verletzungen, Medikamenten und aktuellen Einschränkungen."],
    ],
  },
  {
    slug: "physio-regenerative-beratung",
    slovakSlug: "fyzioterapeuticke-poradenstvo",
    short: "Physio-regenerative Beratung",
    title: "Physio-regenerative Beratung",
    eyebrow: "Die Betreuung zu Hause fortsetzen",
    intro: "Nach der Therapie zeigen wir Ihnen einfache und sichere Übungen für zu Hause. Ihr individueller Plan knüpft an die Behandlung an, unterstützt Bewegungsgewohnheiten und hilft, Fortschritte zu erhalten.",
    image: "/assets/service-physio-home-exercise.jpg",
    process: [
      "Wir beurteilen aktuelle Bewegung, Möglichkeiten, Einschränkungen und die Reaktion auf bisherige Therapien.",
      "Wir wählen wenige klare Übungen passend zu Ziel und Zustand.",
      "Sie üben Technik, Atmung und Tempo unter Anleitung.",
      "Sie erhalten klare Empfehlungen zu Häufigkeit, Dauer und wichtigen Körpersignalen.",
      "Beim Folgetermin beurteilen wir den Fortschritt und passen Schwierigkeit und Plan an.",
    ],
    benefits: ["Kontinuität nach der Therapie", "gesunde Bewegungsgewohnheiten", "Sicherheit beim Üben zu Hause", "Unterstützung von Mobilität und Stabilität", "schrittweise Selbstständigkeit", "langfristige Bewegungspflege"],
    audience: "Für Erwachsene und Kinder nach individueller Beurteilung, die sicher zu Hause weiterüben und aktiv an ihrem Bewegungsplan mitwirken möchten.",
    suitableFor: ["Fortsetzung nach manueller oder regenerativer Therapie", "Steifheit und eingeschränkte Beweglichkeit", "Verbesserung von Stabilität und Koordination", "Rückkehr zur Alltagsbewegung", "Vorbeugung wiederholter Überlastung", "Aufbau einer regelmäßigen Routine"],
    modalities: ["individueller Bewegungsplan", "praktische Technikanleitung", "Mobilitätsübungen", "Stabilitätsübungen", "Atmung und Entspannung", "Kontrolle und Anpassung des Plans"],
    details: [
      ["Übungen als Fortsetzung der Therapie", "Der Heimplan berücksichtigt Therapie, funktionelle Beurteilung und Ziele. Er ist kein allgemeines Programm für alle Klienten."],
      ["Einfach und nachhaltig", "Wir bevorzugen wenige, gut beherrschte Übungen. Sie wissen genau, wie sie ausgeführt werden und wie oft Sie trainieren sollen."],
      ["Technik und Sicherheit", "Zuerst üben Sie unter Anleitung. Wir kontrollieren Ausrichtung, Bewegungsumfang, Atmung und Reaktion des Körpers."],
      ["Selbstständigkeit zwischen Terminen", "Regelmäßige angemessene Aktivität ermöglicht Ihnen, die Betreuung zwischen Terminen aktiv fortzusetzen."],
      ["Kontrolle und Fortschritt", "Beim Folgetermin prüfen wir die Wirkung und passen den Plan an. Die Schwierigkeit steigt erst bei sicherer Technik."],
    ],
    faq: [
      ["Bekomme ich dieselben Übungen wie andere Klienten?", "Nein. Auswahl, Umfang, Wiederholungen und Häufigkeit werden an Ihren Zustand, Ihr Ziel und die Reaktion auf die Therapie angepasst."],
      ["Wie lange soll ich zu Hause üben?", "Wir erstellen einen realistischen Plan. Dauer und Häufigkeit legt der Spezialist nach der Beurteilung fest."],
      ["Brauche ich Hilfsmittel?", "Viele Übungen benötigen keine Hilfsmittel. Falls Matte oder Band sinnvoll sind, erklären wir die sichere Anwendung."],
      ["Was soll ich bei Schmerzen tun?", "Bei scharfen, neuen oder zunehmenden Schmerzen brechen Sie die Übung ab und kontaktieren uns zur Anpassung des Plans."],
    ],
  },
];

export const faqsDe: [string, string][] = [
  ["Wie läuft der erste Besuch ab?", "Wir beginnen mit einem Gespräch und einer Beurteilung Ihrer Bedürfnisse und Ziele. Anschließend erstellen wir einen individuellen Plan und erklären das empfohlene Vorgehen."],
  ["Muss ich einen Termin vereinbaren?", "Ja. REVIQA arbeitet nach Terminvereinbarung, damit jeder Klient ausreichend Zeit, Privatsphäre und eine ruhige Betreuung erhält."],
  ["Arbeitet das Zentrum auch mit Kindern?", "Ja. Die Eignung jeder Methode wird individuell beurteilt; Kinder kommen in Begleitung einer erziehungsberechtigten Person."],
  ["Wie lange dauert ein Termin?", "Ein personalisiertes REVIQA Method™ Regenerationsprotokoll dauert bis zu 90 Minuten, HBOT etwa 60 Minuten. Weitere Termine richten sich nach dem individuellen Plan."],
  ["Können mehrere Therapien kombiniert werden?", "Ja, wenn dies sinnvoll ist. Kombination und Reihenfolge richten sich nach dem individuellen Plan und nicht nach einem Standardpaket."],
  ["Wo kann ich parken?", "Parkplätze stehen direkt auf dem Gelände des Zentrums in der Hitschova 5022/2 in Poprad zur Verfügung."],
  ["Sind Termine außerhalb der Öffnungszeiten möglich?", "Ja. Termine außerhalb der regulären Zeiten und am Wochenende können nach Bedarf und Verfügbarkeit vereinbart werden."],
];
