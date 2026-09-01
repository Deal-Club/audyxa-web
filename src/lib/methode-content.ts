export interface MethodChapterSection {
  heading: string;
  paragraphs: string[];
}

export interface MethodChapter {
  slug: string;
  number: number;
  title: string;
  summary: string;
  /** Non défini tant que le contenu du chapitre n'a pas été extrait et reformulé depuis le cours source. */
  sections?: MethodChapterSection[];
}

/**
 * Les 17 chapitres du cours "Digitalisation des Entreprises" (Paul Maxime
 * Dossou, édition août 2026). Seul le chapitre 1 a été extrait et reformulé
 * pour le web à ce stade (pilote du Lot 1, cf. seo/implementation-plan.md) :
 * les autres restent volontairement sans `sections` pour ne publier aucune
 * page vide ou approximative.
 */
export const METHOD_CHAPTERS: MethodChapter[] = [
  {
    slug: "fondements-et-maturite-numerique",
    number: 1,
    title: "Fondements et maturité numérique",
    summary:
      "La différence entre numériser, digitaliser et transformer, les cinq questions à poser avant tout projet, et comment mesurer une vraie maturité numérique sans la confondre avec une simple collection d'outils.",
    sections: [
      {
        heading: "Numériser, digitaliser, transformer : trois choses différentes",
        paragraphs: [
          "Numériser consiste à convertir une information ou une opération analogique en forme numérique : scanner un dossier papier, remplacer un registre manuscrit par une base de données, dématérialiser un formulaire.",
          "Digitaliser un processus signifie revoir son exécution en utilisant des capacités numériques. Un formulaire en ligne qui alimente automatiquement un CRM, déclenche une vérification et notifie un responsable change le fonctionnement du processus, pas seulement son support.",
          "Transformer l'entreprise suppose que plusieurs capacités évoluent ensemble : modèle opérationnel, responsabilités, expérience client, données, architecture, compétences, gouvernance et parfois modèle économique. Une transformation peut donc inclure des projets techniques, mais son unité de mesure reste le résultat métier.",
          "Exemple : une entreprise remplace ses factures papier par des PDF envoyés par email — elle a numérisé un document. Si elle ajoute un portail client, une génération automatique depuis l'ERP, la signature, un rapprochement de paiement et des relances suivant le statut réel de la créance, elle a digitalisé le cycle de facturation. Si cette évolution modifie aussi les rôles, les KPI, le service client, les prévisions de trésorerie et la façon de vendre, elle entre dans une transformation plus large.",
        ],
      },
      {
        heading: "Les cinq questions avant tout projet",
        paragraphs: [
          "Avant toute discussion d'outil, il faut obtenir des réponses à cinq questions : quel résultat métier voulons-nous modifier ? Comment ce résultat est-il produit aujourd'hui ? Quelles données permettent de mesurer la situation actuelle ? Quelles contraintes limitent les options possibles ? Qui devra changer sa façon de travailler ?",
          "Une demande formulée sous la forme \"nous voulons un CRM\" est donc incomplète. Il faut chercher la cause : leads perdus, absence de suivi, prévisions commerciales peu fiables, doublons, relances irrégulières ou absence de vue client unifiée.",
        ],
      },
      {
        heading: "Maturité numérique : mesurer une capacité, pas une collection d'outils",
        paragraphs: [
          "Une grille de maturité doit examiner plusieurs dimensions à la fois : stratégie, client, processus, applications, intégrations, données, automatisation/IA, cybersécurité, compétences et gouvernance.",
          "Échelle recommandée en 6 niveaux : 0 - Absent (la capacité n'existe pas ou dépend entièrement d'initiatives individuelles), 1 - Initial (quelques pratiques existent sans standard ni mesure), 2 - Répétable (des outils et procédures existent dans plusieurs équipes, avec des écarts), 3 - Maîtrisé (rôles, standards, indicateurs et responsabilités sont définis), 4 - Intégré (la capacité fonctionne entre équipes et systèmes, avec pilotage régulier), 5 - Optimisé (amélioration continue, automatisation, données fiables et arbitrages fondés sur la valeur).",
          "Un score global n'est jamais suffisant : deux entreprises à 2,6/5 peuvent avoir des problèmes totalement différents. Il faut conserver le détail par dimension et, si possible, les preuves : temps de cycle, taux d'erreur, couverture MFA, qualité des données, taux d'adoption CRM, disponibilité des systèmes, taux de conversion ou délai de réponse client.",
        ],
      },
      {
        heading: "Construire le business case",
        paragraphs: [
          "Le business case lie une situation actuelle à une amélioration mesurable, sur quatre familles de bénéfices : revenus supplémentaires, coûts évités, capacité libérée et réduction du risque.",
          "Formules de base : gain annuel brut = économies annuelles + marge additionnelle + pertes évitées estimées. TCO (coût total de possession) inclut licences, développement, intégration, infrastructure, migration, support, formation, sécurité et maintenance. ROI simple = (gain annuel net - investissement initial) / investissement initial. Payback = investissement initial / gain mensuel net.",
          "Exemple chiffré du cours : une équipe saisit manuellement 2 400 dossiers par mois, 6 minutes chacun, à un coût chargé de 8 €/heure — soit environ 1 920 €/mois de saisie. Une automatisation à 12 000 € réduit de 70 % le temps de saisie et coûte 250 €/mois d'exploitation. Temps libéré : 1 344 €/mois de valeur théorique, gain net après exploitation environ 1 094 €/mois, payback approximatif de 11 mois. Le consultant doit ensuite vérifier si les heures libérées produisent réellement une valeur : si l'équipe ne peut pas réaffecter ce temps, le gain comptable n'est pas identique au gain économique.",
        ],
      },
      {
        heading: "Les erreurs de diagnostic les plus fréquentes",
        paragraphs: [
          "Noter la maturité uniquement à partir des réponses de la direction, confondre le nombre de logiciels avec le niveau de digitalisation, accepter des chiffres sans chercher leur source, proposer l'IA pour un processus instable ou mal défini, sous-estimer la qualité des données et des intégrations, oublier les droits d'accès, les sauvegardes et la continuité d'activité, calculer le ROI en ne comptant que le coût de licence, ignorer la capacité de changement des équipes.",
        ],
      },
    ],
  },
  {
    slug: "mission-de-lexpert",
    number: 2,
    title: "Mission de l'expert : du premier rendez-vous au suivi",
    summary:
      "Le déroulé complet d'une mission de digitalisation : cadrer, diagnostiquer, prioriser, concevoir, déployer et mesurer, du premier échange avec une direction jusqu'au suivi après déploiement.",
    sections: [
      {
        heading: "Une séquence de référence en six étapes",
        paragraphs: [
          "Une mission d'expert en digitalisation suit une séquence répétable : cadrer (objectifs, périmètre, sponsor, critères de succès), diagnostiquer (processus, outils, données, risques), prioriser (valeur, effort, risque, dépendances), concevoir (cible, architecture, business cases), déployer (pilotes, migration, adoption) et mesurer (KPI, ROI, transfert, amélioration continue). Les résultats mesurés alimentent la priorisation suivante — c'est une boucle continue, pas une séquence linéaire figée.",
          "Règle centrale : une technologie n'entre dans la mission qu'après clarification du résultat métier, du processus, des données et du risque associés.",
        ],
      },
      {
        heading: "Avant le premier rendez-vous : préparer sans présumer",
        paragraphs: [
          "Une mission commence avant la réunion. Une recherche publique limitée (activité, taille, produits, canaux digitaux, technologies visibles, réputation, concurrence) permet de préparer des hypothèses, pas de rédiger un diagnostic sans accès aux opérations.",
          "Le premier entretien doit obtenir six éléments : le déclencheur de la mission, les résultats attendus, le périmètre, le sponsor, les contraintes et la définition du succès. Des questions utiles à une direction : pourquoi cette mission maintenant ? Quels résultats deviennent difficiles à atteindre avec le fonctionnement actuel ? Où perdez-vous du temps, des clients, de la marge ou de la visibilité ? Quelles décisions ne pouvez-vous pas prendre faute de données fiables ?",
          "Le livrable de sortie est une note de cadrage : contexte, objectifs, résultats attendus, périmètre, hors-périmètre, parties prenantes, méthode, accès nécessaires, risques, calendrier de diagnostic et gouvernance de mission.",
        ],
      },
      {
        heading: "Diagnostic factuel : quatre formes de preuve",
        paragraphs: [
          "Le diagnostic s'appuie sur l'entretien (comment les personnes pensent que le processus fonctionne), l'observation (ce qu'elles font réellement), les données (volumes, délais, erreurs) et la documentation (règles formelles, responsabilités, engagements).",
          "Chaque constat important suit la structure : fait → impact → cause probable → preuve → risque/opportunité → action de vérification. Exemple du cours : \"28 % des demandes entrantes ne possèdent pas de source renseignée dans le CRM. Cela empêche le calcul fiable du coût d'acquisition par canal. La cause probable est la création manuelle des opportunités depuis WhatsApp et téléphone. Preuve : export CRM des 90 derniers jours.\" Cette structure évite les phrases vagues du type \"l'entreprise manque de digitalisation\".",
        ],
      },
      {
        heading: "Concevoir la cible et prioriser",
        paragraphs: [
          "Après le diagnostic, les problèmes sont regroupés en capacités (CRM, facturation, data, automatisation, sécurité...). Chaque initiative reçoit un objectif, un owner, une valeur attendue, un effort, un coût, un risque, des dépendances et un KPI de succès.",
          "Une matrice valeur/effort classe les initiatives en quick wins, paris stratégiques, à différer et à challenger — mais elle reste insuffisante seule : un projet à forte valeur peut être bloqué par la mauvaise qualité des données ou un contrat à renouveler. Le cours propose un score pondéré : 30 % valeur, 20 % alignement stratégique, 15 % urgence/risque, 15 % faisabilité, 10 % préparation data, 10 % adoption.",
        ],
      },
      {
        heading: "Business case, pilote et déploiement",
        paragraphs: [
          "Pour les initiatives majeures, une fiche de décision de deux à quatre pages présente toujours au moins deux options lorsqu'un choix architectural engage l'entreprise (SaaS vs développement sur mesure, par exemple) — le consultant montre les compromis, il ne cherche pas à démontrer que sa préférence est la seule option viable.",
          "Le pilote teste les inconnues les plus risquées, pas seulement une démonstration attractive, avec des critères Go/No-Go définis à l'avance (ex. taux de succès ≥ 95 % sur les cas standards, validation humaine obligatoire sur les actions financières sensibles).",
        ],
      },
      {
        heading: "Feuille de route 30-60-90 jours et fin de mission",
        paragraphs: [
          "Jours 1-30 : comprendre et sécuriser (diagnostic, baseline, risques immédiats, quick wins sûrs). Jours 31-60 : simplifier et connecter (processus prioritaires, qualité des données, premiers pilotes). Jours 61-90 : prouver et industrialiser (mesurer les pilotes, standardiser, valider la feuille de route à 12 mois).",
          "Une mission n'est pas terminée à la mise en production. Le transfert remet documentation fonctionnelle et technique, inventaire des accès, procédure d'incident et tableau de bord KPI, avec des revues de suivi à environ deux semaines, 30 jours et 90 jours.",
        ],
      },
    ],
  },
  {
    slug: "processus-bpmn-lean-refonte",
    number: 3,
    title: "Processus, BPMN, Lean et refonte",
    summary:
      "Cartographier un processus de bout en bout, distinguer AS-IS et TO-BE, appliquer le Lean avant d'automatiser, et choisir entre règles déterministes et IA.",
    sections: [
      {
        heading: "Penser un processus de bout en bout",
        paragraphs: [
          "Un processus est une suite d'activités qui transforme une entrée en résultat pour un client interne ou externe. L'erreur fréquente consiste à analyser chaque service séparément, alors que le client, lui, subit le délai total du parcours \"commande à encaissement\" (acquisition → commande → contrôle → préparation → livraison → facture → paiement → rapprochement). Chaque processus doit avoir un owner capable d'arbitrer le flux de bout en bout, même si plusieurs responsables fonctionnels interviennent.",
        ],
      },
      {
        heading: "Construire l'AS-IS et mesurer avant de refaire",
        paragraphs: [
          "La cartographie AS-IS part d'un cas réel et récent : déclencheur, étapes, rôles, systèmes, données, décisions, exceptions, temps de travail et temps d'attente. BPMN 2.0.2, notation maintenue par l'Object Management Group, fournit un langage commun ; pour une petite mission, un diagramme en couloirs suffit souvent.",
          "Mesures utiles avant de refaire : volume par période, temps de travail actif, temps d'attente, taux de retour/reprise, taux d'erreur, nombre de transferts, nombre de saisies du même champ, coût par dossier, taux d'exception, satisfaction utilisateur/client. Le temps de cycle inclut les attentes ; le temps de traitement ne mesure que le travail actif — un dossier peut nécessiter 20 minutes de travail réel et prendre quatre jours à traverser l'organisation.",
        ],
      },
      {
        heading: "Lean appliqué au numérique",
        paragraphs: [
          "Avant d'automatiser, il faut chercher les gaspillages : attentes, sur-traitement, erreurs/reprises, mouvements inutiles d'information, stocks de dossiers en attente, information produite sans usage, transferts et capacité humaine mal utilisée. Une automatisation appliquée à une étape inutile rend l'inutilité plus rapide, pas plus juste.",
          "Séquence recommandée : supprimer → simplifier → standardiser → instrumenter → automatiser → mesurer.",
        ],
      },
      {
        heading: "Concevoir le TO-BE et choisir entre règles et IA",
        paragraphs: [
          "Le TO-BE doit répondre à six questions : quel résultat doit sortir du processus ? Quelle donnée est capturée à la source ? Quelle décision peut être déterministe ? Quelle exception nécessite un humain ? Quel système est source de vérité ? Quels événements doivent être journalisés pour le pilotage ?",
          "Utiliser des règles déterministes lorsque les critères sont stables et vérifiables ; utiliser l'IA lorsqu'il faut interpréter du langage, classer, résumer, extraire des données variables ou produire une recommandation probabiliste. Pour une décision financière ou réglementaire sensible, ajouter une validation humaine et un seuil de confiance.",
        ],
      },
    ],
  },
  {
    slug: "architecture-systeme-information",
    number: 4,
    title: "Architecture du système d'information",
    summary:
      "Représenter le système d'information en six couches, définir la source de vérité de chaque donnée, et choisir entre acheter, configurer, intégrer ou développer.",
    sections: [
      {
        heading: "Une architecture est une carte de responsabilités",
        paragraphs: [
          "Une architecture utile répond à trois niveaux de question : pour la direction, quelles capacités soutiennent l'activité et où sont les risques ? Pour les métiers, quels outils couvrent quel processus et quelle donnée fait autorité ? Pour l'IT, comment les composants communiquent-ils, sont-ils sécurisés, déployés et observés ?",
          "Six couches structurent une architecture numérique : canaux (web, mobile, WhatsApp, email, voix), expérience (site, portail, app, chatbot), métier (CRM, ERP, e-commerce, support), intégration (API, webhooks, iPaaS, event bus), data & IA (base de données, entrepôt, BI, RAG, agents) et infrastructure (cloud, VPS, conteneurs, réseau) — la sécurité, l'identité et l'observabilité restant transversales.",
          "Pour chaque application, un inventaire minimum précise : nom, fonction, owner métier, owner technique, fournisseur, utilisateurs, coût annuel, contrat, date de renouvellement, criticité, données principales, SSO/MFA, intégrations, sauvegarde/export et dépendances.",
        ],
      },
      {
        heading: "API, webhooks et source de vérité",
        paragraphs: [
          "Une API expose des opérations qu'un autre système peut demander ; un webhook informe un système qu'un événement vient de se produire. Chaque action déclenchée par un événement doit être conçue pour ne pas se répéter dangereusement si l'événement est reçu deux fois — c'est le principe d'idempotence.",
          "Décider quel système possède chaque donnée (le CRM pour le statut d'une opportunité, l'ERP pour la facture, l'outil RH pour le contrat) évite la synchronisation bidirectionnelle par défaut, qui ajoute des règles de conflit dès que deux systèmes peuvent modifier librement le même champ.",
        ],
      },
      {
        heading: "Acheter, configurer, intégrer ou développer",
        paragraphs: [
          "Quatre options : acheter un SaaS quand la capacité est standard et le marché mature ; configurer une plateforme existante quand les écarts portent surtout sur des règles et workflows ; intégrer plusieurs produits spécialisés quand aucun outil unique ne couvre le besoin ; développer lorsque la capacité crée un avantage spécifique ou nécessite un contrôle particulier.",
          "Le SaaS offre un délai plus court et un coût initial souvent plus faible, au prix d'un contrôle technique limité et d'un risque de verrouillage fournisseur. Le développement sur mesure est plus long et plus coûteux à construire, mais reste adaptable et évite la dette technique d'un outil mal ajusté au besoin. Le consultant calcule toujours le TCO sur plusieurs années et examine l'exportabilité des données, les API, le modèle de permissions et le SLA.",
        ],
      },
      {
        heading: "Principes d'une architecture cible",
        paragraphs: [
          "Une bonne architecture cible n'est pas un dessin de produits mais un ensemble de principes : identité centralisée et MFA pour les accès critiques, API documentées, journalisation sur les flux critiques, donnée propriétaire exportable, séparation des environnements développement/test/production, sauvegarde et restauration testées, secrets hors du code, droits minimaux, système de référence défini pour chaque objet métier et mécanisme de reprise manuelle pour les workflows critiques.",
        ],
      },
    ],
  },
  {
    slug: "strategie-data-bi-gouvernance",
    number: 5,
    title: "Stratégie data, BI et gouvernance",
    summary:
      "Faire de la donnée un actif utile : types de données, qualité, gouvernance, tableaux de bord orientés décision et préparation de la donnée pour l'IA.",
    sections: [
      {
        heading: "La donnée devient utile lorsqu'une décision l'utilise",
        paragraphs: [
          "Une stratégie data commence par les décisions, pas par les outils : quelles questions la direction, les équipes ou les systèmes doivent-ils pouvoir résoudre ? Quels clients risquent de partir ? Quel canal produit les clients à meilleure marge ? Quel stock doit être réapprovisionné ? À chaque décision correspondent des données, un niveau de qualité, une fréquence et une responsabilité.",
          "Types de données à distinguer : structurées, semi-structurées, non structurées, de référence, transactionnelles, événementielles et dérivées — avec une classification de sensibilité (publique, interne, confidentielle, données personnelles, secrets, données réglementées).",
        ],
      },
      {
        heading: "Qualité des données et gouvernance",
        paragraphs: [
          "Dimensions de qualité utiles : exactitude, complétude, unicité, cohérence, validité, fraîcheur et intégrité référentielle. Exemple du cours : un CRM contient 98 % d'emails renseignés mais 20 % sont invalides — la complétude paraît bonne, la validité ne l'est pas.",
          "La gouvernance précise qui décide : Data Owner côté métier, Data Steward chargé de la qualité et des définitions, équipe data pour les plateformes/pipelines, sécurité/DPO pour les risques et la conformité. Un comité de gouvernance n'a de valeur que s'il tranche réellement des priorités de qualité, d'accès et de définitions conflictuelles.",
        ],
      },
      {
        heading: "Concevoir un tableau de bord utile",
        paragraphs: [
          "Un tableau de bord doit répondre à des décisions, pas simplement afficher des chiffres. Pour chaque KPI : définition, formule, source, fréquence, owner, cible, seuil d'alerte et action associée. Se méfier des moyennes seules : pour les délais, médiane et percentiles montrent mieux la distribution qu'une moyenne unique.",
        ],
      },
      {
        heading: "Préparer la donnée pour l'IA",
        paragraphs: [
          "Un système RAG (retrieval-augmented generation) ou un agent ne résout pas une documentation incohérente. Avant toute indexation : supprimer les versions obsolètes, définir droits et métadonnées, préciser propriété et dates de validité, procédure de mise à jour, et évaluer la recherche sur des questions réelles avant de connecter des actions automatisées.",
        ],
      },
    ],
  },
  {
    slug: "cloud-infrastructure-devops-couts",
    number: 6,
    title: "Cloud, infrastructure, DevOps et coûts",
    summary:
      "Choisir une infrastructure proportionnée (IaaS/PaaS/SaaS), séparer les environnements, industrialiser avec CI/CD et l'observabilité, sans créer de dette d'exploitation.",
    sections: [
      {
        heading: "Le cloud comme modèle d'exploitation",
        paragraphs: [
          "Le NIST décrit le cloud à travers des caractéristiques comme l'accès à la demande, le partage de ressources, l'élasticité et la mesure du service, et distingue notamment IaaS (calcul, stockage et réseau, avec davantage de responsabilité côté client), PaaS (une plus grande partie de la plateforme d'exécution prise en charge) et SaaS (application complète livrée). Le bon choix dépend du niveau de contrôle requis, des compétences disponibles, de la criticité, du coût et du rythme de changement.",
          "Un VPS peut être économique et flexible pour des charges prévisibles, mais l'organisation devient responsable du système, des correctifs, de la surveillance, des sauvegardes et de la sécurité. La bonne question n'est pas \"quel hébergement est le moins cher ?\" mais \"quel coût total et quel niveau de risque pour maintenir le service pendant trois ans ?\".",
        ],
      },
      {
        heading: "Séparer les environnements, Git, CI/CD et observabilité",
        paragraphs: [
          "Production, test et développement doivent être séparés pour les systèmes significatifs, avec des secrets stockés dans un mécanisme adapté — jamais dans le dépôt Git ou un fichier partagé non contrôlé.",
          "Un pipeline CI/CD peut automatiser tests, analyse statique, build, scan de dépendances, migration contrôlée, déploiement et vérifications post-déploiement. Pour les applications critiques : stratégie de rollback, sauvegarde avant migration, feature flags, health checks et contrôle des changements.",
          "L'observabilité couvre trois familles classiques (logs, métriques, traces) plus les événements métier : un workflow peut être techniquement \"up\" alors qu'aucune facture n'a été créée depuis deux heures. Pour chaque service critique : disponibilité, latence, taux d'erreur, saturation et indicateurs métier, avec alertes et procédure d'escalade selon la criticité.",
        ],
      },
      {
        heading: "Sauvegarde, restauration et maîtrise des coûts",
        paragraphs: [
          "Une sauvegarde n'est pas validée parce qu'un fichier existe : il faut tester la restauration. Deux objectifs à définir : le RPO (quantité maximale de données que l'on accepte de perdre) et le RTO (durée maximale de restauration). Exemple du cours : un RPO de 15 minutes et un RTO de 2 heures imposent une architecture différente d'un site vitrine avec RPO 24 heures et RTO 48 heures.",
          "Le FinOps suit les coûts par service, environnement et équipe, avec des budgets et alertes, en cherchant les ressources inutilisées, le surdimensionnement, le stockage oublié, le trafic sortant, les coûts d'API et la duplication d'environnements. Pour l'IA, le coût ne se limite pas aux tokens : indexation, stockage, outils, observabilité, évaluations et temps humain de validation et de reprise comptent aussi.",
        ],
      },
    ],
  },
  {
    slug: "automatisation-api-rpa-low-code",
    number: 7,
    title: "Automatisation, API, RPA et low-code",
    summary:
      "Identifier les bons candidats à l'automatisation, choisir entre API, workflow, RPA ou agent IA, concevoir un workflow robuste et calculer son ROI réel.",
    sections: [
      {
        heading: "Automatiser une décision, un transfert ou une action",
        paragraphs: [
          "Les opportunités se trouvent généralement dans quatre catégories : transfert de données entre systèmes, orchestration d'un processus, traitement répétitif d'un document et déclenchement d'actions suivant des règles. L'automatisation est adaptée lorsque le volume est significatif, les entrées sont suffisamment stables, les règles sont connues, les exceptions sont gérables et le résultat est mesurable.",
          "Un score de candidature note de 1 à 5 : volume, répétitivité, standardisation, douleur, taux d'erreur, valeur, disponibilité des API, qualité des données — avec un malus pour risque, exceptions et dépendances fragiles.",
        ],
      },
      {
        heading: "API-first, et robustesse : ce que les démonstrations oublient",
        paragraphs: [
          "Une intégration par API est généralement plus robuste qu'une automatisation qui clique sur une interface (RPA). Le RPA reste utile lorsqu'aucune API n'existe ou pour des systèmes anciens, mais il faut anticiper les changements d'écran, temps de chargement, sessions et contrôles anti-bot.",
          "Un workflow robuste distingue déclencheur, validation, enrichissement, logique, actions, journalisation, erreur, retry et escalade — avec des règles précises : l'idempotence (un même événement reçu deux fois ne doit pas créer deux factures), le retry avec temporisation, une file d'échec visible pour les cas non résolus, un timeout par étape, une traçabilité par identifiant et statut, la possibilité de reprise manuelle, des permissions limitées pour le compte technique, et des secrets gérés hors du workflow exporté publiquement.",
        ],
      },
      {
        heading: "n8n, Make, iPaaS et automatisation documentaire",
        paragraphs: [
          "Les plateformes low-code accélèrent la connexion de services et donnent de la visibilité aux équipes ; un workflow codé peut être préférable pour des volumes élevés, des tests complexes ou une logique très spécifique. En 2026, des plateformes comme n8n documentent des workflows utilisant des agents IA, des appels d'outils et des validations humaines — la compétence utile n'est donc pas seulement \"savoir déplacer des nœuds\", mais concevoir l'orchestration, les données, les erreurs, les garde-fous et la maintenance.",
          "Un pipeline d'automatisation documentaire courant : réception → antivirus/validation → classification → extraction → validation des champs → contrôle métier → écriture dans le système de référence → archivage → notification. Avec l'IA, séparer les champs simples des décisions : extraire un numéro de facture peut être automatique avec contrôles, approuver un paiement inhabituel doit rester soumis à une politique explicite.",
        ],
      },
      {
        heading: "Calculer le ROI et gouverner les automatisations",
        paragraphs: [
          "Variables : volume mensuel V, temps manuel T, coût horaire C, taux d'automatisation A, coût d'erreur E, taux d'erreur avant/après, coût mensuel M. Gain temps mensuel = V × T × A × C. Gain erreurs = erreurs évitées × coût moyen d'une erreur. Gain net mensuel = gain temps + gain erreurs + valeur additionnelle − M. La valeur peut aussi être une accélération de revenu (relancer un lead en 5 minutes plutôt qu'en 24 heures améliore la conversion) — à mesurer séparément.",
          "Un registre de gouvernance recense pour chaque automatisation : nom, owner métier, owner technique, criticité, déclencheur, systèmes, identités techniques, données sensibles, coût, dernière modification, procédure d'échec, SLA et date de revue. Les workflows abandonnés sont une dette : revue trimestrielle, tests après changements d'API, alertes sur les échecs.",
        ],
      },
    ],
  },
  {
    slug: "ia-rag-agents-mcp",
    number: 8,
    title: "Intelligence artificielle, RAG, agents, MCP et gouvernance",
    summary:
      "Distinguer prompting, RAG, fine-tuning et agents, concevoir un cas d'usage IA maîtrisé, et organiser la gouvernance et la sécurité spécifique à l'IA générative.",
    sections: [
      {
        heading: "De l'IA prédictive à l'IA générative, et le bon cas d'usage",
        paragraphs: [
          "Le machine learning traditionnel apprend des relations pour prédire ou classer (fraude, churn, demande, défaut). Les modèles génératifs produisent ou transforment du texte, des images, de l'audio ou du code ; les LLM peuvent interpréter des instructions et appeler des outils, ce qui permet de construire des agents capables d'enchaîner plusieurs étapes.",
          "Un cas d'usage IA doit préciser : utilisateur, problème, entrée, sortie, décision, niveau de risque, baseline, métrique d'évaluation, coût maximum et procédure d'escalade. Exemples raisonnables : résumé d'appels, extraction de données de documents, classification de tickets, recherche documentaire, assistance au support. Cas plus sensibles nécessitant des contrôles renforcés : décision de crédit, recrutement, action financière, modification massive de données, accès à des données de santé ou décision réglementée.",
        ],
      },
      {
        heading: "Prompting, RAG, fine-tuning, outils et agents",
        paragraphs: [
          "Prompting : fournir instructions, contexte et exemples. RAG : rechercher des éléments dans une source externe et les injecter dans le contexte — ce n'est pas une base de données de remplacement, et cela ne dispense ni de droits d'accès ni de qualité documentaire. Fine-tuning : adapter un modèle avec des exemples d'entraînement pour modifier certains comportements. Outils : permettre au modèle d'appeler une fonction ou un service externe. Agent : boucle de décision qui sélectionne actions et outils jusqu'à un résultat ou une condition d'arrêt.",
          "Le Model Context Protocol (spécification du 28 juillet 2026) formalise des ressources, prompts et outils exposés par des serveurs, standardisant l'interface entre applications IA et capacités externes. Le risque principal est symétrique : une connexion à un outil donne un pouvoir d'action — authentification, autorisation, validation des paramètres, journalisation et limites deviennent indispensables.",
        ],
      },
      {
        heading: "Agent unique ou multi-agent, et validation humaine",
        paragraphs: [
          "Ne pas choisir plusieurs agents parce que le diagramme paraît plus avancé : un agent unique avec des outils explicites est plus simple à tester. Plusieurs agents sont utiles lorsque des rôles, permissions ou contextes distincts rendent la séparation utile (ex. un agent support qui lit les tickets et la base documentaire, un agent finance à l'accès limité aux factures) — l'orchestrateur ne doit pas transmettre automatiquement des données sensibles à tous les sous-agents.",
          "Actions qui doivent nécessiter une confirmation humaine : paiement, remboursement, annulation, envoi à un large public, suppression de données, modification contractuelle, décision affectant fortement une personne, action inhabituelle ou hors politique, réponse quand la confiance est faible. Une validation humaine doit afficher les informations nécessaires à la décision — un simple bouton \"Approuver\" sans contexte n'est pas un contrôle efficace.",
        ],
      },
      {
        heading: "Évaluer avant de croire, gouvernance et sécurité GenAI",
        paragraphs: [
          "Construire un dataset de cas réels (normaux, difficiles, adversariaux, hors périmètre) avec pour chacun un résultat attendu ou des critères de réussite. Métriques utiles : exactitude, complétude, groundedness, refus approprié, taux d'escalade, latence, coût, taux d'action correcte.",
          "Le NIST AI RMF organise la gestion du risque autour de quatre fonctions : Govern, Map, Measure et Manage. Pour une entreprise, la gouvernance IA doit couvrir : inventaire des systèmes et cas d'usage, classification du risque, owner métier et technique, fournisseurs et modèles utilisés, données accessibles, règles de conservation, évaluations, limites d'action, incidents et changements de modèle, procédure d'arrêt. L'AI Act européen impose depuis le 2 août 2026 des obligations de transparence dans certaines interactions avec des systèmes IA et pour certains contenus générés — les obligations précises dépendent du rôle et du cas d'usage, et doivent être vérifiées au cas par cas.",
          "Les risques spécifiques aux applications LLM/agentiques identifiés par OWASP incluent notamment les injections de prompt, les sorties non sûres, la mauvaise gestion des outils, la confiance excessive et les fuites de données. Mesures pratiques : isoler les secrets, filtrer les outils disponibles, appliquer le moindre privilège, valider les arguments, journaliser les appels, limiter fréquence et montants, demander confirmation pour les actions sensibles, et tester avec des prompts adversariaux.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurite-confidentialite-resilience",
    number: 9,
    title: "Cybersécurité, confidentialité et résilience",
    summary:
      "Intégrer la sécurité dès le diagnostic avec le NIST CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover), protéger identités et données, et anticiper les risques spécifiques à l'IA.",
    sections: [
      {
        heading: "La digitalisation augmente la surface d'attaque",
        paragraphs: [
          "Plus de systèmes, d'API, de comptes SaaS, d'automatisations et d'agents signifient davantage d'identités, de secrets et de flux à protéger. La sécurité doit donc être intégrée au diagnostic et au portefeuille d'initiatives, pas ajoutée après le lancement.",
          "Le NIST Cybersecurity Framework 2.0 organise les résultats de cybersécurité autour de six fonctions : Govern (qui décide du risque — politique, rôles, tolérance, exigences fournisseurs), Identify (inventorier appareils, applications, comptes, données, sauvegardes, y compris le \"shadow IT\" — outils utilisés sans gouvernance formelle), Protect (identités et accès), Detect, Respond et Recover.",
        ],
      },
      {
        heading: "Protéger identités et accès, sécuriser les applications",
        paragraphs: [
          "Mesures prioritaires dans de nombreuses PME : authentification multifacteur (MFA), SSO lorsque pertinent, comptes nominatifs, suppression des comptes partis, moindre privilège, gestion des comptes admin, rotation des secrets, correctifs, chiffrement, sauvegardes, configuration sécurisée et formation anti-phishing. Un compte partagé empêche d'attribuer les actions ; un compte administrateur utilisé au quotidien augmente le risque — séparer administration et usage normal.",
          "OWASP publie un Top 10 des risques d'applications web qui sert de point de départ à la sensibilisation, complété par une revue d'architecture, des tests, la gestion des dépendances, des secrets et des contrôles métier. Pour les API : authentification, autorisation objet par objet, limitation de débit, validation d'entrée, journalisation et gestion des versions.",
        ],
      },
      {
        heading: "Détecter, répondre, minimiser la donnée",
        paragraphs: [
          "Détecter suppose de centraliser les logs critiques et de surveiller authentifications, modifications d'admin, erreurs massives, changements de permissions, exfiltration potentielle et comportements inhabituels — une alerte doit conduire à une action, une centaine d'emails d'alerte non lus ne constitue pas une capacité de détection.",
          "Préparer avant l'incident : contacts, rôles, canaux hors bande, sauvegardes, fournisseurs, critères d'escalade, collecte de preuves, exercices. Après incident : contenir, éradiquer, restaurer, surveiller et tirer des actions correctives — la restauration doit être testée avant une crise, pas pendant.",
          "Minimisation des données : ne collecter que ce qui est nécessaire à un objectif défini, documenter finalité, accès, durée de conservation, partage et suppression. Pour un projet IA, vérifier aussi si les données sont envoyées à un fournisseur externe, utilisées pour l'entraînement, transférées entre régions ou présentes dans les logs — l'anonymisation et la pseudonymisation sont différentes, une donnée pseudonymisée peut souvent être reliée de nouveau à une personne avec une information supplémentaire.",
        ],
      },
      {
        heading: "Risques spécifiques à l'IA et registre de risques",
        paragraphs: [
          "Le registre cyber doit intégrer les risques propres à l'IA : injection de prompt, données sensibles présentes dans le contexte, outils trop permissifs, dépendance à un fournisseur de modèle unique, fuite via les logs, exfiltration par un outil, contenus non fiables et modification de comportement après une mise à jour du modèle. Le bon contrôle ne consiste pas uniquement à écrire \"ne fais pas ceci\" dans le prompt — les permissions et validations doivent exister au niveau système.",
          "Chaque fiche de risque documente : actif, menace, vulnérabilité, probabilité, impact, risque brut, traitement, owner, échéance et risque résiduel après traitement. Exemple du cours : actif CRM, menace compromission d'un compte administrateur, vulnérabilité MFA absent, probabilité 4/5, impact 5/5, traitement MFA + compte admin séparé + journalisation, risque résiduel ramené de 20/25 à 10/25.",
        ],
      },
    ],
  },
  {
    slug: "ux-produit-experience-client",
    number: 10,
    title: "UX, produit et expérience client numérique",
    summary:
      "Cartographier le parcours client, concevoir des personas fondés sur des données, appliquer les principes UX essentiels et mesurer l'expérience avec le bon funnel.",
    sections: [
      {
        heading: "Le parcours avant l'interface",
        paragraphs: [
          "Une interface n'est qu'un point de contact dans un parcours plus large : déclencheur, découverte, évaluation, conversion, onboarding, usage, support, renouvellement et recommandation. Pour chaque étape : objectif du client, canal, émotion, données captées, friction et opportunité. Un parcours B2B peut commencer par une recherche, passer par un formulaire, un appel, une démonstration, un devis, une signature et un onboarding — le client ne devrait pas répéter les mêmes informations à chaque transfert si l'organisation possède déjà la donnée et peut légalement la réutiliser.",
          "Un persona utile décrit une situation de décision, pas un personnage décoratif : contexte, tâche à accomplir, critères de décision, objections, canaux, contraintes, vocabulaire et signaux de confiance, construits à partir d'entretiens, tickets, appels, analytics, CRM et observations — pas de détails démographiques inventés sans utilité.",
        ],
      },
      {
        heading: "Principes UX, accessibilité et tests d'utilisabilité",
        paragraphs: [
          "Principes pratiques : une action principale claire par écran lorsque possible, information progressive plutôt que surcharge, labels explicites, validation proche du champ, confirmation après action, prévention des erreurs plutôt que messages tardifs, formulaires proportionnés à la valeur de l'étape, état de chargement et d'erreur compréhensible, performance mesurée sur des appareils réels.",
          "WCAG 2.2 est la recommandation W3C actuelle pour l'accessibilité du contenu web. Sans remplacer un audit de conformité, tout expert doit intégrer navigation clavier, contrastes, labels, focus, textes alternatifs, structure sémantique, messages d'erreur et cibles tactiles suffisantes — l'accessibilité améliore aussi la robustesse de l'interface pour mobile, clavier, lecteurs d'écran et contextes de connexion imparfaite.",
          "Un test simple avec quelques utilisateurs ciblés peut révéler des problèmes majeurs : donner une tâche, observer sans guider, noter erreurs, hésitations, temps et verbatim — pas seulement demander \"aimez-vous le design ?\".",
        ],
      },
      {
        heading: "Mesurer l'expérience et personnaliser de façon responsable",
        paragraphs: [
          "Indicateurs selon le parcours : taux d'activation, conversion, abandon, délai de première valeur, rétention, réachat, tickets, CSAT, CES et NPS — le NPS seul ne remplace pas les mesures comportementales. L'analyse d'un funnel cherche l'étape où la perte est anormale, puis la cause : un faible taux de conversion peut venir d'un trafic peu qualifié, d'une offre confuse, d'une page lente, d'un formulaire trop long, d'un prix ou d'un suivi commercial tardif.",
          "Personnaliser avec les données disponibles et une finalité claire (contenu selon segment, onboarding selon usage, relance selon statut), en évitant les profils opaques ou l'utilisation de données sensibles sans fondement adapté — et toujours avec un groupe de comparaison ou un test pour mesurer l'impact réel de la personnalisation.",
        ],
      },
    ],
  },
  {
    slug: "marketing-digital-et-mesure",
    number: 11,
    title: "Marketing digital et mesure en 2026",
    summary:
      "Construire une stratégie d'acquisition ancrée dans l'économie du client, avec SEO, paid media, contenu, tracking et attribution — et les bons KPI pour décider.",
    sections: [
      {
        heading: "Partir de l'économie, pas des canaux",
        paragraphs: [
          "Avant SEO ou publicité, déterminer panier/marge, fréquence d'achat, LTV, capacité commerciale, zones, saisonnalité et délai de vente. Un canal rentable à petite échelle peut devenir non rentable si l'équipe ne traite pas les leads assez vite.",
          "Formules de référence : CAC = coûts d'acquisition / nouveaux clients attribués. CPL = dépenses / leads. ROAS = revenu attribué / dépenses publicitaires. MER = revenu total / dépenses marketing. LTV contributive ≈ marge moyenne par période × durée moyenne de relation. Le ratio LTV/CAC n'a de sens que si les deux termes sont calculés avec des conventions cohérentes.",
        ],
      },
      {
        heading: "SEO et recherche générative en 2026",
        paragraphs: [
          "Google indique que les bonnes pratiques SEO fondamentales restent valables pour les AI Overviews et l'AI Mode : structure technique claire, contenu unique et utile — et déconseille les \"hacks\" présentés comme obligatoires, notamment l'idée qu'un fichier llms.txt, un balisage spécial IA ou un découpage artificiel du texte seraient nécessaires pour apparaître dans ses fonctions génératives. Depuis juin 2026, Search Console propose un rapport dédié à la visibilité dans les fonctions génératives de recherche.",
          "Travail SEO moderne : intention et besoins réels, contenu original fondé sur expertise/données/expérience, architecture/crawl/indexation/canonicals/performance, entités et cohérence de marque, données structurées lorsqu'elles correspondent à une fonctionnalité réelle, images/vidéos utiles, autorité éditoriale et liens obtenus légitimement, suivi Search Console classique plus visibilité générative disponible. Le contenu produit à grande échelle par IA sans valeur ajoutée peut tomber sous les politiques anti-spam de Google.",
        ],
      },
      {
        heading: "Paid media, contenu et social",
        paragraphs: [
          "Une campagne se structure autour d'une offre, d'une audience, d'un message, d'une landing page, d'une mesure de conversion et d'une économie unitaire. Les plateformes publicitaires utilisent de plus en plus des systèmes d'optimisation automatisés : l'expert doit protéger la qualité des signaux envoyés (conversions pertinentes, valeurs, données first-party, exclusions, budgets) — une plateforme optimise vers le signal qu'on lui donne, même s'il ne reflète pas le revenu réel.",
          "Le rôle du contenu dépend du cycle de vente : découverte, preuve, éducation, comparaison, conversion ou fidélisation. Un calendrier éditorial sans hypothèse de distribution et de mesure devient une routine de production sans impact mesurable — chaque série de contenu doit être reliée à un objectif et un mode de capture.",
        ],
      },
      {
        heading: "Tracking, consentement, attribution et tableau de bord",
        paragraphs: [
          "Une architecture de mesure doit cartographier événements, conversions, identifiants, sources, consentement, outils et destinations. Le Consent Mode de Google permet d'ajuster le comportement des balises selon l'état de consentement — il faut tester les scénarios accepter/refuser/aucune action et documenter l'impact sur la mesure.",
          "L'attribution est une convention de mesure, pas la vérité absolue : les plateformes peuvent revendiquer le même client. Comparer source CRM, UTM, appels, données de vente, et ajouter un modèle analytique ou des tests géographiques/d'incrémentalité lorsque l'enjeu le justifie. Un tableau de bord marketing utile tient sur une page : dépenses, pipeline/revenu, CAC/CPL, conversion par étape, top canaux, qualité des leads, délai de réponse, marge, tendance et actions décidées — en séparant leading indicators (impressions qualifiées, trafic, leads) et lagging indicators (revenu, marge, rétention).",
        ],
      },
    ],
  },
  {
    slug: "crm-vente-service-client-omnicanal",
    number: 12,
    title: "CRM, vente et service client omnicanal",
    summary:
      "Concevoir un modèle CRM et un pipeline commercial disciplinés, organiser un service client omnicanal réel, et connecter IA et agents sans perdre le contrôle.",
    sections: [
      {
        heading: "Le CRM est une discipline avant d'être un logiciel",
        paragraphs: [
          "Un CRM doit représenter le cycle de relation : compte/entreprise, contact, lead, opportunité, activité, devis, commande, ticket — avec des champs obligatoires, des statuts, des règles de transition, une ownership et une source de vérité clairement définis. Un CRM échoue souvent parce que l'entreprise demande trop de saisie sans valeur pour l'utilisateur : automatiser l'enrichissement et la journalisation quand c'est fiable, mais garder les décisions importantes visibles.",
          "Un pipeline commercial doit avoir des critères d'entrée/sortie par étape (ex. Lead → Qualifié → Découverte réalisée → Proposition → Négociation → Gagné/Perdu). Une opportunité ne passe pas en \"Proposition\" parce que le commercial le souhaite : une proposition a réellement été envoyée. Cette discipline améliore les prévisions. KPI utiles : volume par source, taux de qualification, conversion par étape, âge des opportunités, durée du cycle, win rate, montant moyen, motif de perte, activité et délai de suivi.",
        ],
      },
      {
        heading: "Lead routing, SLA et omnicanal réel",
        paragraphs: [
          "Une automatisation peut attribuer les leads selon zone, produit, langue, disponibilité ou score, avec un SLA de premier contact et une alerte en cas de dépassement — le routage doit avoir un fallback : si personne n'accepte le lead, il revient dans une file centrale.",
          "L'omnicanal réel signifie que la conversation conserve son contexte entre les canaux : un client qui commence sur WhatsApp puis appelle ne devrait pas raconter toute l'histoire si les règles de confidentialité et les systèmes permettent le partage. Centraliser l'identité du client, les consentements, l'historique pertinent et le statut — sans recopier intégralement les conversations sensibles dans des systèmes qui n'en ont pas besoin.",
        ],
      },
      {
        heading: "Service client, support et IA dans la vente",
        paragraphs: [
          "Structurer le support par catégorie, priorité, SLA, owner, statut, cause racine et résolution, avec des mesures de première réponse, temps de résolution, réouverture, backlog, satisfaction et volume par cause. Une hausse de tickets sur un motif précis peut révéler un défaut produit ou processus — le support devient alors une source d'amélioration, pas seulement un centre de coût.",
          "Usages IA raisonnables dans la vente et le support : transcription/résumé, suggestion de réponse, recherche documentaire, classification, extraction d'action, préparation de compte rendu, scoring assisté. Pour un chatbot externe : informer l'utilisateur lorsque nécessaire, offrir une sortie vers un humain et limiter l'accès aux données. Pour un agent capable de modifier une commande : séparer lecture et action, appliquer des seuils et journaliser.",
        ],
      },
      {
        heading: "Marketing automation reliée au CRM",
        paragraphs: [
          "Les séquences doivent se déclencher selon un événement réel (inscription, demande, absence de réponse, proposition envoyée, renouvellement) — en évitant les séquences qui continuent après conversion parce que les systèmes ne se synchronisent pas (un bot qui relance un prospect déjà client révèle un défaut d'intégration à corriger, pas un comportement souhaitable). Mesurer le revenu et le pipeline créés, pas uniquement les ouvertures et les clics.",
        ],
      },
    ],
  },
  {
    slug: "operations-erp-supply-chain-iot",
    number: 13,
    title: "Opérations, ERP, supply chain et IoT",
    summary:
      "Numériser les opérations sans créer d'administration parallèle : rôle de l'ERP, chaînes procure-to-pay et order-to-cash, stocks, traçabilité et IoT.",
    sections: [
      {
        heading: "L'ERP : système transactionnel central, pas solution magique",
        paragraphs: [
          "Un ERP gère des transactions et référentiels structurants (clients, fournisseurs, produits, achats, stocks, ventes, facturation, comptabilité, production selon les modules) ; son intérêt dépend de la qualité des processus, des paramétrages et des données. Avant toute migration ERP : nettoyer les référentiels, définir la codification, les responsabilités, les règles de validation, les données historiques à reprendre, les rapprochements et un plan de cutover.",
          "Deux chaînes servent souvent de point de départ à l'analyse. Procure-to-Pay : besoin → demande d'achat → approbation → commande fournisseur → réception → facture → rapprochement → paiement. Order-to-Cash : demande/commande → validation → préparation/prestation → livraison → facture → paiement → rapprochement. Cartographier aussi les exceptions : commande partielle, retour, litige, remise, rupture, annulation, avoir.",
        ],
      },
      {
        heading: "Stocks, traçabilité et IoT",
        paragraphs: [
          "Les données de stock doivent distinguer stock physique, disponible, réservé, en transit et théorique — les écarts indiquent souvent un problème de processus ou d'enregistrement plutôt qu'une simple erreur de comptage. Notions utiles : point de commande, stock de sécurité, lead time fournisseur, rotation, couverture, taux de rupture, valeur immobilisée, obsolescence. Une prévision n'est pas une certitude : utiliser des scénarios et des marges de sécurité adaptées au coût d'une rupture comparé au coût de stockage.",
          "Codes-barres, QR, RFID et événements système permettent de suivre produit, lot, emplacement et statut — choisir le niveau de traçabilité selon le risque, la réglementation, le coût et la valeur du produit. L'IoT collecte des mesures via capteurs (température, vibration, position, consommation, état machine), et l'edge computing traite certaines données près de la source pour la latence, la bande passante ou la continuité. Avant un projet IoT : fréquence, précision, autonomie, connectivité, maintenance, sécurité des appareils, identité, mises à jour, volume de données et action déclenchée doivent être définis — un projet IoT commence par l'information et l'action recherchées, pas par le choix d'un capteur.",
        ],
      },
      {
        heading: "Maintenance terrain et dashboard opérationnel",
        paragraphs: [
          "Digitaliser les ordres de travail (création, priorité, assignation, pièces, photos, temps, résolution, clôture) : une application mobile offline peut être plus utile qu'un tableau de bord sophistiqué si les techniciens travaillent sans connexion fiable.",
          "KPI opérationnels utiles : OTIF (on time in full), délai de préparation, taux de rupture, rotation, exactitude de l'inventaire, coût de traitement, rendement, taux de défaut, downtime, OEE selon le contexte. Chaque KPI doit déclencher une action — un écran temps réel sans routine opérationnelle ne change pas la performance.",
        ],
      },
    ],
  },
  {
    slug: "modeles-affaires-numeriques",
    number: 14,
    title: "Modèles d'affaires numériques et économie unitaire",
    summary:
      "Analyser comment une entreprise crée et capture la valeur, distinguer abonnement, marketplace, plateforme, usage et freemium, et construire l'économie unitaire.",
    sections: [
      {
        heading: "Modèle économique avant modèle technologique",
        paragraphs: [
          "Un modèle décrit : client, problème, proposition de valeur, canal, ressources, activités, partenaires, revenus et coûts. Le numérique modifie souvent le coût marginal, la distribution, la mesure et la capacité de personnalisation — c'est ce changement qu'il faut analyser avant de choisir un outil.",
          "L'abonnement convertit un achat en revenu récurrent et exige une valeur renouvelée : MRR/ARR, churn logo, churn revenu, expansion, ARPA, CAC, payback et LTV en sont les KPI. Net Revenue Retention = (revenu début − churn − contraction + expansion) / revenu début. Une croissance d'acquisition peut masquer un churn élevé — les cohortes et la rétention donnent une vue plus saine.",
        ],
      },
      {
        heading: "Marketplace, plateforme, freemium et usage",
        paragraphs: [
          "Une marketplace met en relation offre et demande (indicateurs : GMV, take rate, liquidité, temps de match, répétition, fraude, coût d'acquisition des deux côtés) ; son défi est souvent le démarrage — attirer une partie sans valeur si l'autre n'est pas présente, ce qui peut nécessiter une stratégie de niche ou un côté subventionné.",
          "Une plateforme fournit des règles et interfaces permettant à plusieurs acteurs de créer ou d'interagir (des API permettent à des partenaires de construire des extensions) : gouvernance, qualité, sécurité et règles économiques deviennent centrales. Les effets de réseau ne doivent pas être affirmés sans preuve — ils existent seulement lorsque la valeur pour un utilisateur augmente réellement avec le nombre ou la qualité des autres participants.",
          "Le freemium donne un niveau gratuit pour acquérir et démontrer la valeur, puis monétise fonctions, volume ou service — il nécessite de contrôler le coût du service gratuit et le taux de conversion. Le paiement à l'usage aligne le prix sur la consommation (utile pour API, infrastructure ou transactions) mais peut rendre la facture moins prévisible pour le client.",
        ],
      },
      {
        heading: "Économie unitaire et test d'un nouveau revenu",
        paragraphs: [
          "Une unité peut être un client, une commande, une transaction, un dossier ou un kilomètre : calculer revenu, coût variable, marge contributive, acquisition et support pour cette unité. Exemple du cours : SaaS à 50 € de MRR, marge brute 80 %, churn mensuel 2 % — LTV simplifiée avant autres coûts ≈ 50 × 0,8 / 0,02 = 2 000 €, une formule qui suppose un churn stable et doit être utilisée prudemment.",
          "Avant de construire un nouveau revenu : problème, segment, willingness-to-pay, proposition, prototype, prévente, test de prix et preuve d'usage. Une transformation réussie peut aussi consister à supprimer une idée qui ne trouve pas de demande, plutôt qu'à la développer entièrement d'abord.",
        ],
      },
    ],
  },
  {
    slug: "conduite-du-changement-gouvernance-delivery",
    number: 15,
    title: "Conduite du changement, gouvernance et delivery",
    summary:
      "Passer de la solution conçue à la solution utilisée : parties prenantes, sponsor, RACI, mode de delivery, adoption mesurée et gestion des résistances.",
    sections: [
      {
        heading: "Le changement est une modification du travail réel",
        paragraphs: [
          "Un projet peut être techniquement réussi et opérationnellement rejeté. L'adoption dépend de la compréhension du besoin, de la capacité, des incitations, de la simplicité, du management et du support. Le World Economic Forum identifie le déficit de compétences comme un frein majeur à la transformation pour 63 % des employeurs interrogés — ce qui justifie d'intégrer formation et montée en compétence dans le portefeuille d'initiatives, pas dans une ligne tardive nommée \"communication\".",
          "Cartographier les parties prenantes pour chaque groupe : pouvoir, intérêt, impact, position, préoccupations, bénéfice attendu, risques, message et action. Exemple du cours : les commerciaux peuvent percevoir le CRM comme une surveillance — le consultant doit comprendre ce qui est réellement difficile (saisie supplémentaire, données inexactes, objectifs de management, perte de liberté ou mauvaise interface).",
        ],
      },
      {
        heading: "Sponsor, RACI et mode de delivery",
        paragraphs: [
          "Le sponsor donne légitimité, arbitre les conflits et protège les priorités ; un sponsor qui délègue toutes les décisions à l'IT laisse le projet vulnérable aux conflits métier. Cadence recommandée : comité de pilotage pour décisions et risques, équipe projet pour la livraison, owners métier pour processus et adoption.",
          "La matrice RACI (Responsible, Accountable, Consulted, Informed) clarifie les responsabilités sans produire une matrice géante que personne ne consulte — les décisions structurantes à attribuer explicitement portent sur les priorités, l'architecture, le risque, le budget, les données, la sécurité, l'acceptation métier et la mise en production.",
          "Agile convient à l'incertitude et au feedback fréquent, mais ne signifie pas absence de plan : un produit numérique a une vision, un backlog, des utilisateurs, une mesure et un cycle d'amélioration. Un programme de transformation coordonne plusieurs initiatives et dépendances — les équipes peuvent travailler en itérations, tandis que la direction pilote par résultats trimestriels et jalons structurants.",
        ],
      },
      {
        heading: "Adoption, communication, formation et résistances",
        paragraphs: [
          "KPI d'adoption : utilisateurs actifs, fréquence, taux d'exécution dans le nouveau processus, contournements, complétude des données, erreurs, tickets, satisfaction, temps de tâche — éviter de mesurer uniquement \"le nombre de personnes formées\" : une formation terminée ne prouve pas que l'outil est utilisé correctement.",
          "Le message de communication change selon le public : la direction veut valeur et risque, les managers veulent impacts et planning, les utilisateurs veulent savoir ce qui change dans leur journée, l'IT veut architecture et exploitation. Le plan de formation doit être segmenté par rôle, utiliser des données et scénarios réels, prévoir un environnement de test, des procédures courtes, des vidéos ciblées et un support après lancement — former des champions internes qui deviennent le premier relais.",
          "Ne pas étiqueter toute objection comme une résistance irrationnelle : une objection peut révéler une exigence oubliée. Classer les résistances par cause — incompréhension, capacité, intérêt, peur du risque, charge de travail, conflit de rôle ou défaut réel de la solution — avant de sanctionner un manque d'adoption apparent.",
        ],
      },
    ],
  },
  {
    slug: "roi-kpi-portefeuille-feuille-de-route",
    number: 16,
    title: "ROI, KPI, portefeuille et feuille de route",
    summary:
      "Évaluer un portefeuille d'initiatives en valeur, coût, risque et faisabilité, construire une feuille de route de 12 à 36 mois, et suivre la réalisation de la valeur après déploiement.",
    sections: [
      {
        heading: "Une roadmap est un système de décisions",
        paragraphs: [
          "Une bonne feuille de route répond à : où sommes-nous, quelle cible, quelles capacités manquent, quelles initiatives, dans quel ordre, avec quelles dépendances, quel budget, qui décide, comment mesurer. Une liste de logiciels avec des dates n'est pas une roadmap.",
          "Chaque carte initiative comporte : problème/opportunité, résultat métier, périmètre, owner, coût initial et récurrent, bénéfices et hypothèses, KPI baseline/cible, dépendances, risques, impacts data/sécurité, impact humain, statut et prochaine décision. Le portefeuille évite que chaque département présente son projet comme urgent sans comparaison commune.",
        ],
      },
      {
        heading: "Priorisation multi-critères et budget",
        paragraphs: [
          "Une formule possible : priorité = valeur × confiance × urgence / (effort × risque), ou un score pondéré — la formule ne remplace pas la discussion, elle rend les hypothèses visibles. Facteurs à inclure : valeur, stratégie, conformité, risque, effort, dépendances, disponibilité des compétences, préparation des données et capacité d'adoption.",
          "Le budget se présente en CapEx/OpEx selon les pratiques de l'entreprise (coût interne, licence, intégration, migration, accompagnement, formation, support, sécurité, contingence), avec trois scénarios construits : minimum viable, recommandé, accéléré — la direction arbitre en voyant ce qui est sacrifié ou gagné dans chaque scénario.",
        ],
      },
      {
        heading: "Feuille de route 30-60-90 jours, puis 12 à 36 mois",
        paragraphs: [
          "0-30 jours : cadrage, diagnostic, inventaire, cartographie des processus prioritaires, baseline KPI, risques critiques, quick wins sûrs, gouvernance, portefeuille initial. 31-60 jours : processus TO-BE, intégrations prioritaires, qualité des données, dashboard V1, sécurité prioritaire, pilotes d'automatisation/IA, plan d'adoption. 61-90 jours : évaluation des pilotes, décisions Go/No-Go, documentation, support, architecture cible validée, business cases majeurs, roadmap 12 mois et budget.",
          "La roadmap à 12 mois s'organise par capacités (pas par fournisseurs) — sécurité/identité, processus, applications, intégration, data, IA, client, compétences, gouvernance — avec des résultats observables chaque trimestre. Au-delà d'un an, éviter le faux niveau de précision : définir des horizons et capacités (fondations, intégration, intelligence, nouveaux modèles) et réévaluer chaque trimestre ou semestre selon la volatilité — une initiative future peut changer de technologie, le résultat visé peut rester stable.",
          "Types de dépendances à cartographier : technique, data, sécurité, fournisseur, compétence, réglementation, budget, adoption. Exemple du cours : un \"agent IA service client\" dépend d'une base documentaire propre, de permissions, d'une intégration CRM/API et d'un dataset d'évaluation — le placer avant ces fondations augmente le risque.",
        ],
      },
      {
        heading: "Arbre KPI et réalisation de la valeur",
        paragraphs: [
          "Un arbre KPI relie l'activité numérique à un résultat métier : par exemple automatisation → temps de cycle ↓ → capacité ↑ → délai client ↓ → conversion/rétention ↑ → marge ↑ — chaque flèche reste une hypothèse à mesurer, pas une certitude. Catégories utiles : valeur (revenu, marge, coût, cash, risque), client (conversion, rétention, délai, satisfaction), opérations (cycle, qualité, erreur, productivité), tech (disponibilité, latence, incidents, coûts), adoption (usage, complétude, contournement), sécurité (MFA, vulnérabilités, incidents, restauration).",
          "Le business case initial est une hypothèse : après mise en production, comparer baseline, cible et réel, et documenter la cause des écarts. Créer un benefit owner pour chaque bénéfice majeur (le directeur commercial porte l'amélioration du taux de conversion, même si l'IT a livré le CRM), avec une revue mensuelle couvrant KPI et tendance, bénéfices réalisés, coûts réels vs budget, risques, décisions, dépendances, capacité équipe et changements de priorité.",
        ],
      },
    ],
  },
  {
    slug: "mission-complete-de-digitalisation",
    number: 17,
    title: "Mission complète de digitalisation",
    summary:
      "Le projet fil rouge NovaGroup : conduire une mission complète, produire les livrables d'un consultant et défendre une recommandation devant un comité de direction.",
    sections: [
      {
        heading: "Le cas NovaGroup et le mandat de mission",
        paragraphs: [
          "Le chapitre de synthèse s'appuie sur un cas fictif construit pour l'exercice : NovaGroup, entreprise de distribution et services opérant dans plusieurs pays, avec des situations typiques d'une PME en croissance — commandes arrivant en partie par WhatsApp et email, CRM partiellement utilisé, ERP couplé à des imports Excel manuels, un taux significatif de corrections manuelles de commandes, un support avec un délai de première réponse élevé, plusieurs comptes SaaS sans owner clair, une authentification multifacteur incomplète, des sauvegardes existantes mais jamais testées, et une direction intéressée par l'IA, un portail client et l'automatisation dans un budget défini pour la première année.",
          "Le mandat type d'une telle mission : réduire les frictions opérationnelles, améliorer la qualité du service, fiabiliser les données et préparer l'entreprise à utiliser l'IA sans augmenter excessivement les risques — avec une période dédiée au diagnostic, aux pilotes et à la feuille de route, l'exécution complète se poursuivant après la mission initiale.",
        ],
      },
      {
        heading: "Les livrables d'une mission complète",
        paragraphs: [
          "Une mission complète de digitalisation produit une série de livrables cohérents : une note de cadrage (contexte, objectifs, critères de succès, périmètre, hors-périmètre, sponsor, gouvernance, accès, calendrier, méthode, hypothèses et risques) ; un diagnostic de maturité noté sur les dix dimensions, chaque note appuyée par au moins une preuve, jamais un score maximal simplement parce qu'un outil a été acheté ; une cartographie AS-IS/TO-BE sur les processus prioritaires (diagramme, volumes, temps, erreurs, données, systèmes, causes, automatisations possibles, exceptions, KPI).",
          "S'ajoutent un inventaire applicatif et une architecture cible (au moins une quinzaine de composants, sources de vérité par objet métier, intégrations et architecture data), une stratégie data (dictionnaire, identifiants, qualité, ownership, plateforme analytique, dashboard direction, droits d'accès), un registre cyber et un plan de continuité (registre de risques, plan 90 jours, procédure d'incident, RPO/RTO définis pour les systèmes critiques), un portefeuille de cas IA/automatisation priorisés (valeur, faisabilité, données, risque, coût, owner, KPI, décision — avec un nombre limité de pilotes sélectionnés et une justification explicite de ce qui attend), un volet marketing et CRM (funnel, sources, statuts, SLA, routage, consentement, conversions, dashboard), des business cases complets pour les initiatives les plus importantes avec un scénario bas, central et haut, une feuille de route 30-60-90 jours puis 12 mois tenant compte des contraintes réelles (budget, capacité d'équipe, continuité d'activité), et un tableau de bord exécutif limité à un nombre restreint de KPI couvrant valeur, client, opérations, adoption, sécurité et technologie.",
        ],
      },
      {
        heading: "Défendre la recommandation devant un comité de direction",
        paragraphs: [
          "La restitution finale tient en un temps court (quinze minutes, un nombre limité de slides, puis des questions), le jury jouant les rôles de direction générale, finance, opérations, commercial et IT. Les questions attendues portent sur les arbitrages assumés : pourquoi ne pas déployer l'IA partout immédiatement, pourquoi investir dans la donnée avant le portail, pourquoi conserver tel outil SaaS, ce qui serait supprimé si le budget baissait de 30 %, quel risque pourrait arrêter le projet, comment prouver le retour sur investissement à 90 jours, ce qui se passerait si l'API principale tombait, comment les équipes seraient formées.",
          "L'évaluation d'une mission de ce type pondère plusieurs domaines : qualité du diagnostic et des preuves, processus et architecture cible, data/automatisation/IA, cybersécurité et gouvernance, marketing/CRM/expérience client, business case/KPI/roadmap, et présentation exécutive — avec un principe directeur qui traverse tout le cours : le meilleur signe qu'un expert agit comme un consultant plutôt qu'un simple exécutant est sa capacité à relier faits, décisions, risques, valeur et exécution dans une méthode traçable, plutôt qu'à empiler le plus de technologies possible.",
        ],
      },
    ],
  },
];

export function getMethodChapter(slug: string): MethodChapter | undefined {
  return METHOD_CHAPTERS.find((c) => c.slug === slug);
}

export function getPublishedMethodChapters(): MethodChapter[] {
  return METHOD_CHAPTERS.filter((c) => c.sections && c.sections.length > 0);
}

/** Ancre stable pour un titre de section (sommaire + liens profonds). */
export function slugifyHeading(heading: string): string {
  return heading
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Temps de lecture estimé, base 220 mots par minute. */
export function estimateReadingMinutes(chapter: MethodChapter): number {
  const words = (chapter.sections ?? [])
    .flatMap((section) => [section.heading, ...section.paragraphs])
    .join(" ")
    .split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}
