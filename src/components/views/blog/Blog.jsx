import { useTranslations } from 'next-intl';
import { Abril_Fatface } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { BLOG_DUMMY } from '@/constants/blog_dummy';
import BlogCard from './BlogCard'; // Import the new component
import Reading from '@/assets/reading.svg';
import BlogCarousel from './BlogCarousel';
import Slider from "react-slick";
import CategoryCard from './category/CategoryCard';
const abril = Abril_Fatface({
    subsets: ['latin'],
    preload: true,
    weight: '400',
});

const Blog = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const t = useTranslations();

    return (
        <>
            <div className="mb-24 flex justify-between items-start">
                <div className="flex flex-col gap-6 ">
                    <h1 className={`text-4xl text-title textpri font-bold ${abril.className}`}>
                        Sheets of Knowledge, <br /> Stories, & Ideas
                    </h1>
                    <h2 className="tracking-wider">
                        Where ideas are shared, stories unfold <br /> and new perspectives are discovered.
                    </h2>
                    <Link className="btn !px-3 !py-2" href="/blog/explore">
                        Browse the Sheets <i className="fad fa-feather"></i>
                    </Link>
                </div>
                <Image
                    src={Reading}
                    alt="Reading"
                    width={200}
                    height={200}
                    className="hidden h-56 md:flex xl:h-72 scale-x-[-1] flex-1"
                />
            </div>

            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-stroke [mask-image:radial-gradient(50%_25%_at_top_center,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width="100"
                        height="100"
                        x="50%"
                        y="-1"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    strokeWidth="0"
                    fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                ></rect>
            </svg>




            <div className="flex flex-col gap-16">
                <BlogCarousel title="What are you looking for?" desc="There are many variations of passages of Lorem Ipsum available" >
                    {BLOG_DUMMY.categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            category={category}
                        />
                    ))}
                </BlogCarousel>
                <BlogCarousel title="Latest Sheets" desc="Discover the most recent sheets" >
                    {BLOG_DUMMY.articles.map((article, index) => (
                        <BlogCard
                            key={index}
                            article={article}
                            isHovered={hoveredIndex === index}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                        />
                    ))}
                </BlogCarousel>

            </div>
        </>
    );
};

export default Blog;
