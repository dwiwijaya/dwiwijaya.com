import Link from 'next/link'
import React from 'react'

const CategoryCard = ({ category }) => {
    return (
        <div className='bg-container border border-stroke rounded-xl p-6 h-full min-h-full'>
            <div className="flex flex-col gap-4 justify-between h-full">
                <div className="flex gap-4 flex-col">
                    <div className="p-6 bg-slate-800 dark:bg-slate-200 text-slate-200 dark:text-slate-800 h-6 w-6 border border-stroke rounded-full flex justify-center items-center">
                        <i className={category.icon}></i>
                    </div>
                    <div className="">
                        <h3 className='font-semibold text-lg'>{category.name}</h3>
                        <p className='text-subtext line-clamp-3'>{category.description}</p>
                    </div>
                </div>
                <div className="flex justify-start items-center gap-2 h-fit flex-wrap">
                    <span className='text-subtext px-2 py-1 border border-stroke rounded-md'><span className='font-semibold'>5</span> Sheets</span>
                    <Link className="text-subtext px-2 py-1 border border-stroke rounded-md" href={`/blog?category=${category.name}`} >Read More <i className="fal fa-sm fa-chevron-right ml-1"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard