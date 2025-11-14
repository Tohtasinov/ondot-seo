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
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find(l => l.slug === slug);
}
