import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link
          rel='icon'
          type='image/png'
          sizes='48x48'
          href='/favicon/favicon-dark.png'
          media="(prefers-color-scheme: light)"
        />
        <link
          rel='icon'
          type='image/png'
          sizes='48x48'
          href='/favicon/favicon-light.png'
          media="(prefers-color-scheme: dark)"
        />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <meta name="theme-color" content="#ff774d" />
        <script defer src="https://analytics.dwiwijaya.com/script.js" data-website-id="7e71a6f6-f863-400e-806f-1af37e845ad1"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
