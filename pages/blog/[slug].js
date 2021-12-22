import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export default function PostPage() {
  return <div></div>;
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: { frontMatter, content, slug },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
