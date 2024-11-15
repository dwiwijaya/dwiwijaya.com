import { useTranslations } from 'next-intl';
import { Abril_Fatface } from 'next/font/google';
import Link from 'next/link';
import Reading from '@/assets/reading.svg';
import React from 'react'
import Image from 'next/image';
const abril = Abril_Fatface({
    subsets: ['latin'],
    preload: true,
    weight: '400',
})
const Blog = () => {
    const t = useTranslations();
    return (
        <>
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-6 ">
                    <h1 className={`text-4xl text-title textpri font-bold ${abril.className}`}>Sheets of Knowledge, <br /> Stories, & Ideas</h1>
                    <h2 className='tracking-wider'> Where ideas are shared, stories unfold <br /> and new perspectives are discovered.</h2>
                    <Link className='btn !px-3 !py-2' href="/blog/explore">Browse the Sheets <i className="fad fa-feather"></i></Link>
                </div>
                <Image src={Reading} alt="Reading" width={200} height={200} className='hidden h-44 md:flex xl:h-72 scale-x-[-1] flex-1' />
            </div>
            <hr className='hr !my-12' />
        </>
    )
}

export default Blog