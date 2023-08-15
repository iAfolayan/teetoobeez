const AboutComponent = () => {
  return (
    <>
    <h2
      className="text-2xl font-bold text-center p-2" data-aos="fade-left"
      data-aos-duration="500"
      data-aos-offset="250"
      data-aos-easing="ease-in-sine">
        Vision
    </h2>
   <div className="max-w-2xl mx-auto ring-1 rounded p-4 bg-slate-200 shadow">
        <div className='text-2xl font-light text-center w-fit p-4 leading-[28px]' data-aos="fade-up"
     data-aos-duration="1000">
            We strive to be the leading choice in multicultural fashion, providing stylish and versatile options for everyday wear.
        </div>
    </div>
    <h2
            className="text-2xl font-bold text-center p-2 py-4" data-aos="fade-left"
          data-aos-duration="500"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine">
            Mission
          </h2>
    <div className="max-w-2xl mx-auto ring-1 rounded p-4 bg-red-100 shadow">
        <div className='text-2xl font-light text-center w-fit p-4 leading-[28px]' data-aos="fade-up"
     data-aos-duration="1000">
            To become a globally recognized brand, celebrated for our multicultural fashion that effortlessly resonates with individuals worldwide..
        </div>
    </div>
    </>
  )
}

export default AboutComponent