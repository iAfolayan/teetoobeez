import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import HeroBanner from '@/components/Hero-Banner'
import Products from '@/components/Products'
import 'react-whatsapp-widget/dist/index.css'
import {getFeaturedProduct, urlFor} from '@/utils/sanity'
import Slideshow from '@/components/Slideshow'

const inter = Inter({subsets: ['latin']})

type Product = {
  _id: string
  name: string
  description: string
  price: number
  category: {
    _id: string
    title: string
  }
  image: any
  rating: number
}
interface Props {
  product: Product
}

export default function Home() {

/*   const heroProps = {
    imageSrc: '/Hero.png',
    title: "Adorn Yourself with Exquisite Jewelry Creations",
    subtitle: 'Find Your Perfect Piece of Jewelry Today!',
    id: '',
  } */
 /*  const heroProps = {
    imageSrc: urlFor(product.image[0].asset._ref).url(),
    title: product?.name,
    subtitle: product?.description || 'Adorn Yourself with Exquisite Jewelry Creations',
    id: product?.category?._id || '',
  } */

 const slides = [
  {
    title: 'Exquisite Jewelry Collection',
    image: '/hero-banner.jpg',
    link: '/jewelry',
    message: 'Discover a stunning collection of handcrafted jewelry pieces that reflect elegance and sophistication.',
  },
  {
    title: 'Elegant Accessories',
    image: '/1.jpg',
    link: '/accessories',
    message: 'Complete your look with our exquisite range of accessories, designed to complement your style with finesse.',
  },
  {
    title: 'Timeless Beauty',
    image: '/products/LUXE_08.png',
    link: '/timeless-beauty',
    message: 'Experience the allure of timeless beauty with our selection of jewelry that transcends trends and eras.',
  },
  {
    title: 'Captivating Designs',
    image: '/products/LUXE_12.JPG',
    link: '/captivating-designs',
    message: 'Fall in love with our captivating designs that capture the essence of artistry and individuality.',
  },
  {
    title: 'Luxury Redefined',
    image: '/Hero.png',
    link: '/luxury',
    message: 'Experience luxury redefined with our collection of meticulously crafted jewelry pieces for the discerning taste.',
  },
];
  return (
    <>
      <Head>
        <title>Teetoobeez | Your Jewelry Store</title>
        <meta name="description" content="Discover beautiful jewelry and accessories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <div className="flex flex-col">
              <Slideshow slides={slides} />
            {/* {product ? <HeroBanner {...heroProps} /> : <p className="text-4xl text-center font-bold my-4">No featured product available.</p>} */}
            <Products />
          </div>
        </Layout>
      </main>
    </>
    /* IUC 7038708688(0) */
  )
}
/* 
export const getStaticProps = async () => {
  const product = await getFeaturedProduct()

  return {
    props: {product},
    revalidate: 1, // Set this to a higher value if you don't need to update the data frequently
  }
} */
