export interface HistoireSource {
  label: string;
  url: string;
}

export interface HistoireStat {
  value: string;
  label: string;
}

export interface HistoireAction {
  /** Date ou repère temporel court ("2000", "1975-1978"...) */
  when: string;
  /** Description précise et concrète de l'action ou de la décision */
  text: string;
}

export interface Histoire {
  slug: string;
  company: string;
  type: "echec" | "reussite";
  title: string;
  tagline: string;
  /** Icône Font Awesome (classe complète, ex. "fa fa-film") pour l'image mise en avant */
  icon: string;
  summary: string;
  /** Texte avec syntaxe **gras** légère (voir composant BoldText) */
  contextBefore: string;
  /**
   * Chronologie détaillée des actions et décisions concrètes qui ont mené à
   * la chute ou à la réussite — l'objectif est que le lecteur comprenne
   * précisément QUOI a été fait (ou pas fait), pas seulement le résultat.
   */
  actions: HistoireAction[];
  aftermath: string;
  stats: HistoireStat[];
  lesson: string;
  /** Nuance ou contestation factuelle à afficher explicitement, si applicable */
  caveat?: string;
  /** slug d'un service Audyxa (services-content.ts) directement lié à la leçon de cette histoire */
  relatedServiceSlug: string;
  /** Phrase qui relie explicitement la leçon au service, pour pousser à l'action */
  serviceCta: string;
  sources: HistoireSource[];
}

/**
 * Études de cas EXTERNES sur des entreprises publiques réelles, largement
 * documentées dans la presse économique — jamais des clients d'Audyxa.
 * Chaque fait est sourcé ; les points de vigilance factuels identifiés lors
 * de la recherche sont affichés explicitement plutôt que lissés.
 * Aucune photo de marque tierce n'est utilisée (droits d'image) : l'image
 * mise en avant de chaque page est une icône stylisée, pas un logo/photo.
 */
