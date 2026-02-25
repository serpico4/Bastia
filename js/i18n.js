/* ═══════════════════════════════════════════════════════════════
   i18n.js — Traduzione multilingua La Bastia (IT / EN / DE)
═══════════════════════════════════════════════════════════════ */

const T = {

  /* ── ITALIANO ────────────────────────────────────────────── */
  it: {
    nav: {
      home:      'Home',
      about:     'Chi siamo',
      specialita:'Specialità',
      menu:      'Menu',
      contatti:  'Contatti'
    },
    footer: {
      tag:  'Ristorante &middot; Pizzeria &middot; Bar &nbsp;&middot;&nbsp; Nogarole Rocca, Verona',
      copy: '&copy; 2024 Ristorante Pizzeria La Bastia &middot; P.IVA 000000000'
    },
    ls: {
      tagline: 'Stai entrando alla Bastia di Nogarole Rocca'
    },
    hero: {
      eyebrow: 'Ristorante &middot; Pizzeria &middot; Bar &nbsp;&middot;&nbsp; Nogarole Rocca, Verona',
      script:  'Sapori autentici dal mare e dalla terra',
      tagline: 'Pizza, pesce, carne e pasta &mdash; tutto con passione artigianale',
      cta1:    'Scopri il menu',
      cta2:    'Dove siamo'
    },
    strip: {
      fish:  'Pesce fresco',
      pizza: 'Pizza artigianale',
      meat:  'Carne alla griglia'
    },
    chi: {
      title: 'Un luogo di<br/>gusto autentico',
      badge: 'anni di passione',
      p1:    'La Bastia nasce dall\'esperienza de <strong>La Medusa</strong>, storico ristorante che per anni ha fatto parlare di sé per la qualità della cucina. Oggi quella stessa passione e quella stessa cura sono arrivate nel cuore di Nogarole Rocca, nel veronese.',
      p2:    'Pizze artigianali, carni alla griglia e pasta fatta con cura: una proposta variegata per famiglie, lavoratori e buongustai che non vogliono scendere a compromessi sul gusto.',
      p3:    'Un ambiente luminoso e familiare, perfetto per ogni occasione &mdash; dal pranzo di lavoro alla cena speciale in famiglia.',
      cta:   'Sfoglia il menu'
    },
    spec: {
      title: 'La nostra<br/><em style="color:var(--amber-lt)">specialità</em>',
      p:     'Il piatto simbolo de La Bastia: gli <strong style="color:var(--amber-lt)">Spaghetti allo Scoglio</strong>. Abbondanti, profumati, generosi &mdash; proprio come la nostra cucina.',
      cta:   'Vedi tutto il menu pesce'
    },
    perche: {
      title:  'Perché scegliere La Bastia',
      card1h: 'Porzioni generose',
      card1p: 'Da noi si mangia davvero. Quantità abbondanti per soddisfare ogni appetito.',
      card2h: 'Ambiente familiare',
      card2p: 'Fatti accogliere da camerieri simpatici e solari, in un posto dove ti senti subito a casa.',
      card3h: 'Cucina di qualità',
      card3p: 'Ingredienti selezionati, ricette curate e passione artigianale in ogni piatto che esce dalla cucina.'
    },
    menu: {
      label: 'Ristorante Pizzeria La Bastia',
      title: 'Il nostro <em>Menu</em>',
      tabAntipasti: 'Antipasti',
      tabPesce:     'Pesce',
      tabPizza:     'Pizza',
      tabCarne:     'Carne &amp; Terra',
      tabDolci:     'Dolci',
      tabLavoro:    '🍽️ Menu Lavoro',
      banAntipastiH: 'Antipasti',
      banAntipastiP: 'Per iniziare con il piede giusto &mdash; sapori di mare e di campagna.',
      banPesceH:     'Pesce &amp; Frutti di Mare',
      banPesceP:     'Selezione fresca ogni mattina. I piatti che ci hanno reso famosi nel Veronese.',
      banPizzaH:     'Pizza Artigianale',
      banPizzaP:     'Impasto a lunga lievitazione, ingredienti freschi e forno ad alta temperatura.',
      banCarneH:     'Carne &amp; Terra',
      banCarneP:     'Grigliate, paste tradizionali e piatti della tradizione veneta.',
      banDolciH:     'Dolci',
      banDolciP:     'Il finale perfetto per una cena de La Bastia.',
      banLavoroH:    'Menu Lavoro',
      banLavoroP:    'Disponibile a pranzo dal <strong>martedì al venerdì</strong> &mdash; veloce, buono e completo.',
      lavoroNote:   'Primo &middot; Secondo &middot; Contorno &middot; Pane &amp; acqua inclusi',
      lavoroCta:    'Per prenotare il tuo tavolo chiama <a href="tel:+390456304370">045 630 4370</a>',
      secPrimo:     '🍝 Primo',
      secSecondo:   '🥩 Secondo',
      secContorno:  '🥗 Contorno',
      dish_ragu:    'Pasta al ragù della casa',
      desc_ragu:    'Tagliatelle fresche con ragù lento di manzo e maiale.',
      dish_pom:     'Pasta al pomodoro fresco',
      desc_pom:     'Con basilico, olio EVO e parmigiano reggiano.',
      dish_ris:     'Risotto del giorno',
      desc_ris:     'Varia in base alla disponibilità &mdash; chiedere al personale.',
      dish_carne:   'Secondo di carne del giorno',
      desc_carne:   'Scelto dal cuoco in base alla disponibilità &mdash; chiedere al personale.',
      dish_pesce:   'Secondo di pesce del giorno',
      desc_pesce:   'Scelto dal cuoco in base alla disponibilità &mdash; chiedere al personale.',
      dish_ins:     'Insalata mista',
      desc_ins:     'Verdure di stagione con olio EVO e aceto.',
      dish_verd:    'Verdure grigliate',
      desc_verd:    'Zucchine, melanzane e peperoni alla griglia.',
      dish_pat:     'Patate al forno',
      desc_pat:     'Croccanti, con rosmarino e aglio.',
      note:         'Prezzi indicativi &middot; Menu soggetto a variazioni stagionali &middot; Comunicare eventuali allergie o intolleranze al personale prima di ordinare'
    },
    contatti: {
      label:      'La Bastia &middot; Nogarole Rocca',
      title:      'Dove <em>siamo</em>',
      addrLabel:  'Indirizzo',
      addrMaps:   'Apri su Google Maps &rarr;',
      telLabel:   'Telefono',
      orariLabel: 'Orari di apertura',
      marVen:     'Martedì – Venerdì',
      venSera:    'Venerdì sera',
      sabPranzo:  'Sabato pranzo',
      sabSera:    'Sabato sera',
      domenica:   'Domenica',
      lunedi:     'Lunedì',
      marSera:    'Martedì sera',
      chiuso:     'Chiuso',
      howTitle:   'Come raggiungerci',
      carH:       'In auto',
      carP:       'Uscita autostrada A22 <strong>Nogarole Rocca</strong>. Siamo a pochi minuti dal casello, su Via Roma nel centro del paese.',
      trainH:     'In treno',
      trainP:     'Stazione ferroviaria di <strong>Peschiera del Garda</strong> o <strong>Villafranca di Verona</strong>. Da lì in taxi o autobus.',
      parkH:      'Parcheggio',
      parkP:      'Ampio parcheggio gratuito disponibile nelle vicinanze del ristorante, in Via Roma.',
      reviewsTitle: 'Cosa dicono i nostri ospiti',
      reviewsSub:   'Opinioni autentiche di chi ha vissuto l\'esperienza La Bastia.'
    }
  },

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {
    nav: {
      home:      'Home',
      about:     'About Us',
      specialita:'Specialties',
      menu:      'Menu',
      contatti:  'Contact'
    },
    footer: {
      tag:  'Restaurant &middot; Pizzeria &middot; Bar &nbsp;&middot;&nbsp; Nogarole Rocca, Verona',
      copy: '&copy; 2024 Restaurant Pizzeria La Bastia &middot; VAT 000000000'
    },
    ls: {
      tagline: 'You are entering La Bastia di Nogarole Rocca'
    },
    hero: {
      eyebrow: 'Restaurant &middot; Pizzeria &middot; Bar &nbsp;&middot;&nbsp; Nogarole Rocca, Verona',
      script:  'Authentic flavors from sea and land',
      tagline: 'Pizza, fish, meat and pasta &mdash; all with artisan passion',
      cta1:    'Discover the menu',
      cta2:    'Find us'
    },
    strip: {
      fish:  'Fresh fish',
      pizza: 'Artisan pizza',
      meat:  'Grilled meat'
    },
    chi: {
      title: 'A place of<br/>authentic taste',
      badge: 'years of passion',
      p1:    'La Bastia was born from the experience of <strong>La Medusa</strong>, a historic restaurant long renowned for its culinary quality. Today that same passion and care have arrived in the heart of Nogarole Rocca, in the Verona area.',
      p2:    'Artisan pizzas, grilled meats and carefully made pasta: a varied offering for families, workers and food lovers who refuse to compromise on taste.',
      p3:    'A bright and welcoming atmosphere, perfect for any occasion &mdash; from a weekday business lunch to a special family dinner.',
      cta:   'Browse the menu'
    },
    spec: {
      title: 'Our<br/><em style="color:var(--amber-lt)">specialty</em>',
      p:     'La Bastia\'s signature dish: the <strong style="color:var(--amber-lt)">Spaghetti allo Scoglio</strong>. Generous, fragrant, abundant &mdash; just like our cuisine.',
      cta:   'See the full fish menu'
    },
    perche: {
      title:  'Why choose La Bastia',
      card1h: 'Generous portions',
      card1p: 'Here you truly eat well. Generous quantities to satisfy every appetite.',
      card2h: 'Family atmosphere',
      card2p: 'Be welcomed by friendly and warm staff, in a place where you feel right at home.',
      card3h: 'Quality cuisine',
      card3p: 'Selected ingredients, refined recipes and artisan passion in every dish from the kitchen.'
    },
    menu: {
      label: 'Restaurant Pizzeria La Bastia',
      title: 'Our <em>Menu</em>',
      tabAntipasti: 'Starters',
      tabPesce:     'Fish',
      tabPizza:     'Pizza',
      tabCarne:     'Meat &amp; Land',
      tabDolci:     'Desserts',
      tabLavoro:    '🍽️ Lunch Menu',
      banAntipastiH: 'Starters',
      banAntipastiP: 'The perfect beginning &mdash; flavors from sea and countryside.',
      banPesceH:     'Fish &amp; Seafood',
      banPesceP:     'Fresh selection every morning. The dishes that made us famous in the Verona area.',
      banPizzaH:     'Artisan Pizza',
      banPizzaP:     'Long-fermented dough, fresh ingredients and high-temperature oven.',
      banCarneH:     'Meat &amp; Land',
      banCarneP:     'Grilled dishes, traditional pasta and recipes from the Venetian tradition.',
      banDolciH:     'Desserts',
      banDolciP:     'The perfect ending for a La Bastia dinner.',
      banLavoroH:    'Lunch Menu',
      banLavoroP:    'Available for lunch from <strong>Tuesday to Friday</strong> &mdash; quick, delicious and complete.',
      lavoroNote:   'Starter &middot; Main course &middot; Side dish &middot; Bread &amp; water included',
      lavoroCta:    'To book your table call <a href="tel:+390456304370">045 630 4370</a>',
      secPrimo:     '🍝 First Course',
      secSecondo:   '🥩 Main Course',
      secContorno:  '🥗 Side Dish',
      dish_ragu:    'Pasta with house ragù',
      desc_ragu:    'Fresh tagliatelle with slow-cooked beef and pork ragù.',
      dish_pom:     'Fresh tomato pasta',
      desc_pom:     'With basil, extra virgin olive oil and Parmigiano Reggiano.',
      dish_ris:     'Risotto of the day',
      desc_ris:     'Varies by availability &mdash; ask the staff.',
      dish_carne:   'Meat of the day',
      desc_carne:   'Chef\'s choice based on availability &mdash; ask the staff.',
      dish_pesce:   'Fish of the day',
      desc_pesce:   'Chef\'s choice based on availability &mdash; ask the staff.',
      dish_ins:     'Mixed salad',
      desc_ins:     'Seasonal vegetables with extra virgin olive oil and vinegar.',
      dish_verd:    'Grilled vegetables',
      desc_verd:    'Courgette, aubergine and peppers on the grill.',
      dish_pat:     'Oven-baked potatoes',
      desc_pat:     'Crispy, with rosemary and garlic.',
      note:         'Indicative prices &middot; Menu subject to seasonal variations &middot; Please inform staff of any allergies or intolerances before ordering'
    },
    contatti: {
      label:      'La Bastia &middot; Nogarole Rocca',
      title:      'Where <em>we are</em>',
      addrLabel:  'Address',
      addrMaps:   'Open in Google Maps &rarr;',
      telLabel:   'Phone',
      orariLabel: 'Opening hours',
      marVen:     'Tuesday – Friday',
      venSera:    'Friday evening',
      sabPranzo:  'Saturday lunch',
      sabSera:    'Saturday evening',
      domenica:   'Sunday',
      lunedi:     'Monday',
      marSera:    'Tuesday evening',
      chiuso:     'Closed',
      howTitle:   'How to reach us',
      carH:       'By car',
      carP:       'A22 motorway exit <strong>Nogarole Rocca</strong>. We are a few minutes from the toll, on Via Roma in the village centre.',
      trainH:     'By train',
      trainP:     'Train station at <strong>Peschiera del Garda</strong> or <strong>Villafranca di Verona</strong>. From there by taxi or bus.',
      parkH:      'Parking',
      parkP:      'Free parking available near the restaurant, on Via Roma.',
      reviewsTitle: 'What our guests say',
      reviewsSub:   'Authentic opinions from people who have experienced La Bastia.'
    }
  },

  /* ── DEUTSCH ─────────────────────────────────────────────── */
  de: {
    nav: {
      home:      'Startseite',
      about:     'Über uns',
      specialita:'Spezialitäten',
      menu:      'Speisekarte',
      contatti:  'Kontakt'
    },
    footer: {
      tag:  'Restaurant &middot; Pizzeria &middot; Bar &nbsp;&middot;&nbsp; Nogarole Rocca, Verona',
      copy: '&copy; 2024 Restaurant Pizzeria La Bastia &middot; MwSt.-Nr. 000000000'
    },
    ls: {
      tagline: 'Sie betreten La Bastia di Nogarole Rocca'
    },
    hero: {
      eyebrow: 'Restaurant &middot; Pizzeria &middot; Bar &nbsp;&middot;&nbsp; Nogarole Rocca, Verona',
      script:  'Authentische Aromen aus Meer und Land',
      tagline: 'Pizza, Fisch, Fleisch und Pasta &mdash; alles mit handwerklicher Leidenschaft',
      cta1:    'Speisekarte entdecken',
      cta2:    'Anfahrt'
    },
    strip: {
      fish:  'Frischer Fisch',
      pizza: 'Handgemachte Pizza',
      meat:  'Gegrilltes Fleisch'
    },
    chi: {
      title: 'Ein Ort<br/>authentischen Geschmacks',
      badge: 'Jahre Leidenschaft',
      p1:    'La Bastia entstand aus der Erfahrung von <strong>La Medusa</strong>, einem historischen Restaurant, das jahrelang für seine kulinarische Qualität bekannt war. Heute sind dieselbe Leidenschaft und Sorgfalt im Herzen von Nogarole Rocca, in der Provinz Verona, angekommen.',
      p2:    'Handgemachte Pizzen, Grillgerichte und sorgfältig zubereitete Pasta: ein vielseitiges Angebot für Familien, Berufstätige und Feinschmecker, die keine Kompromisse beim Geschmack eingehen.',
      p3:    'Eine helle und familiäre Atmosphäre &mdash; ideal für jeden Anlass, vom Mittagessen unter der Woche bis zum besonderen Familienabend.',
      cta:   'Speisekarte durchstöbern'
    },
    spec: {
      title: 'Unsere<br/><em style="color:var(--amber-lt)">Spezialität</em>',
      p:     'Das Signature-Gericht von La Bastia: die <strong style="color:var(--amber-lt)">Spaghetti allo Scoglio</strong>. Reichhaltig, aromatisch, großzügig &mdash; genau wie unsere Küche.',
      cta:   'Vollständige Fischspeisekarte ansehen'
    },
    perche: {
      title:  'Warum La Bastia wählen',
      card1h: 'Großzügige Portionen',
      card1p: 'Bei uns isst man wirklich gut. Reichliche Mengen für jeden Appetit.',
      card2h: 'Familiäre Atmosphäre',
      card2p: 'Freundliches und herzliches Personal empfängt Sie in einem Lokal, in dem Sie sich sofort wie zu Hause fühlen.',
      card3h: 'Qualitätsküche',
      card3p: 'Ausgewählte Zutaten, sorgfältige Rezepte und handwerkliche Leidenschaft in jedem Gericht aus der Küche.'
    },
    menu: {
      label: 'Restaurant Pizzeria La Bastia',
      title: 'Unsere <em>Speisekarte</em>',
      tabAntipasti: 'Vorspeisen',
      tabPesce:     'Fisch',
      tabPizza:     'Pizza',
      tabCarne:     'Fleisch &amp; Land',
      tabDolci:     'Desserts',
      tabLavoro:    '🍽️ Mittagsmenü',
      banAntipastiH: 'Vorspeisen',
      banAntipastiP: 'Der perfekte Einstieg &mdash; Aromen aus Meer und Landschaft.',
      banPesceH:     'Fisch &amp; Meeresfrüchte',
      banPesceP:     'Frische Auswahl jeden Morgen. Die Gerichte, die uns in der Provinz Verona bekannt gemacht haben.',
      banPizzaH:     'Handgemachte Pizza',
      banPizzaP:     'Lang gereifter Teig, frische Zutaten und Backofen mit hoher Temperatur.',
      banCarneH:     'Fleisch &amp; Land',
      banCarneP:     'Grillgerichte, traditionelle Pasta und Gerichte der venezianischen Tradition.',
      banDolciH:     'Desserts',
      banDolciP:     'Der perfekte Abschluss für ein Abendessen bei La Bastia.',
      banLavoroH:    'Mittagsmenü',
      banLavoroP:    'Mittags erhältlich von <strong>Dienstag bis Freitag</strong> &mdash; schnell, lecker und vollständig.',
      lavoroNote:   'Vorspeise &middot; Hauptgang &middot; Beilage &middot; Brot &amp; Wasser inklusive',
      lavoroCta:    'Um Ihren Tisch zu reservieren, rufen Sie an: <a href="tel:+390456304370">045 630 4370</a>',
      secPrimo:     '🍝 Erster Gang',
      secSecondo:   '🥩 Hauptgang',
      secContorno:  '🥗 Beilage',
      dish_ragu:    'Pasta mit Hausragù',
      desc_ragu:    'Frische Tagliatelle mit langsam gegartem Rind- und Schweineragù.',
      dish_pom:     'Pasta mit frischer Tomate',
      desc_pom:     'Mit Basilikum, nativem Olivenöl extra und Parmigiano Reggiano.',
      dish_ris:     'Tagesrisotto',
      desc_ris:     'Je nach Verfügbarkeit &mdash; beim Personal erfragen.',
      dish_carne:   'Fleisch des Tages',
      desc_carne:   'Auswahl des Kochs je nach Verfügbarkeit &mdash; beim Personal erfragen.',
      dish_pesce:   'Fisch des Tages',
      desc_pesce:   'Auswahl des Kochs je nach Verfügbarkeit &mdash; beim Personal erfragen.',
      dish_ins:     'Gemischter Salat',
      desc_ins:     'Saisonales Gemüse mit nativem Olivenöl extra und Essig.',
      dish_verd:    'Gegrilltes Gemüse',
      desc_verd:    'Zucchini, Auberginen und Paprika vom Grill.',
      dish_pat:     'Ofenkartoffeln',
      desc_pat:     'Knusprig, mit Rosmarin und Knoblauch.',
      note:         'Richtwerte für Preise &middot; Speisekarte je nach Saison &middot; Bitte informieren Sie das Personal vor der Bestellung über Allergien oder Unverträglichkeiten'
    },
    contatti: {
      label:      'La Bastia &middot; Nogarole Rocca',
      title:      'Wo <em>wir sind</em>',
      addrLabel:  'Adresse',
      addrMaps:   'In Google Maps öffnen &rarr;',
      telLabel:   'Telefon',
      orariLabel: 'Öffnungszeiten',
      marVen:     'Dienstag – Freitag',
      venSera:    'Freitagabend',
      sabPranzo:  'Samstag Mittag',
      sabSera:    'Samstag Abend',
      domenica:   'Sonntag',
      lunedi:     'Montag',
      marSera:    'Dienstagabend',
      chiuso:     'Geschlossen',
      howTitle:   'Anfahrt',
      carH:       'Mit dem Auto',
      carP:       'Autobahnausfahrt A22 <strong>Nogarole Rocca</strong>. Wir befinden uns wenige Minuten von der Mautstelle entfernt, an der Via Roma im Ortszentrum.',
      trainH:     'Mit der Bahn',
      trainP:     'Bahnhof <strong>Peschiera del Garda</strong> oder <strong>Villafranca di Verona</strong>. Von dort mit Taxi oder Bus.',
      parkH:      'Parken',
      parkP:      'Kostenloser Parkplatz in der Nähe des Restaurants, an der Via Roma.',
      reviewsTitle: 'Was unsere Gäste sagen',
      reviewsSub:   'Authentische Meinungen von Menschen, die La Bastia erlebt haben.'
    }
  }

};

/* ── Helpers ─────────────────────────────────────────────────── */
function i18nGet(obj, path) {
  return path.split('.').reduce((o, k) => (o && k in o ? o[k] : undefined), obj);
}

function applyLang(lang) {
  if (!T[lang]) lang = 'it';
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = i18nGet(t, el.dataset.i18n);
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('bastia-lang', lang);
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  const saved = localStorage.getItem('bastia-lang');
  applyLang(saved || 'it');
});
