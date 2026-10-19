/**
 * Contenu enrichi des villes guinéennes hors Conakry (Nzérékoré, Kankan, Kindia,
 * Labé, Mamou, Boké, Faranah, Kissidougou, Guéckédou).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source (Institut National de la Statistique de Guinée,
 * recensement RGPH-3 de 2014, ou organisme cité). Quand une donnée fiable et
 * récente n'a pas été trouvée, le texte reste qualitatif.
 * Audyxa n'a aucun bureau dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_GUINEE: VilleContent[] = [
  // ----------------------------------------------------------- NZÉRÉKORÉ
  {
    paysSlug: "guinee",
    villeSlug: "nzerekore",
    villeName: "Nzérékoré",
    metaDescription:
      "Audyxa accompagne à distance commerçants, planteurs et structures de Nzérékoré, capitale de la Guinée forestière : suivi des achats, des stocks, outils simples.",
    resume:
      "Audyxa accompagne à distance les commerçants, coopératives et organisations de Nzérékoré, grande ville de la Guinée forestière. Située près des frontières du Libéria et de la Côte d'Ivoire, la ville vit d'échanges transfrontaliers et de cultures de rente comme le café et le cacao, des activités où la traçabilité des achats et des paiements fait gagner un temps précieux.",
    coupDoeil: [
      "Nzérékoré est le principal pôle urbain de la Guinée forestière, région limitrophe de la Côte d'Ivoire, du Libéria et de la Sierra Leone.",
      "En avril 2025, le gouvernement a annoncé une relance de la filière café-cacao en Guinée forestière, d'après Guinéenews.",
    ],
    faits: [
      {
        value: "195 027",
        label: "habitants recensés dans la ville de Nzérékoré",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "1 578 030",
        label: "habitants recensés dans l'ensemble de la région de Nzérékoré (Guinée forestière)",
        source: "INS Guinée, RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Tracer les achats d'un acheteur de café ou de cacao",
        texte:
          "Pour un acheteur ou une coopérative qui collecte auprès de nombreux planteurs, noter chaque pesée, chaque avance et chaque paiement dans un outil partagé limite les contestations de fin de campagne. C'est un objet fréquent de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Suivre les stocks d'un commerce de gros à vocation transfrontalière",
        texte:
          "Pour un grossiste qui approvisionne des détaillants de part et d'autre de la frontière, un suivi des entrées, des sorties et des créances clients évite les ruptures et les impayés. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Structurer le suivi d'une association ou d'un projet de développement",
        texte:
          "Pour une ONG locale ou un groupement de producteurs, centraliser membres, activités et justificatifs dans un seul espace simplifie les rapports aux bailleurs. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau ou une équipe à Nzérékoré ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Nzérékoré : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Une connexion irrégulière est-elle un obstacle ?",
        answer:
          "Pas nécessairement. Nous privilégions des outils légers, utilisables sur téléphone et capables de fonctionner avec une connexion limitée, et nous prévoyons des échanges asynchrones plutôt que de longues réunions vidéo. Nous ne promettons pas la même fluidité qu'avec une bonne fibre.",
      },
      {
        question: "Peut-on accompagner une activité de négoce de produits agricoles ?",
        answer:
          "Oui, dès lors qu'il s'agit de mieux suivre achats, stocks et paiements. Nous n'intervenons pas sur les questions douanières ou réglementaires du commerce transfrontalier, qui relèvent de conseils spécialisés.",
      },
    ],
  },
  // -------------------------------------------------------------- KANKAN
  {
    paysSlug: "guinee",
    villeSlug: "kankan",
    villeName: "Kankan",
    metaDescription:
      "Audyxa appuie à distance établissements, commerçants et structures de Kankan, grande ville de Haute-Guinée et ville universitaire : gestion et outils partagés.",
    resume:
      "Audyxa appuie à distance les commerçants, établissements d'enseignement et organisations de Kankan, grande ville de Haute-Guinée posée sur le Milo. Ville de commerce et ville universitaire, elle concentre des besoins de gestion des inscriptions, des stocks et des flux que des outils partagés peuvent simplifier.",
    coupDoeil: [
      "Kankan est située sur le Milo, affluent du Niger, à environ 460 kilomètres à l'est de Conakry, d'après l'encyclopédie Store norske leksikon.",
      "La ville abrite l'Université Julius Nyerere de Kankan, créée en 1964 comme école normale et devenue université nationale en 1968.",
    ],
    faits: [
      {
        value: "190 722",
        label: "habitants recensés dans la ville de Kankan",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "1 972 537",
        label: "habitants recensés dans l'ensemble de la région de Kankan",
        source: "INS Guinée, RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Gérer inscriptions et paiements d'un établissement privé",
        texte:
          "Pour une école ou un institut qui accueille des étudiants de toute la région, suivre dossiers, frais de scolarité et relances dans un seul tableau réduit les oublis. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
      {
        titre: "Piloter le stock d'un commerce de gros ou de détail",
        texte:
          "Pour un commerçant de la ville, croiser achats, ventes et dettes clients dans un suivi simple permet de voir ce qui tourne et ce qui dort en rayon. C'est un chantier de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser les tournées d'un transporteur sur l'axe de l'est",
        texte:
          "Pour une entreprise de transport de marchandises ou de voyageurs, planifier les départs et suivre les retours évite les rotations à vide. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Kankan ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kankan : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous travaillons exclusivement à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Travaillez-vous avec l'Université Julius Nyerere ?",
        answer:
          "Non, nous n'avons aucune mission ni partenariat avec cette université. Nous parlons de l'enseignement supérieur local uniquement pour illustrer des besoins types, comme la gestion des dossiers d'étudiants.",
      },
      {
        question: "Les coupures d'électricité compliquent-elles un projet ?",
        answer:
          "C'est une contrainte réelle à prendre en compte dès le cadrage. Nous préférons des solutions qui se synchronisent dès que le courant et la connexion reviennent, et nous le disons franchement quand un besoin ne se prête pas à cette contrainte.",
      },
    ],
  },
  // -------------------------------------------------------------- KINDIA
  {
    paysSlug: "guinee",
    villeSlug: "kindia",
    villeName: "Kindia",
    metaDescription:
      "Audyxa accompagne à distance les producteurs de fruits, exportateurs et PME de Kindia, en Basse-Guinée : suivi des récoltes, ventes et logistique vers Conakry.",
    resume:
      "Audyxa accompagne à distance les producteurs, groupements et commerçants de Kindia, en Basse-Guinée. Surnommée la cité des agrumes, la ville est au cœur d'une zone fruitière (ananas, mangue, banane) à une distance de Conakry qui rend la logistique de fraîcheur déterminante.",
    coupDoeil: [
      "Kindia se situe à environ 135 kilomètres de Conakry et la préfecture est présentée comme la principale zone de production de fruits du pays, d'après Le360.",
      "Selon un reportage de Le360 en 2025, la chaleur et la raréfaction de l'eau abîment les récoltes d'ananas, ce qui fragilise les revenus des producteurs.",
    ],
    faits: [
      {
        value: "138 695",
        label: "habitants recensés dans la ville de Kindia",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Suivre récoltes et ventes d'un groupement de producteurs de fruits",
        texte:
          "Pour un groupement qui livre des fruits frais à Conakry, noter volumes récoltés, volumes vendus et pertes en route donne une image honnête de la marge réelle. C'est un objet fréquent de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Coordonner les enlèvements entre vergers et marchés de la capitale",
        texte:
          "Pour un collecteur ou un transporteur, un planning partagé des enlèvements limite les attentes au bord des champs et les fruits perdus avant la livraison. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Automatiser les commandes d'une petite unité de transformation",
        texte:
          "Pour une unité de jus, de confiture ou de fruits séchés, relier la prise de commande, la facture et le suivi des stocks supprime des ressaisies. C'est le rôle de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence à Kindia ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kindia : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se fait à distance. La proximité de Conakry ne change pas ce fonctionnement.",
      },
      {
        question: "Peut-on aider face aux aléas climatiques sur les cultures ?",
        answer:
          "Pas sur le climat lui-même, qui ne relève pas de notre métier. Nous pouvons en revanche aider à mesurer l'impact d'une mauvaise saison sur vos ventes et vos marges, afin de mieux planifier la trésorerie.",
      },
      {
        question: "Faut-il être exportateur pour faire appel à vous ?",
        answer:
          "Non. Un producteur qui vend sur les marchés locaux ou à Conakry peut tout autant bénéficier d'un suivi plus rigoureux des volumes et des paiements. Nous n'intervenons pas sur la certification ou l'agrément à l'export.",
      },
    ],
  },
  // ---------------------------------------------------------------- LABÉ
  {
    paysSlug: "guinee",
    villeSlug: "labe",
    villeName: "Labé",
    metaDescription:
      "Audyxa appuie à distance éleveurs, producteurs de pomme de terre et commerçants de Labé, au cœur du Fouta Djallon : suivi des ventes et des paiements.",
    resume:
      "Audyxa appuie à distance les éleveurs, maraîchers, commerçants et associations de Labé, ville principale de la Moyenne-Guinée au cœur du Fouta Djallon. L'économie locale repose sur l'élevage et le maraîchage, avec une diaspora très présente qui finance une partie de l'activité.",
    coupDoeil: [
      "Le Fouta Djallon est présenté par la FAO comme le berceau de la race bovine N'Dama, bien adaptée à la région.",
      "En 2022, des opérateurs ont importé des zébus du Mali à Labé en période de ramadan, la production locale ne suffisant plus à couvrir la demande en viande, d'après Guinéenews.",
    ],
    faits: [
      {
        value: "92 654",
        label: "habitants recensés dans la ville de Labé",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "994 458",
        label: "habitants recensés dans l'ensemble de la région de Labé",
        source: "INS Guinée, RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Suivre un troupeau et les ventes d'un éleveur",
        texte:
          "Pour un éleveur ou un petit négociant en bétail, tenir un registre simple des naissances, achats, ventes et soins aide à savoir ce que rapporte réellement le troupeau. C'est un point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser la vente de pommes de terre en pleine saison",
        texte:
          "Pour une coopérative de producteurs, planifier les arrivages et les ventes selon les marchés évite de brader en période d'abondance. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Gérer des transferts et des dons de la diaspora",
        texte:
          "Pour une association villageoise ou familiale qui reçoit des contributions de membres installés à l'étranger, un tableau partagé des cotisations et des dépenses renforce la confiance. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe à Labé ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Labé : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Disposez-vous de chiffres récents sur l'élevage du Fouta ?",
        answer:
          "Non, et nous préférons le dire. Nous n'avons pas trouvé de statistiques récentes et fiables sur le cheptel de Labé, et nous ne citons donc aucun chiffre à ce sujet. Le diagnostic part de vos propres données.",
      },
      {
        question: "Une activité familiale peut-elle être accompagnée ?",
        answer:
          "Oui. Beaucoup d'activités de la ville sont familiales et peu formalisées. Nous commençons par ce qui existe déjà (carnet, tableur, messagerie) et ne demandons pas de structure juridique particulière pour démarrer.",
      },
    ],
  },
  // --------------------------------------------------------------- MAMOU
  {
    paysSlug: "guinee",
    villeSlug: "mamou",
    villeName: "Mamou",
    metaDescription:
      "Audyxa accompagne à distance transporteurs, commerçants et producteurs de Mamou, carrefour ferroviaire et routier de Moyenne-Guinée : flux et stocks suivis.",
    resume:
      "Audyxa accompagne à distance les transporteurs, commerçants et producteurs de Mamou, ville née en 1908 autour d'une gare du chemin de fer. Placée sur les routes qui relient la capitale à Labé, Kankan et la Guinée forestière, elle vit largement du passage et de l'échange.",
    coupDoeil: [
      "Mamou a été fondée en 1908 autour d'une station de la ligne ferroviaire Conakry-Niger, et reste un point de passage obligé entre plusieurs régions du pays, selon Africa24.",
      "Les cultures locales citées par les sources régionales incluent le riz, le fonio, la pomme de terre, le piment, le gingembre et la tomate.",
    ],
    faits: [
      {
        value: "68 139",
        label: "habitants recensés dans la ville de Mamou",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Planifier les départs et les retours d'une gare routière",
        texte:
          "Pour un syndicat ou une entreprise de transport, un registre numérique des départs, des remplissages et des recettes limite les écarts d'une journée à l'autre. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Suivre un commerce de détail et de demi-gros sur la route",
        texte:
          "Pour un commerçant dont la clientèle est faite de voyageurs et de revendeurs, suivre les ventes par produit permet d'ajuster les commandes aux jours de forte affluence. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Outiller un établissement d'enseignement professionnel",
        texte:
          "Pour une école technique ou un centre de formation, gérer sessions, présences et paiements dans un outil unique allège la charge administrative. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Mamou ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Mamou : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous intervenons uniquement à distance.",
      },
      {
        question: "Mamou est-elle encore une ville ferroviaire ?",
        answer:
          "Nous ne pouvons pas l'affirmer : nous n'avons pas vérifié l'état actuel de la ligne. Nous évoquons le chemin de fer uniquement pour l'histoire de la ville, et nos propositions ne dépendent pas de lui.",
      },
      {
        question: "Un projet peut-il couvrir plusieurs sites, par exemple Mamou et Conakry ?",
        answer:
          "Oui. Un outil partagé fonctionne aussi bien pour une équipe répartie sur plusieurs villes. Le cadrage précise alors qui saisit quoi et à quelle fréquence, pour que les données restent cohérentes.",
      },
    ],
  },
  // ---------------------------------------------------------------- BOKÉ
  {
    paysSlug: "guinee",
    villeSlug: "boke",
    villeName: "Boké",
    metaDescription:
      "Audyxa appuie à distance PME, sous-traitants et prestataires de Boké, ville de la bauxite : suivi des contrats, des flux logistiques et des paiements.",
    resume:
      "Audyxa appuie à distance les PME locales, sous-traitants et prestataires de services de Boké, ville au cœur de la zone minière de la bauxite, en Basse-Guinée maritime. L'activité des compagnies minières attire des fournisseurs de transport, de restauration, de logement et de maintenance, pour lesquels le suivi des contrats et des paiements est un enjeu quotidien.",
    coupDoeil: [
      "La région de Boké abrite plusieurs exploitations de bauxite, dont celles de la Compagnie des Bauxites de Guinée à Sangarédi, détenue à 49 % par l'État guinéen, selon le rapport annuel de Rio Tinto.",
      "La Guinée est devenue un exportateur majeur de bauxite, principalement vers la Chine, d'après les analyses de la presse spécialisée (chiffres 2024 divergents selon les sources, non repris ici).",
    ],
    faits: [
      {
        value: "54 898",
        label: "habitants recensés dans la ville de Boké",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "450 278",
        label: "habitants recensés dans la préfecture de Boké",
        source: "INS Guinée, RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les contrats et factures d'un sous-traitant de site minier",
        texte:
          "Pour un prestataire de transport, de gardiennage ou de restauration qui travaille pour plusieurs donneurs d'ordre, un suivi des prestations, des factures et des échéances accélère l'encaissement. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Planifier les rotations d'une flotte de camions",
        texte:
          "Pour une entreprise de camionnage qui dessert les sites et le port, un planning partagé des tournées et un suivi de l'entretien limitent les immobilisations. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Gérer des logements et locations destinés aux travailleurs",
        texte:
          "Pour un propriétaire qui loue à des employés de sociétés minières ou de chantiers, suivre baux, loyers et réparations dans un outil unique évite les impayés oubliés. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Boké ou travaille-t-il avec les mines ?",
        answer:
          "Non, dans les deux cas. Audyxa n'a pas de bureau à Boké (notre fondateur est basé à Abomey-Calavi, au Bénin) et n'a aucune mission avec une compagnie minière. Nous parlons des mines seulement pour décrire le contexte local.",
      },
      {
        question: "Pouvez-vous nous aider à répondre à un appel d'offres minier ?",
        answer:
          "Non, nous ne rédigeons pas de dossiers d'appel d'offres ni de conformité minière. Nous pouvons en revanche organiser vos données de coûts et de capacités, pour que votre réponse s'appuie sur des chiffres fiables.",
      },
      {
        question: "Les chiffres de production de bauxite sont-ils fiables ?",
        answer:
          "Les sources divergent sur les volumes de 2024, c'est pourquoi nous n'en citons pas. Pour vos propres décisions, nous vous recommandons de vous appuyer sur les données officielles du ministère des Mines ou sur celles de vos donneurs d'ordre.",
      },
    ],
  },
  // ------------------------------------------------------------- FARANAH
  {
    paysSlug: "guinee",
    villeSlug: "faranah",
    villeName: "Faranah",
    metaDescription:
      "Audyxa accompagne à distance agriculteurs, commerçants et structures de Faranah, région de la source du Niger et des barrages : gestion et suivi simple.",
    resume:
      "Audyxa accompagne à distance les agriculteurs, commerçants et organisations de Faranah, ville située dans la zone où naît le fleuve Niger. L'activité y est surtout agricole et commerciale, avec en toile de fond les grands barrages hydroélectriques de la région, qui ont changé le paysage énergétique du pays.",
    coupDoeil: [
      "Le site Ramsar « Niger Source » couvre environ 180 400 hectares dans la préfecture de Faranah, là où le fleuve prend naissance.",
      "Le barrage de Kaléta, de 240 mégawatts, a été inauguré par le président de l'époque, Alpha Condé, d'après Afrik.com ; celui de Souapiti, plus vaste, a été conçu pour compléter son débit.",
    ],
    faits: [
      {
        value: "60 449",
        label: "habitants recensés dans la ville de Faranah",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "280 170",
        label: "habitants recensés dans la préfecture de Faranah",
        source: "INS Guinée, RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les récoltes et les ventes d'une exploitation agricole",
        texte:
          "Pour un exploitant qui vend ses produits sur plusieurs marchés, noter coûts, rendements et prix de vente fait ressortir les cultures vraiment rentables. C'est un objet fréquent de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser des chantiers de construction et leurs sous-traitants",
        texte:
          "Pour une entreprise du bâtiment ou de l'équipement local, un suivi des chantiers, des achats de matériaux et des paiements d'ouvriers évite les dépassements de budget. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
      {
        titre: "Documenter les activités d'un projet de protection de l'environnement",
        texte:
          "Pour une association locale qui intervient autour de la source du Niger, un journal d'activités partagé et des tableaux de suivi facilitent les rapports aux partenaires. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Faranah ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Faranah : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Les barrages ont-ils changé l'économie de la ville ?",
        answer:
          "Nous ne disposons pas d'étude fiable sur leur effet précis sur Faranah, donc nous ne l'affirmons pas. Nous mentionnons les barrages comme repère régional, sans en tirer de promesse pour vos activités.",
      },
      {
        question: "Quelle première étape pour une petite exploitation ?",
        answer:
          "Un échange à distance de 45 à 60 minutes pour comprendre comment vous notez aujourd'hui vos ventes et vos dépenses, puis la proposition d'un format de suivi simple que vous pouvez tenir sans formation lourde.",
      },
    ],
  },
  // ---------------------------------------------------------- KISSIDOUGOU
  {
    paysSlug: "guinee",
    villeSlug: "kissidougou",
    villeName: "Kissidougou",
    metaDescription:
      "Audyxa appuie à distance commerçants et transporteurs de Kissidougou, carrefour du sud de la Guinée sur le Niandan : approvisionnement, stocks, suivi.",
    resume:
      "Audyxa appuie à distance les commerçants, transporteurs et organisations de Kissidougou, ville du sud de la Guinée située dans la vallée du Niandan. Reliée par la route à Faranah, Mamou, Guéckédou et Kankan, elle dépend fortement de l'approvisionnement venu de la capitale, ce qui rend le suivi des stocks et des prix utile.",
    coupDoeil: [
      "Kissidougou est un carrefour routier : des axes la relient notamment à Kouroussa, Faranah, Mamou, Guéckédou, Kérouané et Kankan.",
      "En avril 2020, des commerçants ont signalé que peu de camions de Conakry arrivaient à temps, ce qui avait fait monter le prix du riz, d'après Guinéenews (données de la période Covid).",
    ],
    faits: [
      {
        value: "99 931",
        label: "habitants recensés dans la ville de Kissidougou",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "283 778",
        label: "habitants recensés dans la préfecture de Kissidougou",
        source: "INS Guinée, RGPH-3, 2014",
      },
    ],
    casUsage: [
      {
        titre: "Anticiper l'approvisionnement d'un commerce de denrées",
        texte:
          "Pour un grossiste de riz et de produits de base qui dépend de camions venus de loin, suivre stocks, délais de livraison et prix d'achat aide à commander avant la rupture. C'est un chantier de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Coordonner des départs de véhicules vers plusieurs villes",
        texte:
          "Pour un transporteur qui dessert plusieurs destinations depuis le carrefour, un suivi partagé des véhicules, des chargements et des retours limite les trajets à vide. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Suivre les dépenses et les recettes de la commune ou d'une association",
        texte:
          "Pour une structure locale à budget modeste, un tableau de suivi des recettes, des dépenses et des engagements rend les arbitrages plus lisibles pour les élus et les membres. C'est le rôle de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Audyxa intervient-il à Kissidougou ?",
        answer:
          "À distance seulement. Audyxa n'a pas de bureau à Kissidougou : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous travaillons par visioconférence et outils partagés.",
      },
      {
        question: "Travaillez-vous avec la commune de Kissidougou ?",
        answer:
          "Non, nous n'avons aucune mission avec la commune ni avec une administration locale. Le cas d'usage ci-dessus décrit un besoin type, pas une collaboration existante.",
      },
      {
        question: "Les prix récents du riz sont-ils connus d'Audyxa ?",
        answer:
          "Non. Les prix cités dans la presse locale datent de 2020 et ne reflètent pas la situation actuelle. Nous n'en tirons aucune prévision, et le suivi proposé repose sur vos propres relevés.",
      },
    ],
  },
  // ----------------------------------------------------------- GUÉCKÉDOU
  {
    paysSlug: "guinee",
    villeSlug: "gueckedou",
    villeName: "Guéckédou",
    metaDescription:
      "Audyxa accompagne à distance commerçants, structures de santé et associations de Guéckédou, près des frontières sierra-léonaise et libérienne : suivi simple.",
    resume:
      "Audyxa accompagne à distance les commerçants, structures de santé et associations de Guéckédou, ville de la Guinée forestière proche des frontières de la Sierra Leone et du Libéria. Son histoire récente, marquée par l'épidémie d'Ebola de 2014, a renforcé l'importance du suivi rigoureux de l'information, des stocks et des intervenants.",
    coupDoeil: [
      "Les premiers cas de l'épidémie d'Ebola de 2014 ont été signalés dans la préfecture de Guéckédou, d'après l'Organisation mondiale de la Santé et le Centre européen de prévention et de contrôle des maladies (ECDC).",
      "La ville se trouve à environ 680 kilomètres de Conakry, d'après les communiqués des organisations de santé publiés en 2014.",
    ],
    faits: [
      {
        value: "62 372",
        label: "habitants recensés dans la ville de Guéckédou",
        source: "Institut National de la Statistique de Guinée (INS), recensement RGPH-3, 2014",
      },
      {
        value: "170 cas et 121 décès",
        label: "bilan d'Ebola pour la préfecture de Guéckédou au 23 mai 2014, le plus élevé parmi les préfectures touchées à cette date",
        source: "Centre européen de prévention et de contrôle des maladies (ECDC), mise à jour du 28 mai 2014",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les stocks et les consommables d'un centre de santé",
        texte:
          "Pour une structure de soins privée ou associative, suivre les entrées, les sorties et les dates de péremption des produits limite les ruptures et les pertes. C'est un chantier de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "sante",
        sectorAnchor: "santé",
      },
      {
        titre: "Gérer un commerce de gros près des frontières",
        texte:
          "Pour un grossiste dont la clientèle vient de plusieurs préfectures et de pays voisins, un suivi des ventes à crédit et des encaissements évite les créances oubliées. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Structurer les activités d'une association de terrain",
        texte:
          "Pour une association qui mène des actions de sensibilisation ou d'appui aux familles, un registre d'activités et de bénéficiaires, tenu dans le respect de la confidentialité, facilite la communication avec ses partenaires. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Guéckédou ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Guéckédou : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Travaillez-vous sur des données de santé sensibles ?",
        answer:
          "Nous pouvons structurer des données d'organisation (stocks, plannings, paiements). Pour des données médicales de patients, des exigences de confidentialité strictes s'appliquent et nous en discuterions avec vous avant tout engagement. Nous ne sommes ni un organisme de santé publique ni un conseiller médical.",
      },
      {
        question: "Pourquoi évoquer Ebola sur cette page ?",
        answer:
          "Parce que c'est un fait documenté de l'histoire de la ville, que nous citons avec sa source. Nous n'en tirons aucun argument commercial et n'avons aucune mission liée à cette épidémie.",
      },
    ],
  },
];
