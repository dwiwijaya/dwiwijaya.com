import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from '@/components/elements/Image';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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

const Certificates = ({ certificates }) => {
  return (
    <section className="p-6">
      <ol>
        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <li key={index}>
              <Image rounded='rounded-md bg-container' alt={certificate.name} width={1000} height={200} src={certificate.image} loading='lazy' />
            </li>
          ))}
        </Slider>
      </ol>
    </section>
  )
}

export default Certificates