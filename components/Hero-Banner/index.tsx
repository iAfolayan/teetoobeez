import React from 'react'

const HeroBanner = () => {
  return (
    <div className="hero-section w-full bg-cover bg-no-repeat bg-left-top mix-blend-lighten md:py-10 md:h-[400px]">
      <div className="w-full md:w-11/12 text-white opacity-100 mx-auto text-center brightness-100">
        <span className="text-red-500 font-bold text-2xl mb-4" data-aos="fade-down">Shop now</span>
        <h1 className=" text-4xl md:text-7xl font-bold text-white" data-aos="zoom-in-up">Adorn Yourself with Elegance</h1>
        <h3 className="text-xl md:text-4xl mt-4 mb-3 p-2 md:mb-10 text-white bg-black/10 rounded-full md:w-7/12 mx-auto" data-aos="fade-up">
          Find Your Perfect Piece of Jewelry Today!
        </h3>
        {/* <div className="flex flex-col w-3/4 md:w-2/4 mx-auto mb-4 md:mb-0" data-aos="fade-right">
          <span className="hidden md:block text-left text-xl md:text-2xl text-white mb-1">
            Looking for Jewlery?
          </span>
          <input
            type="search"
            className="outline-none p-2 md:p-4 rounded-full bg-gray-100 text-black"
          />
        </div> */}
      </div>
    </div>
  )
}

export default HeroBanner