import { useTranslations } from 'next-intl';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Blank from '@/components/layouts/partials/Blank';

const Fallback = () => {
  const t = useTranslations('Offline');
  const router = useRouter();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`;

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <NextSeo title={`${t('title')} - Dwi Wijaya`} description={t('metaDesc')} />

      <Blank className='text-center flex justify-center !items-center !h-[100dvh]'>
        {/* Page Heading with Icon */}
        <div className="flex flex-col gap-6">

          <div className="mb-1">
            <h2 className="mb-1 relative font-bold text-3xl text-title">{t('title')}</h2>
            <p className="leading-5 text-subtext">
              {t('subtitle')}
            </p>
          </div>

          <i className="text-primary text-7xl fa-duotone fa-solid fa-wifi-exclamation"></i>

          <p className="max-w-[26rem] mx-auto text-subtext text-base">{t('message')}</p>

          <div className="flex justify-center">
            <button
              onClick={handleRetry}
              className="btn"
            >
              <i class="fa-duotone fa-solid fa-rotate-right"></i>
              {t('retry')}
            </button>
          </div>
        </div>

      </Blank>
    </>
  );
};

export default Fallback;

export const getStaticProps = async () => {

  return {
    props: {},
  };
};