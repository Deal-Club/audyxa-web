/**
 * Contenu enrichi des villes camerounaises (Douala, Yaoundé, Garoua, Maroua,
 * Bafoussam, Ngaoundéré, Bertoua, Édéa, Kribi, Dschang).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source (BUCREP, autorités portuaires, Sodecoton, etc.).
 * Le dernier recensement complet du Cameroun date de 2005 : les chiffres de
 * population récents sont des estimations régionales du BUCREP (2023). Quand une
 * donnée fiable et récente n'a pas été trouvée, le texte reste qualitatif.
 * Audyxa n'a aucun bureau dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_CAMEROUN: VilleContent[] = [
  // ---------------------------------------------------------------- DOUALA
  {
    paysSlug: "cameroun",
    villeSlug: "douala",
    villeName: "Douala",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Douala, capitale économique du Cameroun : suivi des flux portuaires, industrie, négoce et automatisation.",
    resume:
      "Audyxa accompagne à distance les entreprises de Douala, capitale économique du Cameroun et porte d'entrée maritime de toute la sous-région. Transitaires, industriels, négociants et distributeurs y manipulent chaque jour des volumes de documents, de stocks et de paiements que des outils bien intégrés peuvent rendre plus lisibles.",
    coupDoeil: [
      "Le port de Douala, sur l'estuaire du Wouri, est le principal point d'entrée des marchandises du pays et un débouché pour des États enclavés d'Afrique centrale.",
      "Avec Yaoundé, Douala est l'une des deux seules villes camerounaises à avoir frôlé les 2 millions d'habitants lors du dernier recensement complet, en 2005.",
    ],
    faits: [
      {
        value: "12 920 299 tonnes",
        label: "de marchandises à l'import et à l'export traitées par le port de Douala en 2024, soit environ 6 % de plus qu'en 2023",
        source: "Autorité portuaire nationale (APN), chiffres 2024 relayés par EcoMatin",
      },
      {
        value: "4,2 millions",
        label: "d'habitants estimés dans la région du Littoral, dont Douala est le chef-lieu (estimation statistique, non un recensement)",
        source: "Bureau central des recensements et des études de population (BUCREP), estimations 2023",
      },
    ],
    casUsage: [
      {
        titre: "Suivre un dossier de transit de bout en bout",
        texte:
          "Pour un transitaire ou un importateur, centraliser les connaissements, les dates d'arrivée, les frais de magasinage et les enlèvements dans un tableau de suivi partagé limite les oublis coûteux. L'automatisation des relances entre équipes relève de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Relier production, stocks et ventes dans une usine",
        texte:
          "Une PME industrielle de la zone de Bassa ou de Bonabéri travaille souvent avec plusieurs fichiers déconnectés pour la production, les matières premières et la facturation. Les relier évite les ruptures et les doubles saisies. C'est le point de départ de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Fiabiliser le suivi des encaissements d'un distributeur",
        texte:
          "Pour un grossiste qui livre de nombreux points de vente, suivre les créances par client et par tournée donne une vision claire de la trésorerie. Nous commençons par un cadrage dans le cadre de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Douala ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Douala : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Travaillez-vous avec les acteurs du port et du transit ?",
        answer:
          "Nous intervenons sur l'organisation interne de l'entreprise (suivi des dossiers, documents, relances), pas sur les systèmes douaniers ou portuaires officiels, que nous ne pouvons ni modifier ni remplacer.",
      },
      {
        question: "Quel est le point de départ pour une entreprise de Douala ?",
        answer:
          "Un diagnostic court d'un processus précis, par exemple le suivi des commandes ou des créances. Il permet de décider ensuite, sans engagement, s'il faut un outil, une automatisation ou simplement une meilleure organisation.",
      },
    ],
  },
  // ---------------------------------------------------------------- YAOUNDÉ
  {
    paysSlug: "cameroun",
    villeSlug: "yaounde",
    villeName: "Yaoundé",
    metaDescription:
      "Audyxa accompagne à distance les organisations de Yaoundé, capitale politique du Cameroun : administration, ONG, éducation et télécoms, outils et processus.",
    resume:
      "Audyxa accompagne à distance les organisations de Yaoundé, capitale politique du Cameroun où se concentrent institutions publiques, organisations internationales et grandes écoles. L'activité y repose davantage sur les dossiers, les validations et les circuits d'information que sur le négoce, ce qui oriente les besoins vers la traçabilité et le travail partagé.",
    coupDoeil: [
      "Yaoundé abrite les institutions de l'État camerounais, dont le ministère des Postes et Télécommunications, chargé de la politique numérique.",
      "La ville est aussi un pôle universitaire et de formation, et un lieu de siège pour de nombreuses ONG et organisations de coopération.",
    ],
    faits: [
      {
        value: "5,2 millions",
        label: "d'habitants estimés dans la région du Centre, dont Yaoundé est le chef-lieu, soit environ 18 % de la population nationale (estimation statistique)",
        source: "Bureau central des recensements et des études de population (BUCREP), estimations 2023",
      },
      {
        value: "28 856 127",
        label: "habitants estimés au Cameroun en 2023, le dernier recensement complet remontant à 2005",
        source: "BUCREP, estimations 2023 relayées par EcoMatin, août 2025",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les dossiers et les validations d'un service public",
        texte:
          "Dans une structure publique ou parapublique, savoir où se trouve un dossier et qui doit le valider évite les pertes de temps et les relances par téléphone. Un circuit numérique léger se construit avec notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Piloter les projets d'une ONG ou d'une agence de coopération",
        texte:
          "Pour une organisation qui gère plusieurs bailleurs, rapports et partenaires de terrain, un tableau de bord commun remplace les fichiers dispersés. C'est l'objet de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Organiser la scolarité d'une école privée ou d'un institut",
        texte:
          "Inscriptions, frais de scolarité, notes et convocations se gèrent souvent dans des tableurs distincts. Un outil unique, conçu avec l'équipe administrative, allège la rentrée. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il implanté à Yaoundé, près des administrations ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Yaoundé : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous travaillons exclusivement à distance, ce qui n'empêche pas de couvrir des organisations de la capitale.",
      },
      {
        question: "Intervenez-vous pour l'administration publique ?",
        answer:
          "Nous pouvons aider une structure à organiser ses propres circuits internes. Nous ne présentons aucune mission publique réelle comme référence, et les règles de commande publique propres à chaque organisme restent à respecter de votre côté.",
      },
      {
        question: "Comment gérer la confidentialité des dossiers ?",
        answer:
          "Les accès sont limités au strict nécessaire et les données sensibles restent dans vos outils. Une revue des droits d'accès et des sauvegardes fait partie du cadrage, avant toute automatisation.",
      },
    ],
  },
  // ---------------------------------------------------------------- GAROUA
  {
    paysSlug: "cameroun",
    villeSlug: "garoua",
    villeName: "Garoua",
    metaDescription:
      "Audyxa accompagne à distance les acteurs de Garoua, capitale du Nord Cameroun : filière coton, négoce sur la Bénoué, suivi des intrants et des livraisons.",
    resume:
      "Audyxa accompagne à distance les entreprises et coopératives de Garoua, chef-lieu de la région du Nord et siège de la Sodecoton, société de développement du coton. L'économie locale suit le calendrier agricole : intrants, collecte, égrenage, transport, avec des échanges d'information qui gagnent à être mieux tracés.",
    coupDoeil: [
      "Garoua est bâtie sur la Bénoué, rivière dont la navigabilité saisonnière a historiquement relié la ville aux échanges vers le Nigeria.",
      "Le siège de la Sodecoton, principal opérateur cotonnier du pays, est établi à Garoua, ce qui place la ville au cœur de la filière coton camerounaise.",
    ],
    faits: [
      {
        value: "284 613 tonnes",
        label: "de coton graine produites lors de la campagne 2024-2025, en recul d'environ 28 % par rapport aux 395 000 tonnes de la campagne précédente, sous l'effet d'aléas climatiques et de retards d'intrants",
        source: "Sodecoton, chiffres de campagne relayés par EcoMatin",
      },
    ],
    casUsage: [
      {
        titre: "Tracer les intrants et les paiements d'une coopérative",
        texte:
          "Pour une union de producteurs, savoir qui a reçu quels engrais et semences, et ce qui reste dû, évite les contestations en fin de campagne. Un registre partagé se met en place avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Coordonner la collecte et le transport en saison de récolte",
        texte:
          "Les rotations de camions entre villages, marchés de collecte et usines d'égrenage dépendent de routes et de météo variables. Un suivi simple des enlèvements aide à ajuster les tournées. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Fiabiliser la gestion d'un commerce de gros du marché",
        texte:
          "Un grossiste de Garoua achète souvent à crédit et vend à des revendeurs de la région : suivre stocks et dettes dans un outil unique sécurise la trésorerie. Nous le cadrons dans le cadre de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe à Garoua ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Garoua : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance. Nous ne prétendons pas connaître la filière coton mieux que ceux qui la pratiquent.",
      },
      {
        question: "Un outil peut-il fonctionner avec une connexion irrégulière ?",
        answer:
          "Oui, si on le conçoit pour cela : saisie légère, synchronisation différée, export papier ou tableur en secours. Nous évaluons la qualité réelle de connexion de vos sites avant de choisir la solution.",
      },
      {
        question: "Les aléas climatiques peuvent-ils être pris en compte ?",
        answer:
          "Nous ne prévoyons pas la météo ni les rendements. Nous pouvons en revanche vous aider à suivre vos coûts et vos engagements de façon assez claire pour réagir plus vite quand une campagne se dégrade.",
      },
    ],
  },
  // ---------------------------------------------------------------- MAROUA
  {
    paysSlug: "cameroun",
    villeSlug: "maroua",
    villeName: "Maroua",
    metaDescription:
      "Audyxa accompagne à distance les artisans, commerçants et associations de Maroua, chef-lieu de l'Extrême-Nord : cuir, marchés, suivi des ventes et ONG.",
    resume:
      "Audyxa accompagne à distance les artisans, commerçants et organisations de Maroua, chef-lieu de la région de l'Extrême-Nord, la plus peuplée du pays selon les estimations du BUCREP. Le travail du cuir, le commerce de marché et un tissu dense d'associations et d'organisations humanitaires y structurent l'activité.",
    coupDoeil: [
      "Maroua est réputée pour son artisanat du cuir : sacs, sandales, poufs et portefeuilles y sont vendus localement et expédiés vers d'autres villes d'Afrique centrale.",
      "La région de l'Extrême-Nord accueille de nombreuses organisations humanitaires et de développement, dans un contexte sécuritaire régional documenté par les institutions internationales.",
    ],
    faits: [
      {
        value: "plus de 5,5 millions",
        label: "d'habitants estimés dans la région de l'Extrême-Nord, soit environ 19,3 % de la population nationale, la région la plus peuplée du pays (estimation statistique)",
        source: "Bureau central des recensements et des études de population (BUCREP), estimations 2023",
      },
    ],
    casUsage: [
      {
        titre: "Suivre commandes et stocks d'un atelier de cuir",
        texte:
          "Pour un artisan ou un groupement qui vend à des revendeurs de plusieurs villes, un carnet numérique de commandes, d'acomptes et de livraisons réduit les litiges. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Structurer le reporting d'une ONG de terrain",
        texte:
          "Les organisations qui interviennent auprès de populations dispersées doivent produire des rapports réguliers pour leurs bailleurs. Une collecte de données simple, utilisable hors ligne, allège ce travail. Nous cadrons cela avec notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Automatiser les relances d'un commerce interrégional",
        texte:
          "Un négociant qui approvisionne des marchés éloignés peut automatiser ses confirmations de commande et ses rappels de paiement par message. C'est le champ de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Maroua ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Maroua : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se font à distance, ce qui évite à nos clients de dépendre de déplacements.",
      },
      {
        question: "Peut-on travailler avec des équipes dispersées sur le terrain ?",
        answer:
          "Oui, à condition de prévoir des outils légers et un mode de secours quand le réseau est instable. Nous testons la solution sur un petit périmètre avant de l'étendre.",
      },
      {
        question: "Les artisans sans équipement informatique sont-ils concernés ?",
        answer:
          "Un téléphone suffit souvent pour commencer : suivi des commandes par formulaire, rappels par message. Nous ne vendons pas de matériel, et nous adaptons la solution à ce que vous utilisez déjà.",
      },
    ],
  },
  // ---------------------------------------------------------------- BAFOUSSAM
  {
    paysSlug: "cameroun",
    villeSlug: "bafoussam",
    villeName: "Bafoussam",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Bafoussam, chef-lieu de l'Ouest : café arabica, négoce agricole, commerce de gros et PME du plateau bamiléké.",
    resume:
      "Audyxa accompagne à distance les entreprises de Bafoussam, chef-lieu de la région de l'Ouest et carrefour commercial des hautes terres bamiléké. Le café arabica, les produits vivriers et un commerce de gros très actif y font vivre de nombreuses PME familiales, dont la gestion repose encore beaucoup sur le papier et les tableurs.",
    coupDoeil: [
      "L'arabica camerounais est cultivé surtout sur les hautes terres de l'Ouest, et plusieurs stations de lavage du café sont installées dans la région, dont Bafoussam.",
      "La ville est connue pour son esprit d'entreprise : commerce de gros, transport et petites industries y sont portés par de nombreux opérateurs privés locaux.",
    ],
    faits: [],
    casUsage: [
      {
        titre: "Tracer les lots de café d'une coopérative",
        texte:
          "Pour une coopérative qui collecte du café auprès de nombreux planteurs, relier chaque lot à son producteur, à son poids et à son paiement facilite les comptes et la traçabilité demandée par les acheteurs. C'est un travail pour notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Gérer le stock et les crédits d'un grossiste de marché",
        texte:
          "Un commerce de gros en vivres ou en produits manufacturés vend largement à crédit. Un suivi clair des échéances, client par client, aide à garder la trésorerie saine. Nous l'abordons avec notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser la flotte d'une entreprise de transport interurbain",
        texte:
          "Entre Bafoussam, Douala et Yaoundé, le suivi des départs, des recettes et de l'entretien des véhicules se fait souvent à la main. Un tableau de bord simple en réduit les pertes. C'est le rôle de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence physique à Bafoussam ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Bafoussam : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance.",
      },
      {
        question: "Une PME familiale peut-elle se digitaliser sans tout changer ?",
        answer:
          "Oui. Nous partons de vos habitudes (cahiers, tableur, messagerie) et ne remplaçons que ce qui pose réellement problème, étape par étape, pour ne pas désorganiser l'activité.",
      },
      {
        question: "Disposez-vous de chiffres sur le marché du café à Bafoussam ?",
        answer:
          "Nous n'avons pas trouvé de chiffre fiable propre à la ville et préférons ne pas en citer. Les données de prix et de volumes à jour se consultent auprès de l'Office national du cacao et du café.",
      },
    ],
  },
  // ---- NGAOUNDÉRÉ
  {
    paysSlug: "cameroun",
    villeSlug: "ngaoundere",
    villeName: "Ngaoundéré",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Ngaoundéré, capitale de l'Adamaoua : élevage, transit ferroviaire vers le Tchad, laiterie, université, PME.",
    resume:
      "Audyxa accompagne à distance les entreprises de Ngaoundéré, chef-lieu de la région de l'Adamaoua et terminus de la ligne Camrail depuis Douala et Yaoundé. La ville est un point de passage du fret vers le Tchad et la Centrafrique, la première zone d'élevage bovin du pays et le siège d'une université publique fondée en 1993. Négociants, transporteurs, laiteries et établissements d'enseignement y gèrent encore beaucoup de leurs opérations sur papier ou sur tableur. Notre fondateur, basé à Abomey-Calavi au Bénin, intervient entièrement à distance.",
    coupDoeil: [
      "Terminus de la ligne ferroviaire Camrail, la gare de Ngaoundéré (ouverte en 1974) sert de point de stockage et de reprise du fret avant le Tchad ; en mars 2025, Camrail y a fait circuler 247 wagons depuis Douala.",
      "L'Adamaoua concentre près de deux millions de bovins et environ 38 % de la production nationale de viande de bœuf, selon le ministère de l'Élevage (2022) ; un marché à bétail de 98,1 millions de F CFA a été lancé à Ngaoundéré 3e en 2022.",
      "Sur le plateau de l'Adamaoua, le climat est tempéré d'altitude (environ 22 °C de moyenne annuelle), et l'université de Ngaoundéré compte plusieurs facultés et grandes écoles, dont l'ENSAI en agro-industrie.",
    ],
    faits: [
      {
        value: "189 800",
        label: "habitants à Ngaoundéré au recensement de 2005 (230 000 estimés en 2020)",
        source: "Wikipédia FR, article Ngaoundéré, d'après le recensement de 2005 (consulté en 2026)",
      },
      {
        value: "≈ 38 %",
        label:
          "de la production nationale de viande de bœuf provient du cheptel de l'Adamaoua, estimé à près de deux millions de têtes",
        source: "Cameroon Tribune, d'après le Minepia, article sur le prix de la viande de bœuf, 2022",
      },
      {
        value: "1993",
        label: "année de création de l'université de Ngaoundéré (décret présidentiel n° 93/028)",
        source: "Wikipédia EN, article University of Ngaoundéré (consulté en 2026)",
      },
    ],
    casUsage: [
      {
        titre: "Suivre achats, avances et marges d'un négociant en bétail",
        texte:
          "Un négociant qui achète des bêtes auprès d'éleveurs de l'Adamaoua puis les revend vers le sud gère avances, paiements échelonnés, taxes de marché et frais de transport. Quand tout cela tient dans un cahier, la marge réelle de chaque lot reste difficile à connaître. Un suivi par transaction, simple à renseigner, éclaire les décisions. Nous l'abordons avec notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Piloter les chargements entre la gare et la route du Tchad",
        texte:
          "Pour un transitaire ou un transporteur, la marchandise arrive par rail à Ngaoundéré puis repart en camion. Entre l'arrivée des wagons, le stockage, la prise en charge et la livraison, les informations passent souvent par téléphone et messagerie. Un tableau de bord partagé réduit les oublis et les litiges. C'est le rôle de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Relier collecte, production et ventes d'une petite laiterie",
        texte:
          "Une unité qui collecte du lait auprès de plusieurs éleveurs doit suivre les volumes reçus, les paiements et les ventes. Avec une capacité en cours d'extension dans la zone, ces flux grandissent et un tableur seul atteint vite ses limites. Un outil sur mesure suit chaque livraison de la collecte à la facture. C'est un travail pour notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Avez-vous une présence physique à Ngaoundéré ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Ngaoundéré : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés, sans déplacement.",
      },
      {
        question: "Peut-on travailler avec une connexion internet irrégulière ?",
        answer:
          "Oui. Des opérateurs ont signalé en 2024 des coupures de fibre dans l'Adamaoua et le Grand Nord. Nous privilégions donc des outils légers, utilisables avec peu de débit, et des échanges asynchrones (messages, documents partagés) plutôt que de longues visioconférences.",
      },
      {
        question: "Vous intervenez auprès de quels types d'entreprises à Ngaoundéré ?",
        answer:
          "Négociants en bétail, transporteurs et transitaires, laiteries et petites unités agroalimentaires, établissements d'enseignement privés, commerces et PME de services. Nous partons de vos habitudes (cahiers, tableur, messagerie) et ne changeons que ce qui pose réellement problème.",
      },
      {
        question: "Disposez-vous de chiffres sur le marché du bétail de Ngaoundéré ?",
        answer:
          "Nous n'avons pas trouvé de chiffre récent et fiable sur les volumes et les prix du marché à bétail de la ville, et préférons ne pas en citer. Les données à jour se consultent auprès du ministère de l'Élevage, des Pêches et des Industries animales (Minepia).",
      },
    ],
  },
  // ---- BERTOUA
  {
    paysSlug: "cameroun",
    villeSlug: "bertoua",
    villeName: "Bertoua",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Bertoua, chef-lieu de l'Est : filière bois, négoce agricole, transport et commerce vers la Centrafrique.",
    resume:
      "Audyxa accompagne à distance les entreprises de Bertoua, chef-lieu de la région de l'Est, la plus vaste et la plus forestière du Cameroun. La ville est le siège du gouvernorat et se trouve sur la route nationale 1, reliée par une route goudronnée à Garoua-Boulaï, à la frontière centrafricaine. Le bois, le négoce agricole, le transport et le commerce transfrontalier y font vivre de nombreuses PME, souvent gérées sur papier et tableur. Nous intervenons sans présence sur place, avec des outils légers adaptés à la distance et aux connexions variables.",
    coupDoeil: [
      "L'Est est décrit comme la première région du pays par la superficie (109 002 km²) et la moins densément peuplée, avec le bois pour principale industrie, autour de Bélabo, Dimako et Mindourou.",
      "Une route goudronnée relie Bertoua à Garoua-Boulaï, sur la frontière avec la Centrafrique, et la ville se trouve sur la route nationale 1 vers Yaoundé et le nord. Elle dispose aussi d'un aéroport.",
      "Le projet de zone économique spéciale pour la filière bois, évoqué à Bertoua dès 2021, vise à transformer davantage le bois sur place après l'interdiction d'exporter les grumes dans la zone CEMAC.",
    ],
    faits: [
      {
        value: "88 462",
        label: "habitants à Bertoua au dernier recensement général, celui de 2005 (43 402 en 1987), dans une ville qui a depuis continué de croître",
        source: "BUCREP / INS Cameroun, recensements de 1987 et 2005, tels que compilés par citypopulation.de",
      },
      {
        value: "1 283 800",
        label: "habitants projetés dans la région de l'Est au 1er janvier 2025, contre 771 755 au recensement de 2005 (projection statistique, non un recensement)",
        source: "BUCREP / INS Cameroun, projections de population, compilées par citypopulation.de",
      },
      {
        value: "75 %",
        label: "de première transformation locale du bois, avec un objectif de 100 % après l'interdiction d'exporter les grumes dans la zone CEMAC",
        source: "Ministère des Forêts et de la Faune (MINFOF), atelier de Bertoua rapporté par EcoMatin, mai 2021",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les volumes de bois d'une petite exploitation",
        texte:
          "Pour une entreprise qui achemine du bois vers Douala, relier chaque chargement à sa provenance, à son volume et à ses documents facilite les comptes et les contrôles, surtout avec la montée de la transformation locale. C'est un travail pour notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Organiser les achats de cacao et de café auprès des planteurs",
        texte:
          "Un acheteur qui collecte auprès de nombreux planteurs doit suivre poids, avances et paiements, village par village. Nous l'abordons avec notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Piloter les rotations d'une entreprise de transport longue distance",
        texte:
          "Le transport domine l'emploi informel de la ville, et les trajets entre l'Est, Yaoundé, Douala et la frontière centrafricaine multiplient départs, recettes et entretiens à suivre. Un tableau de bord simple en réduit les pertes. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence physique à Bertoua ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Bertoua : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence, messagerie et documents partagés.",
      },
      {
        question: "Peut-on travailler à distance malgré une connexion parfois instable ?",
        answer:
          "Oui. Nous privilégions des outils légers, utilisables depuis un téléphone et capables de fonctionner avec une connexion limitée, et nous adaptons le rythme des échanges à votre réalité.",
      },
      {
        question: "Quels types d'entreprises de l'Est accompagnez-vous ?",
        answer:
          "Des PME de la filière bois, du négoce agricole, du transport et du commerce, ainsi que des ONG et associations présentes dans la région. Le besoin le plus fréquent est de remplacer les cahiers et tableurs par un suivi partagé et fiable, sans bouleverser les habitudes de l'équipe.",
      },
      {
        question: "Disposez-vous de chiffres sur l'économie de Bertoua ou sur la présence humanitaire ?",
        answer:
          "Nous n'avons pas pu vérifier de chiffres récents et propres à la ville, comme le nombre d'entreprises, les volumes de bois ou la population réfugiée accueillie dans l'Est, et préférons ne pas en citer. Le dernier recensement général date de 2005 : les chiffres plus récents sont des projections. Pour les données à jour, rapprochez-vous de l'INS, du ministère des Forêts et de la Faune ou du HCR.",
      },
    ],
  },
  // ---- ÉDÉA
  {
    paysSlug: "cameroun",
    villeSlug: "edea",
    villeName: "Édéa",
    metaDescription:
      "Audyxa accompagne à distance les entreprises d'Édéa : sous-traitants d'Alucam, énergie hydroélectrique de la Sanaga et transport sur l'axe Douala-Yaoundé.",
    resume:
      "Édéa, chef-lieu du département de la Sanaga-Maritime dans la région du Littoral, s'est développée depuis les années 1950 autour d'une zone industrielle bâtie sur la Sanaga. Elle abrite l'usine d'aluminium d'Alucam, en activité depuis 1957, et les centrales hydroélectriques de la Sanaga alimentent le réseau du Sud. La ville se trouve à environ 61 km de Douala, sur la route nationale 3 et la ligne de chemin de fer vers Yaoundé. Audyxa intervient à distance auprès des PME, sous-traitants, transporteurs et commerces qui gravitent autour de ces activités.",
    coupDoeil: [
      "Alucam produit de l'aluminium primaire à Édéa depuis 1957 : la production est passée de 73 759 tonnes en 2017 à 34 431 tonnes en 2021, et l'avenir de l'entreprise (recapitalisation, offres de repreneurs) reste en discussion, ce qui touche tout un tissu de sous-traitants.",
      "Sur la Sanaga, la centrale de Songloulou (384 MW) fournissait 35 % de l'énergie du réseau interconnecté Sud au premier trimestre 2025 et celle d'Édéa 21 %.",
      "Édéa est desservie par le train express Douala-Yaoundé et par la route nationale 3, dont la reconstruction du tronçon Yaoundé-Édéa (167 km) a fait l'objet d'un appel d'offres en octobre 2026.",
    ],
    faits: [
      {
        value: "78 300",
        label:
          "habitants dans les deux arrondissements d'Édéa (Édéa I : 64 761 ; Édéa II : 13 539) au recensement de 2005",
        source: "BUCREP, 3e recensement général de la population et de l'habitat, 2005",
      },
      {
        value: "384 MW",
        label:
          "de puissance installée à Songloulou, huit groupes sur la Sanaga en amont d'Édéa, soit 35 % de l'énergie du réseau Sud au 1er trimestre 2025",
        source: "Business in Cameroon, article sur le barrage de Songloulou, mai 2025",
      },
      {
        value: "73 759 t → 34 431 t",
        label:
          "production d'aluminium primaire d'Alucam entre 2017 et 2021, soit une baisse de 53 %",
        source: "Chambre des comptes de la Cour suprême, rapport d'audit sur Alucam, avril 2025",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les interventions d'un sous-traitant industriel",
        texte:
          "Un atelier de maintenance, de chaudronnerie ou de fourniture de pièces qui travaille pour un grand site industriel doit suivre devis, interventions et factures. Quand l'activité du donneur d'ordre varie, comme chez Alucam, relier ces étapes dans un outil simple limite les oublis et accélère l'encaissement. C'est un travail pour notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Organiser les rotations d'un transporteur sur l'axe Douala-Yaoundé",
        texte:
          "Sur la route nationale 3, le suivi des départs, des chargements, des recettes et de l'entretien des camions se fait souvent à la main. Un tableau de bord partagé réduit les pertes et facilite les comptes. Nous l'abordons avec notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Suivre le stock et les crédits clients d'un commerce de proximité",
        texte:
          "Pour un commerce qui sert les familles et les employés des sites industriels, noter les entrées de stock, les ventes et les crédits clients permet de mieux piloter la trésorerie. Nous l'abordons avec notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence physique à Édéa ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Édéa : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence, messagerie et partage d'écran.",
      },
      {
        question: "Comment travailler à distance avec une PME ou un sous-traitant d'Édéa ?",
        answer:
          "Nous commençons par un échange pour comprendre vos flux : devis, commandes, stocks, facturation. Nous proposons ensuite des outils légers, utilisables depuis un téléphone et tolérants à une connexion limitée, puis nous formons vos équipes à distance.",
      },
      {
        question: "L'incertitude autour d'Alucam change-t-elle quelque chose pour un sous-traitant ?",
        answer:
          "Quand un donneur d'ordre ralentit ou change de gouvernance, un suivi précis des interventions, des créances et de la trésorerie devient plus important. Un outil simple vous aide à anticiper les retards de paiement et à diversifier vos clients.",
      },
      {
        question: "Disposez-vous de chiffres récents sur l'économie d'Édéa ?",
        answer:
          "Le dernier chiffre de population que nous avons pu vérifier date du recensement de 2005 ; nous n'avons pas trouvé de donnée plus récente et fiable sur l'emploi ou le nombre d'entreprises de la ville, et préférons ne pas en citer. Les données officielles se consultent auprès de l'Institut national de la statistique du Cameroun.",
      },
    ],
  },
  // ---- KRIBI
  {
    paysSlug: "cameroun",
    villeSlug: "kribi",
    villeName: "Kribi",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Kribi : port en eau profonde, transit et logistique, zone industrielle, pêche, hôtellerie et tourisme balnéaire.",
    resume:
      "Audyxa accompagne à distance les entreprises de Kribi, ville balnéaire du Sud du Cameroun devenue l'un des principaux pôles portuaires et industriels du pays. Autour du port en eau profonde, de la zone industrielle en développement, de la pêche artisanale et du tourisme des chutes de la Lobé, transitaires, hôteliers, restaurateurs et PME locales jonglent entre réservations, dossiers et stocks souvent suivis sur papier ou tableur. Nous aidons ces structures à relier leurs données et à automatiser leurs tâches répétitives, sans changer leur façon de travailler du jour au lendemain.",
    coupDoeil: [
      "Le port en eau profonde de Kribi a mis en service un second terminal à conteneurs le 9 mai 2025, avec un quai plus long, capable d'accueillir de plus grands navires.",
      "Une centrale à gaz de 216 MW, développée par Kribi Power Development Company, a été conçue pour renforcer l'approvisionnement électrique du pays, y compris en saison sèche.",
      "Les chutes de la Lobé, où une rivière se jette dans l'océan, et les plages de Grand Batanga ou de Londji attirent surtout des visiteurs venus de Douala et de Yaoundé.",
    ],
    faits: [
      {
        value: "555 398 EVP",
        label: "de conteneurs traités par le port de Kribi en 2025, soit 37,5 % du trafic conteneurisé national",
        source: "Port autonome de Kribi, bilan 2025 relayé par EcoMatin",
      },
      {
        value: "12,7 millions de tonnes",
        label: "de marchandises manutentionnées par le port de Kribi en 2024, contre 10,7 millions en 2023",
        source: "Port autonome de Kribi, comptes 2024 relayés par EcoMatin et Business in Cameroon",
      },
      {
        value: "70 565 habitants",
        label: "dans l'espace urbain de Kribi (arrondissements de Kribi Ier et Kribi IIe) lors du dernier recensement, en 2005",
        source: "BUCREP/INS Cameroun, recensement général 2005, via Wikipédia",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les réservations d'un hôtel ou d'une résidence balnéaire",
        texte:
          "Une grande partie des visiteurs de Kribi viennent de Douala et de Yaoundé, souvent le temps d'un week-end. Un établissement qui reçoit par téléphone, messagerie et agences peut perdre des réservations ou en doubler. Un calendrier partagé et des confirmations automatiques évitent ces erreurs. Nous l'abordons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Organiser les enlèvements d'un transitaire ou d'un transporteur",
        texte:
          "Avec un port qui traite des conteneurs et un terminal polyvalent, un transitaire coordonne dédouanement, camions et livraisons, souvent par appels et messages dispersés. Un suivi clair de chaque dossier réduit les attentes et les litiges. C'est le rôle de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Tenir la comptabilité d'un groupement de pêcheurs et de mareyeurs",
        texte:
          "Quand le poisson est acheté au débarquement, par exemple dans un village de pêcheurs comme Londji, puis revendu en frais ou fumé, relier chaque achat, chaque vente et chaque avance au bon acteur aide à connaître la vraie marge. C'est un travail pour notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence physique à Kribi ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kribi : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et messagerie.",
      },
      {
        question: "Une petite structure touristique peut-elle se digitaliser simplement ?",
        answer:
          "Oui. Nous partons de vos outils actuels (cahier, tableur, messagerie) et ne changeons que ce qui vous fait perdre du temps ou des clients, étape par étape, sans arrêter l'activité.",
      },
      {
        question: "Travaillez-vous avec les entreprises installées autour du port ?",
        answer:
          "Nous intervenons sur l'organisation interne de l'entreprise (suivi des dossiers, documents, relances, stocks), pas sur les systèmes douaniers ou portuaires officiels, que nous ne pouvons ni modifier ni remplacer.",
      },
      {
        question: "Disposez-vous de chiffres récents sur la population de Kribi ?",
        answer:
          "Le dernier recensement complet date de 2005 et dénombrait 70 565 habitants dans l'espace urbain. Des projections circulent pour les années suivantes, mais nous n'avons pas trouvé d'estimation officielle récente et préférons ne pas en citer.",
      },
    ],
  },
  // ---- DSCHANG
  {
    paysSlug: "cameroun",
    villeSlug: "dschang",
    villeName: "Dschang",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Dschang, ville universitaire de la Menoua : maraîchage, élevage, commerce, hôtellerie et établissements privés.",
    resume:
      "Audyxa accompagne à distance les entreprises de Dschang, chef-lieu du département de la Menoua dans la région de l'Ouest. Ancienne terre de café reconvertie en grande partie vers le maraîchage, la ville abrite aussi l'Université de Dschang, ce qui fait vivre un tissu de commerces, de logements, d'écoles privées et de petits hébergements. Beaucoup de ces structures gèrent encore récoltes, stocks, inscriptions et réservations sur cahier ou tableur, et gagneraient à des outils simples et partagés.",
    coupDoeil: [
      "Dschang est le chef-lieu de la Menoua, deuxième ville de la région de l'Ouest après Bafoussam, à environ 45 minutes de route de celle-ci et à quatre heures de Douala.",
      "Après la crise du café de la fin des années 1980, les producteurs de l'arrondissement se sont largement tournés vers le maraîchage, la tomate devenant la culture dominante ; l'élevage porcin y est aussi répandu.",
      "Le rectorat de l'Université de Dschang se trouve sur les hauteurs de la ville, seule université d'État camerounaise installée dans un chef-lieu de département ; le lac municipal et l'ancien centre climatique de 1942 nourrissent un tourisme de fraîcheur.",
    ],
    faits: [
      {
        value: "101 385 habitants",
        label: "dans l'arrondissement de Dschang lors du recensement de 2005, dont 63 161 en zone urbaine (dernier recensement complet du pays)",
        source: "Bureau central des recensements et des études de population (BUCREP), recensement général 2005, repris par City Population",
      },
      {
        value: "23 000 étudiants",
        label: "régulièrement inscrits à l'Université de Dschang en 2022-2023, dont environ 2 000 étrangers, notamment tchadiens",
        source: "Cameroon Tribune, article sur la rentrée universitaire, 16 octobre 2023",
      },
      {
        value: "5 548 à 26 829 tonnes",
        label: "de tomates produites dans la Menoua, entre la campagne 1998-1999 et la campagne 2008, pour des surfaces passées d'environ 499 à 1 781 hectares",
        source: "AGRI-STATS (annuaire des statistiques agricoles du Cameroun), cité dans un mémoire de l'École normale supérieure de Yaoundé, 2016",
      },
    ],
    casUsage: [
      {
        titre: "Suivre récoltes, clients et marges d'une exploitation maraîchère",
        texte:
          "Pour un producteur de tomates ou un groupement qui vend sur plusieurs marchés, consigner chaque récolte, chaque acheteur et chaque paiement dans un outil simple, utilisable depuis un téléphone, évite les pertes et fait apparaître les marges réelles par cycle de production. C'est un travail pour notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Centraliser dossiers et frais de scolarité d'un établissement privé",
        texte:
          "Avec une communauté universitaire importante, les écoles privées, centres de formation et instituts rattachés jonglent entre dossiers d'inscription, échéances de frais et relances. Regrouper ces suivis dans un même outil allège le secrétariat et sécurise les encaissements. Nous l'abordons avec notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
      {
        titre: "Éviter les doubles réservations dans un hôtel ou une auberge",
        texte:
          "Pour un petit établissement qui reçoit des familles d'étudiants, des visiteurs de passage ou des touristes attirés par le lac et les montagnes, un calendrier de réservations partagé et des confirmations envoyées automatiquement limitent les erreurs. C'est le rôle de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence physique à Dschang ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Dschang : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés, sans déplacement nécessaire.",
      },
      {
        question: "Une petite exploitation ou un commerce peut-il se digitaliser simplement ?",
        answer:
          "Oui. Nous partons de vos habitudes (cahiers, tableur, messagerie) et ne remplaçons que ce qui pose réellement problème, étape par étape. Les outils proposés fonctionnent sur un simple téléphone et supportent une connexion irrégulière.",
      },
      {
        question: "Travaillez-vous avec des établissements liés à l'université ?",
        answer:
          "Oui, pour la partie administrative : suivi des inscriptions, des paiements et de la communication avec les familles dans des écoles, instituts ou centres de formation privés. Nous n'intervenons pas sur le contenu pédagogique ni au nom de l'Université de Dschang.",
      },
      {
        question: "Disposez-vous de chiffres récents sur le maraîchage ou l'économie de Dschang ?",
        answer:
          "Pas de chiffre officiel récent : les statistiques agricoles que nous avons retrouvées pour la Menoua s'arrêtent à 2008, et le dernier recensement complet date de 2005. Nous préférons ne pas citer d'estimation douteuse ; les données à jour se consultent auprès de la délégation départementale de l'Agriculture et du Développement rural de la Menoua.",
      },
    ],
  },
];
