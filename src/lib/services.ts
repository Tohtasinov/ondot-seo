import type { ServiceItem } from "./types";


export const SERVICES: ServiceItem[] = [
{ slug: "refrigerator", name: "Refrigerator Repair" },
{ slug: "washer", name: "Washer Repair" },
{ slug: "dryer", name: "Dryer Repair" },
{ slug: "oven", name: "Oven Repair" },
{ slug: "stove", name: "Stove Repair" },
];


export function getServiceBySlug(slug: string) {
return SERVICES.find(x => x.slug === slug);
}