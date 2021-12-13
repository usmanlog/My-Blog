import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, children, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Welcome to usmaan.dev",
  keywords:
    "blog, portfolio, motivation, motivational, frontend developer, next js, react, react js, redux, failure, html, css, tailwind, tailwindcss, responsive, programming, coding",
  description:
    "Welcome to usmaan.dev, I am a frontend developer and a blogger. I blog about code motivation, life hacks, and self learning.",
};
