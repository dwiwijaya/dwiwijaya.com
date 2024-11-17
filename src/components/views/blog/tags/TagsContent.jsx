import PageHeading2 from '@/components/common/PageHeading2'
import { BLOG_DUMMY } from '@/constants/blog_dummy'
import Link from 'next/link'
import React from 'react'

const TagsContent = () => {
    return (
        <>
            <PageHeading2
                title="Tags"
                description="Explore topics that organize all the content"
            />

            <div className="flex flex-wrap gap-2">

                {BLOG_DUMMY.tags.map((tag) => (

                    <Link className='flex bg-container' href={`/blog/tag/${tag.slug}`} key={tag.id}>
                        <p className='px-2 py-1  rounded-lg border border-stroke rounded-r-none'>{tag.name}</p>
                        <span className=' px-2 py-1 font-semibold rounded-lg border border-stroke rounded-l-none border-l-0'>
                            {Math.floor(Math.random() * (50 - 1 + 1)) + 1}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default TagsContent