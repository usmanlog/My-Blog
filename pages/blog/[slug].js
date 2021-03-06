import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../components/Layout";
import Image from "next/image";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function PostPage({
  content,
  slug,
  frontMatter: { title, category, date, cover_image },
}) {
  useEffect(() => {
    const pre = document.querySelectorAll("pre code");

    pre.forEach((p) => {
      p.classList.add("language-javascript");
      Prism.highlightElement(p);
    });
  }, []);

  return (
    <Layout title={title}>
      <section className="font-poppins shadow-lg my-10 shadow-gray-400 sm:p-10 p-5">
        <div className="flex lg:flex-row flex-col lg:items-center justify-between">
          <h1 className="md:text-5xl text-3xl font-semibold">{title}</h1>
          <div className="my-3">
            <span className="p-2 rounded-md bg-violet-700 text-white font-semibold sm:text-base text-xs mr-2">
              {category}
            </span>
            <span className="p-2 rounded-md sm:text-base text-xs bg-gray-600 text-white font-semibold mr-2">
              {date}
            </span>
          </div>
        </div>

        <div className="mt-6 mb-12">
          <Image
            src={cover_image}
            height={36}
            width="100%"
            layout="responsive"
            objectFit="cover"
            alt={title}
            priority
          ></Image>
        </div>

        <div className="md:w-[750px] min-w-[260px] md:mx-auto">
          <article className="text text-left sm:text-lg">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </section>
    </Layout>
  );
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
