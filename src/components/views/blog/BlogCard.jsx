import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { calculateReadingTime } from '@/helpers/blog';

const BlogCard = ({ article, isHovered, onHoverStart, onHoverEnd }) => {
    const slideDownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, },
    };

    return (
        <div href={`/blog/${article.slug}`}>
            <div
                className="flex flex-col gap-3 h-full"
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
            >
                <Image
                    className="object-cover max-h-52 min-h-52 w-full"
                    src={article.cover_image}
                    alt={article.title}
                    width={400}
                    height={400}
                />
                <div className="flex flex-col h-full justify-between gap-3">
                    <div className="">
                        <div className="flex-1">
                            <h2 className="text-xl leading-6 font-semibold text-title line-clamp-1">{article.title}</h2>
                            <p className="text-subtext leading-5 mt-2 line-clamp-2">{article.excerpt}</p>
                        </div>
                    </div>
                    <div className="flex justify-between  px-0.5 text-subtext text-xs">
                        
                        <p className='text-subtext text-sm'>
                            Nov 24, 2024
                            </p>

                        <motion.div
                            variants={slideDownVariants}
                            initial="visible"
                            animate={isHovered ? 'hidden' : 'visible'}
                            className={`flex justify-between gap-2 ${isHovered && 'hidden'}`}
                        >
                            <div className="flex items-center gap-1">
                                <i className="fal fa-eye" />
                                <span className="ml-0.5 text-xs font-medium">{article.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <i className="fal fa-comment-lines" />
                                <span className="ml-0.5 text-xs font-medium">{2}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <i className="fal fa-clock" size={14} />
                                <span className="ml-0.5 text-xs font-medium">
                                    {calculateReadingTime(article?.content) ?? 0} MINS READ
                                </span>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={slideDownVariants}
                            initial="hidden"
                            animate={isHovered ? 'visible' : 'hidden'}
                            className={`flex items-center gap-1 text-primary' ${!isHovered && 'hidden'}`}
                        >
                            <span className="mr-1 text-xs font-medium">READ MORE</span>
                            <i className="fad fa-arrow-right" size={16} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
