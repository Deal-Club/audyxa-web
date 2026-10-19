/**
 * Contenu enrichi de 10 villes de la RD Congo (Kinshasa, Lubumbashi, Mbuji-Mayi,
 * Kananga, Kisangani, Bukavu, Goma, Kolwezi, Likasi, Tshikapa).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source. Les populations urbaines de la RD Congo sont des
 * estimations (le dernier recensement général remonte à 1984) : elles sont
 * présentées comme telles, ou le texte reste qualitatif. Audyxa n'a aucun bureau
 * dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_RD_CONGO: VilleContent[] = [
  // ---------------------------------------------------------------- KINSHASA
  {
    paysSlug: "rd-congo",
    villeSlug: "kinshasa",
    villeName: "Kinshasa",
    metaDescription:
      "Audyxa appuie à distance les entreprises, banques et institutions de Kinshasa, capitale de la RD Congo : processus, outils métier et automatisation sur mesure.",
    resume:
      "Audyxa appuie à distance les entreprises, établissements financiers, opérateurs de télécoms et organisations de Kinshasa. Capitale politique et plus grande agglomération du pays, la ville concentre sièges sociaux, administrations et ONG, ce qui multiplie les flux d'information à fiabiliser et les processus à documenter.",
    coupDoeil: [
      "Kinshasa a été fondée en 1881 par Henry Morton Stanley sous le nom de Léopoldville et porte son nom actuel depuis 1966.",
      "Ville-province à part entière, elle fait face à Brazzaville sur l'autre rive du fleuve Congo, ce qui en fait l'une des rares paires de capitales les plus rapprochées au monde.",
    ],
    faits: [
      {
        value: "environ 17 millions",
        label: "habitants estimés dans l'agglomération en 2024 (estimation issue de projections, pas d'un recensement)",
        source: "projections des Nations unies (World Urbanization Prospects), reprises par Macrotrends, 2024",
      },
    ],
    casUsage: [
      {
        titre: "Fiabiliser le suivi de dossiers dans une institution ou un siège",
        texte:
          "Pour une administration, un siège de groupe ou un organisme public, un circuit de validation documenté et un tableau de bord partagé évitent que les dossiers se perdent entre services. C'est l'objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Structurer le parcours client d'un établissement financier",
        texte:
          "Pour une banque, une microfinance ou un acteur du paiement mobile, relier les canaux d'accueil, le suivi des dossiers et la relance au sein d'un même outil réduit les ressaisies. Nous l'abordons dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
      {
        titre: "Outiller les programmes d'une ONG ou d'une agence",
        texte:
          "Pour une organisation qui pilote plusieurs projets et bailleurs à la fois, un outil de suivi des activités et des rapports remplace les fichiers dispersés. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Kinshasa ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kinshasa : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Comment travailler à distance quand la connexion est irrégulière ?",
        answer:
          "Nous le prenons en compte dès le cadrage : documents légers, réunions courtes, comptes rendus écrits et outils qui supportent une reconnexion. Nous ne promettons pas de performance réseau que nous ne contrôlons pas.",
      },
      {
        question: "Quels sont vos tarifs à Kinshasa ?",
        answer:
          "Chaque mission commence par un diagnostic cadré, dont le périmètre et le prix sont fixés avec vous avant le démarrage. Nous n'affichons pas de grille unique, car elle dépend de la taille de l'organisation et du sujet traité.",
      },
    ],
  },
  // ---------------------------------------------------------------- LUBUMBASHI
  {
    paysSlug: "rd-congo",
    villeSlug: "lubumbashi",
    villeName: "Lubumbashi",
    metaDescription:
      "Audyxa accompagne à distance sous-traitants miniers, transporteurs et commerces de Lubumbashi, capitale du Haut-Katanga : suivi des opérations et outils métier.",
    resume:
      "Audyxa accompagne à distance les sous-traitants miniers, transporteurs, négociants et établissements d'enseignement de Lubumbashi. La ville vit au rythme de la ceinture de cuivre et de cobalt du Haut-Katanga et de ses liaisons routières vers la Zambie, deux réalités où le suivi des commandes, des camions et des fournisseurs pèse lourd.",
    coupDoeil: [
      "Lubumbashi a été fondée en 1910 sous le nom d'Élisabethville et rebaptisée en 1966.",
      "Chef-lieu du Haut-Katanga, elle accueille l'Université de Lubumbashi, ouverte en 1956, et sert de base logistique à de nombreux acteurs miniers de la région.",
    ],
    faits: [
      {
        value: "1 158 051",
        label: "habitants estimés en 2010, dernier chiffre détaillé retrouvé (les estimations récentes varient beaucoup selon les sources)",
        source: "Jean Omasombo Tshonda, Haut-Katanga, tome 2, Musée royal de l'Afrique centrale, 2018",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les commandes d'un sous-traitant minier",
        texte:
          "Pour une entreprise qui fournit pièces, carburant ou services à des sites miniers, centraliser devis, bons de commande et livraisons évite les litiges de facturation. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Piloter les rotations d'un transporteur routier",
        texte:
          "Pour un transporteur dont les camions circulent vers la Zambie et l'Afrique australe, un suivi des trajets, des documents douaniers et des délais permet de mieux anticiper les retards. Nous l'organisons avec notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Moderniser la gestion d'un établissement d'enseignement",
        texte:
          "Pour une école privée ou un institut supérieur, inscriptions, frais de scolarité et résultats peuvent tenir dans un outil unique plutôt que dans plusieurs registres. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il implanté à Lubumbashi ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Lubumbashi : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se déroulent entièrement à distance.",
      },
      {
        question: "Travaillez-vous directement avec les grandes sociétés minières ?",
        answer:
          "Notre positionnement vise surtout les PME et les entreprises de services autour de l'activité minière. Nous n'intervenons pas sur les opérations d'extraction elles-mêmes, qui relèvent de spécialistes du métier.",
      },
      {
        question: "Les échanges en français suffisent-ils pour une mission ?",
        answer:
          "Oui, nos missions se déroulent en français. Si vos équipes utilisent le swahili au quotidien, nous prévoyons des supports simples et illustrés pour faciliter la prise en main des outils.",
      },
    ],
  },
  // ---------------------------------------------------------------- MBUJI-MAYI
  {
    paysSlug: "rd-congo",
    villeSlug: "mbuji-mayi",
    villeName: "Mbuji-Mayi",
    metaDescription:
      "Audyxa travaille à distance avec les négociants, commerces et structures de Mbuji-Mayi, capitale du Kasaï-Oriental : suivi des ventes, stocks et outils simples.",
    resume:
      "Audyxa travaille à distance avec les négociants, commerçants et organisations de Mbuji-Mayi, capitale du Kasaï-Oriental. Bâtie autour de l'exploitation du diamant, la ville a une économie de comptoirs, d'achats au comptant et de petits commerces où un suivi simple des entrées et des sorties change vite la lisibilité de l'activité.",
    coupDoeil: [
      "Mbuji-Mayi est née de l'exploitation diamantifère et s'appelait Bakwanga avant de prendre son nom actuel en 1963.",
      "La rivière Mbuji-Mayi borde la ville à l'est, et ses cours d'eau voisins sont utilisés pour le tamisage des graviers diamantifères.",
    ],
    faits: [
      {
        value: "2 892 000",
        label: "habitants estimés en 2023 (estimation de la CIA, à lire comme un ordre de grandeur : aucun recensement récent n'existe)",
        source: "CIA World Factbook, estimation 2023, relayée par l'article Wikipédia consacré à la ville",
      },
    ],
    casUsage: [
      {
        titre: "Tenir les comptes d'un comptoir d'achat",
        texte:
          "Pour un négociant qui achète et revend au comptant, un registre numérique des achats, des paiements et des avances limite les écarts de caisse et les contestations. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Suivre les stocks d'un commerce de détail",
        texte:
          "Pour une boutique ou un grossiste qui s'approvisionne par la route depuis d'autres provinces, savoir ce qui reste en rayon et ce qu'il faut recommander évite les ruptures. Notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser les activités d'une structure de santé ou d'une association",
        texte:
          "Pour un centre de santé ou une association locale, un dossier patient ou membre numérique, même basique, remplace les cahiers qui s'abîment. C'est un travail de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "sante",
        sectorAnchor: "santé",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Mbuji-Mayi ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Mbuji-Mayi : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se fait à distance.",
      },
      {
        question: "Intervenez-vous dans le secteur du diamant ?",
        answer:
          "Nous n'intervenons ni dans l'extraction ni dans la certification des pierres. Nous aidons les entreprises à mieux suivre leurs achats, leurs stocks et leurs comptes avec des outils administratifs adaptés.",
      },
      {
        question: "Peut-on commencer avec un équipement très simple ?",
        answer:
          "Oui. Un téléphone ou un ordinateur d'occasion suffit souvent pour démarrer. Nous choisissons des outils légers, utilisables avec une connexion limitée, plutôt que des solutions lourdes à installer.",
      },
    ],
  },
  // ---------------------------------------------------------------- KANANGA
  {
    paysSlug: "rd-congo",
    villeSlug: "kananga",
    villeName: "Kananga",
    metaDescription:
      "Audyxa accompagne à distance commerces, écoles et organisations de Kananga, chef-lieu du Kasaï-Central : suivi des activités, outils métier et formation.",
    resume:
      "Audyxa accompagne à distance les commerces, écoles, structures de santé et organisations de Kananga, chef-lieu du Kasaï-Central. Située sur la route nationale 1 et reliée au rail, la ville est un carrefour d'échanges agricoles et commerciaux au cœur du Kasaï.",
    coupDoeil: [
      "Kananga s'est appelée Luluabourg avant d'être rebaptisée, et reste souvent désignée sous son nom historique par les anciens.",
      "La ville se trouve près de la rivière Lulua, sur la route nationale 1 qui la relie à Kinshasa, et dispose d'une gare sur la ligne du chemin de fer Bas-Congo au Katanga.",
    ],
    faits: [
      {
        value: "1927",
        label: "année d'arrivée du premier train à Kananga sur la ligne Bas-Congo au Katanga (30 novembre)",
        source: "article Wikipédia consacré à Kananga, d'après les sources historiques ferroviaires citées",
      },
    ],
    casUsage: [
      {
        titre: "Structurer le suivi des commandes d'un grossiste agricole",
        texte:
          "Pour un négociant qui collecte céréales, manioc ou café auprès de producteurs, tenir un état clair des quantités, des acomptes et des livraisons évite les malentendus. C'est un chantier de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Simplifier l'administration d'une école ou d'une université",
        texte:
          "Pour un établissement qui gère des centaines d'élèves ou d'étudiants, un outil d'inscription et de suivi des paiements remplace les listes papier. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Coordonner les activités d'une association ou d'un programme",
        texte:
          "Pour une ONG locale qui travaille avec plusieurs partenaires, un tableau partagé des actions, des responsables et des échéances rend le suivi plus transparent. Nous l'organisons avec notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe à Kananga ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kananga : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions sont menées à distance.",
      },
      {
        question: "Peut-on travailler avec une connexion limitée ?",
        answer:
          "Oui, c'est une contrainte que nous intégrons au cadrage. Nous privilégions des échanges asynchrones, des documents légers et des outils capables de fonctionner par intermittence.",
      },
      {
        question: "Accompagnez-vous les organisations de petite taille ?",
        answer:
          "Oui. Une boutique, une école ou une association locale peut démarrer par un diagnostic court, avec un périmètre limité, avant d'envisager d'autres étapes.",
      },
    ],
  },
  // ---------------------------------------------------------------- KISANGANI
  {
    paysSlug: "rd-congo",
    villeSlug: "kisangani",
    villeName: "Kisangani",
    metaDescription:
      "Audyxa appuie à distance armateurs, négociants fluviaux et établissements de Kisangani, porte du bassin du Congo : suivi des cargaisons, stocks et outils métier.",
    resume:
      "Audyxa appuie à distance les armateurs, négociants, transporteurs fluviaux et établissements d'enseignement de Kisangani. Située au point où le fleuve Congo cesse d'être navigable vers l'amont, la ville vit du transit des marchandises entre la forêt, les rives du fleuve et le reste du pays.",
    coupDoeil: [
      "Kisangani s'est appelée Stanleyville jusqu'en 1966 et se trouve en aval des chutes Boyoma, au confluent du Congo, de la Tshopo et de la Lindi.",
      "La pêche des Wagenia, avec de grandes nasses fixées dans les rapides, est une pratique artisanale emblématique de la ville.",
    ],
    faits: [
      {
        value: "environ 1 700 km",
        label: "de voie fluviale navigable entre Kisangani et Kinshasa, sans chute sur ce tronçon",
        source: "étude de navigation Artelia pour l'Union européenne, 2017-2018 (1 734 km)",
      },
    ],
    casUsage: [
      {
        titre: "Suivre des cargaisons sur plusieurs semaines de navigation",
        texte:
          "Pour un armateur ou un affréteur dont les convois mettent des semaines à rallier Kinshasa, un suivi des chargements, des escales et des paiements limite les pertes d'information. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Gérer les achats et ventes d'un négociant de produits forestiers et agricoles",
        texte:
          "Pour un négociant qui achète du bois, du riz ou du poisson le long du fleuve, un registre numérique des lots, des avances et des ventes clarifie la marge réelle. Notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Outiller un établissement de recherche ou d'enseignement",
        texte:
          "Pour une université ou un centre de recherche, centraliser dossiers d'étudiants, publications et conventions réduit le temps perdu à retrouver des documents. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Kisangani ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kisangani : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission est menée à distance.",
      },
      {
        question: "Comment gérer des équipes souvent déconnectées sur le fleuve ?",
        answer:
          "Nous concevons des outils qui acceptent la saisie hors ligne puis la synchronisation à la prochaine connexion. Nous précisons ce qui est réaliste selon vos usages avant de nous engager.",
      },
      {
        question: "Faut-il être un grand armateur pour faire appel à vous ?",
        answer:
          "Non. Un petit négociant ou un transporteur indépendant peut commencer par un diagnostic limité à un seul flux, par exemple le suivi de ses chargements ou de ses encaissements.",
      },
    ],
  },
  // ---------------------------------------------------------------- BUKAVU
  {
    paysSlug: "rd-congo",
    villeSlug: "bukavu",
    villeName: "Bukavu",
    metaDescription:
      "Audyxa accompagne à distance commerces, hôtels, ONG et universités de Bukavu, chef-lieu du Sud-Kivu, sur le lac Kivu : outils métier, suivi et processus.",
    resume:
      "Audyxa accompagne à distance les commerces, hôtels, organisations humanitaires et établissements d'enseignement de Bukavu, chef-lieu du Sud-Kivu. La ville s'étire en baie sur la rive sud-ouest du lac Kivu, face à Cyangugu au Rwanda, et compte une vie universitaire et associative importante.",
    coupDoeil: [
      "Bukavu a porté le nom de Costermansville de 1927 à 1953, avant de retrouver son nom actuel.",
      "La ville abrite plusieurs établissements d'enseignement supérieur, dont l'Université de Bukavu et l'Université catholique de Bukavu.",
    ],
    faits: [
      {
        value: "1927 à 1953",
        label: "période pendant laquelle la ville s'est appelée Costermansville",
        source: "article Wikipédia consacré à Bukavu, d'après les sources historiques citées",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les réservations d'un hôtel ou d'un restaurant au bord du lac",
        texte:
          "Pour un établissement d'hébergement ou de restauration, un registre central des réservations, des paiements et des stocks évite les doublons et les oublis. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Suivre des activités et des rapports de projet",
        texte:
          "Pour une ONG ou une association qui rend compte à plusieurs partenaires, une base unique des activités, des bénéficiaires et des justificatifs facilite l'établissement des rapports. Notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Organiser la scolarité d'un établissement supérieur",
        texte:
          "Pour une université ou un institut, regrouper inscriptions, notes et paiements dans un même outil fait gagner du temps aux secrétariats. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Bukavu ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Bukavu : notre fondateur est basé à Abomey-Calavi, au Bénin, et toutes les missions se déroulent à distance.",
      },
      {
        question: "Le contexte actuel de la région change-t-il votre façon de travailler ?",
        answer:
          "Le travail à distance ne dépend pas de la présence physique de notre équipe. Nous adaptons toutefois le calendrier et les modalités d'échange à la situation de chaque client, qui connaît mieux que nous les contraintes de son quotidien.",
      },
      {
        question: "Pouvez-vous aider à protéger des données sensibles ?",
        answer:
          "Oui, pour une organisation qui manipule des listes de bénéficiaires ou des documents confidentiels, nous proposons des règles d'accès et de sauvegarde simples, sans promettre une sécurité absolue.",
      },
    ],
  },
  // ---------------------------------------------------------------- GOMA
  {
    paysSlug: "rd-congo",
    villeSlug: "goma",
    villeName: "Goma",
    metaDescription:
      "Audyxa travaille à distance avec les entreprises, ONG et commerces de Goma, au pied du Nyiragongo, sur le lac Kivu : suivi des activités, stocks et outils métier.",
    resume:
      "Audyxa travaille à distance avec les entreprises, ONG, hôtels et commerces de Goma, chef-lieu du Nord-Kivu. Bâtie au nord du lac Kivu, sur des coulées du volcan Nyiragongo, la ville est un lieu d'échanges avec Gisenyi, au Rwanda, et un centre d'activité pour de nombreuses organisations.",
    coupDoeil: [
      "Goma est construite en grande partie sur des coulées de lave du Nyiragongo, qui domine la ville à environ 14 km au nord.",
      "Le volcan est entré en éruption en 2002, avec une coulée qui a atteint le centre-ville, puis en mai 2021.",
    ],
    faits: [
      {
        value: "2002 et 2021",
        label: "années des deux dernières éruptions majeures du Nyiragongo qui ont touché la ville (la seconde le 22 mai 2021)",
        source: "Courrier international, n° 1596, juin 2021, citant The Economist (via l'article Wikipédia consacré à Goma)",
      },
    ],
    casUsage: [
      {
        titre: "Sauvegarder les données d'une organisation",
        texte:
          "Pour une ONG ou une entreprise qui ne peut pas se permettre de perdre ses dossiers, des sauvegardes régulières et une copie hors site protègent contre les aléas matériels et naturels. C'est un volet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "cybersécurité, confidentialité et résilience",
      },
      {
        titre: "Suivre les échanges commerciaux d'un détaillant ou d'un grossiste",
        texte:
          "Pour un commerce qui s'approvisionne localement et au-delà de la frontière, un suivi des achats, des ventes et des devises employées clarifie les marges. Notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Outiller les opérations d'un hôtel ou d'un lodge",
        texte:
          "Pour un établissement qui accueille voyageurs, délégations et organisations, un outil de réservation et de facturation évite les erreurs de chambre et de paiement. C'est le travail de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Goma ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Goma : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission est réalisée à distance.",
      },
      {
        question: "Pourquoi parler de sauvegarde dans une ville exposée à un volcan ?",
        answer:
          "Parce que garder une copie de ses données hors du site d'activité protège de tout type d'incident, naturel, matériel ou électrique. C'est une bonne pratique générale que nous recommandons à tous nos clients, pas une spécificité de Goma.",
      },
      {
        question: "Peut-on démarrer sans équipe informatique interne ?",
        answer:
          "Oui. Beaucoup de nos clients n'ont pas de service informatique. Nous choisissons des outils que quelques personnes peuvent administrer, et nous documentons chaque étape.",
      },
    ],
  },
  // ---------------------------------------------------------------- KOLWEZI
  {
    paysSlug: "rd-congo",
    villeSlug: "kolwezi",
    villeName: "Kolwezi",
    metaDescription:
      "Audyxa accompagne à distance fournisseurs, transporteurs et PME de Kolwezi, capitale du Lualaba et du cuivre-cobalt : suivi des achats, des stocks et des contrats.",
    resume:
      "Audyxa accompagne à distance les fournisseurs, prestataires de services, transporteurs et PME de Kolwezi, chef-lieu du Lualaba. Fondée pour loger l'administration des mines de l'ouest de l'ancienne Union minière du Haut-Katanga, la ville est aujourd'hui au cœur de la production de cuivre et de cobalt.",
    coupDoeil: [
      "Kolwezi a été créée en 1937 pour abriter le siège des mines de l'ouest de l'Union minière du Haut-Katanga.",
      "La ville est le chef-lieu de la province du Lualaba, détachée de l'ancien Katanga lors du redécoupage de 2015.",
    ],
    faits: [
      {
        value: "73 %",
        label: "part estimée de la RD Congo dans la production minière mondiale de cobalt (niveau national, pas propre à Kolwezi)",
        source: "USGS, Mineral Commodity Summaries 2026, chapitre cobalt",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les achats et les stocks d'un prestataire de services miniers",
        texte:
          "Pour une entreprise qui approvisionne des sites en pièces, vêtements de sécurité ou carburant, un suivi du stock et des commandes évite les ruptures. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Mieux documenter les contrats avec les donneurs d'ordre",
        texte:
          "Pour un sous-traitant dont les contrats comportent des exigences de conformité et de reporting, centraliser pièces, échéances et attestations évite les oublis. Nous l'abordons dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "cybersécurité, confidentialité et résilience",
      },
      {
        titre: "Suivre la consommation d'énergie d'un site industriel",
        texte:
          "Pour une entreprise qui dépend de groupes électrogènes ou d'un réseau parfois instable, relever et analyser la consommation aide à anticiper les coûts. C'est l'objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "energie",
        sectorAnchor: "énergie",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Kolwezi ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kolwezi : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se déroulent à distance.",
      },
      {
        question: "Travaillez-vous sur des sites miniers ?",
        answer:
          "Non. Nous n'intervenons pas dans les opérations d'extraction ni sur les sites. Notre rôle se limite aux processus administratifs, aux outils de gestion et aux données de l'entreprise cliente.",
      },
      {
        question: "Comment traiter des informations commerciales confidentielles ?",
        answer:
          "Nous convenons dès le départ des accès, de l'hébergement et des règles de partage. Nous ne conservons rien au-delà de ce que la mission exige et pouvons signer un accord de confidentialité.",
      },
    ],
  },
  // ---------------------------------------------------------------- LIKASI
  {
    paysSlug: "rd-congo",
    villeSlug: "likasi",
    villeName: "Likasi",
    metaDescription:
      "Audyxa accompagne à distance ateliers, négociants et PME de Likasi, ancienne Jadotville du Haut-Katanga, ville de métallurgie : gestion, devis et suivi de production.",
    resume:
      "Audyxa accompagne à distance les ateliers, entreprises de métallurgie et de services, commerces et écoles de Likasi, dans le Haut-Katanga. La ville s'est construite autour du traitement du cuivre et du cobalt, ce qui a laissé un tissu d'ateliers de maintenance et de fournisseurs industriels.",
    coupDoeil: [
      "Likasi s'est appelée Jadotville de 1931 à 1971, du nom de l'ingénieur Jean Jadot, avant de retrouver son nom actuel.",
      "La ville est née dans les années 1910 avec le début de l'exploitation des mines de cuivre de Likasi et de Shituru.",
    ],
    faits: [
      {
        value: "30 000 tonnes",
        label: "capacité annoncée des usines de Shituru pour le cuivre électrolytique à leur ouverture en 1929",
        source: "Union minière du Haut-Katanga, 1906-1956, publication de 1956 (via l'article Wikipédia consacré à Likasi)",
      },
    ],
    casUsage: [
      {
        titre: "Chiffrer et suivre les travaux d'un atelier de maintenance",
        texte:
          "Pour un atelier de mécanique, de chaudronnerie ou d'électricité, des devis normalisés et un suivi des interventions évitent les travaux non facturés. Nous l'organisons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Suivre les ventes d'un commerce de quartier",
        texte:
          "Pour une boutique ou un marché de produits alimentaires, un suivi quotidien des ventes et des dettes clients rend visible ce qui rapporte vraiment. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Faire vivre une école technique ou un centre de formation",
        texte:
          "Pour un établissement qui forme des techniciens, suivre les inscriptions, les stages et les attestations dans un outil unique valorise le sérieux de la formation. Notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Likasi ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Likasi : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission est réalisée à distance.",
      },
      {
        question: "Pouvez-vous reprendre des fichiers Excel existants ?",
        answer:
          "Oui, c'est souvent le point de départ. Nous partons de vos tableurs et cahiers actuels pour proposer une organisation plus fiable, sans tout reconstruire d'emblée.",
      },
      {
        question: "Combien de temps dure un premier diagnostic ?",
        answer:
          "La durée dépend de la taille de l'entreprise et du périmètre retenu. Nous la fixons avec vous avant de commencer, et un atelier de quelques personnes se traite généralement plus vite qu'un groupe multi-sites.",
      },
    ],
  },
  // ---------------------------------------------------------------- TSHIKAPA
  {
    paysSlug: "rd-congo",
    villeSlug: "tshikapa",
    villeName: "Tshikapa",
    metaDescription:
      "Audyxa travaille à distance avec les comptoirs, commerçants et associations de Tshikapa, chef-lieu du Kasaï, ville du diamant artisanal : comptes, stocks et suivi.",
    resume:
      "Audyxa travaille à distance avec les comptoirs, commerçants, transporteurs et associations de Tshikapa, chef-lieu du Kasaï. Établie au confluent des rivières Tshikapa et Kasaï, la ville a prospéré grâce au diamant artisanal, et son activité dépend beaucoup du commerce de proximité et des échanges par la route nationale 1.",
    coupDoeil: [
      "Des diamants ont été découverts dans la région de Tshikapa en 1907, selon l'article Wikipédia consacré à la ville, par un prospecteur de la Forminière.",
      "La ville s'étend sur les deux rives de la rivière Kasaï, reliées par un pont métallique.",
    ],
    faits: [
      {
        value: "1982",
        label: "année de la libéralisation de l'exploitation artisanale du diamant, qui a provoqué un essor rapide de la ville et de ses comptoirs",
        source: "article Wikipédia consacré à Tshikapa, d'après les sources historiques citées",
      },
    ],
    casUsage: [
      {
        titre: "Tenir la comptabilité simple d'un comptoir",
        texte:
          "Pour un comptoir ou un petit négociant, un journal numérique des achats, des avances et des règlements clarifie la situation réelle et facilite le dialogue avec les partenaires. C'est la base de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "cabinets-comptables",
        sectorAnchor: "cabinets comptables",
      },
      {
        titre: "Organiser les approvisionnements d'un commerce",
        texte:
          "Pour un commerce qui reçoit ses marchandises par une route longue et parfois difficile, anticiper les commandes selon les ventes passées limite les ruptures. Notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Structurer l'action d'une association locale",
        texte:
          "Pour une association qui soutient des familles ou des écoles, tenir à jour la liste des membres, des actions et des dons facilite la transparence. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Tshikapa ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Tshikapa : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se font à distance.",
      },
      {
        question: "Pouvez-vous aider sur la traçabilité des diamants ?",
        answer:
          "Non, la traçabilité et la certification des pierres relèvent des autorités et de spécialistes dédiés. Nous aidons seulement à tenir proprement les comptes, les stocks et les documents internes d'une entreprise.",
      },
      {
        question: "Faut-il savoir utiliser un ordinateur pour commencer ?",
        answer:
          "Pas nécessairement. Nous adaptons les outils à ce que votre équipe maîtrise déjà, y compris le téléphone, et prévoyons une prise en main accompagnée.",
      },
    ],
  },
];
