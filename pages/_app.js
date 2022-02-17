import "../styles/globals.css";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo
        title="Welcome to Usmaan.dev"
        titleTemplate="Welcome to Usmaan.dev"
        defaultTitle="Welcome to Usmaan.dev"
        description="Welcome to usmaan.dev, I am a frontend developer and a blogger. I blog about code motivation, life hacks, and self learning."
        canonical="https://www.usmaan.dev/blog"
        openGraph={{
          url: "https://www.usmaan.dev/blog",
          title: "Usmaan.dev",
          description:
            "Welcome to usmaan.dev, I am a frontend developer and a blogger. I blog about code motivation, life hacks, and self learning.",
          images: [
            {
              url: "/logo-blue.png",
              width: 800,
              height: 420,
              alt: "Usmaan.dev",
            },
          ],
        }}
        twitter={{
          handle: "@usmaanlog",
          site: "@usmaanlog",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
