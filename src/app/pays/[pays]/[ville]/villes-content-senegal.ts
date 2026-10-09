/**
 * Contenu enrichi des villes sénégalaises hors Dakar et Thiès (Touba, Kaolack,
 * M'bour, Saint-Louis, Rufisque, Ziguinchor, Diourbel, Louga).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source (ANSD, RGPH-5, 2023, ou étude citée). Quand une
 * donnée fiable et récente n'a pas été trouvée, le texte reste qualitatif.
 * Audyxa n'a aucun bureau dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_SENEGAL: VilleContent[] = [
  // ---------------------------------------------------------------- TOUBA
  {
    paysSlug: "senegal",
    villeSlug: "touba",
    villeName: "Touba",
    metaDescription:
      "Audyxa accompagne à distance les commerçants et structures de Touba, ville sainte du Sénégal : suivi des ventes, automatisation et outils adaptés au Magal.",
    resume:
      "Audyxa accompagne à distance les commerçants, transporteurs et associations de Touba, ville sainte de la confrérie mouride. L'activité y suit un rythme particulier, rythmé par les grands rassemblements religieux et un commerce très dynamique, souvent informel, que des outils simples de suivi peuvent aider à fiabiliser.",
    coupDoeil: [
      "Touba est la ville fondée par Cheikh Ahmadou Bamba, fondateur de la confrérie mouride, et son marché Ocass est l'un des grands lieux de commerce du pays.",
      "Chaque année, le Grand Magal fait converger à Touba des millions de fidèles, ce qui impose à la ville des pics de transport, d'hébergement et d'approvisionnement hors du commun.",
    ],
    faits: [
      {
        value: "1 120 824",
        label: "habitants recensés dans la commune de Touba",
        source: "recensement RGPH-5, Agence Nationale de la Statistique et de la Démographie (ANSD), 2023",
      },
      {
        value: "6 583 278",
        label: "participants estimés au Grand Magal 2025, estimation issue d'une enquête commandée par le Khalife général des mourides (chiffre à lire comme une estimation statistique, non un comptage direct)",
        source: "comité d'organisation du Magal, relayé par l'agence APA, août 2025",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les ventes et les stocks d'un commerce de marché",
        texte:
          "Pour un commerçant ou un grossiste dont l'activité se fait surtout au comptant, un suivi simple des ventes, des achats et des dettes clients évite les pertes entre deux pics d'affluence. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Préparer la logistique d'un rassemblement de grande ampleur",
        texte:
          "Pour un transporteur, un prestataire de restauration ou un organisateur d'hébergement, planifier les rotations et les approvisionnements bien en amont du Magal réduit les ruptures le jour J. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Outiller une association ou un dahira",
        texte:
          "Pour une association religieuse ou un groupement solidaire, gérer cotisations, membres et événements dans un outil partagé remplace les carnets et les messages dispersés. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau ou une équipe à Touba ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Touba : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Peut-on travailler sur des activités surtout informelles ?",
        answer:
          "Oui, à condition qu'il y ait une activité réelle à structurer. Le diagnostic part de ce qui existe (cahier de ventes, tableur, messagerie) et propose un premier niveau d'organisation sans exiger de formalisation préalable.",
      },
      {
        question: "Comment tenir compte de la saisonnalité liée au Magal ?",
        answer:
          "Le calendrier de la mission est calé avec vous : mieux vaut cadrer et tester un outil bien avant l'événement qu'en pleine période d'affluence. Nous ne promettons pas de résultat chiffré sur l'événement lui-même, qui dépend de nombreux facteurs hors de notre contrôle.",
      },
    ],
  },
  // -------------------------------------------------------------- KAOLACK
  {
    paysSlug: "senegal",
    villeSlug: "kaolack",
    villeName: "Kaolack",
    metaDescription:
      "Audyxa appuie à distance les négociants, transformateurs et PME de Kaolack, carrefour de l'arachide et du sel : traçabilité, suivi des stocks et automatisation.",
    resume:
      "Audyxa appuie à distance les négociants, transformateurs et PME de Kaolack, capitale historique du bassin arachidier. La ville vit du commerce des produits agricoles, du sel et de sa position de carrefour routier, trois activités où le suivi des stocks et des flux fait directement gagner du temps.",
    coupDoeil: [
      "Kaolack est un nœud routier majeur du centre du pays et un port fluvial sur le Saloum, d'où partent notamment du sel et des produits agricoles.",
      "Le port a perdu de son poids d'autrefois : le faible tirant d'eau limite les navires accueillis, et les travaux de dragage annoncés en 2019 ne semblent pas avoir abouti, d'après la presse (situation actuelle à vérifier).",
    ],
    faits: [
      {
        value: "298 904",
        label: "habitants recensés dans la commune de Kaolack",
        source: "recensement RGPH-5, ANSD, 2023",
      },
    ],
    casUsage: [
      {
        titre: "Tracer les achats d'un négociant en produits agricoles",
        texte:
          "Pour un acheteur de graines ou de céréales qui travaille avec de nombreux fournisseurs, centraliser les pesées, les avances et les paiements limite les litiges de fin de campagne. C'est un objet fréquent de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Suivre les expéditions d'une activité de transit",
        texte:
          "Pour un transporteur ou un transitaire basé sur l'axe routier et fluvial, un tableau de bord des chargements et des délais permet de répondre plus vite aux clients. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer la relation client d'un grossiste",
        texte:
          "Pour un grossiste ou un distributeur qui livre de nombreux détaillants, un CRM léger garde la trace des commandes et des impayés. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il installé à Kaolack ?",
        answer:
          "Non, nous n'avons pas de bureau à Kaolack. Le fondateur d'Audyxa est basé à Abomey-Calavi (Bénin) et les missions sont conduites à distance, avec des points réguliers en visioconférence.",
      },
      {
        question: "Les coupures de connexion sont-elles un obstacle pour les missions ?",
        answer:
          "Elles se prévoient. Nous privilégions des outils qui fonctionnent avec une connexion modeste et conservent les données localement le temps d'une coupure. Dans la région, la possession d'un téléphone mobile est répandue alors que l'usage d'Internet l'est moins : nous partons donc du téléphone.",
      },
      {
        question: "Une petite entreprise familiale peut-elle faire appel à vous ?",
        answer:
          "Oui. Une mission peut se limiter à un seul processus, par exemple le suivi des achats ou des livraisons, avant d'envisager toute extension.",
      },
    ],
  },
  // --------------------------------------------------------------- M'BOUR
  {
    paysSlug: "senegal",
    villeSlug: "mbour",
    villeName: "M'bour",
    metaDescription:
      "Audyxa accompagne à distance hôtels, mareyeurs et PME de M'bour sur la Petite-Côte : réservations, suivi des ventes de poisson et outils métier sur mesure.",
    resume:
      "Audyxa accompagne à distance les hébergeurs, mareyeurs et PME de M'bour, sur la Petite-Côte. La ville associe l'un des grands centres de pêche artisanale du pays et la proximité de la station balnéaire de Saly, deux économies très différentes qui ont pourtant en commun un besoin de suivi précis des ventes.",
    coupDoeil: [
      "Le quai de pêche de M'bour reçoit chaque jour les pirogues et fait vivre toute une chaîne de métiers : mareyeurs, transformatrices, mécaniciens, charpentiers et transporteurs.",
      "À quelques kilomètres, Saly est la principale station balnéaire de la Petite-Côte. En 2026, la presse locale fait état d'une baisse des débarquements de sardinelle qui pèse sur les revenus des pêcheurs.",
    ],
    faits: [
      {
        value: "284 189",
        label: "habitants recensés dans la commune de M'bour",
        source: "recensement RGPH-5, ANSD, 2023",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les réservations d'un petit hébergement",
        texte:
          "Pour un hôtel, une résidence ou une maison d'hôtes de la Petite-Côte, centraliser les réservations venues de plusieurs canaux évite les doubles réservations en haute saison. C'est un objet fréquent de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Suivre les achats et les ventes d'un mareyeur",
        texte:
          "Pour un mareyeur ou une unité de transformation du poisson, noter les quantités achetées, les pertes et les ventes par client aide à repérer où part la marge quand les arrivages baissent. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Accompagner une agence ou un promoteur immobilier",
        texte:
          "Pour une agence qui gère des locations saisonnières ou des programmes autour de Saly, suivre les visites, les contrats et les relances dans un même outil limite les oublis. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
    ],
    faq: [
      {
        question: "Avez-vous une présence physique à M'bour ou à Saly ?",
        answer:
          "Non. Audyxa n'a pas de bureau à M'bour ni à Saly. Notre fondateur travaille depuis Abomey-Calavi (Bénin) et toutes les missions se font à distance.",
      },
      {
        question: "Travaillez-vous avec des acteurs de la pêche artisanale ?",
        answer:
          "Nous pouvons aider un mareyeur ou une transformatrice à mieux suivre ses achats, ses pertes et ses ventes. Nous n'intervenons pas sur la gestion de la ressource halieutique, qui relève des autorités et des professionnels du secteur.",
      },
      {
        question: "La saisonnalité touristique complique-t-elle une mission ?",
        answer:
          "Elle se planifie. Nous préférons déployer un outil de réservation en basse saison, pour qu'il soit prêt et éprouvé avant les périodes de forte fréquentation.",
      },
    ],
  },
  // ---------------------------------------------------------- SAINT-LOUIS
  {
    paysSlug: "senegal",
    villeSlug: "saint-louis",
    villeName: "Saint-Louis",
    metaDescription:
      "Audyxa accompagne à distance hébergeurs, guides, armateurs et centres de formation de Saint-Louis, ville du patrimoine mondial : outils métier et suivi.",
    resume:
      "Audyxa accompagne à distance les acteurs du tourisme, de la pêche et de l'enseignement supérieur de Saint-Louis, ancienne capitale coloniale classée au patrimoine mondial. La ville combine un patrimoine qui attire les visiteurs, une activité de pêche importante et un pôle universitaire, trois bases pour des besoins de gestion très différents.",
    coupDoeil: [
      "L'île de Saint-Louis est inscrite sur la liste du patrimoine mondial de l'UNESCO depuis le 2 décembre 2000, au titre de ville coloniale ancienne capitale de l'Afrique de l'Ouest.",
      "Saint-Louis est aussi une ville de pêche : elle fournit une large part du poisson consommé dans la région voisine de Louga, d'après des responsables régionaux de la pêche cités par la presse locale.",
    ],
    faits: [
      {
        value: "254 171",
        label: "habitants recensés dans la commune de Saint-Louis",
        source: "recensement RGPH-5, ANSD, 2023",
      },
      {
        value: "2 décembre 2000",
        label: "date d'inscription de l'île de Saint-Louis au patrimoine mondial",
        source: "Centre du patrimoine mondial de l'UNESCO, 24e session du Comité, 2000",
      },
    ],
    casUsage: [
      {
        titre: "Organiser l'offre d'un hébergement ou d'un guide",
        texte:
          "Pour une maison d'hôtes de l'île, un guide indépendant ou une agence de circuits, regrouper les demandes reçues par plusieurs canaux dans un seul outil évite les réponses oubliées. C'est un objet fréquent de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Fiabiliser la comptabilité d'une activité de pêche",
        texte:
          "Pour un armateur ou un petit exportateur de produits de la mer, un suivi clair des sorties, des ventes et des dépenses de carburant facilite le dialogue avec les banques et les clients. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Alléger la gestion d'un établissement de formation",
        texte:
          "Pour un institut privé ou un centre de formation proche du pôle universitaire, automatiser les inscriptions, les relances de paiement et les attestations dégage du temps administratif. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Audyxa dispose-t-il d'une équipe à Saint-Louis ?",
        answer:
          "Non. Nous n'avons pas de bureau à Saint-Louis : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous intervenons à distance sur l'ensemble des missions.",
      },
      {
        question: "Comment aider un hébergeur de l'île à gagner en visibilité ?",
        answer:
          "Notre rôle est d'organiser la gestion (réservations, avis, relances), pas de faire de la promotion. Nous pouvons en revanche mettre en place le suivi qui permet de mesurer d'où viennent les demandes.",
      },
      {
        question: "Les chiffres du tourisme à Saint-Louis sont-ils utilisés dans vos analyses ?",
        answer:
          "Nous n'avons pas trouvé de statistique récente et fiable de fréquentation touristique propre à la ville, nous n'en affichons donc aucune. Le diagnostic s'appuie sur vos propres données de réservation et de vente.",
      },
    ],
  },
  // ------------------------------------------------------------- RUFISQUE
  {
    paysSlug: "senegal",
    villeSlug: "rufisque",
    villeName: "Rufisque",
    metaDescription:
      "Audyxa accompagne à distance industriels, entreprises du BTP et commerçants de Rufisque, ville historique de la périphérie de Dakar : automatisation et suivi.",
    resume:
      "Audyxa accompagne à distance les industriels, entreprises du bâtiment et commerçants de Rufisque, ville historique située à l'est de Dakar. Entre son passé de comptoir, sa zone industrielle et l'étalement de l'agglomération dakaroise, la commune a des besoins de gestion proches de ceux de la capitale, avec un tissu de PME plus local.",
    coupDoeil: [
      "Rufisque fut l'une des quatre communes historiques du Sénégal colonial et reste marquée par cette histoire de comptoir et de commerce.",
      "La commune accueille un grand tissu industriel : la cimenterie Sococim est implantée dans la zone de Rufisque et de Bargny, et un second projet de cimenterie, à Bargny-Sendou, a fait l'objet d'une audience publique en août 2025.",
    ],
    faits: [
      {
        value: "295 459",
        label: "habitants recensés dans la commune de Rufisque",
        source: "recensement RGPH-5, ANSD, 2023",
      },
    ],
    casUsage: [
      {
        titre: "Fiabiliser la maintenance d'un site industriel",
        texte:
          "Pour une usine ou un atelier de la zone industrielle, planifier les interventions et suivre les pannes dans un outil dédié réduit les arrêts non prévus. C'est un chantier typique de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Suivre les chantiers d'une entreprise du bâtiment",
        texte:
          "La demande en matériaux de construction nourrit un tissu d'entreprises du BTP. Pour elles, centraliser devis, avancement des chantiers et paiements limite les dépassements. C'est le rôle de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
      {
        titre: "Outiller un commerce ou un transporteur de la périphérie de Dakar",
        texte:
          "Pour un commerçant ou un transporteur qui sert l'agglomération, un suivi des tournées et des encaissements apporte une visibilité qu'un simple carnet ne donne pas. C'est un objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Rufisque ?",
        answer:
          "Non. Rufisque étant proche de Dakar, la question revient, mais Audyxa n'a aucun bureau dans cette zone. Notre fondateur est basé à Abomey-Calavi (Bénin) et les missions se déroulent à distance.",
      },
      {
        question: "Intervenez-vous auprès de grands groupes industriels ?",
        answer:
          "Nous ciblons surtout les PME et les structures en croissance. Pour un site industriel important, nous pouvons cadrer un périmètre précis (un atelier, un processus), sans nous substituer aux équipes informatiques déjà en place.",
      },
      {
        question: "Faut-il choisir entre la page Rufisque et la page Dakar ?",
        answer:
          "Les deux se complètent. La page Dakar décrit le contexte de la capitale ; celle de Rufisque s'adresse aux entreprises de la commune, dont les activités industrielles et de construction diffèrent de celles du centre-ville.",
      },
    ],
  },
  // ----------------------------------------------------------- ZIGUINCHOR
  {
    paysSlug: "senegal",
    villeSlug: "ziguinchor",
    villeName: "Ziguinchor",
    metaDescription:
      "Audyxa accompagne à distance hébergeurs, transporteurs et producteurs de Ziguinchor, porte de la Casamance : réservations, suivi logistique et outils métier.",
    resume:
      "Audyxa accompagne à distance les hébergeurs, transporteurs et producteurs de Ziguinchor, principale ville de la Casamance. L'éloignement de Dakar et la dépendance à quelques liaisons (route par la Gambie, bateau, avion) font du suivi logistique un sujet concret, tandis que le tourisme et l'agriculture structurent l'économie locale.",
    coupDoeil: [
      "Ziguinchor est reliée à Dakar par le bateau Aline Sitoé Diatta, une liaison essentielle pour la Casamance : elle a été interrompue en juin 2023 puis a repris le 9 avril 2024, d'après la presse.",
      "La région est connue pour ses mangroves, ses îles et la station de Cap Skirring, des atouts touristiques qui ont souffert de ces ruptures de liaison.",
    ],
    faits: [
      {
        value: "214 874",
        label: "habitants recensés dans la commune de Ziguinchor",
        source: "recensement RGPH-5, ANSD, 2023",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les réservations d'un hébergement ou d'un circuit",
        texte:
          "Pour un hôtel, un campement ou un organisateur de séjours en Casamance, un outil de réservation qui tient compte des aléas de transport permet d'ajuster rapidement les arrivées prévues. C'est un chantier de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Piloter l'acheminement de marchandises vers Dakar",
        texte:
          "Pour un transporteur ou un expéditeur de produits agricoles, anticiper les délais selon la voie choisie (route, bateau) et prévenir les clients automatiquement évite bien des litiges. C'est un objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer une coopérative ou un groupement de producteurs",
        texte:
          "Pour un groupement qui collecte des fruits, des noix ou des produits de la pêche auprès de nombreux membres, tenir les apports et les paiements à jour dans un registre partagé renforce la confiance. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous physiquement en Casamance ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Ziguinchor et ne se déplace pas pour les missions courantes. Notre fondateur est basé à Abomey-Calavi (Bénin) : tout se fait à distance, ce qui est justement un avantage quand les liaisons physiques sont irrégulières.",
      },
      {
        question: "Quelle connexion faut-il pour travailler avec vous ?",
        answer:
          "Une connexion mobile correcte suffit pour les points de suivi. Nous privilégions des outils légers et des échanges par messagerie quand la liaison est instable.",
      },
      {
        question: "Pouvez-vous nous aider à mesurer l'effet des ruptures de transport sur notre activité ?",
        answer:
          "Oui, à partir de vos propres chiffres (annulations, retards, ventes perdues). Nous ne disposons pas de statistique officielle récente sur cet impact et n'en affichons donc aucune.",
      },
    ],
  },
  // ------------------------------------------------------------- DIOURBEL
  {
    paysSlug: "senegal",
    villeSlug: "diourbel",
    villeName: "Diourbel",
    metaDescription:
      "Audyxa appuie à distance transformateurs d'arachide, commerçants et structures de Diourbel, au cœur du bassin arachidier : suivi, comptes et automatisation.",
    resume:
      "Audyxa appuie à distance les transformateurs d'arachide, commerçants et petites structures de Diourbel, au cœur du bassin arachidier. La ville vit d'une économie de marché locale, proche des pôles de Touba et de Mbacké, avec un besoin marqué de gestion simple et lisible pour des activités encore peu formalisées.",
    coupDoeil: [
      "Diourbel est présentée comme la capitale historique du bassin arachidier, une région où l'arachide a longtemps dominé les revenus monétaires des ménages ruraux.",
      "Une étude de l'ANSD sur la transformation non industrielle de l'arachide (2018-2019) recense 902 unités dans le bassin arachidier, une activité majoritairement féminine et très peu formalisée.",
    ],
    faits: [
      {
        value: "157 554",
        label: "habitants recensés dans la commune de Diourbel",
        source: "recensement RGPH-5, ANSD, 2023",
      },
      {
        value: "902",
        label: "unités de transformation non industrielle de l'arachide recensées dans le bassin arachidier (périmètre bassin, non limité à la commune)",
        source: "Étude monographique sur la transformation non industrielle de l'arachide (EMTRAS), ANSD, 2018-2019",
      },
    ],
    casUsage: [
      {
        titre: "Suivre la production d'une unité de transformation d'arachide",
        texte:
          "Pour une unité de pressage d'huile ou de fabrication de tourteau, suivre les quantités entrées, les rendements et les ventes par client aide à fixer des prix qui couvrent les coûts. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Tenir les comptes d'un commerce de marché",
        texte:
          "Pour un commerçant qui vend à crédit à une clientèle fidèle, un registre numérique simple des ventes et des créances évite d'oublier les impayés. C'est un objet fréquent de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Dématérialiser une démarche pour une structure publique locale",
        texte:
          "Pour un service décentralisé ou une collectivité, passer d'un circuit papier à un circuit numérique pour les demandes et les suivis de dossiers raccourcit les délais. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Diourbel ?",
        answer:
          "Non. Nous n'avons pas de bureau à Diourbel : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se font à distance.",
      },
      {
        question: "Peut-on travailler avec des structures très peu formalisées ?",
        answer:
          "Oui. Le diagnostic part de la façon dont l'activité fonctionne réellement et propose un premier niveau d'organisation (registre, suivi des stocks) sans exiger d'abord une structure juridique lourde.",
      },
      {
        question: "Les données chiffrées sur l'économie de Diourbel sont-elles disponibles ?",
        answer:
          "L'ANSD publie des situations économiques et sociales par région, mais les chiffres restent à l'échelle régionale. Nous n'affichons donc pas de donnée communale que nous ne pouvons pas sourcer, et nous travaillons avec vos propres chiffres.",
      },
    ],
  },
  // ---------------------------------------------------------------- LOUGA
  {
    paysSlug: "senegal",
    villeSlug: "louga",
    villeName: "Louga",
    metaDescription:
      "Audyxa accompagne à distance éleveurs, maraîchers, commerçants et familles d'émigrés de Louga : suivi des ventes, registre de gestion et outils de pilotage.",
    resume:
      "Audyxa accompagne à distance les éleveurs, maraîchers, commerçants et entrepreneurs de Louga. L'économie locale mêle élevage, maraîchage dans les Niayes à l'ouest et commerce urbain, nourri par les revenus de nombreux émigrés qui investissent surtout dans l'immobilier et le commerce.",
    coupDoeil: [
      "La région de Louga est connue pour ses cultures maraîchères, avec l'oignon comme production phare à Potou, et pour l'élevage, deuxième activité de la région selon les études disponibles.",
      "L'émigration y joue un rôle économique important : plusieurs travaux de recherche montrent que les fonds des migrants soutiennent les ménages et financent surtout l'immobilier et de petits commerces (ces études datent de 2004 à 2015 et sont à lire comme des tendances).",
    ],
    faits: [
      {
        value: "113 365",
        label: "habitants recensés dans la commune de Louga",
        source: "recensement RGPH-5, ANSD, 2023",
      },
    ],
    casUsage: [
      {
        titre: "Organiser la vente d'une production maraîchère",
        texte:
          "Pour un groupement de maraîchers, suivre les récoltes disponibles, les commandes et les livraisons aide à écouler la production avant qu'elle ne se dégrade. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Suivre un élevage ou un commerce de bétail",
        texte:
          "Pour un éleveur ou un commerçant de bétail, un carnet numérique des achats, des ventes et des soins garde la mémoire des coûts réels sur la durée. C'est un objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Gérer les envois et projets d'une famille ou d'une association d'émigrés",
        texte:
          "Pour une association d'émigrés ou un entrepreneur qui investit au pays, suivre les cotisations, les dépenses de chantier et les rapports à distance donne de la transparence à tous les membres. C'est le rôle de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence à Louga ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Louga. Notre fondateur est basé à Abomey-Calavi, au Bénin, et toutes les missions se déroulent à distance, y compris avec des clients vivant à l'étranger.",
      },
      {
        question: "Pouvez-vous travailler avec un entrepreneur de la diaspora ?",
        answer:
          "Oui. Une mission à distance convient bien à un entrepreneur installé hors du Sénégal qui veut suivre son activité à Louga : nous mettons en place un tableau de bord partagé et des points réguliers.",
      },
      {
        question: "Disposez-vous de chiffres récents sur l'économie de Louga ?",
        answer:
          "Nous n'avons trouvé que des études anciennes (2004 à 2015) sur l'émigration et la production maraîchère, que nous n'utilisons pas comme chiffres actuels. Le diagnostic repose sur vos propres données.",
      },
    ],
  },
];
