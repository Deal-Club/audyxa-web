/**
 * Données d'enrichissement éditorial des chapitres de la méthode.
 *
 * Le contenu de fond vit dans `methode-content.ts` (reformulation du cours
 * "Digitalisation des Entreprises"). Ce fichier ajoute la couche de mise en
 * page : question centrale, points clés, à-retenir, pièges, application
 * Audyxa et FAQ. Tout est dérivé du chapitre correspondant — aucun chiffre
 * ni exemple n'est ajouté qui ne figure pas déjà dans la source.
 */

export type PillarKey = "cadrage" | "socle" | "croissance" | "pilotage";

export interface Pillar {
  key: PillarKey;
  label: string;
  title: string;
  description: string;
}

export const PILLARS: Pillar[] = [
  {
    key: "cadrage",
    label: "Cadrage",
    title: "Comprendre avant de choisir",
    description:
      "Diagnostiquer la maturité, conduire la mission, cartographier les processus. Aucune technologie n'entre dans le périmètre avant que le résultat métier, la donnée et le risque soient clairs.",
  },
  {
    key: "socle",
    label: "Socle technique",
    title: "Construire un système fiable",
    description:
      "Architecture, données, infrastructure, automatisation, IA et cybersécurité : les capacités sur lesquelles reposent tous les usages métier.",
  },
  {
    key: "croissance",
    label: "Croissance",
    title: "Faire venir et garder les clients",
    description:
      "Expérience client, acquisition, CRM, opérations et modèle économique : la partie du système d'information que le client et le marché perçoivent réellement.",
  },
  {
    key: "pilotage",
    label: "Pilotage",
    title: "Prouver la valeur et tenir dans le temps",
    description:
      "Conduite du changement, portefeuille d'initiatives, KPI et restitution : ce qui transforme un projet livré en résultat mesuré.",
  },
];

export interface MethodChapterExtras {
  pillar: PillarKey;
  /** Question centrale à laquelle le chapitre répond (accroche + AEO). */
  question: string;
  keyPoints: { label: string; text: string }[];
  retenir: string[];
  pieges: string[];
  application: string;
  faq: { question: string; answer: string }[];
}

