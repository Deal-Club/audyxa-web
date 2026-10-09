/**
 * Contenu curaté des 14 pages villes (Phase 4 du plan SEO/GEO/AEO).
 *
 * Périmètre strict : ce fichier ne vit que sous /app/pays/[pays]/[ville]/ et
 * ne doit pas être confondu avec `@/lib/geo-content.ts` (pays parents, hors
 * périmètre de cet agent). Les 8 pays et leurs villes existent déjà dans
 * `geo-content.ts` ; ce fichier ajoute uniquement le contenu riche et sourcé
 * pour les 14 villes listées dans la section 6 du plan.
 *
 * Règle anti-invention : chaque chiffre porte sa source réelle (organisme +
 * date), vérifiée par recherche web au moment de la rédaction (septembre
 * 2026). Quand une donnée fiable et récente n'existe pas (ex. dernier
 * recensement Burkina Faso non consolidé pour Bobo-Dioulasso), le texte reste
 * qualitatif et l'incertitude est assumée dans la formulation plutôt que
 * masquée par un chiffre inventé.
 */

import { VILLES_BENIN } from "./villes-content-benin";
import { VILLES_TOGO } from "./villes-content-togo";
import { VILLES_COTE_DIVOIRE } from "./villes-content-cote-divoire";
import { VILLES_SENEGAL } from "./villes-content-senegal";
import { VILLES_BELGIQUE } from "./villes-content-belgique";

export interface VilleFait {
  /** Chiffre affiché ("679 012", "3 407 327 habitants"...) */
  value: string;
  /** Ce que représente le chiffre, phrase courte */
  label: string;
  /** Organisme + date, tel qu'à citer */
  source: string;
}

export interface VilleUseCase {
  titre: string;
  texte: string;
  serviceSlug: string;
  serviceAnchor: string;
  sectorSlug?: string;
  sectorAnchor?: string;
  methodeSlug?: string;
  methodeAnchor?: string;
}

export interface VilleFaq {
  question: string;
  answer: string;
}

export interface VilleContent {
  paysSlug: string;
  villeSlug: string;
  villeName: string;
  metaDescription: string;
  resume: string;
  coupDoeil: string[];
  faits: VilleFait[];
  casUsage: VilleUseCase[];
  faq: VilleFaq[];
}

