import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/blog");
  return fs.readdirSync(dir).map(f => ({ slug: f.replace(/\\.mdx$/, "") }));
}

export default function BlogPost({ params }: Props) {
  const file = path.join(process.cwd(), "src/content/blog", `${params.slug}.mdx`);
  const src = fs.readFileSync(file, "utf8");
  const { data, content } = matter(src);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose">
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </div>
  );
}
