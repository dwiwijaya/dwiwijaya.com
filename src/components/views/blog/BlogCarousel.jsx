import React, { useRef } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrow } from '@popperjs/core';

const BlogCarousel = ({ children, title, desc }) => {

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    const settings = {
        infinite: true,
        arrows: false,
        adaptiveHeight: true,
        varaibleWidth : true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        initialSlide: 0,
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className=''>
            <div className="flex  justify-between mb-4 items-center sm:items-end">
                <div className="">
                    <h2 className="text-xl sm:text-2xl font-semibold text-text">{title}</h2>
                    <h3 className='hidden sm:block'>{desc}</h3>
                </div>

                <div className="flex gap-2">
                    <button onClick={previous} className='flex items-center justify-center h-10 w-10 rounded-full bg-container border border-stroke'><i className="fal fa-chevron-left"></i></button>
                    <button onClick={next} className='flex items-center justify-center h-10 w-10 rounded-full bg-container border border-stroke'><i className="fal fa-chevron-right"></i></button>
                </div>
            </div>
            <Slider ref={slider => { sliderRef = slider; }}
                {...settings}
            >
                {children}
            </Slider>
        </section>
    )
}

export default BlogCarousel