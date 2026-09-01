export interface SectorFaqItem {
  question: string;
  answer: string;
}

export interface SectorPage {
  slug: string;
  name: string;
  tagline: string;
  directAnswer: string;
  challenges: string[];
  relevantServiceSlugs: string[];
  approach: string;
  faq: SectorFaqItem[];
}

export const SECTOR_PAGES: SectorPage[] = [
  {
    slug: "banque-et-finance",
    name: "Banque et finance",
    tagline: "Conformité, données sensibles et exigence de traçabilité",
    directAnswer:
      "Dans la banque et la finance, la transformation digitale doit composer avec des contraintes réglementaires fortes (KYC, lutte anti-blanchiment, traçabilité des décisions) et des données particulièrement sensibles. Le diagnostic doit distinguer ce qui peut être automatisé sans risque de ce qui exige une validation humaine systématique.",
    challenges: [
      "Des contrôles réglementaires (KYC, conformité) qui ralentissent les processus s'ils restent manuels.",
      "Des données sensibles nécessitant un niveau de sécurité et de traçabilité élevé.",
      "Des systèmes hérités (core banking) difficiles à faire communiquer avec des outils plus récents.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "automatisation-integrations", "ia-entreprise"],
    approach:
      "Nous cartographions d'abord les processus soumis à obligation réglementaire pour distinguer les étapes automatisables (vérifications déterministes) des décisions qui doivent rester sous contrôle humain. Toute intégration IA dans ce secteur applique les garde-fous du chapitre \"Intelligence artificielle, RAG, agents et MCP\" de notre méthode : validation humaine sur les actions financières sensibles, journalisation systématique.",
    faq: [
      {
        question: "L'automatisation est-elle compatible avec les exigences de conformité bancaire ?",
        answer:
          "Oui, à condition que chaque automatisation soit traçable, journalisée et dotée d'un point de validation humaine sur les décisions sensibles — c'est un prérequis de conception, pas une option ajoutée après coup.",
      },
      {
        question: "Travaillez-vous avec des systèmes bancaires existants (core banking) ?",
        answer:
          "Nous intervenons en intégration autour de ces systèmes plutôt qu'en remplacement, en clarifiant systématiquement la source de vérité de chaque donnée avant toute synchronisation.",
      },
    ],
  },
  {
    slug: "retail-et-distribution",
    name: "Retail et distribution",
    tagline: "Omnicanal, stocks et expérience client",
    directAnswer:
      "Dans le retail et la distribution, la transformation digitale porte le plus souvent sur la cohérence omnicanale (boutique, e-commerce, WhatsApp), la fiabilité des données de stock et la fluidité du parcours client. Un stock affiché disponible mais réellement épuisé coûte plus cher qu'un stock mal optimisé.",
    challenges: [
      "Des données de stock incohérentes entre canaux physiques et digitaux.",
      "Un parcours client fragmenté selon le canal d'achat utilisé.",
      "Des pics saisonniers qui rendent les processus manuels intenables.",
    ],
    relevantServiceSlugs: ["refonte-processus", "automatisation-integrations", "developpement-outils-metier"],
    approach:
      "Nous distinguons stock physique, disponible, réservé et théorique avant toute promesse client — une confusion fréquente qui génère des ruptures perçues. L'automatisation cible en priorité la synchronisation entre canaux et la réduction des ressaisies entre outils de caisse, e-commerce et ERP.",
    faq: [
      {
        question: "Pouvez-vous connecter notre boutique en ligne à notre système de caisse ?",
        answer:
          "Oui, c'est un cas d'automatisation et d'intégration courant — nous évaluons d'abord quel système doit faire autorité sur chaque donnée (stock, prix, statut commande) avant de synchroniser.",
      },
      {
        question: "Comment gérez-vous les pics d'activité saisonniers ?",
        answer:
          "En identifiant en amont les processus qui deviennent des goulots d'étranglement sous forte charge, pour les automatiser ou les simplifier avant la période critique, pas pendant.",
      },
    ],
  },
  {
    slug: "sante",
    name: "Santé",
    tagline: "Confidentialité des données et fiabilité opérationnelle",
    directAnswer:
      "Dans le secteur de la santé, la transformation digitale doit protéger des données particulièrement sensibles tout en fluidifiant des processus à fort enjeu humain : prise de rendez-vous, suivi patient, coordination entre équipes. La confidentialité et la fiabilité priment sur la vitesse de déploiement.",
    challenges: [
      "Des données de santé soumises à des exigences de confidentialité renforcées.",
      "Des processus de prise de rendez-vous ou de suivi encore largement manuels.",
      "Une coordination difficile entre plusieurs outils ou intervenants.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "refonte-processus", "developpement-outils-metier"],
    approach:
      "Le diagnostic applique une minimisation stricte des données : ne collecter et ne rendre accessible que ce qui est nécessaire à un objectif défini, avec une documentation claire des accès. Les automatisations concernent en priorité les tâches administratives (confirmations, rappels) qui libèrent du temps pour l'activité de soin elle-même.",
    faq: [
      {
        question: "Comment garantissez-vous la confidentialité des données patients ?",
        answer:
          "En appliquant le principe de minimisation dès le diagnostic : accès limité, finalité documentée, et distinction claire entre anonymisation et pseudonymisation lors de toute automatisation ou usage de l'IA.",
      },
      {
        question: "Automatisez-vous la prise de rendez-vous ?",
        answer:
          "C'est un cas d'usage fréquent, à condition de garder un chemin simple vers un contact humain pour les cas qui ne rentrent pas dans un parcours standard.",
      },
    ],
  },
  {
    slug: "agroalimentaire",
    name: "Agroalimentaire",
    tagline: "Traçabilité, saisonnalité et chaîne logistique",
    directAnswer:
      "Dans l'agroalimentaire, la transformation digitale doit composer avec la traçabilité produit, la saisonnalité de la production et une chaîne logistique souvent multi-acteurs. La donnée doit suivre le produit du champ ou de l'usine jusqu'au point de vente.",
    challenges: [
      "Une traçabilité produit exigée par la réglementation ou les distributeurs.",
      "Une forte saisonnalité qui complique la planification et les stocks.",
      "Une chaîne logistique impliquant plusieurs acteurs aux systèmes différents.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "automatisation-integrations", "pilotage-deploiement"],
    approach:
      "Nous cartographions la chaîne procure-to-pay et order-to-cash pour identifier où l'information se perd entre les acteurs, avant de choisir le niveau de traçabilité adapté (codes-barres, QR, événements système) selon le risque et la valeur du produit — pas un système générique surdimensionné.",
    faq: [
      {
        question: "Pouvez-vous mettre en place une traçabilité produit complète ?",
        answer:
          "Nous évaluons d'abord le niveau de traçabilité réellement nécessaire selon le risque, la réglementation et la valeur du produit, avant de recommander une solution technique proportionnée.",
      },
      {
        question: "Comment gérez-vous la saisonnalité dans la planification ?",
        answer:
          "En s'appuyant sur des scénarios et des marges de sécurité adaptées au coût d'une rupture comparé au coût de stockage, plutôt que sur une prévision unique traitée comme une certitude.",
      },
    ],
  },
  {
    slug: "telecoms",
    name: "Télécoms",
    tagline: "Volume élevé, churn et support client",
    directAnswer:
      "Dans les télécoms, la transformation digitale porte souvent sur la gestion d'un volume élevé de demandes support, la réduction du churn et la fiabilité de la facturation. Automatisation et IA y trouvent des cas d'usage naturels, à condition de garder un contrôle sur les décisions sensibles (résiliation, remboursement).",
    challenges: [
      "Un volume de demandes support difficile à absorber manuellement.",
      "Un taux de désabonnement (churn) mal anticipé faute de signaux fiables.",
      "Des systèmes de facturation complexes à faire communiquer avec le CRM.",
    ],
    relevantServiceSlugs: ["ia-entreprise", "automatisation-integrations", "pilotage-deploiement"],
    approach:
      "Nous structurons d'abord le pipeline de support et de vente (catégorie, priorité, SLA, cause racine) avant d'introduire l'IA sur des tâches définies : résumé, classification, suggestion de réponse — avec sortie systématique vers un humain pour les cas sensibles ou les résiliations.",
    faq: [
      {
        question: "L'IA peut-elle traiter les demandes de résiliation automatiquement ?",
        answer:
          "Non, ce type d'action reste soumis à validation humaine dans notre méthode — l'IA peut préparer et qualifier la demande, pas décider seule d'une résiliation ou d'un remboursement.",
      },
      {
        question: "Comment réduire le churn avec la donnée existante ?",
        answer:
          "En croisant les signaux déjà disponibles (usage, tickets support, historique de paiement) pour prioriser les actions de rétention, plutôt qu'en achetant un nouvel outil de scoring sans data fiable en entrée.",
      },
    ],
  },
  {
    slug: "education-et-formation",
    name: "Éducation et formation",
    tagline: "Plusieurs publics, cycles d'inscription et suivi pédagogique",
    directAnswer:
      "Dans l'éducation et la formation, la transformation digitale doit servir plusieurs publics à la fois (apprenants, familles, équipes pédagogiques et administratives) et s'articuler autour de cycles récurrents : inscription, suivi, évaluation. La complexité vient souvent de la multiplicité des parties prenantes, pas de la technologie elle-même.",
    challenges: [
      "Des processus d'inscription et de suivi répartis sur plusieurs outils non connectés.",
      "Une communication différente à adresser à plusieurs publics (apprenants, familles, équipes).",
      "Des pics d'activité concentrés sur les périodes d'inscription ou d'évaluation.",
    ],
    relevantServiceSlugs: ["refonte-processus", "developpement-outils-metier", "pilotage-deploiement"],
    approach:
      "Nous cartographions le parcours de chaque public séparément avant de chercher une plateforme unique — un portail pensé pour les familles ne répond pas aux mêmes besoins qu'un outil de suivi pédagogique pour les équipes. La priorité va aux processus qui se répètent chaque cycle (inscription, relance, évaluation).",
    faq: [
      {
        question: "Faut-il un seul outil pour tous les publics ?",
        answer:
          "Pas nécessairement. Nous recommandons d'abord de clarifier les besoins réels de chaque public avant de choisir entre un outil unique ou plusieurs outils connectés par des intégrations simples.",
      },
      {
        question: "Comment gérer les pics liés aux périodes d'inscription ?",
        answer:
          "En automatisant les tâches répétitives de cette période (confirmations, relances, contrôles de dossier) pour que les équipes se concentrent sur les cas qui demandent réellement une décision humaine.",
      },
    ],
  },
  {
    slug: "assurance",
    name: "Assurance",
    tagline: "Traitement de sinistres, conformité et évaluation du risque",
    directAnswer:
      "Dans l'assurance, la transformation digitale touche principalement le traitement des sinistres, la conformité réglementaire et l'évaluation du risque. Ce sont des processus à fort volume et à fort enjeu de confiance client, où l'automatisation doit rester transparente et vérifiable.",
    challenges: [
      "Un traitement des sinistres souvent lent faute de données centralisées.",
      "Des obligations réglementaires qui imposent traçabilité et justification des décisions.",
      "Une évaluation du risque qui dépend de données dispersées entre plusieurs systèmes.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "automatisation-integrations", "ia-entreprise"],
    approach:
      "Nous cartographions le parcours sinistre de bout en bout pour identifier les étapes à règles stables (automatisables) et celles qui exigent une expertise humaine. L'IA, quand elle intervient, prépare et qualifie les dossiers — la décision finale sur un sinistre reste tracée et validée selon une politique explicite.",
    faq: [
      {
        question: "Peut-on automatiser le traitement des sinistres simples ?",
        answer:
          "Oui, pour les cas standards et bien définis, avec des critères de validation clairs — les cas complexes ou litigieux restent orientés vers une expertise humaine.",
      },
      {
        question: "Comment restez-vous conformes aux exigences réglementaires du secteur ?",
        answer:
          "En intégrant la traçabilité et la justification des décisions dès la conception des automatisations, pas comme un contrôle ajouté après coup.",
      },
    ],
  },
  {
    slug: "transport-et-logistique",
    name: "Transport et logistique",
    tagline: "Suivi temps réel, flotte et coordination multi-acteurs",
    directAnswer:
      "Dans le transport et la logistique, la transformation digitale porte sur le suivi en temps réel des flux, la gestion de flotte et la coordination entre plusieurs acteurs (transporteurs, entrepôts, clients). La donnée doit rester fiable malgré la dispersion géographique des opérations.",
    challenges: [
      "Un suivi des livraisons dispersé entre plusieurs outils ou feuilles Excel.",
      "Une maintenance de flotte réactive plutôt que planifiée.",
      "Une coordination difficile entre transporteurs, entrepôts et clients finaux.",
    ],
    relevantServiceSlugs: ["automatisation-integrations", "refonte-processus", "developpement-outils-metier"],
    approach:
      "Nous cartographions les chaînes procure-to-pay et order-to-cash pour identifier où l'information se perd, puis évaluons si l'IoT (capteurs de position, état véhicule) apporte une valeur proportionnée à son coût — un projet IoT commence par l'information et l'action recherchées, pas par le choix d'un capteur.",
    faq: [
      {
        question: "Faut-il des capteurs IoT pour améliorer le suivi logistique ?",
        answer:
          "Pas systématiquement. Nous évaluons d'abord si une meilleure intégration des systèmes existants suffit avant de recommander des capteurs, dont le coût et la maintenance doivent être justifiés par un usage réel.",
      },
      {
        question: "Pouvez-vous connecter plusieurs transporteurs à un même tableau de bord ?",
        answer:
          "Oui, via des intégrations ou un portail dédié, à condition de clarifier au préalable quelle donnée fait autorité en cas d'écart entre les systèmes des différents acteurs.",
      },
    ],
  },
  {
    slug: "immobilier",
    name: "Immobilier",
    tagline: "Cycle de vente long et volume documentaire élevé",
    directAnswer:
      "Dans l'immobilier, la transformation digitale doit gérer un cycle de vente long, des transactions à forte valeur et un volume important de documents. La priorité va souvent à la fiabilité du suivi commercial et à la fluidité du parcours client plutôt qu'à l'automatisation massive.",
    challenges: [
      "Un pipeline commercial difficile à suivre sur des cycles de vente longs.",
      "Une gestion documentaire dispersée (mandats, diagnostics, contrats).",
      "Un parcours client fragmenté entre visite, offre, financement et signature.",
    ],
    relevantServiceSlugs: ["pilotage-deploiement", "refonte-processus", "developpement-outils-metier"],
    approach:
      "Nous structurons le pipeline commercial avec des critères d'entrée/sortie clairs par étape (visite réalisée, offre envoyée, financement validé) pour fiabiliser les prévisions, et cartographions le parcours client pour réduire les ruptures d'information entre les étapes.",
    faq: [
      {
        question: "Pouvez-vous centraliser nos documents de transaction ?",
        answer:
          "Oui, en clarifiant d'abord quel système fait autorité pour chaque type de document et en simplifiant le processus de collecte avant d'introduire un outil de centralisation.",
      },
      {
        question: "Comment améliorer le suivi d'un cycle de vente long ?",
        answer:
          "En définissant des étapes de pipeline avec des critères de passage vérifiables, plutôt que des statuts déclaratifs qui ne reflètent pas la réalité de la négociation.",
      },
    ],
  },
  {
    slug: "industrie-et-manufacturing",
    name: "Industrie et manufacturing",
    tagline: "Production, maintenance et données opérationnelles",
    directAnswer:
      "Dans l'industrie et le manufacturing, la transformation digitale touche la production, la maintenance et la remontée de données opérationnelles. L'ERP y joue un rôle central, mais son intérêt dépend de la qualité des processus et des données qui l'alimentent.",
    challenges: [
      "Des ordres de fabrication ou de maintenance suivis sur papier ou Excel.",
      "Une maintenance réactive faute de données fiables sur l'état des équipements.",
      "Un ERP sous-exploité faute de référentiels et de processus propres.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "developpement-outils-metier", "automatisation-integrations"],
    approach:
      "Avant toute migration ou optimisation ERP, nous nettoyons les référentiels et clarifions les règles de validation. Pour la maintenance, nous digitalisons d'abord les ordres de travail (création, priorité, résolution) — souvent plus rentable qu'un projet IoT complexe en première étape.",
    faq: [
      {
        question: "Un ERP suffit-il à digitaliser notre production ?",
        answer:
          "Un ERP est un système transactionnel central, pas une solution magique : son efficacité dépend de la qualité des processus et des données qui l'alimentent, à traiter avant ou pendant sa mise en place.",
      },
      {
        question: "Faut-il investir dans l'IoT pour la maintenance ?",
        answer:
          "Seulement si l'information recherchée et l'action déclenchée sont clairement définies au préalable — digitaliser d'abord les ordres de travail donne souvent un gain plus rapide et moins coûteux.",
      },
    ],
  },
  {
    slug: "secteur-public",
    name: "Secteur public",
    tagline: "Gouvernance multi-parties prenantes et cycles budgétaires",
    directAnswer:
      "Dans le secteur public, la transformation digitale doit composer avec une gouvernance impliquant plusieurs parties prenantes, des cycles budgétaires contraints et des exigences de transparence. La conduite du changement y est souvent aussi déterminante que la solution technique elle-même.",
    challenges: [
      "Une gouvernance multi-acteurs qui ralentit la prise de décision technique.",
      "Des cycles budgétaires qui imposent de séquencer les investissements sur plusieurs exercices.",
      "Des exigences de transparence et d'accessibilité pour les usagers.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "pilotage-deploiement", "refonte-processus"],
    approach:
      "Nous cartographions les parties prenantes et les circuits de décision avant de proposer une feuille de route, en la séquençant explicitement selon les cycles budgétaires disponibles plutôt que sur un calendrier théorique déconnecté des contraintes réelles.",
    faq: [
      {
        question: "Comment adaptez-vous votre méthode aux contraintes budgétaires publiques ?",
        answer:
          "En construisant plusieurs scénarios de feuille de route (minimum viable, recommandé, accéléré) pour que les décideurs arbitrent en fonction du budget réellement disponible sur chaque exercice.",
      },
      {
        question: "Prenez-vous en compte l'accessibilité numérique ?",
        answer:
          "Oui, les principes d'accessibilité (navigation, contrastes, structure sémantique) font partie de notre méthode UX, particulièrement pertinents pour des services destinés à un large public.",
      },
    ],
  },
  {
    slug: "ong-et-associations",
    name: "ONG et associations",
    tagline: "Reporting bailleurs, budgets limités et bénévolat",
    directAnswer:
      "Pour les ONG et associations, la transformation digitale doit répondre à des contraintes spécifiques : reporting exigé par les bailleurs, budgets limités et équipes parfois bénévoles avec une disponibilité variable. La priorité va aux solutions simples et peu coûteuses à maintenir.",
    challenges: [
      "Un reporting bailleur chronophage faute de données centralisées.",
      "Des budgets numériques limités qui imposent des choix pragmatiques.",
      "Des équipes bénévoles avec une disponibilité et des compétences numériques variables.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "automatisation-integrations", "pilotage-deploiement"],
    approach:
      "Nous priorisons les automatisations à fort impact et faible coût de maintenance, en évitant les outils sophistiqués qu'une équipe réduite ne pourra pas faire vivre dans la durée. Le plan d'adoption tient compte explicitement du turnover bénévole.",
    faq: [
      {
        question: "Travaillez-vous avec des budgets réduits ?",
        answer:
          "Oui, notre méthode reste proportionnée à la taille de l'organisation — un diagnostic ciblé et des automatisations simples peuvent produire un impact réel sans budget important.",
      },
      {
        question: "Comment assurer la continuité si les bénévoles changent souvent ?",
        answer:
          "En documentant systématiquement les processus et en évitant les solutions qui dépendent d'une seule personne pour fonctionner — un principe central de notre méthode de transfert.",
      },
    ],
  },
  {
    slug: "hotellerie-et-tourisme",
    name: "Hôtellerie et tourisme",
    tagline: "Réservations, saisonnalité et expérience client",
    directAnswer:
      "Dans l'hôtellerie et le tourisme, la transformation digitale porte sur la gestion des réservations, la saisonnalité de l'activité et la qualité de l'expérience client sur plusieurs canaux. La disponibilité affichée doit rester exacte en temps réel, quel que soit le canal de réservation.",
    challenges: [
      "Des réservations réparties sur plusieurs canaux non synchronisés.",
      "Une forte saisonnalité qui complique la planification des ressources.",
      "Une expérience client fragmentée entre réservation, séjour et suivi post-séjour.",
    ],
    relevantServiceSlugs: ["automatisation-integrations", "developpement-outils-metier", "pilotage-deploiement"],
    approach:
      "Nous synchronisons en priorité les canaux de réservation pour éviter la survente, puis cartographions le parcours client de bout en bout (réservation, séjour, suivi) pour identifier les points de friction qui affectent la satisfaction et le taux de retour.",
    faq: [
      {
        question: "Pouvez-vous synchroniser plusieurs plateformes de réservation ?",
        answer:
          "Oui, c'est un cas d'automatisation fréquent — l'enjeu principal est de définir quel système fait autorité sur la disponibilité réelle pour éviter les surventes.",
      },
      {
        question: "Comment gérer les pics de la haute saison ?",
        answer:
          "En automatisant les tâches répétitives de cette période (confirmations, rappels, check-in) pour que les équipes se concentrent sur la qualité du service pendant les moments les plus chargés.",
      },
    ],
  },
  {
    slug: "btp-et-construction",
    name: "BTP et construction",
    tagline: "Gestion de projet, sous-traitance et coordination chantier",
    directAnswer:
      "Dans le BTP et la construction, la transformation digitale doit s'adapter à un fonctionnement par projet, une sous-traitance fréquente et une coordination terrain souvent complexe. Le suivi de chantier et la gestion documentaire (devis, plans, avenants) sont des points de friction typiques.",
    challenges: [
      "Un suivi de chantier dispersé entre plusieurs outils ou supports papier.",
      "Une coordination difficile avec des sous-traitants aux systèmes différents.",
      "Une gestion documentaire lourde (devis, plans, avenants, réceptions).",
    ],
    relevantServiceSlugs: ["refonte-processus", "developpement-outils-metier", "pilotage-deploiement"],
    approach:
      "Nous cartographions le processus de bout en bout, du devis à la réception de chantier, en identifiant les étapes qui gagneraient à être digitalisées via une application mobile plutôt qu'un outil de bureau — les équipes terrain travaillent souvent avec une connectivité intermittente.",
    faq: [
      {
        question: "Vos outils fonctionnent-ils sans connexion internet sur chantier ?",
        answer:
          "Nous en tenons compte dès la conception : une application mobile offline peut être plus utile qu'un tableau de bord sophistiqué si les équipes travaillent sans connexion fiable.",
      },
      {
        question: "Pouvez-vous connecter nos sous-traitants à notre suivi de chantier ?",
        answer:
          "Oui, selon leur niveau d'équipement — nous évaluons le juste niveau d'intégration technique proportionné à la réalité de chaque partenaire.",
      },
    ],
  },
  {
    slug: "energie",
    name: "Énergie",
    tagline: "Mesure, conformité réglementaire et sécurité",
    directAnswer:
      "Dans le secteur de l'énergie, la transformation digitale touche la mesure et le relevé de consommation, la conformité réglementaire et la sécurité des installations. Les projets IoT y sont fréquents mais doivent rester justifiés par une action ou une décision concrète.",
    challenges: [
      "Des relevés de consommation encore partiellement manuels ou peu fiables.",
      "Des obligations réglementaires et de sécurité strictes à respecter.",
      "Des données opérationnelles dispersées entre plusieurs systèmes de supervision.",
    ],
    relevantServiceSlugs: ["audit-diagnostic-digital", "developpement-outils-metier", "pilotage-deploiement"],
    approach:
      "Nous évaluons chaque projet de capteur ou de télérelevé à partir de l'action qu'il doit déclencher, pas de la technologie elle-même. La sécurité (accès, journalisation, continuité) est intégrée dès le diagnostic, particulièrement critique pour des infrastructures sensibles.",
    faq: [
      {
        question: "Comment choisissez-vous les capteurs à déployer ?",
        answer:
          "En partant de l'information et de l'action recherchées plutôt que du capteur disponible sur le marché — un projet IoT mal cadré génère des données inexploitées.",
      },
      {
        question: "La sécurité est-elle traitée comme un sujet à part ?",
        answer:
          "Non, elle est intégrée dès le diagnostic et le portefeuille d'initiatives, conformément à notre méthode — particulièrement important pour des infrastructures énergétiques sensibles.",
      },
    ],
  },
];

export function getSectorPage(slug: string): SectorPage | undefined {
  return SECTOR_PAGES.find((s) => s.slug === slug);
}