export const VILLES_CONTENT: VilleContent[] = [
  // ---------------------------------------------------------------- BÉNIN
  {
    paysSlug: "benin",
    villeSlug: "cotonou",
    villeName: "Cotonou",
    metaDescription:
      "Audyxa accompagne les entreprises de Cotonou (Bénin) : audit digital, automatisation des processus, intégration IA et CRM. Diagnostic sur mesure, à distance.",
    resume:
      "Audyxa accompagne les entreprises de Cotonou dans leur transformation digitale : audit de maturité, automatisation des processus, intégration IA et CRM/ERP. Cotonou concentre l'essentiel de l'activité économique et portuaire du Bénin, ce qui en fait notre principal terrain d'intervention dans le pays.",
    coupDoeil: [
      "Cotonou n'est pas la capitale officielle du Bénin (ce statut revient à Porto-Novo), mais elle en est le centre économique de fait, avec le siège de la présidence et de la plupart des institutions.",
      "La ville doit une large part de son activité à son port autonome, l'un des grands ports en eau profonde de la sous-région, point de transit pour une partie du commerce avec des pays sans accès à la mer comme le Niger ou le Burkina Faso.",
    ],
    faits: [
      {
        value: "679 012",
        label: "habitants recensés à Cotonou",
        source: "recensement RGPH4, Institut National de la Statistique et de l'Analyse Économique (INSAE), 2013",
      },
    ],
    casUsage: [
      {
        titre: "Fluidifier les flux d'une activité d'import-export",
        texte:
          "Pour une entreprise de négoce ou de transit portuaire, nous cartographions les flux documentaires et automatisons les tâches répétitives (suivi de conteneurs, relances, facturation) via notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer un réseau de distribution",
        texte:
          "Pour un réseau de points de vente ou un grossiste, un CRM correctement configuré évite les pertes de commandes et les doublons de stock. C'est le cœur de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Automatiser une partie du service client",
        texte:
          "Pour une banque, une assurance ou un service client à fort volume, un premier cas d'usage IA cadré (réponse aux questions fréquentes, tri des demandes) passe par notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Cotonou ?",
        answer:
          "Notre fondateur est basé à Abomey-Calavi, dans l'agglomération de Cotonou, ce qui nous permet un point de contact local. Le travail de mission (audit, développement, automatisation) reste organisé à distance, avec la même méthode que sur nos autres marchés.",
      },
      {
        question: "Travaillez-vous avec des petites structures, pas seulement de grands groupes ?",
        answer:
          "Oui : notre positionnement cible en priorité les PME et les structures en croissance, à Cotonou comme ailleurs, pas uniquement les grands groupes qui ont déjà leurs propres équipes IT.",
      },
      {
        question: "Faut-il signer un contrat long pour démarrer ?",
        answer:
          "Non. Chaque mission commence par un diagnostic cadré dans le temps, pas par un engagement pluriannuel. La suite de la collaboration dépend des résultats de ce premier audit.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "porto-novo",
    villeName: "Porto-Novo",
    metaDescription:
      "Audyxa accompagne les entreprises et institutions de Porto-Novo, capitale du Bénin : audit digital, automatisation, IA et outils métier. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises et structures publiques de Porto-Novo dans leur transformation digitale : audit de maturité, automatisation des processus, intégration IA et outils métier. Porto-Novo est la capitale officielle du Bénin et le siège du Parlement, avec un tissu économique plus administratif que celui de Cotonou.",
    coupDoeil: [
      "Porto-Novo est la capitale constitutionnelle du Bénin, où siège l'Assemblée nationale, tandis que la présidence et la majorité des institutions opèrent depuis Cotonou.",
      "Cette spécificité donne à la ville un tissu économique marqué par l'administration publique et les services, aux côtés d'un commerce de proximité actif.",
    ],
    faits: [
      {
        value: "264 320",
        label: "habitants recensés à Porto-Novo",
        source: "recensement RGPH4, INSAE, 2013",
      },
    ],
    casUsage: [
      {
        titre: "Digitaliser un processus administratif",
        texte:
          "Pour une structure publique ou parapublique, la dématérialisation d'un circuit de validation (courrier, dossiers, demandes) réduit les délais sans changer l'organisation en profondeur. C'est un objet typique de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Outiller une PME de services",
        texte:
          "Pour un cabinet ou une PME de services installée à Porto-Novo, un outil métier sur mesure remplace souvent des fichiers Excel dispersés entre plusieurs personnes. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
      },
      {
        titre: "Sécuriser des données sensibles",
        texte:
          "Pour une administration ou une structure manipulant des données sensibles (état civil, dossiers administratifs), un premier niveau de sécurisation s'appuie sur les principes détaillés dans notre chapitre méthode",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "cybersécurité, confidentialité et résilience",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous auprès d'institutions publiques à Porto-Novo ?",
        answer:
          "Oui, dans la mesure où la mission reste cadrée comme un mandat de conseil et d'exécution classique (audit, automatisation, outil métier), sans dimension de marché public complexe à gérer en amont.",
      },
      {
        question: "Pourquoi consulter la page Bénin en plus de celle-ci ?",
        answer:
          "La page Bénin détaille chaque service individuellement et couvre l'ensemble du pays ; cette page-ci se concentre sur le contexte propre à Porto-Novo, capitale administrative du pays.",
      },
      {
        question: "Peut-on démarrer par un périmètre restreint, un seul processus par exemple ?",
        answer:
          "Oui, c'est même l'approche que nous recommandons : traiter un processus précis avant d'élargir, plutôt que de lancer un projet global difficile à cadrer et à piloter dès le départ.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "abomey-calavi",
    villeName: "Abomey-Calavi",
    metaDescription:
      "Audyxa, basé à Abomey-Calavi, accompagne les entreprises et établissements de la ville : audit digital, automatisation, IA et CRM. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises et établissements d'Abomey-Calavi dans leur transformation digitale : audit de maturité, automatisation des processus, intégration IA et CRM. C'est la ville où est basé notre fondateur, ce qui en fait un point d'ancrage naturel pour nos missions au Bénin.",
    coupDoeil: [
      "Abomey-Calavi est un prolongement urbain de Cotonou, à une quinzaine de kilomètres du centre-ville, et compte parmi les communes dont la population a le plus progressé au Bénin ces dernières années.",
      "Elle abrite l'Université d'Abomey-Calavi (UAC), fondée en 1970 et la plus importante université publique du pays, ce qui structure une bonne partie de son économie locale autour de la formation et des services associés.",
    ],
    faits: [
      {
        value: "655 965",
        label: "habitants recensés à Abomey-Calavi",
        source: "recensement RGPH4, INSAE, 2013",
      },
    ],
    casUsage: [
      {
        titre: "Outiller un établissement de formation privé",
        texte:
          "Pour une école ou un centre de formation, un outil de gestion des inscriptions et du suivi pédagogique évite la double saisie entre plusieurs registres. C'est un cas d'usage courant de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Automatiser le suivi client d'une agence immobilière",
        texte:
          "Dans une commune en forte expansion résidentielle, une agence immobilière ou un promoteur gagne à automatiser le suivi des dossiers clients et des relances. C'est l'objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
      {
        titre: "Diagnostiquer une PME de services avant d'investir",
        texte:
          "Avant tout achat de logiciel, un audit court permet à une PME locale de savoir si le vrai problème est l'outil ou le processus. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il physiquement présent à Abomey-Calavi ?",
        answer:
          "Oui, c'est la ville où est basé notre fondateur, Paul Maxime Dossou. Cela ne change pas la méthode de mission (diagnostic, cadrage, déploiement), mais facilite les échanges en présentiel ponctuels pour les entreprises de la zone.",
      },
      {
        question: "Travaillez-vous avec l'université ou uniquement des entreprises ?",
        answer:
          "Nos missions concernent principalement des entreprises et des structures de services. Un établissement de formation reste un client possible dès lors que le besoin relève de nos services (outil métier, automatisation, audit).",
      },
      {
        question: "Accompagnez-vous des porteurs de projet ou seulement des structures déjà actives ?",
        answer:
          "Nos missions ciblent en priorité des structures déjà en activité, avec des processus réels à diagnostiquer. Un projet sans activité existante n'entre pas dans notre périmètre habituel d'intervention.",
      },
    ],
  },
  {
    paysSlug: "benin",
    villeSlug: "parakou",
    villeName: "Parakou",
    metaDescription:
      "Audyxa accompagne les entreprises de Parakou, carrefour commercial du nord Bénin : audit digital, automatisation, IA et outils métier. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises de Parakou dans leur transformation digitale : audit de maturité, automatisation des processus et outils métier adaptés au commerce et au transit régional. Parakou est le principal carrefour commercial du nord du Bénin, au contact du Niger, du Burkina Faso et du Nigeria.",
    coupDoeil: [
      "Parakou est la troisième ville du Bénin et la plus grande du nord du pays, terminus de la voie ferrée venant de Cotonou et point de passage de la route nationale reliant le sud au Niger.",
      "La ville est historiquement au cœur du commerce du coton et du textile béninois, aux côtés d'un rôle de porte d'entrée pour les échanges avec les pays sahéliens voisins.",
    ],
    faits: [
      {
        value: "255 478",
        label: "habitants recensés à Parakou, en hausse depuis les 149 819 habitants de 2002",
        source: "recensement RGPH4, INSAE, 2013",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser la gestion des stocks d'une activité cotonnière ou textile",
        texte:
          "Pour un négociant ou un transformateur de coton, un meilleur suivi des stocks et des flux entre sites limite les écarts d'inventaire. Ce travail s'appuie sur notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Piloter une activité de transport et de transit régional",
        texte:
          "Pour une entreprise de transport ou de transit vers le Niger, le Burkina Faso ou le Nigeria, un meilleur pilotage des tournées et des délais réduit les litiges avec les clients. C'est l'objet de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Diagnostiquer un commerce de gros avant de digitaliser",
        texte:
          "Pour un commerce de gros ou semi-gros, un audit court identifie si la priorité est la facturation, le suivi client ou la gestion des stocks. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
      },
    ],
    faq: [
      {
        question: "Comment se déroule une mission à Parakou ?",
        answer:
          "Comme sur nos autres marchés : un diagnostic à distance, une note de cadrage, puis un déploiement suivi de points réguliers, sans nécessiter de présence physique continue à Parakou.",
      },
      {
        question: "Travaillez-vous avec des entreprises tournées vers le commerce transfrontalier ?",
        answer:
          "Oui, c'est un profil fréquent à Parakou : nos missions d'automatisation et de pilotage s'adaptent aux contraintes propres au commerce avec les pays voisins (délais, documents, multiplicité des interlocuteurs).",
      },
      {
        question: "Le contexte fiscal béninois est-il pris en compte dans vos recommandations ?",
        answer:
          "Oui, chaque diagnostic tient compte du contexte réglementaire et fiscal réel de l'entreprise, plutôt que de recommandations génériques importées d'un autre marché.",
      },
    ],
  },
  // ------------------------------------------------------------------ TOGO
  {
    paysSlug: "togo",
    villeSlug: "lome",
    villeName: "Lomé",
    metaDescription:
      "Audyxa accompagne les entreprises de Lomé (Togo) : audit digital, automatisation logistique, intégration IA et CRM. Diagnostic sur mesure, à distance.",
    resume:
      "Audyxa accompagne les entreprises de Lomé dans leur transformation digitale : audit de maturité, automatisation des processus logistiques et commerciaux, intégration IA et CRM. Lomé est la capitale du Togo et son principal centre économique et portuaire.",
    coupDoeil: [
      "Lomé concentre l'essentiel de l'activité économique togolaise, portée notamment par son port autonome, l'un des rares ports en eau profonde directement accessibles depuis la mer sur cette portion du littoral ouest-africain.",
      "L'agglomération du Grand Lomé regroupe une part importante de la population du pays, avec un tissu d'entreprises allant du commerce international à la distribution locale.",
    ],
    faits: [
      {
        value: "2 188 376",
        label: "habitants dans l'agglomération du Grand Lomé",
        source:
          "recensement RGPH-5, Institut National de la Statistique et des Études Économiques et Démographiques (INSEED), novembre 2022",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser des flux logistiques portuaires",
        texte:
          "Pour une entreprise de transit ou de négoce international, automatiser le suivi documentaire et les relances réduit les délais de traitement. C'est le cœur de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer un réseau de distribution",
        texte:
          "Pour un distributeur ou un grossiste, un CRM bien configuré évite les commandes perdues entre plusieurs points de vente. C'est un objet fréquent de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Automatiser une partie du service client",
        texte:
          "Pour une entreprise à fort volume de demandes clients, un premier cas d'usage IA cadré (tri des demandes, réponses aux questions fréquentes) relève de notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Lomé ?",
        answer:
          "Non, nous intervenons à distance depuis notre équipe centrale au Bénin, avec la même méthode que sur nos autres marchés. Cela permet de garantir une qualité constante sans dépendre d'un partenaire local différent.",
      },
      {
        question: "Pourquoi consulter la page Togo en plus de celle-ci ?",
        answer:
          "La page Togo détaille chaque service individuellement à l'échelle du pays ; cette page-ci sert de point d'entrée pour Lomé, où se concentre l'essentiel de nos demandes togolaises.",
      },
      {
        question: "Travaillez-vous avec des entreprises tournées vers le commerce régional ?",
        answer:
          "Oui, c'est un profil fréquent à Lomé compte tenu du rôle portuaire de la ville : nos missions d'automatisation s'adaptent aux contraintes propres au commerce transfrontalier avec les pays voisins.",
      },
    ],
  },
  // ------------------------------------------------------------- CÔTE D'IVOIRE
  {
    paysSlug: "cote-divoire",
    villeSlug: "abidjan",
    villeName: "Abidjan",
    metaDescription:
      "Audyxa accompagne les entreprises d'Abidjan, capitale économique ivoirienne : audit digital, automatisation, IA et CRM/ERP. Diagnostic sur mesure, à distance.",
    resume:
      "Audyxa accompagne les entreprises d'Abidjan dans leur transformation digitale : audit de maturité, automatisation des processus, intégration IA et CRM/ERP. Abidjan est la capitale économique de la Côte d'Ivoire et le principal pôle d'affaires d'Afrique de l'Ouest francophone.",
    coupDoeil: [
      "Abidjan concentre la majorité de l'activité économique ivoirienne : sièges bancaires, industries, télécoms, et un port qui dessert une partie du commerce régional, y compris vers des pays sans accès à la mer.",
      "La ville a connu une croissance démographique très rapide depuis les années 1970, ce qui accentue l'écart avec les autres villes du pays et concentre encore davantage la demande en conseil digital.",
    ],
    faits: [
      {
        value: "5 616 633",
        label: "habitants recensés dans la ville d'Abidjan",
        source: "recensement RGPH 2021, Institut National de la Statistique (INS), Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Fiabiliser les processus d'un acteur bancaire ou d'assurance",
        texte:
          "Pour une banque ou une compagnie d'assurance, un audit ciblé identifie les tâches manuelles à risque d'erreur avant toute automatisation. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
      {
        titre: "Automatiser une ligne de production ou un atelier",
        texte:
          "Pour une entreprise industrielle, connecter les outils de suivi de production aux systèmes de gestion réduit les ressaisies manuelles. C'est un chantier typique de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Déployer un premier cas d'usage IA côté service client",
        texte:
          "Pour un distributeur ou une enseigne à fort trafic client, un assistant IA cadré sur un périmètre précis (suivi de commande, questions fréquentes) relève de notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Abidjan ?",
        answer:
          "Non, notre intervention se fait à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés, y compris pour des missions avec des groupes basés à Abidjan.",
      },
      {
        question: "Pourquoi consulter la page Côte d'Ivoire en plus de celle-ci ?",
        answer:
          "La page Côte d'Ivoire détaille chaque service à l'échelle du pays ; cette page-ci sert de point d'entrée pour Abidjan, où se concentre l'essentiel de la demande ivoirienne.",
      },
      {
        question: "Accompagnez-vous des filiales de groupes internationaux basées à Abidjan ?",
        answer:
          "Oui, à condition que le mandat reste un périmètre de conseil et d'exécution classique (audit, automatisation, IA), pas un rôle d'intégrateur pour un système déjà imposé par un siège social étranger.",
      },
    ],
  },
  {
    paysSlug: "cote-divoire",
    villeSlug: "yamoussoukro",
    villeName: "Yamoussoukro",
    metaDescription:
      "Audyxa accompagne les entreprises et institutions de Yamoussoukro, capitale politique ivoirienne : audit digital, automatisation et outils métier.",
    resume:
      "Audyxa accompagne les entreprises et institutions de Yamoussoukro dans leur transformation digitale : audit de maturité, automatisation des processus et outils métier. Yamoussoukro est la capitale politique et administrative de la Côte d'Ivoire, avec un tissu économique différent de celui d'Abidjan.",
    coupDoeil: [
      "Yamoussoukro est la capitale politique et administrative du pays, où siègent la présidence et le parlement, même si la majorité des institutions économiques restent installées à Abidjan.",
      "La ville est aussi un pôle d'enseignement supérieur reconnu, notamment pour les formations d'ingénieurs, ce qui structure une partie de son économie locale autour de la formation et des services publics.",
    ],
    faits: [
      {
        value: "422 072",
        label: "habitants dans le district autonome de Yamoussoukro",
        source: "recensement RGPH 2021, INS, Côte d'Ivoire",
      },
    ],
    casUsage: [
      {
        titre: "Digitaliser un service administratif",
        texte:
          "Pour une institution publique installée à Yamoussoukro, dématérialiser un circuit de validation ou de courrier réduit les délais de traitement. C'est un objet courant de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Outiller un établissement d'enseignement supérieur",
        texte:
          "Pour une grande école ou un centre de formation, un outil de suivi des étudiants et des dossiers administratifs limite les doubles saisies. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
      {
        titre: "Automatiser une PME agricole régionale",
        texte:
          "Pour une entreprise agricole ou agroalimentaire de la région, automatiser le suivi des livraisons et des stocks limite les pertes. C'est un cas d'usage typique de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous auprès d'institutions publiques à Yamoussoukro ?",
        answer:
          "Oui, dans la mesure où la mission reste un mandat de conseil et d'exécution classique (audit, automatisation, outil métier), sans dimension de marché public complexe à gérer en amont.",
      },
      {
        question: "Pourquoi consulter la page Côte d'Ivoire en plus de celle-ci ?",
        answer:
          "La page Côte d'Ivoire détaille chaque service à l'échelle du pays, avec un focus service par service sur Abidjan ; cette page-ci couvre le contexte propre à Yamoussoukro.",
      },
      {
        question: "La distance avec Abidjan complique-t-elle une mission à Yamoussoukro ?",
        answer:
          "Non. Notre intervention étant déjà organisée à distance pour l'ensemble de nos marchés, la distance entre les deux villes n'a pas d'impact particulier sur le déroulement d'une mission.",
      },
    ],
  },
  // ---------------------------------------------------------------- SÉNÉGAL
  {
    paysSlug: "senegal",
    villeSlug: "dakar",
    villeName: "Dakar",
    metaDescription:
      "Audyxa accompagne les entreprises de Dakar, capitale du Sénégal : audit digital, automatisation, intégration IA et CRM/ERP. Diagnostic sur mesure, à distance.",
    resume:
      "Audyxa accompagne les entreprises de Dakar dans leur transformation digitale : audit de maturité, automatisation des processus, intégration IA et CRM/ERP. Dakar concentre l'essentiel de la population et de l'activité économique du Sénégal, avec un secteur bancaire, télécoms et tertiaire particulièrement développé.",
    coupDoeil: [
      "La région de Dakar réunit à elle seule environ un cinquième de la population sénégalaise sur une part infime du territoire national, avec une densité parmi les plus fortes d'Afrique de l'Ouest.",
      "Cette concentration s'accompagne d'un tissu économique diversifié : services financiers, télécoms, tourisme et un écosystème d'entreprises technologiques en développement.",
    ],
    faits: [
      {
        value: "3 896 564",
        label: "habitants dans la région de Dakar, soit 22 % de la population du Sénégal sur 0,28 % du territoire",
        source: "recensement RGPH-5, Agence Nationale de la Statistique et de la Démographie (ANSD), 2023",
      },
    ],
    casUsage: [
      {
        titre: "Fiabiliser les processus d'une banque ou d'un assureur",
        texte:
          "Pour un établissement financier, un audit ciblé identifie les tâches manuelles à automatiser en priorité avant tout investissement logiciel. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
      {
        titre: "Automatiser un service client télécoms",
        texte:
          "Pour un opérateur ou un revendeur télécoms, un premier cas d'usage IA cadré sur les demandes fréquentes réduit la charge du service client. C'est un chantier de notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        sectorSlug: "telecoms",
        sectorAnchor: "télécoms",
      },
      {
        titre: "Outiller un acteur du tourisme ou de l'hôtellerie",
        texte:
          "Pour un hôtel ou une agence de voyage, un outil de gestion des réservations et de la relation client limite les erreurs de suivi. C'est un objet fréquent de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Dakar ?",
        answer:
          "Non, nous intervenons à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés, y compris pour des missions avec des groupes basés à Dakar.",
      },
      {
        question: "Pourquoi consulter la page Sénégal en plus de celle-ci ?",
        answer:
          "La page Sénégal détaille chaque service à l'échelle du pays ; cette page-ci sert de point d'entrée pour Dakar, où se concentre l'essentiel de la demande sénégalaise.",
      },
      {
        question: "Accompagnez-vous des start-up en plus des PME plus établies ?",
        answer:
          "Oui, du moment que la structure a des processus réels à diagnostiquer. Une mission suppose une activité déjà en cours, pas seulement une idée de produit à valider.",
      },
    ],
  },
  {
    paysSlug: "senegal",
    villeSlug: "thies",
    villeName: "Thiès",
    metaDescription:
      "Audyxa accompagne les entreprises de Thiès, carrefour ferroviaire et industriel du Sénégal : audit digital, automatisation et outils métier sur mesure.",
    resume:
      "Audyxa accompagne les entreprises de Thiès dans leur transformation digitale : audit de maturité, automatisation des processus et outils métier adaptés au tissu industriel local. Thiès est la troisième ville du Sénégal, historiquement bâtie autour du chemin de fer et de l'industrie.",
    coupDoeil: [
      "Surnommée la capitale du rail, Thiès s'est développée autour des ateliers de réparation ferroviaire de la ligne Dakar-Niger, avant de devenir un centre industriel avec l'exploitation voisine des mines de phosphate de Taïba et Pallo.",
      "La ville reste aujourd'hui un carrefour routier et ferroviaire important, avec un tissu d'entreprises industrielles et commerciales en développement.",
    ],
    faits: [
      {
        value: "391 253",
        label: "habitants recensés dans la commune de Thiès",
        source: "recensement RGPH-5, ANSD, 2023",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser le suivi d'une activité industrielle",
        texte:
          "Pour une entreprise industrielle ou liée à l'exploitation minière locale, automatiser le suivi de production et de maintenance réduit les arrêts non planifiés. C'est le rôle de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Outiller une activité de transport ferroviaire ou routier",
        texte:
          "Pour une entreprise de transport de marchandises, un meilleur suivi des tournées et des délais limite les litiges avec les clients. C'est un chantier typique de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Diagnostiquer un commerce en expansion",
        texte:
          "Avec la modernisation des espaces commerciaux de la ville, un audit court aide un commerçant à savoir s'il doit investir en priorité dans un CRM ou dans la gestion de stock. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Comment se déroule une mission à Thiès ?",
        answer:
          "Comme sur nos autres marchés : un diagnostic à distance, une note de cadrage, puis un déploiement suivi de points réguliers, sans nécessiter de présence physique continue à Thiès.",
      },
      {
        question: "Pourquoi consulter la page Sénégal en plus de celle-ci ?",
        answer:
          "La page Sénégal détaille chaque service à l'échelle du pays, avec un focus service par service sur Dakar ; cette page-ci couvre le contexte industriel propre à Thiès.",
      },
      {
        question: "Travaillez-vous avec des entreprises au-delà du secteur minier ou ferroviaire ?",
        answer:
          "Oui, notre accompagnement ne se limite pas à un secteur : il s'adapte à toute PME industrielle ou commerciale de Thiès avec des processus concrets à structurer.",
      },
    ],
  },
  // ------------------------------------------------------------ BURKINA FASO
  {
    paysSlug: "burkina-faso",
    villeSlug: "ouagadougou",
    villeName: "Ouagadougou",
    metaDescription:
      "Audyxa accompagne les entreprises et ONG de Ouagadougou, capitale du Burkina Faso : audit digital, automatisation et outils métier. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises, ONG et structures publiques de Ouagadougou dans leur transformation digitale : audit de maturité, automatisation des processus et outils métier. Ouagadougou est la capitale du Burkina Faso et son principal centre administratif et commercial.",
    coupDoeil: [
      "Ouagadougou concentre à elle seule près de la moitié de la population urbaine du Burkina Faso, avec un tissu d'administrations publiques, d'entreprises de services et d'organisations non gouvernementales particulièrement dense.",
      "La ville accueille aussi de nombreuses structures liées à la coopération internationale et à l'aide humanitaire, aux côtés d'un commerce local actif autour des produits agricoles et vivriers.",
    ],
    faits: [
      {
        value: "2 415 266",
        label: "habitants recensés à Ouagadougou, soit 45,1 % de la population urbaine du pays",
        source:
          "Institut National de la Statistique et de la Démographie (INSD), Monographie de Ouagadougou, RGPH 2019, publiée en décembre 2022",
      },
    ],
    casUsage: [
      {
        titre: "Digitaliser le suivi d'une ONG ou d'un projet de développement",
        texte:
          "Pour une ONG ou une structure de coopération, un outil de suivi des bénéficiaires et des rapports de projet simplifie le reporting auprès des bailleurs. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Automatiser une entreprise agroalimentaire",
        texte:
          "Pour une entreprise de transformation ou de négoce de produits agricoles, automatiser le suivi des stocks et des commandes limite les pertes. C'est l'objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Diagnostiquer une PME de services avant d'investir",
        texte:
          "Avant tout achat de logiciel, un audit court permet à une PME locale de savoir où investir en priorité. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Ouagadougou ?",
        answer:
          "Non, nous intervenons à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés, y compris pour des missions avec des ONG ou entreprises basées à Ouagadougou.",
      },
      {
        question: "Travaillez-vous avec des ONG en plus des entreprises ?",
        answer:
          "Oui, à condition que le besoin relève de nos services habituels (audit, automatisation, outil métier, IA) : nous restons un cabinet de conseil et d'exécution digitale, pas un opérateur de projets humanitaires.",
      },
      {
        question: "Le contexte sécuritaire régional complique-t-il une mission à Ouagadougou ?",
        answer:
          "Notre intervention étant organisée à distance, une mission reste possible. Le cadrage initial tient compte des contraintes propres à chaque structure, notamment sur la disponibilité réelle des équipes.",
      },
    ],
  },
  {
    paysSlug: "burkina-faso",
    villeSlug: "bobo-dioulasso",
    villeName: "Bobo-Dioulasso",
    metaDescription:
      "Audyxa accompagne les entreprises de Bobo-Dioulasso, capitale économique du Burkina Faso : audit digital, automatisation et outils métier sur mesure.",
    resume:
      "Audyxa accompagne les entreprises de Bobo-Dioulasso dans leur transformation digitale : audit de maturité, automatisation des processus et outils métier adaptés au tissu agricole et industriel local. Bobo-Dioulasso est la deuxième ville du Burkina Faso, longtemps considérée comme sa capitale économique.",
    coupDoeil: [
      "Bobo-Dioulasso est la deuxième ville du pays par la population, selon les monographies de l'Institut National de la Statistique et de la Démographie (INSD), avec un poids démographique proche du million d'habitants selon les estimations disponibles.",
      "Son économie reste marquée par le commerce agricole (coton, céréales, fruits) et l'industrie textile, héritée notamment de l'arrivée du chemin de fer venant d'Abidjan au début du vingtième siècle.",
    ],
    faits: [],
    casUsage: [
      {
        titre: "Automatiser la gestion des stocks d'une activité cotonnière",
        texte:
          "Pour un négociant ou un transformateur de coton, un meilleur suivi des stocks entre les sites de collecte et de transformation limite les écarts d'inventaire. Ce travail s'appuie sur notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Outiller une coopérative ou un négociant agricole",
        texte:
          "Pour une coopérative de la filière coton, céréales ou fruits, un outil de suivi des livraisons et des paiements aux producteurs réduit les erreurs de saisie. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Diagnostiquer un commerce local avant de digitaliser",
        texte:
          "Pour un commerce local, un audit court identifie si la priorité est la facturation, le suivi client ou la gestion des stocks. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
      },
    ],
    faq: [
      {
        question: "Comment se déroule une mission à Bobo-Dioulasso ?",
        answer:
          "Comme sur nos autres marchés : un diagnostic à distance, une note de cadrage, puis un déploiement suivi de points réguliers, sans nécessiter de présence physique continue à Bobo-Dioulasso.",
      },
      {
        question: "Pourquoi consulter la page Burkina Faso en plus de celle-ci ?",
        answer:
          "La page Burkina Faso détaille chaque service à l'échelle du pays, avec un focus service par service sur Ouagadougou ; cette page-ci couvre le contexte agricole et industriel propre à Bobo-Dioulasso.",
      },
      {
        question: "Une entreprise doit-elle être exportatrice pour vous solliciter ?",
        answer:
          "Non, nous accompagnons aussi bien des entreprises tournées vers le marché local que celles engagées dans le commerce régional ou l'export agricole.",
      },
    ],
  },
  // -------------------------------------------------------------------- MALI
  {
    paysSlug: "mali",
    villeSlug: "bamako",
    villeName: "Bamako",
    metaDescription:
      "Audyxa accompagne les entreprises de Bamako, capitale du Mali : audit digital, automatisation, intégration du mobile money et CRM. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises de Bamako dans leur transformation digitale : audit de maturité, automatisation des processus, intégration du mobile money et CRM. Bamako est la capitale du Mali et son principal centre bancaire et commercial, en bordure du fleuve Niger.",
    coupDoeil: [
      "Bamako est de loin la plus grande ville du Mali, avec un poids démographique et économique sans équivalent dans le reste du pays.",
      "L'usage des paiements mobiles y est particulièrement développé : les transactions mobiles représentaient 65 % du PIB malien en 2021, contre 21 % en 2015, un contexte qui rend les cas d'usage d'automatisation liés au mobile money particulièrement pertinents pour les commerces de la ville.",
    ],
    faits: [
      {
        value: "4 227 569",
        label: "habitants recensés au district de Bamako",
        source: "recensement RGPH5, Institut National de la Statistique du Mali (INSTAT), 2022",
      },
      {
        value: "65 %",
        label: "du PIB malien transitait par des transactions mobiles en 2021, contre 21 % en 2015",
        source: "Banque mondiale, Global Findex",
      },
    ],
    casUsage: [
      {
        titre: "Intégrer le mobile money à un parcours de vente",
        texte:
          "Pour un commerce ou un service à Bamako, connecter les paiements mobiles au système de facturation évite la réconciliation manuelle des transactions. C'est un chantier typique de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "telecoms",
        sectorAnchor: "télécoms",
      },
      {
        titre: "Fiabiliser les processus d'une banque ou d'une institution de microfinance",
        texte:
          "Pour un établissement financier, un audit ciblé identifie les tâches manuelles à automatiser en priorité avant tout investissement logiciel. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
      {
        titre: "Outiller une PME de négoce",
        texte:
          "Pour une PME de négoce installée à Bamako, un outil métier sur mesure remplace souvent des fichiers dispersés entre plusieurs personnes. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Bamako ?",
        answer:
          "Non, nous intervenons à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés, y compris pour des missions avec des entreprises basées à Bamako.",
      },
      {
        question: "Pourquoi consulter la page Mali en plus de celle-ci ?",
        answer:
          "La page Mali détaille chaque service à l'échelle du pays ; cette page-ci sert de point d'entrée pour Bamako, où se concentre l'essentiel de la demande malienne.",
      },
      {
        question: "Accompagnez-vous des institutions de microfinance en plus des banques ?",
        answer:
          "Oui, les institutions de microfinance font partie de nos interlocuteurs courants à Bamako, avec des besoins souvent proches de ceux des banques sur l'automatisation et le suivi des dossiers.",
      },
    ],
  },
  // ------------------------------------------------------------------ NIGER
  {
    paysSlug: "niger",
    villeSlug: "niamey",
    villeName: "Niamey",
    metaDescription:
      "Audyxa accompagne les entreprises et ONG de Niamey, capitale du Niger : audit digital, automatisation, continuité d'activité. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises et organisations de Niamey dans leur transformation digitale : audit de maturité, automatisation des processus et outils adaptés aux contraintes locales de connexion. Niamey est la capitale du Niger et son principal centre économique.",
    coupDoeil: [
      "Niamey concentre l'essentiel de l'activité économique du Niger, avec un secteur informel très présent et une agriculture urbaine développée aux abords du fleuve Niger.",
      "La fiabilité de la connexion internet reste un irritant concret pour les acteurs économiques locaux, un point relevé publiquement par des représentants patronaux nigériens à propos des interruptions de service qui affectent paiements et transferts.",
    ],
    faits: [
      {
        value: "1 407 635",
        label: "habitants estimés à Niamey (projection actualisée depuis le recensement de 2012)",
        source: "Institut National de la Statistique (INS) du Niger, 2022",
      },
    ],
    casUsage: [
      {
        titre: "Digitaliser le suivi d'une ONG ou d'un projet de développement",
        texte:
          "Pour une ONG ou une structure de coopération, un outil de suivi des bénéficiaires et des rapports de projet simplifie le reporting auprès des bailleurs. C'est un cas d'usage de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Automatiser une entreprise agroalimentaire ou de commerce",
        texte:
          "Pour une entreprise de négoce ou de transformation agroalimentaire, automatiser le suivi des stocks et des commandes limite les pertes liées aux ruptures de connexion. C'est l'objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Sécuriser la continuité d'activité face aux coupures réseau",
        texte:
          "Pour une entreprise dépendante de sa connexion pour les paiements ou les transferts, un plan de continuité limite l'impact des interruptions de service. Les principes de sauvegarde et de continuité sont détaillés dans notre chapitre méthode",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "cybersécurité, confidentialité et résilience",
      },
    ],
    faq: [
      {
        question: "Comment gérez-vous les problèmes de connexion propres à Niamey ?",
        answer:
          "Nous cadrons les projets pour qu'ils restent fonctionnels malgré des connexions instables : priorité aux outils qui tolèrent la synchronisation différée plutôt qu'aux solutions qui exigent une connexion permanente.",
      },
      {
        question: "Pourquoi consulter la page Niger en plus de celle-ci ?",
        answer:
          "La page Niger détaille chaque service à l'échelle du pays ; cette page-ci sert de point d'entrée pour Niamey, où se concentre l'essentiel de la demande nigérienne.",
      },
      {
        question: "Proposez-vous un accompagnement adapté aux structures humanitaires internationales ?",
        answer:
          "Oui, dans la mesure où le besoin reste un mandat de conseil digital classique (audit, outil métier, automatisation), pas la gestion opérationnelle d'un programme humanitaire.",
      },
    ],
  },
  // ---------------------------------------------------------------- GUINÉE
  {
    paysSlug: "guinee",
    villeSlug: "conakry",
    villeName: "Conakry",
    metaDescription:
      "Audyxa accompagne les entreprises de Conakry, capitale de la Guinée : audit digital, automatisation logistique et portuaire, IA. Diagnostic sur mesure.",
    resume:
      "Audyxa accompagne les entreprises de Conakry dans leur transformation digitale : audit de maturité, automatisation des processus logistiques et industriels, intégration IA. Conakry est la capitale de la Guinée et son principal centre économique, financier et portuaire.",
    coupDoeil: [
      "Conakry concentre une part importante de la population guinéenne et l'essentiel des institutions économiques et financières du pays, autour de son port et de son port de pêche, situés dans la presqu'île de Kaloum.",
      "La ville est aussi reliée par voie ferrée aux zones d'exploitation de bauxite de l'intérieur du pays, la Guinée étant l'un des principaux producteurs mondiaux de ce minerai.",
    ],
    faits: [
      {
        value: "3 407 327",
        label: "habitants recensés dans la région de Conakry",
        source:
          "recensement RGPH-4 (résultats préliminaires), Institut National de la Statistique (INS), Guinée, publiés le 25 février 2026",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser des flux logistiques portuaires",
        texte:
          "Pour une entreprise de transit ou de négoce international, automatiser le suivi documentaire et les relances réduit les délais de traitement. C'est le cœur de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Outiller une entreprise industrielle ou minière",
        texte:
          "Pour une entreprise liée à l'exploitation minière ou à l'industrie, un outil de suivi de production et de maintenance réduit les arrêts non planifiés. C'est un chantier de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Diagnostiquer un réseau de distribution",
        texte:
          "Pour un distributeur ou un grossiste, un audit court identifie si la priorité est le CRM, la facturation ou la gestion des stocks. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe basée à Conakry ?",
        answer:
          "Non, nous intervenons à distance depuis notre équipe centrale, avec la même méthode que sur nos autres marchés, y compris pour des missions avec des entreprises basées à Conakry.",
      },
      {
        question: "Pourquoi consulter la page Guinée en plus de celle-ci ?",
        answer:
          "La page Guinée détaille chaque service à l'échelle du pays ; cette page-ci sert de point d'entrée pour Conakry, où se concentre l'essentiel de la demande guinéenne.",
      },
      {
        question: "Travaillez-vous avec des entreprises du secteur minier au-delà de la bauxite ?",
        answer:
          "Oui, notre accompagnement s'adapte à toute entreprise industrielle ou logistique de Conakry, quel que soit le minerai ou le produit concerné par son activité.",
      },
    ],
  },
];

/** Contenu enrichi des villes des pays conservés (une entrée par ville). */
const VILLES_CONTENT_ALL: VilleContent[] = [
  ...VILLES_CONTENT,
  ...VILLES_BENIN,
  ...VILLES_TOGO,
  ...VILLES_COTE_DIVOIRE,
  ...VILLES_SENEGAL,
  ...VILLES_BELGIQUE,
];

export function getVilleContent(paysSlug: string, villeSlug: string): VilleContent | undefined {
  return VILLES_CONTENT_ALL.find((v) => v.paysSlug === paysSlug && v.villeSlug === villeSlug);
}

export { VILLES_CONTENT_ALL };
