import type { AppProps } from "next/app";
import Head from "next/head";
import "@/global.css";
import Layout from "@/components/Layout";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Soto Coffee London | Single-origin Colombian coffee in London
        </title>
        <meta
          name="description"
          content="Single-origin colombian coffee in london"
        />
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
