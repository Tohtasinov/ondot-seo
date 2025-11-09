import type { LocationItem } from "./types";


export const LOCATIONS: LocationItem[] = [
{ slug: "gladwyne-19035", city: "Gladwyne", zip: "19035", county: "Montgomery", state: "PA" },
{ slug: "villanova-19085", city: "Villanova", zip: "19085", county: "Montgomery", state: "PA" },
{ slug: "bryn-mawr-19010", city: "Bryn Mawr", zip: "19010", county: "Montgomery", state: "PA" },
// ... добавь остальные города и зипы по списку
];


export function getLocationBySlug(slug: string) {
return LOCATIONS.find(x => x.slug === slug);
}