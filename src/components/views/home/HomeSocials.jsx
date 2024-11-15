import { Socials } from '@/constants/data/socials'
import React from 'react'

const HomeSocials = () => {
    return (
        <div className="flex gap-2 mt-6">
            {Socials.map((social, index) => (
                <a data-umami-event={`Social - ${social.eventName}`} aria-label={`go to ${social.label}`} key={index} href={social.link} target='_blank' className="w-full sm:w-fit justify-center !py-3 flex text-xl text-text hover:text-primary badge items-center group">
                    {/* <i className={`group-hover:-rotate-[10deg] transition-3s fa fa-brands fa-${social.boxIcon}`}></i> */}
                    {social.reactIcon}
                </a>
            ))}
        </div>
    )
}

export default HomeSocials