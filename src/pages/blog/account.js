import PageHeading from "@/components/common/PageHeading"
import Container from "@/components/layouts/partials/Container"
import AccountContent from "@/components/views/blog/account/AccountContent";
import Blog from "@/components/views/blog/Blog"
import { useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useRouter } from "next/router";


const AccountPage = () => {

    const t = useTranslations();
    const router = useRouter();
    const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

    const PAGE_TITLE = t('Blog.title');
    const PAGE_DESCRIPTION = t('Blog.subtitle');

    return (
        <>
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <NextSeo title={`${PAGE_TITLE} - Dwisheets`} description={t('Blog.metaDesc')} />

            <Container data-aos='fade-up'>
                <AccountContent/>
            </Container>
        </>
    )
}

export default AccountPage

export const getStaticProps = async () => {

    return {
        props: {
        },
    };
};