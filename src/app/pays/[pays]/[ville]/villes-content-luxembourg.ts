/**
 * Contenu curaté des 10 pages villes du Luxembourg.
 *
 * Règle anti-invention : chaque chiffre porte sa source réelle (organisme +
 * année), vérifiée par recherche web le 9 octobre 2026. Quand une donnée
 * fiable et récente n'a pas été trouvée (par exemple l'emploi par commune ou
 * le nombre d'étudiants à Belval), le texte reste qualitatif.
 * Audyxa n'a aucun bureau au Luxembourg : l'intervention se fait à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_LUXEMBOURG: VilleContent[] = [
  // ------------------------------------------------------- LUXEMBOURG-VILLE
  {
    paysSlug: "luxembourg",
    villeSlug: "luxembourg-ville",
    villeName: "Luxembourg-ville",
    metaDescription:
      "Audyxa accompagne à distance les acteurs de la place financière de Luxembourg-ville : audit digital, automatisation, IA encadrée et sécurité des données.",
    resume:
      "Luxembourg-ville concentre un cinquième de la population du pays et abrite une place financière de premier plan, ainsi que des institutions européennes. Audyxa y intervient à distance auprès de sociétés de services, de gestionnaires et de prestataires qui veulent alléger leurs processus et cadrer l'usage de l'IA sur des données sensibles.",
    coupDoeil: [
      "La commune représente environ 20 % de la population du pays, avec une forte part de résidents de nationalité étrangère, ce qui impose souvent des outils et documents en plusieurs langues.",
      "La gestion de fonds, la banque et les services qui les entourent structurent l'économie de la capitale, avec des exigences élevées en matière de traçabilité et de confidentialité.",
    ],
    faits: [
      {
        value: "136 161",
        label: "habitants dans la commune de Luxembourg au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
      {
        value: "73 272",
        label: "personnes employées directement dans le secteur financier luxembourgeois fin 2024",
        source: "Luxembourg for Finance, chiffres de fin 2024",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser la collecte de pièces pour des dossiers réglementés",
        texte:
          "Pour une société de gestion ou un prestataire de services aux fonds, les relances et la collecte de documents auprès de clients et de contreparties occupent beaucoup de temps. Relier les boîtes mail, un espace de dépôt et un tableau de suivi réduit les oublis. C'est l'objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
      {
        titre: "Encadrer un assistant IA sur des données confidentielles",
        texte:
          "Avant de généraliser un assistant IA dans une équipe qui manipule des données de clients, il faut définir ce qui peut lui être transmis, où les données sont traitées et qui valide les usages. Nous aidons à poser ce cadre dans notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "accompagnement IA en entreprise",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
      {
        titre: "Simplifier les circuits d'un cabinet ou d'une fiduciaire",
        texte:
          "Pour un cabinet comptable qui jongle entre plusieurs outils de saisie, de facturation et de reporting, une cartographie des circuits fait apparaître les ressaisies inutiles. Nous la réalisons dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "cabinets-comptables",
        sectorAnchor: "cabinets comptables",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Luxembourg-ville ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nos missions se déroulent à distance, par visioconférence et partage d'écran, avec un diagnostic cadré dans le temps avant tout engagement plus long.",
      },
      {
        question: "Pouvez-vous intervenir sur des sujets soumis à la régulation financière ?",
        answer:
          "Nous travaillons sur l'organisation, les outils et les flux de données, pas sur l'interprétation des textes réglementaires. Les exigences de la CSSF restent du ressort de vos équipes de conformité et de vos conseils juridiques.",
      },
      {
        question: "Vos documents peuvent-ils être livrés en plusieurs langues ?",
        answer:
          "Notre langue de travail est le français. Nous pouvons prévoir des modèles de documents et des outils qui acceptent plusieurs langues de saisie, selon vos besoins réels et sans promesse de traduction automatique parfaite.",
      },
    ],
  },
  // ---------------------------------------------------- ESCH-SUR-ALZETTE
  {
    paysSlug: "luxembourg",
    villeSlug: "esch-sur-alzette",
    villeName: "Esch-sur-Alzette",
    metaDescription:
      "À Esch-sur-Alzette et Belval, Audyxa épaule à distance PME, commerces et organismes de recherche : outils métier, processus, données et IA, avec un diagnostic clair.",
    resume:
      "Deuxième commune du pays, Esch-sur-Alzette est l'ancienne capitale de la sidérurgie reconvertie vers l'enseignement supérieur, la recherche et les services, notamment sur le site de Belval. Audyxa y accompagne à distance des organisations qui veulent structurer leurs outils et leurs données sans alourdir leurs équipes.",
    coupDoeil: [
      "Le site de Belval, ancienne friche sidérurgique, a été choisi en 2005 par le gouvernement comme siège unique de l'Université du Luxembourg, à l'exception de la faculté de droit.",
      "La commune est l'une des principales portes d'entrée de nouveaux résidents internationaux, ce qui nourrit une demande constante de services en plusieurs langues.",
    ],
    faits: [
      {
        value: "37 922",
        label: "habitants à Esch-sur-Alzette au 1er janvier 2025, deuxième commune du pays",
        source: "STATEC, population au 1er janvier 2025",
      },
      {
        value: "1 633",
        label: "arrivées d'immigrants internationaux à Esch-sur-Alzette en 2024, plus que dans toute autre commune hors capitale",
        source: "STATEC, population en chiffres 2025 (données 2024)",
      },
    ],
    casUsage: [
      {
        titre: "Outiller un laboratoire ou un centre de recherche",
        texte:
          "Pour une équipe de recherche ou un service de transfert de technologie, suivre les projets, les financements et les échéances dans plusieurs fichiers devient vite fragile. Un outil sur mesure, simple à prendre en main, centralise l'essentiel. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
      {
        titre: "Moderniser la gestion d'un commerce ou d'un restaurant du centre",
        texte:
          "Pour un commerce de la rue de l'Alzette qui vend en boutique et en ligne, relier stocks, caisse et comptabilité évite les doubles saisies. Nous cadrons ce chantier dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Accompagner une entreprise qui prolonge l'héritage industriel",
        texte:
          "Pour une PME de sous-traitance ou de maintenance liée à l'industrie de la région, un audit de ses outils de devis, de planning et de suivi qualité aide à décider quoi simplifier en premier. Nous le menons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Esch-sur-Alzette ou à Belval ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nous intervenons à distance, avec des points réguliers en visioconférence, ce qui convient bien à des équipes réparties entre plusieurs sites.",
      },
      {
        question: "Travaillez-vous avec des institutions de recherche ou d'enseignement ?",
        answer:
          "Nous pouvons les accompagner sur leurs outils internes, la circulation des données et l'usage raisonné de l'IA. Les règles propres à chaque établissement, notamment sur les données de recherche, restent à valider avec leurs services compétents.",
      },
      {
        question: "Une petite structure peut-elle faire appel à vous ?",
        answer:
          "Oui. Un diagnostic court permet de repérer les deux ou trois changements les plus utiles avant d'engager un budget plus important. Rien n'oblige à poursuivre ensuite.",
      },
    ],
  },
  // ------------------------------------------------------------ DIFFERDANGE
  {
    paysSlug: "luxembourg",
    villeSlug: "differdange",
    villeName: "Differdange",
    metaDescription:
      "Audyxa aide à distance les entreprises de Differdange, ville de l'acier et des poutrelles : pilotage de projets, outils métier, processus et données bien maîtrisés.",
    resume:
      "Differdange est une ville marquée par l'acier : son usine produit toujours des poutrelles de grande taille, et la commune a vu se succéder les vagues d'arrivants venus travailler dans l'industrie. Audyxa y intervient à distance pour aider les entreprises industrielles et leurs sous-traitants à mieux relier atelier, bureau et gestion.",
    coupDoeil: [
      "Le site sidérurgique de Differdange est réputé pour ses poutrelles très grandes, utilisées dans la construction de bâtiments de grande hauteur, selon le gouvernement luxembourgeois (2021).",
      "La ville est, avec Esch-sur-Alzette, l'une des communes qui accueillent le plus de nouveaux arrivants internationaux chaque année.",
    ],
    faits: [
      {
        value: "30 789",
        label: "habitants à Differdange au 1er janvier 2025, troisième commune du pays",
        source: "STATEC, population au 1er janvier 2025",
      },
      {
        value: "1 188",
        label: "arrivées d'immigrants internationaux à Differdange en 2024",
        source: "STATEC, population en chiffres 2025 (données 2024)",
      },
    ],
    casUsage: [
      {
        titre: "Relier le planning d'atelier et la gestion commerciale",
        texte:
          "Pour un sous-traitant de la métallurgie qui reçoit des commandes par mail et planifie sur tableur, un lien simple entre devis, ordres de fabrication et facturation limite les erreurs. Nous le concevons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Piloter un projet de transformation avec peu de temps disponible",
        texte:
          "Dans une entreprise où les responsables sont mobilisés par la production, un chef de projet externe, à distance, tient le calendrier, relance les décisions et rend des comptes simples. C'est la mission de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
      {
        titre: "Clarifier les échanges avec des équipes multilingues",
        texte:
          "Pour une entreprise dont les salariés parlent plusieurs langues, des consignes et formulaires clairs, accessibles depuis un téléphone, réduisent les malentendus. Nous aidons à les repenser dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Differdange ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nos missions sont menées à distance, avec des échanges réguliers par visioconférence et, si nécessaire, des ateliers à partager en ligne avec vos équipes.",
      },
      {
        question: "Intervenez-vous dans les ateliers ou sur les machines ?",
        answer:
          "Non. Nous travaillons sur les outils de gestion, les données et les processus administratifs et de suivi. La conduite des machines et les systèmes de contrôle industriels ne relèvent pas de notre périmètre.",
      },
      {
        question: "Une PME sous-traitante peut-elle bénéficier d'un diagnostic court ?",
        answer:
          "Oui. Un diagnostic de quelques jours suffit souvent à faire ressortir les ressaisies et les relances qui coûtent le plus de temps, avant de décider de ce qui mérite un développement.",
      },
    ],
  },
  // ------------------------------------------------------------- DUDELANGE
  {
    paysSlug: "luxembourg",
    villeSlug: "dudelange",
    villeName: "Dudelange",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Dudelange, cité sidérurgique devenue culturelle : automatisation, outils métier, données et IA cadrée, sans bureau local.",
    resume:
      "Dudelange est une ville du sud du pays où l'acier plat et la galvanisation ont longtemps fait vivre la population, et où d'anciens sites industriels accueillent aujourd'hui des activités culturelles. Audyxa intervient à distance pour aider PME, artisans et associations à gagner du temps sur leur gestion quotidienne.",
    coupDoeil: [
      "Le Centre national de l'audiovisuel, installé sur l'ancien site industriel de l'Arbed, conserve et expose le patrimoine photographique et audiovisuel du pays.",
      "L'unité de galvanisation de Dudelange a été créée en 1980 et employait environ 300 personnes lors de sa mise en vente par ArcelorMittal, d'après Paperjam.",
    ],
    faits: [
      {
        value: "22 203",
        label: "habitants à Dudelange au 1er janvier 2025, quatrième commune du pays",
        source: "STATEC, population au 1er janvier 2025",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser le suivi des devis d'un artisan ou d'une petite entreprise",
        texte:
          "Pour une entreprise du bâtiment ou de l'installation qui prépare ses devis à la main, relier modèle de devis, facturation et relances de paiement fait gagner des heures chaque semaine. Nous le mettons en place dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
      {
        titre: "Soutenir une association culturelle ou sportive",
        texte:
          "Pour une association qui gère adhérents, réservations de salles et événements dans plusieurs fichiers, un outil unique et simple d'usage allège le travail des bénévoles. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Faire le point sur les outils d'une PME industrielle",
        texte:
          "Pour une entreprise de transformation ou de traitement de surface, un audit des logiciels utilisés, des droits d'accès et des sauvegardes donne une liste courte de priorités. Nous le conduisons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Dudelange ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Tout se déroule à distance, par visioconférence et partage d'écran, ce qui évite les déplacements pour des équipes de petite taille.",
      },
      {
        question: "Une association peut-elle faire appel à vous ?",
        answer:
          "Oui. Nous pouvons l'aider à clarifier ses outils et ses échanges de données. Nous annonçons d'emblée l'étendue du travail pour qu'elle puisse décider si le budget correspond à ses moyens.",
      },
      {
        question: "Que couvre un audit de sécurité de base ?",
        answer:
          "Il passe en revue les accès, les sauvegardes, les mots de passe et les usages de messagerie. Ce n'est pas un test d'intrusion, qui relève de spécialistes de la sécurité offensive.",
      },
    ],
  },
  // ------------------------------------------------------------ ETTELBRUCK
  {
    paysSlug: "luxembourg",
    villeSlug: "ettelbruck",
    villeName: "Ettelbruck",
    metaDescription:
      "Audyxa intervient à distance à Ettelbruck : santé, enseignement et commerces de la Nordstad, avec des outils simples, des données mieux tenues et un diagnostic cadré.",
    resume:
      "Ettelbruck est un pôle de santé et d'enseignement pour le nord du pays, avec un centre hospitalier, des établissements spécialisés et un grand lycée technique. Audyxa y intervient à distance auprès de structures de taille modeste qui veulent mieux organiser leurs échanges et leurs dossiers.",
    coupDoeil: [
      "La commune accueille le Centre hospitalier du Nord, né en 2010 de la fusion de l'hôpital Saint-Louis d'Ettelbruck et de la clinique Saint-Joseph de Wiltz.",
      "Le lycée technique d'Ettelbruck comptait environ 2 050 élèves en 2025, selon un rapport parlementaire de 2026 qui évoque un manque de place dans le bâtiment principal.",
    ],
    faits: [
      {
        value: "10 149",
        label: "habitants à Ettelbruck au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
      {
        value: "+222",
        label: "solde migratoire international d'Ettelbruck en 2024, parmi les dix communes les plus élevées du pays",
        source: "STATEC, population en chiffres 2025 (données 2024)",
      },
    ],
    casUsage: [
      {
        titre: "Organiser les rendez-vous d'un cabinet paramédical",
        texte:
          "Pour un cabinet de kinésithérapie, de soins ou de conseil santé installé près de l'hôpital, un système de rendez-vous et de rappels réduit les absences et les appels. Nous le cadrons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "sante",
        sectorAnchor: "santé",
      },
      {
        titre: "Alléger la gestion administrative d'un établissement de formation",
        texte:
          "Pour un organisme de formation ou une école privée, centraliser inscriptions, présences et documents évite de rechercher l'information dans plusieurs boîtes mail. Nous accompagnons ce travail dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Soutenir un commerce de proximité",
        texte:
          "Pour un commerce qui souhaite vendre aussi en ligne, un état des lieux de ses outils de caisse et de stocks indique ce qu'il est raisonnable de relier. Nous le menons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Ettelbruck ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nous travaillons à distance, ce qui permet de servir aussi les structures du nord du pays sans déplacement.",
      },
      {
        question: "Pouvez-vous traiter des données de santé ?",
        answer:
          "Nous pouvons aider à organiser les outils et à définir qui accède à quoi, mais nous ne remplaçons pas votre responsable de la protection des données. Les règles sur les données de santé exigent un avis spécialisé.",
      },
      {
        question: "Travaillez-vous avec de très petites structures ?",
        answer:
          "Oui. Nous préférons une première étape courte et bien délimitée, afin d'éviter qu'une petite structure s'engage sur un projet disproportionné.",
      },
    ],
  },
  // -------------------------------------------------------------- DIEKIRCH
  {
    paysSlug: "luxembourg",
    villeSlug: "diekirch",
    villeName: "Diekirch",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Diekirch : tourisme, musées, brasserie et commerces de la vallée de la Sûre, avec des outils pratiques et sobres.",
    resume:
      "Diekirch, petite ville de la vallée de la Sûre, vit de son patrimoine, de ses musées et d'une tradition brassicole connue. Audyxa y intervient à distance auprès de commerces, d'hébergeurs et de structures culturelles qui souhaitent simplifier leur gestion au quotidien.",
    coupDoeil: [
      "Le Musée national d'histoire militaire, installé dans l'ancienne brasserie, est consacré à la bataille des Ardennes de l'hiver 1944-1945.",
      "Le Musée d'histoire de la brasserie Diekirch rassemble environ mille pièces publicitaires, dont des enseignes lumineuses et des lithographies.",
    ],
    faits: [
      {
        value: "7 336",
        label: "habitants à Diekirch au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les réservations d'un hébergement ou d'un restaurant",
        texte:
          "Pour un petit hôtel ou un restaurant qui reçoit des visiteurs de la vallée de la Sûre, centraliser les demandes venues de plusieurs canaux limite les doubles réservations. Nous le mettons en place dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Valoriser une collection ou un musée avec des outils simples",
        texte:
          "Pour une structure culturelle qui tient son inventaire, ses visites et ses billets dans des fichiers dispersés, un outil unique facilite le travail d'une équipe réduite. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Structurer l'usage de l'IA dans un commerce local",
        texte:
          "Pour un commerçant qui souhaite rédiger plus vite ses descriptions de produits et ses réponses clients, quelques règles claires évitent les erreurs et la diffusion de données personnelles. Nous les posons dans notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "accompagnement IA en entreprise",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Diekirch ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Les échanges se font à distance, ce qui convient à des structures dont les responsables ont peu de temps à consacrer aux déplacements.",
      },
      {
        question: "Les petites structures culturelles entrent-elles dans votre périmètre ?",
        answer:
          "Oui, à condition que le besoin porte sur l'organisation, les outils ou les données. Nous annonçons clairement ce qui est faisable dans un budget limité.",
      },
      {
        question: "Faut-il un gros budget pour commencer ?",
        answer:
          "Non. Un diagnostic court et borné suffit pour savoir où se situent les gains les plus nets, et il peut s'arrêter là si cela ne vous convient pas.",
      },
    ],
  },
  // ----------------------------------------------------------------- WILTZ
  {
    paysSlug: "luxembourg",
    villeSlug: "wiltz",
    villeName: "Wiltz",
    metaDescription:
      "Audyxa accompagne à distance Wiltz et les Ardennes luxembourgeoises : tourisme, festival, économie circulaire et petites structures, avec des solutions concrètes.",
    resume:
      "Wiltz est une petite ville des Ardennes luxembourgeoises, connue pour son château et son festival d'été, et engagée depuis plusieurs années dans l'économie circulaire. Audyxa intervient à distance auprès d'acteurs locaux qui veulent mieux organiser leurs activités, sans outils démesurés.",
    coupDoeil: [
      "Le Festival de Wiltz, créé en 1953, se joue chaque été sur l'escalier du château, qui sert de scène.",
      "La commune est identifiée comme pôle d'économie circulaire au Luxembourg depuis 2015, d'après les informations relayées par ses partenaires locaux.",
    ],
    faits: [
      {
        value: "8 310",
        label: "habitants à Wiltz au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
    ],
    casUsage: [
      {
        titre: "Coordonner la billetterie et les bénévoles d'un festival",
        texte:
          "Pour un événement annuel qui repose sur des bénévoles, un outil de planning, de contacts et de suivi des fournisseurs évite de tout reconstruire chaque année. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Aider un hébergeur de randonnée à gérer ses séjours",
        texte:
          "Pour un gîte, une auberge ou un camping des Ardennes, relier calendrier, paiements et messages aux clients limite les oublis en haute saison. Nous le mettons en place dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Suivre les flux d'une activité de réemploi ou de réparation",
        texte:
          "Pour une petite structure de réemploi, de collecte ou de réparation, suivre les entrées, les sorties et les ventes dans un même tableau donne une vue claire de l'activité. Nous le cadrons dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "energie",
        sectorAnchor: "énergie",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Wiltz ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Notre intervention à distance permet de servir aussi des communes éloignées des grands centres, sans frais de déplacement.",
      },
      {
        question: "Travaillez-vous avec les associations qui organisent des événements ?",
        answer:
          "Oui, pour leurs outils de planning, de contacts et de suivi. Nous n'intervenons pas sur la programmation artistique ni sur la communication de l'événement.",
      },
      {
        question: "Un projet dans une petite commune est-il trop modeste pour vous ?",
        answer:
          "Non. Nous préférons un projet bien dimensionné, même petit, à un chantier trop large. Nous le disons franchement lors du premier échange si le besoin ne justifie pas notre intervention.",
      },
    ],
  },
  // ------------------------------------------------------------- ECHTERNACH
  {
    paysSlug: "luxembourg",
    villeSlug: "echternach",
    villeName: "Echternach",
    metaDescription:
      "Audyxa travaille à distance avec Echternach, ville de l'abbaye et de la procession dansante : tourisme, patrimoine et commerces, avec des outils clairs.",
    resume:
      "Echternach, ville de l'abbaye fondée par saint Willibrord, vit du patrimoine, du tourisme et d'une procession dansante célèbre. Audyxa y intervient à distance pour aider hébergeurs, commerçants et structures culturelles à gérer les périodes de forte affluence avec des outils simples.",
    coupDoeil: [
      "La procession dansante d'Echternach, qui a lieu le mardi de Pentecôte, est inscrite depuis 2010 sur la Liste représentative du patrimoine culturel immatériel de l'humanité de l'UNESCO.",
      "L'abbaye bénédictine, fondée en 698 par saint Willibrord, fut au Moyen Âge un grand centre d'enluminure.",
    ],
    faits: [
      {
        value: "5 936",
        label: "habitants à Echternach au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
      {
        value: "2010",
        label: "année d'inscription de la procession dansante au patrimoine culturel immatériel de l'humanité",
        source: "UNESCO, liste représentative du patrimoine culturel immatériel",
      },
    ],
    casUsage: [
      {
        titre: "Absorber les pics de réservations autour de la procession",
        texte:
          "Pour un hôtel, un restaurant ou un gîte, la période de Pentecôte concentre les demandes en quelques jours. Un circuit clair de réponse et de confirmation évite les messages perdus. Nous le concevons dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Organiser la gestion de visites et de groupes",
        texte:
          "Pour une structure qui accueille des groupes scolaires ou des pèlerins, centraliser les demandes, les créneaux et les confirmations évite les doublons. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Faire le point sur la présence en ligne d'un commerce du centre",
        texte:
          "Pour un commerce ou un artisan du centre ancien qui s'appuie sur la clientèle touristique, un état des lieux de ses fiches en ligne et de ses outils de vente donne des priorités réalistes. Nous le menons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Echternach ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nous intervenons à distance, y compris pour les structures situées à la frontière allemande qui travaillent avec une clientèle de plusieurs pays.",
      },
      {
        question: "Gérez-vous la communication autour des événements locaux ?",
        answer:
          "Non. Nous nous concentrons sur les outils, les données et les processus internes. La communication et la programmation d'un événement relèvent d'autres métiers.",
      },
      {
        question: "Pouvez-vous aider une structure qui n'est active que quelques mois par an ?",
        answer:
          "Oui. Un outil simple, qu'on rouvre sans effort chaque saison, convient mieux qu'une solution lourde. Nous pensons la prise en main en conséquence.",
      },
    ],
  },
  // ------------------------------------------------------------- RUMELANGE
  {
    paysSlug: "luxembourg",
    villeSlug: "rumelange",
    villeName: "Rumelange",
    metaDescription:
      "Audyxa accompagne à distance Rumelange, ancienne ville minière du sud : patrimoine, petites entreprises et associations, avec des solutions modestes et utiles.",
    resume:
      "Rumelange est une petite commune du sud du pays, née de l'extraction du minerai de fer, dont l'histoire se raconte aujourd'hui dans les galeries du musée national des mines. Audyxa y intervient à distance auprès de petites entreprises et d'associations qui cherchent des outils sobres, adaptés à leur taille.",
    coupDoeil: [
      "Le Musée national des mines de fer occupe les galeries de l'ancienne mine Walert et retrace l'histoire de l'extraction du fer dans le sud du pays jusqu'en 1997.",
      "La commune est l'une de celles où la part de résidents de nationalité belge est la plus élevée, selon le recensement 2021 de STATEC, ce qui rappelle sa position frontalière.",
    ],
    faits: [
      {
        value: "5 735",
        label: "habitants à Rumelange au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
    ],
    casUsage: [
      {
        titre: "Simplifier la gestion d'un petit musée ou site de visite",
        texte:
          "Pour une équipe réduite, souvent composée en partie de bénévoles, un outil qui regroupe visites guidées, planning et documents d'archives évite de répéter les mêmes saisies. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Accompagner un artisan dans la tenue de sa gestion",
        texte:
          "Pour un artisan qui gère devis, achats et factures sur plusieurs supports, une organisation commune, avec un minimum d'automatisation, réduit le temps consacré à l'administratif. Nous l'accompagnons dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
      {
        titre: "Aider une association locale à mieux communiquer en interne",
        texte:
          "Pour une association de quartier, un espace partagé pour les convocations, les comptes rendus et les listes de membres limite les pertes d'information. Nous l'installons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Rumelange ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nous travaillons exclusivement à distance, ce qui convient à une commune de taille modeste.",
      },
      {
        question: "Mon activité est trop petite, avez-vous quand même une offre ?",
        answer:
          "Nous pouvons proposer un diagnostic court et clairement délimité. S'il apparaît que l'enjeu ne justifie pas notre accompagnement, nous vous le dirons.",
      },
      {
        question: "Intervenez-vous pour des structures proches de la frontière française ?",
        answer:
          "Oui, par visioconférence. Les aspects juridiques liés aux activités transfrontalières relèvent de conseils spécialisés, que nous ne remplaçons pas.",
      },
    ],
  },
  // ------------------------------------------------------------ BETTEMBOURG
  {
    paysSlug: "luxembourg",
    villeSlug: "bettembourg",
    villeName: "Bettembourg",
    metaDescription:
      "Audyxa aide à distance les acteurs de la logistique de Bettembourg et de l'Eurohub Sud : suivi des flux, automatisation, outils métier et données mieux reliées.",
    resume:
      "Bettembourg accueille le terminal intermodal de l'Eurohub Sud, l'un des nœuds du transport combiné rail-route du pays, exploité par CFL multimodal. Audyxa y intervient à distance auprès de transporteurs, d'entrepôts et de prestataires logistiques qui veulent mieux relier leurs données et suivre leurs opérations.",
    coupDoeil: [
      "Le terminal de Bettembourg, qui tire son origine du premier terminal à conteneurs ouvert en 1979, est situé sur le corridor de fret mer du Nord-Méditerranée, d'après CFL multimodal.",
      "Le terminal actuel comporte six voies de 700 mètres et une technologie de chargement horizontal pour semi-remorques non grutables, selon la presse spécialisée de 2017.",
    ],
    faits: [
      {
        value: "11 628",
        label: "habitants à Bettembourg au 1er janvier 2025",
        source: "STATEC, population au 1er janvier 2025",
      },
      {
        value: "85 821",
        label: "unités de transport intermodal acheminées sur trains combinés en 2022 par CFL multimodal",
        source: "Chambre de commerce du Luxembourg (revue Merkur, janvier-février 2024)",
      },
    ],
    casUsage: [
      {
        titre: "Relier le suivi des expéditions et la facturation",
        texte:
          "Pour un transporteur ou un commissionnaire qui suit ses expéditions dans un outil et facture dans un autre, une liaison entre les deux évite les ressaisies et les écarts. Nous la cadrons dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Fiabiliser les données d'un entrepôt",
        texte:
          "Pour un entrepôt qui reçoit des marchandises de plusieurs clients, un audit des fichiers de stock, des étiquettes et des échanges avec les transporteurs fait apparaître les causes des écarts d'inventaire. Nous le conduisons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Piloter le déploiement d'un nouvel outil de planning",
        texte:
          "Pour une entreprise de transport qui change de logiciel de planification, un pilotage rigoureux des tests, de la formation des équipes et de la bascule limite les perturbations. Nous le prenons en charge dans notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Bettembourg ?",
        answer:
          "Non. Audyxa n'a pas de bureau au Luxembourg. Nos missions se font à distance, avec visioconférence et partage d'écran, ce qui convient à des équipes logistiques réparties sur plusieurs sites.",
      },
      {
        question: "Pouvez-vous intervenir sur les systèmes d'un terminal ou d'un entrepôt ?",
        answer:
          "Nous travaillons sur les outils de gestion, les échanges de données et le suivi administratif. Les systèmes embarqués, les équipements de manutention et les automates restent hors de notre périmètre.",
      },
      {
        question: "Travaillez-vous avec les opérateurs de transport ferroviaire ?",
        answer:
          "Nous pouvons aider une entreprise du secteur à cartographier ses circuits internes et à relier ses outils. Nous n'avons aucun lien avec les opérateurs mentionnés sur cette page, qui sont cités uniquement pour décrire l'économie locale.",
      },
    ],
  },
];
