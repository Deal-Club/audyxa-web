/**
 * Contenu enrichi pour six villes du Bénin (Djougou, Bohicon, Kandi, Lokossa,
 * Ouidah, Abomey), en complément de `villes-content.ts`.
 *
 * Règle anti-invention : chaque chiffre porte sa source réelle (organisme +
 * année), vérifiée par recherche web. Quand aucune donnée fiable et récente
 * n'existe, le texte reste qualitatif et l'incertitude est assumée.
 * Audyxa n'a pas de bureau dans ces villes : intervention à distance, le
 * fondateur étant basé à Abomey-Calavi.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_BENIN: VilleContent[] = [
  {
    paysSlug: "benin",
    villeSlug: "djougou",
    villeName: "Djougou",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Djougou, chef-lieu de la Donga : filières agricoles, transport et commerce. Audit, automatisation et outils métier.",
    resume:
      "Djougou est le chef-lieu du département de la Donga, dans le nord-ouest du Bénin, à proximité de la frontière togolaise. Son économie repose d'abord sur l'agriculture (coton, anacarde, karité), complétée par un commerce et un transport actifs. Audyxa intervient à distance auprès des entreprises de cette zone, sans présence physique sur place.",
    coupDoeil: [
      "Djougou est le chef-lieu de la Donga, département limité à l'ouest par le Togo, et la commune la plus étendue de ce département avec 3 966 km² selon la monographie communale.",
      "Les monographies locales décrivent une ville de carrefour et de transit, dont les transporteurs sont connus à l'échelle nationale ; le commerce y est la deuxième source de revenus après l'agriculture.",
    ],
    faits: [
      {
        value: "267 812",
        label: "habitants recensés dans la commune de Djougou, soit environ 49 % de la population de la Donga",
        source: "recensement RGPH4, Institut National de la Statistique et de l'Analyse Économique (INSAE), 2013",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les achats de produits de cueillette et de rente",
        texte:
          "Pour un acheteur ou une coopérative qui collecte noix de cajou, karité ou soja auprès de nombreux producteurs, un suivi centralisé des quantités, des paiements et des lots remplace les carnets papier. C'est un objet courant de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser une flotte de transport de marchandises",
        texte:
          "Pour un transporteur dont les camions circulent entre le nord et le sud du pays, l'automatisation du suivi des trajets, des chargements et de la facturation limite les oublis et les litiges. C'est le terrain de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer un commerce de gros et de demi-gros",
        texte:
          "Pour un grossiste qui livre des boutiques de la région, un diagnostic court permet de voir si les pertes viennent des stocks, des crédits clients ou des commandes mal notées. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Djougou ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Djougou : les missions se font à distance (visioconférence, documents partagés, outils collaboratifs). Notre fondateur est basé à Abomey-Calavi, dans le sud du pays, ce qui n'empêche pas de travailler avec une entreprise du nord.",
      },
      {
        question: "Une activité agricole ou de collecte peut-elle être accompagnée à distance ?",
        answer:
          "Oui, pour la partie gestion : suivi des achats, des stocks, des paiements et des documents. Nous ne remplaçons pas le travail de terrain ni l'encadrement technique des producteurs, qui relèvent d'autres métiers.",
      },
      {
        question: "La connexion internet est-elle un obstacle pour travailler avec nous ?",
        answer:
          "Cela se vérifie dès le diagnostic. Quand la connexion est irrégulière, nous privilégions des outils qui tolèrent les coupures et des points d'échange asynchrones plutôt que de longues visioconférences.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "bohicon",
    villeName: "Bohicon",
    metaDescription:
      "Audyxa accompagne à distance les commerçants, transporteurs et PME de Bohicon, grand carrefour du centre du Bénin : audit, automatisation et outils sur mesure.",
    resume:
      "Bohicon, dans le département du Zou, est un nœud de communication et de commerce du centre du Bénin. Son grand marché et sa gare routière en font un lieu où transitent marchandises et voyageurs. Audyxa y intervient à distance, pour aider commerçants, transporteurs et PME à mieux suivre leurs flux.",
    coupDoeil: [
      "Bohicon se situe sur l'axe ferroviaire et routier qui relie Cotonou à Parakou, à environ 130 km de Cotonou selon le portail officiel du gouvernement béninois.",
      "Une étude universitaire de Mayence décrit son marché comme le plus important du pays après Dantokpa à Cotonou, avec des produits venus du nord, du sud, du Togo et du Nigeria ; les ventes s'y organisent en grande édition tous les cinq jours.",
    ],
    faits: [
      {
        value: "171 781",
        label: "habitants recensés à Bohicon, avec un taux de croissance annuel de 3,77 % entre 2002 et 2013",
        source: "recensement RGPH4, INSAE, 2013 (plaquette du département du Zou)",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les stocks d'un négoce de produits vivriers",
        texte:
          "Pour un commerçant qui achète en gros les jours de grand marché et revend dans les jours qui suivent, un suivi simple des entrées, sorties et créances clients évite les ruptures et les impayés oubliés. C'est un cas typique pour notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser le départ et la caisse d'un syndicat ou d'une compagnie de transport",
        texte:
          "Une gare routière très fréquentée suppose de tenir les listes de départs, les tickets et les recettes sans erreur. Un outil léger de saisie et de rapprochement peut être mis en place via notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Relier commandes, livraisons et facturation d'une PME de transformation",
        texte:
          "Pour une petite unité qui transforme et conditionne des produits agricoles, relier la prise de commande, la livraison et la facture évite les doubles saisies. C'est le rôle de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec des commerçants du marché de Bohicon ?",
        answer:
          "Nous accompagnons les structures qui ont une activité régulière et des flux à organiser (achats, stocks, clients à crédit). Nous ne prétendons connaître aucun commerçant en particulier ni avoir des missions déjà menées sur place.",
      },
      {
        question: "Audyxa a-t-il une présence à Bohicon ?",
        answer:
          "Non, nous n'avons pas de bureau à Bohicon. Les missions se déroulent à distance. Notre fondateur est basé à Abomey-Calavi, à une distance qui permet, si besoin, un échange ponctuel en personne, mais ce n'est pas la règle.",
      },
      {
        question: "Peut-on commencer sans changer tous les outils en place ?",
        answer:
          "Oui. Dans une activité de négoce, on commence souvent par fiabiliser un seul point (le suivi des stocks ou des crédits clients) avant d'envisager autre chose. Nous partons de ce qui existe déjà, carnets compris.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "kandi",
    villeName: "Kandi",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Kandi, chef-lieu de l'Alibori, grande zone cotonnière du nord Bénin : gestion, automatisation et outils métier.",
    resume:
      "Kandi est le chef-lieu du département de l'Alibori, tout au nord du Bénin, un territoire à forte vocation agricole. L'activité locale tourne autour de l'agriculture, de la commercialisation des récoltes et des services qui y sont liés. Audyxa intervient à distance, sans bureau sur place, pour outiller la gestion des structures de la zone.",
    coupDoeil: [
      "Kandi est le chef-lieu de l'Alibori, que l'INSAE décrit comme un grenier du Bénin, avec une part importante de la population agricole du pays.",
      "L'Alibori est la première zone cotonnière du Bénin : d'après une analyse de Textile Network portant sur la campagne 2020-2021, il aurait fourni environ 47 % de la production nationale. Ce chiffre date de plusieurs campagnes et peut avoir évolué.",
    ],
    faits: [
      {
        value: "179 290",
        label: "habitants recensés dans la commune de Kandi, l'une des quatre communes de l'Alibori à dépasser 100 000 habitants",
        source: "recensement RGPH4, INSAE, 2013",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les livraisons et paiements d'un groupement de producteurs",
        texte:
          "Pour un groupement ou une coopérative, enregistrer les apports, les avances et les règlements de chaque membre dans un outil partagé réduit les contestations en fin de campagne. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Rendre lisible l'activité d'une ONG ou d'un projet de développement",
        texte:
          "Pour une ONG ou un projet intervenant auprès des producteurs, centraliser les données de terrain et les rapports d'activité évite de les rassembler à la main avant chaque échéance de bailleur. C'est le travail de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Moderniser la gestion d'un commerce d'intrants ou de matériel agricole",
        texte:
          "Pour un revendeur d'engrais, de semences ou de petit matériel, un diagnostic des ventes à crédit et des stocks montre vite où se perd la trésorerie. C'est le point d'entrée de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il des équipes ou des clients à Kandi ?",
        answer:
          "Non. Nous n'avons ni bureau ni mission déjà menée à Kandi. Nous intervenons à distance, et notre fondateur est basé à Abomey-Calavi. Si vous êtes à Kandi, le premier échange sert justement à vérifier que cette façon de travailler convient à votre activité.",
      },
      {
        question: "Les chiffres du coton sont-ils à jour sur cette page ?",
        answer:
          "Le seul chiffre régional que nous citons (la part de l'Alibori dans la production cotonnière) vient de la campagne 2020-2021 et sert d'ordre de grandeur. Pour des données récentes, il faut se tourner vers l'interprofession cotonnière et le ministère de l'Agriculture.",
      },
      {
        question: "Peut-on travailler avec nous sans être spécialisé dans le coton ?",
        answer:
          "Oui. Commerce, transport, services, structures associatives : la méthode (diagnostic, cadrage, mise en place) est la même quelle que soit la filière, et nous ne nous limitons pas à l'agriculture.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "lokossa",
    villeName: "Lokossa",
    metaDescription:
      "Audyxa accompagne à distance les structures de Lokossa, chef-lieu du Mono : administration, santé, éducation et commerce local. Diagnostic et outils sur mesure.",
    resume:
      "Lokossa est le chef-lieu du département du Mono, dans le sud-ouest du Bénin, à l'écart des grands pôles de Cotonou et de Porto-Novo. Comme souvent pour une ville de cette taille, les services publics, l'éducation et le commerce de proximité y tiennent une place importante. Audyxa y travaille à distance, sans bureau local.",
    coupDoeil: [
      "Lokossa est la ville où siègent les services départementaux du Mono, ce qui lui donne une fonction administrative plus marquée que sa taille ne le laisserait penser.",
      "Avec un peu plus de 100 000 habitants au dernier recensement, Lokossa reste une ville moyenne, loin des effectifs de Cotonou ou de Porto-Novo.",
    ],
    faits: [
      {
        value: "104 961",
        label: "habitants recensés dans la commune de Lokossa",
        source: "recensement RGPH4, INSAE, 2013 (plaquette du département du Mono)",
      },
    ],
    casUsage: [
      {
        titre: "Dématérialiser le suivi de dossiers d'une structure publique ou parapublique",
        texte:
          "Pour un service départemental ou un établissement public, un circuit numérique de réception, d'affectation et de suivi des courriers et des demandes réduit les pertes de dossiers. C'est un objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Gérer inscriptions et scolarités d'un établissement privé",
        texte:
          "Pour une école, un collège ou un centre de formation, un outil unique pour les inscriptions, les frais de scolarité et les notes met fin aux registres parallèles. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Cadrer l'informatisation d'une petite structure avant tout achat",
        texte:
          "Pour une PME ou une association qui hésite à investir dans un logiciel, un cadrage préalable évite de payer pour des fonctions inutiles. La démarche s'inscrit dans notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une antenne à Lokossa ?",
        answer:
          "Non. Il n'y a pas de bureau Audyxa à Lokossa ni dans le Mono. Les échanges se font à distance, et notre fondateur est basé à Abomey-Calavi, dans le sud du pays.",
      },
      {
        question: "Une structure publique de Lokossa peut-elle faire appel à vous ?",
        answer:
          "Cela dépend du cadre : une mission de conseil classique (diagnostic, outil, processus) est possible. Un appel d'offres public suppose des règles spécifiques que nous examinons au cas par cas, sans rien promettre à l'avance.",
      },
      {
        question: "Pourquoi l'économie locale n'est-elle pas détaillée davantage sur cette page ?",
        answer:
          "Parce que nous n'avons pas trouvé de source récente et fiable sur les filières de la commune. Plutôt que d'avancer des chiffres incertains, nous préférons nous en tenir au recensement et à des éléments généraux sur le chef-lieu.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "ouidah",
    villeName: "Ouidah",
    metaDescription:
      "Audyxa accompagne à distance hôtels, guides, associations et PME de Ouidah, cité historique de la Route des Esclaves : gestion, automatisation et outils métier.",
    resume:
      "Ouidah, sur la côte atlantique du Bénin, est une cité historique liée à la mémoire de la traite et au culte vodun. Le tourisme culturel et mémoriel structure une partie de son économie, autour de sites patrimoniaux et d'un grand rendez-vous annuel début janvier. Audyxa intervient à distance, sans bureau à Ouidah.",
    coupDoeil: [
      "La Route des Esclaves de Ouidah, d'environ quatre kilomètres, relie l'ancienne place des enchères (aujourd'hui le Musée d'histoire) à la Porte du Non-Retour, monument érigé en 1995 face à l'océan.",
      "Le Vodun, reconnu religion nationale en 1996, est célébré chaque 10 janvier ; depuis 2024, les Vodun Days des 9 et 10 janvier se tiennent à Ouidah, selon le gouvernement béninois.",
    ],
    faits: [
      {
        value: "162 034",
        label: "habitants recensés à Ouidah, contre 76 555 en 2002 (croissance annuelle moyenne de 6,86 %)",
        source: "recensement RGPH4, INSAE, 2013 (plaquette du département de l'Atlantique)",
      },
    ],
    casUsage: [
      {
        titre: "Gérer réservations et saisonnalité d'un hébergement ou d'un guide",
        texte:
          "Autour des temps forts de janvier, un hôtel, une maison d'hôtes ou une agence de visites doit suivre ses réservations, ses acomptes et ses plannings avec précision. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Suivre les adhérents et les financements d'une association culturelle",
        texte:
          "Pour une association de sauvegarde du patrimoine ou de promotion culturelle, un suivi clair des membres, des dons et des subventions facilite les comptes rendus aux partenaires. C'est le travail de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Organiser les ventes d'un atelier d'artisanat ou d'un petit commerce",
        texte:
          "Un artisan ou un commerçant qui vend à des visiteurs et à des clients réguliers gagne à relier sa caisse, son stock et ses commandes. Un diagnostic de départ, c'est l'objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Ouidah ?",
        answer:
          "Non, nous n'avons pas de bureau à Ouidah. Nous travaillons à distance. Notre fondateur vit à Abomey-Calavi, qui se trouve dans la même zone sud du pays, mais nous ne faisons pas de déplacements systématiques.",
      },
      {
        question: "Ouidah est-elle inscrite au patrimoine mondial de l'UNESCO ?",
        answer:
          "Pas à notre connaissance à ce jour. D'après l'UNESCO, le dossier « Sites marquants de la Route de l'Esclave au Bénin » figure sur la liste indicative, ce qui est une étape préalable et non une inscription. Vérifiez sur le site de l'UNESCO pour l'état le plus récent.",
      },
      {
        question: "Pouvez-vous nous aider à préparer la période des Vodun Days ?",
        answer:
          "Nous ne participons pas à l'organisation de l'événement. En revanche, une entreprise locale peut nous demander de l'aider à fiabiliser ses réservations, ses stocks ou ses encaissements avant cette période de forte affluence.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "abomey",
    villeName: "Abomey",
    metaDescription:
      "Audyxa accompagne à distance les structures d'Abomey, ancienne capitale royale et site UNESCO : patrimoine, tourisme, artisanat et services. Audit et outils métier.",
    resume:
      "Abomey, dans le département du Zou, fut la capitale du royaume du Dahomey. Ses palais royaux, classés par l'UNESCO, font d'elle une destination de tourisme culturel, à côté d'une économie locale faite d'artisanat, de services et de commerce. Audyxa intervient à distance, sans bureau sur place.",
    coupDoeil: [
      "Les Palais royaux d'Abomey ont été inscrits sur la Liste du patrimoine mondial de l'UNESCO le 6 décembre 1985, au titre des critères (iii) et (iv), et sont aussi sur la Liste du patrimoine mondial en péril.",
      "Abomey forme avec Bohicon, située à 9 km à l'est, une même conurbation, mais les deux villes ont des profils économiques distincts : l'une plutôt patrimoniale, l'autre commerçante.",
    ],
    faits: [
      {
        value: "92 266",
        label: "habitants recensés à Abomey, avec un taux de croissance annuel de 1,46 % entre 2002 et 2013",
        source: "recensement RGPH4, INSAE, 2013 (plaquette du département du Zou)",
      },
    ],
    casUsage: [
      {
        titre: "Gérer visites, billetterie et guides d'un site ou d'un musée",
        texte:
          "Pour une structure qui accueille des visiteurs, un outil de réservation, de comptage et de suivi des recettes évite les écarts de caisse et donne une vue claire de la fréquentation. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Structurer un atelier d'artisanat qui vend à distance",
        texte:
          "Les ateliers de tissage ou d'art décoratif qui reçoivent des commandes de l'extérieur doivent suivre devis, acomptes, fabrication et expédition. Un diagnostic simple, c'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Outiller un établissement de formation ou une collectivité locale",
        texte:
          "Pour une école privée, un centre de formation ou un service communal, des processus clairs pour les inscriptions, les dossiers ou les demandes évitent la double saisie. C'est l'objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Abomey ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Abomey. Nous intervenons à distance, et notre fondateur est basé à Abomey-Calavi, une ville distincte d'Abomey malgré la ressemblance des noms, située près de Cotonou.",
      },
      {
        question: "Travaillez-vous avec les institutions chargées des palais royaux ?",
        answer:
          "Non, nous n'avons aucune mission en cours ni partenariat avec ces institutions. Nous mentionnons le site UNESCO pour décrire le contexte de la ville, pas pour suggérer une collaboration.",
      },
      {
        question: "Quelle différence entre Abomey et Bohicon pour une entreprise ?",
        answer:
          "Les deux villes sont voisines, mais leurs besoins diffèrent : Bohicon est un nœud de commerce et de transport, Abomey a une dimension patrimoniale et touristique plus marquée. Nous adaptons le diagnostic à votre activité réelle plutôt qu'à la ville.",
      },
    ],
  },
];
