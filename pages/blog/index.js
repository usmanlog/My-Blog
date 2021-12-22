import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import matter from "gray-matter";
import { sortByDate } from "../../utils";

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <section className="w-[98%] p-8 font-poppins">
        <h1 className="sm:text-4xl text-2xl font-bold">Blog</h1>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
