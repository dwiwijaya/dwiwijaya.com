

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_CATEGORIES_ICON, PORTFOLIO_TYPES, PORTFOLIO_TYPES_ICON } from '@/constants/data/portfolio';
import { BiChevronRight, BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const MDEditorPreview = dynamic(
    () => import("@uiw/react-markdown-preview").then((module) => module.default),
    { ssr: false }
);

const DetailPortfolio = ({ portfolio, locale }) => {

    return (
        <article className=''>
            <h1 className='text-2xl font-medium'>{portfolio.name}</h1>
            <p className='text-sm text-subtext leading-5'>{portfolio.excerpt}</p>
            <hr className="hr" />

            <div className="flex item-center gap-2 justify-center sm:justify-normal">
                {portfolio.demoLink &&
                    <a data-umami-event={`Click Live Demo - ${portfolio.name}`} href={portfolio.demoLink} className="badge text-sm mb-5">
                        <BiLinkExternal /> {locale == 'en' ? 'Live Demo' : 'Demo Langsung'}
                    </a>
                }
                {portfolio.githubLink &&
                    <a data-umami-event={`Click Source Code - ${portfolio.name}`} href={portfolio.githubLink} className={`badge text-sm mb-5`}>
                        <BsGithub /> {locale == 'en' ? 'Source Code' : 'Kode Sumber'}
                    </a>
                }
            </div>
            <figure>

                <Image
                    alt={portfolio.name}
                    src={portfolio.thumbnail}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className='rounded-md'
                    style={{ width: '100%', height: 'auto' }}
                    loading='lazy'
                />
            </figure>
            <div className='flex gap-2 items-center mt-4 overflow-y-hidden scrollbar-hide' >
                {portfolio.skill.map((skill, index) => (
                    <span className="badge text-sm " key={index}>
                        <i
                            className="text-lg"
                            dangerouslySetInnerHTML={{ __html: skill.icon }}
                        /> {skill.name}
                    </span>
                ))}
            </div>
            <hr className='hr' />
            <MDEditorPreview
                source={portfolio.content}
                className="md:p-4 rounded-lg mb-3"
            />
            <p className='text-sm text-subtext flex items-center gap-2'><BiChevronRight /> {locale == 'en' ? 'Category' : 'Kategori'}:  {PORTFOLIO_CATEGORIES_ICON[portfolio.category]} {PORTFOLIO_CATEGORIES[portfolio.category][locale]}</p>
            <p className='text-sm text-subtext flex items-center gap-2'><BiChevronRight /> {locale == 'en' ? 'Type' : 'Jenis'}: {PORTFOLIO_TYPES_ICON[portfolio.type]} {PORTFOLIO_TYPES[portfolio.type][locale]} </p>
        </article>
    )
}

export default DetailPortfolio