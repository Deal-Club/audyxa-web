export interface GeoCity {
  slug: string;
  name: string;
  isFlagship: boolean;
}

export interface MarketStat {
  /** Chiffre affiché ("37 %", "100 M$"...) */
  value: string;
  /** Ce que représente le chiffre, phrase courte */
  label: string;
  /** Organisme + année, tel qu'à citer */
  source: string;
  sourceUrl?: string;
}

export interface CountryMarketContext {
  /** Paragraphe de contexte sourcé (2-4 phrases), sans chiffre inventé */
  intro: string;
  stats: MarketStat[];
  /** Phrase sur le principal obstacle identifié par les études citées */
  obstacle?: string;
}

export interface GeoCountry {
  slug: string;
  name: string;
  region: "Afrique de l'Ouest" | "Afrique centrale" | "Europe francophone";
  currency: string;
  cities: GeoCity[];
  /** Contexte marché sourcé, issu de la veille seo/veille-*.md — optionnel tant que non vérifié */
  marketContext?: CountryMarketContext;
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeCities(names: string[]): GeoCity[] {
  return names.map((name, i) => ({ slug: slugify(name), name, isFlagship: i === 0 }));
}

export const GEO_COUNTRIES: GeoCountry[] = [
  {
    slug: "benin", name: "Bénin", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Cotonou", "Porto-Novo", "Parakou", "Abomey-Calavi", "Djougou", "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey"]),
    marketContext: {
      intro: "Selon une étude de terrain menée en 2023 auprès de 98 entreprises digitales béninoises, seule une minorité d'entre elles a déjà collaboré avec l'administration publique — la majorité souhaite le faire mais n'y parvient pas, freinée par l'accès au financement et la capacité fiduciaire de l'entreprise. Une étude complémentaire recense 102 entreprises digitales dans l'écosystème national, très concentrées sur Cotonou.",
      stats: [
        { value: "37 %", label: "des entreprises digitales béninoises ont déjà fourni un service à l'administration publique", source: "GIZ / Centre de Transformation Digitale du Bénin, 2023" },
        { value: "48 %", label: "des entreprises digitales du pays sont concentrées à Cotonou", source: "ADPME Bénin, étude ACED-ACUMEN 2023" },
        { value: "93 %", label: "des entreprises digitales se financent uniquement sur fonds propres", source: "ADPME Bénin, étude ACED-ACUMEN 2023" },
      ],
      obstacle: "Le principal frein identifié par l'étude GIZ est la capacité fiduciaire des entreprises locales (structuration, conformité fiscale), qui les exclut d'une partie des marchés publics — davantage qu'un manque de volonté ou de compétence technique.",
    },
  },
  {
    slug: "cote-divoire", name: "Côte d'Ivoire", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Abidjan", "Bouaké", "Daloa", "Yamoussoukro", "Korhogo", "San-Pédro", "Man", "Divo", "Gagnoa", "Abengourou"]),
    marketContext: {
      intro: "La maturité numérique ivoirienne est estimée à 28 %, contre 72 % en France, dans un pays qui compte pourtant plus de 37 millions d'internautes. Abidjan est devenue un pôle régional d'événements dédiés à la transformation digitale des entreprises, comme le B2B Digital Day.",
      stats: [
        { value: "28 %", label: "de maturité numérique estimée en Côte d'Ivoire, contre 72 % en France", source: "Smart Africa / agences onusiennes, cité par CIOMAG" },
        { value: "90 %", label: "des PME ivoiriennes sont conscientes du risque cyber, mais 67 % d'entre elles ne l'anticipent pas", source: "CIOMAG" },
      ],
      obstacle: "Le manque de compétences internes et les tensions entre DSI et responsables de la transformation digitale sont cités comme des freins majeurs à l'adoption du numérique en entreprise.",
    },
  },
  {
    slug: "senegal", name: "Sénégal", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Dakar", "Touba", "Thiès", "Kaolack", "M'bour", "Saint-Louis", "Rufisque", "Ziguinchor", "Diourbel", "Louga"]),
    marketContext: {
      intro: "Le Sénégal vise 95 % d'entreprises à maturité digitale d'ici 2034 via son \"New Deal Technologique\", mais la situation actuelle des PME reste en retrait, avec une fracture nette entre Dakar et le reste du pays.",
      stats: [
        { value: "42/100", label: "score moyen de maturité digitale des PME sénégalaises", source: "Étude Econuma" },
        { value: "56,9 %", label: "d'accès à internet dans l'agglomération de Dakar, contre 15,9 % en zone rurale", source: "Données citées par plusieurs médias spécialisés, à recouper" },
      ],
      obstacle: "L'écart d'équipement entre grandes entreprises et micro-entreprises informelles reste marqué : seule une minorité de ces dernières utilise des outils numériques de base au quotidien.",
    },
  },
  {
    slug: "togo", name: "Togo", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Lomé", "Sokodé", "Kara", "Kpalimé", "Atakpamé", "Dapaong", "Tsévié", "Aného", "Bassar", "Mango"]),
    marketContext: {
      intro: "Le Togo dispose d'une stratégie nationale et d'un programme actif de coopération allemande dédié à la digitalisation des PME, mais son propre document de référence qualifie le niveau de digitalisation des PME togolaises hors secteur financier de \"toujours très bas\".",
      stats: [
        { value: "120 PME", label: "ciblées par le programme ProDigiT (GIZ/BMZ), sur une enveloppe de 5 M€, 2022-2025", source: "GIZ, fiche projet ProDigiT, 2022" },
        { value: "14 919", label: "entreprises créées au Togo en 2024, en recul de près de 5 % vs 2023", source: "Togo First" },
      ],
      obstacle: "L'écart entre le nombre d'entreprises accompagnées par les programmes existants (quelques centaines) et le rythme de création d'entreprises (environ 15 000 par an) montre une couverture encore très partielle.",
    },
  },
  {
    slug: "burkina-faso", name: "Burkina Faso", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Banfora", "Ouahigouya", "Kaya", "Tenkodogo", "Fada N'Gourma", "Dédougou", "Réo"]),
    marketContext: {
      intro: "Une thèse soutenue en 2026 à l'Université Thomas Sankara, citant un recensement de 2019, situe la part des entreprises burkinabè actives dans le secteur numérique très en dessous des standards mondiaux — un écart qui représente aussi une marge de progression pour les entreprises qui investissent tôt dans leur transformation digitale.",
      stats: [
        { value: "2,81 %", label: "des entreprises recensées au Burkina Faso appartenaient au secteur numérique en 2019, contre un objectif mondial estimé à 75 %", source: "Thèse A. S. Kaboré, Université Thomas Sankara, 2026, citée par Burkina24" },
      ],
      obstacle: "Le faible niveau de formation numérique des dirigeants est identifié comme le principal frein ; la digitalisation existante se limite le plus souvent à la communication commerciale, rarement aux processus internes.",
    },
  },
  {
    slug: "mali", name: "Mali", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Bamako", "Sikasso", "Ségou", "Mopti", "Koutiala", "Kayes", "Gao", "Kati", "Tombouctou", "San"]),
    marketContext: {
      intro: "Une étude menée auprès de 180 PME du district de Bamako confirme un lien direct entre l'usage d'outils digitaux et la performance commerciale. L'inclusion financière numérique a par ailleurs fortement progressé : les transactions mobiles représentaient 65 % du PIB malien en 2021, contre 21 % en 2015.",
      stats: [
        { value: "180 PME", label: "étudiées à Bamako pour mesurer le lien entre digitalisation et performance", source: "Revue Française d'Économie et de Gestion, vol. 4 n°9, 2023" },
        { value: "65 %", label: "du PIB malien transitait par des transactions mobiles en 2021, contre 21 % en 2015", source: "Banque mondiale, Global Findex" },
      ],
      obstacle: "L'infrastructure de paiement mobile est bien développée, mais la gestion interne des entreprises (facturation, stocks, suivi client) reste souvent artisanale — c'est le vrai chantier identifié par l'étude de terrain.",
    },
  },
  {
    slug: "niger", name: "Niger", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)",
    cities: makeCities(["Niamey", "Zinder", "Maradi", "Agadez", "Tahoua", "Dosso", "Diffa", "Tillabéri", "Arlit", "Birni N'Konni"]),
    marketContext: {
      intro: "Le Niger a bénéficié d'un financement de la Banque mondiale de 100 millions de dollars pour sa transformation numérique et prépare une nouvelle politique nationale du numérique pour la période 2026-2035. Sur le terrain, la fiabilité de la connexion reste le premier irritant cité par les acteurs économiques.",
      stats: [
        { value: "100 M$", label: "financement de la Banque mondiale (IDA) pour la transformation numérique du Niger, annoncé en 2020", source: "Banque mondiale, via FinDev Gateway" },
      ],
      obstacle: "\"Beaucoup de banques sont fermées car les agences n'ont pas de connexion. Les paiements, les transferts que l'on faisait avant… beaucoup sont bloqués\", résume Adolphe Sagbo, président de la Fédération patronale du Niger — la connexion elle-même reste le premier frein, avant même le choix des outils.",
    },
  },
  {
    slug: "guinee", name: "Guinée", region: "Afrique de l'Ouest", currency: "franc guinéen (GNF)",
    cities: makeCities(["Conakry", "Nzérékoré", "Kankan", "Kindia", "Labé", "Mamou", "Boké", "Faranah", "Kissidougou", "Guéckédou"]),
    marketContext: {
      intro: "La Guinée a annoncé un bond d'infrastructure numérique en 2025 (fibre optique, premier data center certifié Tier III) et a lancé fin août 2026 son premier recensement général des entreprises. Sur le terrain, des professionnels de Conakry décrivent une réalité plus contrastée que le discours officiel.",
      stats: [
        { value: "12 000+ km", label: "de fibre optique déployés selon le bilan du ministère guinéen du numérique (2025)", source: "MPTEN, via Guinéenews, janvier 2026 — communication officielle non auditée par un tiers" },
      ],
      obstacle: "\"Le nombre de mégas est très faible. Résultat, une connexion lente, parfois inutilisable […] on ne peut pas rentabiliser nos activités avec de tels prix\", témoigne un informaticien de Conakry auprès de Le360 Afrique — le coût et la qualité de la connexion restent des irritants concrets malgré les annonces d'infrastructure.",
    },
  },
  {
    slug: "cameroun", name: "Cameroun", region: "Afrique centrale", currency: "franc CFA (XAF)",
    cities: makeCities(["Douala", "Yaoundé", "Garoua", "Maroua", "Bafoussam", "Ngaoundéré", "Bertoua", "Édéa", "Kribi", "Dschang"]),
    marketContext: {
      intro: "Le Cameroun bénéficie d'un projet d'accélération de la transformation numérique financé à hauteur de 100 millions de dollars par la Banque mondiale, avec pour objectif de tripler l'accès rural à internet d'ici 2027. Une fracture d'usage nette sépare toutefois les zones urbaines des zones rurales.",
      stats: [
        { value: "100 M$", label: "financement Banque mondiale du projet PATNuC, lancé en 2023", source: "Banque mondiale, via Agence Ecofin" },
        { value: "57 % vs 23 %", label: "taux d'usage d'internet en zone urbaine contre zone rurale au Cameroun", source: "Données ITU Afrique 2025, recoupées par plusieurs médias" },
      ],
      obstacle: "L'infrastructure (fibre, couverture mobile) progresse plus vite que l'adoption réelle par les entreprises, en particulier hors des deux grandes métropoles Douala et Yaoundé.",
    },
  },
  {
    slug: "gabon", name: "Gabon", region: "Afrique centrale", currency: "franc CFA (XAF)",
    cities: makeCities(["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda", "Lambaréné", "Mouila", "Koulamoutou", "Tchibanga", "Makokou"]),
    marketContext: {
      intro: "Le Gabon affiche l'un des taux de pénétration internet les plus élevés d'Afrique centrale, et le gouvernement a plus que doublé son budget numérique national pour 2026. Cette connectivité élevée ne s'est toutefois pas encore traduite en écosystème entrepreneurial numérique dense.",
      stats: [
        { value: "71,9 %", label: "de pénétration internet au Gabon fin 2025 — l'un des taux les plus hauts d'Afrique centrale", source: "DataReportal (Kepios), Digital 2026: Gabon" },
        { value: "82 Md FCFA", label: "budget numérique national gabonais pour 2026, en hausse de plus de 150 % vs 2025", source: "Ministère de l'Économie numérique du Gabon, via Agence Ecofin" },
      ],
      obstacle: "Le Gabon a la connectivité mais pas encore la traction entrepreneuriale : c'est un terrain propice à l'accompagnement post-création (structuration digitale, outillage) plutôt qu'à l'accès de base.",
    },
  },
  {
    slug: "rd-congo", name: "RD Congo", region: "Afrique centrale", currency: "franc congolais (CDF)",
    cities: makeCities(["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kananga", "Kisangani", "Bukavu", "Goma", "Kolwezi", "Likasi", "Tshikapa"]),
    marketContext: {
      intro: "La Banque mondiale estime qu'une hausse de 10 % de l'accès au haut débit en RD Congo pourrait générer environ 2,5 % de croissance additionnelle du PIB et près de 700 000 emplois — un potentiel documenté, mais conditionné à des réformes réglementaires encore à mettre en œuvre.",
      stats: [
        { value: "+2,5 % PIB", label: "gain de croissance estimé pour une hausse de 10 % de l'accès au haut débit en RDC", source: "Banque mondiale, Mise à jour économique de la RDC" },
        { value: "30,5 %", label: "de pénétration internet en RD Congo fin 2025", source: "DataReportal (Kepios), Digital 2026" },
      ],
      obstacle: "Les rapports institutionnels (Banque mondiale, GSMA) identifient la réforme de la fiscalité télécom et des procédures administratives comme condition préalable à la réalisation de ce potentiel économique.",
    },
  },
  {
    slug: "congo-brazzaville", name: "Congo-Brazzaville", region: "Afrique centrale", currency: "franc CFA (XAF)",
    cities: makeCities(["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Ouesso", "Owando", "Sibiti", "Impfondo", "Madingou", "Mossendjo"]),
    marketContext: {
      intro: "Un rapport GSMA présenté à Brazzaville en 2026 documente un écart frappant entre couverture réseau et usage réel au Congo : la grande majorité de la population vit en zone couverte 4G sans pour autant utiliser internet mobile. C'est un signal clair que la barrière est l'adoption, pas la disponibilité du réseau.",
      stats: [
        { value: "86 % couverts / 19 % utilisateurs", label: "écart entre couverture 4G et usage réel d'internet mobile au Congo-Brazzaville", source: "GSMA, rapport présenté au Digital Africa Summit, juin 2026" },
        { value: "870 Md FCFA", label: "valeur économique additionnelle projetée d'ici 2030 grâce à la transformation numérique", source: "GSMA, 2026" },
      ],
      obstacle: "Le régulateur télécom local (ARPCE) reconnaît lui-même l'absence d'observatoire statistique dédié à l'usage numérique des entreprises — un vrai angle mort institutionnel, à mentionner honnêtement plutôt qu'à masquer.",
    },
  },
  {
    slug: "madagascar", name: "Madagascar", region: "Afrique centrale", currency: "ariary (MGA)",
    cities: makeCities(["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Ambovombe", "Morondava", "Ambatondrazaka"]),
    marketContext: {
      intro: "Madagascar met en avant la digitalisation de ses services publics comme point d'entrée de sa transformation numérique, avec des économies déjà chiffrées, plutôt qu'un narratif centré sur l'écosystème privé des PME.",
      stats: [
        { value: "18 Md ariary", label: "économisés entre 2021 et 2023 en digitalisant le paiement des bourses étudiantes universitaires", source: "Unité de Gouvernance Digitale malgache, via L'Express Madagascar" },
        { value: "20,4 %", label: "de pénétration internet à Madagascar fin 2025", source: "DataReportal (Kepios), Digital 2026" },
      ],
      obstacle: "La digitalisation publique malgache avance de façon documentée, mais le relais vers l'écosystème des PME privées reste largement à construire.",
    },
  },
  {
    slug: "belgique", name: "Belgique", region: "Europe francophone", currency: "euro (EUR)",
    cities: makeCities(["Bruxelles", "Liège", "Charleroi", "Namur", "Mons", "Tournai", "La Louvière", "Verviers", "Mouscron", "Seraing"]),
    marketContext: {
      intro: "Les PME belges sont globalement au-dessus de la moyenne européenne sur les fondamentaux numériques, mais un chantier réglementaire daté et concret les attend : la facturation électronique structurée (e-invoicing B2B), obligatoire à partir de 2026, alors que son adoption reste très en retard aujourd'hui.",
      stats: [
        { value: "84 %", label: "des PME belges atteignent un niveau d'intensité numérique de base, contre 71 % en moyenne UE", source: "Eurostat, Digitalisation in Europe, 2025" },
        { value: "1 facture sur 10", label: "seulement est émise en format électronique structuré (UBL/XML) en Belgique à l'automne 2025", source: "Baromètre TPE/PME Moore Belgium x Trends x OECCBB, octobre 2025" },
      ],
      obstacle: "L'écart de maturité numérique se joue désormais sur les technologies avancées (IA, data, robotique), avec une fracture nette entre PME moyennes et micro-entreprises — pas sur l'équipement de base, déjà largement acquis. Les dispositifs régionaux d'aide à la digitalisation des PME (hub.brussels à Bruxelles, Digital Wallonia en Wallonie, le portefeuille PME en Flandre) existent et méritent d'être vérifiés au cas par cas selon la région et l'éligibilité de chaque entreprise.",
    },
  },
  {
    slug: "suisse", name: "Suisse", region: "Europe francophone", currency: "franc suisse (CHF)",
    cities: makeCities(["Genève", "Lausanne", "Fribourg", "Neuchâtel", "Sion", "La Chaux-de-Fonds", "Vevey", "Montreux", "Yverdon-les-Bains", "Nyon"]),
    marketContext: {
      intro: "La Suisse affiche un paradoxe net : une population connectée à la quasi-totalité, mais une présence en ligne des PME nettement en retard par rapport à la demande réelle des consommateurs.",
      stats: [
        { value: "82 % vs 36 %", label: "part de la population qui veut trouver les PME en ligne, contre part des PME ayant un site adéquat", source: "Étude PME Digital Pulse 2025, localsearch x HES-SO Lucerne" },
      ],
      obstacle: "Le cadre de conformité applicable en Suisse est la nLPD (nouvelle loi sur la protection des données, 2023) — à ne pas confondre avec le RGPD européen, une distinction importante pour la clientèle suisse romande. Les acheteurs suisses sont aussi particulièrement exigeants sur la preuve vérifiable (avis Google authentifiables, tarifs affichés) et distinguent nettement les grands cabinets (Deloitte, PwC, Accenture) des consultants indépendants sur le tarif et la vitesse d'exécution.",
    },
  },
  {
    slug: "luxembourg", name: "Luxembourg", region: "Europe francophone", currency: "euro (EUR)",
    cities: makeCities(["Luxembourg-ville", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Bettembourg"]),
    marketContext: {
      intro: "Le Luxembourg conjugue une adoption de l'intelligence artificielle parmi les plus fortes d'Europe du Nord avec un niveau d'intensité numérique de base des PME légèrement sous la moyenne de l'Union européenne — signe d'une digitalisation portée par les grandes structures financières, qui n'a pas encore irrigué toutes les PME.",
      stats: [
        { value: "54 %", label: "niveau d'intensité numérique de base des PME luxembourgeoises, contre 55 % en moyenne UE", source: "Eurostat, Digitalisation in Europe, 2024" },
        { value: "20-28 %", label: "taux d'adoption de l'IA par les entreprises luxembourgeoises, un des plus élevés d'Europe du Nord", source: "Eurostat / STATEC, 2024 — fourchette à confirmer" },
      ],
      obstacle: "L'économie luxembourgeoise très internationalisée (services financiers) crée probablement une fracture entre grandes structures et TPE/PME classiques du commerce local — une hypothèse cohérente avec les données disponibles. Le label \"Fit 4 Digital\" (accréditation publique luxembourgeoise avec cofinancement des missions de conseil) est un signal de confiance recherché localement, à vérifier au cas par cas selon l'éligibilité de chaque entreprise.",
    },
  },
];

export function getCountry(slug: string): GeoCountry | undefined {
  return GEO_COUNTRIES.find((c) => c.slug === slug);
}

export function getFlagshipCity(country: GeoCountry): GeoCity {
  return country.cities.find((c) => c.isFlagship) ?? country.cities[0];
}

export function getCity(country: GeoCountry, citySlug: string): GeoCity | undefined {
  return country.cities.find((c) => c.slug === citySlug);
}

export function getCountriesByRegion(region: GeoCountry["region"]): GeoCountry[] {
  return GEO_COUNTRIES.filter((c) => c.region === region);
}
