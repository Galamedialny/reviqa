export const contactPl = {
  phoneDisplay: "+421 917 072 074",
  phone: "+421917072074",
  email: "info@reviqa.sk",
  address: "Hitschova 5022/2, 058 01 Poprad – Spišská Sobota, Słowacja",
  whatsapp:
    "https://wa.me/421917072074?text=Dzie%C5%84%20dobry%2C%20jestem%20zainteresowany%2Fzainteresowana%20konsultacj%C4%85%20wst%C4%99pn%C4%85%20w%20REVIQA.",
};

export type PolishService = {
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

export const servicesPl: PolishService[] = [
  {
    slug: "tlenoterapia-hiperbaryczna",
    slovakSlug: "hyperbaricka-oxygenoterapia",
    short: "HBOT",
    title: "Tlenoterapia hiperbaryczna (HBOT)",
    eyebrow: "Wsparcie dostępności tlenu",
    intro: "Uznana naukowo procedura, podczas której klient oddycha tlenem w środowisku o podwyższonym ciśnieniu. Jej celem jest zwiększenie dostępności tlenu w tkankach w ramach indywidualnego planu regeneracji.",
    image: "/assets/service-hbot-concept.jpg",
    process: [
      "Przed zabiegiem oceniamy stan zdrowia, możliwe przeciwwskazania i zasadność zastosowania HBOT.",
      "Podczas około 60-minutowej sesji ciśnienie w komorze jest kontrolowanie zwiększane, a następnie obniżane.",
      "Klient odpoczywa w komfortowych warunkach i pozostaje w kontakcie z obsługą; protokół ustalamy indywidualnie.",
      "Po sesji oceniamy tolerancję i zalecamy dalszą częstotliwość zgodnie z planem.",
    ],
    benefits: ["większa dostępność tlenu", "wsparcie odnowy tkanek", "wsparcie naturalnego gojenia", "wsparcie witalności", "wsparcie koncentracji i funkcji poznawczych", "regeneracja po wysiłku"],
    audience: "Dla klientów, u których wstępna ocena specjalisty potwierdzi zasadność zastosowania tlenoterapii hiperbarycznej.",
    suitableFor: ["przewlekłe zmęczenie", "regeneracja po urazach i zabiegach", "sport i zwiększony wysiłek", "wsparcie skóry i gojenia", "obniżona witalność", "inne sytuacje po zaleceniu specjalisty"],
    modalities: ["indywidualny protokół HBOT", "pojedyncza sesja", "seria 5 sesji", "seria 10 sesji", "połączenie z innymi modułami"],
    details: [
      ["Zwiększenie dostępności tlenu", "HBOT zwiększa dostępność tlenu we krwi i tkankach. Konkretny efekt zależy od ciśnienia, czasu, protokołu i stanu zdrowia klienta."],
      ["Odnowa komórek i gojenie", "W planach regeneracyjnych HBOT służy wsparciu naturalnych procesów gojenia, odnowy tkanek i regeneracji po wybranych obciążeniach."],
      ["Obciążenie zapalne, ból i witalność", "HBOT może być częścią indywidualnego planu wspierającego radzenie sobie z obciążeniem zapalnym, bólem, odpornością, energią i witalnością. Zasadność zawsze oceniamy indywidualnie."],
      ["Mózg i układ nerwowy", "HBOT może wspierać funkcje poznawcze, koncentrację i wybrane mechanizmy neuroprotekcyjne. Nie zastępuje badania neurologicznego ani leczenia."],
    ],
    faq: [
      ["Co odczuję podczas sesji?", "Przy zmianie ciśnienia może pojawić się uczucie zatkania uszu podobne do lotu samolotem. Obsługa wyjaśni sposób wyrównania ciśnienia."],
      ["Ile sesji potrzebuję?", "Liczba zależy od celu, zdrowia i reakcji organizmu. Dostępne są pojedyncze sesje oraz serie 5 lub 10 sesji."],
      ["Czy HBOT jest dla każdego?", "Nie. Przed zabiegiem konieczna jest indywidualna ocena płuc, uszu i innych czynników ryzyka."],
    ],
  },
  {
    slug: "terapia-wodorem-molekularnym",
    slovakSlug: "molekularny-vodik",
    short: "Terapia H₂",
    title: "Terapia wodorem molekularnym (H₂)",
    eyebrow: "Regeneracja na poziomie komórkowym",
    intro: "Wodór jest najmniejszą cząsteczką. W REVIQA włączamy go do spersonalizowanych planów poprzez inhalację lub wodę wodorową, zależnie od indywidualnego celu.",
    image: "/assets/service-hydrogen-concept.jpg",
    process: [
      "Omawiamy cel, stan zdrowia i rolę terapii wodorowej w całym planie.",
      "Wybieramy inhalację wodoru, wodę wodorową lub odpowiednie połączenie.",
      "Częstotliwość i czas ustalamy według indywidualnego protokołu.",
      "Obserwujemy tolerancję i dostosowujemy plan do potrzeb klienta.",
    ],
    benefits: ["selektywne wsparcie antyoksydacyjne", "wsparcie równowagi komórkowej", "energia i witalność", "wsparcie mózgu i układu nerwowego", "wsparcie regeneracji", "element planu longevity"],
    audience: "Dla klientów, którzy chcą wspierać regenerację, witalność i ochronę komórek w ramach indywidualnie ocenionego programu.",
    suitableFor: ["przewlekłe zmęczenie", "obciążenie fizyczne i psychiczne", "regeneracja po wysiłku", "obciążenie zapalne", "wsparcie odporności", "zdrowe starzenie i długowieczność"],
    modalities: ["inhalacja wodoru molekularnego", "woda wodorowa", "indywidualny protokół", "połączenie z HBOT", "długoterminowy program regeneracji"],
    details: [
      ["Selektywne wsparcie antyoksydacyjne", "Wodór molekularny jest badany pod kątem selektywnej aktywności antyoksydacyjnej i potencjału ochrony komórek przed stresem oksydacyjnym."],
      ["Przenikanie na poziomie komórkowym", "Dzięki niewielkim rozmiarom cząsteczka wodoru może przenikać przez błony biologiczne. Sposób podania dostosowujemy do stanu i celu klienta."],
      ["Energia, witalność i układ nerwowy", "Terapia może wspierać mitochondria, energię komórkową, witalność i sprawność umysłową, w tym koncentrację i sen."],
      ["Regeneracja i longevity", "Wodór stosujemy jako element szerszego planu, a nie zamiennik diagnostyki lub leczenia chorób."],
    ],
    faq: [
      ["Czym różni się inhalacja od wody wodorowej?", "Przy inhalacji wodór trafia do organizmu przez układ oddechowy, a przy wodzie wodorowej przez układ pokarmowy. Wybór zależy od celu i protokołu."],
      ["Czy można łączyć ją z HBOT?", "Połączenie jest możliwe wyłącznie wtedy, gdy wynika z indywidualnego planu i nie ma przeciwwskazań."],
      ["Czy wodór jest lekiem?", "Przedstawiamy go jako uzupełniającą metodę regeneracji. Nie zastępuje diagnozy, przepisanej terapii ani leków."],
    ],
  },
  {
    slug: "terapia-tlenem-molekularnym",
    slovakSlug: "molekularny-kyslik",
    short: "Terapia O₂",
    title: "Terapia tlenem molekularnym (O₂)",
    eyebrow: "Wsparcie dotlenienia i regeneracji",
    intro: "Terapię tlenową włączamy do spersonalizowanego protokołu regeneracji, aby wspierać dotlenienie, energię komórkową i naturalne procesy odnowy organizmu.",
    image: "/assets/service-diagnostics-concept.jpg",
    process: [
      "Oceniamy aktualny stan zdrowia, indywidualne potrzeby i możliwe ograniczenia.",
      "Dobieramy odpowiednią metodę i indywidualne ustawienia terapii.",
      "Podczas zastosowania monitorujemy komfort i tolerancję.",
      "Jeśli jest to zasadne, łączymy terapię z innymi modułami REVIQA Method™.",
    ],
    benefits: ["wsparcie dotlenienia", "wsparcie energii komórkowej", "regeneracja po wysiłku", "wsparcie witalności", "indywidualne ustawienia", "część spersonalizowanego protokołu"],
    audience: "Dla dorosłych i dzieci po indywidualnej ocenie, gdy terapia tlenowa stanowi odpowiedni element spersonalizowanego protokołu regeneracji.",
    suitableFor: ["obniżona witalność i zmęczenie", "regeneracja po wysiłku fizycznym lub psychicznym", "regeneracja sportowa", "rekonwalescencja po zaleceniu specjalisty", "wsparcie koncentracji i wydajności", "programy regeneracji i longevity"],
    modalities: ["indywidualnie ustawiony protokół tlenowy", "inhalacyjne wsparcie tlenem", "połączenie z modułami REVIQA Method™", "seria według indywidualnego planu"],
    details: [
      ["Wsparcie dostępności tlenu", "Terapia może poprawiać dostępność tlenu dla organizmu. Metodę i intensywność ustalamy zgodnie ze stanem zdrowia i celem klienta."],
      ["Energia komórkowa i regeneracja", "Tlen jest niezbędny do produkcji energii komórkowej. W indywidualnym protokole wspiera naturalne procesy regeneracyjne i adaptacyjne."],
      ["Wydajność i witalność", "Terapia może być częścią programu ukierunkowanego na radzenie sobie z obciążeniem, witalność i powrót do codziennej lub sportowej aktywności."],
      ["Element szerszego planu", "Terapia tlenowa nie zastępuje diagnostyki ani leczenia. Włączamy ją po indywidualnej ocenie jako jeden z modułów REVIQA Method™."],
    ],
    faq: [
      ["Jak ustalana jest terapia tlenowa?", "Metoda, intensywność i częstotliwość wynikają z indywidualnej oceny zdrowia, celów i tolerancji."],
      ["Czy nadaje się dla dzieci?", "Tak, wyłącznie po indywidualnej ocenie i z ustawieniami odpowiednimi do wieku i zdrowia. Dziecko przychodzi z opiekunem prawnym."],
      ["Czy zastępuje leczenie medyczne?", "Nie. Jest uzupełniającą metodą regeneracji i nie zastępuje diagnozy, leczenia ani leków."],
    ],
  },
  {
    slug: "fotobiomodulacja",
    slovakSlug: "fotobiomodulacia",
    short: "Terapia światłem",
    title: "Fotobiomodulacja (660–850 nm)",
    eyebrow: "Nauka światła. Energia życia.",
    intro: "Fotobiomodulacja wykorzystuje wybrane długości fal światła czerwonego i bliskiej podczerwieni do wspierania naturalnych procesów komórkowych i regeneracyjnych.",
    image: "/assets/service-pbm-concept.jpg",
    process: [
      "Określamy obszar i cel oraz wykluczamy możliwe przeciwwskazania.",
      "Ustawiamy długość fali, odległość, intensywność i czas ekspozycji.",
      "Podczas nieinwazyjnego zabiegu klient korzysta z ochrony oczu i odpoczywa.",
      "W serii sesji monitorujemy reakcję i w razie potrzeby modyfikujemy protokół.",
    ],
    benefits: ["wsparcie energii ATP", "regulacja obciążenia zapalnego", "wsparcie gojenia i odnowy tkanek", "wsparcie mięśni i stawów", "wsparcie mózgu i nerwów", "witalność i longevity"],
    audience: "Dla dorosłych i dzieci, gdy terapia światłem jest odpowiednia po ocenie specjalisty i można ustalić bezpieczny protokół.",
    suitableFor: ["skóra i tkanki powierzchowne", "mięśnie, ścięgna i stawy", "regeneracja po wysiłku", "wsparcie gojenia", "wsparcie wydajności", "programy longevity"],
    modalities: ["światło czerwone około 660 nm", "bliska podczerwień około 810–850 nm", "aplikacja miejscowa", "seria według indywidualnego planu"],
    details: [
      ["Jak działa światło", "Fotony światła czerwonego i bliskiej podczerwieni są absorbowane przez struktury komórkowe i mogą wpływać na oksydazę cytochromu c, mitochondria oraz produkcję ATP."],
      ["Światło czerwone 660 nm", "Światło około 660 nm stosuje się głównie w obszarze skóry, tkanek powierzchownych oraz wspierania naturalnego gojenia i produkcji kolagenu."],
      ["Bliska podczerwień 810–850 nm", "Światło bliskiej podczerwieni przenika głębiej, dlatego wykorzystuje się je przy pracy z mięśniami, stawami i głębszymi strukturami. Parametry zależą od urządzenia i potrzeb klienta."],
      ["Wsparcie witalności i longevity", "Fotobiomodulacja może wspierać mechanizmy mitochondrialne i antyoksydacyjne, regulację stresu oksydacyjnego oraz naturalną odnowę komórek. Każdy protokół ustalamy indywidualnie."],
    ],
    faq: [
      ["Czy zabieg boli?", "Zabieg jest nieinwazyjny. Można odczuwać delikatne ciepło; intensywność ustawiamy tak, aby terapia była bezpieczna i komfortowa."],
      ["Dlaczego stosuje się różne długości fal?", "Poszczególne długości fal przenikają tkanki na różną głębokość i są dobierane do obszaru oraz celu."],
      ["Czy potrzebna jest ochrona oczu?", "Przy intensywnych źródłach światła stosuje się ochronę oczu zgodnie z urządzeniem i protokołem."],
    ],
  },
  {
    slug: "chironeurogenna-terapia-manualna",
    slovakSlug: "chiromanualne-terapie",
    short: "Terapia chironeurogenna",
    title: "Chironeurogenna manualna terapia regeneracyjna",
    eyebrow: "Ruch, układ nerwowy i zależności",
    intro: "Nasza autorska metoda precyzyjnie łączy specjalistyczne techniki manualne z dogłębnym rozumieniem wzajemnych zależności układu nerwowego i ruchowego.",
    image: "/assets/service-manual-concept.jpg",
    process: [
      "Rozmowa i funkcjonalna ocena kręgosłupa, stawów, mięśni, powięzi i wzorców ruchowych.",
      "Dobór delikatnych technik manualnych zgodnie z celem, wiekiem i tolerancją klienta.",
      "Ukierunkowana praca z napięciem, mobilnością i funkcjonalnymi zależnościami układu nerwowego.",
      "Zalecenia dotyczące ruchu i dalszych kroków, w tym odpowiednich technologii.",
    ],
    benefits: ["rozluźnienie napięcia mięśni i powięzi", "wsparcie mobilności", "wsparcie funkcji kręgosłupa i stawów", "wsparcie układu nerwowego", "wsparcie układu limfatycznego", "praca z wrażliwymi obszarami"],
    audience: "Dla klientów z dolegliwościami pleców, szyi, stawów lub mięśni, ograniczeniami funkcjonalnymi, przeciążeniem albo potrzebą ukierunkowanej regeneracji.",
    suitableFor: ["dolegliwości pleców, szyi, stawów i mięśni", "ograniczona mobilność i sztywność", "napięcie mięśniowe i powięziowe", "przeciążenie sportowe", "obrzęki po ocenie specjalisty", "profilaktyka i aktywne życie"],
    modalities: [],
    details: [],
    faq: [
      ["Czy terapia zawsze obejmuje manipulację?", "Nie. Technika zależy od oceny, wieku, stanu i świadomej zgody. Często pracujemy delikatnie, bez szybkich ruchów manipulacyjnych."],
      ["Czy terapia jest odpowiednia dla dzieci?", "Tak, po indywidualnej ocenie i z technikami dostosowanymi do wieku. Dziecko przychodzi z opiekunem prawnym."],
      ["Czy można łączyć poszczególne techniki?", "Tak. Połączenie dobieramy po ocenie, z uwzględnieniem reakcji tkanek i całego planu."],
      ["Jak się przygotować?", "Zalecamy wygodną odzież i informacje o diagnozach, operacjach, urazach, lekach oraz aktualnych ograniczeniach."],
    ],
  },
  {
    slug: "doradztwo-fizjoregeneracyjne",
    slovakSlug: "fyzioterapeuticke-poradenstvo",
    short: "Doradztwo fizjoregeneracyjne",
    title: "Doradztwo fizjoregeneracyjne",
    eyebrow: "Kontynuuj opiekę w domu",
    intro: "Po terapii uczymy prostych i bezpiecznych ćwiczeń do samodzielnego wykonywania w domu. Indywidualny plan nawiązuje do terapii, wspiera nawyki ruchowe i pomaga utrzymać postępy.",
    image: "/assets/service-physio-home-exercise.jpg",
    process: [
      "Oceniamy aktualny ruch, możliwości, ograniczenia i reakcję na wykonane terapie.",
      "Wybieramy niewielką liczbę jasnych ćwiczeń zgodnie z celem i stanem.",
      "Ćwiczysz technikę, oddech i tempo pod nadzorem.",
      "Otrzymujesz jasne zalecenia dotyczące częstotliwości, czasu i sygnałów organizmu.",
      "Podczas kontroli oceniamy postępy i dostosowujemy trudność oraz plan.",
    ],
    benefits: ["ciągłość po terapii", "zdrowe nawyki ruchowe", "pewność podczas ćwiczeń w domu", "wsparcie mobilności i stabilności", "stopniowa samodzielność", "długoterminowa opieka ruchowa"],
    audience: "Dla dorosłych i dzieci po indywidualnej ocenie, którzy chcą bezpiecznie kontynuować ćwiczenia w domu i aktywnie uczestniczyć w swoim planie ruchowym.",
    suitableFor: ["kontynuacja po terapii manualnej lub regeneracyjnej", "sztywność i ograniczona mobilność", "poprawa stabilności i koordynacji", "powrót do codziennego ruchu", "zapobieganie przeciążeniom", "budowanie regularnej rutyny"],
    modalities: ["indywidualny plan ruchowy", "praktyczna nauka techniki", "ćwiczenia mobilności", "ćwiczenia stabilizacji", "oddech i relaksacja", "kontrola i modyfikacja planu"],
    details: [
      ["Ćwiczenia jako kontynuacja terapii", "Plan domowy uwzględnia terapię, ocenę funkcjonalną i cele. Nie jest to jeden uniwersalny zestaw dla wszystkich."],
      ["Prosty i trwały plan", "Wybieramy mniej, ale dobrze opanowanych ćwiczeń. Dokładnie wiesz, jak je wykonywać, ile powtórzeń robić i jak często ćwiczyć."],
      ["Technika i bezpieczeństwo", "Najpierw ćwiczysz pod nadzorem. Sprawdzamy ustawienie, zakres ruchu, oddech i reakcję organizmu."],
      ["Samodzielność między wizytami", "Regularna, odpowiednio dobrana aktywność pozwala aktywnie kontynuować opiekę między spotkaniami."],
      ["Kontrola i postęp", "Podczas kolejnej wizyty oceniamy efekty i wprowadzamy zmiany. Trudność zwiększamy dopiero przy bezpiecznej technice."],
    ],
    faq: [
      ["Czy otrzymam takie same ćwiczenia jak inni?", "Nie. Dobór, zakres, powtórzenia i częstotliwość dostosowujemy do stanu, celu i reakcji na terapię."],
      ["Jak długo mam ćwiczyć w domu?", "Tworzymy realny i trwały plan. Dokładny czas i częstotliwość ustala specjalista po ocenie."],
      ["Czy potrzebuję sprzętu?", "Wiele ćwiczeń nie wymaga sprzętu. Jeśli przydatna jest mata lub guma, wyjaśnimy bezpieczne użycie."],
      ["Co zrobić, jeśli pojawi się ból?", "Przy ostrym, nowym lub nasilającym się bólu przerwij ćwiczenie i skontaktuj się z nami, aby zmodyfikować plan."],
    ],
  },
];

export const faqsPl: [string, string][] = [
  ["Jak wygląda pierwsza wizyta?", "Zaczynamy od rozmowy i oceny potrzeb oraz celów. Następnie proponujemy indywidualny plan i wyjaśniamy zalecane postępowanie."],
  ["Czy muszę umówić wizytę?", "Tak. REVIQA pracuje po wcześniejszym umówieniu, aby każdy klient otrzymał odpowiednio dużo czasu, prywatności i spokojną opiekę."],
  ["Czy centrum pracuje także z dziećmi?", "Tak. Zasadność każdej metody oceniamy indywidualnie, a dziecko przychodzi z opiekunem prawnym."],
  ["Jak długo trwa wizyta?", "Spersonalizowany protokół REVIQA Method™ trwa do 90 minut, a HBOT około 60 minut. Czas dalszej opieki wynika z indywidualnego planu."],
  ["Czy można łączyć kilka terapii?", "Tak, jeśli jest to zasadne. Połączenie i kolejność wynikają z indywidualnego planu, a nie z uniwersalnego pakietu."],
  ["Gdzie mogę zaparkować?", "Parking jest dostępny bezpośrednio na terenie centrum przy Hitschova 5022/2 w Popradzie."],
  ["Czy możliwa jest wizyta poza godzinami otwarcia?", "Tak. Wizyty poza regularnymi godzinami oraz w weekendy są możliwe po uzgodnieniu i zależą od dostępności."],
];
