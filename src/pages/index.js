import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/layouts/partials/Container";
import Homepage from "@/components/views//home/Home";
import { NextSeo } from "next-seo";
import CollabsToggle from "@/components/toggles/CollabsToggle";
import Head from "next/head";
import { useRouter } from "next/router";
import Overlay from "@/components/layouts/partials/Overlay";
import { schemaMarkup } from "@/lib/schema-markup";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const router = useRouter();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </Head>
      <NextSeo title='Dwi Wijaya - Personal Website' />

      <div className="group-[.sidebar-expanded]/main:blur-[1px] z-[-1] bg-container border border-b border-stroke top-0 left-0 w-full h-[24vh] bg-endless-clouds"></div>
      <section data-section className="group-[.sidebar-expanded]/main:blur-[2px] relative p-[15px] pl-5 mx-auto max-w-[1024px]">
        <Homepage />
      </section>
    </>
  );
}
export const getStaticProps = async () => {

  return {
    props: {},
  };
};