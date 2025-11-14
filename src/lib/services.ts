export const SERVICES = [
  {
    slug: "refrigerator",
    name: "Refrigerator Repair",
    desc: "Fixing cooling issues, leaks, and noisy compressors.",
  },
  {
    slug: "washer",
    name: "Washer Repair",
    desc: "Solving draining, spinning, and leaking problems.",
  },
  {
    slug: "dryer",
    name: "Dryer Repair",
    desc: "No heat, long cycles, or strange noises? We fix it fast.",
  },
  {
    slug: "oven",
    name: "Oven Repair",
    desc: "Repairing heating elements, thermostats, and ignition systems for gas and electric ovens.",
  },
  {
    slug: "stove",
    name: "Stove Repair",
    desc: "Fixing no-heat issues, broken doors, and unresponsive keypads quickly and safely.",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find(s => s.slug === slug);
}
