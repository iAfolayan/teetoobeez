import List from '@/components/About/List'
import AboutComponent from '@/components/About/vision'
import Layout from '@/components/Layout'

const AboutPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-4 px-2 md:px-0">
        <h1
          className="text-4xl p-2 py-4 uppercase rounded"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          About Us
        </h1>
        <p
          className="text-justify max-w-2xl mx-auto py-4 px-2 md:px-0"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <span className="font-bold">Teetoobeez</span> was founded by Bolatito Faith OKunlola and
          Olugbade Elijah Okunlola in 2013 in Nigeria. Growing up in Nigeria, the two founders
          devoted themself solely to fashion design. They started creating unique designs and
          selling them online (through select Social Media platforms and their own website) to
          customers across the globe under the brand name
          <span className="font-bold pl-1">Teetoobeez</span>. Over the years,
          <span className="font-bold pl-1">Teetoobeez</span> has made significant progress growing
          annual revenue of CAD 800,000.
        </p>
        <p
          className="text-justify max-w-2xl mx-auto py-2 px-2 md:px-0"
          data-aos="fade-left"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          At this point, the founders are seeking to establish the already successful
          <span className="font-bold pl-1">Teetoobeez</span> brand in the Canadian market,
          contributing to the economic prosperity of Canada and presenting viable employment
          opportunities and cultural benefits for citizens of the
          <span className="font-bold pl-1">Windsor region in Ontario province</span> where the
          business will be headquartered
        </p>
        {/* <p className="text-center max-w-2xl mx-auto py-4">
          Teetoobeez offers a diverse range of culturally inspired jewelry, traditional attire, and
          accessories. Here is a properly arranged product overview
        </p>
        <List /> */}
        <div
          className="max-w-2xl mx-auto ring-1 rounded p-4 mt-4"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="250"
          data-aos-easing="ease-in-sine"
        >
          
          <AboutComponent />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage