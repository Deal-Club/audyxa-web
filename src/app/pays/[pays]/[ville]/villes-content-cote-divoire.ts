/**
 * Contenu enrichi de huit villes de Côte d'Ivoire (hors Abidjan et
 * Yamoussoukro, déjà traitées dans `villes-content.ts`).
 *
 * Règle anti-invention : chaque chiffre porte sa source réelle (organisme +
 * année), vérifiée par recherche web (octobre 2026). Les populations viennent
 * du tableau officiel par commune du RGPH 2021 (population recensée au
 * 14 décembre 2021). Quand une donnée fiable et récente n'existe pas, le texte
 * reste qualitatif et l'incertitude est assumée.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_COTE_DIVOIRE: VilleContent[] = [
  {
    paysSlug: "cote-divoire",
    villeSlug: "bouake",
    villeName: "Bouaké",
    metaDescription:
      "Audyxa accompagne les entreprises de Bouaké, deuxième ville de Côte d'Ivoire : audit digital, automatisation, outils de gestion et IA. Intervention à distance.",
    resume:
      "Audyxa accompagne les entreprises de Bouaké dans leur transformation digitale : audit de maturité, automatisation des tâches répétitives et outils de gestion adaptés. Bouaké est la deuxième ville du pays et un carrefour commercial entre le sud et le nord, avec un tissu de commerçants, de transformateurs et d'établissements d'enseignement.",
    coupDoeil: [
      "Bouaké est située à un point de passage majeur entre la côte et le nord du pays, ce qui en fait depuis longtemps une place de négoce où se croisent produits vivriers, textile et marchandises venues d'Abidjan.",
      "La ville abrite l'Université Alassane Ouattara, seule université publique de la région du Gbêkê, et un secteur informel de commerce très présent, souvent tenu par des femmes commerçantes.",
    ],
    faits: [
      {
        value: "832 371",
        label: "habitants recensés dans la commune de Bouaké",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les ventes et les stocks d'un commerce de gros",
        texte:
          "Pour un grossiste ou un réseau de revendeurs qui gère encore ses commandes sur cahier ou tableur, un suivi centralisé des ventes, des créances et des stocks limite les erreurs et les ruptures. C'est l'objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Relier l'atelier et la gestion dans une petite unité de transformation",
        texte:
          "Pour une unité de transformation (textile, noix, produits vivriers), relier le suivi de production, les achats de matière et la facturation évite les ressaisies. Ce type de chantier relève de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Dématérialiser la gestion administrative d'un établissement de formation",
        texte:
          "Pour un institut, une école privée ou un centre de formation, un outil de suivi des inscriptions, des paiements de scolarité et des dossiers limite les doubles saisies. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Bouaké ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Bouaké. Notre fondateur est basé à Abomey-Calavi, au Bénin, et nos missions se déroulent à distance : visioconférences, partage d'écran, documents partagés. Un déplacement ponctuel n'est pas exclu pour un atelier, mais il n'est pas la règle.",
      },
      {
        question: "Une entreprise de Bouaké avec peu de moyens techniques peut-elle travailler avec vous ?",
        answer:
          "Oui. Une connexion correcte et un ordinateur ou un téléphone suffisent pour les séances de travail. Nous commençons par un diagnostic court pour repérer ce qui fait perdre le plus de temps, avant de proposer des outils simples et adaptés au niveau de l'équipe.",
      },
      {
        question: "Les coupures de connexion posent-elles problème pour un travail à distance ?",
        answer:
          "C'est une contrainte réelle que nous intégrons : séances courtes, comptes rendus écrits systématiques et outils qui supportent une connexion intermittente. Nous préférons le dire d'emblée que de promettre un fonctionnement parfait.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "daloa",
    villeName: "Daloa",
    metaDescription:
      "Audyxa accompagne les coopératives, négociants et PME de Daloa, ville du cacao et du café : traçabilité, automatisation et outils de gestion, à distance.",
    resume:
      "Audyxa accompagne les coopératives, négociants et PME de Daloa dans leur transformation digitale : traçabilité des achats, automatisation administrative et outils de gestion. Daloa est une grande ville de l'ouest du pays, au cœur d'une zone où les cultures de cacao et de café structurent l'économie locale.",
    coupDoeil: [
      "Daloa est le chef-lieu de la région du Haut-Sassandra, dans l'ouest du pays, et abrite l'Université Jean Lorougnon Guédé.",
      "On y trouve de nombreuses coopératives agricoles de café et de cacao, ce qui place la collecte, le suivi des producteurs et la traçabilité au centre des besoins en outils numériques.",
    ],
    faits: [
      {
        value: "421 879",
        label: "habitants recensés dans la commune de Daloa",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les achats et les producteurs d'une coopérative",
        texte:
          "Pour une coopérative qui collecte du cacao ou du café auprès de nombreux planteurs, un registre numérique des producteurs, des pesées et des paiements remplace les carnets papier et facilite la traçabilité. C'est un chantier de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Fiabiliser la chaîne d'un négociant ou d'un exportateur de produits agricoles",
        texte:
          "Pour un négociant, relier les achats en brousse, le stockage, les documents de transport et la facturation réduit les écarts de stock et les retards de paiement. Cela passe par notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Équiper une université ou un établissement privé de la ville",
        texte:
          "Pour un établissement d'enseignement, automatiser la relance des frais de scolarité et centraliser les dossiers étudiants allège le travail du secrétariat. C'est un cas d'usage de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Avez-vous une équipe sur place à Daloa ?",
        answer:
          "Non, Audyxa n'a pas de bureau à Daloa. Nous travaillons à distance, depuis le Bénin où est basé notre fondateur, à Abomey-Calavi. Les échanges se font par visioconférence et par écrit.",
      },
      {
        question: "Pouvez-vous aider une coopérative cacao à préparer les exigences de traçabilité ?",
        answer:
          "Nous pouvons structurer la collecte et la conservation des données (producteurs, parcelles, volumes, paiements). Nous ne remplaçons pas les organismes de certification ni les obligations réglementaires, et nous ne garantissons pas à votre place la conformité à un cahier des charges d'acheteur.",
      },
      {
        question: "Un outil numérique fonctionne-t-il vraiment pour des producteurs peu équipés ?",
        answer:
          "Cela dépend du dispositif. Nous partons de ce que les agents de terrain utilisent déjà (téléphone, messagerie) et privilégions des saisies simples, utilisables hors ligne puis synchronisées, plutôt qu'un système lourd qui resterait inutilisé.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "korhogo",
    villeName: "Korhogo",
    metaDescription:
      "Audyxa accompagne les entreprises de Korhogo, au cœur du nord ivoirien : anacarde, coton, négoce. Audit digital, automatisation et outils de gestion à distance.",
    resume:
      "Audyxa accompagne les entreprises de Korhogo dans leur transformation digitale : suivi des filières, automatisation administrative et outils de gestion. Korhogo est la grande ville du nord de la Côte d'Ivoire, portée par l'anacarde et par une agriculture de savane, avec une activité de transformation en développement.",
    coupDoeil: [
      "Korhogo est le chef-lieu de la région du Poro, dans le nord du pays, et une étape économique importante sur l'axe qui relie la côte aux pays voisins du Sahel.",
      "La ville accueille une zone agro-industrielle dédiée à la transformation de l'anacarde, inaugurée le 23 septembre 2023 dans le cadre d'un programme de l'État soutenu par la Banque mondiale, dont l'objectif est de transformer davantage de noix sur place.",
    ],
    faits: [
      {
        value: "440 926",
        label: "habitants recensés dans la commune de Korhogo",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
      {
        value: "28,7 hectares",
        label: "superficie de la zone agro-industrielle de l'anacarde de Korhogo, conçue pour accueillir 7 unités de transformation",
        source: "Conseil du Coton et de l'Anacarde (CCA), programme PPCA, communication à l'inauguration de septembre 2023",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les stocks et les lots dans une unité de transformation de noix",
        texte:
          "Pour une unité de décorticage ou de calibrage, suivre les lots de noix brutes jusqu'aux amandes conditionnées (rendements, pertes, expéditions) demande un outil de production simple. C'est un chantier typique de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Organiser les achats et les paiements d'un acheteur de produits agricoles",
        texte:
          "Pour un acheteur de noix de cajou ou de coton qui traite avec de nombreux vendeurs, automatiser les bons d'achat, les rapprochements et les relances de paiement limite les erreurs de saisie. C'est l'objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Structurer une activité de transport et de distribution vers le nord",
        texte:
          "Pour un transporteur ou un distributeur qui dessert le nord du pays et les pays voisins, un suivi des tournées, des retours et des coûts évite de piloter à l'estime. Cela relève de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent physiquement à Korhogo ?",
        answer:
          "Non, nous n'avons pas de bureau à Korhogo. Notre fondateur est basé à Abomey-Calavi, au Bénin, et l'accompagnement se fait à distance. Pour une mission qui l'exige, un atelier sur place pourrait se discuter au cas par cas.",
      },
      {
        question: "La transformation locale de l'anacarde est-elle déjà bien installée ?",
        answer:
          "Elle progresse mais reste partielle. Les sources publiques indiquent un taux de transformation locale d'environ 21 % en 2022 pour un objectif de l'État de 50 % à l'horizon 2030. Il y a donc une marge de développement, mais nous ne pouvons pas vous promettre l'état actuel de chaque usine.",
      },
      {
        question: "Comment travaillez-vous avec une équipe qui ne parle pas toujours français à l'écrit ?",
        answer:
          "Nous adaptons les supports : schémas, captures d'écran commentées et démonstrations en séance plutôt que de longs documents. L'objectif est que les agents de terrain comprennent l'outil, pas seulement la direction.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "san-pedro",
    villeName: "San-Pédro",
    metaDescription:
      "Audyxa accompagne les acteurs du port de San-Pédro : exportateurs de cacao, transitaires et logisticiens. Automatisation et suivi des flux, à distance.",
    resume:
      "Audyxa accompagne les exportateurs, transitaires et PME de San-Pédro dans leur transformation digitale : suivi des flux documentaires, automatisation et outils de gestion. San-Pédro est une ville portuaire du sud-ouest, dont le port est étroitement lié à l'exportation du cacao et des produits agricoles.",
    coupDoeil: [
      "Le port autonome de San-Pédro est présenté par ses promoteurs comme le premier port mondial d'exportation de fèves de cacao. Les chiffres précis par produit varient selon les sources et les années.",
      "La ville est aussi un pôle d'activité pour la pêche, le bois, l'hévéa et l'industrie, et le développement du port y attire de nouveaux entrepôts et prestataires logistiques.",
    ],
    faits: [
      {
        value: "390 654",
        label: "habitants recensés dans la commune de San-Pédro",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
      {
        value: "7 023 763 tonnes",
        label: "de marchandises traitées par le port autonome de San-Pédro en 2023, soit environ 13 % de plus qu'en 2022",
        source: "Port autonome de San-Pédro, relayé par l'Agence ivoirienne de presse (AIP), 27 février 2024",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser le suivi documentaire d'un transitaire",
        texte:
          "Pour un transitaire ou un agent maritime, les déclarations, bons de livraison et suivis de conteneurs se répètent d'un dossier à l'autre. Les automatiser et les relier à la facturation fait partie de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Fiabiliser les lots d'un exportateur de cacao ou de produits agricoles",
        texte:
          "Pour un exportateur, lier chaque lot à son origine, à son stockage et à ses documents d'expédition limite les litiges et accélère les paiements. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Piloter une activité d'entreposage ou de maintenance autour du port",
        texte:
          "Pour une entreprise d'entreposage, de manutention ou d'entretien d'engins, un tableau de bord partagé sur les mouvements, les pannes et les coûts remplace les relevés dispersés. Cela relève de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
    ],
    faq: [
      {
        question: "Avez-vous une présence à San-Pédro ou près du port ?",
        answer:
          "Non. Audyxa n'a pas de bureau à San-Pédro ni de représentant sur le port. Notre fondateur est basé à Abomey-Calavi, au Bénin, et nos missions se font à distance. Nous ne sommes pas un prestataire d'intégration douanière ou portuaire.",
      },
      {
        question: "Pouvez-vous vous connecter aux systèmes officiels du port ou de la douane ?",
        answer:
          "Nous ne gérons pas ces plateformes publiques. Nous intervenons côté entreprise : organisation de vos documents, automatisation de vos propres tâches et rapprochement avec votre gestion interne, en respectant les procédures officielles.",
      },
      {
        question: "Le chiffre de trafic du port est-il celui du cacao uniquement ?",
        answer:
          "Non. Le chiffre de 7 023 763 tonnes en 2023 couvre l'ensemble des marchandises du port. Nous n'avons pas trouvé de chiffre fiable isolant le seul cacao pour une année récente, et préférons ne pas en avancer un.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "man",
    villeName: "Man",
    metaDescription:
      "Audyxa accompagne les entreprises de Man et de la région des 18 Montagnes : hébergement, tourisme, commerce et agriculture. Outils numériques, à distance.",
    resume:
      "Audyxa accompagne les entreprises de Man dans leur transformation digitale : réservations, gestion de petites structures et suivi d'activité. Man est la ville principale de la région du Tonkpi, dans l'ouest montagneux, un cadre naturel qui nourrit une activité touristique et un commerce de proximité.",
    coupDoeil: [
      "Man est le chef-lieu de la région du Tonkpi, appelée aussi région des 18 Montagnes, et la ville est bordée de reliefs dont le mont Tonkpi, qui culmine à environ 1 189 mètres.",
      "Parmi les sites connus figurent la Dent de Man, la cascade et les ponts de lianes de la région. Certains sites sont toutefois en mauvais état d'après la presse locale, et le tourisme s'est affaibli après la crise de 2002.",
    ],
    faits: [
      {
        value: "241 969",
        label: "habitants recensés dans la commune de Man",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les réservations d'un hôtel ou d'un campement touristique",
        texte:
          "Pour un établissement qui accueille randonneurs et visiteurs, centraliser les réservations, les acomptes et les échanges avec les clients évite les doubles réservations. C'est le périmètre de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Structurer la relation client d'un commerce ou d'une enseigne locale",
        texte:
          "Pour un commerce de la ville, un carnet clients numérique avec relances et historique d'achats remplace les notes éparpillées. Cela commence par un échange avec notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Suivre les projets et les financements d'une association",
        texte:
          "Pour une organisation locale ou une ONG, suivre les budgets, les bénéficiaires et les rapports aux bailleurs dans un même outil réduit le travail de reporting. C'est un cas d'usage de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous intervenir à Man alors que vous n'y êtes pas installés ?",
        answer:
          "Oui, à distance. Audyxa n'a pas de bureau à Man ; notre fondateur est basé à Abomey-Calavi, au Bénin. La distance ne change pas la méthode : diagnostic, outil, formation courte et suivi.",
      },
      {
        question: "Le tourisme à Man justifie-t-il un investissement numérique ?",
        answer:
          "Cela dépend de la structure. Nous ne disposons pas de chiffre récent et fiable sur la fréquentation. Pour un petit hébergement, un outil de réservation simple et une présence en ligne soignée suffisent souvent, sans gros investissement.",
      },
      {
        question: "Quelle différence entre la ville de Man et la région du Tonkpi ?",
        answer:
          "Le chiffre de population cité sur cette page concerne la commune de Man. La région du Tonkpi est plus large et regroupe d'autres départements. Nous précisons toujours le périmètre pour éviter les confusions.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "divo",
    villeName: "Divo",
    metaDescription:
      "Audyxa accompagne les entreprises de Divo, au sud du pays : planteurs, coopératives, commerce et services. Gestion et automatisation, intervention à distance.",
    resume:
      "Audyxa accompagne les entreprises de Divo dans leur transformation digitale : suivi des achats agricoles, gestion de commerce et automatisation administrative. Divo est une ville du centre-sud, dans une zone agricole où se côtoient cultures de rente et commerce de proximité.",
    coupDoeil: [
      "Divo est le chef-lieu de la région du Lôh-Djiboua, dans le centre-sud du pays, entre la côte et les zones forestières de l'intérieur.",
      "Son économie repose en grande partie sur l'agriculture et sur le commerce lié aux produits des plantations. Nous n'avons pas trouvé de statistique récente et fiable de production propre à la commune, et nous n'en avançons donc pas.",
    ],
    faits: [
      {
        value: "294 559",
        label: "habitants recensés dans la commune de Divo",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Remplacer les carnets d'un acheteur de produits de plantation",
        texte:
          "Pour un acheteur qui collecte auprès de nombreux planteurs, un suivi numérique des pesées, des avances et des paiements limite les contestations. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Moderniser la gestion d'une quincaillerie ou d'un commerce de détail",
        texte:
          "Pour un commerce qui vend à crédit ou en gros, suivre les clients, les stocks et les impayés dans un outil unique évite de perdre la trace des ventes. Cela fait partie de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Alléger le secrétariat d'un cabinet ou d'une petite structure de services",
        texte:
          "Pour un cabinet, un centre de santé privé ou une petite structure de services, la prise de rendez-vous, les relances et la facturation peuvent être automatisées sans changer toute l'organisation. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "sante",
        sectorAnchor: "santé",
      },
    ],
    faq: [
      {
        question: "Y a-t-il un conseiller Audyxa à Divo ?",
        answer:
          "Non, Audyxa n'a pas de bureau à Divo. Notre fondateur est basé à Abomey-Calavi, au Bénin, et nous travaillons à distance. Les échanges se font par appel, messagerie et partage d'écran.",
      },
      {
        question: "Une très petite entreprise a-t-elle vraiment besoin d'un cabinet de conseil ?",
        answer:
          "Pas toujours. Si votre besoin se résume à un tableur mieux organisé, nous vous le dirons après un premier échange plutôt que de vendre une mission inutile. Le conseil se justifie surtout quand les erreurs ou les retards coûtent réellement de l'argent.",
      },
      {
        question: "Comment se passe un premier contact ?",
        answer:
          "Un échange court pour comprendre votre activité, puis un diagnostic cadré dans le temps avec des recommandations écrites. La suite éventuelle est décidée ensuite, sans engagement de départ.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "gagnoa",
    villeName: "Gagnoa",
    metaDescription:
      "Audyxa accompagne les entreprises de Gagnoa, ville agricole du centre-ouest : cacao, café, hévéa. Traçabilité, gestion et automatisation, en mission à distance.",
    resume:
      "Audyxa accompagne les entreprises de Gagnoa dans leur transformation digitale : suivi des achats agricoles, gestion commerciale et automatisation des tâches administratives. Gagnoa est le chef-lieu de la région du Gôh, dans le centre-ouest, une zone de plantations et de commerce.",
    coupDoeil: [
      "Gagnoa est le chef-lieu de la région du Gôh, dans le centre-ouest ivoirien, et une étape commerciale importante entre Abidjan, Daloa et l'ouest du pays.",
      "L'économie locale s'appuie sur l'agriculture et le négoce de produits de plantation, avec un tissu de commerces, de transporteurs et de petites entreprises de services.",
    ],
    faits: [
      {
        value: "277 044",
        label: "habitants recensés dans la commune de Gagnoa",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les livraisons d'un négociant vers les ports",
        texte:
          "Pour un négociant qui expédie des produits agricoles vers Abidjan ou San-Pédro, suivre chaque camion, chaque lot et chaque règlement dans un tableau partagé réduit les écarts. C'est un cas d'usage de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Fiabiliser le registre d'adhérents d'une coopérative",
        texte:
          "Pour une coopérative, un registre propre des membres, de leurs apports et de leurs paiements prépare les contrôles et les demandes de financement. Cela relève de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser la gestion d'un cabinet comptable ou d'un prestataire de services",
        texte:
          "Pour un cabinet qui tient les comptes de nombreux petits clients, centraliser la collecte des pièces et les rappels d'échéances évite les retards. C'est le rôle de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "cabinets-comptables",
        sectorAnchor: "cabinets comptables",
      },
    ],
    faq: [
      {
        question: "Vos équipes se déplacent-elles à Gagnoa ?",
        answer:
          "Audyxa n'a pas de bureau à Gagnoa et ne s'y déplace pas par défaut. Notre fondateur est basé à Abomey-Calavi, au Bénin. Le travail est mené à distance, avec des livrables écrits que votre équipe peut relire à son rythme.",
      },
      {
        question: "Savez-vous quelles entreprises de Gagnoa ont déjà été digitalisées ?",
        answer:
          "Non, et nous ne prétendons pas le savoir. Nous n'avons pas de statistique fiable sur le niveau d'équipement numérique des entreprises de la ville. Chaque mission commence donc par un état des lieux de votre situation réelle.",
      },
      {
        question: "Quel type de budget faut-il prévoir pour une première mission ?",
        answer:
          "Il dépend du périmètre. Nous ne publions pas de tarif standard pour Gagnoa. Après un premier échange, nous proposons un diagnostic borné, avec un coût et un calendrier annoncés avant le démarrage.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "abengourou",
    villeName: "Abengourou",
    metaDescription:
      "Audyxa accompagne les entreprises d'Abengourou, ville de l'Indénié-Djuablin proche du Ghana : cacao, hévéa, commerce. Gestion et automatisation à distance.",
    resume:
      "Audyxa accompagne les entreprises d'Abengourou dans leur transformation digitale : suivi des achats agricoles, gestion de commerce et automatisation administrative. Abengourou est le chef-lieu de la région de l'Indénié-Djuablin, dans l'est du pays, à proximité de la frontière ghanéenne.",
    coupDoeil: [
      "Abengourou est présentée comme la capitale du royaume de l'Indénié, fondée en 1855 d'après les sources régionales. Son économie repose sur le cacao, le café, l'hévéa, le bois et l'anacarde.",
      "La région fut longtemps une grande zone cacaoyère, mais un reportage de 2021 la situe aujourd'hui au cinquième rang des zones de production, avec environ 90 000 tonnes par an : une estimation journalistique, non un chiffre officiel actualisé.",
    ],
    faits: [
      {
        value: "164 424",
        label: "habitants recensés dans la commune d'Abengourou",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Moderniser la gestion d'un acheteur de cacao ou d'hévéa",
        texte:
          "Pour un acheteur qui travaille avec de nombreux producteurs et plusieurs produits, un suivi unique des pesées, des prix du jour et des règlements limite les erreurs. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Cadrer les flux commerciaux d'un négoce proche de la frontière",
        texte:
          "Pour un commerce qui échange avec le Ghana voisin, documenter les achats, les conversions de devises et les règlements dans un outil clair aide à piloter la marge réelle. Cela relève de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Suivre l'activité d'une petite entreprise de BTP ou d'artisanat",
        texte:
          "Pour une entreprise du bâtiment, suivre les chantiers, les achats de matériaux et les situations de travaux dans un même outil évite les pertes sur les devis. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
    ],
    faq: [
      {
        question: "Audyxa possède-t-il une équipe à Abengourou ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Abengourou. Notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions sont menées à distance.",
      },
      {
        question: "La proximité du Ghana change-t-elle votre approche ?",
        answer:
          "Elle ne change pas notre méthode, mais elle influence les besoins : suivi de plusieurs devises, documents commerciaux dans deux langues. Nous ne donnons aucun conseil douanier ou juridique sur les échanges transfrontaliers.",
      },
      {
        question: "Les chiffres de production cités pour la région sont-ils officiels ?",
        answer:
          "Non. Le volume d'environ 90 000 tonnes de cacao vient d'un reportage de presse de 2021 et doit se lire comme un ordre de grandeur. Pour un chiffre officiel actualisé, il faut consulter le Conseil du Café-Cacao.",
      },
    ],
  },
];
