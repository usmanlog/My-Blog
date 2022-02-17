import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import { NextSeo } from "next-seo";

export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <NextSeo title={title} description={description} />
      <Header />

      <main className="container mx-auto">{children}</main>
      <Subscribe />
      <Footer />
    </div>
  );
}

// Layout.defaultProps = {
//   title: "Welcome to usmaan.dev",
//   keywords:
//     "blog, portfolio, motivation, motivational, frontend developer, next js, react, react js, redux, failure, html, css, tailwind, tailwindcss, responsive, programming, coding",
//   description:
//     "Welcome to usmaan.dev, I am a frontend developer and a blogger. I blog about code motivation, life hacks, and self learning.",
// };
