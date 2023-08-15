import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import List from '@/components/About/List'

const Products = () => {
  return (
    <Layout>
      <div className="mb-4 px-2 md:px-0">
        {/* <div className="w-7/12 mx-auto h-44 bg-gray-700">
          <Image src="/display.png" fill className="object-contain" alt="Product display" />
        </div> */}
        <div className="max-w-3xl mx-auto">
          <p className="text-4xl p-2 py-4 uppercase rounded" data-aos="fade-up">Our Products</p>
            <Image src="/display.png" className="rounded" data-aos="fade-in" width={700} height={80} alt="Product display" />
          <p className="py-4" data-aos="fade-in">
            Teetoobeez offers a diverse range of culturally inspired jewelry, traditional attire,
            and accessories. Here is a properly arranged product overview
          </p>
          <List />
        </div>
      </div>
    </Layout>
  )
}

export default Products