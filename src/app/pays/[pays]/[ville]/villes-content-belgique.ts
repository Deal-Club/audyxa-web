/**
 * Contenu curaté des 10 pages villes de Belgique.
 *
 * Règle anti-invention : chaque chiffre porte sa source réelle (organisme +
 * année), vérifiée par recherche web le 9 octobre 2026. Quand une donnée
 * fiable et récente n'a pas été trouvée (par exemple la population communale
 * exacte de La Louvière ou de Seraing), le texte reste qualitatif.
 * Audyxa n'a aucun bureau en Belgique : l'intervention se fait à distance.
 */

import type { VilleContent } from "./villes-content";

export const VILLES_BELGIQUE: VilleContent[] = [
  // ------------------------------------------------------------ BRUXELLES
  {
    paysSlug: "belgique",
    villeSlug: "bruxelles",
    villeName: "Bruxelles",
    metaDescription:
      "Audyxa accompagne à distance les entreprises de Bruxelles : audit digital, automatisation, facturation Peppol, IA et conformité des données. Diagnostic cadré.",
    resume:
      "Bruxelles est à la fois capitale fédérale, siège d'institutions européennes et internationales et région à forte densité d'entreprises de services. Audyxa y intervient à distance auprès de PME et d'organisations qui veulent clarifier leurs outils, automatiser leurs tâches répétitives et préparer leurs échanges de factures structurées.",
    coupDoeil: [
      "La Région de Bruxelles-Capitale compte une très forte proportion de résidents de nationalité étrangère, ce qui impose souvent des outils et des documents en plusieurs langues.",
      "Les institutions européennes, les organisations internationales, les ambassades et les écoles européennes y emploient plusieurs dizaines de milliers de personnes, ce qui structure tout un écosystème de prestataires.",
    ],
    faits: [
      {
        value: "1 255 795",
        label: "habitants dans la Région de Bruxelles-Capitale au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025",
      },
      {
        value: "53 109",
        label: "personnes employées dans les institutions européennes et internationales, ambassades et écoles européennes présentes à Bruxelles",
        source: "IBSA, Perspective.brussels (Mini-Bru 2026), situation au 31 décembre 2024",
      },
    ],
    casUsage: [
      {
        titre: "Préparer la facturation électronique entre entreprises",
        texte:
          "Pour un prestataire de services ou un cabinet qui émet et reçoit beaucoup de factures, la facturation structurée via Peppol, obligatoire entre entreprises assujetties à la TVA depuis le 1er janvier 2026 selon le site officiel e-facture du SPF Finances (consulté le 9 octobre 2026), suppose de relier le logiciel de facturation et la comptabilité. Nous cadrons ce chantier dans notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "banque-et-finance",
        sectorAnchor: "banque et finance",
      },
      {
        titre: "Structurer le suivi de dossiers multilingues",
        texte:
          "Pour une organisation, une association ou un cabinet de conseil qui travaille en français, néerlandais et anglais, un outil métier simple pour suivre les dossiers, les échéances et les pièces jointes évite les doublons entre boîtes mail. C'est l'objet de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Cadrer l'usage de l'IA avec des données sensibles",
        texte:
          "Pour une structure qui manipule des données de personnes ou de clients, tester un assistant IA suppose de définir ce qui peut ou non lui être transmis. Nous aidons à poser ce cadre dans notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
    ],
    faq: [
      {
        question: "Audyxa a-t-il un bureau à Bruxelles ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Nos missions se déroulent à distance, par visioconférence et par partage d'écran, avec un diagnostic cadré dans le temps avant tout engagement plus long.",
      },
      {
        question: "Pouvez-vous nous aider à passer à la facture électronique Peppol ?",
        answer:
          "Nous pouvons cartographier votre circuit de facturation actuel et identifier ce qui doit être relié (logiciel, comptabilité, envoi et réception). Les obligations légales exactes relèvent de vos conseils comptables et du SPF Finances : nous ne donnons pas d'avis juridique.",
      },
      {
        question: "Travaillez-vous avec des équipes qui utilisent plusieurs langues ?",
        answer:
          "Oui. Le français est notre langue de travail principale, mais nous pouvons concevoir des outils et des modèles de documents qui prévoient plusieurs langues de saisie ou d'affichage, selon vos besoins réels.",
      },
    ],
  },
  // ---------------------------------------------------------------- LIÈGE
  {
    paysSlug: "belgique",
    villeSlug: "liege",
    villeName: "Liège",
    metaDescription:
      "Liège : Audyxa aide PME, industriels et acteurs logistiques à clarifier leurs outils, automatiser leurs flux et tester l'IA. Mission à distance, diagnostic.",
    resume:
      "Liège est la principale ville de la province du même nom, avec un passé sidérurgique profond et un présent tourné vers la logistique aérienne, les sciences de la vie et l'enseignement supérieur. Audyxa intervient à distance auprès d'entreprises liégeoises qui veulent fiabiliser leurs flux, leurs données et leurs outils.",
    coupDoeil: [
      "L'aéroport de Liège est le premier aéroport cargo de Belgique depuis 2009, ce qui irrigue un tissu de transitaires, de transporteurs et de prestataires logistiques.",
      "Le bassin liégeois reste marqué par l'histoire sidérurgique de la vallée de la Meuse, dont la phase à chaud a été arrêtée après l'annonce d'ArcelorMittal en 2011.",
    ],
    faits: [
      {
        value: "197 323",
        label: "habitants dans la commune de Liège au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025, repris par l'IWEPS (fiche T003-POP.URB)",
      },
      {
        value: "1,16 million de tonnes",
        label: "de fret traitées par Liège Airport en 2024",
        source: "IWEPS, fiche M005-TRANSP.AIR, données 2024",
      },
    ],
    casUsage: [
      {
        titre: "Automatiser le suivi documentaire d'un flux de fret",
        texte:
          "Pour un transitaire ou un prestataire logistique, les documents de transport, les relances et la facturation se répètent à chaque expédition. Nous cartographions ces étapes et automatisons les plus répétitives grâce à notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Relier les outils d'un site industriel",
        texte:
          "Pour un atelier ou un sous-traitant industriel de la vallée de la Meuse, les données de production, de maintenance et de commandes vivent souvent dans des tableurs séparés. Un diagnostic permet de choisir quoi relier d'abord, dans le cadre de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Outiller une structure d'enseignement ou de formation",
        texte:
          "Pour un centre de formation ou une structure liée à l'enseignement supérieur, un outil de suivi des inscriptions, des sessions et des attestations réduit la ressaisie. C'est ce que nous construisons via notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "education-et-formation",
        sectorAnchor: "éducation et formation",
      },
    ],
    faq: [
      {
        question: "Intervenez-vous sur place à Liège ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Nous travaillons à distance, ce qui convient à la plupart des missions de diagnostic, d'automatisation et de développement. Si un déplacement ponctuel est utile, il se discute au cas par cas.",
      },
      {
        question: "Les aides régionales wallonnes peuvent-elles financer un projet digital ?",
        answer:
          "Des dispositifs existent en Wallonie, notamment via Digital Wallonia, mais l'éligibilité dépend de votre taille et de votre projet. Nous ne garantissons aucune subvention : vérifiez les conditions en vigueur auprès des organismes concernés.",
      },
      {
        question: "Un projet logistique demande-t-il forcément un gros budget ?",
        answer:
          "Pas nécessairement. Nous commençons par un diagnostic qui identifie les deux ou trois tâches les plus coûteuses en temps, puis nous proposons un périmètre réduit avant d'envisager davantage.",
      },
    ],
  },
  // ------------------------------------------------------------ CHARLEROI
  {
    paysSlug: "belgique",
    villeSlug: "charleroi",
    villeName: "Charleroi",
    metaDescription:
      "Charleroi : Audyxa accompagne à distance les entreprises en reconversion industrielle, de Gosselies aux PME locales : audit, automatisation et IA cadrés.",
    resume:
      "Charleroi est la commune la plus peuplée de Wallonie, ancienne place forte du charbon, du verre et de l'acier, aujourd'hui engagée dans une reconversion qui passe par la santé, la logistique et le numérique. Audyxa y intervient à distance, sans bureau local, pour aider des entreprises à structurer leurs outils.",
    coupDoeil: [
      "Le plateau nord de Gosselies concentre l'aéroport, le Biopark et l'ancien site Caterpillar, dont la reconversion est présentée comme un chantier de création d'emplois.",
      "Charleroi figure parmi les villes belges où le taux d'emploi est le plus bas, ce qui explique l'attention portée à la formation et à la remise à niveau des compétences.",
    ],
    faits: [
      {
        value: "205 763",
        label: "habitants dans la commune de Charleroi au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025, repris par l'IWEPS (fiche T003-POP.URB)",
      },
      {
        value: "54,8 %",
        label: "taux d'emploi des 20-64 ans à Charleroi en 2023, contre 67,1 % pour la Wallonie en 2024 (années différentes, comparaison indicative)",
        source: "IWEPS (Walstat) pour Charleroi 2023, cité par La Dernière Heure en juillet 2025 ; IWEPS pour la Wallonie 2024",
      },
    ],
    casUsage: [
      {
        titre: "Moderniser le pilotage d'un atelier industriel",
        texte:
          "Pour une PME de production ou de maintenance héritée du passé industriel local, remplacer des fiches papier par un suivi numérique des interventions fait gagner du temps sans refondre toute l'organisation. C'est le cœur de notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Structurer un projet de transformation avec un échéancier réaliste",
        texte:
          "Pour une entreprise qui s'implante ou se développe sur une zone d'activité en reconversion, le risque est de lancer plusieurs chantiers sans propriétaire clair. Notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Simplifier des processus administratifs récurrents",
        texte:
          "Pour une structure publique, associative ou parapublique, dématérialiser les demandes et les validations réduit les délais de traitement. C'est un objet typique de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
    ],
    faq: [
      {
        question: "Avez-vous une équipe à Charleroi ou à Gosselies ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Toute notre intervention est organisée à distance, avec des points réguliers en visioconférence et des livrables partagés en ligne.",
      },
      {
        question: "Mon entreprise est petite et peu digitalisée : est-ce trop tôt pour vous contacter ?",
        answer:
          "Non. Un premier diagnostic sert justement à repérer ce qui peut être simplifié avec peu de moyens, avant de parler d'outils. Nous ne vendons pas de logiciel pour le principe.",
      },
      {
        question: "Les chiffres d'emploi de Charleroi sont-ils à jour sur cette page ?",
        answer:
          "Le dernier chiffre communal que nous avons pu sourcer date de 2023. Nous préférons l'afficher avec son année plutôt que de l'extrapoler. Pour les données les plus récentes, consultez l'IWEPS ou Statbel.",
      },
    ],
  },
  // --------------------------------------------------------------- NAMUR
  {
    paysSlug: "belgique",
    villeSlug: "namur",
    villeName: "Namur",
    metaDescription:
      "Namur, capitale de la Wallonie : Audyxa accompagne à distance administrations, associations et PME avec audit, refonte de processus et outils métier sur mesure.",
    resume:
      "Namur est la capitale de la Wallonie : le Parlement et le Gouvernement wallons y siègent, ce qui en fait un pôle d'administration publique, d'associations et de prestataires gravitant autour des institutions. Audyxa y intervient à distance pour simplifier des circuits de traitement et outiller des équipes.",
    coupDoeil: [
      "Un décret du 21 octobre 2010 désigne Namur comme capitale de la Wallonie et siège des institutions politiques régionales.",
      "Le Parlement de Wallonie se trouve sur la rive gauche de la Meuse, face à l'Élysette, siège de la présidence du Gouvernement, sur la rive droite.",
    ],
    faits: [
      {
        value: "115 029",
        label: "habitants dans la commune de Namur au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025, repris par l'IWEPS (fiche T003-POP.URB)",
      },
    ],
    casUsage: [
      {
        titre: "Dématérialiser un circuit de validation",
        texte:
          "Pour un service public, un organisme parapublic ou un prestataire qui travaille avec eux, passer d'un circuit papier ou courriel à un suivi unique des dossiers raccourcit les délais. C'est un objet courant de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        sectorSlug: "secteur-public",
        sectorAnchor: "secteur public",
      },
      {
        titre: "Outiller une association ou une fédération",
        texte:
          "Pour une association qui gère des adhérents, des subsides et des rapports d'activité, un outil léger remplace des fichiers dispersés et facilite la reddition de comptes. Nous le concevons dans le cadre de notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
      {
        titre: "Valoriser l'offre d'un acteur touristique ou culturel",
        texte:
          "Pour un hébergeur, un site patrimonial ou un organisateur d'événements, centraliser réservations et demandes évite les doubles saisies. Un état des lieux précède tout choix d'outil lors de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec les administrations wallonnes ?",
        answer:
          "Nous n'avons aucun client ni partenariat à citer à Namur. Notre rôle est d'aider une structure, publique ou privée, à clarifier ses processus. Les marchés publics suivent leurs propres règles, que nous ne contournons pas.",
      },
      {
        question: "Faut-il être à Namur pour travailler avec vous ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique et intervient à distance. Les échanges se font par visioconférence, avec des livrables écrits que vos équipes peuvent relire à leur rythme.",
      },
      {
        question: "Comment protégez-vous les données de mes dossiers ?",
        answer:
          "Nous définissons avec vous quelles données sont nécessaires et lesquelles ne doivent pas quitter votre environnement. Pour les questions de protection des données personnelles, l'Autorité de protection des données belge reste l'interlocuteur de référence ; nous ne fournissons pas d'avis juridique.",
      },
    ],
  },
  // ----------------------------------------------------------------- MONS
  {
    paysSlug: "belgique",
    villeSlug: "mons",
    villeName: "Mons",
    metaDescription:
      "Mons : Audyxa accompagne à distance les entreprises du Hainaut, du numérique à la défense, avec audit, automatisation, IA et outils métier. Pas de bureau local.",
    resume:
      "Mons est un point d'ancrage du Hainaut, où se trouve le grand quartier général militaire de l'OTAN et où gravitent des activités de services et de numérique. Audyxa y intervient à distance, sans bureau en Belgique, pour aider des organisations à fiabiliser leurs outils et leurs données.",
    coupDoeil: [
      "Le quartier général militaire de l'OTAN, le SHAPE, est installé à Casteau, sur l'entité de Mons, depuis 1967.",
      "Ce choix visait notamment à répartir les retombées économiques vers le Hainaut plutôt que de concentrer toutes les grandes institutions autour de Bruxelles.",
    ],
    faits: [
      {
        value: "97 120",
        label: "habitants dans la commune de Mons au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025, repris par l'IWEPS (fiche T003-POP.URB)",
      },
    ],
    casUsage: [
      {
        titre: "Rendre un service aux personnes expatriées plus fluide",
        texte:
          "Pour un prestataire de logement, de formation ou de services aux familles internationales, centraliser demandes, documents et rendez-vous dans un outil unique réduit les relances. C'est ce que permet notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
      {
        titre: "Cadrer un premier projet d'IA dans une petite structure du numérique",
        texte:
          "Pour une jeune entreprise ou un indépendant du numérique, choisir un seul cas d'usage (tri de demandes, rédaction assistée, extraction de données) évite l'éparpillement. Nous le définissons avec vous dans notre",
        serviceSlug: "ia-entreprise",
        serviceAnchor: "service d'intelligence artificielle en entreprise",
        sectorSlug: "telecoms",
        sectorAnchor: "télécoms",
      },
      {
        titre: "Sécuriser les échanges d'une organisation sensible",
        texte:
          "Pour une structure qui manipule des informations confidentielles, un état des lieux des accès, des sauvegardes et des habitudes de partage de fichiers est une première étape raisonnable. Il fait partie de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec le SHAPE ou avec des acteurs de la défense ?",
        answer:
          "Non, et nous ne revendiquons aucun lien avec eux. Cette page mentionne le SHAPE uniquement comme repère économique local. Nous n'avons ni client ni mission dans ce domaine à afficher.",
      },
      {
        question: "Avez-vous un bureau à Mons ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Nous intervenons à distance, avec des rendez-vous en visioconférence et des documents partagés.",
      },
      {
        question: "Mon activité est très petite : un diagnostic a-t-il un sens ?",
        answer:
          "Oui, un diagnostic reste proportionné. Il peut porter sur deux ou trois flux seulement et déboucher sur des recommandations que vous appliquez seul, sans mission supplémentaire.",
      },
    ],
  },
  // -------------------------------------------------------------- TOURNAI
  {
    paysSlug: "belgique",
    villeSlug: "tournai",
    villeName: "Tournai",
    metaDescription:
      "Tournai : Audyxa aide à distance les PME de Wallonie picarde, des carrières aux commerces du centre, à automatiser leurs tâches et clarifier leurs outils.",
    resume:
      "Tournai, sur l'Escaut, est le centre de la Wallonie picarde, avec un sous-sol calcaire qui a nourri carrières et cimenteries, un patrimoine historique important et une position frontalière proche de la France et de la Flandre. Audyxa y intervient à distance auprès de PME qui veulent simplifier leur gestion.",
    coupDoeil: [
      "Le calcaire tournaisien est exploité depuis longtemps : une étude de 1899 décrit des gisements très activement exploités de part et d'autre de l'Escaut entre Tournai et la frontière française.",
      "Des cimentiers comme CBR sont toujours actifs à Antoing, à quelques kilomètres, ce qui entretient un tissu de sous-traitants industriels.",
    ],
    faits: [
      {
        value: "68 991",
        label: "habitants dans la commune de Tournai au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025, repris par l'IWEPS (fiche T003-POP.URB)",
      },
      {
        value: "+ 445",
        label: "habitants supplémentaires à Tournai entre 2024 et 2025",
        source: "SPF Intérieur, population au 1er janvier 2025, relayé par L'Avenir (12 mars 2025)",
      },
    ],
    casUsage: [
      {
        titre: "Suivre les commandes d'un sous-traitant industriel",
        texte:
          "Pour une entreprise qui fournit des carrières, des cimenteries ou des ateliers de maintenance, relier devis, commandes et facturation évite les ressaisies et les oublis. Nous cadrons ce flux avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Relier boutique physique et vente en ligne",
        texte:
          "Pour un commerçant du centre historique ou une enseigne de proximité, synchroniser stock, caisse et boutique en ligne limite les ruptures de stock affichées à tort. C'est l'un des chantiers de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Organiser la gestion d'un lieu patrimonial ou d'un hébergement",
        texte:
          "Pour un gîte, un hôtel ou un site visité, un outil de réservation relié au planning de ménage et à la facturation simplifie le quotidien. Nous le construisons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
    ],
    faq: [
      {
        question: "Êtes-vous implantés en Wallonie picarde ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Nous travaillons à distance avec les entreprises de Tournai et des environs, sans déplacement systématique.",
      },
      {
        question: "Travaillez-vous avec les cimenteries de la région ?",
        answer:
          "Non, nous n'avons aucune mission à citer avec ces entreprises. Elles sont évoquées ici seulement comme composante de l'économie locale, pas comme références.",
      },
      {
        question: "Quel est le poids actuel de l'industrie à Tournai ?",
        answer:
          "Nous n'avons pas trouvé de source récente et fiable sur l'emploi industriel de la commune, c'est pourquoi cette page n'avance aucun chiffre sur ce point. Une vérification auprès de l'IWEPS ou du Forem est préférable.",
      },
    ],
  },
  // ---------------------------------------------------------- LA LOUVIÈRE
  {
    paysSlug: "belgique",
    villeSlug: "la-louviere",
    villeName: "La Louvière",
    metaDescription:
      "La Louvière : Audyxa accompagne à distance commerces, ateliers et structures culturelles du Centre avec audit digital, automatisation et outils métier simples.",
    resume:
      "La Louvière, au cœur de la région du Centre, est une ville née de l'industrie, dont l'ancienne faïencerie Boch a laissé un site de reconversion devenu pôle culturel. Audyxa y intervient à distance pour aider commerces, ateliers et organisations culturelles à simplifier leur gestion quotidienne.",
    coupDoeil: [
      "Les Faïenceries Boch ont fait faillite en avril 2011 ; l'usine a été rasée, à l'exception d'un bâtiment abritant trois fours à bouteilles, les derniers de ce type en Belgique.",
      "Ce bâtiment héberge aujourd'hui Keramis, centre de la céramique, au sein d'un site de réhabilitation d'environ 16 hectares piloté par la Ville.",
    ],
    faits: [
      {
        value: "81 060",
        label: "habitants dans la commune de La Louvière au 1er janvier 2024 (la donnée communale de 2025 n'a pas pu être vérifiée)",
        source: "chiffre du 1er janvier 2024 rapporté par L'Avenir, à vérifier auprès de Statbel",
      },
    ],
    casUsage: [
      {
        titre: "Outiller une structure culturelle ou muséale",
        texte:
          "Pour un centre d'art, un musée ou un organisateur d'événements, un outil unique pour les réservations, les groupes scolaires et les prêts d'œuvres évite les tableurs parallèles. Nous le développons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "hotellerie-et-tourisme",
        sectorAnchor: "hôtellerie et tourisme",
      },
      {
        titre: "Moderniser la gestion d'un commerce de centre-ville",
        texte:
          "Pour un commerce indépendant, relier caisse, stock et comptabilité fait gagner plusieurs heures par semaine. C'est un point de départ habituel de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
      {
        titre: "Valoriser un patrimoine foncier en reconversion",
        texte:
          "Pour un acteur qui gère des biens, des locaux ou des lots à louer sur d'anciens sites industriels, automatiser les relances de loyer et le suivi des visites allège l'administratif. Nous le faisons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "immobilier",
        sectorAnchor: "immobilier",
      },
    ],
    faq: [
      {
        question: "Avez-vous un bureau à La Louvière ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Notre intervention se fait à distance, ce qui nous permet de travailler avec des structures de toute taille sans frais de déplacement.",
      },
      {
        question: "Pourquoi le chiffre de population date-t-il de 2024 ?",
        answer:
          "Nous n'avons pas trouvé de source officielle fiable pour la commune au 1er janvier 2025 au moment de la rédaction. Nous avons préféré afficher la donnée de 2024 avec sa date plutôt que de la mettre à jour sans vérification.",
      },
      {
        question: "Travaillez-vous avec Keramis ou la Ville de La Louvière ?",
        answer:
          "Non. Ces noms apparaissent uniquement comme éléments de contexte local. Nous n'avons ni client ni partenariat dans la ville.",
      },
    ],
  },
  // ------------------------------------------------------------- VERVIERS
  {
    paysSlug: "belgique",
    villeSlug: "verviers",
    villeName: "Verviers",
    metaDescription:
      "Verviers, ancienne capitale lainière : Audyxa accompagne à distance PME, artisans et associations avec audit digital, refonte de processus et automatisation.",
    resume:
      "Verviers, sur la Vesdre, fut l'une des grandes capitales de la laine en Europe, avant le déclin du textile au XXe siècle. La ville cherche depuis à convertir son patrimoine industriel et à relancer son tissu économique. Audyxa y intervient à distance auprès de PME et d'associations qui veulent mieux organiser leur gestion.",
    coupDoeil: [
      "La mécanisation y a été précoce : des machines à vapeur apparaissent dès 1816 et William Cockerill y installe parmi les premières machines à filer du continent.",
      "En juillet 2021, la Vesdre a provoqué de graves inondations dans la région, avec d'importants dégâts d'infrastructures suivis de travaux de restauration.",
    ],
    faits: [
      {
        value: "56 127",
        label: "habitants dans la commune de Verviers au 1er janvier 2025",
        source: "Statbel (Registre national), population au 1er janvier 2025, repris par l'IWEPS (fiche T003-POP.URB)",
      },
    ],
    casUsage: [
      {
        titre: "Reprendre en main les devis et la facturation d'un petit atelier",
        texte:
          "Pour un artisan, un atelier ou une petite entreprise de services, connecter devis, bon de commande et facture réduit les erreurs de saisie. Nous construisons ce circuit avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Remettre à plat les processus d'une organisation après un sinistre",
        texte:
          "Après un événement qui a perturbé l'activité, revoir qui fait quoi, où sont les données et comment reprendre rapidement après un incident rend la structure plus résiliente. C'est l'objet de notre",
        serviceSlug: "refonte-processus",
        serviceAnchor: "service de refonte des processus métier",
        methodeSlug: "cybersecurite-confidentialite-resilience",
        methodeAnchor: "méthode cybersécurité et confidentialité",
      },
      {
        titre: "Faire connaître un patrimoine textile et ses événements",
        texte:
          "Pour un lieu de mémoire industrielle, un organisateur de parcours de visite ou une association, centraliser inscriptions, bénévoles et communications évite les pertes d'information. Nous l'abordons dans notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Y a-t-il encore une industrie textile à Verviers ?",
        answer:
          "L'industrie lainière historique a décliné après la Seconde Guerre mondiale, et la plupart des usines ont fermé dans les années 1970 selon les sources consultées. Nous n'avons pas trouvé de chiffre récent sur l'emploi textile local, donc nous n'en affichons pas.",
      },
      {
        question: "Intervenez-vous sur place à Verviers ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Les missions se déroulent à distance, avec un diagnostic cadré et des livrables écrits.",
      },
      {
        question: "Pouvez-vous aider une structure touchée par les inondations de 2021 ?",
        answer:
          "Nous pouvons aider à réorganiser des processus et à sécuriser des sauvegardes. Nous ne traitons ni les dossiers d'indemnisation ni les aspects juridiques ou assurantiels, qui relèvent d'autres professionnels.",
      },
    ],
  },
  // ------------------------------------------------------------- MOUSCRON
  {
    paysSlug: "belgique",
    villeSlug: "mouscron",
    villeName: "Mouscron",
    metaDescription:
      "Mouscron, ville frontière : Audyxa accompagne à distance les PME textiles, commerçants et transporteurs avec automatisation, audit digital et outils sur mesure.",
    resume:
      "Mouscron est une ville frontière directement collée à Tourcoing, où le textile a longtemps structuré l'emploi et où le commerce transfrontalier reste visible au quotidien. Audyxa y intervient à distance auprès de PME, commerçants et transporteurs qui travaillent avec la France et la Flandre voisines.",
    coupDoeil: [
      "Selon une analyse de l'INSEE fondée sur des données de 2015, le textile représentait 4,7 % des emplois salariés de l'arrondissement de Mouscron, contre 0,3 % dans l'aire de Lille.",
      "Mouscron est décrite dans un document de la Chambre des représentants comme le principal point de passage de toute la frontière franco-belge.",
    ],
    faits: [
      {
        value: "Plus de 60 000",
        label: "habitants à Mouscron au 1er janvier 2025 (seuil franchi, chiffre exact non vérifié)",
        source: "SPF Intérieur, population au 1er janvier 2025, relayé par L'Avenir (12 mars 2025)",
      },
      {
        value: "4,7 %",
        label: "des emplois salariés de l'arrondissement de Mouscron dans le textile",
        source: "INSEE, analyse publiée en 2021 sur données 2015",
      },
    ],
    casUsage: [
      {
        titre: "Gérer des échanges avec des clients et fournisseurs de part et d'autre de la frontière",
        texte:
          "Pour un transporteur ou un négociant qui facture en Belgique et en France, relier commandes, documents de transport et comptabilité limite les erreurs entre deux environnements administratifs. Nous le traitons avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "transport-et-logistique",
        sectorAnchor: "transport et logistique",
      },
      {
        titre: "Suivre la production d'une PME textile ou de confection",
        texte:
          "Pour un atelier qui traite des commandes en petites séries, un suivi simple des lots, des délais et des retours remplace les carnets et fichiers dispersés. Il découle de notre",
        serviceSlug: "audit-diagnostic-digital",
        serviceAnchor: "audit et diagnostic digital",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Structurer la relation client d'un commerce de proximité",
        texte:
          "Pour un magasin qui attire une clientèle des deux côtés de la frontière, un CRM léger permet de suivre les habitudes d'achat sans outil complexe. Nous le construisons avec notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "retail-et-distribution",
        sectorAnchor: "retail et distribution",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous aussi avec des entreprises françaises voisines ?",
        answer:
          "Nous accompagnons à distance des entreprises dans plusieurs pays, mais cette page concerne Mouscron. Les règles de TVA et de facturation diffèrent entre la Belgique et la France : elles relèvent de vos conseils fiscaux.",
      },
      {
        question: "Avez-vous un bureau à Mouscron ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Toute l'intervention est organisée à distance.",
      },
      {
        question: "Les chiffres textiles sont-ils récents ?",
        answer:
          "Non, le dernier chiffre local que nous avons pu sourcer date de 2015 (publié en 2021). Nous l'affichons avec son année : le poids actuel du secteur peut avoir changé.",
      },
    ],
  },
  // -------------------------------------------------------------- SERAING
  {
    paysSlug: "belgique",
    villeSlug: "seraing",
    villeName: "Seraing",
    metaDescription:
      "Seraing, berceau de la sidérurgie liégeoise : Audyxa accompagne à distance PME et sous-traitants avec audit digital, automatisation et refonte de processus.",
    resume:
      "Seraing, dans la vallée de la Meuse, est associée à John Cockerill et à la sidérurgie liégeoise, dont la phase à chaud a été arrêtée après l'annonce d'ArcelorMittal en 2011. La commune cherche depuis à diversifier son tissu économique. Audyxa y intervient à distance auprès de PME et de sous-traitants industriels.",
    coupDoeil: [
      "La statue de John Cockerill, fondateur de l'entreprise au XIXe siècle, se dresse devant l'hôtel de ville de Seraing, lieu de rassemblement des travailleurs lors des mobilisations industrielles.",
      "La fermeture de la phase à chaud a concerné plusieurs centaines de postes directs, selon les chiffres, variables, avancés à l'époque par la direction et les syndicats.",
    ],
    faits: [],
    casUsage: [
      {
        titre: "Fiabiliser la maintenance d'équipements industriels",
        texte:
          "Pour un sous-traitant ou un atelier de mécanique, centraliser les demandes d'intervention, les pièces et l'historique des machines évite les arrêts imprévus. Nous le mettons en place avec notre",
        serviceSlug: "automatisation-integrations",
        serviceAnchor: "service d'automatisation et d'intégrations",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Accompagner un changement d'outils dans une entreprise de taille moyenne",
        texte:
          "Lorsqu'un nouveau logiciel remplace un système ancien, le vrai risque est l'adoption par les équipes. Un calendrier clair et des points réguliers font partie de notre",
        serviceSlug: "pilotage-deploiement",
        serviceAnchor: "service de pilotage et de déploiement",
        sectorSlug: "industrie-et-manufacturing",
        sectorAnchor: "industrie et manufacturing",
      },
      {
        titre: "Simplifier le suivi administratif d'une structure sociale ou associative",
        texte:
          "Pour une association d'insertion ou de formation, un outil de suivi des parcours, des présences et des rapports allège la reddition de comptes. Nous le concevons via notre",
        serviceSlug: "developpement-outils-metier",
        serviceAnchor: "service de développement d'outils métier",
        sectorSlug: "ong-et-associations",
        sectorAnchor: "ONG et associations",
      },
    ],
    faq: [
      {
        question: "Pourquoi cette page n'affiche-t-elle pas de chiffre de population ?",
        answer:
          "Nous n'avons pas trouvé de chiffre officiel récent et cohérent pour Seraing au moment de la rédaction. Plutôt que de publier un nombre non vérifié, nous préférons renvoyer vers Statbel.",
      },
      {
        question: "Avez-vous un bureau à Seraing ou à Liège ?",
        answer:
          "Non. Audyxa n'a pas de bureau en Belgique. Nous intervenons à distance, avec un diagnostic cadré avant toute mission plus longue.",
      },
      {
        question: "Travaillez-vous avec Cockerill ou ses filiales ?",
        answer:
          "Non. Le nom est cité uniquement pour l'histoire industrielle de la ville. Nous n'avons aucun client ni partenariat à afficher dans la commune.",
      },
    ],
  },
];
