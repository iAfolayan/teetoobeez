import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import Link from 'next/link'
import {FiShoppingBag} from 'react-icons/fi'

interface SlideshowProps {
  slides: {
    title: string
    image: string
    message: string
    link: string
  }[]
}

const Slideshow: React.FC<SlideshowProps> = ({slides}) => {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={5000}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between py-4 md:py-10 slideshow mix-blend-lighten"
        >
          <div className="md:w-1/2 p-1 md:p-8 text-center flex flex-col md:ml-8">
            <h1 className="text-[25px] md:text-6xl font-extrabold md:mb-2 text-white">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl italic text-center text-white">{slide.message}</p>
            <Link
              href={`/product/category${slide.link}`}
              className="flex justify-center items-center md:text-xl my-6 md:my-8 py-2 rounded-md uppercase bg-blue-500 hover:bg-blue-800 w-3/4 md:w-1/2 mx-auto text-white transition duration-300 font-semibold"
            >
              <span>Shop Now</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>
          </div>
          <div className="w-[200px] h-[200px] mx-auto md:w-[350px] md:h-[350px] mb-8 md:mb-0 flex items-center relative md:mr-24 rounded-full shadow overflow-hidden bg-red-600">
            <Image
              src={slide.image}
              alt={slide.title}
              priority
              fill
              sizes="true"
              className="object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Slideshow
