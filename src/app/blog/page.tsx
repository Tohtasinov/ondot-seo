import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const metadata = { title: "Blog", description: "Appliance repair tips and guides." };

export default function BlogPage() {
  const dir = path.join(process.cwd(), "src/content/blog");
  const files = fs.existsSync(dir) ? fs.readdirSync(dir) : [];
  const posts = files.filter(f => f.endsWith(".mdx")).map(file => {
    const src = fs.readFileSync(path.join(dir, file), "utf8");
    const { data } = matter(src);
    return { slug: file.replace(/\.mdx$/, ""), ...(data as any) };
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <ul className="mt-6 space-y-2">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="underline text-blue-700">{p.title}</Link>
            {p.description ? <p className="text-gray-600 text-sm">{p.description}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
