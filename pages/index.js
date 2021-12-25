import Head from "next/head";
import { getYearType } from "/lib/litrugicYear";

const name = "Jaký je liturgický cyklus?";
const description = "Nevíš, jaký je momentálně liturgický cyklus? Nech si poradit!";
const theme_color = "#365314";
const url = "https://kam-jet.vercel.app/";

export default function Home() {
  const otuput = getYearType();
  return (
    <div className="w-full dark:bg-black">
      <Head>
        <title>{name}</title>
        <meta name="application-name" content={name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="PWA App" />
        <meta name="description" content={description} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={theme_color} />

        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={name} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@petrkucerak" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={name} />
        <meta property="og:url" content={url} />

        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content={theme_color} />

        <meta name="description" content={description} />
      </Head>

      <main className="flex flex-col items-center min-h-screen justify-center dark:text-white">
        {otuput}
      </main>
    </div>
  );
}
