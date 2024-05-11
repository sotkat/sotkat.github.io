import type { AppProps } from "next/app";
import Head from "next/head";
import "@/global.css";
import Layout from "@/components/Layout";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Soto Coffee | Independent cafe serving Colombian coffee in London"
        />
        <meta
          name="description"
          content="Single-origin Colombian coffee right at the heart of Caledonian Road in North London. Come and taste the most organic Colombian coffee!"
        />

        {/** Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sotocoffee.co.uk/" />
        <meta
          property="og:title"
          content="Soto Coffee | Independent cafe serving Colombian coffee in London"
        />
        <meta
          property="og:description"
          content="Single-origin Colombian coffee right at the heart of Caledonian Road in North London. Come and taste the most organic Colombian coffee!"
        />
        <meta property="og:image" content="/images/meta-image.png" />

        {/** Twitter */}
        <meta property="twitter:card" content="/images/meta-image.png" />
        <meta property="twitter:url" content="https://www.sotocoffee.co.uk/" />
        <meta
          property="twitter:title"
          content="Soto Coffee | Independent cafe serving Colombian coffee in London"
        />
        <meta
          property="twitter:description"
          content="Single-origin Colombian coffee right at the heart of Caledonian Road in North London. Come and taste the most organic Colombian coffee!"
        />
        <meta property="twitter:image" content="/images/meta-image.png" />

        <meta
          name="keywords"
          content="colombian coffee, london, london coffee, single origin coffee, specialty coffee london, cafe, london cafe, colombian cafe, best coffee in london, best colombian coffee in london, soto colombian coffee"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Soto Coffee" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
