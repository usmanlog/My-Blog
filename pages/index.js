import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
AboutMe;
import Layout from "../components/Layout";
import Projects from "../components/Projects";
Intro;
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { sortByDate } from "../utils";
import LatestPosts from "../components/LatestPosts";

export default function Home({ posts }) {
  return (
    <Layout>
      <Intro />
      <AboutMe />
      <Projects />
      <LatestPosts posts={posts} />
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
      posts: posts.sort(sortByDate).slice(0, 3),
    },
  };
}
