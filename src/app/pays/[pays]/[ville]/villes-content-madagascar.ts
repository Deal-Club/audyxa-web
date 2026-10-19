/**
 * Contenu enrichi de 10 villes malgaches (Antananarivo, Toamasina, Antsirabe,
 * Fianarantsoa, Mahajanga, Toliara, Antsiranana, Ambovombe, Morondava,
 * Ambatondrazaka).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source (INSTAT Madagascar, RGPH-3, 2018, ou article de
 * presse daté). Quand une donnée fiable et récente n'a pas été trouvée, le texte
 * reste qualitatif. Audyxa n'a aucun bureau dans ces villes : intervention à
 * distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_MADAGASCAR: VilleContent[] = [
  // ------------------------------------------------------------ ANTANANARIVO
  {
    paysSlug: "madagascar",
    villeSlug: "antananarivo",
    villeName: "Antananarivo",
    metaDescription:
      "Audyxa accompagne à distance les entreprises d'Antananarivo, capitale malgache : centres d'appels, zones franches, PME et administrations, de l'audit à l'automatisation.",
    resume:
      "Audyxa accompagne à distance les entreprises et organisations d'Antananarivo, capitale politique et économique de Madagascar. La ville concentre les sièges, l'administration et une activité d'externalisation de services pour des clients étrangers, trois domaines où des processus mieux documentés et des outils partagés font gagner un temps précieux.",
    coupDoeil: [
      "Antananarivo est bâtie sur une série de collines et abrite l'essentiel des sièges d'entreprises, des ministères et des institutions du pays.",
      "La capitale héberge de nombreux centres d'appels et prestataires de services externalisés qui travaillent pour des donneurs d'ordre étrangers, principalement francophones.",
    ],
    faits: [
      {
        value: "1 274 225",
        label: "habitants recensés dans la commune urbaine d'Antananarivo",
        source: "recensement RGPH-3, Institut National de la Statistique (INSTAT) Madagascar, 2018",
      },
    ],
    casUsage: [
      {
        titre: "Fiabiliser le suivi qualité d'un centre de contact",
        texte:
          "Pour un prestataire qui traite des appels et des demandes pour des clients à l'étranger, centraliser les indicateurs de qualité, les plannings et les retours clients dans un seul tableau de bord évite les relevés manuels. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Documenter les processus d'une PME en croissance",
        texte:
          "Pour une entreprise de la capitale dont les équipes se sont multipliées, mettre à plat qui fait quoi, de la commande à la facturation, réduit les doublons et les oublis. C'est le rôle de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte de processus",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Outiller un service administratif ou une institution",
        texte:
          "Pour un service public ou un organisme qui gère beaucoup de dossiers papier, un diagnostic simple permet de repérer les étapes à numériser en premier. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Antananarivo ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Antananarivo : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Peut-on accompagner un prestataire d'externalisation basé dans la capitale ?",
        answer:
          "Oui, pour la partie organisation et outillage interne : suivi des indicateurs, planification, circulation de l'information. Nous ne remplaçons ni vos équipes opérationnelles ni vos donneurs d'ordre, et nous ne proposons pas de chiffre d'amélioration avant d'avoir regardé votre situation.",
      },
      {
        question: "Le décalage horaire pose-t-il problème ?",
        answer:
          "Il reste modeste entre Antananarivo et le Bénin. Les points de suivi sont fixés sur des créneaux qui conviennent aux deux côtés, et les livrables sont partagés dans un espace commun pour que chacun avance à son rythme.",
      },
    ],
  },
  // --------------------------------------------------------------- TOAMASINA
  {
    paysSlug: "madagascar",
    villeSlug: "toamasina",
    villeName: "Toamasina",
    metaDescription:
      "Audyxa appuie à distance les transitaires, importateurs et entreprises de Toamasina, premier port de Madagascar : suivi des flux, documents et automatisation.",
    resume:
      "Audyxa appuie à distance les transitaires, importateurs, transporteurs et industriels de Toamasina, principale porte maritime du pays. Ici, une grande partie des marchandises entre et sort par le port, ce qui rend le suivi des dossiers, des délais et des documents particulièrement structurant pour les entreprises qui en dépendent.",
    coupDoeil: [
      "Le port de Toamasina est, selon la presse économique malgache, le principal point d'entrée et de sortie des échanges commerciaux du pays, avec un programme d'extension du terminal à conteneurs étalé jusqu'en 2028.",
      "La congestion du terminal et la création prévue de ports secs aux abords de la ville montrent à quel point la fluidité des dossiers conditionne l'activité locale.",
    ],
    faits: [
      {
        value: "325 857",
        label: "habitants recensés dans la commune urbaine de Toamasina I",
        source: "recensement RGPH-3, INSTAT Madagascar, 2018",
      },
      {
        value: "près de 80 %",
        label: "part des échanges commerciaux du pays qui passerait par le port, selon un média (estimation, d'autres sources avancent des parts plus élevées)",
        source: "L'Express de Madagascar, février 2026",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les dossiers d'un transitaire de bout en bout",
        texte:
          "Pour une société qui gère des dizaines de dossiers de dédouanement en parallèle, un suivi partagé des étapes, des documents et des échéances limite les relances et les retards oubliés. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Anticiper les stocks d'un importateur-distributeur",
        texte:
          "Pour un importateur dont les arrivages dépendent des escales et des délais de sortie du port, relier les commandes, les dates prévues et les stocks aide à éviter les ruptures comme le surstock. C'est le travail de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Mettre en ordre la gestion d'un atelier ou d'une usine",
        texte:
          "Pour un industriel de la zone portuaire, un état des lieux de la production, des achats et de la maintenance indique par où commencer l'outillage. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent physiquement à Toamasina ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Toamasina : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous travaillons exclusivement à distance, avec des échanges réguliers en visioconférence.",
      },
      {
        question: "Pouvez-vous accélérer le passage de nos marchandises au port ?",
        answer:
          "Non, nous n'intervenons ni sur les autorités portuaires ni sur la douane. Nous aidons à mieux organiser vos propres dossiers, documents et relances, ce qui évite les pertes de temps internes, sans rien promettre sur les délais du terminal.",
      },
      {
        question: "Que faire quand l'activité dépend d'un port congestionné ?",
        answer:
          "Un suivi précis de chaque dossier et des dates d'arrivée permet au moins de savoir où se situent les blocages et de prévenir vos clients. Nous commençons par cartographier votre circuit actuel avant de proposer le moindre outil.",
      },
    ],
  },
  // ---------------------------------------------------------------- ANTSIRABE
  {
    paysSlug: "madagascar",
    villeSlug: "antsirabe",
    villeName: "Antsirabe",
    metaDescription:
      "Audyxa accompagne à distance les industriels, producteurs et artisans d'Antsirabe, ville thermale des Hautes Terres : suivi de production, stocks et gestion.",
    resume:
      "Audyxa accompagne à distance les industriels, transformateurs, producteurs et hôteliers d'Antsirabe, ville des Hautes Terres connue pour ses eaux thermales et son tissu industriel. Brasserie, agroalimentaire, textile et artisanat y coexistent avec une agriculture active, autant de métiers où le suivi des stocks et de la production reste le premier levier.",
    coupDoeil: [
      "Antsirabe, fondée en 1872 par des missionnaires norvégiens, doit son surnom de « Vichy malgache » à ses sources thermales et à son climat frais.",
      "La ville accueille des usines de boissons, d'agroalimentaire et de textile, et reste réputée pour ses pousse-pousse, véritable image de marque locale.",
    ],
    faits: [
      {
        value: "246 354",
        label: "habitants recensés dans la commune urbaine d'Antsirabe",
        source: "recensement RGPH-3, INSTAT Madagascar, 2018",
      },
    ],
    casUsage: [
      {
        titre: "Planifier la production d'une unité agroalimentaire",
        texte:
          "Pour un transformateur de lait, de fruits ou de céréales, relier les approvisionnements, la production et les livraisons évite les pertes de produits frais. C'est un objet courant de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser les réservations d'un hôtel thermal",
        texte:
          "Pour un établissement qui reçoit des visiteurs venus de la capitale ou de l'étranger, un outil unique de réservations et de disponibilités remplace les carnets et les messages éparpillés. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Structurer le suivi des commandes d'un atelier textile",
        texte:
          "Pour une entreprise de confection travaillant à la commande, centraliser les modèles, les délais et les fournitures limite les erreurs entre l'atelier et le client. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Y a-t-il une équipe Audyxa à Antsirabe ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Antsirabe : notre fondateur est basé à Abomey-Calavi, au Bénin, et toutes les missions se font à distance, par visioconférence et documents partagés.",
      },
      {
        question: "Une petite entreprise artisanale peut-elle être accompagnée ?",
        answer:
          "Oui, si elle a un besoin concret, comme mieux suivre ses commandes ou ses stocks. La mission est dimensionnée en conséquence, en partant des outils déjà utilisés (cahier, tableur, messagerie) plutôt qu'en imposant une solution lourde.",
      },
      {
        question: "Comment travailler avec des équipes peu connectées en atelier ?",
        answer:
          "Nous privilégions des outils légers, utilisables sur un simple téléphone, et des formations courtes en visioconférence. Nous vérifions d'abord la qualité de la connexion sur place, sans la présumer.",
      },
    ],
  },
  // ------------------------------------------------------------- FIANARANTSOA
  {
    paysSlug: "madagascar",
    villeSlug: "fianarantsoa",
    villeName: "Fianarantsoa",
    metaDescription:
      "Audyxa appuie à distance les producteurs, établissements d'enseignement et acteurs du tourisme de Fianarantsoa, capitale du pays betsileo : suivi, outils et gestion.",
    resume:
      "Audyxa appuie à distance les producteurs, établissements d'enseignement, hôteliers et associations de Fianarantsoa, grande ville du pays betsileo. Entre culture du thé et de la vigne dans les environs, liaison ferroviaire avec la côte et vie universitaire, la ville offre des activités variées où l'organisation des données fait la différence.",
    coupDoeil: [
      "La ligne ferroviaire Fianarantsoa-Côte Est relie la ville à Manakara sur 163 kilomètres et reste vitale pour des milliers de paysans, malgré un service irrégulier.",
      "À une vingtaine de kilomètres, le domaine de Sahambavy est présenté par les guides comme la seule plantation de thé de l'île, et la région est aussi connue pour son vignoble.",
    ],
    faits: [
      {
        value: "191 776",
        label: "habitants recensés dans la commune urbaine de Fianarantsoa",
        source: "recensement RGPH-3, INSTAT Madagascar, 2018",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les livraisons de producteurs de la région",
        texte:
          "Pour une coopérative ou un négociant qui collecte thé, vin, fruits ou café auprès de nombreux producteurs, noter les apports et les paiements dans un registre partagé évite les contestations. C'est un chantier de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Gérer les inscriptions et les paiements d'un établissement",
        texte:
          "Pour une école, un centre de formation ou une université privée, regrouper dossiers d'élèves, frais de scolarité et présences dans un même outil allège le secrétariat. C'est le rôle de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Valoriser un hébergement pour voyageurs du train et de la route",
        texte:
          "Pour un hôtel ou une maison d'hôtes qui accueille des voyageurs de passage, tenir un calendrier fiable des réservations et des tarifs limite les doubles réservations. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Audyxa dispose-t-il d'un bureau à Fianarantsoa ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Fianarantsoa : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous intervenons uniquement à distance.",
      },
      {
        question: "Peut-on organiser des ateliers sans déplacement ?",
        answer:
          "Oui, par visioconférence, en petits groupes et avec des supports partagés. Pour les équipes qui n'ont pas de bon accès à Internet, nous prévoyons des séances plus courtes et des documents à consulter hors ligne.",
      },
      {
        question: "Le service ferroviaire ou routier influence-t-il votre intervention ?",
        answer:
          "Pas directement, puisque nous ne nous déplaçons pas. En revanche, si votre activité dépend de ces liaisons, nous pouvons vous aider à suivre les retards et à prévenir vos clients, sans prétendre améliorer les infrastructures.",
      },
    ],
  },
  // --------------------------------------------------------------- MAHAJANGA
  {
    paysSlug: "madagascar",
    villeSlug: "mahajanga",
    villeName: "Mahajanga",
    metaDescription:
      "Audyxa accompagne à distance les armateurs, hôteliers et commerçants de Mahajanga, port de la côte nord-ouest : suivi des flux, réservations et gestion simple.",
    resume:
      "Audyxa accompagne à distance les entreprises de Mahajanga, port de la côte nord-ouest tourné vers le canal du Mozambique. Commerce maritime, tourisme balnéaire et distribution y avancent au rythme des escales, des vols et de la saison, des contextes où un suivi clair des réservations et des marchandises est utile.",
    coupDoeil: [
      "Le port de Mahajanga est un maillon important des échanges avec l'Afrique de l'Est, et son quai fait l'objet de travaux de remise en état depuis 2025.",
      "Les opérateurs touristiques de la région Boeny réclament plus de vols directs depuis l'étranger, car la desserte aérienne actuelle reste limitée.",
    ],
    faits: [
      {
        value: "246 022",
        label: "habitants recensés dans la commune urbaine de Mahajanga I",
        source: "recensement RGPH-3, INSTAT Madagascar, 2018",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les cargaisons d'un opérateur maritime",
        texte:
          "Pour une société qui affrète ou manutentionne des marchandises, un tableau de bord des chargements, des escales et des paiements permet de répondre aux clients sans fouiller dans les messages. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Gérer la saisonnalité d'un hôtel ou d'un restaurant de bord de mer",
        texte:
          "Pour un établissement dont l'affluence varie fortement selon la période, relier réservations, achats et personnel aide à ajuster les stocks et les plannings. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Fiabiliser les ventes d'un commerce de gros",
        texte:
          "Pour un grossiste qui fournit des détaillants de la ville et de l'intérieur, enregistrer ventes, crédits clients et retours dans un outil simple limite les impayés oubliés. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Mahajanga ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Mahajanga : notre fondateur est basé à Abomey-Calavi, au Bénin, et toutes nos missions se déroulent à distance.",
      },
      {
        question: "Pouvez-vous nous aider à gagner en visibilité auprès des voyageurs ?",
        answer:
          "Nous pouvons structurer vos informations, vos tarifs et vos réservations pour répondre vite. Nous ne garantissons en revanche aucune hausse de fréquentation, qui dépend aussi de la desserte aérienne et de la conjoncture touristique.",
      },
      {
        question: "Les coupures de connexion posent-elles un problème ?",
        answer:
          "Elles se préparent. Nous choisissons des outils qui tolèrent les interruptions et conservent les données saisies hors ligne, après avoir testé avec vous la qualité de votre connexion habituelle.",
      },
    ],
  },
  //__SUITE__
];
