import PageHeading from "@/components/common/PageHeading";
import Container from "@/components/layouts/partials/Container"
import About from "@/components/views/about/About"
import { fetcher } from "@/services/fetcher";
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = "Get to know me a little better, beyond the resume.";

const AboutPage = () => {

    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <NextSeo title={`${t('About.title')} - Dwi Wijaya`} description={t('About.metaDesc')} />

            <Container data-aos='fade-up'>
                <PageHeading
                    title={t('About.title')}
                    description={t('About.subtitle')}
                />
                <About />
            </Container>
        </>
    )
}

export default AboutPage

export const getStaticProps = async () => {

    return {
      props: {},
    };
  };