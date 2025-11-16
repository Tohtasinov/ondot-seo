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
  { slug: "richboro-18954", city: "Richboro", state: "PA", zip: "18954" },
  { slug: "southampton-18966", city: "Southampton", state: "PA", zip: "18966" },
  { slug: "holmes-19047", city: "Holmes", state: "PA", zip: "19047" },
  { slug: "newtown-18940", city: "Newtown", state: "PA", zip: "18940" },
  { slug: "ardmore-19004", city: "Ardmore", state: "PA", zip: "19004" },
  { slug: "bala-cynwyd-19035", city: "Bala Cynwyd", state: "PA", zip: "19035" },
  { slug: "yardley-19067", city: "Yardley", state: "PA", zip: "19067" },
  { slug: "huntingdon-valley-18929", city: "Huntingdon Valley", state: "PA", zip: "18929" },
  { slug: "bryn-athyn-19072", city: "Bryn Athyn", state: "PA", zip: "19072" },
  { slug: "jamison-18929", city: "Jamison", state: "PA", zip: "18929" },
  { slug: "doylestown-18901", city: "Doylestown", state: "PA", zip: "18901" },
  { slug: "ambler-19002", city: "Ambler", state: "PA", zip: "19002" },
  { slug: "doylestown-18902", city: "Doylestown", state: "PA", zip: "18902" },
  { slug: "wynnewood-19041", city: "Wynnewood", state: "PA", zip: "19041" },
  { slug: "chalfont-18914", city: "Chalfont", state: "PA", zip: "18914" },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find(l => l.slug === slug);
}
