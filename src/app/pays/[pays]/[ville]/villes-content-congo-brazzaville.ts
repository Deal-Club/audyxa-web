/**
 * Contenu enrichi des villes du Congo-Brazzaville (Brazzaville, Pointe-Noire,
 * Dolisie, Nkayi, Ouesso, Owando, Sibiti, Impfondo, Madingou, Mossendjo).
 *
 * Même forme que `VILLES_CONTENT` dans `./villes-content`. Règle anti-invention :
 * chaque chiffre porte sa source (INS Congo, recensement général de la population
 * et de l'habitation RGPH-5, 2023). Quand une donnée fiable et récente n'a pas été
 * trouvée, le texte reste qualitatif.
 * Audyxa n'a aucun bureau dans ces villes : intervention à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_CONGO_BRAZZAVILLE: VilleContent[] = [
  // ---------------------------------------------------------- BRAZZAVILLE
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "brazzaville",
    villeName: "Brazzaville",
    metaDescription:
      "Audyxa accompagne à distance administrations, PME et prestataires de Brazzaville, capitale installée face à Kinshasa : dématérialisation, suivi et outils métier.",
    resume:
      "Audyxa accompagne à distance les administrations, entreprises et structures associatives de Brazzaville, capitale politique et administrative du pays. Beaucoup de dossiers y circulent encore sur papier entre services, ce qui en fait un terrain naturel pour la dématérialisation des démarches et le suivi des flux.",
    coupDoeil: [
      "Brazzaville s'étend sur la rive nord du fleuve Congo, en face de Kinshasa : deux capitales nationales se font face de part et d'autre du fleuve.",
      "La ville concentre l'essentiel des institutions de l'État, des sièges d'entreprises et des organisations internationales présentes dans le pays.",
    ],
    faits: [
      {
        value: "2 138 236",
        label: "habitants recensés dans la ville de Brazzaville (2 145 783 pour l'ensemble du département, soit 34,9 % de la population nationale)",
        source: "Institut National de la Statistique (INS) du Congo, recensement RGPH-5, 2023, relayé par citypopulation.de et la DG Trésor",
      },
    ],
    casUsage: [
      {
        titre: "Dématérialiser le suivi des dossiers d'un service public",
        texte:
          "Pour une direction ou une mairie d'arrondissement, remplacer les chemises papier et les relances par téléphone par un suivi numérique des dossiers raccourcit les délais de traitement. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Structurer le reporting d'une ONG ou d'une organisation internationale",
        texte:
          "Pour une structure qui gère plusieurs projets et bailleurs, centraliser les indicateurs, les justificatifs et les rapports dans un même outil évite les ressaisies avant chaque échéance. C'est le rôle de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Fiabiliser la gestion d'un établissement d'enseignement privé",
        texte:
          "Pour une école ou un institut privé de la capitale, automatiser inscriptions, relances de scolarité et attestations libère du temps administratif. C'est un objet fréquent de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Brazzaville ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Brazzaville : notre fondateur est basé à Abomey-Calavi, au Bénin, et chaque mission se déroule à distance, par visioconférence et outils partagés.",
      },
      {
        question: "Travaillez-vous avec les administrations publiques ?",
        answer:
          "Nous pouvons cadrer un périmètre précis, par exemple un circuit de traitement de dossiers, et proposer un outil léger. Nous n'avons pas de référence publique à afficher dans la ville et nous ne prétendons pas remplacer les systèmes d'information déjà en place.",
      },
      {
        question: "Que faire si la connexion est instable pendant un point de suivi ?",
        answer:
          "Nous prévoyons des échanges asynchrones (documents partagés, messages) en complément de la visioconférence, pour que la mission avance même si une session est coupée.",
      },
    ],
  },
  // --------------------------------------------------------- POINTE-NOIRE
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "pointe-noire",
    villeName: "Pointe-Noire",
    metaDescription:
      "Audyxa appuie à distance transitaires, sous-traitants pétroliers et PME de Pointe-Noire, capitale économique et port du Congo : suivi des flux et automatisation.",
    resume:
      "Audyxa appuie à distance les transitaires, prestataires de l'industrie pétrolière et PME de Pointe-Noire, capitale économique du pays. Le port et les hydrocarbures structurent l'activité locale : les entreprises qui gravitent autour y jonglent avec des documents douaniers, des délais d'escale et des clients exigeants.",
    coupDoeil: [
      "Pointe-Noire est la porte maritime du pays : le terminal à conteneurs du port a manipulé 1 219 164 EVP en 2025, un record depuis le début de la concession, selon la presse.",
      "Le port reste pourtant fragile sur le plan de la performance : l'indice CPPI 2024 le classe 401e sur 403 ports évalués, d'après la presse économique (chiffre secondaire, non revérifié à la source).",
    ],
    faits: [
      {
        value: "1 398 812",
        label: "habitants recensés dans la ville de Pointe-Noire (1 420 612 pour l'ensemble du département, soit 23,1 % de la population nationale)",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de et la DG Trésor",
      },
      {
        value: "1 219 164",
        label: "conteneurs EVP manipulés par le terminal à conteneurs du port en 2025",
        source: "concessionnaire du terminal, relayé par Les Dépêches de Brazzaville via AllAfrica, janvier 2026",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les dossiers de transit et les délais d'escale",
        texte:
          "Pour un transitaire ou un agent maritime, un tableau de bord qui rapproche conteneurs, documents et échéances permet d'alerter les clients avant les frais de stationnement. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Organiser la facturation d'un sous-traitant du secteur pétrolier",
        texte:
          "Pour une entreprise qui intervient auprès de compagnies pétrolières, relier bons de travail, pointages et factures évite les rejets et les retards de paiement. C'est un objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "energie",
        sectorAnchor: "énergie",
      },
      {
        titre: "Préparer une activité à la future zone économique spéciale",
        texte:
          "Pour une PME qui envisage de s'installer ou de fournir les futurs occupants de la zone économique spéciale lancée à Pointe-Noire, un diagnostic de ses processus clarifie ce qu'il faut structurer d'abord. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il implanté à Pointe-Noire ?",
        answer:
          "Non, nous n'avons pas de bureau à Pointe-Noire. Le fondateur d'Audyxa est basé à Abomey-Calavi (Bénin) et les missions sont conduites à distance, avec des points réguliers en visioconférence.",
      },
      {
        question: "Travaillez-vous pour les compagnies pétrolières ?",
        answer:
          "Nous ciblons surtout les PME et prestataires de taille intermédiaire. Pour un grand opérateur, nous ne nous substituons pas aux équipes internes : nous pouvons au mieux cadrer un périmètre précis, comme un processus de facturation.",
      },
      {
        question: "Pouvez-vous réduire nos délais au port ?",
        answer:
          "Non, nous ne promettons pas de résultat sur le port lui-même. Nous pouvons organiser votre côté de la chaîne (documents, relances, suivi des dossiers) pour que vos propres retards diminuent.",
      },
    ],
  },
  // -------------------------------------------------------------- DOLISIE
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "dolisie",
    villeName: "Dolisie",
    metaDescription:
      "Audyxa accompagne à distance commerçants, transporteurs et PME de Dolisie, ville du Niari née du rail Congo-Océan : suivi des flux, ventes et outils sur mesure.",
    resume:
      "Audyxa accompagne à distance les commerçants, transporteurs et petites entreprises de Dolisie, chef-lieu du Niari. La ville est née du chemin de fer et reste un carrefour entre l'axe Pointe-Noire/Brazzaville et la branche vers le nord, ce qui donne une place centrale aux marchandises en transit.",
    coupDoeil: [
      "Dolisie s'est développée comme une gare du chemin de fer Congo-Océan, à l'endroit où la ligne rejoint la branche de Mbinda vers la frontière gabonaise.",
      "La Banque des États de l'Afrique centrale (BEAC) a posé la première pierre de son agence de Dolisie le 20 novembre 2025, signe du poids économique attribué à la ville.",
    ],
    faits: [
      {
        value: "178 172",
        label: "habitants recensés dans la ville de Dolisie, troisième ville du pays",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les marchandises d'un commerce de gros",
        texte:
          "Pour un grossiste qui s'approvisionne à Pointe-Noire ou Brazzaville, suivre commandes, arrivages par rail ou route et créances clients évite les ruptures et les impayés. C'est un point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Planifier les rotations d'un transporteur routier",
        texte:
          "Pour un transporteur qui dessert l'axe du Niari, un suivi des départs, des délais et des pannes permet d'informer les clients sans multiplier les appels. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Outiller une petite scierie ou un atelier de transformation",
        texte:
          "Pour une petite unité de transformation du bois, noter entrées de grumes, rendements et ventes par client aide à fixer des prix qui couvrent les coûts. C'est un objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Dolisie ?",
        answer:
          "Non. Nous n'avons pas de bureau à Dolisie : notre fondateur est basé à Abomey-Calavi, au Bénin, et nous intervenons uniquement à distance.",
      },
      {
        question: "L'état du rail influence-t-il vos missions ?",
        answer:
          "Pas directement, puisque nous travaillons à distance. Nous pouvons en revanche mettre en place un suivi qui rend visibles les retards d'acheminement pour vos propres clients. Nous n'avons pas trouvé de statistique récente et vérifiable sur la ligne, et n'en affichons donc aucune.",
      },
      {
        question: "Une activité informelle peut-elle être accompagnée ?",
        answer:
          "Oui, dès lors qu'il y a une activité réelle. Le diagnostic part de vos cahiers, tableurs ou messages existants et propose un premier niveau d'organisation, sans formalisation préalable.",
      },
    ],
  },
  // ---------------------------------------------------------------- NKAYI
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "nkayi",
    villeName: "Nkayi",
    metaDescription:
      "Audyxa appuie à distance planteurs, distributeurs et PME de Nkayi, ville du sucre dans la Bouenza : traçabilité des livraisons, stocks et suivi administratif.",
    resume:
      "Audyxa appuie à distance les planteurs, distributeurs et petites entreprises de Nkayi, dans le département de la Bouenza. La ville est connue pour sa sucrerie, qui fait vivre planteurs, saisonniers et commerçants autour d'un cycle de récolte et de livraison très rythmé.",
    coupDoeil: [
      "Nkayi abrite la sucrerie de la SARIS Congo, adossée à des plantations de canne ; un rapport logistique de 2023 évoque une production proche de 70 000 tonnes de sucre par an (ordre de grandeur non revérifié auprès de l'entreprise).",
      "La SARIS construit aussi une distillerie d'éthanol à partir de la mélasse, d'après la presse spécialisée ; son état de fonctionnement actuel n'a pas pu être confirmé.",
    ],
    faits: [
      {
        value: "104 083",
        label: "habitants recensés dans la ville de Nkayi",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de",
      },
    ],
    casUsage: [
      {
        titre: "Tracer les livraisons de canne d'un groupement de planteurs",
        texte:
          "Pour un planteur ou un groupement qui livre à l'usine, garder la trace des pesées, des avances et des paiements limite les contestations en fin de campagne. C'est un chantier de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Gérer les tournées d'un distributeur de produits de grande consommation",
        texte:
          "Pour un grossiste qui livre des détaillants de la Bouenza, suivre tournées, encaissements et retours donne une vue claire de la rentabilité de chaque client. C'est le rôle de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Simplifier la paie et les pointages d'une entreprise à main-d'œuvre saisonnière",
        texte:
          "Pour un sous-traitant qui emploie des équipes variables selon la campagne, un pointage numérique et un calcul automatisé des paies réduisent les erreurs. C'est un objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
    ],
    faq: [
      {
        question: "Audyxa travaille-t-il avec la sucrerie de Nkayi ?",
        answer:
          "Non. Audyxa n'a aucune mission, aucun partenariat ni aucun bureau à Nkayi. Notre fondateur est basé à Abomey-Calavi (Bénin) et nos interventions se font à distance pour des entreprises qui nous sollicitent.",
      },
      {
        question: "Une mission peut-elle se limiter à un seul processus ?",
        answer:
          "Oui. Beaucoup de petites structures commencent par un seul sujet, par exemple le suivi des livraisons ou des paiements, avant d'envisager d'autres chantiers.",
      },
      {
        question: "Disposez-vous de chiffres officiels sur la filière sucre ?",
        answer:
          "Nous n'avons trouvé que des ordres de grandeur issus de rapports privés et de la presse, sans publication officielle récente. Nous préférons donc ne pas les afficher comme des statistiques et travailler avec vos propres données.",
      },
    ],
  },
  // --------------------------------------------------------------- OUESSO
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "ouesso",
    villeName: "Ouesso",
    metaDescription:
      "Audyxa accompagne à distance sous-traitants forestiers, transporteurs fluviaux et PME d'Ouesso, chef-lieu de la Sangha : traçabilité, suivi et outils légers.",
    resume:
      "Audyxa accompagne à distance les sous-traitants forestiers, transporteurs et commerçants d'Ouesso, chef-lieu de la Sangha, au nord du pays. L'économie y dépend du bois et du fleuve, avec de longues distances et des exigences de traçabilité que seul un suivi rigoureux permet de tenir.",
    coupDoeil: [
      "Ouesso se trouve sur la Sangha, dans une zone de grandes concessions forestières ; plusieurs d'entre elles, exploitées notamment par Danzer (IFO) et Olam, affichent une certification FSC d'après ces entreprises.",
      "Le pays détient près de 3 millions d'hectares de concessions certifiées FSC, selon un article de février 2026 rendant compte du sommet Zámba Heritage.",
    ],
    faits: [
      {
        value: "75 095",
        label: "habitants recensés dans la ville d'Ouesso",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de",
      },
    ],
    casUsage: [
      {
        titre: "Documenter la traçabilité d'un lot de bois",
        texte:
          "Pour un sous-traitant ou un transporteur de grumes, rattacher chaque lot à ses documents, son origine et sa destination facilite les contrôles et les audits de certification. C'est un objet de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Suivre l'approvisionnement d'un commerce isolé",
        texte:
          "Pour un commerçant éloigné des grands axes, anticiper les commandes et le niveau de stock réduit les ruptures quand l'acheminement est long. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Piloter les rotations d'un transporteur fluvial ou routier",
        texte:
          "Pour un transporteur qui relie le nord au reste du pays, un tableau de bord des départs et des retards aide à prévenir les clients à temps. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une équipe à Ouesso ?",
        answer:
          "Non. Nous n'avons pas de bureau à Ouesso : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se font intégralement à distance.",
      },
      {
        question: "Travaillez-vous avec les concessions forestières ?",
        answer:
          "Nous n'avons aucune mission avec elles. Nous pouvons aider un sous-traitant local à organiser ses propres documents, sans intervenir sur la gestion forestière ni sur les certifications, qui relèvent des organismes concernés.",
      },
      {
        question: "La connexion est limitée chez nous, est-ce un obstacle ?",
        answer:
          "Cela se prévoit. Nous privilégions des outils légers, utilisables avec une connexion modeste, et des échanges par messagerie en complément des appels vidéo.",
      },
    ],
  },
  // ---------------------------------------------------------------- OWANDO
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "owando",
    villeName: "Owando",
    metaDescription:
      "Audyxa appuie à distance éleveurs, pêcheurs, transformateurs et PME d'Owando, chef-lieu de la Cuvette sur la Kouyou : registres de gestion et outils de suivi.",
    resume:
      "Audyxa appuie à distance les éleveurs, transformateurs et commerçants d'Owando, chef-lieu de la Cuvette. Entre élevage, pêche, cultures et petite industrie, l'activité locale est diversifiée, souvent informelle, et profite d'un suivi simple des achats et des ventes.",
    coupDoeil: [
      "Owando est établie sur la rivière Kouyou, navigable une grande partie de l'année d'après une fiche départementale ; la pêche et le poisson fumé y ont longtemps compté parmi les premières activités.",
      "Une route relie Oyo à Owando, le long de laquelle ont été installés de grands ranchs d'élevage, selon un article d'Afrik.com (information ancienne, à lire comme un repère).",
    ],
    faits: [
      {
        value: "48 642",
        label: "habitants recensés dans la ville d'Owando (316 599 pour le département de la Cuvette)",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de et Wikipédia",
      },
    ],
    casUsage: [
      {
        titre: "Tenir le suivi d'un élevage",
        texte:
          "Pour un éleveur de bovins, de volailles ou de porcs, un carnet numérique des achats d'aliments, des soins et des ventes montre le coût réel de chaque animal. C'est un objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser la vente de poisson fumé ou de manioc transformé",
        texte:
          "Pour une transformatrice ou un groupement, suivre quantités, pertes et clients par destination aide à repérer où se perd la marge. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Moderniser le circuit de dossiers d'une collectivité locale",
        texte:
          "Pour un service décentralisé du chef-lieu, un circuit numérique pour les demandes et les suivis de dossiers réduit les allers-retours physiques. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Avez-vous une présence à Owando ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Owando. Notre fondateur est basé à Abomey-Calavi, au Bénin, et toutes les missions se déroulent à distance.",
      },
      {
        question: "Peut-on commencer sans ordinateur ?",
        answer:
          "Oui, dans bien des cas. Nous partons du téléphone et d'outils légers, et proposons un premier registre simple avant d'envisager autre chose.",
      },
      {
        question: "Existe-t-il des chiffres récents sur l'économie d'Owando ?",
        answer:
          "Nous n'avons trouvé que des fiches départementales anciennes et la population du recensement 2023. Nous n'affichons donc aucune donnée économique communale que nous ne puissions pas sourcer.",
      },
    ],
  },
  // ---------------------------------------------------------------- SIBITI
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "sibiti",
    villeName: "Sibiti",
    metaDescription:
      "Audyxa accompagne à distance producteurs, commerçants et structures locales de Sibiti, chef-lieu de la Lékoumou : suivi des récoltes, ventes et projets agricoles.",
    resume:
      "Audyxa accompagne à distance les producteurs, commerçants et structures locales de Sibiti, chef-lieu de la Lékoumou, dans le sud du pays. L'agriculture familiale domine, avec des filières comme le café qu'on cherche à relancer : un suivi simple des apports et des ventes y a une vraie utilité.",
    coupDoeil: [
      "La Lékoumou est un département surtout agricole : manioc, arachide, banane plantain et huile de palme artisanale y sont cultivés, d'après une fiche officielle.",
      "En mars 2026, une pépinière d'environ 40 000 plants de caféier robusta a été annoncée dans le district de Mayéyé pour relancer la filière café, selon la presse congolaise.",
    ],
    faits: [
      {
        value: "33 887",
        label: "habitants recensés dans la ville de Sibiti (environ 100 559 pour le département de la Lékoumou)",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de et Wikipédia",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les apports d'une coopérative de producteurs",
        texte:
          "Pour un groupement qui collecte manioc, arachides ou, demain, café auprès de ses membres, un registre partagé des apports et des paiements renforce la confiance. C'est le rôle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Organiser les ventes d'un commerce de proximité",
        texte:
          "Pour un commerçant qui vend à crédit à une clientèle locale, un outil simple de suivi des ventes et des créances évite d'oublier les impayés. C'est un objet fréquent de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Suivre un projet financé par un bailleur",
        texte:
          "Pour une association locale qui porte un projet agricole ou communautaire, consigner activités, dépenses et justificatifs au fil de l'eau facilite le rapport final. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Audyxa est-il présent à Sibiti ?",
        answer:
          "Non, nous n'avons pas de bureau à Sibiti. Le fondateur d'Audyxa est basé à Abomey-Calavi (Bénin) et les missions sont conduites à distance.",
      },
      {
        question: "Pouvez-vous aider à relancer la filière café ?",
        answer:
          "Non, cela relève des acteurs agricoles et publics. Nous pouvons seulement aider un groupement à tenir ses registres d'apports, de ventes et de paiements, quand la production sera là.",
      },
      {
        question: "Quels outils conviennent à de petites structures rurales ?",
        answer:
          "Des outils légers qui fonctionnent sur téléphone et gardent les données en cas de coupure. Nous évitons les logiciels lourds, difficiles à maintenir sur place.",
      },
    ],
  },
  // -------------------------------------------------------------- IMPFONDO
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "impfondo",
    villeName: "Impfondo",
    metaDescription:
      "Audyxa accompagne à distance commerçants, transporteurs fluviaux et structures d'Impfondo, chef-lieu de la Likouala sur l'Oubangui : suivi des flux et stocks.",
    resume:
      "Audyxa accompagne à distance les commerçants, transporteurs fluviaux et structures locales d'Impfondo, chef-lieu de la Likouala, tout au nord du pays. L'isolement et la dépendance au fleuve Oubangui font de la planification des approvisionnements un enjeu quotidien.",
    coupDoeil: [
      "Impfondo est reliée par barge à Brazzaville et à Bangui, mais l'Oubangui n'est pleinement navigable qu'environ six mois par an, avec des basses eaux de janvier à juin selon une fiche logistique.",
      "Le département de la Likouala vit d'agriculture, d'élevage, de pêche et de transformation du bois ; cacao et café sont cultivés à Épéna et Dongou, d'après la fiche départementale.",
    ],
    faits: [
      {
        value: "38 240",
        label: "habitants recensés dans la ville d'Impfondo",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de",
      },
    ],
    casUsage: [
      {
        titre: "Anticiper les stocks d'un commerce dépendant du fleuve",
        texte:
          "Pour un commerçant dont le réapprovisionnement dépend des barges, calculer les besoins sur plusieurs semaines évite les ruptures pendant les basses eaux. C'est un point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Suivre les cargaisons d'un transporteur fluvial",
        texte:
          "Pour un opérateur de barge ou un expéditeur, noter chargements, escales et retards dans un outil partagé permet de renseigner clients et destinataires à distance. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Structurer la vente de cacao ou de café d'un groupement",
        texte:
          "Pour un groupement de planteurs, tenir à jour les quantités collectées, les prix et les paiements dans un registre partagé simplifie les comptes de fin de saison. C'est un objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
    ],
    faq: [
      {
        question: "Audyxa dispose-t-il d'une équipe à Impfondo ?",
        answer:
          "Non. Nous n'avons pas de bureau à Impfondo : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se font uniquement à distance.",
      },
      {
        question: "Est-ce faisable avec une connexion très limitée ?",
        answer:
          "Souvent oui, en réduisant les échanges à l'essentiel : documents légers, messages écrits, appels courts. Nous convenons avec vous d'un rythme réaliste dès le début.",
      },
      {
        question: "Les données du fleuve sont-elles utilisées dans vos analyses ?",
        answer:
          "Nous ne disposons d'aucune série officielle récente sur la navigabilité et n'en affichons donc pas. L'analyse repose sur vos propres dates de départ, d'arrivée et de rupture.",
      },
    ],
  },
  // -------------------------------------------------------------- MADINGOU
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "madingou",
    villeName: "Madingou",
    metaDescription:
      "Audyxa appuie à distance agriculteurs, commerçants et collectivités de Madingou, chef-lieu de la Bouenza : suivi des ventes, dossiers locaux et outils simples.",
    resume:
      "Audyxa appuie à distance les agriculteurs, commerçants et services locaux de Madingou, chef-lieu de la Bouenza. Le département associe cultures variées, industrie et gisements miniers, et la ville elle-même fonctionne surtout comme centre administratif et commercial de proximité.",
    coupDoeil: [
      "La Bouenza regroupe une cimenterie à Loutété, des plantations de canne à Nkayi et des cultures comme la banane, l'huile de palme, l'arachide et le tabac, d'après une présentation du département.",
      "Madingou est desservie par une gare de la ligne Congo-Océan, ce qui la place sur l'axe entre Pointe-Noire et Brazzaville.",
    ],
    faits: [
      {
        value: "43 787",
        label: "habitants recensés dans la ville de Madingou (363 850 pour le département de la Bouenza)",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de et Wikipédia",
      },
    ],
    casUsage: [
      {
        titre: "Dématérialiser les demandes adressées à une administration locale",
        texte:
          "Pour une direction départementale ou une mairie, numériser le dépôt et le suivi des demandes évite les déplacements inutiles des usagers. C'est un chantier de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Suivre les ventes d'un producteur de banane ou d'arachide",
        texte:
          "Pour un producteur qui vend à plusieurs acheteurs, un suivi des quantités, prix et paiements montre quels circuits rapportent vraiment. C'est un objet de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Gérer le suivi des chantiers d'une petite entreprise de construction",
        texte:
          "Pour une entreprise qui fournit des chantiers locaux, centraliser devis, avancement et paiements limite les dépassements. C'est le rôle de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "btp-et-construction",
        sectorAnchor: "BTP et construction",
      },
    ],
    faq: [
      {
        question: "Avez-vous un bureau à Madingou ?",
        answer:
          "Non. Audyxa n'a pas de bureau à Madingou. Notre fondateur est basé à Abomey-Calavi, au Bénin, et toutes les missions sont menées à distance.",
      },
      {
        question: "Quelle différence avec la page de Nkayi ?",
        answer:
          "Les deux villes sont dans la Bouenza, mais Nkayi gravite autour de la sucrerie, tandis que Madingou est surtout un chef-lieu administratif et commercial. Les besoins ne sont pas les mêmes.",
      },
      {
        question: "Les petites structures sont-elles concernées ?",
        answer:
          "Oui. Une mission peut se limiter à un seul processus, par exemple le suivi des ventes ou des dossiers, avant d'aller plus loin si cela se justifie.",
      },
    ],
  },
  // ------------------------------------------------------------ MOSSENDJO
  {
    paysSlug: "congo-brazzaville",
    villeSlug: "mossendjo",
    villeName: "Mossendjo",
    metaDescription:
      "Audyxa accompagne à distance cultivateurs, commerçants et petites structures de Mossendjo, ville du Niari sur la ligne vers Mbinda : registres et suivi simples.",
    resume:
      "Audyxa accompagne à distance les cultivateurs, commerçants et petites structures de Mossendjo, dans le massif du Chaillu au nord du Niari. C'est une petite ville agricole, desservie par la branche ferroviaire de Mbinda, où l'on dispose de peu de données publiées : nous restons donc volontairement prudents.",
    coupDoeil: [
      "Mossendjo se situe sur la branche ferroviaire qui rejoint Mbinda, à la frontière gabonaise, ligne construite au début des années 1960.",
      "Le département du Niari classe Mossendjo parmi ses bassins de production de manioc, d'arachide, de maïs et d'huile de palme, d'après sa fiche départementale.",
    ],
    faits: [
      {
        value: "15 003",
        label: "habitants recensés dans la ville de Mossendjo",
        source: "INS Congo, recensement RGPH-5, 2023, relayé par citypopulation.de",
      },
    ],
    casUsage: [
      {
        titre: "Tenir les comptes d'une exploitation agricole familiale",
        texte:
          "Pour un cultivateur qui vend manioc, arachide ou maïs, un registre simple des dépenses et des ventes par saison éclaire les décisions de culture. C'est le point de départ de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "agroalimentaire",
        sectorAnchor: "agroalimentaire",
      },
      {
        titre: "Suivre l'approvisionnement d'une boutique éloignée",
        texte:
          "Pour un commerçant qui s'approvisionne par le train ou la route, noter les quantités commandées, reçues et vendues limite les ruptures. C'est un objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Rendre compte d'un petit projet d'énergie ou d'équipement local",
        texte:
          "Pour une association ou une collectivité portant un projet d'équipement, par exemple de micro-électrification, consigner étapes et dépenses facilite le suivi avec les financeurs. C'est un chantier de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et déploiement",
        sectorSlug: "energie",
        sectorAnchor: "énergie",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il une présence à Mossendjo ?",
        answer:
          "Non. Nous n'avons pas de bureau à Mossendjo : notre fondateur est basé à Abomey-Calavi, au Bénin, et les missions se déroulent à distance.",
      },
      {
        question: "Pourquoi si peu de chiffres sur votre page ?",
        answer:
          "Parce que nous n'avons trouvé aucune statistique économique fiable et récente propre à la ville, hormis sa population au recensement 2023. Nous préférons le dire plutôt que d'avancer des chiffres non vérifiés.",
      },
      {
        question: "Une mission est-elle possible pour une très petite structure ?",
        answer:
          "Oui, à condition qu'il y ait une activité réelle à organiser. Nous commençons par un diagnostic court de ce qui existe déjà, puis proposons un premier outil léger.",
      },
    ],
  },
];
