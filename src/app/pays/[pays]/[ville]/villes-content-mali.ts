/**
 * Contenu enrichi des villes maliennes hors Bamako (Sikasso, Ségou, Mopti,
 * Koutiala, Kayes, Gao, Kati, Tombouctou, San).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source. Les populations communales sont les estimations
 * 2023 publiées par citypopulation.de d'après les résultats corrigés du RGPH5 (2022)
 * de l'INSTAT Mali. Quand une donnée fiable et récente n'a pas été trouvée, le texte
 * reste qualitatif. Audyxa n'a aucun bureau dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_MALI: VilleContent[] = [
  // ------------------------------------------------------------- SIKASSO
  {
    paysSlug: "mali",
    villeSlug: "sikasso",
    villeName: "Sikasso",
    metaDescription:
      "Audyxa accompagne à distance les producteurs, transformateurs et négociants de Sikasso, au cœur de la zone cotonnière et fruitière du sud malien : suivi et outils.",
    resume:
      "Audyxa accompagne à distance les entreprises de Sikasso, deuxième pôle du sud agricole malien et ancienne capitale du Kénédougou. Coton, fruits, céréales et commerce transfrontalier avec la Côte d'Ivoire et le Burkina Faso y créent beaucoup de flux à suivre : récoltes, stocks, transport et ventes.",
    coupDoeil: [
      "Sikasso est la ville du Kénédougou, royaume dont le tata (rempart) résista au siège mené par Samory Touré en 1887-1888.",
      "Située dans le sud humide du pays, la région est l'un des grands bassins agricoles du Mali, avec le coton comme culture de rente emblématique.",
    ],
    faits: [
      {
        value: "environ 435 000",
        label: "habitants estimés dans la commune urbaine de Sikasso en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les livraisons et les stocks d'un transformateur de fruits",
        texte:
          "Pour un conditionneur ou un séchoir de mangues, suivre les apports des producteurs, les lots reçus et les pertes limite les surprises en pleine saison. Ce suivi est le premier livrable de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Fluidifier le négoce avec les pays voisins",
        texte:
          "Pour un commerçant qui achemine des marchandises vers la Côte d'Ivoire ou le Burkina Faso, relier devis, bons de livraison et paiements dans un même fichier partagé réduit les ressaisies. C'est un chantier typique de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
      {
        titre: "Structurer une coopérative de producteurs",
        texte:
          "Pour une coopérative qui regroupe des planteurs, un registre numérique des membres, des apports et des avances remplace les cahiers. Nous le concevons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Sikasso ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Sikasso. Notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Les missions suivent-elles le calendrier des récoltes ?",
        answer:
          "Oui, c'est même préférable. Nous calons le cadrage et les tests d'un outil hors des pics de récolte et de commercialisation, pour que l'équipe soit disponible au moment de se former.",
      },
      {
        question: "Peut-on commencer avec un simple tableur ?",
        answer:
          "Oui. Le diagnostic part de vos outils actuels, y compris un tableur ou un cahier, et propose un premier niveau d'organisation avant tout investissement plus lourd.",
      },
    ],
  },
  // --------------------------------------------------------------- SÉGOU
  {
    paysSlug: "mali",
    villeSlug: "segou",
    villeName: "Ségou",
    metaDescription:
      "Audyxa travaille à distance avec les riziculteurs, négociants et artisans de Ségou, sur le Niger : suivi des récoltes, des ventes et outils de gestion simples.",
    resume:
      "Audyxa travaille à distance avec les acteurs de Ségou, ville du fleuve Niger dont l'économie est liée à la riziculture irriguée de l'Office du Niger. Riz, canne, élevage, poterie et tourisme fluvial y coexistent, avec des besoins communs de traçabilité des volumes et de suivi financier.",
    coupDoeil: [
      "Ségou fut la capitale de l'empire bambara au XVIIIe siècle et reste un haut lieu culturel, avec le festival sur le Niger.",
      "La ville est proche du barrage de Markala, qui alimente en eau le grand périmètre irrigué de l'Office du Niger.",
    ],
    faits: [
      {
        value: "environ 194 000",
        label: "habitants estimés dans la commune de Ségou en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
      {
        value: "environ 100 000 ha",
        label:
          "irrigués par gravité depuis le barrage de Markala pour l'Office du Niger (les estimations du périmètre total varient selon les sources, de 100 000 à 127 000 hectares)",
        source: "ministère malien de l'Agriculture, selon les sources consultées",
      },
    ],
    casUsage: [
      {
        titre: "Tracer le paddy de la collecte à la vente",
        texte:
          "Pour une rizerie ou un groupement qui achète du paddy aux exploitants, enregistrer chaque apport, le décorticage et les ventes évite les écarts de stock en fin de campagne. C'est l'objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Donner de la visibilité à un artisan ou à un hébergement",
        texte:
          "Pour un atelier de poterie, un artisan textile ou une maison d'hôtes, des réservations et des commandes centralisées évitent les doublons et les oublis. Nous les mettons en place avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Suivre les crédits de campagne d'un exploitant",
        texte:
          "Pour une structure qui avance intrants et financements aux exploitants, un suivi clair des échéances et des remboursements limite les impayés. Ce travail relève de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent physiquement à Ségou ?",
        answer:
          "Non. Nous n'avons pas de bureau à Ségou : notre fondateur vit à Abomey-Calavi, au Bénin, et nous intervenons entièrement à distance.",
      },
      {
        question: "Travaillez-vous directement avec l'Office du Niger ?",
        answer:
          "Non, nous n'avons aucun partenariat avec lui. Nous accompagnons des entreprises et des groupements, pas l'administration du périmètre. Les chiffres de superficie cités ici viennent de sources publiques et varient selon la définition retenue.",
      },
      {
        question: "Comment gérer un outil quand le réseau est irrégulier ?",
        answer:
          "Nous privilégions des outils légers, utilisables avec une connexion modeste, et un mode de saisie qui tolère des synchronisations différées. La solution dépend de ce qui fonctionne réellement sur place, que nous vérifions pendant le diagnostic.",
      },
    ],
  },
  // --------------------------------------------------------------- MOPTI
  {
    paysSlug: "mali",
    villeSlug: "mopti",
    villeName: "Mopti",
    metaDescription:
      "Audyxa appuie à distance les pêcheurs, mareyeurs, transporteurs et hébergeurs de Mopti, port fluvial au confluent du Niger et du Bani : suivi et outils simples.",
    resume:
      "Audyxa appuie à distance les professionnels de Mopti, port fluvial bâti au confluent du Niger et du Bani. La pêche, le commerce du poisson et du sel, le transport par pinasse et le tourisme y structurent l'activité. Le contexte sécuritaire du centre du pays pèse sur certains secteurs, ce qui rend un accompagnement à distance d'autant plus pertinent.",
    coupDoeil: [
      "Mopti est surnommée la Venise du Mali pour ses quais et ses pinasses, entre le Niger et le Bani.",
      "Elle est voisine de Sévaré, où se trouvent l'aéroport régional et le carrefour routier vers le nord et vers Bandiagara.",
    ],
    faits: [
      {
        value: "environ 133 000",
        label: "habitants estimés dans la commune de Mopti en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les arrivages et les ventes de poisson",
        texte:
          "Pour un mareyeur ou un fumeur de poisson, noter chaque achat, chaque lot fumé ou séché et chaque vente permet de savoir ce qui rapporte vraiment. Ce suivi démarre avec notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser les rotations de pinasses et de camions",
        texte:
          "Pour un armateur de pinasses ou un transporteur routier, planifier les départs, les charges et les paiements dans un tableau partagé réduit les trajets à vide. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Gérer les réservations d'un petit établissement",
        texte:
          "Pour un hôtel ou un guide qui reçoit des visiteurs de façon irrégulière, un calendrier unique de réservations et d'acomptes évite les doublons. Nous le construisons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Y a-t-il une équipe Audyxa à Mopti ?",
        answer:
          "Non, Audyxa n'a pas de bureau à Mopti. Notre fondateur est basé à Abomey-Calavi, au Bénin, et tout se fait à distance, ce qui ne dépend pas des conditions de déplacement dans la région.",
      },
      {
        question: "Le contexte sécuritaire change-t-il votre façon de travailler ?",
        answer:
          "Nous n'avons pas à nous déplacer, donc il n'a pas d'effet direct sur notre intervention. Il peut en revanche affecter l'activité de nos interlocuteurs et la qualité du réseau ; nous en tenons compte en prévoyant des échanges souples et des outils tolérants aux coupures.",
      },
      {
        question: "Peut-on suivre une activité saisonnière comme la pêche ?",
        answer:
          "Oui. Les niveaux d'eau du fleuve rythment l'activité : nous construisons un suivi qui reste simple en basse saison et qui monte en charge lorsque les volumes augmentent.",
      },
    ],
  },
  // ------------------------------------------------------------ KOUTIALA
  {
    paysSlug: "mali",
    villeSlug: "koutiala",
    villeName: "Koutiala",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Koutiala, capitale du coton malien : suivi des apports, stocks, huileries et commerce, avec des outils simples.",
    resume:
      "Audyxa accompagne à distance les entreprises de Koutiala, souvent présentée comme la capitale du coton malien. La filière y irrigue tout un tissu local : égrenage, huile et tourteaux, transport, négoce d'intrants, artisans et commerçants dont l'activité suit celle de la campagne cotonnière.",
    coupDoeil: [
      "Koutiala est un des cœurs de la zone cotonnière suivie par la compagnie nationale CMDT, dans l'ancienne région de Sikasso dont elle est devenue région à part entière en 2023.",
      "Le coton y fait vivre aussi les activités qui en découlent : huile, tourteaux pour l'élevage et réparation de matériel agricole.",
    ],
    faits: [
      {
        value: "environ 214 000",
        label: "habitants estimés dans la commune de Koutiala en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
      {
        value: "656 679 t",
        label:
          "de coton graine produites au niveau national en 2024-2025, contre 690 000 t la saison précédente, soit une baisse de 4,8 % attribuée aux fortes pluies (chiffre national, non propre à Koutiala)",
        source: "ministère malien de l'Agriculture, annonce rapportée par Reuters, mai 2025",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les apports et les paiements des producteurs",
        texte:
          "Pour un groupement de producteurs de coton, recenser les parcelles, les apports livrés et les sommes dues évite les contestations au moment des règlements. Le point de départ est notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Piloter la production d'une petite huilerie",
        texte:
          "Pour une unité qui presse la graine de coton, relier les entrées de matière, le rendement en huile et la vente des tourteaux donne une vision claire de la marge. Nous l'organisons avec notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Gérer un commerce d'intrants et de matériel agricole",
        texte:
          "Pour un distributeur d'engrais, de pièces et de petit matériel, un suivi des ventes à crédit durant la campagne limite les impayés. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il des équipes sur place à Koutiala ?",
        answer:
          "Non, nous n'avons pas de bureau à Koutiala. Notre fondateur est installé à Abomey-Calavi, au Bénin, et les missions se font à distance.",
      },
      {
        question: "Le chiffre de production cité concerne-t-il Koutiala ?",
        answer:
          "Non, il s'agit du total national. Nous n'avons pas trouvé de chiffre fiable et récent propre à Koutiala, et préférons ne pas en avancer un.",
      },
      {
        question: "Êtes-vous liés à la CMDT ou à une filière coton ?",
        answer:
          "Non. Audyxa est indépendant et n'a pas de relation commerciale avec la CMDT. Nous aidons des entreprises locales à organiser leur propre gestion, quelle que soit la filière.",
      },
    ],
  },
  // --------------------------------------------------------------- KAYES
  {
    paysSlug: "mali",
    villeSlug: "kayes",
    villeName: "Kayes",
    metaDescription:
      "Audyxa accompagne à distance les commerçants, associations et entrepreneurs de Kayes, ville du rail Dakar-Niger et de la diaspora : suivi, transferts et outils.",
    resume:
      "Audyxa accompagne à distance les entrepreneurs et associations de Kayes, ville de l'ouest du Mali tournée vers le Sénégal et la Mauritanie. Son histoire est liée au chemin de fer Dakar-Niger et à une forte émigration vers la France, dont les envois d'argent financent encore commerces, constructions et projets collectifs.",
    coupDoeil: [
      "Kayes fut la capitale du Soudan français avant Bamako et reste un point d'appui sur l'axe ferroviaire Dakar-Bamako.",
      "L'émigration y est ancienne : la plupart des Maliens installés en France sont originaires de la région de Kayes.",
    ],
    faits: [
      {
        value: "environ 218 000",
        label: "habitants estimés dans la commune de Kayes en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
      {
        value: "32 %",
        label:
          "des envois de fonds vers le Mali viennent de France, qui accueille environ 16 % de la diaspora malienne (chiffre national, non propre à Kayes)",
        source: "étude de l'IRD sur la diaspora malienne, ancienneté à vérifier",
      },
    ],
    casUsage: [
      {
        titre: "Structurer une association de ressortissants",
        texte:
          "Pour une association villageoise ou de diaspora qui finance un puits, une école ou un centre de santé, tenir en ligne cotisations, dépenses et justificatifs rassure les donateurs. Nous l'outillons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Suivre un chantier financé à distance",
        texte:
          "Pour un artisan du bâtiment ou un promoteur dont le client vit à l'étranger, un suivi de l'avancement, des achats et des paiements partagé évite les malentendus. Il relève de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
      {
        titre: "Organiser un commerce de transit",
        texte:
          "Pour un commerçant qui s'approvisionne côté sénégalais ou mauritanien, relier commandes, transport et encaissements dans un seul tableau réduit les ruptures. C'est un cas typique de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "import-export-distribution",
        sectorAnchor: "import-export et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Kayes ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kayes ; notre fondateur est basé à Abomey-Calavi, au Bénin. Les échanges passent par visioconférence et outils partagés.",
      },
      {
        question: "Pouvez-vous travailler avec des clients dispersés entre le Mali et l'étranger ?",
        answer:
          "Oui, c'est même une situation que l'intervention à distance gère bien : les outils partagés permettent à une association ou à une famille de suivre les mêmes chiffres, où que chacun se trouve.",
      },
      {
        question: "Le pourcentage de 32 % concerne-t-il Kayes ?",
        answer:
          "Non, il s'agit d'une part nationale des envois de fonds. Nous n'avons pas trouvé de pourcentage fiable propre à Kayes et ne l'avançons pas.",
      },
    ],
  },
  // ----------------------------------------------------------------- GAO
  {
    paysSlug: "mali",
    villeSlug: "gao",
    villeName: "Gao",
    metaDescription:
      "Audyxa travaille à distance avec les commerçants, transporteurs et ONG de Gao, sur le Niger : suivi des flux, outils simples et tolérants aux coupures.",
    resume:
      "Audyxa travaille à distance avec les acteurs de Gao, grande ville du nord-est du Mali sur le fleuve Niger. Commerce sahélien, élevage, riz et échanges avec le Niger voisin y structurent l'activité. Le contexte sécuritaire et la connectivité y sont des contraintes documentées : nous les prenons en compte en proposant des outils légers, sans nous appuyer sur des déplacements.",
    coupDoeil: [
      "Gao fut la capitale de l'empire songhaï, et le tombeau des Askia y est inscrit au patrimoine mondial de l'UNESCO depuis 2004.",
      "Ville de marché au bord du Niger, elle relie le nord du Mali au sud et aux pays voisins.",
    ],
    faits: [
      {
        value: "environ 142 000",
        label: "habitants estimés dans la commune de Gao en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
    ],
    casUsage: [
      {
        titre: "Tenir les comptes d'un commerce de gros",
        texte:
          "Pour un grossiste dont les achats viennent de loin, un registre simple des stocks, des avances et des créances limite les ruptures entre deux approvisionnements. Il commence par notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Suivre la production et la vente de riz",
        texte:
          "Pour un groupement rizicole des abords du fleuve, enregistrer les surfaces, les récoltes et les ventes donne une base fiable pour négocier un financement. Nous l'outillons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Rendre un reporting d'organisation plus robuste",
        texte:
          "Pour une ONG ou un projet dont les équipes terrain ont des communications irrégulières, un modèle de rapport léger, utilisable hors ligne, facilite la consolidation. C'est un livrable de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence à Gao ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Gao : notre fondateur est basé à Abomey-Calavi, au Bénin, et toute l'intervention se fait à distance.",
      },
      {
        question: "Comment travaillez-vous quand la connexion est instable ?",
        answer:
          "Nous prévoyons des outils légers, des échanges asynchrones et des modes de saisie qui tolèrent les coupures. Nous ne promettons pas une disponibilité continue, qui dépend du réseau local.",
      },
      {
        question: "Le contexte sécuritaire est-il un obstacle ?",
        answer:
          "Il peut peser sur l'activité de nos interlocuteurs et sur les communications, mais comme nous ne nous déplaçons pas, il n'empêche pas une mission. Nous adaptons le calendrier et le périmètre à ce qui est réaliste pour vous.",
      },
    ],
  },
  // ---------------------------------------------------------------- KATI
  {
    paysSlug: "mali",
    villeSlug: "kati",
    villeName: "Kati",
    metaDescription:
      "Audyxa accompagne à distance les commerçants, artisans et PME de Kati, aux portes de Bamako : suivi des ventes, logistique du quotidien et outils de gestion.",
    resume:
      "Audyxa accompagne à distance les entreprises de Kati, ville située à une quinzaine de kilomètres de Bamako et rattachée à son agglomération par la route. Forte de son rôle de garnison et de ville dortoir, elle abrite commerces, ateliers et petits transporteurs qui profitent de la proximité de la capitale.",
    coupDoeil: [
      "Kati est connue pour son grand camp militaire, qui structure en partie la vie économique locale.",
      "Beaucoup d'habitants y résident et travaillent à Bamako, d'où un fort va-et-vient quotidien sur la route nationale.",
    ],
    faits: [
      {
        value: "environ 186 000",
        label: "habitants estimés dans la commune de Kati en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
    ],
    casUsage: [
      {
        titre: "Gérer une boutique ou une cantine de quartier",
        texte:
          "Pour un petit commerce de proximité, suivre les entrées, les sorties et les crédits aux clients réguliers évite de confondre caisse et bénéfice. C'est le premier pas de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser les tournées d'un petit transporteur",
        texte:
          "Pour un propriétaire de minibus ou de camionnettes sur l'axe de Bamako, enregistrer trajets, carburant et entretien révèle la rentabilité de chaque véhicule. Nous le structurons avec notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Suivre les commandes d'un atelier d'artisan",
        texte:
          "Pour un menuisier ou un soudeur qui travaille sur devis, un suivi des commandes, des acomptes et des délais réduit les retards. Il s'appuie sur notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Kati ou à Bamako ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Kati. Notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se font à distance, quelle que soit la distance à Bamako.",
      },
      {
        question: "Kati étant proche de Bamako, pourquoi passer par vous ?",
        answer:
          "La proximité de la capitale ne règle pas l'organisation interne d'une petite entreprise. Notre apport est un diagnostic indépendant et des outils adaptés à votre taille, sans mobiliser de prestataire sur place.",
      },
      {
        question: "Peut-on démarrer avec un budget réduit ?",
        answer:
          "Oui. Un diagnostic court permet de repérer les deux ou trois points les plus coûteux avant de décider de la suite, sans engagement sur un grand projet.",
      },
    ],
  },
  // ---------------------------------------------------------- TOMBOUCTOU
  {
    paysSlug: "mali",
    villeSlug: "tombouctou",
    villeName: "Tombouctou",
    metaDescription:
      "Audyxa travaille à distance avec les bibliothèques, guides et artisans de Tombouctou : catalogage, suivi de l'activité et outils légers et robustes.",
    resume:
      "Audyxa travaille à distance avec les acteurs de Tombouctou, cité historique du Sahel inscrite au patrimoine mondial. Son économie repose sur le commerce, l'artisanat, le sel et le patrimoine écrit. L'isolement géographique, la connectivité limitée et le contexte sécuritaire sont des contraintes documentées, que nous prenons en compte en privilégiant des solutions légères.",
    coupDoeil: [
      "Tombouctou est inscrite au patrimoine mondial de l'UNESCO depuis 1988, notamment pour ses grandes mosquées.",
      "La ville est célèbre pour ses manuscrits anciens, conservés dans des bibliothèques publiques et familiales ; leur nombre exact est estimé très différemment selon les sources.",
    ],
    faits: [
      {
        value: "environ 85 000",
        label: "habitants estimés dans la commune de Tombouctou en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
    ],
    casUsage: [
      {
        titre: "Inventorier et numériser un fonds de manuscrits familial",
        texte:
          "Pour une bibliothèque familiale ou associative, un catalogue numérique avec états de conservation et photographies facilite le suivi et la protection du fonds. Nous le structurons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Organiser l'accueil et les prestations de guides",
        texte:
          "Pour un guide ou une maison d'hôtes qui reçoit des visiteurs de façon irrégulière, un système de demandes, d'acomptes et de confirmations réduit les malentendus. Il s'appuie sur notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Sécuriser les données d'une petite organisation",
        texte:
          "Pour une association ou un commerce qui perd parfois ses fichiers, mettre en place des sauvegardes simples et un accès partagé protège l'essentiel. Cela relève de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité, confidentialité et résilience",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Tombouctou ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Tombouctou. Notre fondateur est basé à Abomey-Calavi, au Bénin, et nous intervenons uniquement à distance.",
      },
      {
        question: "Savez-vous numériser des manuscrits ?",
        answer:
          "Nous pouvons concevoir l'outil de catalogage et de suivi, pas la numérisation physique ni la conservation, qui demandent des spécialistes et du matériel sur place. Nous n'avons aucun lien avec les institutions qui s'en occupent.",
      },
      {
        question: "Comment faire avec une connexion limitée ?",
        answer:
          "Nous prévoyons des outils qui fonctionnent avec peu de débit et qui se synchronisent quand la connexion revient. Le niveau de connectivité réel est vérifié pendant le diagnostic.",
      },
    ],
  },
  // ----------------------------------------------------------------- SAN
  {
    paysSlug: "mali",
    villeSlug: "san",
    villeName: "San",
    metaDescription:
      "Audyxa appuie à distance les commerçants, producteurs de céréales et petites entreprises de San, ville de marché entre Ségou et Mopti : suivi et outils simples.",
    resume:
      "Audyxa appuie à distance les entreprises de San, ville de marché installée sur la route entre Ségou et Mopti, au bord du Bani. Les céréales, le coton, l'élevage et le commerce y font vivre un tissu de grossistes, d'artisans et de transporteurs qui ont besoin de suivre précisément leurs stocks et leurs créances.",
    coupDoeil: [
      "San est un carrefour routier entre Ségou, Mopti et Tominian, avec un marché très fréquenté.",
      "La ville est le chef-lieu d'un cercle de la région de Ségou, où l'agriculture pluviale domine.",
    ],
    faits: [
      {
        value: "environ 120 000",
        label: "habitants estimés dans la commune de San en 2023",
        source:
          "estimation citypopulation.de, fondée sur les résultats corrigés du recensement RGPH5 (2022) de l'INSTAT Mali",
      },
    ],
    casUsage: [
      {
        titre: "Gérer les achats et reventes de céréales",
        texte:
          "Pour un négociant qui achète du mil, du sorgho ou du maïs après la récolte pour le revendre plus tard, suivre prix d'achat, stockage et marges évite de vendre à perte. C'est l'objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Coordonner les départs d'une gare routière",
        texte:
          "Pour un gestionnaire de transport ou un syndicat de chauffeurs, un tableau partagé des départs, des chargements et des cotisations remplace les listes papier. Nous l'organisons avec notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Moderniser la gestion d'un établissement scolaire privé",
        texte:
          "Pour une école privée, centraliser inscriptions, frais de scolarité et présences dans un seul outil allège le secrétariat. Nous le développons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ecoles-privees-universites",
        sectorAnchor: "écoles privées et universités",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à San ?",
        answer:
          "Non. Audyxa n'a pas de bureau à San. Notre fondateur est installé à Abomey-Calavi, au Bénin, et toutes les missions se déroulent à distance.",
      },
      {
        question: "Les données de marché que vous citez sont-elles locales ?",
        answer:
          "Seule la population est un chiffre local, et il s'agit d'une estimation. Pour le reste, nous restons qualitatifs plutôt que d'avancer des prix ou des volumes de céréales que nous n'avons pas pu vérifier.",
      },
      {
        question: "Faut-il équiper tout le personnel d'ordinateurs ?",
        answer:
          "Non. Nous partons souvent du téléphone, déjà omniprésent, et ajoutons un poste partagé si nécessaire. Le diagnostic précise le minimum utile.",
      },
    ],
  },
];