export const HISTOIRES: Histoire[] = [
  {
    slug: "blockbuster-netflix",
    company: "Blockbuster",
    type: "echec",
    title: "Blockbuster face à Netflix",
    tagline: "Refuser de racheter un concurrent jugé trop petit pour être une menace",
    icon: "fa fa-film",
    summary:
      "En 2000, Blockbuster refuse de racheter Netflix, alors une jeune entreprise déficitaire. Dix ans plus tard, Blockbuster dépose le bilan ; Netflix devient un géant mondial.",
    contextBefore:
      "En 2000, **Blockbuster domine la location de vidéos** aux États-Unis avec des milliers de magasins physiques. **Netflix** est une jeune entreprise de location de DVD par courrier, **encore déficitaire**.",
    actions: [
      { when: "2000", text: "Les cofondateurs de Netflix, **Reed Hastings et Marc Randolph**, se rendent en personne à Dallas pour proposer au PDG de Blockbuster, **John Antioco**, de racheter Netflix pour **50 millions de dollars**." },
      { when: "2000", text: "**John Antioco refuse l'offre.** Blockbuster reste concentré sur son modèle de magasins physiques, jugé encore largement dominant et rentable." },
      { when: "2000-2010", text: "Blockbuster **ne développe pas d'alternative sérieuse** à la location par correspondance ni au streaming pendant toute la décennie, tout en conservant son système de **pénalités de retard** qui pénalise l'image de marque." },
      { when: "2007", text: "Netflix, livré à lui-même, **lance son service de streaming**, une décennie après le refus de rachat." },
      { when: "23/09/2010", text: "**Blockbuster dépose le bilan** (Chapter 11), avec 1,02 milliard de dollars d'actifs déclarés pour 1,46 milliard de dollars de dettes." },
    ],
    aftermath:
      "Netflix devient un acteur mondial du divertissement, aujourd'hui valorisé à plus de **231 milliards de dollars**. Blockbuster, lui, n'a jamais retrouvé de modèle viable après sa faillite.",
    stats: [
      { value: "50 M$", label: "offre de rachat de Netflix par ses propres fondateurs, refusée par Blockbuster en 2000" },
      { value: "23/09/2010", label: "date de dépôt de bilan de Blockbuster (Chapter 11), actifs déclarés 1,02 Md$ pour 1,46 Md$ de dettes" },
    ],
    lesson:
      "Un refus fondé sur la **sous-estimation d'un concurrent naissant**, jugé « niche », peut coûter la survie de l'entreprise dominante. Le vrai risque n'est pas toujours le concurrent visible, mais **celui qu'on juge trop petit pour être une menace**.",
    relatedServiceSlug: "audit-diagnostic-digital",
    serviceCta:
      "Personne chez Blockbuster n'a formalisé un diagnostic objectif du signal Netflix. C'est exactement ce qu'un audit et diagnostic digital sert à éviter : mesurer les menaces et opportunités réelles avant qu'elles ne deviennent irréversibles.",
    caveat:
      "L'offre de 50 millions de dollars est confirmée par plusieurs sources et documentée par les cofondateurs de Netflix eux-mêmes. Le récit dramatisé (« Blockbuster a ri au nez de Netflix ») reste en revanche contesté par l'ancien PDG de Blockbuster, John Antioco, qui affirme que personne, à l'époque, ne valorisait Netflix à ce niveau — à traiter comme une nuance, pas comme un fait absolu.",
    sources: [
      { label: "Newsweek — Fact Check", url: "https://www.newsweek.com/fact-check-did-blockbuster-turn-down-chance-buy-netflix-50-million-1575557" },
      { label: "Engadget, 23/09/2010", url: "https://www.engadget.com/2010-09-23-blockbuster-files-for-chapter-11.html" },
      { label: "Fortune, 14/04/2023", url: "https://fortune.com/2023/04/14/netflix-cofounder-marc-randolph-recalls-blockbuster-rejecting-chance-to-buy-it" },
    ],
  },
  {
    slug: "kodak",
    company: "Kodak",
    type: "echec",
    title: "Kodak et l'appareil photo numérique",
    tagline: "Inventer la rupture technologique et refuser de l'exploiter",
    icon: "fa fa-camera-retro",
    summary:
      "Kodak a inventé le premier appareil photo numérique dès 1975, mais a refusé de l'exploiter commercialement pour protéger son activité pellicule. L'entreprise dépose le bilan en 2012.",
    contextBefore:
      "**Kodak domine mondialement** le marché de la photographie argentique et de la pellicule, avec une **valorisation dépassant 28 milliards de dollars** en 1996 et plus de 140 000 employés.",
    actions: [
      { when: "1975", text: "L'ingénieur Kodak **Steven Sasson invente le premier appareil photo numérique portable**, construit autour d'un capteur CCD Fairchild de 10 000 pixels — une prouesse technique interne, développée dans les propres laboratoires de Kodak." },
      { when: "1978", text: "Kodak **dépose un brevet** sur cette invention, mais **ne l'exploite pas commercialement** : la direction juge que le numérique cannibaliserait le cœur de métier, très rentable, de la pellicule et des tirages papier." },
      { when: "1979", text: "Un **rapport interne** rédigé par le cadre Kodak Larry Matteson **prédit un basculement complet vers le numérique d'ici 2010** — le diagnostic était juste, mais **aucune action stratégique n'en découle**." },
      { when: "1980s-2000s", text: "Kodak **continue d'investir prioritairement dans la pellicule** pendant plusieurs décennies, pendant que des concurrents (Canon, Sony) puis les fabricants de smartphones prennent le marché du numérique." },
      { when: "19/01/2012", text: "**Kodak dépose le bilan** (Chapter 11), avec une dette de 6,75 milliards de dollars, avant de sortir de faillite le 3 septembre 2013, recentrée sur l'impression commerciale." },
    ],
    aftermath:
      "Kodak survit aujourd'hui comme une entreprise réduite, recentrée sur l'impression commerciale — loin de sa position de leader mondial des années 1990.",
    stats: [
      { value: "1975", label: "invention du premier appareil photo numérique portable par un ingénieur Kodak" },
      { value: "6,75 Md$", label: "dette de Kodak au moment du dépôt de bilan, janvier 2012" },
    ],
    lesson:
      "Inventer une rupture technologique ne suffit pas — il faut **accepter de cannibaliser son propre modèle économique** avant qu'un concurrent ne le fasse à sa place. **Protéger un cash-flow rentable à court terme peut détruire l'entreprise à long terme.**",
    relatedServiceSlug: "pilotage-deploiement",
    serviceCta:
      "Kodak avait l'innovation en interne dès 1975 — ce qui a manqué, c'est le pilotage pour la déployer malgré la résistance organisationnelle. Un bon pilotage et déploiement transforme une bonne idée en résultat réel, au lieu de la laisser dormir dans un tiroir.",
    sources: [
      { label: "Forbes, « How Kodak Failed », 18/01/2012", url: "https://www.forbes.com/sites/chunkamui/2012/01/18/how-kodak-failed/" },
      { label: "ABC27 — 10 ans après la faillite", url: "https://www.abc27.com/digital-originals/on-this-date-kodak-declares-bankruptcy-10-years-later/" },
      { label: "Wikipedia — Kodak", url: "https://en.wikipedia.org/wiki/Kodak" },
    ],
  },
  {
    slug: "nokia",
    company: "Nokia",
    type: "echec",
    title: "Nokia face à l'iPhone",
    tagline: "Dominer un marché ne protège pas d'un changement de paradigme",
    icon: "fa fa-mobile-alt",
    summary:
      "Leader mondial incontesté de la téléphonie mobile jusqu'en 2007, Nokia n'a pas su réagir à temps à l'arrivée de l'iPhone et d'Android, et a fini par céder sa division mobile à Microsoft.",
    contextBefore:
      "**Nokia est le leader mondial incontesté** de la téléphonie mobile dans les années 2000, avec un système d'exploitation propriétaire (Symbian) taillé pour l'ère du téléphone à touches.",
    actions: [
      { when: "2007-2008", text: "**Apple lance l'iPhone (2007)**, **Google lance Android (2008)** — deux écosystèmes tactiles et applicatifs. Nokia **reste sur Symbian**, jugé peu adapté à cette nouvelle ère, et continue de produire des téléphones à touches physiques." },
      { when: "2011", text: "Le nouveau PDG **Stephen Elop** publie en interne le tristement célèbre mémo de la « **plateforme en feu** » (burning platform), comparant Nokia à un homme devant sauter d'une plateforme pétrolière en flammes pour survivre." },
      { when: "2011", text: "Nokia **abandonne son projet interne MeeGo** (un système d'exploitation alternatif en développement) et engage à la place un **partenariat exclusif avec Microsoft** pour adopter Windows Phone — une bascule jugée tardive, quatre ans après l'iPhone." },
      { when: "2011-2013", text: "Le partenariat Windows Phone **ne parvient pas à rivaliser** avec l'écosystème d'applications iOS/Android, faute de masse critique de développeurs et d'utilisateurs." },
      { when: "09/2013 → 04/2014", text: "Nokia **vend sa division mobile (Devices & Services) à Microsoft** — annonce en septembre 2013, clôture en avril 2014. Microsoft dépréciera ensuite la quasi-totalité de cette acquisition et se retirera du marché des téléphones." },
    ],
    aftermath:
      "Nokia survit aujourd'hui comme entreprise d'infrastructure télécom, loin de son ancienne position dominante dans les terminaux mobiles.",
    stats: [
      { value: "51 %", label: "part de marché mondiale des smartphones Nokia au T4 2007, à son pic" },
      { value: "< 5 %", label: "part de marché mondiale de la téléphonie mobile de Nokia en 2013, contre 38,6 % en 2008" },
    ],
    lesson:
      "**Dominer un marché ne protège pas d'une rupture de paradigme** (du clavier au tactile, du matériel au logiciel/écosystème d'applications). Réagir tardivement, même avec un partenariat de poids, **ne rattrape pas des années de retard technologique**.",
    relatedServiceSlug: "refonte-processus",
    serviceCta:
      "Nokia a tenté de greffer un partenariat externe sur une organisation pensée pour l'ancien monde, sans revoir le fond. Une refonte des processus métier commence par repenser le fonctionnement réel, pas par ajouter une couche technologique par-dessus l'existant.",
    caveat:
      "Le montant exact de la cession à Microsoft varie selon les sources consultées (entre 5,4 milliards d'euros et 7,2 milliards de dollars US), probablement lié à la conversion de devise entre l'annonce et la clôture — à vérifier sur un communiqué financier primaire avant citation d'un chiffre unique.",
    sources: [
      { label: "NBC News — rachat par Microsoft", url: "https://www.nbcnews.com/businessmain/microsoft-buy-nokias-handset-business-7-2-billion-8c11063106" },
      { label: "Statista — part de marché Nokia 2007-2013", url: "https://www.statista.com/statistics/1636062/nokia-smartphone-market-share-20072013" },
      { label: "Wikipedia — Nokia", url: "https://en.wikipedia.org/wiki/Nokia" },
    ],
  },
  {
    slug: "toys-r-us",
    company: "Toys R Us",
    type: "echec",
    title: "Toys R Us et la sous-traitance à Amazon",
    tagline: "Confier sa présence digitale à un concurrent potentiel",
    icon: "fa fa-shopping-basket",
    summary:
      "En 2000, Toys R Us confie l'exclusivité de sa vente en ligne à Amazon pour dix ans. Amazon ne respecte pas pleinement l'accord ; Toys R Us perd une décennie de développement e-commerce et dépose le bilan en 2017.",
    contextBefore:
      "**Toys R Us est le numéro un mondial du jouet** en magasin physique à la fin des années 1990. En 1999, son **site e-commerce s'effondre** pendant les fêtes, entraînant des livraisons en retard et une **amende de la FTC**.",
    actions: [
      { when: "2000", text: "Plutôt que de reconstruire ses propres capacités e-commerce après l'échec de 1999, Toys R Us signe un **accord d'exclusivité de dix ans avec Amazon** : Amazon devient le **seul revendeur en ligne autorisé** de jouets Toys R Us, en échange d'une commission." },
      { when: "2000s", text: "Amazon **autorise progressivement des vendeurs tiers** à proposer des jouets sur sa propre plateforme, en violation de l'exclusivité — invoquant une offre insuffisante côté Toys R Us." },
      { when: "2005", text: "Un **rachat par LBO** (KKR, Bain Capital, Vornado) ajoute **6,6 milliards de dollars de dette** à l'entreprise, soit environ 400 millions de dollars par an rien qu'en service de la dette — des ressources qui n'iront pas au digital." },
      { when: "2006-2009", text: "Toys R Us **poursuit Amazon en justice** pour rupture de l'accord d'exclusivité et obtient **51 millions de dollars de dommages** en 2009 (sur 93 millions réclamés) — mais une décennie de retard e-commerce est déjà accumulée." },
      { when: "2015", text: "Toys R Us **reprend enfin en interne le contrôle total de son site web** — dix ans trop tard face à Amazon et Walmart, déjà solidement installés." },
      { when: "18/09/2017 → 29/06/2018", text: "L'entreprise **dépose le bilan** avec 5 milliards de dollars de dette long terme, puis **liquide l'ensemble de ses magasins américains**." },
    ],
    aftermath:
      "L'ensemble du réseau de magasins américains Toys R Us a définitivement fermé le 29 juin 2018.",
    stats: [
      { value: "10 ans", label: "durée de l'accord d'exclusivité e-commerce signé avec Amazon en 2000" },
      { value: "51 M$", label: "dommages et intérêts obtenus contre Amazon en 2009, après une décennie de retard e-commerce accumulé" },
    ],
    lesson:
      "**Sous-traiter sa présence digitale à un concurrent potentiel** revient à lui offrir sa base clients et ses données. Une **dette financière excessive** peut aussi priver une entreprise des moyens d'investir au moment décisif.",
    relatedServiceSlug: "developpement-outils-metier",
    serviceCta:
      "Toys R Us a confié à un tiers ce qui aurait dû rester une capacité stratégique interne. Développer son propre outil métier — même modeste au départ — évite de dépendre d'un partenaire qui devient un jour un concurrent direct.",
    sources: [
      { label: "Wikipedia — Toys \"R\" Us", url: "https://en.wikipedia.org/wiki/Toys_%22R%22_Us" },
      { label: "Indigo9 Digital — la chute de Toys R Us", url: "https://www.indigo9digital.com/blog/toysrusfallintobankruptcy" },
      { label: "Forbes, 19/08/2020", url: "https://www.forbes.com/sites/joanverdon/2020/08/19/toys-r-us-amazon-are-linked-online-again-after-e-commerce-deal-with-target-ends/" },
    ],
  },
  {
    slug: "netflix",
    company: "Netflix",
    type: "reussite",
    title: "Netflix : cannibaliser son propre modèle",
    tagline: "Passer du DVD par courrier au streaming avant qu'un concurrent ne le fasse",
    icon: "fa fa-play-circle",
    summary:
      "Netflix a lancé le streaming en 2007 en pleine activité DVD rentable — un pari risqué qui a cannibalisé son propre modèle, mais qui l'a transformé en leader mondial du divertissement.",
    contextBefore:
      "Netflix est un **service de location de DVD par courrier**, rentable mais dépendant de la Poste et des studios pour la disponibilité des films.",
    actions: [
      { when: "2007", text: "Netflix **lance le streaming**, en parallèle de son activité DVD historique encore rentable — un **pari risqué qui cannibalise volontairement sa propre activité principale**, à l'inverse exact de la stratégie de Kodak." },
      { when: "2007-2010", text: "L'entreprise **investit massivement dans l'infrastructure de streaming** plutôt que de protéger le confort du modèle DVD, pariant que le marché basculerait rapidement vers la lecture en ligne." },
      { when: "2010", text: "Netflix **dépasse 20 millions d'abonnés**, le streaming devenant la source de revenus dominante — la bascule est déjà largement engagée." },
      { when: "2013", text: "Netflix **lance sa première production originale**, House of Cards, marquant son **passage de simple distributeur à producteur de contenu** — une nouvelle cannibalisation volontaire, cette fois de son rôle vis-à-vis des studios partenaires." },
    ],
    aftermath:
      "Netflix devient un acteur mondial du divertissement et de la production de contenu, avec une valorisation aujourd'hui supérieure à 231 milliards de dollars.",
    stats: [
      { value: "2007", label: "année de lancement du streaming, en parallèle de l'activité DVD encore rentable" },
      { value: "20 M+", label: "abonnés dès 2010, streaming devenu la source de revenus dominante" },
    ],
    lesson:
      "**Cannibaliser son propre modèle économique avant qu'un concurrent ne le fasse** est souvent le seul moyen de survivre à une rupture technologique.",
    relatedServiceSlug: "pilotage-deploiement",
    serviceCta:
      "Netflix n'a pas basculé vers le streaming en un jour : c'est une feuille de route exécutée sur plusieurs années, avec des jalons mesurables. C'est précisément ce qu'un pilotage et déploiement structuré permet de faire sans perdre le contrôle en cours de route.",
    sources: [
      { label: "Britannica — Netflix", url: "https://www.britannica.com/money/Netflix-Inc" },
      { label: "SEC 10-Q Netflix, 2013", url: "https://www.sec.gov/Archives/edgar/data/0001065280/000106528013000030/nflx-063013x10qxdoc.htm" },
      { label: "Newsweek — Fact Check (valorisation)", url: "https://www.newsweek.com/fact-check-did-blockbuster-turn-down-chance-buy-netflix-50-million-1575557" },
    ],
  },
  {
    slug: "dominos-pizza",
    company: "Domino's Pizza",
    type: "reussite",
    title: "Domino's Pizza, « une tech company qui vend des pizzas »",
    tagline: "Une entreprise traditionnelle devenue leader technologique de son secteur",
    icon: "fa fa-pizza-slice",
    summary:
      "Après une crise de réputation en 2008, Domino's a engagé une transformation digitale massive (suivi de commande en temps réel, application mobile) qui a fait grimper son action de 3 $ à plus de 252 $ en dix ans.",
    contextBefore:
      "En 2008, Domino's traverse une **crise de réputation produit** et son action tombe autour de **3 dollars** — un plus bas historique.",
    actions: [
      { when: "2008", text: "Domino's lance le « **Pizza Tracker** » : un **suivi de commande en temps réel** visible par le client, une des premières applications concrètes et visibles de la transformation digitale de l'enseigne." },
      { when: "2011", text: "L'entreprise sort une **application iPhone très bien notée**, qui simplifie radicalement la commande en ligne et devient un canal de vente à part entière." },
      { when: "2011-2017", text: "La direction (sous Patrick Doyle) **réoriente l'identité de l'entreprise** — revendiquée comme « **une tech company qui vend des pizzas** » — et investit continûment dans le digital plutôt que ponctuellement." },
      { when: "2016", text: "**Près de la moitié des employés du siège** travaillent désormais dans le **logiciel et l'analytique**, un ratio inhabituel pour une chaîne de restauration traditionnelle." },
      { when: "2011 → 2017", text: "La part des **ventes réalisées via les canaux digitaux passe de 25 % à 60 %** du chiffre d'affaires domestique." },
    ],
    aftermath:
      "L'action Domino's grimpe d'environ 3 dollars en 2008 à plus de 252 dollars en mai 2018, dépassant sur la période 2010-2017 la performance boursière d'Amazon, Apple, Facebook et Google selon plusieurs analyses.",
    stats: [
      { value: "3 $ → 252 $", label: "évolution de l'action Domino's entre 2008 et mai 2018" },
      { value: "25 % → 60 %", label: "part des ventes réalisées via les canaux digitaux, entre 2011 et 2017" },
    ],
    lesson:
      "Une entreprise du **secteur traditionnel peut devenir un leader technologique** de son secteur en investissant massivement et durablement dans l'expérience client digitale — l'identité « tech company » **n'est pas réservée à la Silicon Valley**.",
    relatedServiceSlug: "automatisation-integrations",
    serviceCta:
      "Le Pizza Tracker n'est rien d'autre qu'un système bien intégré et automatisé, visible par le client. C'est exactement le type de gain concret qu'apporte l'automatisation et l'intégration d'outils : moins de friction, plus de transparence, sans réinventer le métier.",
    sources: [
      { label: "Harvard Digital Initiative — Domino's Pizza", url: "https://d3.harvard.edu/platform-digit/submission/dominos-pizza-delivering-innovation-and-profit/" },
      { label: "Forbes, 26/01/2018", url: "https://www.forbes.com/sites/kylewong/2018/01/26/how-dominos-transformed-into-an-ecommerce-powerhouse-whose-product-is-pizza/" },
      { label: "Aaron Allen & Associates", url: "https://aaronallen.com/blog/dominos-turnaround" },
    ],
  },
  {
    slug: "adobe",
    company: "Adobe",
    type: "reussite",
    title: "Adobe : du logiciel en boîte à l'abonnement Creative Cloud",
    tagline: "Accepter un creux de rentabilité à court terme pour sécuriser l'avenir",
    icon: "fa fa-cloud",
    summary:
      "Adobe a basculé du modèle de licence perpétuelle vers l'abonnement Creative Cloud en 2012-2013, au prix d'un recul temporaire du chiffre d'affaires, avant de quadrupler la valeur de son segment logiciel créatif.",
    contextBefore:
      "Adobe vend ses logiciels (Photoshop, Illustrator...) sous forme de **licences perpétuelles achetées une fois**, avec des cycles de mise à jour longs et coûteux pour les clients comme pour l'entreprise.",
    actions: [
      { when: "2012", text: "Adobe **lance Creative Cloud**, une offre par **abonnement mensuel (SaaS)**, en parallèle de son offre historique en licence perpétuelle — premier signal de la bascule à venir." },
      { when: "Q3 2012", text: "Un premier signe précoce apparaît : environ **29 millions de dollars de revenu perpétuel prévu** basculent vers les abonnements Creative Cloud, plus vite qu'anticipé." },
      { when: "2013", text: "Adobe **accélère la bascule complète vers le SaaS**. Conséquence directe assumée : le **chiffre d'affaires net total recule** par rapport à 2012, car le revenu par abonnement est reconnu progressivement dans le temps, alors que les charges ne baissent pas en proportion." },
      { when: "2013-2023", text: "L'entreprise **maintient le cap sur l'abonnement** malgré le creux initial, misant sur la récurrence et l'expansion de la base d'abonnés plutôt que sur des ventes ponctuelles." },
    ],
    aftermath:
      "Le segment Digital Media d'Adobe passe d'environ 3 milliards de dollars de chiffre d'affaires en 2012 à plus de 14 milliards de dollars en 2023.",
    stats: [
      { value: "3 Md$ → 14 Md$", label: "chiffre d'affaires du segment Digital Media d'Adobe, entre 2012 et 2023" },
    ],
    lesson:
      "Un modèle SaaS impose un **creux de rentabilité à court terme** (revenu étalé, charges non réduites) avant de générer une **base de revenus récurrents** bien plus solide et prévisible à long terme.",
    relatedServiceSlug: "refonte-processus",
    serviceCta:
      "Adobe n'a pas simplement changé de tarification, elle a refondu tout son processus de vente, de facturation et de relation client autour de l'abonnement. C'est le cœur d'une refonte des processus métier : repenser le fonctionnement avant d'en tirer la valeur.",
    sources: [
      { label: "Dossier SEC Adobe 10-K FY2013", url: "https://www.sec.gov/Archives/edgar/data/0000796343/000079634314000004/adbe10kfy13.htm" },
      { label: "ChartMogul — pivot SaaS Adobe", url: "https://chartmogul.com/blog/adobe-saas-pivot-strategy/" },
    ],
  },
  {
    slug: "lego",
    company: "LEGO",
    type: "reussite",
    title: "LEGO : recentrer avant de digitaliser",
    tagline: "Le préalable à toute transformation digitale efficace : la discipline stratégique",
    icon: "fa fa-cube",
    summary:
      "Au bord de la faillite en 2003-2004, LEGO s'est redressé non pas en innovant davantage, mais en digitalisant son infrastructure interne (données, logistique, production) après avoir radicalement simplifié son catalogue.",
    contextBefore:
      "En 2003, LEGO est **endetté à hauteur de 800 millions de dollars** et proche de la faillite, perdant près de 300 millions de dollars par an — jusqu'à environ **1 million de dollars par jour en 2004**. Cause principale : une **diversification effrénée** (parcs, vêtements, jeux vidéo) et un catalogue de plus de 14 000 pièces différentes qui a fait exploser les coûts.",
    actions: [
      { when: "2004", text: "**Jørgen Vig Knudstorp** devient PDG et pose un **diagnostic inverse de l'intuition dominante** : le problème de LEGO n'est pas un manque d'innovation, mais un **manque de discipline et de recentrage**." },
      { when: "2004-2005", text: "L'entreprise engage une **refonte complète de son infrastructure technologique**, avec **SAP au centre de la logistique, des ventes, de l'IT et de la fabrication**, pour créer des pipelines de données centralisés capables de piloter les coûts réels." },
      { when: "2004-2005", text: "LEGO **réduit drastiquement le nombre de références** de pièces (parti de plus de 14 000), simplifiant la production avant même de chercher à innover davantage." },
      { when: "2005", text: "La **chute financière est stoppée** : les pertes cessent de s'aggraver dès cette année." },
      { when: "2006", text: "L'entreprise **redevient rentable**, un an après le début du recentrage." },
    ],
    aftermath:
      "Entre 2004 et 2014, le chiffre d'affaires de LEGO **quadruple**, avec une croissance du résultat opérationnel encore plus rapide que celle du chiffre d'affaires.",
    stats: [
      { value: "800 M$", label: "dette de LEGO en 2003, avec des pertes proches de 300 M$/an" },
      { value: "×4", label: "multiplication du chiffre d'affaires de LEGO entre 2004 et 2014" },
    ],
    lesson:
      "La transformation digitale **n'est pas toujours affaire de nouveaux produits** — elle peut consister à **rationaliser et digitaliser l'infrastructure interne** pour retrouver une rentabilité perdue à cause d'une complexité excessive. **Le recentrage stratégique précède souvent l'exploitation efficace du digital.**",
    relatedServiceSlug: "audit-diagnostic-digital",
    serviceCta:
      "Avant de toucher à la moindre technologie, LEGO a d'abord posé un diagnostic honnête de ce qui coûtait réellement cher. C'est exactement le rôle d'un audit et diagnostic digital : identifier la vraie priorité avant d'investir dans le mauvais chantier.",
    sources: [
      { label: "Roland Berger — Restacking the rules of innovation", url: "https://www.rolandberger.com/en/Insights/Publications/Restacking-the-rules-of-innovation.html" },
      { label: "The Strategy Institute — From Bankruptcy to Billions", url: "https://www.thestrategyinstitute.org/insights/from-bankruptcy-to-billions-legos-blueprint-for-business-transformation" },
      { label: "Harvard Digital Initiative — LEGO", url: "https://d3.harvard.edu/platform-digit/?p=6276" },
    ],
  },
  {
    slug: "wave-senegal",
    company: "Wave",
    type: "reussite",
    title: "Wave : bousculer les opérateurs télécoms avec un prix cassé",
    tagline: "Devenir la première licorne d'Afrique francophone en cassant les frais du secteur",
    icon: "fa fa-wallet",
    summary:
      "Fondée à Dakar en 2018, Wave a imposé des frais de transfert fixes à 1 % face aux 5-10 % pratiqués par les opérateurs télécoms, conquérant en quelques années des dizaines de millions d'utilisateurs en Afrique de l'Ouest.",
    contextBefore:
      "Le marché du mobile money ouest-africain est **dominé par les opérateurs télécoms** (Orange Money, MTN MoMo), avec des **frais élevés (5 à 10 % par transaction)** et une expérience utilisateur limitée.",
    actions: [
      { when: "2018", text: "**Wave est fondée à Dakar** par d'anciens de Sendwave (États-Unis), avec un pari simple : proposer des **frais de transfert fixes à 1 %** entre particuliers, contre 5 à 10 % chez les opérateurs historiques." },
      { when: "2018-2021", text: "L'entreprise **construit son propre réseau d'agents et son application mobile**, sans s'appuyer sur l'infrastructure d'un opérateur télécom existant — un pari d'indépendance technologique totale." },
      { when: "2021", text: "Wave lève une **Série A de 200 millions de dollars** (Sequoia Heritage, Founders Fund, Stripe, Ribbit, Partech Africa), avec une **valorisation de 1,7 milliard de dollars** — elle devient la **première licorne d'Afrique francophone**." },
      { when: "2023", text: "Au moins **75 % des adultes sénégalais** utilisent Wave quotidiennement ou mensuellement, soit environ **6 millions d'utilisateurs** rien qu'au Sénégal." },
      { when: "2025", text: "Face à l'échéance réglementaire BCEAO du 1er septembre imposée aux établissements de paiement, Wave **constitue sa propre banque** (Wave Bank Africa S.A.) à Abidjan, avec un capital de départ de **20 milliards de FCFA**, pour obtenir un agrément bancaire complet." },
    ],
    aftermath:
      "Wave revendique aujourd'hui 23 millions d'utilisateurs mensuels actifs et 2 millions de marchands dans 11 pays — la bascule vers le statut bancaire montre que la fintech pure a une limite réglementaire à terme.",
    stats: [
      { value: "1 %", label: "frais de transfert fixe pratiqué par Wave, contre 5 à 10 % chez les opérateurs télécoms historiques" },
      { value: "1,7 Md$", label: "valorisation de Wave lors de sa Série A de 200 M$ en 2021 — première licorne d'Afrique francophone" },
    ],
    caveat:
      "Le chiffre de 23 millions d'utilisateurs mensuels (2026) provient d'un seul média non financier et n'a pas été recoupé avec un rapport officiel Wave — à traiter comme un ordre de grandeur, pas une donnée auditée.",
    lesson:
      "Une **rupture de tarification radicale**, combinée à une **expérience 100 % mobile** construite en propre, peut suffire à déloger des acteurs historiques bien installés — même sans réseau d'agences physiques préexistant.",
    relatedServiceSlug: "developpement-outils-metier",
    serviceCta:
      "Wave n'a pas amélioré un service existant : elle a construit son propre outil, taillé sur mesure pour son marché. C'est ce que permet un développement d'outils métier pensé pour un besoin réel, plutôt qu'un logiciel générique mal ajusté.",
    sources: [
      { label: "OSIRIS, 29/09/2021", url: "https://osiris.sn/E-commerce-Wave-le-vrai-visage-de.html" },
      { label: "Jeune Afrique — Wave se recentre", url: "https://www.jeuneafrique.com/1359683/economie/mobile-money-pourquoi-wave-se-recentre-sur-le-senegal-et-la-cote-divoire/" },
      { label: "Agence Ecofin — Wave crée sa banque", url: "https://www.agenceecofin.com/actualites-finance/2510-132656-wave-mobile-money-creee-sa-banque-en-cote-d-ivoire-avec-un-capital-de-depart-de-20-milliards-fcfa" },
      { label: "Pan African Visions, mai 2026", url: "https://panafricanvisions.com/2026/05/how-wave-built-a-23-million-user-fintech-empire-in-africa/" },
    ],
  },
  {
    slug: "jumia",
    company: "Jumia",
    type: "reussite",
    title: "Jumia : l'e-commerce panafricain, cinq ans de pertes avant le redressement",
    tagline: "Une entrée en bourse retentissante ne suffit pas — l'exécution prend des années",
    icon: "fa fa-shopping-cart",
    summary:
      "Première entreprise tech africaine cotée au NYSE en 2019, Jumia a traversé cinq années de pertes et de retraits de marchés avant d'amorcer un redressement en 2024-2025 — la preuve que la digitalisation à grande échelle se heurte à la logistique, pas qu'à la technologie.",
    contextBefore:
      "Avant 2012, **aucun acteur e-commerce panafricain structuré** n'existe ; la logistique et le paiement en ligne sont **quasi inexistants** dans la plupart des pays africains.",
    actions: [
      { when: "12/04/2019", text: "Jumia entre en bourse au **NYSE**, levant **196 millions de dollars** — **première entreprise technologique africaine cotée** sur une place boursière américaine." },
      { when: "2019-2022", text: "L'entreprise accumule des **pertes opérationnelles massives** et se **retire de plusieurs marchés** (Tanzanie, Rwanda, Cameroun, puis Tunisie en 2023), face à la difficulté de rentabiliser la logistique du dernier kilomètre." },
      { when: "2023", text: "Le volume d'affaires (GMV) atteint **750 millions de dollars**, avec **5,7 millions de clients actifs annuels** — une stabilisation après les années de crise." },
      { when: "2024", text: "Le GMV recule à 720,6 M$ (-4 % en dollars, mais **+28 % en devise constante** — la baisse en dollars vient surtout des dévaluations monétaires en Égypte et au Nigeria), pour une **perte nette de 64,7 millions de dollars**." },
      { when: "2025", text: "Un **redressement s'amorce** : au 3e trimestre 2025, l'entreprise annonce +25 % de revenus et +21 % de GMV — signe que les ajustements engagés depuis 2019 commencent à porter leurs fruits." },
    ],
    aftermath:
      "Jumia reste, malgré les turbulences, la plateforme e-commerce panafricaine de référence — au prix de six ans d'ajustements opérationnels continus depuis son IPO.",
    stats: [
      { value: "196 M$", label: "levés lors de l'IPO de Jumia au NYSE en avril 2019, première tech africaine cotée aux États-Unis" },
      { value: "+28 %", label: "croissance du GMV de Jumia en 2024 à devise constante, malgré un recul apparent en dollars" },
    ],
    caveat:
      "Le nombre de clients actifs entre 2023 et 2024 est rapporté différemment selon la source (5,7M→5,4M ou 10M→8,3M selon la métrique retenue) — les rapports Jumia utilisent plusieurs définitions de \"client actif\" qui ne sont pas toujours clairement distinguées dans la presse.",
    lesson:
      "Une **entrée en bourse retentissante ne garantit pas la rentabilité** : la digitalisation à grande échelle se heurte à des contraintes très concrètes (logistique, volatilité monétaire) qu'aucune levée de fonds ne résout instantanément — **l'exécution prend du temps, se mesure et s'ajuste**.",
    relatedServiceSlug: "pilotage-deploiement",
    serviceCta:
      "Jumia a dû corriger sa trajectoire marché par marché, année après année, pour retrouver une croissance saine. C'est le rôle d'un pilotage et déploiement rigoureux : mesurer la valeur réelle produite et ajuster, plutôt que de subir les résultats après coup.",
    sources: [
      { label: "TechCrunch — IPO Jumia, 12/04/2019", url: "https://techcrunch.com/2019/04/12/african-e-commerce-startup-jumias-shares-open-at-14-50-in-nyse-ipo/" },
      { label: "TechCabal — résultats Jumia 2024", url: "https://techcabal.com/2025/02/20/jumia-2024-performance/" },
    ],
  },
  {
    slug: "mpesa-safaricom",
    company: "M-Pesa",
    type: "reussite",
    title: "M-Pesa : le mobile money devenu infrastructure nationale",
    tagline: "D'un lancement modeste à un service qui pèse plus que le PIB en volume de transactions",
    icon: "fa fa-money-bill-wave",
    summary:
      "Lancé en 2007 par Safaricom pour toucher les Kényans non bancarisés, M-Pesa a explosé dès sa première année et représente aujourd'hui près d'un tiers des revenus du groupe — la référence mondiale que les fintechs africaines citent comme modèle.",
    contextBefore:
      "En 2007, **moins de 20 % des Kényans** ont un compte bancaire ; l'essentiel de la population, notamment en zone rurale, est **non bancarisée**.",
    actions: [
      { when: "03/2007", text: "**Safaricom lance M-Pesa**, avec un objectif prudent de 350 000 clients d'ici la fin de l'année." },
      { when: "Fin 2007", text: "Le résultat réel **dépasse largement l'objectif** : **1,2 million d'utilisateurs** en seulement 9 mois." },
      { when: "2009", text: "M-Pesa atteint **8,5 millions d'inscrits**, avec 3,7 milliards de dollars transférés depuis le lancement." },
      { when: "2012", text: "Un rapport gouvernemental kényan recense **19,5 millions d'utilisateurs**, soit **83 % des adultes** du pays." },
      { when: "2021", text: "Sur l'exercice clos mars 2021 : **28,3 millions d'utilisateurs actifs** au Kenya, 248 000 agents, **200 milliards de dollars de volume annuel de transactions** — plus de deux fois le PIB kényan — et **31 % des revenus totaux** du groupe Safaricom." },
      { when: "2021+", text: "**Expansion internationale** : 16,1 millions de clients hors Kenya, dans plusieurs pays (Tanzanie, RDC, Mozambique, Ghana, Lesotho)." },
    ],
    aftermath:
      "M-Pesa est devenu une infrastructure économique nationale plus qu'un simple produit télécom — le cas de référence mondiale que toute fintech africaine, y compris Wave, cite comme modèle.",
    stats: [
      { value: "1,2 M", label: "utilisateurs atteints dès la première année (2007), largement au-delà de l'objectif initial de 350 000" },
      { value: "31 %", label: "des revenus totaux du groupe Safaricom générés par M-Pesa sur l'exercice clos mars 2021" },
    ],
    caveat:
      "Les statistiques de contribution au PIB kényan citées entre 2009 et 2015 (10 %, 24 %, jusqu'à 44 % selon certaines études) varient fortement selon la source et l'année de référence — les documents Safaricom d'origine n'ont pas pu être ouverts directement, ces chiffres proviennent de reprises académiques (NBER, Harvard) à recouper avant toute citation ferme d'un pourcentage unique.",
    lesson:
      "Un service pensé pour un **besoin non couvert** (l'accès financier des populations non bancarisées) peut devenir, avec le temps, une **infrastructure économique à part entière** — bien au-delà de son objectif de lancement initial.",
    relatedServiceSlug: "developpement-outils-metier",
    serviceCta:
      "M-Pesa n'a pas cherché à copier une banque existante : il a construit un outil adapté à un besoin réel et négligé. C'est la même logique qui guide un développement d'outils métier réussi — partir du besoin non couvert, pas du logiciel à la mode.",
    sources: [
      { label: "Net Interest — M-Pesa and the African fintech revolution", url: "https://www.netinterest.co/p/m-pesa-and-the-african-fintech-revolution-3c1" },
    ],
  },
  {
    slug: "anip-benin",
    company: "ANIP Bénin",
    type: "reussite",
    title: "ANIP Bénin : digitaliser l'identité, sans effacer les erreurs du départ",
    tagline: "Numériser 210+ services publics tout en composant avec une dette de données héritée",
    icon: "fa fa-id-card",
    summary:
      "L'Agence Nationale d'Identification des Personnes a dématérialisé plus de 210 services publics béninois d'ici fin 2024, mais les erreurs de l'enrôlement biométrique initial (2017-2018) continuent de bloquer certains usagers des années après.",
    contextBefore:
      "Avant 2017, l'**identification des personnes physiques au Bénin** est fragmentée entre plusieurs administrations, **sans registre unique**.",
    actions: [
      { when: "19/06/2017", text: "**Création de l'ANIP** (Agence Nationale d'Identification des Personnes) par la loi n°2017-08, avec pour mission de bâtir un registre national unique." },
      { when: "2017-2018", text: "**Campagne d'enrôlement biométrique initiale** à grande échelle — de nombreuses erreurs sont signalées dès cette phase : **noms mal transcrits, signatures incompatibles, numéros de téléphone obsolètes** bloquant ensuite l'accès aux services en ligne." },
      { when: "2018+", text: "Déploiement de la **plateforme eservices.anip.bj** pour la délivrance de pièces d'identité et du **Certificat d'Identification Personnelle (CIP)**, point d'entrée technique de la dématérialisation." },
      { when: "12/2024", text: "**Plus de 210 services publics béninois** sont désormais **entièrement dématérialisés** via le portail www.service-public.bj." },
      { when: "Objectif 2028", text: "Le gouvernement vise une **identification numérique fiable et généralisée** d'ici cette échéance." },
    ],
    aftermath:
      "La digitalisation publique béninoise a nettement progressé en volume de services couverts, mais des témoignages d'usagers documentent des blocages persistants liés aux erreurs d'enrôlement initial, plusieurs années après leur origine.",
    stats: [
      { value: "210+", label: "services publics béninois entièrement dématérialisés via service-public.bj, fin décembre 2024" },
    ],
    caveat:
      "Aucune statistique agrégée officielle de l'ANIP n'a été trouvée sur le nombre total de citoyens enrôlés ni sur le taux de résolution des dossiers bloqués — les difficultés documentées ici reposent sur des témoignages d'usagers relayés par la presse, pas sur un audit chiffré publié.",
    lesson:
      "Numériser un service **sans fiabiliser d'abord les données de base** crée une **dette technique qui ressurgit des années plus tard** — la digitalisation n'efface pas les erreurs humaines commises en amont, elle les fige dans le système.",
    relatedServiceSlug: "refonte-processus",
    serviceCta:
      "Le vrai chantier de l'ANIP n'était pas seulement technique : c'était de refondre le processus de collecte de données avant de le numériser à grande échelle. Une refonte des processus métier sert exactement à éviter de figer des erreurs dans un système qui va ensuite s'appuyer dessus pendant des années.",
    sources: [
      { label: "BeninWebTV — ANIP Bénin, entre promesses et réalités", url: "https://beninwebtv.com/anip-benin-entre-promesses-numeriques-et-realites-eprouvantes-des-usagers/" },
    ],
  },
];

export function getHistoire(slug: string): Histoire | undefined {
  return HISTOIRES.find((h) => h.slug === slug);
}

export function getHistoiresByType(type: Histoire["type"]): Histoire[] {
  return HISTOIRES.filter((h) => h.type === type);
}
