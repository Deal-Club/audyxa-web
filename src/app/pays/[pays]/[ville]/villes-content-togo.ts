/**
 * Contenu curaté des villes du Togo hors Lomé (déjà traitée dans
 * `villes-content.ts`).
 *
 * Règle anti-invention : chaque chiffre porte sa source réelle (organisme +
 * année). Les effectifs cités sont ceux des PRÉFECTURES du RGPH-5 (INSEED,
 * recensement de novembre 2022) : les effectifs communaux ou urbains ne sont
 * pas disponibles de façon fiable, ils ne sont donc pas affichés. Pour le
 * reste, le texte est qualitatif et l'incertitude est assumée.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_TOGO: VilleContent[] = [
  {
    paysSlug: "togo",
    villeSlug: "sokode",
    villeName: "Sokodé",
    metaDescription:
      "Sokodé (Togo) : Audyxa conduit à distance audit digital, automatisation et outils de gestion pour commerces, négociants et coopératives. Diagnostic sur mesure.",
    resume:
      "Sokodé est le chef-lieu de la région Centrale et de la préfecture de Tchaoudjo, une grande ville de marché installée sur l'axe qui relie Lomé au nord du pays. Les entreprises y vivent surtout du commerce de gros, de la collecte de produits agricoles et des services de proximité. Audyxa y intervient à distance, pour structurer le suivi des stocks, des ventes et des relations clients.",
    coupDoeil: [
      "Sokodé est généralement citée parmi les deux ou trois premières villes du Togo, mais les sources divergent sur son classement exact et son effectif urbain : nous n'affichons donc que le chiffre de la préfecture.",
      "La ville se situe sur la route nationale 1, l'épine dorsale qui relie le port de Lomé aux villes du nord et aux pays de l'hinterland.",
    ],
    faits: [
      {
        value: "240 360",
        label: "habitants dans la préfecture de Tchaoudjo, dont Sokodé est le chef-lieu",
        source:
          "recensement RGPH-5, Institut National de la Statistique et des Études Économiques et Démographiques (INSEED), 2022",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les stocks d'un commerce de gros",
        texte:
          "Pour un grossiste ou un négociant qui alimente plusieurs marchés, remplacer les cahiers et les échanges de messages par un suivi centralisé des entrées, des sorties et des créances limite les ruptures et les impayés oubliés. C'est un objet courant de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser la collecte auprès de producteurs",
        texte:
          "Pour une structure qui rassemble des récoltes (céréales, tubercules) auprès de nombreux producteurs, tracer les quantités, les paiements et les livraisons dans un outil partagé donne une vision fiable de la campagne. Cela relève de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Numériser le suivi d'une école ou d'un centre de formation",
        texte:
          "Pour un établissement privé, centraliser inscriptions, paiements de scolarité et communications aux parents évite les doubles saisies. Nous le cadrons lors d'un",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Y a-t-il une équipe Audyxa sur place à Sokodé ?",
        answer:
          "Non. Nous n'avons pas de bureau à Sokodé. Notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se déroulent à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Une mission à distance est-elle réaliste pour une entreprise peu équipée ?",
        answer:
          "Oui, à condition de partir de l'existant : un premier échange permet d'identifier les outils déjà utilisés (tableurs, messagerie, mobile money) et de proposer des améliorations qui fonctionnent même avec une connexion irrégulière.",
      },
      {
        question: "Pourquoi n'affichez-vous pas la population de Sokodé ?",
        answer:
          "Le recensement RGPH-5 publie des totaux par préfecture, et nous n'avons pas trouvé d'effectif urbain fiable et récent. Plutôt que de reprendre une estimation douteuse, nous citons le chiffre officiel de la préfecture de Tchaoudjo.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "kara",
    villeName: "Kara",
    metaDescription:
      "Kara (Togo) : Audyxa aide négociants, transporteurs et structures de formation à digitaliser leurs opérations, à distance. Audit, automatisation, outils métier.",
    resume:
      "Kara est le chef-lieu de la région du même nom, au nord du Togo, à environ 400 kilomètres de Lomé. La ville est un carrefour entre l'axe nord-sud et la route qui mène vers Bassar et le Bénin voisin. Audyxa y intervient à distance, notamment pour les acteurs du commerce, du transport et de l'enseignement.",
    coupDoeil: [
      "Kara se trouve au croisement de la route Lomé-Ouagadougou et d'un axe est-ouest en direction de Bassar, Djougou et Parakou, au Bénin.",
      "Les chiffres de population urbaine varient fortement selon les sources (un recensement ancien, des estimations récentes) : nous ne retenons que l'effectif officiel de la préfecture de Kozah.",
    ],
    faits: [
      {
        value: "283 738",
        label: "habitants dans la préfecture de Kozah, dont Kara est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Coordonner des flux de transport le long du corridor nord",
        texte:
          "Pour un transporteur ou un transitaire qui relie Lomé et le nord, un suivi des ordres de transport, des documents et des facturations dans un même outil réduit les relances téléphoniques. C'est l'objet de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Moderniser la gestion d'un établissement d'enseignement",
        texte:
          "Pour une école privée, un institut ou un centre de formation, un outil unique pour les inscriptions, les paiements et les notes allège le travail administratif. Cela se prépare dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Valoriser les données d'une activité de transformation",
        texte:
          "Pour un atelier de transformation de céréales, de tubercules ou de coton, relier production, ventes et coûts dans un tableau de bord permet de savoir quelles lignes sont réellement rentables. Nous le cadrons via un",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Avez-vous un bureau à Kara ?",
        answer:
          "Non, Audyxa n'a pas de bureau à Kara. Notre fondateur est installé à Abomey-Calavi, au Bénin, et nous travaillons à distance avec vos équipes, en visioconférence et par outils partagés.",
      },
      {
        question: "Peut-on travailler avec un établissement d'enseignement sans équipe informatique ?",
        answer:
          "Oui. Nous commençons par un diagnostic des pratiques réelles (inscriptions, paiements, bulletins) puis nous proposons des outils simples à prendre en main, sans supposer qu'un service informatique existe en interne.",
      },
      {
        question: "Kara est-elle bien la deuxième ville du Togo ?",
        answer:
          "Cela dépend des sources : Kara et Sokodé se disputent souvent ce rang, et les estimations de population urbaine ne concordent pas. Nous préférons ne pas trancher et citer le seul chiffre officiel disponible, celui de la préfecture de Kozah.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "kpalime",
    villeName: "Kpalimé",
    metaDescription:
      "Kpalimé (Togo) : Audyxa épaule hôtels, ateliers d'artisanat et filières café-cacao par un audit digital, de l'automatisation et un CRM, entièrement à distance.",
    resume:
      "Kpalimé, chef-lieu de la préfecture de Kloto, est le centre d'une zone de collines où se concentrent le café et le cacao du pays. C'est aussi une destination touristique de la région des Plateaux, à environ 120 kilomètres de Lomé. Audyxa y intervient à distance, auprès des acteurs de la filière agricole, de l'hébergement et de l'artisanat.",
    coupDoeil: [
      "Le Mont Agou, point culminant du Togo à environ 986 mètres, domine les plantations de café et de cacao qui entourent la ville.",
      "Le marché et les ateliers d'artisanat de Kpalimé, notamment les tissus teints au batik, attirent une clientèle venue de Lomé comme de l'étranger.",
    ],
    faits: [
      {
        value: "145 986",
        label: "habitants dans la préfecture de Kloto, dont Kpalimé est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les réservations d'un hébergement touristique",
        texte:
          "Pour un hôtel, une auberge ou un guide qui reçoit des visiteurs de la randonnée et de l'écotourisme, centraliser demandes, réservations et paiements évite les doubles réservations. C'est un cas typique de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Tracer les lots de café et de cacao",
        texte:
          "Pour un groupement ou un acheteur de café et de cacao, relier les apports des planteurs, les paiements et les ventes dans un registre unique donne une traçabilité utile face aux acheteurs. C'est un volet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Donner de la visibilité à un atelier d'artisanat",
        texte:
          "Pour un atelier de textile ou d'objets d'art, un catalogue en ligne relié à un suivi des commandes ouvre la vente à distance sans désorganiser la production. Nous l'abordons dans un",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Kpalimé ?",
        answer:
          "Non, nous n'avons ni bureau ni représentant à Kpalimé. Le fondateur d'Audyxa est basé à Abomey-Calavi, au Bénin, et les missions sont menées à distance.",
      },
      {
        question: "Un petit hébergement touristique peut-il en profiter ?",
        answer:
          "Oui, ce sont même des structures où un outil de réservation simple et un suivi des paiements changent beaucoup la gestion quotidienne. Le premier échange sert à vérifier que la solution reste adaptée à la taille de l'activité.",
      },
      {
        question: "Disposez-vous de statistiques récentes sur la production de café et de cacao à Kpalimé ?",
        answer:
          "Non. Nous n'avons pas trouvé de chiffre local fiable et récent sur ces filières, et nous préférons ne pas en afficher. Le diagnostic repose sur vos propres données de production et de vente.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "atakpame",
    villeName: "Atakpamé",
    metaDescription:
      "Atakpamé (Togo) : à distance, Audyxa aide coopératives, négociants et services publics à moderniser gestion, données et processus de travail. Audit sur mesure.",
    resume:
      "Atakpamé est le chef-lieu de la région des Plateaux et de la préfecture d'Ogou, une ville administrative et agricole située au centre du pays. Elle accueille notamment le siège de la Nouvelle Société Cotonnière du Togo (NSCT). Audyxa y intervient à distance, pour des structures agricoles, commerciales ou publiques qui veulent fiabiliser leur gestion.",
    coupDoeil: [
      "Atakpamé est la préfecture de référence de la région des Plateaux, ce qui en fait un lieu d'implantation naturel pour des services déconcentrés et des organisations agricoles.",
      "La ville est située dans une zone où se côtoient cultures vivrières (igname, maïs, manioc) et cultures de rente comme le coton.",
    ],
    faits: [
      {
        value: "253 467",
        label: "habitants dans la préfecture d'Ogou, dont Atakpamé est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Fiabiliser le suivi d'une filière agricole",
        texte:
          "Pour une organisation qui accompagne des producteurs de coton ou de cultures vivrières, un registre numérique des producteurs, des intrants distribués et des livraisons remplace les relevés dispersés. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Simplifier la circulation des dossiers dans un service public",
        texte:
          "Pour un service déconcentré ou une collectivité, suivre l'avancement des courriers et des demandes dans un circuit clair réduit les délais et les pertes de pièces. Cela s'inscrit dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Sécuriser les données d'une petite structure de santé",
        texte:
          "Pour un centre de santé privé ou une pharmacie, protéger les dossiers patients et organiser les sauvegardes sont des préalables simples mais souvent négligés. Nous les traitons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "sante",
        sectorAnchor: "santé",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode de cybersécurité, confidentialité et résilience",
      },
    ],
    faq: [
      {
        question: "Pouvez-vous vous déplacer à Atakpamé ?",
        answer:
          "Audyxa n'a pas de bureau à Atakpamé et intervient à distance. Notre fondateur est basé à Abomey-Calavi, au Bénin. Un déplacement ponctuel n'est pas exclu pour un atelier important, mais ce n'est pas notre mode de travail courant.",
      },
      {
        question: "Travaillez-vous avec des services publics ?",
        answer:
          "Oui, nous pouvons cadrer la dématérialisation d'un circuit de traitement, à condition que le sponsor interne soit identifié. Nous ne citons aucune référence à Atakpamé : nous n'y avons pas de mission publique connue.",
      },
      {
        question: "La population d'Atakpamé est-elle connue précisément ?",
        answer:
          "Les sources urbaines anciennes divergent (de 70 000 à près de 85 000 habitants selon l'année et l'organisme). Nous préférons donc citer le chiffre officiel récent de la préfecture d'Ogou, issu du RGPH-5.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "dapaong",
    villeName: "Dapaong",
    metaDescription:
      "Dapaong (Togo) : Audyxa accompagne à distance transitaires, maraîchers et commerçants du corridor nord, de l'audit digital à l'automatisation de la gestion.",
    resume:
      "Dapaong est le chef-lieu de la région des Savanes et de la préfecture de Tône, à l'extrémité nord du Togo. Sa position près de la frontière burkinabè en fait un lieu de passage pour le commerce de transit vers le Burkina Faso, le Niger et le Bénin. Audyxa y intervient à distance, auprès des commerçants, des transitaires et des producteurs.",
    coupDoeil: [
      "Dapaong est proche de Cinkassé, point de passage frontalier vers le Burkina Faso, où le port autonome de Lomé et des acteurs privés envisagent des plateformes logistiques (projet de port sec, statut à confirmer).",
      "La culture de la tomate s'est fortement développée autour de la ville depuis les années 2000, une partie de la production étant acheminée vers Lomé.",
    ],
    faits: [
      {
        value: "388 775",
        label: "habitants dans la préfecture de Tône, dont Dapaong est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les expéditions de produits maraîchers",
        texte:
          "Pour un groupement ou un commerçant qui expédie tomates et autres légumes vers le sud, suivre les lots, les prix de vente et les paiements aux producteurs dans un seul tableau évite les litiges. Cela se travaille dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser les opérations d'un transitaire sur le corridor nord",
        texte:
          "Pour une entreprise de transit entre Lomé et la frontière, un dossier numérique par camion (documents, étapes, factures) réduit les relances et accélère la facturation. C'est un volet de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Outiller le suivi d'une ONG ou d'un projet de développement",
        texte:
          "Pour une ONG présente dans les Savanes, collecter des données de terrain sur mobile et produire des rapports automatiquement évite les ressaisies. Nous le cadrons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence physique à Dapaong ?",
        answer:
          "Non, nous n'avons pas de bureau à Dapaong. Le fondateur d'Audyxa est basé à Abomey-Calavi, au Bénin, et nous travaillons à distance, ce qui suppose une connexion minimale pour les échanges de travail.",
      },
      {
        question: "La connexion internet est-elle un obstacle pour une mission à distance ?",
        answer:
          "Elle peut compliquer les visioconférences, mais pas le travail lui-même : nous privilégions des échanges asynchrones (documents, messages, enregistrements courts) et des outils qui supportent une connexion intermittente.",
      },
      {
        question: "Le port sec de Cinkassé change-t-il vos recommandations ?",
        answer:
          "Pas à ce stade : nous n'avons pas trouvé de confirmation qu'il soit en exploitation, et nous ne construisons aucune recommandation sur un projet non confirmé. Si la plateforme ouvre, l'automatisation des documents de transit deviendra un sujet à reprendre.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "tsevie",
    villeName: "Tsévié",
    metaDescription:
      "Tsévié (Togo), aux portes de Lomé : Audyxa accompagne à distance riziculteurs, transformateurs et commerçants, avec audit digital et automatisation des tâches.",
    resume:
      "Tsévié est le chef-lieu de la préfecture de Zio, à une trentaine de kilomètres au nord de Lomé. La ville profite de sa proximité avec la capitale et d'une plaine agricole connue pour la riziculture et la transformation de l'huile de palme. Audyxa y intervient à distance, pour fluidifier la gestion de ces activités et leurs liens avec les marchés de Lomé.",
    coupDoeil: [
      "La plaine du Zio abrite un périmètre irrigué aménagé au milieu des années 1960 dans le cadre d'une coopération technique avec Taïwan, pour la production de riz.",
      "Un projet de réhabilitation de la plaine rizicole du Zio, annoncé par les pouvoirs publics, vise la remise en état de 360 hectares et l'aménagement d'environ 300 autres.",
    ],
    faits: [
      {
        value: "500 032",
        label: "habitants dans la préfecture de Zio, dont Tsévié est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Planifier une campagne rizicole",
        texte:
          "Pour une coopérative ou un exploitant du périmètre irrigué, suivre les parcelles, les intrants et les récoltes dans un tableau partagé aide à anticiper les besoins et à payer les membres sans erreur. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Relier une unité de transformation à ses clients de Lomé",
        texte:
          "Pour un transformateur d'huile de palme ou de produits vivriers qui livre des grossistes de la capitale, automatiser commandes, livraisons et facturation réduit les oublis. Cela se prépare dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Structurer la gestion d'un promoteur de lotissements",
        texte:
          "Avec l'extension de l'agglomération de Lomé vers le nord, un promoteur ou une agence peut suivre ses parcelles, ses acquéreurs et ses paiements échelonnés dans un outil unique. Nous le traitons via un",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
    ],
    faq: [
      {
        question: "Faut-il être à Lomé pour travailler avec Audyxa depuis Tsévié ?",
        answer:
          "Non. Audyxa n'a de bureau ni à Tsévié ni à Lomé : les missions se déroulent à distance, quelle que soit la localisation du client. Notre fondateur est basé à Abomey-Calavi, au Bénin.",
      },
      {
        question: "Travaillez-vous avec des coopératives agricoles ?",
        answer:
          "Oui, ce sont des structures où un registre fiable des membres, des apports et des paiements apporte rapidement un bénéfice. Nous n'avons toutefois aucune référence à citer à Tsévié.",
      },
      {
        question: "Le projet de réhabilitation de la plaine du Zio est-il achevé ?",
        answer:
          "Nous n'avons pas pu le vérifier : les informations disponibles sont des annonces officielles, sans bilan d'exécution. Nous les citons comme un projet annoncé, pas comme un fait accompli.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "aneho",
    villeName: "Aného",
    metaDescription:
      "Aného (Togo), ville du littoral et du lac Togo : Audyxa épaule pêcheurs, hôtels et patrimoine par un audit digital et des outils de gestion, à distance.",
    resume:
      "Aného est le chef-lieu de la préfecture des Lacs, sur le littoral, entre l'océan Atlantique et le lac Togo, près de la frontière béninoise. Ancien comptoir et ville de l'époque coloniale, elle vit aujourd'hui surtout de la pêche, de l'agriculture, du commerce et d'un patrimoine culturel et religieux. Audyxa y intervient à distance, pour des activités locales qui cherchent à mieux organiser leur gestion.",
    coupDoeil: [
      "Aného, ancien Petit-Popo, a joué un rôle important à l'époque coloniale avant que Lomé ne prenne le dessus ; les sources divergent sur les dates exactes, nous ne les reprenons donc pas.",
      "Deux églises du XIXe siècle de la ville figurent, selon les sources consultées, sur la liste indicative du Togo pour le patrimoine mondial de l'UNESCO.",
    ],
    faits: [
      {
        value: "241 247",
        label: "habitants dans la préfecture des Lacs, dont Aného est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Structurer la vente de produits de la pêche",
        texte:
          "Pour un groupement de pêcheurs ou un mareyeur, noter les apports, les prix et les ventes dans un outil partagé aide à négocier et à payer chacun justement. Cela relève de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Gérer l'accueil d'un hébergement de bord de lac",
        texte:
          "Pour un petit hôtel ou un campement qui reçoit des visiteurs attirés par le lac et le patrimoine, un suivi simple des réservations et des avis clients évite les erreurs de planning. Nous le cadrons dans un",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Faciliter le commerce avec le Bénin voisin",
        texte:
          "Pour un commerçant qui vend de part et d'autre de la frontière, suivre commandes, devises et créances dans un outil unique réduit les écarts de caisse. C'est un volet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa peut-il intervenir à Aného alors qu'il n'y a pas de bureau ?",
        answer:
          "Oui : Audyxa n'a pas de bureau à Aného et travaille à distance. Notre fondateur est basé à Abomey-Calavi, au Bénin, à une courte distance de la frontière, ce qui facilite un éventuel échange en présentiel ponctuel.",
      },
      {
        question: "Le tourisme est-il un marché réel à Aného ?",
        answer:
          "Le patrimoine et le lac attirent des visiteurs, mais nous n'avons pas de statistique fiable de fréquentation à citer. Nous recommandons de partir de vos propres données de réservation avant tout investissement numérique important.",
      },
      {
        question: "Pourquoi ne pas indiquer de date précise sur l'histoire de la ville ?",
        answer:
          "Les sources consultées donnent des périodes différentes pour le rôle de capitale d'Aného. Dans le doute, nous nous en tenons à ce qui est constant : une ville coloniale importante, devancée ensuite par Lomé.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "bassar",
    villeName: "Bassar",
    metaDescription:
      "Bassar (Togo), terre de la métallurgie ancienne du fer : Audyxa accompagne à distance artisans, commerçants et acteurs du patrimoine. Audit et outils.",
    resume:
      "Bassar est le chef-lieu de la préfecture du même nom, dans la région de la Kara, dans une zone réputée pour son histoire de la métallurgie du fer. Le tissu local combine agriculture, commerce et artisanat, sur un axe qui mène vers le Bénin. Audyxa y intervient à distance, pour les artisans, les commerçants et les acteurs du patrimoine.",
    coupDoeil: [
      "Les sites de la métallurgie ancienne du fer de Bassar, avec hauts fourneaux, scories et forges, figurent sur la liste indicative du Togo auprès de l'UNESCO, qui couvre une activité allant du Ve siècle avant notre ère jusqu'au milieu du XXe siècle.",
      "Des objets issus de cette métallurgie sont exposés au Musée national du Togo, à Lomé.",
    ],
    faits: [
      {
        value: "152 065",
        label: "habitants dans la préfecture de Bassar",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Donner un cadre de gestion aux forgerons et artisans",
        texte:
          "Pour un atelier de forge ou un collectif d'artisans, suivre commandes, matières premières et paiements dans un outil simple permet de mieux fixer ses prix. C'est un objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Mettre en valeur un site patrimonial",
        texte:
          "Pour une association ou un guide qui fait visiter des sites historiques, un système de réservation et de billetterie très léger évite les oublis et rend l'activité mesurable. Nous le développons via notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Suivre les ventes d'un commerce d'approvisionnement",
        texte:
          "Pour un commerçant qui approvisionne les villages alentour en intrants, en outils ou en biens de consommation, un suivi des stocks et des crédits accordés limite les pertes. Cela relève de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il des équipes à Bassar ?",
        answer:
          "Non, nous n'avons pas de bureau à Bassar. Notre fondateur est basé à Abomey-Calavi, au Bénin, et nous intervenons à distance, avec des échanges adaptés à la qualité de la connexion locale.",
      },
      {
        question: "Les sites de Bassar sont-ils inscrits au patrimoine mondial ?",
        answer:
          "Pas à notre connaissance : ils figurent sur la liste indicative du Togo, première étape avant un éventuel dossier d'inscription. Nous ne présentons donc aucun statut d'inscription acquis.",
      },
      {
        question: "Un artisan peut-il bénéficier d'un accompagnement numérique ?",
        answer:
          "Oui, si le besoin est concret (suivi des commandes, calcul des coûts, présentation en ligne). Nous commençons par un échange court pour vérifier qu'une démarche numérique apporte un gain réel avant de proposer quoi que ce soit.",
      },
    ],
  },
  {
    paysSlug: "togo",
    villeSlug: "mango",
    villeName: "Mango",
    metaDescription:
      "Mango (Togo), sur l'Oti près du parc de Kéran : Audyxa aide, à distance, éleveurs, négociants et acteurs de l'écotourisme à digitaliser leur activité.",
    resume:
      "Mango est le chef-lieu de la préfecture de l'Oti, dans le nord-est du Togo, sur la rivière Oti et près du parc national de Kéran. L'économie locale repose surtout sur l'agriculture, l'élevage et le commerce, dans une zone peu densément peuplée. Audyxa y intervient à distance, auprès des commerçants, des éleveurs et des structures de conservation ou de développement.",
    coupDoeil: [
      "Mango est un point d'appui pour le commerce du bétail et de l'arachide dans cette partie du pays, selon les ouvrages de référence consultés.",
      "La ville est située sur la route nationale 1, qui relie le port de Lomé au nord et à la frontière burkinabè.",
    ],
    faits: [
      {
        value: "124 848",
        label: "habitants dans la préfecture de l'Oti, dont Mango est le chef-lieu",
        source: "recensement RGPH-5, INSEED, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Suivre un troupeau et les ventes de bétail",
        texte:
          "Pour un éleveur ou un commerçant de bétail, tenir un registre numérique des animaux, des ventes et des soins évite les confusions et facilite les contrôles. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Collecter des données de terrain pour un projet",
        texte:
          "Pour une ONG ou une structure de conservation qui travaille autour des aires protégées, un formulaire mobile hors ligne et des rapports générés automatiquement remplacent les relevés papier. Cela relève de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Cadrer l'offre d'un campement d'écotourisme",
        texte:
          "Pour un hébergeur ou un guide proche du parc de Kéran, diagnostiquer d'abord les pratiques de réservation et de paiement permet de ne pas surinvestir dans un outil inadapté. C'est la première étape de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous vraiment dans une zone aussi reculée que Mango ?",
        answer:
          "Oui, mais à distance : Audyxa n'a pas de bureau à Mango, et notre fondateur est basé à Abomey-Calavi, au Bénin. Les outils que nous proposons doivent supporter une connexion limitée et des coupures.",
      },
      {
        question: "Disposez-vous de chiffres économiques précis sur Mango ?",
        answer:
          "Non. Nous n'avons trouvé aucune statistique économique locale fiable et récente, et nous préférons ne rien inventer. Le seul chiffre affiché est l'effectif officiel de la préfecture de l'Oti.",
      },
      {
        question: "Une structure de conservation peut-elle vous solliciter ?",
        answer:
          "Oui, pour des sujets de collecte de données, de suivi et de reporting. Nous ne revendiquons toutefois aucun partenariat existant avec une aire protégée ou une organisation locale.",
      },
    ],
  },
];
