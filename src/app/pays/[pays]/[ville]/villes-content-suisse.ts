/**
 * Contenu curaté des 10 pages villes de Suisse romande.
 *
 * Règle anti-invention : chaque chiffre porte sa source (organisme + année),
 * vérifiée par recherche web le 9 octobre 2026. Quand une donnée fiable et
 * récente n'a pas été trouvée, le texte reste qualitatif.
 * Audyxa n'a aucun bureau en Suisse : l'intervention se fait à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_SUISSE: VilleContent[] = [
  // ---------------------------------------------------------------- GENÈVE
  {
    paysSlug: "suisse",
    villeSlug: "geneve",
    villeName: "Genève",
    metaDescription:
      "Genève : Audyxa aide à distance organisations internationales, ONG, banques privées et PME à cadrer audit digital, automatisation, IA et protection des données.",
    resume:
      "Genève réunit organisations internationales, missions diplomatiques, ONG, banque privée et négoce dans un canton très ouvert sur l'extérieur. Audyxa y intervient à distance, sans bureau en Suisse, pour aider des structures de toute taille à clarifier leurs outils, à automatiser les tâches répétitives et à cadrer l'usage de l'IA.",
    coupDoeil: [
      "Le canton accueille des organisations internationales, des missions permanentes et plusieurs centaines d'ONG, ce qui crée une demande constante de services plurilingues.",
      "La place financière genevoise, centrée sur la gestion de fortune, travaille sous de fortes exigences de confidentialité et de traçabilité.",
    ],
    faits: [
      {
        value: "530 246",
        label: "habitants dans le canton de Genève à la fin de 2024, dont 41,5 % d'étrangers",
        source: "OCSTAT (Office cantonal de la statistique de Genève), situation fin 2024",
      },
      {
        value: "38",
        label: "organisations internationales établies dans le canton à la fin de 2023",
        source: "swissinfo, « La Genève internationale en chiffres », d'après les données officielles, consulté le 9 octobre 2026",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser la gestion des mandats et des rapports d'une ONG",
        texte:
          "Pour une ONG ou une fondation qui jongle entre bailleurs, projets et rapports narratifs, relier le suivi des subventions, les échéances et les pièces justificatives évite les tableurs parallèles. Nous le cadrons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Poser un cadre d'usage de l'IA pour un gestionnaire de fortune",
        texte:
          "Pour un acteur de la gestion privée, tester un assistant IA sur des notes de clients suppose de définir ce qui peut sortir de l'environnement de l'entreprise et ce qui doit y rester. Nous aidons à poser ce cadre dans notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
      {
        titre: "Fluidifier la logistique documentaire d'un négociant",
        texte:
          "Pour une société de négoce qui échange contrats, documents de transport et factures avec des partenaires de plusieurs pays, un état des lieux des circuits de pièces révèle vite les doubles saisies. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Genève ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Nos missions se déroulent à distance, par visioconférence et partage d'écran, avec un diagnostic cadré dans le temps avant tout engagement plus long.",
      },
      {
        question: "La nouvelle loi suisse sur la protection des données change-t-elle votre manière de travailler ?",
        answer:
          "La loi révisée sur la protection des données (nLPD) est entrée en vigueur le 1er septembre 2023, selon l'Office fédéral de la justice (page consultée le 9 octobre 2026). Nous aidons à cartographier quelles données circulent dans vos outils ; l'interprétation juridique relève de votre conseil et du PFPDT, nous ne donnons pas d'avis juridique.",
      },
      {
        question: "Travaillez-vous avec des organisations internationales genevoises ?",
        answer:
          "Nous n'avons aucun client ni partenaire à citer à Genève. Les organisations internationales sont évoquées ici comme composante de l'économie locale, pas comme références. Leurs règles d'achat propres s'appliquent à toute collaboration éventuelle.",
      },
    ],
  },
  // -------------------------------------------------------------- LAUSANNE
  {
    paysSlug: "suisse",
    villeSlug: "lausanne",
    villeName: "Lausanne",
    metaDescription:
      "Lausanne : Audyxa accompagne à distance start-up, instituts de recherche, fédérations sportives et PME vaudoises sur l'IA, l'automatisation et leurs outils métier.",
    resume:
      "Lausanne est la capitale vaudoise, ville universitaire autour de l'EPFL et de l'UNIL et siège du Comité international olympique. Audyxa y intervient à distance auprès de jeunes entreprises, de structures de recherche et d'organisations sportives qui veulent structurer leurs outils et leurs données.",
    coupDoeil: [
      "Le CIO est installé à Lausanne depuis 1915 et la ville porte le titre de Capitale olympique depuis 1994, avec de nombreuses fédérations sportives internationales dans la région.",
      "Le voisinage de l'EPFL, à Ecublens, alimente un écosystème de start-up et de transfert technologique.",
    ],
    faits: [
      {
        value: "144 873",
        label: "habitants dans la commune de Lausanne en 2024",
        source: "Ville de Lausanne, Aperçu statistique 2025, données 2024",
      },
    ],
    casUsage: [
      {
        titre: "Cadrer un premier produit d'IA dans une jeune pousse issue de la recherche",
        texte:
          "Pour une start-up de l'écosystème EPFL qui passe du prototype à l'offre commerciale, choisir un cas d'usage IA unique, mesurable et documenté évite l'éparpillement. Nous le définissons avec vous dans notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        methodeSlug: "ia-rag-agents-mcp",
        methodeAnchor: "méthode IA, RAG et agents",
      },
      {
        titre: "Outiller le calendrier et les accréditations d'une fédération sportive",
        texte:
          "Pour une fédération ou une association sportive internationale, centraliser inscriptions, délégations, documents et échéances dans un seul outil réduit les relances par courriel. Nous le concevons via notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Suivre les inscriptions d'un centre de formation continue",
        texte:
          "Pour une école, un institut ou un organisme de formation, relier inscriptions, sessions, paiements et attestations supprime la ressaisie en fin de semestre. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Avez-vous une équipe sur le campus lausannois ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Nous travaillons à distance, ce qui convient à la plupart des missions de diagnostic, d'automatisation et de développement.",
      },
      {
        question: "Peut-on collaborer si notre équipe travaille en anglais ?",
        answer:
          "Le français est notre langue de travail principale. Pour une équipe internationale, nous pouvons prévoir des modèles de documents et des interfaces dans une autre langue, à discuter au cadrage.",
      },
      {
        question: "Une start-up a-t-elle besoin d'un audit complet ?",
        answer:
          "Rarement. Un diagnostic court sur deux ou trois flux (ventes, données, support) suffit souvent, avec des recommandations que votre équipe peut appliquer seule.",
      },
    ],
  },
  // -------------------------------------------------------------- FRIBOURG
  {
    paysSlug: "suisse",
    villeSlug: "fribourg",
    villeName: "Fribourg",
    metaDescription:
      "Fribourg, ville bilingue : Audyxa aide à distance PME, administrations et acteurs de la formation à structurer leurs outils, leurs documents et leurs processus.",
    resume:
      "Fribourg est un chef-lieu cantonal bilingue, à la jonction des cultures romande et alémanique, avec une université et un tissu de PME industrielles et de services. Audyxa y intervient à distance, sans bureau en Suisse, pour aider des équipes à mieux organiser leurs outils au quotidien.",
    coupDoeil: [
      "Le canton compte deux langues officielles, le français et l'allemand, ce qui se reflète dans les documents, les sites et les outils de nombreuses organisations.",
      "L'Université de Fribourg propose des cursus dans les deux langues, ce qui en fait un lieu d'études bilingue peu courant en Suisse.",
    ],
    faits: [
      {
        value: "346 674",
        label: "habitants dans le canton de Fribourg à la fin de 2024, soit 1,5 % de plus qu'un an plus tôt",
        source: "Service de la statistique et de la donnée du canton de Fribourg (STATPOP), fin 2024",
      },
    ],
    casUsage: [
      {
        titre: "Produire des documents et des processus en deux langues",
        texte:
          "Pour une PME ou une administration qui sert une clientèle francophone et germanophone, des modèles de documents et des formulaires pensés dès le départ en deux langues évitent les versions parallèles. Nous les structurons dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Relier la production et la facturation d'un atelier industriel",
        texte:
          "Pour un sous-traitant industriel du canton, connecter devis, ordres de fabrication et facturation réduit les erreurs de saisie. C'est un objet courant de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Organiser le suivi des étudiants et des stages d'un institut",
        texte:
          "Pour une haute école, un institut ou une école privée, un outil de suivi des dossiers, des conventions de stage et des attestations allège le secrétariat. Nous le construisons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous aussi en allemand ?",
        answer:
          "Notre langue de travail est le français. Nous pouvons concevoir des outils qui gèrent plusieurs langues d'affichage, mais nous ne promettons pas d'animer des ateliers en allemand.",
      },
      {
        question: "Avez-vous un bureau à Fribourg ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Les échanges se font à distance, avec des livrables écrits que vos équipes peuvent relire à leur rythme.",
      },
      {
        question: "Pourquoi cette page cite-t-elle un chiffre cantonal et non communal ?",
        answer:
          "Nous avons pu sourcer proprement le chiffre du canton pour 2024. Pour la commune de Fribourg, nous n'avons pas obtenu de donnée récente assez claire pour l'afficher, et nous préférons ne rien extrapoler.",
      },
    ],
  },
  // ------------------------------------------------------------ NEUCHÂTEL
  {
    paysSlug: "suisse",
    villeSlug: "neuchatel",
    villeName: "Neuchâtel",
    metaDescription:
      "Neuchâtel : Audyxa accompagne à distance les entreprises de l'Arc jurassien, horlogerie et microtechnique, avec audit digital, automatisation et suivi de production.",
    resume:
      "Neuchâtel, au bord de son lac, est le chef-lieu d'un canton où l'horlogerie et la microtechnique tiennent une place historique. Audyxa y intervient à distance auprès de manufactures, de sous-traitants et de services qui veulent relier leurs données de production et simplifier leur gestion.",
    coupDoeil: [
      "Le canton fait partie de l'Arc jurassien, région horlogère où de nombreux sous-traitants spécialisés travaillent pour des maisons connues.",
      "La ville est aussi un lieu de recherche et d'enseignement supérieur, avec une université et des instituts liés à la microtechnique.",
    ],
    faits: [
      {
        value: "45 305",
        label: "habitants dans la commune de Neuchâtel à la fin de 2024",
        source: "Service de statistique du canton de Neuchâtel, Mémento statistique 2025 (population fin 2024)",
      },
      {
        value: "179 449",
        label: "habitants dans le canton de Neuchâtel à la fin de 2024",
        source: "Service de statistique du canton de Neuchâtel, communiqué sur le recensement 2024",
      },
    ],
    casUsage: [
      {
        titre: "Suivre la traçabilité des lots chez un sous-traitant microtechnique",
        texte:
          "Pour un atelier qui fabrique des composants de précision en petites séries, un suivi simple des lots, des contrôles et des retours remplace carnets et fichiers dispersés. Il découle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Relier les commandes d'une marque aux ateliers qui l'approvisionnent",
        texte:
          "Pour une entreprise qui dépend de plusieurs fournisseurs spécialisés, un flux commun de commandes, de délais et de confirmations limite les relances téléphoniques. Nous le mettons en place avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Accompagner l'adoption d'un nouvel outil par les équipes",
        texte:
          "Quand un nouveau logiciel remplace un système ancien, le risque principal est l'appropriation par les équipes. Un calendrier clair et des points réguliers font partie de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec des maisons horlogères ?",
        answer:
          "Nous n'avons aucun client ni partenaire horloger à citer. L'horlogerie est mentionnée comme contexte économique local, jamais comme référence.",
      },
      {
        question: "Avez-vous un bureau à Neuchâtel ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Nos missions se déroulent à distance, avec un diagnostic cadré avant tout engagement plus long.",
      },
      {
        question: "Le secret de fabrication est central chez nous : comment le protégez-vous ?",
        answer:
          "Nous définissons avec vous quelles informations sont nécessaires à la mission et lesquelles ne doivent pas quitter votre environnement. Un accord de confidentialité peut être signé avant tout échange de documents sensibles.",
      },
    ],
  },
  // ----------------------------------------------------------------- SION
  {
    paysSlug: "suisse",
    villeSlug: "sion",
    villeName: "Sion",
    metaDescription:
      "Sion, capitale du Valais : Audyxa aide à distance viticulteurs, producteurs, hébergeurs et services publics à simplifier leur gestion avec des outils sur mesure.",
    resume:
      "Sion est la capitale du Valais, entre vignobles et Alpes, avec un tissu de producteurs, d'acteurs du tourisme, d'administration cantonale et d'énergie. Audyxa y intervient à distance, sans bureau en Suisse, pour aider ces structures à organiser leurs données et à alléger leur administratif.",
    coupDoeil: [
      "Le Valais est un canton viticole et arboricole de premier plan, avec de nombreuses exploitations familiales qui commercialisent en direct.",
      "La ville abrite les institutions cantonales valaisannes, ce qui entretient un tissu de services autour de l'administration.",
    ],
    faits: [
      {
        value: "371 288",
        label: "habitants dans le canton du Valais à la fin de 2024, soit 5 444 de plus qu'un an plus tôt",
        source: "Service de la statistique et de la péréquation du Valais (STATPOP), fin 2024",
      },
    ],
    casUsage: [
      {
        titre: "Gérer commandes, stocks et ventes directes d'un domaine viticole",
        texte:
          "Pour un domaine qui vend en cave, en ligne et à des restaurateurs, relier stock, commandes et facturation évite les écarts entre canaux. Nous le cadrons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Centraliser réservations et demandes d'un hébergement de montagne",
        texte:
          "Pour un hôtel, un chalet ou un exploitant de remontées mécaniques, un outil qui rassemble réservations, plannings de ménage et facturation simplifie la saison. Nous le construisons via notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Suivre les dossiers d'un service communal ou parapublic",
        texte:
          "Pour un service qui traite des demandes d'autorisation, de subventions ou de prestations, passer des échanges par courriel à un suivi unique raccourcit les délais. C'est l'objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Faut-il être en plaine pour travailler avec vous ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse et intervient à distance. Une connexion correcte suffit, y compris pour un établissement de montagne.",
      },
      {
        question: "Avez-vous déjà travaillé avec des domaines viticoles valaisans ?",
        answer:
          "Nous n'avons aucun client ni mission valaisans à afficher. La viticulture est citée ici comme élément du paysage économique local.",
      },
      {
        question: "Le chiffre de population concerne-t-il la ville de Sion ?",
        answer:
          "Non, il s'agit du canton. Un chiffre communal d'environ 37 000 habitants circule, mais nous ne l'avons trouvé que dans des sources secondaires, donc nous ne l'affichons pas.",
      },
    ],
  },
  // ------------------------------------------------------ LA CHAUX-DE-FONDS
  {
    paysSlug: "suisse",
    villeSlug: "la-chaux-de-fonds",
    villeName: "La Chaux-de-Fonds",
    metaDescription:
      "La Chaux-de-Fonds, ville horlogère classée à l'UNESCO : Audyxa accompagne à distance ateliers et fournisseurs avec audit, suivi de production et automatisation.",
    resume:
      "La Chaux-de-Fonds est une ville planifiée autour de l'horlogerie, inscrite avec Le Locle au patrimoine mondial de l'UNESCO en 2009. Audyxa y intervient à distance auprès d'ateliers, de fournisseurs et d'acteurs culturels qui veulent suivre leurs commandes et leurs données plus simplement.",
    coupDoeil: [
      "Reconstruite en plan orthogonal après un incendie au XIXe siècle, la ville mêle habitat et ateliers, ce qui a justifié son classement.",
      "Karl Marx citait l'horlogerie jurassienne en exemple et a qualifié La Chaux-de-Fonds de « ville-manufacture », selon le dossier de l'UNESCO.",
    ],
    faits: [
      {
        value: "2009",
        label: "année d'inscription de La Chaux-de-Fonds et du Locle, urbanisme horloger, au patrimoine mondial",
        source: "UNESCO, Comité du patrimoine mondial, session de Séville, juin 2009",
      },
    ],
    casUsage: [
      {
        titre: "Remplacer les carnets de commandes d'un atelier de sous-traitance",
        texte:
          "Pour un atelier de finition, de décolletage ou d'assemblage, un suivi numérique des ordres, des délais et des contrôles remplace carnets et fichiers dispersés. Il fait partie de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Gérer les visites et les événements d'un lieu patrimonial",
        texte:
          "Pour un musée, un site ou un organisateur de visites, centraliser réservations de groupes, guides et billetterie évite les doubles saisies. Nous le développons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Cartographier les flux d'une entreprise familiale avant sa transmission",
        texte:
          "Pour une entreprise qui prépare une reprise, documenter qui fait quoi, quels outils sont utilisés et où sont les données facilite le passage de relais. C'est l'objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        methodeSlug: "processus-bpmn-lean-refonte",
        methodeAnchor: "méthode processus, BPMN et Lean",
      },
    ],
    faq: [
      {
        question: "Avez-vous un bureau à La Chaux-de-Fonds ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Toute l'intervention est organisée à distance, avec des points réguliers en visioconférence.",
      },
      {
        question: "Pourquoi aucun chiffre de population ici ?",
        answer:
          "Le seul chiffre récent trouvé provenait de sites d'annonces immobilières, pas d'un office statistique. Nous préférons le laisser de côté ; l'Office fédéral de la statistique reste la référence.",
      },
      {
        question: "Les ateliers de petite taille sont-ils concernés ?",
        answer:
          "Oui. Un diagnostic reste proportionné et peut porter sur un seul flux, par exemple la prise de commande, avec des recommandations applicables sans mission supplémentaire.",
      },
    ],
  },
  // ---------------------------------------------------------------- VEVEY
  {
    paysSlug: "suisse",
    villeSlug: "vevey",
    villeName: "Vevey",
    metaDescription:
      "Vevey, berceau de l'agroalimentaire suisse : Audyxa aide à distance fournisseurs, PME alimentaires et commerces de la Riviera à automatiser et fiabiliser leurs flux.",
    resume:
      "Vevey, sur la Riviera vaudoise, est la ville où Henri Nestlé a mis au point en 1867 une farine lactée pour nourrissons et où le groupe Nestlé a son siège. Audyxa y intervient à distance auprès de fournisseurs, de producteurs et de commerçants qui veulent mieux suivre leurs flux et leurs données.",
    coupDoeil: [
      "Le siège mondial de Nestlé se trouve à Vevey, ce qui entretient un tissu de prestataires, de fournisseurs et de talents du secteur alimentaire.",
      "La ville bénéficie aussi d'un cadre lacustre et culturel qui attire un tourisme de proximité.",
    ],
    faits: [
      {
        value: "1867",
        label: "année où Henri Nestlé met au point à Vevey son aliment lacté pour bébés",
        source: "Wikipédia (article Nestlé), consulté le 9 octobre 2026",
      },
    ],
    casUsage: [
      {
        titre: "Documenter la traçabilité d'un petit producteur alimentaire",
        texte:
          "Pour un artisan ou une PME qui fournit des commerces ou des restaurants, relier réception des matières, lots, étiquettes et livraisons simplifie les contrôles. Nous le cadrons avec notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Synchroniser caisse, stock et boutique en ligne d'un commerce du centre",
        texte:
          "Pour un commerce de la Grande Place ou des rues voisines, éviter les ruptures de stock affichées à tort demande de relier caisse et site marchand. Nous le faisons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Structurer la sous-traitance de services pour un grand donneur d'ordre",
        texte:
          "Pour un prestataire indépendant ou une petite société qui travaille pour de grands groupes, un suivi propre des demandes, des devis et des factures rassure le client. Nous le mettons en place dans notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec Nestlé ou ses fournisseurs ?",
        answer:
          "Non. Nous n'avons aucun lien avec ce groupe. Il est cité uniquement comme élément de contexte économique local.",
      },
      {
        question: "Avez-vous un bureau à Vevey ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Nous intervenons à distance, avec des rendez-vous en visioconférence et des documents partagés.",
      },
      {
        question: "Pourquoi ne pas afficher la population de Vevey ?",
        answer:
          "Un chiffre d'environ 20 000 habitants circule, mais nous ne l'avons trouvé que dans des sources secondaires. Nous préférons renvoyer vers Statistique Vaud.",
      },
    ],
  },
  // ------------------------------------------------------------- MONTREUX
  {
    paysSlug: "suisse",
    villeSlug: "montreux",
    villeName: "Montreux",
    metaDescription:
      "Montreux : Audyxa accompagne à distance hôtels, organisateurs d'événements et commerces de la Riviera avec réservations, automatisation et outils sur mesure.",
    resume:
      "Montreux, au bord du Léman, vit du tourisme, de l'hôtellerie et de ses festivals, dont le Montreux Jazz Festival lancé en 1967. Audyxa y intervient à distance auprès d'établissements et d'organisateurs qui veulent simplifier réservations, planning et facturation.",
    coupDoeil: [
      "Le Montreux Jazz Festival a eu sa première édition en juin 1967 au Casino de Montreux, à l'initiative de Claude Nobs.",
      "La saisonnalité forte de l'activité impose des équipes qui doivent monter en charge vite, puis ralentir.",
    ],
    faits: [
      {
        value: "1967",
        label: "année de la première édition du Montreux Jazz Festival, sur trois jours, au Casino de Montreux",
        source: "Britannica et Wikipédia (article Montreux Jazz Festival), consultés le 9 octobre 2026",
      },
    ],
    casUsage: [
      {
        titre: "Unifier les canaux de réservation d'un hôtel indépendant",
        texte:
          "Pour un hôtel qui reçoit des demandes par son site, des plateformes et le téléphone, relier ces canaux au planning et à la facturation limite les doubles réservations. Nous le traitons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Coordonner les équipes saisonnières d'un événement",
        texte:
          "Pour un organisateur de festival ou de congrès, planifier bénévoles, intervenants et prestataires dans un outil partagé réduit les échanges dispersés. Nous le construisons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Gérer des biens immobiliers de vacances et de longue durée",
        texte:
          "Pour une régie ou un propriétaire qui loue à la semaine et à l'année, automatiser états des lieux, relances et suivi des interventions allège l'administratif. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec le Montreux Jazz Festival ?",
        answer:
          "Non. Nous n'avons ni client ni partenariat dans ce domaine. Le festival est cité comme repère culturel local, pas comme référence.",
      },
      {
        question: "Avez-vous un bureau à Montreux ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Les missions se font à distance, ce qui permet de s'adapter aux périodes creuses de votre saison.",
      },
      {
        question: "Un petit établissement saisonnier peut-il se permettre un diagnostic ?",
        answer:
          "Oui. Nous cadrons un diagnostic court, à placer hors saison, centré sur les deux ou trois tâches qui vous coûtent le plus de temps en haute saison.",
      },
    ],
  },
  // ----------------------------------------------------- YVERDON-LES-BAINS
  {
    paysSlug: "suisse",
    villeSlug: "yverdon-les-bains",
    villeName: "Yverdon-les-Bains",
    metaDescription:
      "Yverdon-les-Bains : Audyxa accompagne à distance PME industrielles, acteurs du thermalisme et étudiants-entrepreneurs du Nord vaudois sur audit et automatisation.",
    resume:
      "Yverdon-les-Bains, à l'extrémité du lac de Neuchâtel, est la deuxième ville du canton de Vaud par sa taille. Station thermale et pôle d'ingénierie avec la HEIG-VD, elle abrite un tissu de PME industrielles. Audyxa y intervient à distance auprès d'équipes qui veulent fiabiliser leurs flux.",
    coupDoeil: [
      "La ville se présente comme station thermale et accueille la Haute École d'ingénierie et de gestion du canton de Vaud (HEIG-VD).",
      "Le site d'Eburodunum, d'époque romaine, rappelle que la ville est un lieu de passage depuis l'Antiquité.",
    ],
    faits: [
      {
        value: "30 332",
        label: "habitants à Yverdon-les-Bains en 2024 (le registre communal indique 30 755 à la fin de 2024, selon une méthode de comptage différente)",
        source: "Statistique Vaud, VD en chiffres 2024-2026 ; Ville d'Yverdon-les-Bains, statistiques de population 2024",
      },
    ],
    casUsage: [
      {
        titre: "Relier machines, maintenance et commandes d'une PME industrielle",
        texte:
          "Pour une PME de mécanique ou d'électronique du Nord vaudois, les demandes de maintenance, les pièces et les commandes vivent souvent dans des outils séparés. Un diagnostic choisit quoi relier d'abord, dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Gérer rendez-vous et dossiers dans un établissement de santé ou de bien-être",
        texte:
          "Pour un centre thermal, un cabinet ou un établissement de soins, un outil unique pour les rendez-vous, les rappels et les dossiers évite les relances manuelles. Nous le concevons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "sante",
        sectorAnchor: "santé",
      },
      {
        titre: "Accompagner un projet porté par de jeunes diplômés ingénieurs",
        texte:
          "Pour une jeune société issue d'une haute école d'ingénierie, passer du prototype à la gestion courante demande un pilotage simple des tâches, des priorités et des échéances. C'est l'objet de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Avez-vous un bureau à Yverdon-les-Bains ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Nous travaillons à distance, avec un diagnostic cadré avant toute mission plus longue.",
      },
      {
        question: "Pourquoi deux chiffres de population différents ?",
        answer:
          "Le registre communal et la série cantonale n'utilisent pas exactement la même méthode de comptage. Nous affichons le chiffre de Statistique Vaud et mentionnons l'autre par transparence.",
      },
      {
        question: "Collaborez-vous avec la HEIG-VD ?",
        answer:
          "Non, nous n'avons aucun partenariat avec cette école. Elle est citée comme repère local uniquement.",
      },
    ],
  },
  // ----------------------------------------------------------------- NYON
  {
    paysSlug: "suisse",
    villeSlug: "nyon",
    villeName: "Nyon",
    metaDescription:
      "Nyon, entre Genève et Lausanne : Audyxa accompagne à distance sociétés internationales, prestataires sportifs et PME de La Côte avec outils métier et automatisation.",
    resume:
      "Nyon, sur La Côte entre Genève et Lausanne, héberge le siège de l'UEFA et reçoit chaque été le Paléo Festival. Audyxa y intervient à distance auprès de PME, de prestataires et d'organisations sportives ou culturelles qui veulent mieux structurer leurs outils.",
    coupDoeil: [
      "Le siège de l'UEFA est établi à Nyon, ce qui attire des prestataires de services, des agences et des partenaires du monde du sport.",
      "Le Paléo Festival, le plus grand festival de plein air de Suisse, a affiché complet pour sa 47e édition en 2024.",
    ],
    faits: [
      {
        value: "250 000",
        label: "visiteurs au Paléo Festival Nyon en 2024, édition complète",
        source: "Keystone-SDA, relayé par blue News, bilan de l'édition 2024, consulté le 9 octobre 2026",
      },
    ],
    casUsage: [
      {
        titre: "Fluidifier la logistique d'un événement de grande envergure",
        texte:
          "Pour une agence ou un prestataire d'événementiel, coordonner fournisseurs, accréditations et plannings dans un seul outil réduit les erreurs de dernière minute. Nous le construisons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Maîtriser les flux administratifs d'une PME de services pour des multinationales",
        texte:
          "Pour un cabinet ou une société de services dont les clients sont de grands groupes, relier devis, contrats, facturation et comptabilité accélère l'encaissement. Nous cadrons ce chantier dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "cabinets-comptables",
        sectorAnchor: "cabinets comptables",
      },
      {
        titre: "Poser des règles d'usage de l'IA pour les équipes d'une association sportive",
        texte:
          "Pour une fédération ou une association qui manipule des données de licenciés, définir ce qu'un assistant IA peut traiter protège les personnes concernées. Nous aidons à poser ce cadre avec notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec l'UEFA ou avec le Paléo Festival ?",
        answer:
          "Non. Nous n'avons aucun lien avec ces organisations, citées uniquement pour décrire l'économie locale.",
      },
      {
        question: "Avez-vous un bureau à Nyon ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Suisse. Nous intervenons à distance, avec des rendez-vous en visioconférence.",
      },
      {
        question: "Pourquoi cette page n'affiche-t-elle pas la population de Nyon ?",
        answer:
          "Les deux chiffres 2024 trouvés (23 351 et 23 600) divergent selon la source. Plutôt que d'en choisir un sans le vérifier, nous renvoyons vers l'Office fédéral de la statistique.",
      },
    ],
  },
];
