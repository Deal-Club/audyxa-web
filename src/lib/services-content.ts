export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceApproachStep {
  title: string;
  text: string;
}

export interface ServiceDetail {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  directAnswer: string;
  problems: string[];
  approachSteps: ServiceApproachStep[];
  bullets: string[];
  relatedMethodSlugs: string[];
  faq: ServiceFaqItem[];
}

export const SERVICES_DETAIL: ServiceDetail[] = [
  {
    slug: "audit-diagnostic-digital",
    icon: "flaticon-color-sample",
    title: "Audit et diagnostic digital",
    tagline: "Le point de départ de toute transformation digitale sérieuse",
    directAnswer:
      "L'audit et diagnostic digital Audyxa consiste à cartographier vos processus, outils et données réels avant toute recommandation, pour identifier les chantiers de transformation digitale qui produisent un impact mesurable — pas une liste générique de logiciels à acheter.",
    problems: [
      "Vous ne savez pas par où commencer votre transformation digitale, tout semble prioritaire.",
      "Vous avez déjà investi dans des outils numériques sans gain de temps visible.",
      "Vous manquez de données fiables pour décider où investir en premier.",
    ],
    approachSteps: [
      { title: "Cinq questions avant tout diagnostic", text: "Nous partons des cinq questions qui structurent tout diagnostic sérieux : quel résultat métier voulons-nous modifier, comment est-il produit aujourd'hui, quelles données mesurent la situation actuelle, quelles contraintes limitent les options, qui devra changer sa façon de travailler." },
      { title: "Quatre preuves, pas des opinions", text: "Le diagnostic s'appuie sur quatre formes de preuve — entretien, observation, données et documentation — et non sur les seules déclarations de la direction. Chaque constat suit une structure vérifiable : fait, impact, cause probable, preuve, risque, action de vérification." },
      { title: "Une notation sur dix dimensions", text: "Nous notons la maturité numérique sur dix dimensions (stratégie, processus, données, applications, automatisation, sécurité...) plutôt qu'un score global qui masque des situations très différentes." },
    ],
    bullets: [
      "Diagnostic de maturité sur dix dimensions",
      "Cartographie des irritants et pertes de temps réelles",
      "Priorisation des chantiers par valeur et faisabilité",
    ],
    relatedMethodSlugs: ["fondements-et-maturite-numerique", "mission-de-lexpert"],
    faq: [
      {
        question: "Combien de temps dure un audit digital ?",
        answer:
          "Cela dépend du périmètre et de la taille de l'organisation. Le diagnostic reste ciblé : il vise à identifier rapidement les priorités réelles, pas à produire un audit exhaustif qui prend des mois sans déboucher sur des décisions.",
      },
      {
        question: "L'audit débouche-t-il forcément sur un projet ?",
        answer:
          "Non. Si le diagnostic ne révèle aucun besoin justifiant un investissement à ce moment-là, nous le disons simplement — plutôt que de proposer une solution qui ne servirait pas votre activité.",
      },
      {
        question: "Faut-il déjà avoir des outils numériques en place ?",
        answer:
          "Non. Nous intervenons aussi bien pour structurer une organisation qui démarre sa transformation digitale que pour clarifier un environnement déjà équipé mais devenu difficile à piloter.",
      },
    ],
  },
  {
    slug: "refonte-processus",
    icon: "flaticon-front-end",
    title: "Refonte des processus métier",
    tagline: "Simplifier avant de digitaliser",
    directAnswer:
      "La refonte des processus métier consiste à cartographier le fonctionnement actuel (AS-IS) puis à concevoir une version simplifiée (TO-BE) avant toute automatisation — pour éviter d'automatiser un processus inefficace et de reproduire le problème plus vite.",
    problems: [
      "Vos équipes ressaisissent la même information à plusieurs étapes d'un même processus.",
      "Des validations ou des transferts n'apportent plus de valeur mais ralentissent le travail.",
      "Vous voulez automatiser mais ne savez pas quelles étapes simplifier d'abord.",
    ],
    approachSteps: [
      { title: "Cartographier de bout en bout", text: "Nous cartographions le processus de bout en bout — pas service par service — car c'est le délai total que subit le client, interne ou externe. Chaque processus reçoit un owner capable d'arbitrer ce flux complet." },
      { title: "Mesurer avant de refaire", text: "Avant de refaire, nous mesurons : volume, temps de travail actif, temps d'attente, taux d'erreur, nombre de transferts et de ressaisies. Le temps de cycle inclut les attentes ; le temps de traitement ne mesure que le travail actif — la différence révèle souvent l'essentiel du problème." },
      { title: "Supprimer avant d'automatiser", text: "La séquence appliquée est celle du Lean numérique : supprimer, simplifier, standardiser, instrumenter, automatiser, mesurer — dans cet ordre, jamais l'inverse." },
    ],
    bullets: [
      "Cartographie AS-IS / TO-BE",
      "Mesure du temps de cycle et des points de friction réels",
      "Séquence supprimer → simplifier → standardiser → automatiser",
    ],
    relatedMethodSlugs: ["processus-bpmn-lean-refonte"],
    faq: [
      {
        question: "Faut-il refondre un processus avant de l'automatiser ?",
        answer:
          "Oui, systématiquement. Automatiser une étape inutile la rend seulement plus rapide, pas plus juste. La simplification précède toujours l'automatisation dans notre méthode.",
      },
      {
        question: "Comment choisissez-vous le processus à traiter en premier ?",
        answer:
          "Selon son impact mesuré (volume, temps perdu, taux d'erreur) et sa faisabilité. Nous évitons de refondre un processus secondaire simplement parce qu'il est plus simple à traiter.",
      },
      {
        question: "Utilisez-vous une notation particulière pour cartographier les processus ?",
        answer:
          "Nous utilisons BPMN lorsque la complexité le justifie ; pour une mission plus légère, un diagramme en couloirs suffit souvent. Le bon niveau de détail est celui qui permet de décider, pas celui qui impressionne.",
      },
    ],
  },
  {
    slug: "automatisation-integrations",
    icon: "flaticon-online-shopping",
    title: "Automatisation et intégrations",
    tagline: "Moins de saisie manuelle, plus de temps utile",
    directAnswer:
      "L'automatisation et l'intégration d'outils consistent à connecter vos systèmes (CRM, ERP, messagerie, outils métier) pour supprimer les transferts manuels de données et les tâches répétitives, via des workflows robustes plutôt que des scripts fragiles.",
    problems: [
      "Vos équipes recopient manuellement des données d'un outil à un autre chaque semaine.",
      "Des automatisations existantes tombent en panne sans que personne ne le remarque.",
      "Vous ne savez pas si un projet d'automatisation sera réellement rentable.",
    ],
    approachSteps: [
      { title: "Identifier les bons candidats", text: "Nous identifions les candidats réels à l'automatisation à partir d'un score objectif : volume, répétitivité, stabilité des règles, gestion des exceptions, qualité des données disponibles." },
      { title: "Privilégier l'API, concevoir pour la robustesse", text: "Nous privilégions les intégrations par API lorsqu'elles existent — plus robustes qu'une automatisation qui clique sur une interface — et concevons chaque workflow avec les garanties que les démonstrations oublient souvent : idempotence, reprise automatique après échec, file d'échec visible, traçabilité par identifiant, et possibilité de reprise manuelle." },
      { title: "Un owner et une revue pour chaque automatisation", text: "Chaque automatisation reçoit un owner métier et technique, un coût connu et une revue régulière : un workflow abandonné est une dette, pas un acquis." },
    ],
    bullets: [
      "Automatisation via n8n, Make ou intégrations API sur mesure",
      "Workflows conçus pour la robustesse : erreurs, reprise, traçabilité",
      "Calcul du ROI réel avant déploiement",
    ],
    relatedMethodSlugs: ["automatisation-api-rpa-low-code"],
    faq: [
      {
        question: "Quels processus sont les meilleurs candidats à l'automatisation ?",
        answer:
          "Les tâches répétitives, à volume significatif, avec des règles stables et des exceptions gérables — pas une décision stratégique unique ni un processus jamais exécuté deux fois de la même façon.",
      },
      {
        question: "Utilisez-vous n8n, Make ou du code sur mesure ?",
        answer:
          "Selon le besoin. Les plateformes low-code accélèrent la connexion de services courants ; un workflow codé devient préférable pour des volumes élevés, une logique très spécifique ou des tests complexes.",
      },
      {
        question: "Comment calculez-vous le retour sur investissement d'une automatisation ?",
        answer:
          "À partir du volume traité, du temps manuel économisé, du coût horaire, du taux d'erreur évité et du coût de mise en œuvre et d'exploitation — avec un scénario prudent, pas optimiste par défaut.",
      },
    ],
  },
  {
    slug: "ia-entreprise",
    icon: "flaticon-front-end",
    title: "Intelligence artificielle en entreprise",
    tagline: "De l'IA utile, pas de l'IA pour l'image",
    directAnswer:
      "L'intégration de l'intelligence artificielle en entreprise chez Audyxa consiste à déployer des cas d'usage IA ciblés — assistants internes, recherche documentaire, qualification, synthèse — avec des garde-fous et une validation humaine sur les actions sensibles, pas une IA généraliste sans contrôle.",
    problems: [
      "Vous voulez utiliser l'IA mais ne savez pas par quel cas d'usage commencer.",
      "Un projet IA pilote a été lancé sans mesure claire de sa fiabilité.",
      "Vous craignez les risques (données sensibles, erreurs, dépendance à un fournisseur).",
    ],
    approachSteps: [
      { title: "Cadrer chaque cas d'usage avant la technique", text: "Chaque cas d'usage IA est défini avant tout choix technique : utilisateur, problème, entrée, sortie, niveau de risque, métrique d'évaluation, coût maximum et procédure d'escalade. Les cas sensibles (décision financière, données personnelles) reçoivent des contrôles renforcés." },
      { title: "Choisir la bonne architecture IA", text: "Nous distinguons prompting, RAG et fine-tuning selon le besoin réel, et privilégions un agent unique avec des outils explicites plutôt qu'une architecture multi-agent choisie pour l'effet de démonstration." },
      { title: "Valider avant de déployer", text: "Toute action sensible (paiement, suppression, envoi massif) reste soumise à une validation humaine informée — jamais un simple bouton \"approuver\" sans contexte. Nous évaluons chaque système avant déploiement sur un jeu de cas réels, pas seulement sur une démonstration réussie." },
    ],
    bullets: [
      "Cas d'usage IA cadrés : utilisateur, risque, métrique, coût",
      "RAG et bases de connaissance internes",
      "Garde-fous, validation humaine et évaluation avant déploiement",
    ],
    relatedMethodSlugs: ["ia-rag-agents-mcp", "cybersecurite-confidentialite-resilience"],
    faq: [
      {
        question: "L'IA remplace-t-elle le contrôle humain chez Audyxa ?",
        answer:
          "Non. L'IA accélère l'exécution sur des tâches définies ; les actions sensibles ou les décisions à fort impact restent soumises à une validation humaine explicite.",
      },
      {
        question: "Par quel cas d'usage IA commencer ?",
        answer:
          "Généralement un cas à risque limité et à valeur claire : résumé, recherche documentaire, classification ou extraction de données — pas une décision financière ou réglementée en premier déploiement.",
      },
      {
        question: "Comment évaluez-vous la fiabilité d'un système IA avant de le déployer ?",
        answer:
          "Sur un jeu de cas réels incluant des situations normales, difficiles et hors périmètre, avec des critères de réussite définis à l'avance — pas uniquement sur une démonstration qui fonctionne une fois.",
      },
    ],
  },
  {
    slug: "developpement-outils-metier",
    icon: "flaticon-color-sample",
    title: "Développement d'outils métier",
    tagline: "L'outil qui manque, pas un de plus",
    directAnswer:
      "Le développement d'outils métier chez Audyxa consiste à concevoir l'interface, le tableau de bord ou le portail qui manque à votre pilotage — uniquement quand aucun logiciel du marché ne couvre correctement le besoin, avec un choix explicite entre acheter, configurer, intégrer ou développer.",
    problems: [
      "Aucun logiciel du marché ne correspond exactement à votre façon de travailler.",
      "Vous pilotez votre activité avec des fichiers Excel dispersés faute d'outil adapté.",
      "Un développement sur mesure existant est devenu difficile à maintenir.",
    ],
    approachSteps: [
      { title: "Acheter, configurer, intégrer ou développer", text: "Avant tout développement, nous évaluons les quatre options réelles : acheter un SaaS standard, configurer une plateforme existante, intégrer plusieurs outils spécialisés, ou développer — en calculant le coût total de possession sur plusieurs années, pas seulement le coût initial." },
      { title: "Une architecture cible sur des principes simples", text: "Développer se justifie quand la capacité crée un avantage spécifique ou nécessite un contrôle que le marché ne couvre pas raisonnablement. L'architecture cible reste construite sur des principes simples : identité centralisée, API documentées, donnée exportable, environnements séparés, sauvegardes testées." },
      { title: "Des outils pensés pour durer", text: "Nous concevons des outils pensés pour rester simples à utiliser et à maintenir, en priorité sur la fonctionnalité réellement utile plutôt que l'accumulation de fonctionnalités secondaires jamais utilisées." },
    ],
    bullets: [
      "Grille de décision acheter / configurer / intégrer / développer",
      "Applications web, dashboards et portails sur mesure",
      "Architecture pensée pour rester maintenable dans la durée",
    ],
    relatedMethodSlugs: ["architecture-systeme-information"],
    faq: [
      {
        question: "Pourquoi ne pas toujours utiliser un logiciel existant ?",
        answer:
          "Parce qu'un logiciel standard peut imposer des compromis coûteux quand le besoin est spécifique. Nous ne recommandons un développement sur mesure que lorsque le calcul de coût total et de valeur le justifie réellement.",
      },
      {
        question: "Quelles technologies utilisez-vous pour développer un outil métier ?",
        answer:
          "Le choix dépend du besoin, de l'équipe qui devra le maintenir et des intégrations nécessaires — nous privilégions des architectures documentées et exportables, jamais un verrouillage propriétaire non justifié.",
      },
      {
        question: "Assurez-vous la maintenance après le développement ?",
        answer:
          "Le transfert de mission inclut documentation technique et fonctionnelle, accès et procédures — pour que l'outil reste opérationnel avec ou sans notre présence continue, selon ce qui est convenu.",
      },
    ],
  },
  {
    slug: "pilotage-deploiement",
    icon: "flaticon-online-shopping",
    title: "Pilotage et déploiement",
    tagline: "Une solution non adoptée n'a aucune valeur",
    directAnswer:
      "Le pilotage et déploiement de la transformation digitale consiste à accompagner la mise en œuvre, l'adoption terrain et le suivi des indicateurs après le lancement d'un projet — parce qu'une solution non adoptée n'a aucune valeur, quelle que soit sa qualité technique.",
    problems: [
      "Un projet a été livré techniquement mais les équipes continuent d'utiliser l'ancien système.",
      "Vous n'avez pas de visibilité claire sur les résultats réels de vos investissements digitaux.",
      "Vous ne savez pas comment prioriser un portefeuille de plusieurs chantiers en parallèle.",
    ],
    approachSteps: [
      { title: "Comprendre ce qui bloque réellement l'adoption", text: "L'adoption dépend de la compréhension du besoin, de la capacité des équipes, des incitations et du support — pas uniquement de la qualité technique de la solution. Nous cartographions les parties prenantes et identifions ce qui rend le changement réellement difficile, au-delà des objections de surface." },
      { title: "Une feuille de route 30-60-90 jours", text: "Chaque feuille de route suit un rythme 30-60-90 jours (comprendre et sécuriser, simplifier et connecter, prouver et industrialiser), organisée par capacités plutôt que par fournisseurs, avec des résultats observables chaque trimestre." },
      { title: "Mesurer la valeur réellement produite", text: "Après mise en production, nous comparons systématiquement baseline, cible et résultat réel, avec un owner métier responsable de chaque bénéfice attendu — le business case initial reste une hypothèse tant qu'il n'est pas vérifié." },
    ],
    bullets: [
      "Feuille de route 30-60-90 jours puis 12 mois",
      "Plan d'adoption et gestion des résistances au changement",
      "Suivi des KPI et de la réalisation de la valeur après déploiement",
    ],
    relatedMethodSlugs: [
      "conduite-du-changement-gouvernance-delivery",
      "roi-kpi-portefeuille-feuille-de-route",
    ],
    faq: [
      {
        question: "Que faites-vous si un projet livré n'est pas adopté par les équipes ?",
        answer:
          "Nous diagnostiquons la cause réelle — incompréhension, capacité, charge de travail, défaut de la solution — avant toute sanction ou nouvelle formation générique, puis ajustons le plan d'adoption en conséquence.",
      },
      {
        question: "Comment priorisez-vous plusieurs chantiers en parallèle ?",
        answer:
          "Avec un portefeuille d'initiatives noté sur la valeur, l'effort, le risque et les dépendances — pour éviter que chaque équipe présente son projet comme urgent sans comparaison commune.",
      },
      {
        question: "Le suivi s'arrête-t-il à la mise en production ?",
        answer:
          "Non. Nous recommandons des revues rapprochées après deux semaines, puis à 30 et 90 jours, pour vérifier que les bénéfices attendus se concrétisent réellement et ajuster si besoin.",
      },
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICES_DETAIL.find((s) => s.slug === slug);
}
