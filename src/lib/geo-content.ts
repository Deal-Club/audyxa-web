export interface GeoCity {
  slug: string;
  name: string;
  isFlagship: boolean;
}

export interface GeoCountry {
  slug: string;
  name: string;
  region: "Afrique de l'Ouest" | "Afrique centrale" | "Europe francophone";
  currency: string;
  cities: GeoCity[];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function makeCities(names: string[]): GeoCity[] {
  return names.map((name, i) => ({ slug: slugify(name), name, isFlagship: i === 0 }));
}

export const GEO_COUNTRIES: GeoCountry[] = [
  { slug: "benin", name: "Bénin", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Cotonou", "Porto-Novo", "Parakou", "Abomey-Calavi", "Djougou", "Bohicon", "Kandi", "Lokossa", "Ouidah", "Abomey"]) },
  { slug: "cote-divoire", name: "Côte d'Ivoire", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Abidjan", "Bouaké", "Daloa", "Yamoussoukro", "Korhogo", "San-Pédro", "Man", "Divo", "Gagnoa", "Abengourou"]) },
  { slug: "senegal", name: "Sénégal", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Dakar", "Touba", "Thiès", "Kaolack", "M'bour", "Saint-Louis", "Rufisque", "Ziguinchor", "Diourbel", "Louga"]) },
  { slug: "togo", name: "Togo", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Lomé", "Sokodé", "Kara", "Kpalimé", "Atakpamé", "Dapaong", "Tsévié", "Aného", "Bassar", "Mango"]) },
  { slug: "burkina-faso", name: "Burkina Faso", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Ouagadougou", "Bobo-Dioulasso", "Koudougou", "Banfora", "Ouahigouya", "Kaya", "Tenkodogo", "Fada N'Gourma", "Dédougou", "Réo"]) },
  { slug: "mali", name: "Mali", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Bamako", "Sikasso", "Ségou", "Mopti", "Koutiala", "Kayes", "Gao", "Kati", "Tombouctou", "San"]) },
  { slug: "niger", name: "Niger", region: "Afrique de l'Ouest", currency: "franc CFA (XOF)", cities: makeCities(["Niamey", "Zinder", "Maradi", "Agadez", "Tahoua", "Dosso", "Diffa", "Tillabéri", "Arlit", "Birni N'Konni"]) },
  { slug: "guinee", name: "Guinée", region: "Afrique de l'Ouest", currency: "franc guinéen (GNF)", cities: makeCities(["Conakry", "Nzérékoré", "Kankan", "Kindia", "Labé", "Mamou", "Boké", "Faranah", "Kissidougou", "Guéckédou"]) },
  { slug: "cameroun", name: "Cameroun", region: "Afrique centrale", currency: "franc CFA (XAF)", cities: makeCities(["Douala", "Yaoundé", "Garoua", "Maroua", "Bafoussam", "Ngaoundéré", "Bertoua", "Édéa", "Kribi", "Dschang"]) },
  { slug: "gabon", name: "Gabon", region: "Afrique centrale", currency: "franc CFA (XAF)", cities: makeCities(["Libreville", "Port-Gentil", "Franceville", "Oyem", "Moanda", "Lambaréné", "Mouila", "Koulamoutou", "Tchibanga", "Makokou"]) },
  { slug: "rd-congo", name: "RD Congo", region: "Afrique centrale", currency: "franc congolais (CDF)", cities: makeCities(["Kinshasa", "Lubumbashi", "Mbuji-Mayi", "Kananga", "Kisangani", "Bukavu", "Goma", "Kolwezi", "Likasi", "Tshikapa"]) },
  { slug: "congo-brazzaville", name: "Congo-Brazzaville", region: "Afrique centrale", currency: "franc CFA (XAF)", cities: makeCities(["Brazzaville", "Pointe-Noire", "Dolisie", "Nkayi", "Ouesso", "Owando", "Sibiti", "Impfondo", "Madingou", "Mossendjo"]) },
  { slug: "madagascar", name: "Madagascar", region: "Afrique centrale", currency: "ariary (MGA)", cities: makeCities(["Antananarivo", "Toamasina", "Antsirabe", "Fianarantsoa", "Mahajanga", "Toliara", "Antsiranana", "Ambovombe", "Morondava", "Ambatondrazaka"]) },
  { slug: "belgique", name: "Belgique", region: "Europe francophone", currency: "euro (EUR)", cities: makeCities(["Bruxelles", "Liège", "Charleroi", "Namur", "Mons", "Tournai", "La Louvière", "Verviers", "Mouscron", "Seraing"]) },
  { slug: "suisse", name: "Suisse", region: "Europe francophone", currency: "franc suisse (CHF)", cities: makeCities(["Genève", "Lausanne", "Fribourg", "Neuchâtel", "Sion", "La Chaux-de-Fonds", "Vevey", "Montreux", "Yverdon-les-Bains", "Nyon"]) },
  { slug: "luxembourg", name: "Luxembourg", region: "Europe francophone", currency: "euro (EUR)", cities: makeCities(["Luxembourg-ville", "Esch-sur-Alzette", "Differdange", "Dudelange", "Ettelbruck", "Diekirch", "Wiltz", "Echternach", "Rumelange", "Bettembourg"]) },
];

export function getCountry(slug: string): GeoCountry | undefined {
  return GEO_COUNTRIES.find((c) => c.slug === slug);
}

export function getFlagshipCity(country: GeoCountry): GeoCity {
  return country.cities.find((c) => c.isFlagship) ?? country.cities[0];
}

export function getCity(country: GeoCountry, citySlug: string): GeoCity | undefined {
  return country.cities.find((c) => c.slug === citySlug);
}

export function getCountriesByRegion(region: GeoCountry["region"]): GeoCountry[] {
  return GEO_COUNTRIES.filter((c) => c.region === region);
}
