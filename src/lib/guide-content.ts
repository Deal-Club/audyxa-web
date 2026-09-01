export interface GuideSection {
  heading: string;
  paragraphs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  summary: string;
  relatedMethodSlugs: string[];
  relatedServiceSlugs: string[];
  sections: GuideSection[];
  faq: { question: string; answer: string }[];
}

/**
 * Premier lot pilote de guides (12/120 — cf. seo/implementation-plan.md,
 * Lot 6). Sujets dérivés par query fan-out des pages déjà publiées
 * (méthode, services, comparatifs), sans donnée de volume de recherche
 * réelle : à valider avant d'étendre le lot. Contenu synthétisé à partir du
 * contenu déjà vérifié de src/lib/methode-content.ts, reformulé en format
 * pratique — aucun fait nouveau inventé.
 */
export const GUIDES: Guide[] = [
  {
    slug: "mesurer-maturite-numerique-entreprise",
    title: "Comment mesurer la maturité numérique de votre entreprise",
    summary:
      "La maturité numérique ne se résume pas au nombre de logiciels utilisés. Voici comment la mesurer sur plusieurs dimensions, avec une échelle claire et des preuves vérifiables.",
    relatedMethodSlugs: ["fondements-et-maturite-numerique"],
    relatedServiceSlugs: ["audit-diagnostic-digital"],
    sections: [
      {
        heading: "Pourquoi un score global ne suffit pas",
        paragraphs: [
          "Confondre nombre de logiciels et niveau de digitalisation est l'une des erreurs de diagnostic les plus fréquentes. Deux entreprises avec un score de maturité identique peuvent avoir des problèmes totalement différents : l'une souffre d'un manque d'automatisation, l'autre d'une gouvernance des données absente.",
          "Une grille de maturité utile examine plusieurs dimensions séparément — stratégie, client, processus, applications, intégrations, données, automatisation/IA, cybersécurité, compétences et gouvernance — plutôt que de les agréger dans un chiffre unique qui masque l'essentiel.",
        ],
      },
      {
        heading: "L'échelle de maturité en 6 niveaux",
        paragraphs: [
          "0 - Absent : la capacité n'existe pas ou dépend entièrement d'initiatives individuelles. 1 - Initial : quelques pratiques existent sans standard ni mesure. 2 - Répétable : des outils et procédures existent dans plusieurs équipes, avec des écarts. 3 - Maîtrisé : rôles, standards, indicateurs et responsabilités sont définis. 4 - Intégré : la capacité fonctionne entre équipes et systèmes, avec un pilotage régulier. 5 - Optimisé : amélioration continue, automatisation, données fiables et arbitrages fondés sur la valeur.",
          "Chaque note doit être appuyée par au moins une preuve concrète : temps de cycle, taux d'erreur, couverture MFA, qualité des données, taux d'adoption CRM, disponibilité des systèmes. Ne jamais attribuer un niveau maximal simplement parce qu'un outil a été acheté.",
        ],
      },
      {
        heading: "Les cinq questions qui précèdent toute mesure",
        paragraphs: [
          "Avant de noter quoi que ce soit, il faut clarifier : quel résultat métier voulons-nous modifier ? Comment ce résultat est-il produit aujourd'hui ? Quelles données permettent de mesurer la situation actuelle ? Quelles contraintes limitent les options possibles ? Qui devra changer sa façon de travailler ?",
          "Une demande formulée comme \"nous voulons un CRM\" est incomplète tant que ces questions n'ont pas de réponse — le bon diagnostic cherche la cause (leads perdus, absence de suivi, doublons) avant de discuter d'un outil.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps prend un diagnostic de maturité numérique ?",
        answer:
          "Cela dépend du périmètre, mais l'objectif reste d'identifier rapidement les priorités réelles plutôt que de produire un audit exhaustif qui prend des mois sans déboucher sur des décisions.",
      },
      {
        question: "Un score de maturité de 3/5 est-il suffisant pour prioriser les projets ?",
        answer:
          "Non. Un score global de 3/5 suffit rarement à lui seul : il faut le détail par dimension et des preuves associées pour choisir les bons chantiers, pas juste un chiffre moyen.",
      },
    ],
  },
  {
    slug: "cartographier-processus-as-is-to-be",
    title: "Comment cartographier un processus métier : la méthode AS-IS / TO-BE",
    summary:
      "Avant d'automatiser un processus, il faut d'abord comprendre comment il fonctionne réellement. Voici la méthode pour passer d'un état actuel (AS-IS) à une version cible simplifiée (TO-BE).",
    relatedMethodSlugs: ["processus-bpmn-lean-refonte"],
    relatedServiceSlugs: ["refonte-processus"],
    sections: [
      {
        heading: "Penser le processus de bout en bout",
        paragraphs: [
          "L'erreur fréquente consiste à analyser chaque service séparément, alors que le client — interne ou externe — subit le délai total du parcours complet. Un processus \"commande à encaissement\" traverse généralement acquisition, commande, contrôle, préparation, livraison, facture, paiement et rapprochement.",
          "Chaque processus doit avoir un owner capable d'arbitrer ce flux de bout en bout, même si plusieurs responsables fonctionnels interviennent sur des étapes différentes.",
        ],
      },
      {
        heading: "Construire l'AS-IS à partir d'un cas réel",
        paragraphs: [
          "La cartographie AS-IS part toujours d'un cas réel et récent, pas d'une description théorique. Elle capture : déclencheur, étapes, rôles, systèmes, données, décisions, exceptions, temps de travail et temps d'attente.",
          "Avant de refaire quoi que ce soit, mesurer : volume par période, temps de travail actif, temps d'attente, taux de retour, taux d'erreur, nombre de transferts, nombre de ressaisies du même champ, coût par dossier. Le temps de cycle inclut les attentes ; le temps de traitement ne mesure que le travail actif — la différence entre les deux révèle souvent l'essentiel du problème.",
        ],
      },
      {
        heading: "Concevoir le TO-BE : six questions à répondre",
        paragraphs: [
          "Le TO-BE doit répondre à : quel résultat doit sortir du processus ? Quelle donnée est capturée à la source ? Quelle décision peut être déterministe ? Quelle exception nécessite un humain ? Quel système est source de vérité ? Quels événements doivent être journalisés pour le pilotage ?",
          "La séquence recommandée reste : supprimer, simplifier, standardiser, instrumenter, automatiser, mesurer — dans cet ordre. Automatiser une étape inutile ne fait que la rendre plus rapide, pas plus juste.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il utiliser BPMN pour cartographier un processus ?",
        answer:
          "BPMN 2.0.2 fournit une notation commune utile pour les processus complexes, mais pour une petite mission, un diagramme en couloirs suffit souvent. Le bon niveau de détail est celui qui permet de décider.",
      },
      {
        question: "Combien de points de friction faut-il identifier avant de refaire un processus ?",
        answer:
          "Il n'y a pas de nombre fixe, mais repérer au moins cinq points de friction sur un cas réel donne généralement une base suffisante pour concevoir un TO-BE crédible.",
      },
    ],
  },
  {
    slug: "calculer-roi-tco-payback-projet-digital",
    title: "Comment calculer le ROI, le TCO et le payback d'un projet digital",
    summary:
      "Un projet de transformation digitale se justifie par des chiffres vérifiables, pas par une intuition. Voici les formules et la méthode pour construire un business case solide.",
    relatedMethodSlugs: ["fondements-et-maturite-numerique", "roi-kpi-portefeuille-feuille-de-route"],
    relatedServiceSlugs: ["audit-diagnostic-digital", "pilotage-deploiement"],
    sections: [
      {
        heading: "Les quatre familles de bénéfices",
        paragraphs: [
          "Un business case lie une situation actuelle à une amélioration mesurable, sur quatre familles de bénéfices : revenus supplémentaires, coûts évités, capacité libérée et réduction du risque. Un projet qui ne rentre dans aucune de ces catégories n'a pas de justification claire.",
        ],
      },
      {
        heading: "Les formules de base",
        paragraphs: [
          "Gain annuel brut = économies annuelles + marge additionnelle + pertes évitées estimées. TCO (coût total de possession) inclut licences, développement, intégration, infrastructure, migration, support, formation, sécurité et maintenance — pas seulement le coût de licence. ROI simple = (gain annuel net − investissement initial) / investissement initial. Payback = investissement initial / gain mensuel net.",
          "Exemple concret : une équipe saisit manuellement 2 400 dossiers par mois, 6 minutes chacun, à un coût chargé de 8 €/heure — environ 1 920 €/mois de saisie. Une automatisation à 12 000 € réduisant de 70 % ce temps, avec 250 €/mois d'exploitation, donne un gain net après exploitation d'environ 1 094 €/mois et un payback approximatif de 11 mois.",
        ],
      },
      {
        heading: "Le piège du gain comptable vs le gain économique",
        paragraphs: [
          "Un point de vigilance essentiel : si une équipe économise 100 heures par mois grâce à une automatisation, ce temps ne devient une économie réelle que si l'organisation peut réaffecter ces heures à une activité utile. Sinon, le gain comptable n'est pas identique au gain économique réellement constaté.",
        ],
      },
    ],
    faq: [
      {
        question: "Le coût de licence suffit-il à calculer le TCO d'un projet ?",
        answer:
          "Non, c'est une des erreurs de diagnostic les plus fréquentes. Le TCO doit inclure développement, intégration, infrastructure, migration, support, formation, sécurité et maintenance sur toute la durée de vie du projet.",
      },
      {
        question: "Faut-il toujours présenter plusieurs scénarios dans un business case ?",
        answer:
          "Oui, dès qu'un choix architectural engage l'entreprise (par exemple SaaS vs développement sur mesure), il faut présenter au moins deux options avec leurs compromis respectifs, pas une seule recommandation présentée comme la seule possible.",
      },
    ],
  },
  {
    slug: "gouvernance-ia-entreprise-guide",
    title: "Gouvernance de l'IA en entreprise : le guide pratique",
    summary:
      "Déployer l'IA sans gouvernance revient à accumuler des risques invisibles. Voici comment structurer la gouvernance IA d'une entreprise, du cadrage des cas d'usage à la procédure d'arrêt.",
    relatedMethodSlugs: ["ia-rag-agents-mcp", "cybersecurite-confidentialite-resilience"],
    relatedServiceSlugs: ["ia-entreprise"],
    sections: [
      {
        heading: "Cadrer un cas d'usage avant de choisir un modèle",
        paragraphs: [
          "Un cas d'usage IA doit préciser : utilisateur, problème, entrée, sortie, décision, niveau de risque, baseline, métrique d'évaluation, coût maximum et procédure d'escalade. Les cas les plus sensibles — décision de crédit, recrutement, action financière, données de santé — exigent des contrôles renforcés dès la conception, pas ajoutés après coup.",
        ],
      },
      {
        heading: "Le cadre NIST AI RMF",
        paragraphs: [
          "Le NIST AI RMF organise la gestion du risque IA autour de quatre fonctions : Govern, Map, Measure et Manage. Pour une entreprise, cela se traduit par un inventaire des systèmes et cas d'usage IA, une classification du risque, un owner métier et technique identifié, une liste des fournisseurs et modèles utilisés, des règles de conservation des données, des évaluations régulières, des limites d'action définies et une procédure d'arrêt documentée.",
          "L'AI Act européen impose depuis le 2 août 2026 des obligations de transparence dans certaines interactions avec des systèmes IA — les obligations précises dépendent du rôle et du cas d'usage, et doivent être vérifiées au cas par cas plutôt que supposées uniformes.",
        ],
      },
      {
        heading: "Human-in-the-loop : ce qui doit toujours rester validé",
        paragraphs: [
          "Certaines actions doivent nécessiter une confirmation humaine systématique : paiement, remboursement, annulation, envoi à un large public, suppression de données, modification contractuelle, décision affectant fortement une personne, action inhabituelle, réponse quand la confiance du modèle est faible. Une validation humaine doit afficher le contexte nécessaire à la décision — un bouton \"Approuver\" sans information n'est pas un contrôle réel.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il un comité de gouvernance IA dans une petite entreprise ?",
        answer:
          "La formalité peut être proportionnée à la taille de l'organisation, mais les principes restent les mêmes : inventaire des cas d'usage, classification du risque et procédure d'arrêt documentée, même de façon légère.",
      },
      {
        question: "Un agent IA peut-il avoir accès à toutes les données de l'entreprise ?",
        answer:
          "Non. Le principe de moindre privilège s'applique : un agent ne doit avoir accès qu'aux données strictement nécessaires à sa tâche, avec des permissions limitées et une journalisation systématique de ses actions.",
      },
    ],
  },
  {
    slug: "securiser-automatisation-agent-ia",
    title: "Comment sécuriser une automatisation ou un agent IA",
    summary:
      "Chaque automatisation et chaque agent IA ajoute des identités, des secrets et des flux à protéger. Voici les principes de conception qui évitent les incidents les plus fréquents.",
    relatedMethodSlugs: ["automatisation-api-rpa-low-code", "cybersecurite-confidentialite-resilience"],
    relatedServiceSlugs: ["automatisation-integrations", "ia-entreprise"],
    sections: [
      {
        heading: "Les règles de robustesse que les démonstrations oublient",
        paragraphs: [
          "Idempotence : un même événement reçu deux fois ne doit pas créer deux factures. Retry : une API indisponible doit pouvoir être rappelée avec temporisation. File d'échec : les cas non résolus doivent rester visibles, jamais silencieusement perdus. Timeout : une étape ne doit pas attendre indéfiniment. Traçabilité : chaque exécution doit avoir un identifiant et un statut consultable.",
          "Reprise manuelle : un humain doit pouvoir corriger une exception sans casser le workflow. Permissions : le compte technique ne possède que les droits nécessaires, jamais un accès administrateur global par défaut. Secrets : clés API et tokens sont gérés hors du workflow exporté publiquement.",
        ],
      },
      {
        heading: "Les risques spécifiques à l'IA",
        paragraphs: [
          "Au-delà des risques classiques, un registre cyber doit intégrer les risques propres à l'IA : injection de prompt, données sensibles présentes dans le contexte, outils trop permissifs, fuite via les logs, exfiltration par un outil, contenus non fiables et modification de comportement après une mise à jour de modèle.",
          "Le bon contrôle ne consiste pas uniquement à écrire \"ne fais pas ceci\" dans le prompt — les permissions et validations doivent exister au niveau système, pas seulement dans les instructions données au modèle.",
        ],
      },
      {
        heading: "Le registre de risques",
        paragraphs: [
          "Chaque fiche de risque documente : actif concerné, menace, vulnérabilité, probabilité, impact, risque brut, traitement prévu, owner, échéance et risque résiduel après traitement. Exemple : un compte administrateur partagé sans MFA représente un risque brut élevé ; le traitement (MFA + compte séparé + journalisation) doit ramener ce risque à un niveau acceptable, documenté et daté.",
        ],
      },
    ],
    faq: [
      {
        question: "Un compte technique d'automatisation doit-il être administrateur ?",
        answer:
          "Non, sauf justification exceptionnelle documentée. Le principe de moindre privilège s'applique systématiquement aux comptes techniques utilisés par les automatisations.",
      },
      {
        question: "Une sauvegarde sur le même serveur suffit-elle contre la perte du serveur ?",
        answer:
          "Non. Une sauvegarde n'est validée que si elle est testée et stockée séparément — une copie sur le même serveur ne protège pas contre une panne ou une compromission de ce serveur.",
      },
    ],
  },
  {
    slug: "acheter-configurer-integrer-developper",
    title: "Acheter, configurer, intégrer ou développer : comment choisir",
    summary:
      "Face à un besoin numérique, quatre options s'offrent à une entreprise. Voici la grille de décision pour choisir sans se tromper, au-delà du seul critère de prix.",
    relatedMethodSlugs: ["architecture-systeme-information"],
    relatedServiceSlugs: ["developpement-outils-metier", "automatisation-integrations"],
    sections: [
      {
        heading: "Les quatre options et quand les utiliser",
        paragraphs: [
          "Acheter un SaaS convient quand la capacité est standard, le délai court et le marché mature. Configurer une plateforme existante convient quand les écarts avec le besoin portent surtout sur des règles et workflows. Intégrer plusieurs produits spécialisés s'impose quand aucun outil unique ne couvre correctement le besoin. Développer se justifie quand la capacité crée un avantage spécifique, nécessite un contrôle particulier, ou ne peut pas être couverte raisonnablement par le marché.",
        ],
      },
      {
        heading: "La grille de décision SaaS vs sur mesure",
        paragraphs: [
          "Sur le délai initial, le SaaS est généralement plus court, le sur mesure plus long. Sur le coût initial, le SaaS est souvent plus faible, le développement plus élevé. Sur le contrôle technique, le SaaS reste limité, le sur mesure élevé. Sur le risque principal, le SaaS expose à un verrouillage fournisseur, le sur mesure à une dette technique et de maintenance.",
          "Le calcul ne s'arrête jamais au coût affiché : il faut examiner le TCO sur plusieurs années, l'exportabilité des données, la disponibilité des API, le modèle de permissions et le SLA proposé par le fournisseur.",
        ],
      },
      {
        heading: "Les principes d'une architecture cible, quel que soit le choix",
        paragraphs: [
          "Une architecture cible n'est jamais un simple dessin de produits : elle repose sur des principes — identité centralisée et MFA pour les accès critiques, API documentées, journalisation sur les flux critiques, donnée propriétaire exportable, environnements séparés, sauvegardes testées, secrets hors du code, droits minimaux et système de référence défini pour chaque objet métier.",
        ],
      },
    ],
    faq: [
      {
        question: "Le développement sur mesure est-il toujours plus cher qu'un SaaS ?",
        answer:
          "Pas nécessairement sur la durée : un SaaS mal adapté peut générer des coûts de contournement cachés, tandis qu'un développement bien ciblé peut éviter des abonnements récurrents. Le calcul du TCO sur plusieurs années tranche mieux qu'une comparaison du seul coût initial.",
      },
      {
        question: "Peut-on changer d'option en cours de route ?",
        answer:
          "Oui, à condition que l'architecture cible ait prévu l'exportabilité des données et des API documentées dès le départ — c'est justement ce qui évite qu'un choix initial devienne irréversible.",
      },
    ],
  },
  {
    slug: "construire-business-case-transformation-digitale",
    title: "Comment construire un business case pour un projet de transformation digitale",
    summary:
      "Un business case convaincant présente des options, pas une seule idée déguisée en évidence. Voici la méthode pour en construire un qui résiste aux questions d'un comité de direction.",
    relatedMethodSlugs: ["mission-de-lexpert", "roi-kpi-portefeuille-feuille-de-route"],
    relatedServiceSlugs: ["audit-diagnostic-digital", "pilotage-deploiement"],
    sections: [
      {
        heading: "La fiche de décision en deux à quatre pages",
        paragraphs: [
          "Pour les initiatives majeures, une fiche de décision doit tenir en deux à quatre pages et couvrir : problème, cible, options considérées, coût initial, coût récurrent, bénéfices, hypothèses, risques, dépendances, KPI, scénario minimal et recommandation.",
          "Toujours présenter au moins deux options lorsqu'un choix architectural engage l'entreprise. Le rôle du consultant n'est pas de démontrer que son idée est la seule possible, mais de montrer les compromis réels entre les options.",
        ],
      },
      {
        heading: "Construire un score de priorisation",
        paragraphs: [
          "Une matrice valeur/effort reste utile mais insuffisante seule — un projet à forte valeur peut être bloqué par la mauvaise qualité des données ou un contrat à renouveler. Un score pondéré plus complet peut intégrer : 30 % valeur, 20 % alignement stratégique, 15 % urgence/risque, 15 % faisabilité, 10 % préparation des données, 10 % capacité d'adoption.",
          "La formule ne remplace jamais la discussion : elle sert à rendre les hypothèses visibles et à permettre un arbitrage argumenté plutôt qu'un choix arbitraire.",
        ],
      },
      {
        heading: "Défendre le business case devant une direction",
        paragraphs: [
          "Les questions les plus fréquentes d'un comité de direction portent sur les arbitrages assumés : pourquoi ne pas tout déployer immédiatement, ce qui serait sacrifié si le budget baissait de 30 %, quel risque pourrait arrêter le projet, comment le retour sur investissement sera prouvé à 90 jours. Préparer ces réponses à l'avance renforce la crédibilité du dossier bien plus qu'une présentation optimiste sans contrepartie assumée.",
        ],
      },
    ],
    faq: [
      {
        question: "Un business case doit-il toujours inclure un scénario pessimiste ?",
        answer:
          "C'est recommandé : présenter un scénario minimal à côté du scénario recommandé permet à la direction de voir ce qui est gagné ou sacrifié selon le niveau d'investissement retenu.",
      },
      {
        question: "Qui doit porter la responsabilité d'un bénéfice attendu dans le business case ?",
        answer:
          "Un owner métier capable d'agir sur le résultat, pas seulement l'équipe technique qui a livré la solution — par exemple le directeur commercial pour un bénéfice lié au taux de conversion, même si l'IT a livré l'outil.",
      },
    ],
  },
  {
    slug: "conduite-changement-projet-digital",
    title: "Le guide de la conduite du changement pour un projet digital",
    summary:
      "Un projet techniquement réussi peut être rejeté par les équipes. Voici comment cartographier les résistances, organiser la formation et mesurer l'adoption réelle, pas déclarative.",
    relatedMethodSlugs: ["conduite-du-changement-gouvernance-delivery"],
    relatedServiceSlugs: ["pilotage-deploiement"],
    sections: [
      {
        heading: "Cartographier les parties prenantes avant de communiquer",
        paragraphs: [
          "Pour chaque groupe concerné, il faut clarifier : pouvoir, intérêt, impact, position, préoccupations, bénéfice attendu, risques, message adapté et action à mener. Un groupe qui perçoit un nouvel outil comme une surveillance ne réagira pas à un simple argumentaire technique — il faut comprendre ce qui est réellement difficile pour lui : saisie supplémentaire, données inexactes, perte de liberté perçue.",
        ],
      },
      {
        heading: "Mesurer l'adoption, pas seulement la formation",
        paragraphs: [
          "Les KPI d'adoption utiles incluent : utilisateurs actifs, fréquence d'usage, taux d'exécution dans le nouveau processus, contournements observés, complétude des données, erreurs, tickets, satisfaction, temps de tâche. Le nombre de personnes formées ne prouve rien à lui seul — une formation terminée ne garantit pas que l'outil est utilisé correctement au quotidien.",
        ],
      },
      {
        heading: "Distinguer résistance et exigence oubliée",
        paragraphs: [
          "Une objection ne doit jamais être automatiquement étiquetée comme une résistance irrationnelle : elle peut révéler une exigence oubliée dans la conception. Classer les objections par cause réelle — incompréhension, manque de capacité, manque d'intérêt, peur du risque, surcharge de travail, conflit de rôle, ou défaut réel de la solution — permet de traiter le bon problème plutôt que de sanctionner un symptôme.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de temps faut-il prévoir pour l'adoption d'un nouvel outil ?",
        answer:
          "Cela varie selon la complexité du changement, mais un suivi structuré (revues à J+7, J+30, J+90) permet de détecter rapidement si l'adoption réelle suit ou non le plan prévu, plutôt que de le découvrir six mois plus tard.",
      },
      {
        question: "Faut-il sanctionner une équipe qui n'adopte pas un nouvel outil ?",
        answer:
          "Non, pas avant d'avoir diagnostiqué la cause réelle. Un taux d'adoption faible révèle souvent un problème de conception, de formation ou d'incitation plutôt qu'un manque de bonne volonté.",
      },
    ],
  },
  {
    slug: "prioriser-portefeuille-initiatives-digitales",
    title: "Comment prioriser un portefeuille d'initiatives digitales",
    summary:
      "Chaque département a un projet urgent. Voici comment construire un portefeuille comparable qui évite l'arbitrage au feeling et rend les décisions défendables.",
    relatedMethodSlugs: ["roi-kpi-portefeuille-feuille-de-route"],
    relatedServiceSlugs: ["pilotage-deploiement", "audit-diagnostic-digital"],
    sections: [
      {
        heading: "Ce que doit contenir chaque carte d'initiative",
        paragraphs: [
          "Chaque initiative du portefeuille doit préciser : problème ou opportunité, résultat métier visé, périmètre, owner, coût initial et récurrent, bénéfices et hypothèses, KPI baseline/cible, dépendances, risques, impacts data/sécurité, impact humain, statut et prochaine décision à prendre.",
          "Un portefeuille structuré de cette façon évite que chaque département présente son projet comme urgent sans point de comparaison commun avec les autres initiatives en concurrence pour les mêmes ressources.",
        ],
      },
      {
        heading: "Séquencer par vagues plutôt que tout lancer en même temps",
        paragraphs: [
          "Une feuille de route crédible se construit en vagues : fondations, quick wins, pilotes, industrialisation, puis optimisation. Un pilote IA peut par exemple dépendre d'une base documentaire propre et d'une politique d'accès déjà décidée — le placer avant ces fondations augmente le risque d'échec sans que la cause soit liée à la technologie elle-même.",
          "Évaluer la capacité réelle de l'équipe à absorber plusieurs projets simultanément fait partie de la priorisation : une feuille de route qui ignore cette capacité produit une file d'attente masquée plutôt qu'un plan réaliste.",
        ],
      },
      {
        heading: "Les questions de contrôle avant validation",
        paragraphs: [
          "Avant de valider un portefeuille, se poser systématiquement : quelle initiative bloque plusieurs autres ? Quel risque doit être réduit avant d'augmenter l'automatisation ? Quelle donnée doit devenir fiable avant le dashboard ou l'IA ? Quelle équipe est sollicitée par trop de projets au même trimestre ? Quel scénario reste viable si le budget baisse de 30 % ?",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il toujours démarrer immédiatement une initiative à forte valeur et faible effort ?",
        answer:
          "Pas automatiquement. Une initiative forte valeur/faible effort reste souvent prioritaire, mais des dépendances ou des risques mal préparés peuvent justifier de la différer légèrement plutôt que de la lancer sans les prérequis nécessaires.",
      },
      {
        question: "Combien d'initiatives un portefeuille doit-il contenir ?",
        answer:
          "Il n'y a pas de nombre universel : l'important est que chaque initiative retenue ait une carte complète et documentée, plutôt que de multiplier les lignes pour donner une impression d'exhaustivité.",
      },
    ],
  },
  {
    slug: "erreurs-frequentes-diagnostic-transformation-digitale",
    title: "Les erreurs les plus fréquentes dans un diagnostic de transformation digitale",
    summary:
      "Certaines erreurs reviennent constamment dans les diagnostics mal menés. Les connaître à l'avance permet de les éviter avant qu'elles ne coûtent un investissement mal orienté.",
    relatedMethodSlugs: ["fondements-et-maturite-numerique", "mission-de-lexpert"],
    relatedServiceSlugs: ["audit-diagnostic-digital"],
    sections: [
      {
        heading: "Les huit erreurs les plus courantes",
        paragraphs: [
          "Noter la maturité uniquement à partir des réponses de la direction, sans vérification terrain. Confondre le nombre de logiciels utilisés avec le niveau réel de digitalisation. Accepter des chiffres sans en chercher la source. Proposer l'IA pour un processus instable ou mal défini, qui n'a pas encore été simplifié.",
          "Sous-estimer la qualité des données et des intégrations existantes. Oublier les droits d'accès, les sauvegardes et la continuité d'activité dans le périmètre du diagnostic. Calculer le ROI en ne comptant que le coût de licence, sans les coûts d'intégration et de maintenance. Ignorer la capacité de changement réelle des équipes concernées.",
        ],
      },
      {
        heading: "Pourquoi ces erreurs coûtent cher",
        paragraphs: [
          "Chacune de ces erreurs conduit à un diagnostic qui semble complet mais oriente mal les décisions suivantes : un projet IA lancé sur un processus instable reproduit et accélère les problèmes existants plutôt que de les résoudre ; un ROI calculé sur le seul coût de licence sous-estime systématiquement l'investissement réel nécessaire.",
        ],
      },
      {
        heading: "Comment structurer un constat pour éviter le flou",
        paragraphs: [
          "Chaque constat important doit suivre la structure : fait → impact → cause probable → preuve → risque/opportunité → action de vérification. Cette discipline évite les phrases vagues du type \"l'entreprise manque de digitalisation\", qui ne permettent aucune décision concrète.",
        ],
      },
    ],
    faq: [
      {
        question: "Un diagnostic basé uniquement sur des entretiens est-il fiable ?",
        answer:
          "Non, un diagnostic solide croise entretiens, observation du travail réel, données quantifiées et documentation existante — un entretien seul révèle comment les personnes pensent que le processus fonctionne, pas toujours ce qu'il se passe réellement.",
      },
      {
        question: "Faut-il proposer l'IA dès qu'un processus semble lent ?",
        answer:
          "Non. Un processus instable ou mal défini doit d'abord être simplifié ; ajouter de l'IA sur un processus chaotique amplifie généralement le problème plutôt que de le résoudre.",
      },
    ],
  },
  {
    slug: "structurer-crm-eviter-saisie-inutile",
    title: "Comment structurer un CRM pour éviter la saisie inutile",
    summary:
      "Un CRM échoue souvent parce qu'il demande trop de saisie sans valeur pour l'utilisateur. Voici comment le structurer pour qu'il reflète le cycle de relation sans devenir une contrainte.",
    relatedMethodSlugs: ["crm-vente-service-client-omnicanal"],
    relatedServiceSlugs: ["automatisation-integrations", "developpement-outils-metier"],
    sections: [
      {
        heading: "Le CRM est une discipline avant d'être un logiciel",
        paragraphs: [
          "Un CRM doit représenter fidèlement le cycle de relation : compte/entreprise, contact, lead, opportunité, activité, devis, commande, ticket. Chaque objet a besoin de champs obligatoires clairs, de statuts définis, de règles de transition explicites, d'une ownership assignée et d'une source de vérité identifiée.",
          "Automatiser l'enrichissement et la journalisation quand c'est fiable technique­ment, tout en gardant les décisions importantes visibles pour les équipes, réduit la charge de saisie sans perdre en qualité de suivi.",
        ],
      },
      {
        heading: "Un pipeline avec des critères d'entrée/sortie vérifiables",
        paragraphs: [
          "Un pipeline commercial fiable a des critères d'entrée/sortie clairs par étape — par exemple Lead → Qualifié → Découverte réalisée → Proposition → Négociation → Gagné/Perdu. Une opportunité ne passe pas en \"Proposition\" parce que le commercial le souhaite, mais parce qu'une proposition a réellement été envoyée. Cette discipline améliore directement la fiabilité des prévisions commerciales.",
        ],
      },
      {
        heading: "Lead routing et omnicanal réel",
        paragraphs: [
          "Une automatisation peut attribuer les leads selon zone, produit, langue, disponibilité ou score, avec un SLA de premier contact et une alerte en cas de dépassement — avec toujours un fallback : si personne n'accepte le lead, il doit revenir dans une file centrale plutôt que de disparaître.",
          "L'omnicanal réel signifie que la conversation garde son contexte entre les canaux : un client qui commence sur WhatsApp puis appelle ne devrait pas avoir à tout répéter si les règles de confidentialité et les systèmes permettent le partage de cet historique.",
        ],
      },
    ],
    faq: [
      {
        question: "Pourquoi les commerciaux évitent-ils souvent de bien remplir le CRM ?",
        answer:
          "Le plus souvent parce que le CRM demande trop de saisie sans valeur perçue pour eux. Automatiser l'enrichissement et se concentrer sur les champs qui servent réellement la décision réduit cette friction.",
      },
      {
        question: "Faut-il qu'un chatbot puisse relancer un client après une vente conclue ?",
        answer:
          "Non — si cela arrive, c'est le signe d'un défaut de synchronisation entre le CRM et les autres systèmes à corriger, pas un comportement normal à tolérer.",
      },
    ],
  },
  {
    slug: "kpi-piloter-transformation-digitale",
    title: "Le guide des KPI pour piloter une transformation digitale",
    summary:
      "Un tableau de bord n'a de valeur que s'il déclenche des décisions. Voici comment choisir les bons KPI et les relier explicitement aux résultats métier recherchés.",
    relatedMethodSlugs: ["roi-kpi-portefeuille-feuille-de-route", "strategie-data-bi-gouvernance"],
    relatedServiceSlugs: ["pilotage-deploiement", "audit-diagnostic-digital"],
    sections: [
      {
        heading: "Un KPI utile répond à une décision, pas à une curiosité",
        paragraphs: [
          "Une stratégie data commence par les décisions à prendre, pas par les outils disponibles : quels clients risquent de partir ? Quel canal produit les clients à meilleure marge ? Quel stock doit être réapprovisionné ? À chaque décision correspondent des données précises, un niveau de qualité requis, une fréquence et une responsabilité claire.",
          "Pour chaque KPI d'un tableau de bord : définition exacte, formule de calcul, source de la donnée, fréquence de mise à jour, owner responsable, cible visée, seuil d'alerte et action associée en cas de dépassement.",
        ],
      },
      {
        heading: "L'arbre KPI : relier l'activité au résultat métier",
        paragraphs: [
          "Un arbre KPI relie l'activité numérique à un résultat métier concret : par exemple automatisation → temps de cycle en baisse → capacité libérée en hausse → délai client réduit → conversion et rétention en hausse → marge en hausse. Chaque flèche de cette chaîne reste une hypothèse à mesurer, jamais une certitude acquise d'avance.",
          "Catégories utiles à couvrir : valeur (revenu, marge, coût, cash, risque), client (conversion, rétention, délai, satisfaction), opérations (cycle, qualité, erreur, productivité), technique (disponibilité, latence, incidents, coûts), adoption (usage, complétude, contournement) et sécurité (MFA, vulnérabilités, incidents, restauration).",
        ],
      },
      {
        heading: "Se méfier des moyennes seules",
        paragraphs: [
          "Pour les délais, une médiane et des percentiles montrent mieux la distribution réelle qu'une moyenne unique, qui peut masquer des cas extrêmes problématiques. Pour la croissance, séparer volume et valeur évite de confondre plus de clients et plus de revenu. Pour le marketing, relier la dépense au revenu ou à la marge générée reste plus fiable que de s'arrêter aux seuls clics.",
        ],
      },
    ],
    faq: [
      {
        question: "Combien de KPI un tableau de bord exécutif doit-il contenir ?",
        answer:
          "Un nombre restreint et bien choisi vaut mieux qu'une liste exhaustive : l'essentiel est que chaque KPI retenu ait une baseline, une cible, un owner et une fréquence de revue clairement définis.",
      },
      {
        question: "Un tableau de bord temps réel améliore-t-il automatiquement la performance ?",
        answer:
          "Non. Un écran affiché en temps réel sans routine opérationnelle associée ne change pas la performance à lui seul — c'est l'action déclenchée par le KPI qui produit le résultat, pas sa seule visibilité.",
      },
    ],
  },
  {
    slug: "choisir-infrastructure-cloud-sans-dette",
    title: "Comment choisir son infrastructure cloud sans créer de dette d'exploitation",
    summary:
      "IaaS, PaaS, SaaS, VPS ou serverless : le bon choix dépend du contrôle requis et des compétences disponibles, pas du prix affiché le plus bas. Voici comment éviter qu'un choix d'infrastructure se transforme en dette technique.",
    relatedMethodSlugs: ["cloud-infrastructure-devops-couts"],
    relatedServiceSlugs: ["automatisation-integrations", "developpement-outils-metier"],
    sections: [
      {
        heading: "IaaS, PaaS, SaaS : trois niveaux de responsabilité",
        paragraphs: [
          "IaaS fournit calcul, stockage et réseau, avec davantage de responsabilité côté client. PaaS prend en charge une plus grande partie de la plateforme d'exécution. SaaS livre l'application complète. Le bon choix dépend du niveau de contrôle requis, des compétences disponibles, de la criticité, du coût et du rythme de changement — pas d'une préférence a priori pour l'un ou l'autre modèle.",
          "Un VPS peut être économique et flexible pour des charges prévisibles, mais l'organisation devient responsable du système, des correctifs, de la surveillance, des sauvegardes et de la sécurité. La bonne question n'est jamais \"quel hébergement est le moins cher ?\" mais \"quel coût total et quel niveau de risque pour maintenir le service pendant trois ans ?\".",
        ],
      },
      {
        heading: "Séparer les environnements avant de industrialiser",
        paragraphs: [
          "Production, test et développement doivent être séparés dès que le système devient significatif pour l'activité, avec des secrets stockés dans un mécanisme dédié — jamais dans le dépôt de code ou un fichier partagé non contrôlé.",
          "Un pipeline CI/CD peut ensuite automatiser tests, analyse statique, build, scan de dépendances, migration contrôlée et vérifications post-déploiement. Pour les applications critiques, une stratégie de rollback, une sauvegarde avant migration et des health checks restent indispensables avant tout déploiement rapide.",
        ],
      },
      {
        heading: "La dette d'exploitation se cache dans les coûts non comptés",
        paragraphs: [
          "Le FinOps consiste à suivre les coûts par service, environnement et équipe, en cherchant les ressources inutilisées, le surdimensionnement, le stockage oublié, le trafic sortant et la duplication d'environnements. Pour un projet IA, le coût ne se limite jamais aux tokens consommés : indexation, stockage, outils, observabilité, évaluations et temps humain de validation et de reprise comptent tout autant.",
          "Une sauvegarde n'est validée que si sa restauration a été testée. Deux indicateurs à définir avant de choisir une architecture : le RPO (quantité maximale de données que l'on accepte de perdre) et le RTO (durée maximale de restauration) — un site vitrine et un système transactionnel critique n'ont pas les mêmes exigences.",
        ],
      },
    ],
    faq: [
      {
        question: "Un VPS auto-hébergé revient-il toujours moins cher qu'un service managé ?",
        answer:
          "Pas en coût total : un VPS déplace la charge d'administration, de surveillance, de sauvegarde et de sécurité vers l'équipe interne, un coût souvent sous-estimé par rapport au tarif affiché d'un service managé.",
      },
      {
        question: "Faut-il tester une restauration de sauvegarde régulièrement ?",
        answer:
          "Oui, systématiquement. Une sauvegarde qui existe sans avoir jamais été restaurée en test n'offre aucune garantie réelle en cas d'incident.",
      },
    ],
  },
  {
    slug: "concevoir-parcours-client-reduire-frictions",
    title: "Comment concevoir un parcours client qui réduit les frictions",
    summary:
      "Une interface n'est qu'un point de contact dans un parcours plus large. Voici comment cartographier ce parcours, identifier les frictions réelles et les corriger sans se fier uniquement à l'intuition design.",
    relatedMethodSlugs: ["ux-produit-experience-client"],
    relatedServiceSlugs: ["developpement-outils-metier", "refonte-processus"],
    sections: [
      {
        heading: "Cartographier le parcours avant l'interface",
        paragraphs: [
          "Un parcours se cartographie en étapes : déclencheur, découverte, évaluation, conversion, onboarding, usage, support, renouvellement et recommandation. Pour chaque étape, il faut préciser l'objectif du client, le canal utilisé, l'émotion ressentie, les données captées, la friction identifiée et l'opportunité d'amélioration.",
          "Le client ne devrait jamais avoir à répéter les mêmes informations à chaque transfert si l'organisation possède déjà la donnée et peut légalement la réutiliser — une friction fréquente et pourtant évitable dans la plupart des parcours B2B.",
        ],
      },
      {
        heading: "Des principes UX qui réduisent réellement les frictions",
        paragraphs: [
          "Une action principale claire par écran, une information donnée de façon progressive plutôt qu'en surcharge, des labels explicites, une validation proche du champ concerné, une confirmation après chaque action, une prévention des erreurs plutôt que des messages tardifs, des formulaires proportionnés à la valeur réelle de l'étape.",
          "L'accessibilité (navigation clavier, contrastes, textes alternatifs, structure sémantique) améliore aussi la robustesse de l'interface pour tous les contextes de connexion imparfaite, pas seulement pour les utilisateurs qui en ont un besoin spécifique.",
        ],
      },
      {
        heading: "Tester avec de vrais utilisateurs, pas seulement des opinions",
        paragraphs: [
          "Un test simple avec quelques utilisateurs ciblés peut révéler des problèmes majeurs : donner une tâche précise, observer sans guider, noter les erreurs, hésitations, temps et verbatim — plutôt que de demander simplement \"aimez-vous ce design ?\".",
          "L'analyse d'un funnel cherche l'étape où la perte est anormale, puis la cause probable : un faible taux de conversion peut venir d'un trafic peu qualifié, d'une offre confuse, d'une page lente, d'un formulaire trop long ou d'un suivi commercial tardif — pas uniquement d'un problème d'interface.",
        ],
      },
    ],
    faq: [
      {
        question: "Un persona doit-il être basé sur des données réelles ou sur des hypothèses créatives ?",
        answer:
          "Sur des données réelles : entretiens, tickets, analytics, CRM, observations. Inventer des détails démographiques sans utilité réelle ne rend pas un persona plus opérationnel.",
      },
      {
        question: "Le NPS suffit-il à diagnostiquer un problème de conversion ?",
        answer:
          "Non. Le NPS mesure la recommandation, pas le comportement réel — il faut le compléter par des mesures comportementales (taux de conversion, abandon, temps par tâche) pour diagnostiquer un tunnel qui convertit mal.",
      },
    ],
  },
  {
    slug: "mesurer-efficacite-strategie-marketing-digital",
    title: "Comment mesurer l'efficacité réelle d'une stratégie marketing digitale",
    summary:
      "Un CPL faible ne garantit pas une campagne rentable. Voici comment construire une mesure marketing fondée sur l'économie réelle du client, pas seulement sur les indicateurs de plateforme.",
    relatedMethodSlugs: ["marketing-digital-et-mesure"],
    relatedServiceSlugs: ["automatisation-integrations", "pilotage-deploiement"],
    sections: [
      {
        heading: "Partir de l'économie du client, pas des canaux",
        paragraphs: [
          "Avant tout investissement en SEO ou en publicité, il faut déterminer panier moyen, marge, fréquence d'achat, LTV, capacité commerciale à traiter les leads et saisonnalité. Un canal rentable à petite échelle peut devenir non rentable si l'équipe commerciale ne traite pas les leads assez vite pour convertir le volume généré.",
          "Formules de référence : CAC = coûts d'acquisition / nouveaux clients attribués. ROAS = revenu attribué / dépenses publicitaires. MER = revenu total / dépenses marketing. Le ratio LTV/CAC n'a de sens que si les deux termes sont calculés avec des conventions cohérentes entre elles.",
        ],
      },
      {
        heading: "Ne pas confondre optimisation de plateforme et vérité économique",
        paragraphs: [
          "Les plateformes publicitaires utilisent des systèmes d'optimisation automatisés qui optimisent vers le signal qu'on leur donne — pas nécessairement vers le revenu réel. Il faut donc protéger la qualité des signaux transmis : conversions pertinentes, valeurs exactes, données first-party, exclusions correctement paramétrées.",
          "L'attribution reste une convention de mesure, pas la vérité absolue : plusieurs plateformes peuvent revendiquer le même client converti. Comparer source CRM, UTM, appels entrants et données de vente réelles donne une image plus fiable qu'une seule source d'attribution.",
        ],
      },
      {
        heading: "Un tableau de bord marketing qui tient sur une page",
        paragraphs: [
          "Dépenses, pipeline et revenu générés, CAC/CPL, taux de conversion par étape, top canaux, qualité des leads, délai de réponse commercial, marge, tendance et actions décidées — en séparant les leading indicators (impressions qualifiées, trafic, leads) des lagging indicators (revenu, marge, rétention), qui ne réagissent pas au même rythme.",
        ],
      },
    ],
    faq: [
      {
        question: "Un CPL faible garantit-il une campagne rentable ?",
        answer:
          "Non. Un coût par lead faible peut cacher des leads de mauvaise qualité qui ne convertissent jamais — la rentabilité se juge sur le pipeline et le revenu générés, pas sur le seul coût d'acquisition du contact.",
      },
      {
        question: "Faut-il un fichier llms.txt pour apparaître dans les résultats génératifs de recherche ?",
        answer:
          "Non. Selon les indications de Google, les bonnes pratiques SEO fondamentales restent valables pour ses fonctions génératives — un contenu unique, utile et bien structuré techniquement, sans hack présenté comme obligatoire.",
      },
    ],
  },
  {
    slug: "digitaliser-operations-erp-stocks-iot",
    title: "Comment digitaliser vos opérations sans complexité inutile",
    summary:
      "ERP, gestion de stock, traçabilité, IoT : chaque brique opérationnelle a son utilité propre, mais aucune ne remplace un diagnostic préalable des besoins réels. Voici comment les articuler sans surinvestir.",
    relatedMethodSlugs: ["operations-erp-supply-chain-iot"],
    relatedServiceSlugs: ["audit-diagnostic-digital", "automatisation-integrations"],
    sections: [
      {
        heading: "L'ERP n'est pas une solution magique",
        paragraphs: [
          "Un ERP gère des transactions et référentiels structurants — clients, fournisseurs, produits, achats, stocks, ventes, facturation — mais son efficacité dépend entièrement de la qualité des processus et des données qui l'alimentent. Avant toute migration, il faut nettoyer les référentiels, définir la codification, les responsabilités et les règles de validation.",
          "Deux chaînes servent souvent de point de départ à l'analyse : Procure-to-Pay (besoin → demande d'achat → approbation → commande fournisseur → réception → facture → paiement) et Order-to-Cash (commande → validation → préparation → livraison → facture → paiement). Cartographier aussi les exceptions — commande partielle, retour, litige, rupture — révèle souvent l'essentiel des problèmes opérationnels.",
        ],
      },
      {
        heading: "Fiabiliser les stocks avant d'automatiser",
        paragraphs: [
          "Les données de stock doivent distinguer stock physique, disponible, réservé, en transit et théorique. Les écarts entre ces catégories indiquent le plus souvent un problème de processus ou d'enregistrement plutôt qu'une simple erreur de comptage.",
          "Une prévision n'est jamais une certitude : utiliser des scénarios et des marges de sécurité adaptées au coût réel d'une rupture comparé au coût de stockage, plutôt qu'un chiffre unique traité comme fiable.",
        ],
      },
      {
        heading: "L'IoT : commencer par l'action, pas par le capteur",
        paragraphs: [
          "L'IoT collecte des mesures via des capteurs (température, vibration, position, consommation). Un projet IoT bien cadré commence toujours par l'information et l'action recherchées, pas par le choix d'un capteur disponible sur le marché — sinon le risque est de générer des données qui ne déclenchent jamais de décision utile.",
          "Avant tout projet IoT : fréquence de mesure nécessaire, précision requise, autonomie, connectivité, maintenance, sécurité des appareils, gestion des identités, mises à jour, volume de données généré et action précisément déclenchée doivent être définis à l'avance.",
        ],
      },
    ],
    faq: [
      {
        question: "Un ERP corrige-t-il automatiquement un processus mal conçu ?",
        answer:
          "Non. Un ERP digitalise un processus tel qu'il est paramétré — un processus mal conçu en amont produira les mêmes dysfonctionnements dans l'ERP, simplement plus vite et à plus grande échelle.",
      },
      {
        question: "Faut-il investir dans l'IoT avant de digitaliser les ordres de travail ?",
        answer:
          "Généralement non. Digitaliser d'abord les ordres de travail (création, priorité, résolution) donne souvent un gain plus rapide et moins coûteux qu'un projet IoT complexe lancé en première étape.",
      },
    ],
  },
  {
    slug: "tester-nouveau-modele-economique-numerique",
    title: "Comment tester un nouveau modèle économique numérique avant de le développer",
    summary:
      "Abonnement, marketplace, freemium, paiement à l'usage : chaque modèle a ses indicateurs propres. Voici comment valider une hypothèse de revenu avant d'investir dans son développement complet.",
    relatedMethodSlugs: ["modeles-affaires-numeriques"],
    relatedServiceSlugs: ["developpement-outils-metier", "audit-diagnostic-digital"],
    sections: [
      {
        heading: "Le modèle économique avant le modèle technologique",
        paragraphs: [
          "Un modèle économique décrit : client, problème, proposition de valeur, canal, ressources, activités, partenaires, revenus et coûts. Le numérique modifie souvent le coût marginal, la distribution, la mesure et la capacité de personnalisation — c'est ce changement précis qu'il faut analyser avant de choisir un outil ou une plateforme technique.",
        ],
      },
      {
        heading: "Choisir les bons indicateurs selon le modèle",
        paragraphs: [
          "Pour un abonnement : MRR/ARR, churn logo, churn revenu, expansion, ARPA, CAC, payback et LTV — avec le Net Revenue Retention comme indicateur clé pour distinguer croissance d'acquisition et rétention réelle. Pour une marketplace : GMV, take rate, liquidité, temps de match entre offre et demande, coût d'acquisition des deux côtés du marché.",
          "Pour un modèle freemium : coût du service gratuit et taux de conversion vers les fonctions payantes. Pour un modèle à l'usage : alignement entre le prix et la consommation réelle, avec des budgets et alertes pour éviter une facture imprévisible côté client.",
        ],
      },
      {
        heading: "Tester avant de développer",
        paragraphs: [
          "Avant de construire un nouveau revenu : clarifier le problème, le segment visé, la volonté réelle de payer (willingness-to-pay), une proposition de valeur précise, un prototype minimal, une prévente si possible, un test de prix et une preuve d'usage réelle.",
          "Une transformation réussie peut aussi consister à supprimer une idée qui ne trouve pas de demande, plutôt qu'à la développer entièrement d'abord et découvrir l'absence de marché après coup.",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il développer un MVP complet avant de tester un nouveau modèle économique ?",
        answer:
          "Non. Une prévente ou un test de prix auprès de clients réels permet souvent de valider ou d'invalider une hypothèse de revenu avant tout développement complet, à moindre coût et plus rapidement.",
      },
      {
        question: "Un effet de réseau doit-il être supposé pour toute plateforme ?",
        answer:
          "Non. Les effets de réseau ne doivent jamais être affirmés sans preuve — ils existent seulement lorsque la valeur pour un utilisateur augmente réellement avec le nombre ou la qualité des autres participants, ce qui doit être vérifié, pas supposé.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
