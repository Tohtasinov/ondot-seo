export const BASE_URL = "https://ondotappliance.com"; // заменишь при деплое

type SeoArgs = {
  title: string;
  description: string;
  url: string;
  image?: string;
};

export function canonical(path: string) {
  const url = `${BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  return { alternates: { canonical: url }, openGraph: { url } };
}

export function seoMeta({ title, description, url, image = "/images/hero.jpg" }: SeoArgs) {
  const abs = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const imgAbs = image.startsWith("http") ? image : `${BASE_URL}${image}`;
  return {
    title,
    description,
    alternates: { canonical: abs },
    openGraph: {
      type: "website",
      url: abs,
      title,
      description,
      images: [{ url: imgAbs }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imgAbs],
    },
  } as const;
}