export const METHOD_EXTRAS: Record<string, MethodChapterExtras> = {
  "fondements-et-maturite-numerique": {
    pillar: "cadrage",
    question: "Comment savoir où en est vraiment une entreprise avant de lancer un projet digital ?",
    keyPoints: [
      {
        label: "Trois niveaux distincts",
        text: "Numériser un document, digitaliser un processus et transformer une entreprise ne sont pas la même chose et n'engagent pas les mêmes moyens.",
      },
      {
        label: "Cinq questions préalables",
        text: "Résultat visé, fonctionnement actuel, données de mesure, contraintes, personnes concernées : tant qu'elles n'ont pas de réponse, le choix d'outil est prématuré.",
      },
      {
        label: "Une grille en dix dimensions",
        text: "La maturité se mesure par capacité — stratégie, client, processus, données, sécurité, compétences — et non au nombre de logiciels installés.",
      },
    ],
    retenir: [
      "Un score global de maturité ne suffit jamais : c'est le détail par dimension, appuyé par des preuves, qui indique où agir.",
      "Une demande formulée en « nous voulons un CRM » décrit une solution, pas un problème : il faut remonter à la cause.",
      "Le business case repose sur quatre familles de bénéfices : revenus supplémentaires, coûts évités, capacité libérée, risque réduit.",
      "Une heure libérée n'est un gain économique que si l'équipe peut réellement la réaffecter à autre chose.",
    ],
    pieges: [
      "Noter la maturité à partir des seules réponses de la direction, sans observer le terrain.",
      "Confondre le nombre de logiciels avec le niveau réel de digitalisation.",
      "Calculer un ROI en ne comptant que le coût des licences, sans intégration, migration, formation ni maintenance.",
      "Proposer de l'IA sur un processus instable ou dont les données sont incomplètes.",
    ],
    application:
      "Chaque mission Audyxa commence par ce diagnostic : nous notons les dix dimensions avec au moins une preuve par note, puis nous chiffrons deux ou trois chantiers prioritaires plutôt qu'une liste exhaustive de recommandations.",
    faq: [
      {
        question: "Quelle différence entre numérisation et transformation digitale ?",
        answer:
          "La numérisation convertit une information analogique en format numérique. La digitalisation revoit l'exécution d'un processus grâce aux capacités numériques. La transformation fait évoluer ensemble plusieurs capacités — modèle opérationnel, données, compétences, gouvernance — et se mesure en résultat métier.",
      },
      {
        question: "Comment évalue-t-on la maturité numérique d'une PME ?",
        answer:
          "Avec une grille multi-dimensions notée de 0 (absent) à 5 (optimisé), appuyée sur des preuves mesurables : temps de cycle, taux d'erreur, couverture MFA, qualité des données, taux d'adoption du CRM, disponibilité des systèmes ou délai de réponse client.",
      },
      {
        question: "Comment calcule-t-on le retour sur investissement d'un projet de digitalisation ?",
        answer:
          "Gain annuel brut = économies annuelles + marge additionnelle + pertes évitées. Le TCO intègre licences, développement, intégration, infrastructure, migration, support, formation, sécurité et maintenance. ROI simple = (gain annuel net − investissement initial) / investissement initial, et le payback correspond à l'investissement initial divisé par le gain mensuel net.",
      },
    ],
  },
  "mission-de-lexpert": {
    pillar: "cadrage",
    question: "Comment se déroule concrètement une mission de digitalisation, du premier rendez-vous au suivi ?",
    keyPoints: [
      {
        label: "Six étapes en boucle",
        text: "Cadrer, diagnostiquer, prioriser, concevoir, déployer, mesurer — les résultats mesurés réalimentent la priorisation suivante.",
      },
      {
        label: "Quatre formes de preuve",
        text: "Entretien, observation, données et documentation : chaque constat est étayé, jamais formulé comme une impression générale.",
      },
      {
        label: "Une sortie de mission organisée",
        text: "Documentation, inventaire des accès, procédure d'incident et tableau de bord KPI, avec des revues à deux semaines, 30 et 90 jours.",
      },
    ],
    retenir: [
      "Une technologie n'entre dans la mission qu'après clarification du résultat métier, du processus, des données et du risque.",
      "Chaque constat suit la structure fait → impact → cause probable → preuve → risque ou opportunité → vérification.",
      "Le score de priorisation proposé pondère valeur 30 %, alignement 20 %, urgence 15 %, faisabilité 15 %, données 10 %, adoption 10 %.",
      "Un pilote teste les inconnues les plus risquées, avec des critères Go / No-Go définis avant de commencer.",
    ],
    pieges: [
      "Rédiger un diagnostic depuis une recherche publique, sans accès aux opérations réelles.",
      "Présenter une seule option lorsqu'un choix d'architecture engage l'entreprise pour plusieurs années.",
      "Construire un pilote démonstratif au lieu d'un pilote qui lève les vrais risques.",
      "Considérer la mission terminée à la mise en production, sans transfert ni suivi.",
    ],
    application:
      "Nous formalisons systématiquement une note de cadrage avant tout travail technique : contexte, objectifs, périmètre, hors-périmètre, sponsor, accès nécessaires, risques et calendrier. C'est ce document qui protège le budget du client autant que la qualité du livrable.",
    faq: [
      {
        question: "Que contient une note de cadrage de mission ?",
        answer:
          "Contexte, objectifs, résultats attendus, périmètre et hors-périmètre, parties prenantes, méthode, accès nécessaires, risques, calendrier de diagnostic et gouvernance de mission.",
      },
      {
        question: "Comment prioriser les initiatives issues du diagnostic ?",
        answer:
          "En les regroupant par capacité, puis en attribuant à chacune un objectif, un owner, une valeur attendue, un effort, un coût, un risque, des dépendances et un KPI. La matrice valeur/effort est complétée par un score pondéré, car un projet à forte valeur peut être bloqué par la qualité des données ou un contrat en cours.",
      },
      {
        question: "Que prévoit une feuille de route 30-60-90 jours ?",
        answer:
          "Jours 1 à 30 : comprendre et sécuriser. Jours 31 à 60 : simplifier et connecter. Jours 61 à 90 : prouver et industrialiser, en mesurant les pilotes et en validant la feuille de route à 12 mois.",
      },
    ],
  },
  "processus-bpmn-lean-refonte": {
    pillar: "cadrage",
    question: "Faut-il automatiser un processus ou le simplifier d'abord ?",
    keyPoints: [
      {
        label: "Bout en bout",
        text: "Le client subit le délai total du parcours, pas la performance de chaque service pris séparément.",
      },
      {
        label: "AS-IS mesuré",
        text: "Volumes, temps de travail, temps d'attente, reprises, transferts et saisies redondantes se mesurent avant toute refonte.",
      },
      {
        label: "Lean puis automatisation",
        text: "Automatiser un processus inefficace revient à reproduire le problème plus vite et à plus grande échelle.",
      },
    ],
    retenir: [
      "Chaque processus a besoin d'un owner capable d'arbitrer le flux de bout en bout.",
      "Le temps de cycle inclut les attentes ; le temps de traitement ne mesure que le travail actif.",
      "BPMN 2.0.2 fournit un langage commun, mais un diagramme en couloirs suffit souvent sur une mission courte.",
      "Une règle déterministe est préférable à l'IA chaque fois que la décision peut s'écrire explicitement.",
    ],
    pieges: [
      "Analyser chaque service isolément et manquer les transferts, qui concentrent souvent les délais.",
      "Concevoir un TO-BE sans avoir chiffré l'AS-IS : le gain devient invérifiable.",
      "Modéliser un cas théorique plutôt qu'un dossier réel et récent.",
      "Ignorer les exceptions, qui finissent par constituer l'essentiel de la charge.",
    ],
    application:
      "Nous partons toujours d'un dossier réel traité récemment, chronomètre en main, avant de dessiner quoi que ce soit. La version simplifiée du processus est validée avec les personnes qui l'exécutent avant d'être outillée.",
    faq: [
      {
        question: "Qu'est-ce qu'une cartographie AS-IS / TO-BE ?",
        answer:
          "L'AS-IS décrit le processus tel qu'il fonctionne réellement — déclencheur, étapes, rôles, systèmes, données, décisions, exceptions, temps de travail et d'attente. Le TO-BE décrit la version cible simplifiée, conçue après mesure de l'existant.",
      },
      {
        question: "Quelles mesures prendre avant de refondre un processus ?",
        answer:
          "Volume par période, temps de travail actif, temps d'attente, taux de reprise, taux d'erreur, nombre de transferts, nombre de saisies du même champ, coût par dossier, taux d'exception et satisfaction des utilisateurs.",
      },
      {
        question: "Quand utiliser une règle plutôt que l'IA dans un processus ?",
        answer:
          "Dès que la décision peut s'écrire sous forme de conditions explicites et vérifiables. L'IA se justifie quand l'entrée est peu structurée ou la variabilité trop forte pour être couverte par des règles.",
      },
    ],
  },
  "architecture-systeme-information": {
    pillar: "socle",
    question: "Comment structurer un système d'information sans empiler les outils ?",
    keyPoints: [
      {
        label: "Six couches",
        text: "Canaux, expérience, métier, intégration, data et IA, infrastructure — sécurité, identité et observabilité restant transversales.",
      },
      {
        label: "Une source de vérité par donnée",
        text: "Décider quel système possède quelle donnée évite la synchronisation bidirectionnelle et ses conflits permanents.",
      },
      {
        label: "Quatre options d'implémentation",
        text: "Acheter, configurer, intégrer ou développer : le choix se justifie par le TCO, l'exportabilité et le contrôle, pas par la préférence technique.",
      },
    ],
    retenir: [
      "L'architecture est une carte de responsabilités avant d'être un schéma de produits.",
      "Chaque action déclenchée par un événement doit être idempotente : le même événement reçu deux fois ne doit pas produire deux effets.",
      "L'inventaire applicatif minimum : owner métier, owner technique, coût annuel, contrat, criticité, SSO/MFA, intégrations, sauvegarde et dépendances.",
      "Une architecture cible se formule en principes : identité centralisée, API documentées, secrets hors du code, environnements séparés, restauration testée.",
    ],
    pieges: [
      "Synchroniser deux systèmes dans les deux sens par défaut, sans définir qui fait autorité.",
      "Choisir un SaaS sans vérifier l'exportabilité des données, les API et le modèle de permissions.",
      "Comparer un SaaS et un développement sur mesure sur le seul coût de la première année.",
      "Laisser des applications sans owner : personne ne renouvelle, ne sécurise ni ne supprime.",
    ],
    application:
      "Nous livrons l'inventaire applicatif et la matrice des sources de vérité avant toute intégration. C'est ce document qui permet ensuite de brancher n8n, une API ou un ERP sans créer de dépendances circulaires.",
    faq: [
      {
        question: "Quelle est la différence entre une API et un webhook ?",
        answer:
          "Une API expose des opérations qu'un autre système peut demander. Un webhook informe un système qu'un événement vient de se produire. Les deux se complètent, et toute action déclenchée par un webhook doit être idempotente.",
      },
      {
        question: "Faut-il acheter un logiciel ou le développer sur mesure ?",
        answer:
          "Acheter un SaaS quand la capacité est standard et le marché mature, configurer une plateforme quand les écarts portent sur des règles et workflows, intégrer plusieurs produits quand aucun outil unique ne couvre le besoin, développer quand la capacité crée un avantage spécifique ou exige un contrôle particulier.",
      },
      {
        question: "Qu'appelle-t-on source de vérité d'une donnée ?",
        answer:
          "Le système qui fait autorité sur cette donnée : le CRM pour le statut d'une opportunité, l'ERP pour la facture, l'outil RH pour le contrat. Les autres systèmes en reçoivent une copie sans pouvoir la modifier librement.",
      },
    ],
  },
  "strategie-data-bi-gouvernance": {
    pillar: "socle",
    question: "À partir de quand une donnée devient-elle réellement utile ?",
    keyPoints: [
      {
        label: "Partir des décisions",
        text: "Une stratégie data commence par les questions auxquelles la direction et les équipes doivent pouvoir répondre.",
      },
      {
        label: "Sept dimensions de qualité",
        text: "Exactitude, complétude, unicité, cohérence, validité, fraîcheur et intégrité référentielle — la complétude seule trompe.",
      },
      {
        label: "Une gouvernance qui tranche",
        text: "Data Owner, Data Steward, équipe data, sécurité et DPO : un comité n'a de valeur que s'il arbitre réellement.",
      },
    ],
    retenir: [
      "Pour chaque KPI d'un tableau de bord : définition, formule, source, fréquence, owner, cible, seuil d'alerte et action associée.",
      "Sur les délais, la médiane et les percentiles décrivent mieux la réalité qu'une moyenne unique.",
      "Un RAG ou un agent ne corrige pas une documentation incohérente : le nettoyage précède l'indexation.",
      "La classification de sensibilité — publique, interne, confidentielle, personnelle, secrets, réglementée — conditionne les droits d'accès.",
    ],
    pieges: [
      "Mesurer la complétude sans la validité : 98 % d'emails renseignés dont 20 % invalides restent inexploitables.",
      "Construire un dashboard qui affiche des chiffres sans qu'aucune décision n'y soit rattachée.",
      "Indexer une base documentaire contenant encore des versions obsolètes.",
      "Connecter des actions automatisées avant d'avoir évalué la recherche sur des questions réelles.",
    ],
    application:
      "Avant tout projet IA chez un client, nous auditons la base documentaire et les référentiels : droits, métadonnées, dates de validité, procédure de mise à jour. C'est la condition d'un RAG qui répond juste.",
    faq: [
      {
        question: "Quelles sont les dimensions de qualité des données ?",
        answer:
          "Exactitude, complétude, unicité, cohérence, validité, fraîcheur et intégrité référentielle. Elles doivent être mesurées séparément : un taux de remplissage élevé ne garantit pas la validité des valeurs.",
      },
      {
        question: "Qui est responsable de la qualité des données dans une entreprise ?",
        answer:
          "Le Data Owner côté métier décide des définitions et des priorités, le Data Steward assure la qualité au quotidien, l'équipe data gère plateformes et pipelines, la sécurité et le DPO couvrent les risques et la conformité.",
      },
      {
        question: "Comment préparer ses données pour un projet d'IA ?",
        answer:
          "Supprimer les versions obsolètes, définir droits et métadonnées, préciser propriété et dates de validité, écrire une procédure de mise à jour, puis évaluer la recherche sur des questions réelles avant de connecter la moindre action automatisée.",
      },
    ],
  },
  "cloud-infrastructure-devops-couts": {
    pillar: "socle",
    question: "Quelle infrastructure choisir sans créer une dette d'exploitation ?",
    keyPoints: [
      {
        label: "IaaS, PaaS, SaaS",
        text: "Le bon niveau dépend du contrôle requis, des compétences disponibles, de la criticité, du coût et du rythme de changement.",
      },
      {
        label: "Environnements séparés",
        text: "Production, test et développement distincts, secrets stockés hors du dépôt Git, pipeline CI/CD avec rollback.",
      },
      {
        label: "RPO et RTO",
        text: "La perte de données acceptable et la durée de restauration maximale déterminent l'architecture, pas l'inverse.",
      },
    ],
    retenir: [
      "La bonne question n'est pas le prix de l'hébergement mais le coût total et le niveau de risque sur trois ans.",
      "Une sauvegarde n'est valide que lorsque la restauration a été testée.",
      "L'observabilité couvre logs, métriques, traces et événements métier : un système « up » peut n'avoir produit aucune facture depuis deux heures.",
      "Le FinOps suit les coûts par service, environnement et équipe, avec budgets et alertes.",
    ],
    pieges: [
      "Prendre un VPS pour son prix sans intégrer correctifs, surveillance, sauvegardes et sécurité dans le coût réel.",
      "Stocker des secrets dans le dépôt Git ou un fichier partagé non contrôlé.",
      "Déployer sans stratégie de rollback ni sauvegarde préalable à la migration.",
      "Compter le coût d'un projet IA en tokens seulement, en oubliant indexation, stockage, évaluations et validation humaine.",
    ],
    application:
      "Nous dimensionnons l'infrastructure sur les besoins réels de continuité du client, puis nous documentons RPO, RTO et procédure de restauration — et nous testons cette restauration avant la mise en production.",
    faq: [
      {
        question: "Que signifient RPO et RTO ?",
        answer:
          "Le RPO est la quantité maximale de données que l'on accepte de perdre, le RTO la durée maximale de restauration. Un RPO de 15 minutes avec un RTO de 2 heures impose une architecture très différente d'un site vitrine avec RPO 24 heures et RTO 48 heures.",
      },
      {
        question: "Qu'apporte un pipeline CI/CD à une PME ?",
        answer:
          "Il automatise tests, analyse statique, build, scan de dépendances, migrations contrôlées, déploiement et vérifications post-déploiement, ce qui réduit les erreurs de mise en production et rend les retours arrière possibles.",
      },
      {
        question: "Comment maîtriser les coûts cloud ?",
        answer:
          "En suivant les coûts par service, environnement et équipe, avec budgets et alertes, et en traquant les ressources inutilisées, le surdimensionnement, le stockage oublié, le trafic sortant, les coûts d'API et la duplication d'environnements.",
      },
    ],
  },
  "automatisation-api-rpa-low-code": {
    pillar: "socle",
    question: "Quels processus méritent réellement d'être automatisés ?",
    keyPoints: [
      {
        label: "Quatre familles de candidats",
        text: "Transfert de données, orchestration de processus, traitement documentaire répétitif et déclenchement d'actions selon des règles.",
      },
      {
        label: "API d'abord",
        text: "Une intégration par API est plus robuste qu'un robot qui clique sur une interface ; le RPA reste un recours.",
      },
      {
        label: "Un workflow robuste",
        text: "Déclencheur, validation, enrichissement, logique, actions, journalisation, erreur, retry et escalade — avec reprise manuelle possible.",
      },
    ],
    retenir: [
      "Gain temps mensuel = volume × temps manuel × taux d'automatisation × coût horaire, auquel s'ajoutent les erreurs évitées.",
      "L'idempotence est la règle centrale : un même événement reçu deux fois ne doit pas créer deux factures.",
      "Une file d'échec visible vaut mieux qu'un workflow silencieux qui perd des dossiers.",
      "Un registre de gouvernance recense owner, criticité, systèmes, identités techniques, coût, procédure d'échec et date de revue.",
    ],
    pieges: [
      "Automatiser un processus à faible volume ou aux entrées instables : le gain ne couvre pas la maintenance.",
      "Confier au compte technique des permissions plus larges que nécessaire.",
      "Laisser des workflows abandonnés en production : ce sont des dettes qui cassent au premier changement d'API.",
      "Laisser une IA approuver un paiement inhabituel au motif qu'elle sait déjà extraire un numéro de facture.",
    ],
    application:
      "Nous concevons les automatisations n8n avec journalisation, file d'échec et reprise manuelle dès la première version, et nous les inscrivons dans un registre revu chaque trimestre chez le client.",
    faq: [
      {
        question: "Comment savoir si un processus est un bon candidat à l'automatisation ?",
        answer:
          "Le volume doit être significatif, les entrées suffisamment stables, les règles connues, les exceptions gérables et le résultat mesurable. Un score de 1 à 5 sur volume, répétitivité, standardisation, douleur, taux d'erreur, valeur, disponibilité des API et qualité des données permet de comparer les candidats.",
      },
      {
        question: "Quelle différence entre RPA et intégration par API ?",
        answer:
          "Le RPA pilote une interface graphique comme le ferait un humain, ce qui le rend sensible aux changements d'écran, aux temps de chargement, aux sessions et aux contrôles anti-bot. L'API expose directement les opérations et reste bien plus stable. Le RPA se justifie quand aucune API n'existe.",
      },
      {
        question: "Comment calculer le ROI d'une automatisation ?",
        answer:
          "Gain net mensuel = gain de temps + gain sur les erreurs évitées + valeur additionnelle − coût mensuel d'exploitation. L'accélération de revenu, comme relancer un lead en 5 minutes plutôt qu'en 24 heures, se mesure séparément.",
      },
    ],
  },
  "ia-rag-agents-mcp": {
    pillar: "socle",
    question: "Comment déployer l'IA en entreprise sans perdre le contrôle des décisions ?",
    keyPoints: [
      {
        label: "Cinq approches distinctes",
        text: "Prompting, RAG, fine-tuning, outils et agents répondent à des problèmes différents et n'ont pas le même coût.",
      },
      {
        label: "Validation humaine ciblée",
        text: "Paiement, remboursement, suppression de données, envoi massif ou décision affectant une personne restent soumis à confirmation.",
      },
      {
        label: "Évaluer avant de croire",
        text: "Un jeu de cas réels — normaux, difficiles, adversariaux, hors périmètre — avec résultat attendu pour chacun.",
      },
    ],
    retenir: [
      "Un cas d'usage IA précise utilisateur, problème, entrée, sortie, décision, niveau de risque, baseline, métrique, coût maximum et escalade.",
      "Un agent unique avec des outils explicites est plus simple à tester qu'une architecture multi-agent.",
      "Le NIST AI RMF structure la gouvernance autour de quatre fonctions : Govern, Map, Measure, Manage.",
      "L'AI Act impose depuis le 2 août 2026 des obligations de transparence sur certaines interactions et certains contenus générés.",
    ],
    pieges: [
      "Choisir le multi-agent parce que le schéma paraît plus avancé, alors qu'un agent outillé suffirait.",
      "Afficher un simple bouton « Approuver » sans le contexte nécessaire à la décision : ce n'est pas un contrôle.",
      "Écrire « ne fais pas ceci » dans le prompt en guise de sécurité, sans permissions au niveau système.",
      "Transmettre automatiquement des données sensibles à tous les sous-agents d'une orchestration.",
    ],
    application:
      "Nous livrons chaque cas d'usage IA avec son jeu d'évaluation, ses limites d'action et son point de validation humaine. Un assistant qui répond bien 9 fois sur 10 sans garde-fou n'est pas déployable en production.",
    faq: [
      {
        question: "Qu'est-ce que le RAG et quand l'utiliser ?",
        answer:
          "Le RAG (retrieval-augmented generation) recherche des éléments dans une source externe et les injecte dans le contexte du modèle. Il convient quand la réponse dépend d'une documentation d'entreprise, mais il ne remplace pas une base de données et ne dispense ni de droits d'accès ni de qualité documentaire.",
      },
      {
        question: "Qu'est-ce que le Model Context Protocol (MCP) ?",
        answer:
          "Une spécification qui formalise les ressources, prompts et outils exposés par des serveurs, standardisant l'interface entre applications IA et capacités externes. Comme toute connexion d'outil donne un pouvoir d'action, elle impose authentification, autorisation, validation des paramètres, journalisation et limites.",
      },
      {
        question: "Quelles actions doivent rester validées par un humain ?",
        answer:
          "Paiement, remboursement, annulation, envoi à un large public, suppression de données, modification contractuelle, décision affectant fortement une personne, action inhabituelle ou hors politique, et toute réponse produite avec une confiance faible.",
      },
    ],
  },
  "cybersecurite-confidentialite-resilience": {
    pillar: "socle",
    question: "Comment sécuriser une entreprise dont la surface numérique augmente ?",
    keyPoints: [
      {
        label: "NIST CSF 2.0",
        text: "Six fonctions structurent le travail : Govern, Identify, Protect, Detect, Respond, Recover.",
      },
      {
        label: "Les identités d'abord",
        text: "MFA, SSO, comptes nominatifs, suppression des départs, moindre privilège et séparation des comptes d'administration.",
      },
      {
        label: "Risques propres à l'IA",
        text: "Injection de prompt, outils trop permissifs, fuite via les logs et dépendance à un fournisseur de modèle unique.",
      },
    ],
    retenir: [
      "La sécurité s'intègre au diagnostic et au portefeuille d'initiatives, pas après le lancement.",
      "Un compte partagé empêche d'attribuer les actions ; un compte admin utilisé au quotidien multiplie le risque.",
      "Une alerte doit conduire à une action : cent emails d'alerte non lus ne constituent pas une capacité de détection.",
      "Chaque fiche de risque documente actif, menace, vulnérabilité, probabilité, impact, traitement, owner, échéance et risque résiduel.",
    ],
    pieges: [
      "Ignorer le shadow IT : les outils utilisés sans gouvernance font partie de la surface d'attaque.",
      "Considérer une sauvegarde comme valide sans avoir testé la restauration.",
      "Confondre anonymisation et pseudonymisation : une donnée pseudonymisée reste souvent réidentifiable.",
      "Oublier de vérifier si les données d'un projet IA partent chez un fournisseur externe, servent à l'entraînement ou transitent entre régions.",
    ],
    application:
      "Nous produisons un registre de risques chiffré et un plan 90 jours plutôt qu'une liste de recommandations génériques : MFA, comptes nominatifs, journalisation et restauration testée passent avant les outils de sécurité avancés.",
    faq: [
      {
        question: "Quelles sont les six fonctions du NIST CSF 2.0 ?",
        answer:
          "Govern (qui décide du risque, politique, rôles, tolérance, exigences fournisseurs), Identify (inventaire des appareils, applications, comptes, données et sauvegardes), Protect, Detect, Respond et Recover.",
      },
      {
        question: "Quelles mesures de sécurité prioriser dans une PME ?",
        answer:
          "L'authentification multifacteur, le SSO lorsque pertinent, des comptes nominatifs, la suppression des comptes des personnes parties, le moindre privilège, la gestion des comptes admin, la rotation des secrets, les correctifs, le chiffrement, les sauvegardes testées et la formation anti-phishing.",
      },
      {
        question: "Quels risques spécifiques l'IA ajoute-t-elle ?",
        answer:
          "Injection de prompt, données sensibles présentes dans le contexte, outils trop permissifs, dépendance à un fournisseur unique, fuite via les logs, exfiltration par un outil, contenus non fiables et changement de comportement après une mise à jour du modèle.",
      },
    ],
  },
  "ux-produit-experience-client": {
    pillar: "croissance",
    question: "Pourquoi une interface réussie ne suffit-elle pas à améliorer l'expérience client ?",
    keyPoints: [
      {
        label: "Le parcours d'abord",
        text: "Déclencheur, découverte, évaluation, conversion, onboarding, usage, support, renouvellement, recommandation.",
      },
      {
        label: "Des personas fondés sur des données",
        text: "Contexte, tâche, critères de décision, objections, vocabulaire et signaux de confiance, issus d'entretiens et de données réelles.",
      },
      {
        label: "Accessibilité WCAG 2.2",
        text: "Navigation clavier, contrastes, labels, focus, textes alternatifs et cibles tactiles suffisantes.",
      },
    ],
    retenir: [
      "Une action principale claire par écran, information progressive, validation proche du champ, prévention des erreurs plutôt que messages tardifs.",
      "Un test d'utilisabilité consiste à donner une tâche et observer sans guider, pas à demander si le design plaît.",
      "Le NPS seul ne remplace pas les mesures comportementales : activation, conversion, abandon, délai de première valeur, rétention.",
      "Toute personnalisation doit être comparée à un groupe témoin pour mesurer son impact réel.",
    ],
    pieges: [
      "Demander au client de répéter des informations que l'entreprise possède déjà et peut légalement réutiliser.",
      "Construire des personas décoratifs avec des détails démographiques inventés.",
      "Mesurer la performance sur une machine de développement plutôt que sur des appareils réels.",
      "Personnaliser à partir de profils opaques ou de données sensibles sans fondement adapté.",
    ],
    application:
      "Nous cartographions le parcours complet avant de toucher à l'interface, et nous mesurons chaque étape du funnel : c'est souvent un délai de rappel ou un formulaire trop long, pas le design, qui coûte les conversions.",
    faq: [
      {
        question: "Comment mesurer l'expérience client numérique ?",
        answer:
          "Avec des indicateurs liés au parcours : taux d'activation, conversion, abandon, délai de première valeur, rétention, réachat, volume de tickets, CSAT, CES et NPS. L'analyse de funnel cherche l'étape où la perte est anormale, puis sa cause.",
      },
      {
        question: "Qu'est-ce que WCAG 2.2 ?",
        answer:
          "La recommandation du W3C en vigueur pour l'accessibilité du contenu web. Sans remplacer un audit de conformité, elle impose d'intégrer navigation clavier, contrastes, labels, focus, textes alternatifs, structure sémantique et messages d'erreur compréhensibles.",
      },
      {
        question: "Comment conduire un test d'utilisabilité simple ?",
        answer:
          "Donner une tâche à quelques utilisateurs ciblés, observer sans guider, puis noter erreurs, hésitations, temps passé et verbatim. Quelques participants suffisent à révéler les problèmes majeurs.",
      },
    ],
  },
  "marketing-digital-et-mesure": {
    pillar: "croissance",
    question: "Comment construire une acquisition rentable et la mesurer honnêtement ?",
    keyPoints: [
      {
        label: "L'économie avant les canaux",
        text: "Panier, marge, fréquence d'achat, LTV, capacité commerciale, zones, saisonnalité et délai de vente se déterminent en premier.",
      },
      {
        label: "SEO et recherche générative",
        text: "Les fondamentaux — structure technique claire, contenu unique et utile — restent valables pour les AI Overviews et l'AI Mode.",
      },
      {
        label: "L'attribution est une convention",
        text: "Les plateformes peuvent revendiquer le même client : croiser CRM, UTM, appels et données de vente.",
      },
    ],
    retenir: [
      "CAC = coûts d'acquisition / nouveaux clients attribués ; ROAS = revenu attribué / dépenses publicitaires ; MER = revenu total / dépenses marketing.",
      "Le ratio LTV/CAC n'a de sens que si les deux termes suivent des conventions de calcul cohérentes.",
      "Une plateforme publicitaire optimise vers le signal qu'on lui donne, même s'il ne reflète pas le revenu réel.",
      "Un tableau de bord marketing utile tient sur une page et sépare leading et lagging indicators.",
    ],
    pieges: [
      "Ouvrir un canal rentable à petite échelle sans vérifier que l'équipe peut traiter les leads assez vite.",
      "Croire qu'un fichier llms.txt ou un balisage spécial IA serait nécessaire pour apparaître dans les fonctions génératives de Google.",
      "Produire du contenu IA à grande échelle sans valeur ajoutée, ce qui relève des politiques anti-spam.",
      "Publier un calendrier éditorial sans hypothèse de distribution ni mesure.",
    ],
    application:
      "Nous relions systématiquement la mesure marketing au CRM du client : sans source renseignée et sans statut fiable, aucun coût d'acquisition par canal n'est calculable, et l'arbitrage budgétaire devient une opinion.",
    faq: [
      {
        question: "Le SEO fonctionne-t-il encore avec les réponses générées par IA ?",
        answer:
          "Oui. Google indique que les bonnes pratiques fondamentales restent valables pour les AI Overviews et l'AI Mode : structure technique claire, contenu unique et utile. Depuis juin 2026, Search Console propose un rapport dédié à la visibilité dans les fonctions génératives.",
      },
      {
        question: "Comment calcule-t-on le coût d'acquisition client ?",
        answer:
          "CAC = coûts d'acquisition / nouveaux clients attribués. Le CPL rapporte les dépenses aux leads, le ROAS le revenu attribué aux dépenses publicitaires, et le MER le revenu total aux dépenses marketing globales.",
      },
      {
        question: "Comment gérer le consentement dans la mesure marketing ?",
        answer:
          "En cartographiant événements, conversions, identifiants, sources, consentement, outils et destinations, puis en testant les scénarios accepter, refuser et aucune action — et en documentant l'impact de chacun sur la mesure.",
      },
    ],
  },
  "crm-vente-service-client-omnicanal": {
    pillar: "croissance",
    question: "Pourquoi la plupart des déploiements CRM échouent-ils ?",
    keyPoints: [
      {
        label: "Une discipline, pas un logiciel",
        text: "Objets, champs obligatoires, statuts, règles de transition et ownership se définissent avant l'outil.",
      },
      {
        label: "Des étapes objectivables",
        text: "Une opportunité passe en « Proposition » parce qu'une proposition a été envoyée, pas parce que le commercial l'espère.",
      },
      {
        label: "Omnicanal réel",
        text: "La conversation garde son contexte d'un canal à l'autre, dans les limites des règles de confidentialité.",
      },
    ],
    retenir: [
      "Un CRM échoue surtout quand il exige de la saisie sans rien rendre à l'utilisateur.",
      "KPI de pipeline utiles : volume par source, taux de qualification, conversion par étape, âge des opportunités, durée de cycle, win rate, motif de perte, délai de suivi.",
      "Tout routage de leads a besoin d'un fallback : si personne n'accepte le lead, il revient dans une file centrale.",
      "Une hausse de tickets sur un motif précis signale un défaut produit ou processus à corriger en amont.",
    ],
    pieges: [
      "Multiplier les champs obligatoires sans automatiser l'enrichissement quand il est fiable.",
      "Laisser des séquences marketing continuer après conversion faute de synchronisation entre systèmes.",
      "Recopier intégralement des conversations sensibles dans des systèmes qui n'en ont pas besoin.",
      "Mesurer une automatisation marketing sur les ouvertures et les clics plutôt que sur le pipeline créé.",
    ],
    application:
      "Nous commençons par écrire le modèle de données et les critères d'étape avec les commerciaux, puis nous automatisons l'enrichissement et le routage. L'outil arrive en dernier, pas en premier.",
    faq: [
      {
        question: "Quelles étapes définir dans un pipeline commercial ?",
        answer:
          "Une séquence type va de Lead à Qualifié, Découverte réalisée, Proposition, Négociation puis Gagné ou Perdu, avec des critères d'entrée et de sortie objectivables à chaque étape. C'est cette discipline qui rend les prévisions fiables.",
      },
      {
        question: "Qu'est-ce qu'un SLA de premier contact ?",
        answer:
          "Un délai maximal engagé pour recontacter un lead entrant, assorti d'une alerte en cas de dépassement. Il s'accompagne d'un routage selon zone, produit, langue, disponibilité ou score, et d'un fallback vers une file centrale.",
      },
      {
        question: "Quels usages de l'IA sont raisonnables dans la vente et le support ?",
        answer:
          "Transcription et résumé, suggestion de réponse, recherche documentaire, classification, extraction d'actions, préparation de compte rendu et scoring assisté. Pour un agent capable de modifier une commande, il faut séparer lecture et action, appliquer des seuils et journaliser.",
      },
    ],
  },
  "operations-erp-supply-chain-iot": {
    pillar: "croissance",
    question: "Comment digitaliser les opérations sans créer une administration parallèle ?",
    keyPoints: [
      {
        label: "L'ERP est transactionnel",
        text: "Son intérêt dépend de la qualité des processus, des paramétrages et des référentiels, pas du produit choisi.",
      },
      {
        label: "Deux chaînes de référence",
        text: "Procure-to-Pay et Order-to-Cash structurent l'analyse, exceptions comprises : retours, litiges, ruptures, avoirs.",
      },
      {
        label: "IoT orienté action",
        text: "Un projet IoT commence par l'information recherchée et l'action déclenchée, pas par le choix d'un capteur.",
      },
    ],
    retenir: [
      "Les données de stock distinguent physique, disponible, réservé, en transit et théorique — les écarts révèlent un problème de processus.",
      "Une prévision n'est pas une certitude : les marges de sécurité s'ajustent au coût d'une rupture face au coût de stockage.",
      "Une application mobile qui fonctionne hors connexion vaut mieux qu'un dashboard sophistiqué pour des techniciens sur le terrain.",
      "Chaque KPI opérationnel doit déclencher une routine : un écran temps réel sans action ne change rien.",
    ],
    pieges: [
      "Migrer vers un ERP sans avoir nettoyé les référentiels ni défini la codification et les règles de validation.",
      "Oublier de cartographier les exceptions : commande partielle, retour, litige, remise, rupture, annulation, avoir.",
      "Choisir un niveau de traçabilité sans le rapporter au risque, à la réglementation, au coût et à la valeur du produit.",
      "Lancer un projet IoT sans avoir défini fréquence, précision, autonomie, connectivité, maintenance et sécurité des appareils.",
    ],
    application:
      "Nous cartographions Procure-to-Pay et Order-to-Cash avec leurs exceptions avant toute migration, et nous fixons un plan de cutover : reprise des historiques, rapprochements et retour arrière possible.",
    faq: [
      {
        question: "Qu'est-ce que la chaîne Order-to-Cash ?",
        answer:
          "La séquence demande ou commande → validation → préparation ou prestation → livraison → facture → paiement → rapprochement. Son pendant achat est le Procure-to-Pay, du besoin jusqu'au paiement du fournisseur.",
      },
      {
        question: "Que faut-il préparer avant une migration ERP ?",
        answer:
          "Nettoyer les référentiels, définir la codification, les responsabilités et les règles de validation, choisir les données historiques à reprendre, prévoir les rapprochements et écrire un plan de cutover.",
      },
      {
        question: "Quels KPI suivre en opérations ?",
        answer:
          "OTIF, délai de préparation, taux de rupture, rotation, exactitude de l'inventaire, coût de traitement, rendement, taux de défaut, downtime et OEE selon le contexte — chacun rattaché à une action.",
      },
    ],
  },
  "modeles-affaires-numeriques": {
    pillar: "croissance",
    question: "Comment le numérique change-t-il la façon de créer et de capter la valeur ?",
    keyPoints: [
      {
        label: "Le modèle avant l'outil",
        text: "Le numérique modifie coût marginal, distribution, mesure et personnalisation : c'est ce changement qu'on analyse d'abord.",
      },
      {
        label: "Cinq familles de modèles",
        text: "Abonnement, marketplace, plateforme, freemium et paiement à l'usage n'ont ni les mêmes KPI ni les mêmes risques.",
      },
      {
        label: "Économie unitaire",
        text: "Revenu, coût variable, marge contributive, acquisition et support se calculent pour une unité : client, commande, dossier.",
      },
    ],
    retenir: [
      "KPI d'abonnement : MRR/ARR, churn logo, churn revenu, expansion, ARPA, CAC, payback et LTV.",
      "Net Revenue Retention = (revenu début − churn − contraction + expansion) / revenu début.",
      "Les effets de réseau ne s'affirment pas : ils existent quand la valeur augmente réellement avec le nombre ou la qualité des participants.",
      "Avant de construire un nouveau revenu : problème, segment, willingness-to-pay, prototype, prévente, test de prix et preuve d'usage.",
    ],
    pieges: [
      "Laisser une forte acquisition masquer un churn élevé, faute d'analyse par cohortes.",
      "Lancer une marketplace sans stratégie de démarrage : une partie ne vient pas si l'autre est absente.",
      "Déployer un freemium sans contrôler le coût du service gratuit ni le taux de conversion.",
      "Appliquer une formule de LTV simplifiée sans rappeler qu'elle suppose un churn stable.",
    ],
    application:
      "Nous chiffrons l'économie unitaire avant de construire quoi que ce soit. Une transformation réussie consiste parfois à abandonner une idée qui ne trouve pas de demande plutôt qu'à la développer entièrement.",
    faq: [
      {
        question: "Qu'est-ce que l'économie unitaire ?",
        answer:
          "Le calcul du revenu, du coût variable, de la marge contributive, du coût d'acquisition et du coût de support pour une unité donnée : un client, une commande, une transaction, un dossier ou un kilomètre.",
      },
      {
        question: "Comment calcule-t-on la LTV d'un abonnement ?",
        answer:
          "Une formule simplifiée rapporte la marge mensuelle au taux de churn : un SaaS à 50 € de MRR avec 80 % de marge brute et 2 % de churn mensuel donne environ 2 000 €. Elle suppose un churn stable et doit être utilisée avec prudence.",
      },
      {
        question: "Quels indicateurs suivre pour une marketplace ?",
        answer:
          "GMV, take rate, liquidité, temps de match, taux de répétition, fraude et coût d'acquisition des deux côtés du marché.",
      },
    ],
  },
  "conduite-du-changement-gouvernance-delivery": {
    pillar: "pilotage",
    question: "Pourquoi un projet techniquement réussi peut-il être rejeté par les équipes ?",
    keyPoints: [
      {
        label: "Le travail réel change",
        text: "L'adoption dépend de la compréhension du besoin, de la capacité, des incitations, de la simplicité, du management et du support.",
      },
      {
        label: "Sponsor et RACI",
        text: "Un sponsor qui délègue toutes les décisions à l'IT laisse le projet exposé aux conflits métier.",
      },
      {
        label: "Compétences",
        text: "Le World Economic Forum identifie le déficit de compétences comme frein majeur pour 63 % des employeurs interrogés.",
      },
    ],
    retenir: [
      "Cartographier chaque partie prenante : pouvoir, intérêt, impact, position, préoccupations, bénéfice attendu, risques, message, action.",
      "Agile ne signifie pas absence de plan : vision, backlog, utilisateurs, mesure et cycle d'amélioration restent nécessaires.",
      "KPI d'adoption : utilisateurs actifs, fréquence, exécution dans le nouveau processus, contournements, complétude des données, temps de tâche.",
      "Une objection peut révéler une exigence oubliée plutôt qu'une résistance irrationnelle.",
    ],
    pieges: [
      "Mesurer l'adoption au nombre de personnes formées : une formation terminée ne prouve pas un usage correct.",
      "Adresser le même message à la direction, aux managers, aux utilisateurs et à l'IT.",
      "Reléguer formation et montée en compétence dans une ligne tardive intitulée « communication ».",
      "Sanctionner un manque d'adoption sans avoir classé la cause : incompréhension, capacité, charge, conflit de rôle ou défaut réel de la solution.",
    ],
    application:
      "Nous intégrons formation et champions internes dans le portefeuille d'initiatives, au même titre qu'une intégration technique, et nous suivons l'adoption par des indicateurs d'usage réel.",
    faq: [
      {
        question: "À quoi sert une matrice RACI ?",
        answer:
          "À clarifier qui est Responsible, Accountable, Consulted et Informed sur les décisions structurantes : priorités, architecture, risque, budget, données, sécurité, acceptation métier et mise en production. Elle perd toute valeur si elle devient une matrice géante que personne ne consulte.",
      },
      {
        question: "Comment mesurer l'adoption d'un nouvel outil ?",
        answer:
          "Par des indicateurs d'usage réel : utilisateurs actifs, fréquence, taux d'exécution dans le nouveau processus, contournements observés, complétude des données, erreurs, tickets, satisfaction et temps par tâche.",
      },
      {
        question: "Quel est le rôle du sponsor dans un projet de transformation ?",
        answer:
          "Il donne la légitimité, arbitre les conflits et protège les priorités. La cadence recommandée associe un comité de pilotage pour les décisions et les risques, une équipe projet pour la livraison, et des owners métier pour les processus et l'adoption.",
      },
    ],
  },
  "roi-kpi-portefeuille-feuille-de-route": {
    pillar: "pilotage",
    question: "Comment décider dans quel ordre investir, et prouver que la valeur est au rendez-vous ?",
    keyPoints: [
      {
        label: "Une roadmap est un système de décisions",
        text: "Une liste de logiciels avec des dates n'est pas une feuille de route.",
      },
      {
        label: "Trois scénarios budgétaires",
        text: "Minimum viable, recommandé, accéléré : la direction arbitre en voyant ce qui est gagné ou sacrifié.",
      },
      {
        label: "Benefit owner",
        text: "Chaque bénéfice majeur a un porteur métier, même quand l'IT a livré la solution.",
      },
    ],
    retenir: [
      "Priorité = valeur × confiance × urgence / (effort × risque) : la formule ne remplace pas la discussion, elle rend les hypothèses visibles.",
      "La roadmap à 12 mois s'organise par capacités, pas par fournisseurs, avec un résultat observable chaque trimestre.",
      "Un arbre KPI relie l'action numérique au résultat métier — chaque flèche restant une hypothèse à mesurer.",
      "Après mise en production : comparer baseline, cible et réel, puis documenter la cause des écarts.",
    ],
    pieges: [
      "Placer un agent IA avant les fondations dont il dépend : base documentaire propre, permissions, intégration CRM, dataset d'évaluation.",
      "Donner un faux niveau de précision au-delà d'un an au lieu de raisonner par horizons et capacités.",
      "Laisser chaque département présenter son projet comme urgent sans grille de comparaison commune.",
      "Considérer le business case initial comme acquis au lieu de le traiter comme une hypothèse à vérifier.",
    ],
    application:
      "Nous livrons le portefeuille sous forme de cartes initiative comparables — valeur, effort, risque, dépendances, KPI — et nous animons la revue mensuelle qui suit la réalisation réelle des bénéfices.",
    faq: [
      {
        question: "Que contient une carte initiative dans un portefeuille ?",
        answer:
          "Problème ou opportunité, résultat métier attendu, périmètre, owner, coût initial et récurrent, bénéfices et hypothèses, KPI baseline et cible, dépendances, risques, impacts data et sécurité, impact humain, statut et prochaine décision.",
      },
      {
        question: "Quelles dépendances cartographier dans une feuille de route ?",
        answer:
          "Les dépendances techniques, data, sécurité, fournisseur, compétence, réglementaire, budgétaire et d'adoption. Un agent IA de service client dépend par exemple d'une base documentaire propre, de permissions, d'une intégration CRM et d'un dataset d'évaluation.",
      },
      {
        question: "Comment suit-on la réalisation de la valeur après déploiement ?",
        answer:
          "Par une revue mensuelle couvrant KPI et tendance, bénéfices réalisés, coûts réels contre budget, risques, décisions, dépendances, capacité des équipes et changements de priorité, avec un benefit owner métier désigné pour chaque bénéfice majeur.",
      },
    ],
  },
  "mission-complete-de-digitalisation": {
    pillar: "pilotage",
    question: "À quoi ressemble une mission de digitalisation menée de bout en bout ?",
    keyPoints: [
      {
        label: "Un cas fil rouge",
        text: "NovaGroup réunit les situations typiques d'une PME en croissance : commandes par WhatsApp, CRM partiel, imports Excel, MFA incomplet.",
      },
      {
        label: "Une série de livrables cohérents",
        text: "Note de cadrage, diagnostic noté, AS-IS/TO-BE, architecture cible, stratégie data, registre cyber, portefeuille IA, business cases, roadmap.",
      },
      {
        label: "Une restitution courte",
        text: "Quinze minutes, un nombre limité de slides, puis des questions d'arbitrage venant de la direction, de la finance et de l'IT.",
      },
    ],
    retenir: [
      "Chaque note de maturité est appuyée par au moins une preuve : jamais un score maximal parce qu'un outil a été acheté.",
      "Le portefeuille IA sélectionne un nombre limité de pilotes et justifie explicitement ce qui attend.",
      "Les business cases majeurs présentent un scénario bas, central et haut.",
      "Le tableau de bord exécutif reste limité à quelques KPI couvrant valeur, client, opérations, adoption, sécurité et technologie.",
    ],
    pieges: [
      "Proposer une feuille de route qui ignore le budget réel, la capacité des équipes et la continuité d'activité.",
      "Arriver en comité de direction sans réponse à la question « que supprime-t-on si le budget baisse de 30 % ? ».",
      "Empiler les technologies au lieu de relier faits, décisions, risques, valeur et exécution.",
      "Présenter les gains attendus sans indiquer comment ils seront prouvés à 90 jours.",
    ],
    application:
      "C'est le format de nos missions complètes : un diagnostic prouvé, un nombre limité de pilotes, une roadmap tenant compte du budget réel, et une restitution où chaque arbitrage est assumé devant la direction.",
    faq: [
      {
        question: "Quels livrables attendre d'une mission complète de digitalisation ?",
        answer:
          "Une note de cadrage, un diagnostic de maturité noté et prouvé, une cartographie AS-IS/TO-BE des processus prioritaires, un inventaire applicatif et une architecture cible, une stratégie data, un registre cyber et un plan de continuité, un portefeuille de cas IA et d'automatisation priorisés, un volet marketing et CRM, des business cases, une feuille de route 30-60-90 jours puis 12 mois, et un tableau de bord exécutif.",
      },
      {
        question: "Combien de pilotes lancer en début de transformation ?",
        answer:
          "Un nombre limité, sélectionné explicitement dans le portefeuille, avec une justification de ce qui est reporté. Chaque pilote cible les inconnues les plus risquées et possède des critères Go / No-Go définis à l'avance.",
      },
      {
        question: "Comment défendre une recommandation devant un comité de direction ?",
        answer:
          "En assumant les arbitrages : pourquoi ne pas déployer l'IA partout tout de suite, pourquoi investir dans la donnée avant le portail, ce qui serait supprimé si le budget baissait de 30 %, quel risque pourrait arrêter le projet et comment le retour sur investissement sera prouvé à 90 jours.",
      },
    ],
  },
};

export function getMethodExtras(slug: string): MethodChapterExtras | undefined {
  return METHOD_EXTRAS[slug];
}
