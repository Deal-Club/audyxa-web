export interface DecisionCriterion {
  label: string;
  a: string;
  b: string;
}

export interface DecisionFaqItem {
  question: string;
  answer: string;
}

export interface DecisionTableRow {
  criterion: string;
  /** Une valeur par option, dans le même ordre que `options`. */
  values: string[];
}

export interface DecisionOptionProfile {
  label: string;
  paragraphs: string[];
}

export interface DecisionPage {
  slug: string;
  title: string;
  tagline: string;
  conclusion: string;
  /** Format historique à deux options (comparatifs de modèles/positionnement). */
  optionALabel?: string;
  optionBLabel?: string;
  criteria?: DecisionCriterion[];
  optionAText?: string[];
  optionBText?: string[];
  /** Format tableau à N options (comparatifs d'outils tiers : n8n/Make/Zapier, Odoo/Zoho/Salesforce...). */
  options?: string[];
  comparisonTable?: DecisionTableRow[];
  optionProfiles?: DecisionOptionProfile[];
  /** Maillage interne optionnel vers les chapitres méthode concernés. */
  relatedMethodSlugs?: string[];
  limits: string;
  faq: DecisionFaqItem[];
}

export const DECISION_PAGES: DecisionPage[] = [
  {
    slug: "consultant-vs-agence-generaliste",
    title: "Consultant spécialisé vs agence généraliste",
    tagline: "Choisir entre profondeur et polyvalence",
    conclusion:
      "Un consultant spécialisé en transformation digitale apporte une méthode de diagnostic approfondie sur un périmètre défini ; une agence généraliste couvre davantage de disciplines (branding, publicité, développement) mais traite souvent chaque sujet avec moins de profondeur méthodologique. Le bon choix dépend de si votre besoin est un diagnostic structurant ou une exécution multi-disciplinaire.",
    optionALabel: "Consultant spécialisé",
    optionBLabel: "Agence généraliste",
    criteria: [
      { label: "Profondeur méthodologique", a: "Élevée sur le périmètre couvert", b: "Variable selon les disciplines" },
      { label: "Étendue des services", a: "Ciblée (diagnostic, automatisation, IA)", b: "Large (branding, ads, dev, etc.)" },
      { label: "Continuité conseil → exécution", a: "Généralement assurée par la même équipe", b: "Peut impliquer plusieurs interlocuteurs" },
      { label: "Adapté pour", a: "Cadrer une transformation digitale précise", b: "Externaliser plusieurs fonctions à la fois" },
    ],
    optionAText: [
      "Un consultant spécialisé structure son intervention autour d'une méthode répétable : diagnostic de maturité, priorisation, business case, déploiement, mesure. Cette profondeur permet d'éviter les recommandations génériques et de challenger réellement les hypothèses de départ.",
      "La contrepartie est un périmètre plus resserré : un consultant spécialisé en transformation digitale ne remplace pas une agence pour du branding ou de la publicité média, par exemple.",
    ],
    optionBText: [
      "Une agence généraliste peut couvrir plusieurs besoins sous un même toit, ce qui simplifie la coordination quand les sujets sont nombreux et peu liés entre eux.",
      "Le risque est une profondeur inégale : un sujet aussi structurant qu'un diagnostic de transformation digitale mérite une méthode dédiée, pas un traitement parmi dix autres prestations.",
    ],
    limits:
      "Cette page compare deux modèles d'organisation, pas des prestataires nommés. Audyxa se positionne comme un consultant spécialisé en transformation digitale (conseil et exécution réunis). Ce choix de modèle est assumé, pas présenté comme la seule option valable pour toutes les situations.",
    faq: [
      {
        question: "Une agence généraliste peut-elle faire de la transformation digitale ?",
        answer:
          "Oui, mais la question est la profondeur de méthode appliquée. Un diagnostic de transformation digitale bâclé coûte souvent plus cher qu'un diagnostic absent, car il oriente mal les investissements suivants.",
      },
      {
        question: "Faut-il changer de prestataire entre le diagnostic et l'exécution ?",
        answer:
          "Ce n'est pas obligatoire, mais une rupture entre les deux phases fait perdre du contexte. Un modèle où la même équipe conseille et exécute réduit ce risque.",
      },
    ],
  },
  {
    slug: "conseil-plus-execution-vs-cabinet-conseil",
    title: "Conseil + exécution vs cabinet de conseil classique",
    tagline: "Qui écrit la recommandation ne la déploie pas toujours",
    conclusion:
      "Un cabinet de conseil classique produit une recommandation, souvent sous forme de rapport, puis transfère l'exécution à une autre équipe (interne ou un intégrateur tiers). Un modèle conseil + exécution garde la même équipe du diagnostic jusqu'au déploiement. Le compromis est structurel : le premier modèle sépare les responsabilités, le second les concentre.",
    optionALabel: "Conseil + exécution réunis",
    optionBLabel: "Cabinet de conseil classique",
    criteria: [
      { label: "Continuité de contexte", a: "Élevée, même équipe du début à la fin", b: "Rompt souvent au moment du transfert" },
      { label: "Responsabilité sur le résultat", a: "Portée jusqu'au déploiement", b: "S'arrête souvent à la recommandation" },
      { label: "Risque de recommandation théorique", a: "Réduit, car l'équipe doit ensuite l'exécuter", b: "Plus élevé si l'exécution est déléguée ailleurs" },
      { label: "Coordination nécessaire", a: "Faible (un seul interlocuteur)", b: "Plus élevée (cabinet + intégrateur)" },
    ],
    optionAText: [
      "Quand la même équipe conseille et exécute, elle est directement confrontée aux conséquences de ses propres recommandations. Ce qui pousse naturellement vers des préconisations réalistes plutôt que théoriques.",
      "Cette continuité facilite aussi le suivi après déploiement : pas de nouvelle passation de contexte à une équipe qui découvre le dossier.",
    ],
    optionBText: [
      "Un cabinet de conseil classique peut apporter une expertise sectorielle large ou une légitimité utile face à un comité de direction, indépendamment de l'exécution.",
      "La limite structurelle : une recommandation non testée par son propre auteur sur le terrain peut sous-estimer des contraintes réelles de mise en œuvre.",
    ],
    limits:
      "Les deux modèles existent légitimement selon le contexte (taille de l'organisation, complexité réglementaire, besoin de tiers indépendant). Cette page présente le compromis structurel, pas un jugement universel.",
    faq: [
      {
        question: "Un cabinet de conseil classique est-il moins compétent ?",
        answer:
          "Non, ce n'est pas une question de compétence mais de modèle. La séparation conseil/exécution peut être un choix délibéré, notamment pour garder un regard indépendant.",
      },
      {
        question: "Le modèle conseil + exécution convient-il aux grandes organisations ?",
        answer:
          "Il convient particulièrement aux PME et structures en croissance qui veulent éviter la coordination entre plusieurs prestataires. De grandes organisations peuvent aussi le choisir pour des chantiers ciblés.",
      },
    ],
  },
  {
    slug: "alternative-cabinet-conseil-international",
    title: "Alternative à un grand cabinet de conseil international",
    tagline: "Ce que change la taille du prestataire",
    conclusion:
      "Un grand cabinet de conseil international apporte une couverture géographique et sectorielle étendue, souvent au prix d'équipes moins disponibles et d'un coût élevé. Une structure plus petite et spécialisée peut offrir plus de disponibilité et d'implication directe des experts seniors, avec un périmètre géographique ou sectoriel plus restreint.",
    optionALabel: "Structure spécialisée",
    optionBLabel: "Grand cabinet international",
    criteria: [
      { label: "Disponibilité des experts seniors", a: "Souvent directe", b: "Peut être diluée sur plusieurs missions" },
      { label: "Coût", a: "Généralement plus accessible", b: "Généralement plus élevé" },
      { label: "Couverture géographique", a: "Ciblée sur les marchés annoncés", b: "Large, souvent mondiale" },
      { label: "Rapidité de mise en route", a: "Souvent plus rapide", b: "Peut impliquer des process internes plus longs" },
    ],
    optionAText: [
      "Une structure spécialisée engage généralement les mêmes personnes du premier échange jusqu'à la fin de la mission, sans dilution entre juniors et associés.",
      "Le compromis : une couverture géographique ou sectorielle plus restreinte, à vérifier avant d'engager la mission.",
    ],
    optionBText: [
      "Un grand cabinet international peut mobiliser des ressources sur plusieurs pays ou secteurs simultanément, un atout pour des organisations à empreinte mondiale.",
      "La contrepartie fréquemment observée : un coût plus élevé et une implication variable des profils les plus expérimentés selon la taille de la mission.",
    ],
    limits:
      "Cette comparaison porte sur des modèles de taille de structure, pas sur un cabinet nommé en particulier. Le meilleur choix dépend de l'échelle réelle du besoin, pas d'une préférence de principe pour l'un ou l'autre modèle.",
    faq: [
      {
        question: "Une petite structure peut-elle gérer une mission complexe ?",
        answer:
          "Oui, si le périmètre correspond à son expertise réelle. La question à poser est la même quelle que soit la taille : quelle méthode, quelles preuves, quelle disponibilité réelle des personnes qui interviendront.",
      },
      {
        question: "Le prix est-il toujours plus bas hors des grands cabinets ?",
        answer:
          "Généralement oui pour des structures plus légères, mais ce n'est pas systématique. Cela dépend du positionnement et de la complexité de la mission.",
      },
    ],
  },
  {
    slug: "freelance-vs-cabinet-transformation-digitale",
    title: "Freelance vs cabinet pour la transformation digitale",
    tagline: "Une personne ou une équipe structurée",
    conclusion:
      "Un freelance offre souvent un coût plus bas et un contact direct, mais dépend d'une seule personne pour la disponibilité et la diversité de compétences. Un cabinet structuré mobilise plusieurs profils complémentaires (méthode, technique, conduite du changement) mais à un coût généralement plus élevé.",
    optionALabel: "Freelance",
    optionBLabel: "Cabinet structuré",
    criteria: [
      { label: "Coût", a: "Généralement plus bas", b: "Généralement plus élevé" },
      { label: "Diversité de compétences mobilisables", a: "Limitée à une personne", b: "Plusieurs profils complémentaires" },
      { label: "Continuité en cas d'absence", a: "Risque de rupture", b: "Généralement assurée par l'équipe" },
      { label: "Rapidité de décision", a: "Souvent très rapide", b: "Peut nécessiter une coordination interne" },
    ],
    optionAText: [
      "Un freelance expérimenté peut apporter une réponse rapide et un contact direct sans intermédiaire, avec un coût souvent inférieur à celui d'une structure.",
      "La limite structurelle est la dépendance à une seule personne : disponibilité, absence, et étendue de compétences réellement maîtrisées.",
    ],
    optionBText: [
      "Un cabinet structuré peut mobiliser plusieurs compétences (diagnostic, développement, conduite du changement) sans dépendre d'une seule personne, et assurer une continuité en cas d'absence.",
      "La contrepartie est généralement un coût plus élevé et parfois davantage de coordination interne avant qu'une décision soit prise.",
    ],
    limits:
      "Le choix dépend de la taille et de la criticité de la mission. Une mission ponctuelle et bien cadrée peut convenir à un freelance ; une transformation multi-chantiers bénéficie souvent d'une équipe structurée.",
    faq: [
      {
        question: "Un freelance peut-il gérer conseil et exécution comme un cabinet ?",
        answer:
          "Oui si son périmètre de compétences le permet réellement. La question à poser reste la même : quelle méthode, quelles preuves de résultats, quelle disponibilité garantie.",
      },
      {
        question: "Que se passe-t-il si le freelance n'est plus disponible en cours de mission ?",
        answer:
          "C'est le principal risque à anticiper contractuellement avant de démarrer, en clarifiant la continuité prévue en cas d'indisponibilité.",
      },
    ],
  },
  {
    slug: "comment-choisir-consultant-transformation-digitale",
    title: "Comment choisir un consultant en transformation digitale",
    tagline: "Les critères qui comptent réellement",
    conclusion:
      "Choisir un consultant en transformation digitale revient à vérifier une méthode documentée (pas seulement des promesses), des preuves d'expertise vérifiables, une continuité entre conseil et exécution, et une clarté sur le périmètre géographique et sectoriel réellement couvert.",
    optionALabel: "Signes de fiabilité",
    optionBLabel: "Signaux à vérifier avant de s'engager",
    criteria: [
      { label: "Méthode", a: "Documentée, publique, reproductible", b: "Vague, jamais formalisée par écrit" },
      { label: "Preuves d'expertise", a: "Contenu, méthodologie, auteur identifiable", b: "Aucune preuve vérifiable au-delà du discours commercial" },
      { label: "Périmètre annoncé", a: "Clair sur les zones et secteurs couverts", b: "Flou ou changeant selon l'interlocuteur" },
      { label: "Continuité conseil/exécution", a: "Explicite dès le premier échange", b: "Non précisée avant la signature" },
    ],
    optionAText: [
      "Un consultant fiable peut expliquer sa méthode avant même de parler d'outils : comment il diagnostique, comment il priorise, comment il mesure les résultats. Cette méthode doit pouvoir être vérifiée, pas seulement affirmée.",
      "Demander des preuves concrètes (méthodologie écrite, contenu publié, cadre d'analyse) permet de distinguer un vrai savoir-faire d'un discours commercial générique.",
    ],
    optionBText: [
      "Un discours qui reste au niveau des promesses (\"on transforme votre entreprise\") sans jamais détailler la méthode est un signal à prendre au sérieux.",
      "L'absence de clarté sur qui exécute réellement après la recommandation (le même prestataire ou un tiers non identifié) mérite d'être clarifiée avant signature.",
    ],
    limits:
      "Cette page décrit des critères d'évaluation généraux, pas un classement de prestataires. Elle ne prétend pas remplacer une mise en concurrence réelle adaptée à votre contexte.",
    faq: [
      {
        question: "Faut-il toujours demander des références clients ?",
        answer:
          "C'est une bonne pratique, mais l'absence de références ne disqualifie pas automatiquement un consultant récent. La méthode et la clarté du raisonnement restent les signaux les plus fiables.",
      },
      {
        question: "Un prix bas est-il un bon ou un mauvais signe ?",
        answer:
          "Ni l'un ni l'autre en soi. Le prix doit être mis en relation avec le périmètre réel de la mission et la méthode appliquée, pas jugé isolément.",
      },
    ],
  },
  {
    slug: "audit-digital-vs-audit-informatique",
    title: "Audit digital vs audit informatique classique",
    tagline: "Deux angles différents, deux objectifs différents",
    conclusion:
      "Un audit informatique classique évalue principalement l'infrastructure technique (sécurité, performance, conformité). Un audit digital, tel que pratiqué par Audyxa, part des résultats métier et de la maturité organisationnelle avant d'examiner la technique. Les deux se complètent mais ne répondent pas à la même question.",
    optionALabel: "Audit digital (orienté métier)",
    optionBLabel: "Audit informatique (orienté technique)",
    criteria: [
      { label: "Point de départ", a: "Résultats métier et processus", b: "Infrastructure et systèmes" },
      { label: "Livrable typique", a: "Priorisation de chantiers business", b: "Rapport technique de conformité/sécurité" },
      { label: "Question centrale", a: "Quel résultat métier est bloqué et pourquoi ?", b: "Le système est-il sécurisé et performant ?" },
      { label: "Complémentarité", a: "S'appuie souvent sur un audit technique en parallèle", b: "Peut alimenter un audit digital en amont" },
    ],
    optionAText: [
      "Un audit digital part des cinq questions structurantes : quel résultat métier est visé, comment il est produit aujourd'hui, quelles données existent, quelles contraintes s'imposent, qui devra changer sa façon de travailler.",
      "Il aboutit à une priorisation de chantiers business, pas seulement à une liste de vulnérabilités techniques.",
    ],
    optionBText: [
      "Un audit informatique classique se concentre sur l'état du système : sécurité, performance, dette technique, conformité. Une analyse indispensable mais qui ne questionne pas nécessairement l'alignement avec les résultats métier.",
      "Sans être relié à un objectif métier explicite, un audit purement technique peut déboucher sur des recommandations correctes mais mal priorisées du point de vue business.",
    ],
    limits:
      "Les deux audits ne s'opposent pas : un audit digital bien mené s'appuie souvent sur des constats techniques réels, et un audit informatique gagne à être relié à des objectifs métier explicites.",
    faq: [
      {
        question: "Faut-il faire les deux audits ?",
        answer:
          "Selon le contexte, oui. Un audit digital identifie les priorités business ; un audit informatique valide la faisabilité et les risques techniques des chantiers retenus.",
      },
      {
        question: "Par lequel commencer ?",
        answer:
          "Généralement par l'audit digital, pour éviter d'investir du temps technique sur des sujets qui ne répondent à aucun résultat métier prioritaire.",
      },
    ],
  },
  {
    slug: "automatisation-vs-ia-que-choisir",
    title: "Automatisation vs IA : que choisir en premier",
    tagline: "Deux leviers différents, pas interchangeables",
    conclusion:
      "L'automatisation (règles déterministes, workflows, intégrations) convient aux tâches stables et répétitives avec des règles connues. L'IA convient quand il faut interpréter du langage, classer, résumer ou décider dans l'incertitude. Dans la majorité des cas, l'automatisation doit être traitée en premier : elle simplifie le terrain avant que l'IA n'y apporte une réelle valeur.",
    optionALabel: "Automatisation d'abord",
    optionBLabel: "IA d'abord",
    criteria: [
      { label: "Adaptée quand", a: "Règles stables, volume significatif, exceptions gérables", b: "Interprétation, langage, décision probabiliste" },
      { label: "Prévisibilité du résultat", a: "Élevée (comportement déterministe)", b: "Variable, nécessite évaluation et contrôle" },
      { label: "Coût de mise en œuvre initial", a: "Souvent plus faible", b: "Peut être plus élevé (données, évaluation, garde-fous)" },
      { label: "Risque si le processus est mal défini", a: "Automatise un problème existant plus vite", b: "Peut masquer un manque de données fiables" },
    ],
    optionAText: [
      "Un processus stable, répétitif et bien défini est le candidat naturel de l'automatisation classique : transfert de données, workflow, intégration API. Le résultat reste prévisible et contrôlable.",
      "Automatiser en premier permet aussi de nettoyer et structurer les données. Un prérequis souvent indispensable avant tout projet IA sérieux.",
    ],
    optionBText: [
      "L'IA devient pertinente quand la tâche demande une interprétation que des règles fixes ne peuvent pas couvrir : résumé, classification nuancée, recherche documentaire, assistance conversationnelle.",
      "Déployer l'IA sur un processus mal défini ou sur des données de mauvaise qualité produit rarement un résultat fiable. D'où l'intérêt de traiter d'abord l'automatisation et la qualité des données.",
    ],
    limits:
      "Automatisation et IA se combinent souvent dans un même workflow (ex. extraction automatique + classification IA + validation humaine). Cette page aide à cadrer la priorité initiale, pas à opposer les deux durablement.",
    faq: [
      {
        question: "L'IA peut-elle remplacer l'automatisation classique ?",
        answer:
          "Rarement de façon avantageuse. Pour une tâche à règles stables, un workflow déterministe reste plus prévisible, plus rapide et moins coûteux qu'un modèle IA.",
      },
      {
        question: "Peut-on combiner les deux dans un même processus ?",
        answer:
          "Oui, c'est même l'approche la plus courante : l'automatisation gère le flux et les règles simples, l'IA intervient sur les étapes qui demandent de l'interprétation, avec une validation humaine sur les cas sensibles.",
      },
    ],
  },
  {
    slug: "agence-locale-vs-prestataire-a-distance",
    title: "Agence locale vs prestataire à distance pour la transformation digitale",
    tagline: "La proximité n'est plus toujours le premier critère",
    conclusion:
      "Une agence locale offre une présence physique et une connaissance directe du contexte régional. Un prestataire à distance, comme Audyxa, peut couvrir un périmètre géographique plus large (France et Afrique francophone) avec une méthode identique partout, à condition que la communication et le pilotage à distance soient bien organisés.",
    optionALabel: "Prestataire à distance",
    optionBLabel: "Agence locale",
    criteria: [
      { label: "Couverture géographique", a: "Large, non limitée à une zone physique", b: "Limitée à la zone d'implantation" },
      { label: "Cohérence de méthode sur plusieurs pays", a: "Facilitée par une équipe unique", b: "Peut nécessiter plusieurs prestataires locaux" },
      { label: "Présence physique ponctuelle", a: "À organiser explicitement si nécessaire", b: "Naturellement disponible" },
      { label: "Coût de structure", a: "Souvent plus maîtrisé", b: "Peut inclure des frais de présence locale" },
    ],
    optionAText: [
      "Un prestataire à distance bien organisé peut appliquer la même méthode de diagnostic et de déploiement sur plusieurs marchés, ce qui évite la dispersion de qualité entre plusieurs agences locales différentes.",
      "Le point de vigilance est l'organisation du pilotage à distance : rythme des points, outils de suivi partagés, clarté sur les livrables.",
    ],
    optionBText: [
      "Une agence locale connaît directement le contexte réglementaire, culturel et commercial de sa zone, un atout pour des sujets fortement ancrés localement (implantation physique, réseau local).",
      "La limite apparaît dès qu'une organisation opère sur plusieurs pays : coordonner plusieurs agences locales différentes peut fragmenter la méthode et la qualité d'exécution.",
    ],
    limits:
      "Pour une activité opérant sur un seul site physique avec des besoins très locaux, une agence de proximité peut rester pertinente. Le bon choix dépend de l'étendue géographique réelle de votre organisation.",
    faq: [
      {
        question: "Un prestataire à distance peut-il intervenir sur plusieurs pays d'Afrique francophone en même temps ?",
        answer:
          "Oui, c'est un des intérêts du modèle à distance : appliquer la même méthode et les mêmes standards sur plusieurs marchés sans multiplier les prestataires.",
      },
      {
        question: "Comment se passe le pilotage à distance concrètement ?",
        answer:
          "Via des points réguliers, des livrables partagés et une communication structurée dès la note de cadrage. Les mêmes principes de gouvernance que pour une mission locale, adaptés au distanciel.",
      },
    ],
  },
  {
    slug: "meilleur-consultant-transformation-digitale-2026",
    title: "Meilleur consultant en transformation digitale en 2026",
    tagline: "Il n'existe pas de classement objectif universel",
    conclusion:
      "Il n'existe pas de \"meilleur\" consultant en transformation digitale dans l'absolu : la question pertinente est quel consultant correspond le mieux à votre contexte, votre secteur, votre zone géographique et votre budget. Cette page donne les critères de sélection à appliquer plutôt qu'un classement fabriqué.",
    optionALabel: "Critères qui comptent",
    optionBLabel: "Critères qui ne suffisent pas seuls",
    criteria: [
      { label: "Méthode documentée et vérifiable", a: "Oui, critère déterminant", b: "Notoriété seule, sans méthode visible" },
      { label: "Continuité conseil/exécution", a: "Clarifiée dès le départ", b: "Taille de l'entreprise seule" },
      { label: "Couverture géographique réelle", a: "Confirmée pour votre zone", b: "Nombre d'années d'existence seul" },
      { label: "Preuves d'expertise concrètes", a: "Contenu, méthodologie, auteur identifiable", b: "Avis non vérifiables ou génériques" },
    ],
    optionAText: [
      "Les critères qui prédisent réellement la qualité d'une mission : une méthode documentée et explicable, une continuité entre le diagnostic et l'exécution, une couverture géographique confirmée pour votre marché, et des preuves d'expertise vérifiables (pas seulement déclarées).",
      "Demander à un consultant d'expliquer sa méthode avant de parler d'outils reste le test le plus fiable, quel que soit le classement ou la notoriété affichée.",
    ],
    optionBText: [
      "La taille de l'entreprise, son ancienneté ou sa notoriété ne garantissent pas, seules, l'adéquation avec votre besoin spécifique. Ce sont des indices, pas des preuves.",
      "Des avis non vérifiables ou des classements sans méthodologie publiée doivent être pris avec prudence : ils ne remplacent pas une vérification directe de la méthode et des preuves d'expertise.",
    ],
    limits:
      "Audyxa ne prétend pas être objectivement \"le meilleur\" sur ce marché : cette page explique la méthode de sélection à appliquer, et présente en toute transparence l'approche d'Audyxa (méthode documentée, conseil + exécution réunis, zone France et Afrique francophone) comme un cas d'application de ces critères, pas comme un verdict.",
    faq: [
      {
        question: "Pourquoi Audyxa ne publie-t-il pas de classement des meilleurs consultants ?",
        answer:
          "Parce qu'un tel classement nécessiterait des données comparatives vérifiées sur des prestataires tiers que nous ne possédons pas. Nous préférons donner des critères de sélection utilisables directement.",
      },
      {
        question: "Comment vérifier la méthode d'un consultant avant de le choisir ?",
        answer:
          "En lui demandant d'expliquer concrètement comment il diagnostique, priorise et mesure les résultats. Une méthode réelle se décrit précisément, un discours commercial reste généralement vague.",
      },
    ],
  },
  {
    slug: "quand-faire-appel-a-un-consultant-digital",
    title: "Quand faire appel à un consultant en digitalisation",
    tagline: "Les signaux qui indiquent le bon moment",
    conclusion:
      "Faire appel à un consultant en digitalisation est pertinent quand des symptômes précis apparaissent (pertes de temps répétées, données peu fiables, outils qui ne communiquent pas entre eux, décisions bloquées faute de visibilité), pas simplement parce qu'une échéance ou une mode technologique approche.",
    optionALabel: "Signes qu'il est temps d'agir",
    optionBLabel: "Cas où ce n'est pas encore le bon moment",
    criteria: [
      { label: "Pertes de temps identifiées", a: "Récurrentes et mesurables", b: "Non identifiées ou anecdotiques" },
      { label: "Décisions bloquées", a: "Faute de données fiables", b: "Pas de décision urgente en attente" },
      { label: "Outils existants", a: "Ne communiquent pas entre eux", b: "Fonctionnent correctement pour le besoin actuel" },
      { label: "Objectif du projet", a: "Résultat métier clair à atteindre", b: "\"Faire comme les autres\" sans objectif précis" },
    ],
    optionAText: [
      "Les signaux les plus fiables : des tâches répétitives qui mobilisent du temps chaque semaine, des données dispersées ou peu fiables qui bloquent une décision, des outils achetés mais peu utilisés, ou une direction qui ne sait plus où concentrer ses efforts numériques.",
      "Dans ces situations, un diagnostic externe permet de sortir d'une vision uniquement interne et de prioriser objectivement les chantiers à traiter.",
    ],
    optionBText: [
      "Lancer une mission de digitalisation \"parce que c'est le moment\" ou pour suivre une tendance, sans problème métier identifié, produit rarement un résultat mesurable.",
      "Si l'organisation fonctionne correctement avec ses outils actuels et qu'aucune perte de temps ou de qualité n'est constatée, il peut être plus utile d'attendre qu'un vrai déclencheur apparaisse.",
    ],
    limits:
      "Cette page donne des repères généraux ; seul un échange direct permet de confirmer si le contexte précis d'une organisation justifie une mission dès maintenant.",
    faq: [
      {
        question: "Faut-il attendre d'avoir un gros budget pour commencer ?",
        answer:
          "Non. Un premier diagnostic ciblé peut être proportionné à un budget limité. L'important est de commencer par identifier les priorités réelles avant d'investir davantage.",
      },
      {
        question: "Un petit problème justifie-t-il déjà un consultant ?",
        answer:
          "Si le problème est récurrent et mesurable (temps perdu chaque semaine, erreurs répétées), oui. La taille du problème compte moins que sa répétition et son impact cumulé.",
      },
    ],
  },
  {
    slug: "n8n-vs-make-vs-zapier",
    title: "n8n vs Make vs Zapier : comparatif 2026",
    tagline: "Trois modèles différents, pas trois versions du même outil",
    conclusion:
      "n8n, Make et Zapier sont trois plateformes d'automatisation reposant sur des modèles distincts : n8n est open source et auto-hébergeable, Make et Zapier sont des services cloud facturés respectivement en crédits et en tâches. Aucun des trois n'est objectivement supérieur aux deux autres : le bon choix dépend du volume d'automatisations prévu, du besoin d'auto-hébergement et de la devise de facturation acceptée par l'entreprise.",
    options: ["n8n", "Make", "Zapier"],
    comparisonTable: [
      { criterion: "Modèle", values: ["Open source, auto-hébergeable ou cloud", "Cloud uniquement", "Cloud uniquement"] },
      { criterion: "Palier gratuit", values: ["Version communautaire gratuite, auto-hébergée, exécutions illimitées", "1 000 crédits/mois, 2 scénarios actifs", "100 tâches/mois, Zap à 2 étapes maximum"] },
      { criterion: "Premier palier cloud payant", values: ["20 €/mois (annuel), 2 500 exécutions/mois", "9 $/mois (annuel), 10 000 crédits/mois", "19,99 $/mois (annuel), 750 tâches/mois"] },
      { criterion: "Palier supérieur", values: ["667 €/mois (annuel), 40 000 exécutions/mois, self-hosted", "29 $/mois (annuel), palier Teams, 10 000 crédits/mois", "69 $/mois (annuel), palier Team, 2 000 tâches, 25 utilisateurs"] },
      { criterion: "Unité facturée", values: ["Exécution de workflow", "Crédit par module exécuté", "Tâche par étape réussie"] },
      { criterion: "Devise de facturation", values: ["Euro", "Dollar US", "Dollar US"] },
      { criterion: "Bibliothèque d'intégrations", values: ["Plus de 400 intégrations natives", "Large bibliothèque d'applications", "La plus large bibliothèque du marché"] },
      { criterion: "Auto-hébergement possible", values: ["Oui", "Non", "Non"] },
    ],
    optionProfiles: [
      {
        label: "n8n",
        paragraphs: [
          "n8n est distribué sous licence fair-code : le code source est public et la version communautaire, auto-hébergée sur un serveur choisi par l'entreprise, reste gratuite avec un nombre illimité d'exécutions (n8n.io, page tarifs consultée en septembre 2026).",
          "Cette formule convient aux entreprises qui disposent d'un minimum de compétence technique et veulent maîtriser où sont hébergées leurs données, au prix d'une responsabilité d'administration serveur assumée en interne.",
        ],
      },
      {
        label: "Make",
        paragraphs: [
          "Make (anciennement Integromat) propose un éditeur visuel de scénarios facturé en crédits, avec un palier gratuit de 1 000 crédits par mois et des paliers payants à partir de 9 $/mois en facturation annuelle (make.com, page tarifs consultée en septembre 2026).",
          "Le système de crédits, qui a remplacé les anciennes « opérations » en août 2025, facture chaque module exécuté : le coût réel dépend donc de la complexité de chaque scénario, pas seulement de son nombre d'exécutions.",
        ],
      },
      {
        label: "Zapier",
        paragraphs: [
          "Zapier facture à la tâche (chaque étape réussie d'un Zap), avec un palier gratuit de 100 tâches par mois et un palier Professionnel à partir de 19,99 $/mois pour 750 tâches en facturation annuelle (zapier.com/pricing, consulté en septembre 2026).",
          "Sa bibliothèque d'applications préconnectées reste la plus étendue des trois outils, un atout pour une équipe qui veut connecter rapidement des services grand public sans développement.",
        ],
      },
    ],
    limits:
      "Ce comparatif présente des caractéristiques techniques et tarifaires publiques des trois éditeurs, sans lien commercial d'Audyxa avec aucun d'entre eux. Audyxa n'est ni éditeur ni revendeur de ces outils : notre rôle consiste à aider une entreprise à choisir et à configurer l'outil le plus adapté à son contexte, pas à promouvoir l'un plutôt que l'autre.",
    relatedMethodSlugs: ["automatisation-api-rpa-low-code"],
    faq: [
      {
        question: "Quel est le moins cher des trois outils pour une PME ?",
        answer:
          "Cela dépend entièrement du volume d'automatisations prévu : sur un volume faible, les trois paliers gratuits ou d'entrée de gamme sont comparables. n8n auto-hébergé devient généralement le plus économique à volume élevé, au prix d'une administration technique interne.",
      },
      {
        question: "Ces outils fonctionnent-ils sans compétence en programmation ?",
        answer:
          "Oui pour la majorité des cas d'usage : les trois proposent un éditeur visuel sans code. Une compétence technique devient utile surtout pour l'auto-hébergement de n8n ou des scénarios avancés.",
      },
      {
        question: "Peut-on payer ces outils en monnaie locale ouest-africaine ?",
        answer:
          "D'après leurs pages tarifaires officielles, les trois plateformes facturent en euro (n8n) ou en dollar américain (Make, Zapier), généralement via une carte bancaire internationale, à vérifier au moment de la souscription.",
      },
    ],
  },
  {
    slug: "odoo-vs-zoho-vs-salesforce",
    title: "Odoo vs Zoho vs Salesforce : quel ERP/CRM pour une PME ouest-africaine",
    tagline: "Trois logiques de produit, trois publics cibles différents",
    conclusion:
      "Odoo, Zoho et Salesforce répondent à des besoins ERP/CRM avec des logiques de produit différentes : Odoo propose une suite modulaire avec une édition open source auto-hébergeable, Zoho une gamme d'applications à tarification progressive pensée pour les PME, et Salesforce une plateforme CRM haut de gamme surtout dimensionnée pour des organisations plus grandes ou en forte croissance. Le bon choix dépend du nombre de modules réellement nécessaires, du budget par utilisateur et du besoin ou non de personnalisation poussée.",
    options: ["Odoo", "Zoho", "Salesforce"],
    comparisonTable: [
      { criterion: "Positionnement", values: ["Suite modulaire ERP+CRM, open source", "Suite d'applications CRM/bureautique, orientée PME", "Plateforme CRM haut de gamme, orientée grande entreprise"] },
      { criterion: "Palier gratuit", values: ["Une application gratuite, utilisateurs illimités", "Gratuit jusqu'à 3 utilisateurs", "Free Suite à 0 $/utilisateur/mois"] },
      { criterion: "Premier palier payant", values: ["7,95 €/utilisateur/mois (annuel), toutes les applications", "Tarification par palier (Standard, Professional...), montant variable selon la devise de facturation", "25 $/utilisateur/mois (Starter Suite, annuel)"] },
      { criterion: "Palier avancé", values: ["10,90 €/utilisateur/mois (annuel), auto-hébergement et API externe inclus", "Paliers Enterprise/Ultimate, avec IA et gestion multi-équipe", "Jusqu'à 550 $/utilisateur/mois (palier Max, annuel)"] },
      { criterion: "Auto-hébergement / open source", values: ["Oui, édition Community open source téléchargeable", "Non", "Non"] },
      { criterion: "Étendue fonctionnelle", values: ["Plusieurs centaines d'applications (CRM, ventes, stock, comptabilité, RH...)", "Suite d'applications CRM et bureautique interconnectées", "Modules CRM, avec extensions payantes (IA, analyse de revenu...)"] },
    ],
    optionProfiles: [
      {
        label: "Odoo",
        paragraphs: [
          "Odoo propose une suite modulaire couvrant CRM, ventes, e-commerce, comptabilité, stock, ressources humaines et gestion de projet, avec une édition Community open source téléchargeable et auto-hébergeable, en plus des offres cloud payantes à partir de 7,95 euros par utilisateur et par mois en facturation annuelle (odoo.com/pricing, consulté en septembre 2026).",
          "Cette modularité convient à une PME qui veut faire évoluer son système par étapes, module par module, plutôt que de payer pour des fonctions inutilisées dès le départ.",
        ],
      },
      {
        label: "Zoho",
        paragraphs: [
          "Zoho propose une gamme de paliers (Free, Standard, Professional, Enterprise, Ultimate) avec un niveau gratuit permanent limité à 3 utilisateurs, incluant la gestion de contacts, l'automatisation de workflows et des rapports standards (zoho.com/crm, consulté en septembre 2026).",
          "Les tarifs précis dépendent de la devise et de la région de facturation affichées sur le site officiel : mieux vaut demander un devis dans la devise réellement facturée à l'entreprise plutôt que de se fier à un montant affiché par défaut sur une version régionale du site.",
        ],
      },
      {
        label: "Salesforce",
        paragraphs: [
          "Salesforce propose six paliers pour son Sales Cloud, de Free Suite (0 $/utilisateur/mois) jusqu'à Max (550 $/utilisateur/mois en facturation annuelle), avec des modules d'intelligence artificielle et d'analyse de revenu vendus séparément (salesforce.com/editions-pricing, consulté en septembre 2026).",
          "Ce niveau de prix et de sophistication cible surtout des organisations avec un budget IT structuré et des processus commerciaux complexes à plusieurs équipes, plus qu'une petite structure démarrant sa digitalisation commerciale.",
        ],
      },
    ],
    limits:
      "Ce comparatif présente des caractéristiques publiques des trois éditeurs à la date de consultation, sans lien commercial d'Audyxa avec aucun d'entre eux. Les tarifs affichés varient selon la devise, la région de facturation et les promotions en cours : ils doivent être vérifiés directement auprès de chaque éditeur avant toute décision d'achat, pas déduits de ce tableau seul.",
    relatedMethodSlugs: ["operations-erp-supply-chain-iot", "crm-vente-service-client-omnicanal"],
    faq: [
      {
        question: "Odoo est-il vraiment gratuit ?",
        answer:
          "L'édition Community est open source et gratuite en auto-hébergement, mais l'entreprise doit alors gérer elle-même l'hébergement, les mises à jour et la sécurité. L'offre cloud « One App Free » reste, elle, limitée à une seule application.",
      },
      {
        question: "Salesforce est-il adapté à une petite PME ouest-africaine ?",
        answer:
          "Cela dépend du budget et de la complexité réelle des processus commerciaux à gérer : sa tarification et ses fonctions avancées ciblent surtout des organisations avec plusieurs équipes commerciales structurées, pas une très petite structure qui démarre sa digitalisation commerciale.",
      },
      {
        question: "Peut-on migrer d'un outil à l'autre facilement ?",
        answer:
          "Techniquement oui, via des outils d'export et d'import de données, mais chaque migration demande de revalider les workflows, automatisations et intégrations existantes : mieux vaut choisir avec un horizon de plusieurs années plutôt que de prévoir de changer fréquemment.",
      },
    ],
  },
  {
    slug: "consultant-independant-vs-cabinet-vs-agence-digitale",
    title: "Consultant indépendant vs cabinet de conseil vs agence digitale : que choisir",
    tagline: "Trois modèles d'accompagnement, un choix qui dépend de votre besoin réel",
    conclusion:
      "Un consultant indépendant offre proximité et coût maîtrisé mais dépend d'une seule personne. Un cabinet de conseil classique apporte plusieurs profils et une méthode structurée mais sépare souvent le diagnostic de l'exécution. Une agence digitale exécute des livrables techniques mais approfondit rarement le diagnostic de transformation en amont. Le modèle conseil et exécution réunis, que revendique Audyxa, cherche à combiner la continuité d'une petite structure avec la diversité de compétences d'une équipe, sans que ce choix soit le seul valable pour toutes les situations.",
    options: ["Consultant indépendant", "Cabinet de conseil classique", "Agence digitale"],
    comparisonTable: [
      { criterion: "Coût typique", values: ["Généralement le plus accessible", "Généralement plus élevé", "Variable selon le livrable technique demandé"] },
      { criterion: "Diversité de compétences", values: ["Limitée à une seule personne", "Plusieurs profils complémentaires", "Souvent orientée exécution technique (développement, design, publicité)"] },
      { criterion: "Continuité de la mission", values: ["Risque de rupture en cas d'indisponibilité", "Peut rompre entre diagnostic et exécution", "Rarement structurée autour d'un diagnostic amont"] },
      { criterion: "Profondeur du diagnostic initial", values: ["Variable selon l'expérience de la personne", "Généralement approfondie", "Souvent limitée, le projet démarre du besoin déjà exprimé"] },
      { criterion: "Exécution technique incluse", values: ["Variable selon les compétences propres", "Souvent déléguée à un tiers", "Oui, c'est le cœur de l'offre"] },
      { criterion: "Adapté pour", values: ["Mission ciblée et bien cadrée", "Diagnostic structurant multi-sujets", "Livrable technique précis déjà cadré en interne"] },
    ],
    optionProfiles: [
      {
        label: "Consultant indépendant",
        paragraphs: [
          "Un consultant indépendant expérimenté offre un contact direct et un coût généralement inférieur à celui d'une structure, avec une décision rapide sans coordination interne à gérer.",
          "La limite structurelle reste la dépendance à une seule personne : disponibilité, absence, et étendue réelle des compétences maîtrisées, à vérifier avant d'engager une mission critique.",
        ],
      },
      {
        label: "Cabinet de conseil classique",
        paragraphs: [
          "Un cabinet de conseil classique mobilise plusieurs profils complémentaires et une méthode généralement documentée, un atout pour un diagnostic structurant impliquant plusieurs fonctions de l'entreprise à la fois.",
          "La limite fréquemment observée : la recommandation est produite par une équipe qui ne l'exécute pas toujours elle-même, ce qui peut faire perdre du contexte au moment du passage de relais vers l'exécution.",
        ],
      },
      {
        label: "Agence digitale",
        paragraphs: [
          "Une agence digitale excelle sur l'exécution d'un livrable technique précis (site web, campagne publicitaire, identité visuelle) quand le besoin est déjà clairement défini en amont par l'entreprise.",
          "Sa limite structurelle : elle part généralement du besoin exprimé par le client plutôt que de le challenger par un diagnostic de transformation digitale approfondi, ce qui peut faire exécuter une bonne solution à un mauvais problème.",
        ],
      },
    ],
    limits:
      "Cette page compare des modèles d'organisation, pas des prestataires nommés individuellement : chacun de ces trois modèles reste légitime selon le contexte. Audyxa se positionne sur le modèle conseil et exécution réunis (proche du consultant indépendant sur la continuité, proche du cabinet sur la diversité de compétences mobilisées), un choix assumé et expliqué ici en toute transparence, pas présenté comme le seul modèle valable pour toutes les situations.",
    relatedMethodSlugs: ["mission-de-lexpert"],
    faq: [
      {
        question: "Le modèle conseil et exécution réunis convient-il à toutes les tailles d'entreprise ?",
        answer:
          "Il convient particulièrement aux PME et structures en croissance qui veulent éviter de coordonner plusieurs prestataires distincts. De grandes organisations peuvent aussi le choisir pour des chantiers ciblés, en complément d'autres partenaires.",
      },
      {
        question: "Une agence digitale peut-elle remplacer un diagnostic de transformation digitale ?",
        answer:
          "Rarement à elle seule : son cœur de métier reste l'exécution d'un livrable défini, pas la remise en question du besoin initial. Un diagnostic préalable, mené par un consultant ou un cabinet, reste utile avant de lancer une exécution technique coûteuse.",
      },
      {
        question: "Faut-il toujours choisir le modèle le moins cher ?",
        answer:
          "Non. Le coût doit se comparer au périmètre réel couvert et à la continuité assurée entre les phases, pas être jugé isolément : une mission mal cadrée coûte souvent plus cher à corriger ensuite qu'un accompagnement initial légèrement plus complet.",
      },
    ],
  },
];

export function getDecisionPage(slug: string): DecisionPage | undefined {
  return DECISION_PAGES.find((d) => d.slug === slug);
}
