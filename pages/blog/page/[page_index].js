import fs from "fs";
import path from "path";
import Layout from "../../../components/Layout";
import matter from "gray-matter";
import { sortByDate } from "../../../utils";
import Post from "../../../components/Post";
import { postsPerPage } from "../../../utils/postsPerPage";
import Pagination from "../../../components/Pagination";

export default function BlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <section className="font-poppins sm:w-full w-[96%] sm:max-w-screen-xl shadow-lg shadow-gray-500 rounded my-16 mx-auto transition-all ease-in duration-300 pb-10">
        <p className="text-3xl ml-6 font-bold">
          Latest Blog Posts<span className="tracking-widest">...</span>
        </p>

        <div className="grid md:grid-cols-2 gap-10 xl:grid-cols-3 auto-rows-max p-10">
          {posts.map((post, idx) => (
            <Post
              key={idx}
              title={post.frontMatter.title}
              category={post.frontMatter.category}
              date={post.frontMatter.date}
              description={post.frontMatter.excerpt}
              image={post.frontMatter.cover_image}
              slug={post.slug}
            />
          ))}
        </div>
        <Pagination currentPage={currentPage} numPages={numPages} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numPages = Math.ceil(files.length / postsPerPage);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: {
        page_index: i.toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1);

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

  const numPages = Math.ceil(files.length / postsPerPage);
  const pageIndex = page - 1;
  const orderedPosts = posts
    .sort(sortByDate)
    .slice(pageIndex * postsPerPage, (pageIndex + 1) * postsPerPage);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}
