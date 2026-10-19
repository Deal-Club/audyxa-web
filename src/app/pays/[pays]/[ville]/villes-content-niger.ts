/**
 * Contenu enrichi des villes nigériennes hors Niamey (Zinder, Maradi, Agadez,
 * Tahoua, Dosso, Diffa, Tillabéri, Arlit, Birni N'Konni).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * les effectifs de population viennent du recensement général de 2012 de l'Institut
 * national de la statistique du Niger (INS), dernier recensement publié, repris par
 * citypopulation.de. Quand une donnée fiable et récente n'a pas été trouvée, le
 * texte reste qualitatif. Les sujets de sécurité, de frontières et de politique
 * sont traités de façon strictement factuelle et neutre. Audyxa n'a aucun bureau
 * dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

const SRC_RGP_2012 =
  "recensement général de la population 2012, Institut national de la statistique du Niger (INS), chiffre repris par citypopulation.de";

export const VILLES_NIGER: VilleContent[] = [
  // --------------------------------------------------------------- ZINDER
  {
    paysSlug: "niger",
    villeSlug: "zinder",
    villeName: "Zinder",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Zinder, ancienne capitale du Damagaram : commerce, énergie, services et outils métier, sans bureau sur place.",
    resume:
      "Audyxa accompagne à distance les commerçants, transporteurs, prestataires de services et organisations de Zinder, grande ville de l'est du pays. Entre commerce avec le nord du Nigeria, activités liées à la raffinerie et administration régionale, les besoins tournent souvent autour du suivi des flux et de la fiabilité des données.",
    coupDoeil: [
      "Zinder abrite la raffinerie de la Société de raffinage de Zinder (SORAZ), coentreprise entre l'État nigérien et la China National Petroleum Corporation, entrée en production en 2011.",
      "La ville est l'une des plus peuplées du pays et sert de relais commercial entre le centre du Niger et la frontière nigériane.",
    ],
    faits: [
      {
        value: "235 605",
        label: "habitants recensés dans la commune de Zinder",
        source: SRC_RGP_2012,
      },
      {
        value: "20 000",
        label: "barils par jour de capacité annoncée pour la raffinerie de Zinder, nettement supérieure aux besoins intérieurs estimés à environ 5 000 barils par jour",
        source: "presse économique nigériane (TheCable, ICIR), citant le ministère nigérian du Pétrole",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les livraisons d'un distributeur de produits pétroliers ou de gaz",
        texte:
          "Pour un distributeur qui alimente stations et revendeurs depuis la zone de Zinder, relier les bons de chargement, les tournées et les encaissements dans un même tableau de bord réduit les écarts de fin de mois. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "energie",
        sectorAnchor: "énergie",
      },
      {
        titre: "Fiabiliser les achats et reventes d'un grossiste",
        texte:
          "Un grossiste qui s'approvisionne côté nigérian et revend dans les marchés de la région a intérêt à tenir un suivi unique des achats, des taux de change appliqués et des créances. C'est le point d'entrée de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Moderniser la gestion d'une école ou d'un centre de formation privé",
        texte:
          "Pour un établissement privé qui gère inscriptions, frais de scolarité et présences sur papier, un outil simple partagé avec la direction fait gagner du temps chaque rentrée. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Zinder ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Zinder : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se déroulent à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Peut-on travailler à distance si la connexion est instable ?",
        answer:
          "Oui, en le prévoyant dès le cadrage : documents légers, points de suivi courts, outils utilisables avec une bande passante limitée et sauvegarde régulière. Nous ne promettons pas de performance réseau que nous ne maîtrisons pas.",
      },
      {
        question: "Travaillez-vous avec la raffinerie ou ses sous-traitants ?",
        answer:
          "Non, nous n'avons aucune mission ni relation avec la raffinerie. La mention de ce site sert uniquement à décrire l'économie locale. Nous nous adressons aux entreprises de la ville dont les besoins relèvent de la transformation digitale.",
      },
    ],
  },
  // --------------------------------------------------------------- MARADI
  {
    paysSlug: "niger",
    villeSlug: "maradi",
    villeName: "Maradi",
    metaDescription:
      "Audyxa appuie à distance les négociants, transporteurs et PME de Maradi, grande place commerciale proche du Nigeria : suivi des stocks, créances et automatisation.",
    resume:
      "Audyxa appuie à distance les négociants, transporteurs et PME de Maradi, que l'on présente souvent comme la capitale économique du pays. Sa proximité avec l'État nigérian de Katsina fait vivre un commerce de gros intense, mais aussi très sensible aux décisions de fermeture ou de réouverture des frontières.",
    coupDoeil: [
      "Maradi vit en grande partie des échanges avec le nord du Nigeria, au point que les fermetures de frontière de 2019, puis de 2023, y ont été durement ressenties.",
      "Après la fermeture ayant suivi le coup d'État de juillet 2023 et les sanctions de la CEDEAO, les frontières nigériennes avec le Nigeria, dont celle de Maradi, ont rouvert au printemps 2024, selon la presse.",
    ],
    faits: [
      {
        value: "267 249",
        label: "habitants recensés dans la commune de Maradi, la plus peuplée du pays après Niamey dans ce recensement",
        source: SRC_RGP_2012,
      },
    ],
    casUsage: [
      {
        titre: "Absorber les chocs de prix et de délais d'un commerce transfrontalier",
        texte:
          "Pour un importateur ou un grossiste dont les marges bougent avec les taux de change et les délais de passage, un suivi des coûts réels par lot permet de réajuster vite les prix de revente. C'est un chantier de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Suivre les camions et les chargements entre Maradi et la frontière",
        texte:
          "Pour un transporteur dont les camions attendent parfois longtemps aux postes de contrôle, un journal partagé des départs, arrivées et incidents aide à renseigner clients et assureurs. Nous le traitons dans notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer la collecte et la vente de produits agricoles",
        texte:
          "Pour un négociant qui achète niébé, arachide ou céréales auprès de nombreux producteurs, enregistrer pesées, avances et paiements dans un outil unique limite les contestations. C'est un objet fréquent de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il implanté à Maradi ?",
        answer:
          "Non. Nous n'avons pas de bureau à Maradi : notre fondateur vit à Abomey-Calavi, au Bénin, et chaque mission se mène à distance.",
      },
      {
        question: "Un outil peut-il réduire l'effet d'une fermeture de frontière ?",
        answer:
          "Non, un outil ne remplace pas un débouché. En revanche, une vision claire des stocks, des créances et de la trésorerie aide à réagir plus vite quand les flux s'interrompent. Nous ne promettons aucun résultat chiffré sur ce point.",
      },
      {
        question: "Comment gérer des paiements en espèces et en plusieurs monnaies ?",
        answer:
          "On commence par ce qui existe : cahier, tableur, messagerie. Le diagnostic propose un journal simple des entrées et sorties par monnaie avant tout outil plus avancé, sans exiger de bancarisation préalable.",
      },
    ],
  },
  // -------------------------------------------------------------- AGADEZ
  {
    paysSlug: "niger",
    villeSlug: "agadez",
    villeName: "Agadez",
    metaDescription:
      "Audyxa accompagne à distance hôtels, agences, artisans et transporteurs d'Agadez, ville du Sahel inscrite à l'UNESCO : réservations, suivi d'activité et outils simples.",
    resume:
      "Audyxa accompagne à distance les hébergeurs, artisans, transporteurs et commerçants d'Agadez, porte du Sahara nigérien. Longtemps portée par le tourisme et le transit caravanier, la ville voit son économie évoluer au gré du contexte régional, ce qui renforce l'intérêt d'outils légers pour suivre une activité irrégulière.",
    coupDoeil: [
      "Le centre historique d'Agadez est inscrit au patrimoine mondial de l'UNESCO depuis 2013 (référence 1268) ; sa mosquée possède un minaret en terre d'environ 27 mètres.",
      "Agadez est un point de transit pour les voyageurs vers le nord. La loi de 2015 qui encadrait le transport de migrants a été abrogée en novembre 2023, ce qui a modifié les activités de transport de la ville, selon la presse.",
    ],
    faits: [
      {
        value: "110 497",
        label: "habitants recensés dans la commune d'Agadez",
        source: SRC_RGP_2012,
      },
      {
        value: "2013",
        label: "année d'inscription du centre historique d'Agadez sur la Liste du patrimoine mondial",
        source: "UNESCO, Centre du patrimoine mondial, bien n° 1268",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les réservations d'un petit hébergement ou d'un campement",
        texte:
          "Pour un hôtel ou une auberge dont la fréquentation varie beaucoup d'un mois à l'autre, un calendrier unique des réservations et des acomptes évite les doublons. C'est un chantier de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Présenter l'artisanat touareg à une clientèle distante",
        texte:
          "Pour un atelier de bijoux en argent, de maroquinerie ou de vannerie, un catalogue en ligne et un suivi des commandes ouvrent une clientèle au-delà de la ville. Nous cadrons cela dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser les rotations d'un transporteur sur de longues distances",
        texte:
          "Pour une entreprise de transport dont les trajets durent plusieurs jours sur piste, planifier les départs, les pannes et les coûts par rotation rend la facturation plus juste. C'est le rôle de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Avez-vous une présence physique à Agadez ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Agadez : le fondateur est basé à Abomey-Calavi, au Bénin, et les accompagnements se font à distance.",
      },
      {
        question: "Le tourisme est-il encore un secteur à outiller ?",
        answer:
          "Nous n'avons pas trouvé de données récentes et fiables sur la fréquentation touristique de la ville, nous ne la chiffrons donc pas. Pour un acteur qui reçoit encore des visiteurs, les outils de réservation et de suivi restent utiles ; nous partons toujours de votre activité réelle.",
      },
      {
        question: "Comment organiser un travail à distance avec des coupures possibles ?",
        answer:
          "Nous prévoyons des échanges asynchrones : documents partagés, comptes rendus écrits et ateliers courts, plutôt que de longues réunions vidéo. Le rythme est ajusté avec vous selon les conditions de connexion.",
      },
    ],
  },
  // -------------------------------------------------------------- TAHOUA
  {
    paysSlug: "niger",
    villeSlug: "tahoua",
    villeName: "Tahoua",
    metaDescription:
      "Audyxa appuie à distance éleveurs-négociants, commerçants, associations et services publics locaux de Tahoua, au cœur de l'Ader : gestion, suivi et outils métier.",
    resume:
      "Audyxa appuie à distance les commerçants, les acteurs de l'élevage, les associations et les services de Tahoua, chef-lieu de région au nord-ouest du pays. Dans une ville où l'élevage, le commerce et les projets de développement occupent une large place, les besoins portent surtout sur le suivi des activités et le reporting.",
    coupDoeil: [
      "Tahoua est le chef-lieu d'une région dont la population atteignait environ 3,33 millions d'habitants au recensement de 2012, selon l'INS Tahoua.",
      "La région est d'abord agropastorale : élevage, agriculture pluviale et commerce y structurent les revenus de nombreux ménages.",
    ],
    faits: [
      {
        value: "117 826",
        label: "habitants recensés dans la commune de Tahoua",
        source: SRC_RGP_2012,
      },
      {
        value: "3 327 260",
        label: "habitants recensés dans l'ensemble de la région de Tahoua",
        source: "Tahoua en chiffres, édition 2013, INS Niger (direction régionale de Tahoua), d'après le recensement de 2012",
      },
    ],
    casUsage: [
      {
        titre: "Tenir un registre fiable du bétail acheté et revendu",
        texte:
          "Pour un négociant en bétail, enregistrer chaque achat, chaque frais de transport et chaque vente permet de savoir quelle opération a réellement dégagé une marge. C'est un objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Simplifier le suivi des projets d'une ONG ou d'une association locale",
        texte:
          "Pour une organisation qui rend des comptes à plusieurs bailleurs, un tableau de bord partagé des activités, des bénéficiaires et des dépenses réduit les ressaisies. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Digitaliser des démarches de proximité dans un service public",
        texte:
          "Pour un service local qui reçoit des demandes sur papier, cartographier le parcours d'un dossier et fixer des délais de traitement visibles améliore l'accueil des usagers. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe à Tahoua ?",
        answer:
          "Non, nous n'avons pas de bureau à Tahoua. Notre fondateur est à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance.",
      },
      {
        question: "Pouvez-vous accompagner une activité d'élevage ?",
        answer:
          "Oui, sur la partie gestion : achats, ventes, frais, créances, suivi des sorties. Nous ne conseillons pas sur la zootechnie ni la santé animale, qui relèvent de spécialistes.",
      },
      {
        question: "Faut-il être équipé en ordinateurs pour démarrer ?",
        answer:
          "Pas nécessairement. Un diagnostic peut se faire avec un simple téléphone et un tableur, et les outils proposés sont choisis selon votre équipement réel, sans exiger d'investissement préalable.",
      },
    ],
  },
  // --------------------------------------------------------------- DOSSO
  {
    paysSlug: "niger",
    villeSlug: "dosso",
    villeName: "Dosso",
    metaDescription:
      "Audyxa accompagne à distance commerçants, transporteurs et organisations de Dosso, ville zarma proche du Bénin : suivi des flux, des stocks et outils de gestion.",
    resume:
      "Audyxa accompagne à distance les commerçants, transporteurs, agriculteurs-négociants et organisations de Dosso, chef-lieu de région au sud-ouest du Niger. La région se trouve sur l'axe qui relie le pays au golfe de Guinée, ce qui rend ses opérateurs particulièrement sensibles aux conditions de passage à la frontière béninoise.",
    coupDoeil: [
      "Dosso est la capitale d'un ancien sultanat zarma, dont le chef traditionnel, le Zarmakoye, conserve une place reconnue dans la vie locale.",
      "La région de Dosso touche le Bénin à Gaya, face à Malanville. Selon la presse, ce point de passage est fermé côté nigérien depuis 2023, malgré un dialogue entre les deux pays évoqué en 2026 (situation à vérifier à la date de lecture).",
    ],
    faits: [
      {
        value: "58 671",
        label: "habitants recensés dans la commune de Dosso",
        source: SRC_RGP_2012,
      },
    ],
    casUsage: [
      {
        titre: "Réorganiser les flux d'un transporteur privé du corridor vers le sud",
        texte:
          "Quand les itinéraires changent, comparer le coût réel de chaque route de repli et suivre les délais par client permet d'ajuster tarifs et promesses. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Suivre les ventes et les crédits d'un commerce de détail",
        texte:
          "Pour une boutique ou un dépôt qui vend à crédit à des clients réguliers, un carnet numérique des dettes, avec rappels, limite les impayés. Nous le cadrons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Mettre en commun les données d'une coopérative agricole",
        texte:
          "Pour une coopérative ou un groupement de producteurs, un registre partagé des membres, des apports et des ventes groupées rend les décisions plus transparentes. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Dosso ?",
        answer:
          "Non. Nous n'avons pas de bureau à Dosso : le fondateur d'Audyxa est basé à Abomey-Calavi, au Bénin, et nos missions sont menées à distance.",
      },
      {
        question: "Pouvez-vous nous aider si nos fournisseurs dépendent de la frontière béninoise ?",
        answer:
          "Nous pouvons vous aider à mesurer l'effet des délais et des surcoûts sur vos marges et à documenter vos scénarios. Nous ne pouvons pas, en revanche, prévoir ni influencer l'ouverture d'un poste frontière.",
      },
      {
        question: "Les échanges se font-ils en français ou en zarma ?",
        answer:
          "Nos livrables sont en français. Pour des équipes plus à l'aise en langue locale, nous prévoyons des supports visuels simples et des sessions de prise en main pas à pas avec vos relais internes.",
      },
    ],
  },
  // --------------------------------------------------------------- DIFFA
  {
    paysSlug: "niger",
    villeSlug: "diffa",
    villeName: "Diffa",
    metaDescription:
      "Audyxa accompagne à distance producteurs, commerçants et ONG de Diffa, ville de la Komadougou près du lac Tchad : poivron, suivi de projets et outils de reporting.",
    resume:
      "Audyxa accompagne à distance les producteurs, commerçants et organisations de Diffa, chef-lieu de l'extrême est du Niger, au bord de la Komadougou Yobé. La région associe cultures irriguées, notamment le poivron rouge, échanges avec le Nigeria et une forte présence d'organisations humanitaires et de développement.",
    coupDoeil: [
      "Le poivron rouge est une culture de rente de la région de Diffa, qui procure des revenus significatifs aux acteurs de la filière, d'après une étude publiée en 2026 dans le Journal of Applied Biosciences.",
      "La région accueille des personnes déplacées et des réfugiés, en majorité venus du Nigeria. Selon le HCR, elle regroupe 39 % des réfugiés et demandeurs d'asile du pays (carte de juillet 2026).",
    ],
    faits: [
      {
        value: "39 960",
        label: "habitants recensés dans la commune de Diffa",
        source: SRC_RGP_2012,
      },
      {
        value: "39 %",
        label: "part des réfugiés et demandeurs d'asile du Niger présents dans la région de Diffa, dont 99 % de réfugiés venus du Nigeria",
        source: "HCR Niger, carte de la population relevant de la compétence du HCR, Diffa, juillet 2026",
      },
    ],
    casUsage: [
      {
        titre: "Tracer la collecte et la vente de poivron séché",
        texte:
          "Pour un collecteur ou une coopérative, suivre chaque lot depuis le producteur jusqu'à l'acheteur, avec poids, qualité et paiements, fiabilise les comptes de campagne. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Alléger le reporting d'une organisation d'aide ou de développement",
        texte:
          "Pour une ONG locale qui alimente plusieurs formats de rapports, un seul jeu de données source et des tableaux automatiques évitent de multiplier les saisies. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Suivre les stocks d'un commerce d'approvisionnement",
        texte:
          "Pour un grossiste qui fournit des commerces de la région et des organisations, un inventaire tenu en continu aide à anticiper les ruptures et les commandes groupées. Nous le traitons dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa intervient-il physiquement à Diffa ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Diffa et ne se déplace pas dans la région : notre fondateur est basé à Abomey-Calavi, au Bénin, et tout se fait à distance.",
      },
      {
        question: "Peut-on gérer des données sensibles concernant des bénéficiaires ?",
        answer:
          "Oui, avec des précautions : peu de données personnelles collectées, accès limités, sauvegardes et consignes claires. Le diagnostic inclut un point sur la protection des données, sans promesse de sécurité absolue.",
      },
      {
        question: "Disposez-vous de chiffres sur la production de poivron de Diffa ?",
        answer:
          "Pas de chiffres fiables et récents à citer : nous n'avons trouvé ni tonnage ni surface publiés que nous puissions vérifier. Nous préférons rester qualitatifs plutôt que d'avancer un ordre de grandeur non sourcé.",
      },
    ],
  },
  // ----------------------------------------------------------- TILLABÉRI
  {
    paysSlug: "niger",
    villeSlug: "tillaberi",
    villeName: "Tillabéri",
    metaDescription:
      "Audyxa accompagne à distance les acteurs de Tillabéri, ville de la vallée du fleuve Niger : périmètres irrigués, associations et suivi de projets, sans bureau sur place.",
    resume:
      "Audyxa accompagne à distance les producteurs, associations, coopératives et petites entreprises de Tillabéri, chef-lieu de région sur la rive du fleuve Niger. L'agriculture irriguée, la pêche et les projets de développement y structurent l'activité, avec un besoin constant de suivi simple et de traçabilité des financements.",
    coupDoeil: [
      "La région de Tillabéri comptait 2 722 482 habitants au recensement de 2012, d'après l'INS Niger.",
      "Elle est concernée par le programme Kandadji (barrage et développement de la vallée du Niger), dont l'accord de financement avec la Banque africaine de développement a été signé en juin 2019 pour 128,8 millions de dollars ; son état d'avancement actuel n'a pas été vérifié.",
    ],
    faits: [
      {
        value: "22 774",
        label: "habitants recensés dans la commune de Tillabéri",
        source: SRC_RGP_2012,
      },
      {
        value: "2 722 482",
        label: "habitants recensés dans l'ensemble de la région de Tillabéri",
        source: "Dépliant démographique Tillabéri, INS Niger, d'après le recensement de 2012",
      },
    ],
    casUsage: [
      {
        titre: "Suivre l'eau, les parcelles et les redevances d'un périmètre irrigué",
        texte:
          "Pour une coopérative qui exploite un périmètre le long du fleuve, tenir à jour les parcelles, les cotisations d'eau et les récoltes évite les différends en fin de saison. C'est un chantier de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Rendre lisible la gestion d'un fonds communautaire ou d'une mutuelle",
        texte:
          "Pour un groupement d'épargne ou une association, un registre partagé des cotisations et des prêts, consultable par ses membres, renforce la confiance. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Documenter l'usage de financements de projets pour une collectivité",
        texte:
          "Pour une mairie ou un service qui gère des fonds de partenaires, relier chaque dépense à une activité et une pièce justificative simplifie les audits. Nous le traitons dans notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau ou une équipe à Tillabéri ?",
        answer:
          "Non. Il n'y a pas de bureau Audyxa à Tillabéri : notre fondateur est basé à Abomey-Calavi, au Bénin, et toute mission est conduite à distance.",
      },
      {
        question: "Le contexte régional change-t-il votre façon de travailler ?",
        answer:
          "Le calendrier et les modes d'échange sont adaptés à vos contraintes, sans que nous nous prononcions sur la situation sécuritaire. Selon le HCR, la région est la première du pays pour le nombre de déplacés internes (juillet 2026), ce que nous prenons en compte pour limiter les déplacements et les échéances serrées.",
      },
      {
        question: "Pouvez-vous nous donner des chiffres de production de riz ou de poisson ?",
        answer:
          "Non : nous n'avons pas trouvé de séries récentes et vérifiables pour la commune de Tillabéri. Nous préférons ne rien avancer plutôt qu'un chiffre approximatif ; vos propres relevés serviront de base au diagnostic.",
      },
    ],
  },
  // --------------------------------------------------------------- ARLIT
  {
    paysSlug: "niger",
    villeSlug: "arlit",
    villeName: "Arlit",
    metaDescription:
      "Audyxa appuie à distance les entreprises et prestataires d'Arlit, ville minière du nord d'Agadez : sous-traitance, logistique, commerce local et outils de gestion.",
    resume:
      "Audyxa appuie à distance les entreprises, sous-traitants, transporteurs et commerçants d'Arlit, ville née de l'exploitation de l'uranium dans le nord du Niger. L'économie locale reste liée à l'activité minière, dont le cadre juridique et l'exploitation ont beaucoup évolué ces dernières années.",
    coupDoeil: [
      "La mine d'Akouta, exploitée par la Cominak, a fermé en 2021 après environ 40 ans d'activité et plus de 75 000 tonnes d'uranium produites, selon Orano.",
      "En juin 2025, le gouvernement nigérien a annoncé la nationalisation de la SOMAÏR, qui exploite la mine d'Arlit. Orano conteste cette décision devant des instances d'arbitrage ; le dossier est en cours.",
    ],
    faits: [
      {
        value: "78 651",
        label: "habitants recensés dans la commune d'Arlit",
        source: SRC_RGP_2012,
      },
      {
        value: "1968",
        label: "année de création de la SOMAÏR, société d'exploitation de la mine d'uranium d'Arlit",
        source: "Orano, communiqué relayé par World Nuclear News, 2025",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les prestations d'un sous-traitant de site isolé",
        texte:
          "Pour une entreprise qui fournit restauration, maintenance ou transport à un site distant, relier ordres de travail, heures et factures réduit les contestations. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Diversifier et mesurer l'activité d'un commerce dépendant du site minier",
        texte:
          "Pour un commerçant dont une grande part des ventes vient du personnel du site, suivre les ventes par type de client permet de repérer la dépendance et de tester d'autres débouchés. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Planifier les approvisionnements d'une ville éloignée",
        texte:
          "Pour un grossiste qui fait venir ses produits de loin, calculer des seuils de réapprovisionnement adaptés aux longs délais évite ruptures et surstocks. Nous le traitons dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Arlit ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Arlit. Notre fondateur est basé à Abomey-Calavi, au Bénin, et nos accompagnements se déroulent à distance.",
      },
      {
        question: "Travaillez-vous avec les sociétés minières ?",
        answer:
          "Non, Audyxa n'a aucune mission ni relation avec la SOMAÏR, Orano ou leurs successeurs. Les faits mentionnés servent à décrire le contexte local. Nous nous adressons aux entreprises et prestataires de la ville, quel que soit leur lien avec ce secteur.",
      },
      {
        question: "Comment aborder une activité qui dépend d'un seul grand donneur d'ordre ?",
        answer:
          "Nous commençons par mesurer cette dépendance : part du chiffre d'affaires, délais de paiement, besoins de trésorerie. L'objectif est de vous donner une vision claire, sans prédire l'évolution du secteur minier, que nous ne maîtrisons pas.",
      },
    ],
  },
  // ------------------------------------------------------ BIRNI N'KONNI
  {
    paysSlug: "niger",
    villeSlug: "birni-n-konni",
    villeName: "Birni N'Konni",
    metaDescription:
      "Audyxa appuie à distance les commerçants, transporteurs et producteurs de Birni N'Konni, marché de la frontière nigériane sur la RN1 : stocks, créances et pilotage.",
    resume:
      "Audyxa appuie à distance les commerçants, transporteurs et producteurs de Birni N'Konni, ville marché du sud de la région de Tahoua, tout près de la frontière nigériane. Située sur la route nationale 1, elle vit d'un commerce d'échange où chaque rotation, chaque taux et chaque délai pèsent sur la marge.",
    coupDoeil: [
      "Birni N'Konni est décrite comme une ville marché et un nœud de transport important, qui tient sa place de ses terres agricoles environnantes et de sa situation sur la route nationale 1.",
      "Le département se consacre à l'agriculture, à l'élevage, à l'artisanat et au commerce, ce dernier favorisé par la proximité du Nigeria, voisin économiquement très actif, d'après un projet de développement financé par le Luxembourg.",
    ],
    faits: [
      {
        value: "63 169",
        label: "habitants recensés dans la commune de Birni N'Konni",
        source: SRC_RGP_2012,
      },
    ],
    casUsage: [
      {
        titre: "Calculer la vraie marge d'un négoce de céréales entre deux pays",
        texte:
          "Pour un commerçant qui achète du maïs ou du mil d'un côté de la frontière et le revend de l'autre, intégrer transport, taxes et variations de prix dans un même calcul évite les illusions de marge. C'est un chantier de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Coordonner les rotations de camions sur la route nationale",
        texte:
          "Pour une société de transport dont les camions chargent à Konni pour Niamey ou Maradi, un suivi simple des départs, retards et coûts permet de mieux répondre aux clients. Nous le traitons dans notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Outiller les changeurs et boutiques de transfert d'argent",
        texte:
          "Pour un point de change ou un revendeur de services de paiement mobile, un journal quotidien des opérations par monnaie aide à rapprocher la caisse et à repérer vite les écarts. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Birni N'Konni ?",
        answer:
          "Non. Nous n'avons pas de bureau à Birni N'Konni : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous travaillons exclusivement à distance.",
      },
      {
        question: "Pouvez-vous suivre un commerce qui fonctionne surtout en espèces ?",
        answer:
          "Oui. Nous partons du cahier ou du tableur existant et proposons un journal des entrées et sorties plus rigoureux, sans exiger de bancarisation ni de logiciel lourd.",
      },
      {
        question: "Avez-vous des chiffres récents sur les échanges avec le Nigeria ?",
        answer:
          "Nous n'avons pas trouvé de statistiques récentes et fiables sur les flux à ce poste précis, donc nous n'en citons pas. Vos propres relevés de ventes et d'achats constituent la meilleure base pour un diagnostic utile.",
      },
    ],
  },
];
