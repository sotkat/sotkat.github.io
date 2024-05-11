import type { AppProps } from "next/app";
import Head from "next/head";
import "@/global.css";
import Layout from "@/components/Layout";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Page | Next.js SEO</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
        {/* Additional meta tags */}
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
