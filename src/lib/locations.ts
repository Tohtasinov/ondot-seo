export const LOCATIONS = [
  { slug: "bryn-mawr-19010", city: "Bryn Mawr", state: "PA", zip: "19010" },
  { slug: "philadelphia-19103", city: "Philadelphia", state: "PA", zip: "19103" },
  { slug: "waynesboro-17268", city: "Waynesboro", state: "PA", zip: "17268" },
  { slug: "norristown-19401", city: "Norristown", state: "PA", zip: "19401" },
  { slug: "king-of-prussia-19406", city: "King of Prussia", state: "PA", zip: "19406" },
  { slug: "pittsburgh-15222", city: "Pittsburgh", state: "PA", zip: "15222" },
  { slug: "lancaster-17601", city: "Lancaster", state: "PA", zip: "17601" },
  { slug: "reading-19601", city: "Reading", state: "PA", zip: "19601" },
  { slug: "harrisburg-17101", city: "Harrisburg", state: "PA", zip: "17101" },

  // Bucks county
  { slug: "langhorne-19047", city: "Langhorne", state: "PA", zip: "19047" },
  { slug: "yardley-19067", city: "Yardley", state: "PA", zip: "19067" },
  { slug: "doylestown-18901", city: "Doylestown", state: "PA", zip: "18901" },
  { slug: "doylestown-18902", city: "Doylestown", state: "PA", zip: "18902" },
  { slug: "chalfont-18914", city: "Chalfont", state: "PA", zip: "18914" },
  { slug: "furlong-18925", city: "Furlong", state: "PA", zip: "18925" },
  { slug: "jamison-18929", city: "Jamison", state: "PA", zip: "18929" },
  { slug: "newtown-18940", city: "Newtown", state: "PA", zip: "18940" },
  { slug: "richboro-18954", city: "Richboro", state: "PA", zip: "18954" },
  { slug: "southampton-18966", city: "Southampton", state: "PA", zip: "18966" },
  { slug: "ambler-19002", city: "Ambler", state: "PA", zip: "19002" },

  // Main Line и окрестности
  { slug: "bala-cynwyd-19004", city: "Bala Cynwyd", state: "PA", zip: "19004" },
  { slug: "haverford-19041", city: "Haverford", state: "PA", zip: "19041" },
  { slug: "merion-station-19066", city: "Merion Station", state: "PA", zip: "19066" },
  { slug: "narberth-19072", city: "Narberth", state: "PA", zip: "19072" },
  { slug: "villanova-19085", city: "Villanova", state: "PA", zip: "19085" },
  { slug: "wayne-19087", city: "Wayne", state: "PA", zip: "19087" },
  { slug: "wynnewood-19096", city: "Wynnewood", state: "PA", zip: "19096" },
  { slug: "blue-bell-19422", city: "Blue Bell", state: "PA", zip: "19422" },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find(l => l.slug === slug);
}
