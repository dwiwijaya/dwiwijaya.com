import PageHeading from '@/components/common/PageHeading';
import Container from '@/components/layouts/partials/Container';
import Skill from '@/components/views/skill/Skill';
import { fetcher } from '@/services/fetcher';
import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react'


const SkillsetPage = ({ skills, certificates }) => {

    const t = useTranslations('Skillset');
    const { locale, asPath } = useRouter();
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    const lang = locale == 'en' ? '/en' : ''
    const currentPageURL = `${SITE_URL}${lang}${asPath}`

    return (
        <>
            <NextSeo
                title={`${t('title')} - Dwi Wijaya`}
                description={t('metaDesc')}
                additionalLinkTags={[
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}${asPath}` },
                    { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}${asPath}` },
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en${asPath}` },
                ]}
                canonical={currentPageURL}
                openGraph={{
                    url: currentPageURL,
                }}
            />
            <Container data-aos='fade-up'>
                <PageHeading
                    title={t('title')}
                    description={t('subtitle')}
                />
                <Skill skills={skills} certificates={certificates} />
            </Container>
        </>
    )
}

export default SkillsetPage
export const getStaticProps = async () => {

    const skills = await fetcher(`${process.env.API_URL}/skill`)
    const certificates = await fetcher(`${process.env.API_URL}/certificate`)

    return {
        props: {
            skills, certificates
        },
    };
};