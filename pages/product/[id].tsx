import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
// import { ProductItems } from "@/utils/data";
import Image from 'next/image'
import StarRating from '@/components/Rating';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CurrencyFormat } from "@/utils/currency";
import {GetStaticProps, GetStaticPaths} from 'next'
import { getPostById, urlFor } from '@/utils/sanity';

type Product = {
  _id: string
  name: string
  description: string
  price: number
  category: {title: string}
  image: any
  rating: number
}
interface Props {
  product: Product | null
}

const ProductDetail = ({product }: Props) => {
    const router = useRouter()
/*     const [product, setProduct] = useState<Product | []>([])
 */
    // const { id } = router.query

 /*  const product: Product | undefined = ProductItems.find(
    (product) => product.id === parseInt(id as string)
  ); */

/*   if (!product) {
    return <div className="text-2xl text-red-900 text-center mt-10">Product not found</div>;
  } */

  if (router.isFallback) {
    return <div className='h-screen flex justify-center items-center'>Loading...</div>;
  }

  if (!product) {
    return <div className='h-screen flex justify-center items-center'>Product not found</div>;
  }

  const { name, _id, price, rating, category} = product

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full md:w-7/12 md:mx-auto my-7 items-center gap-x-16">
        <div className="md:w-[450px] mx-auto bg-slate-500 rounded-xl shadow-2xl overflow-hidden">
          <Image
            src={urlFor(product.image[0].asset._ref).url()}
            alt={name}
            width={250}
            height={340}
            priority
            className="object-contain w-full shadow"
          />
        </div>
        <div className="flex flex-col shadow p-6 space-y-3 w-11/12 md:w-[400px] text-center md:text-left rounded-md border mt-4 md:mt-0 mx-4 md:mx-0">
          <div className="flex justify-center md:block">
            <StarRating rating={rating} />
          </div>
          <h1 className="text-5xl font-bold">{name} </h1>
          <span className="text-base text-red-500">{category.title}</span>
          <p className="font-bold text-3xl my-10">{CurrencyFormat(price)}</p>
          <div className="flex flex-col space-y-2 mt-5 py-5">
            <p className="text-xl font-bold text-red-900">Order via:</p>
            <div
              className="flex p-4 cursor-pointer rounded-full items-center bg-[#25d366] border gap-x-2 justify-center hover:text-white text-xl font-bold"
              onClick={() => router.push('https://api.whatsapp.com/send?phone=2347033010687')}
            >
              <FaWhatsapp /> 
              <span>WhatsApp</span>
            </div>
            <div
              className="flex p-4 cursor-pointer rounded-full items-center bg-[#c32aa3] border gap-x-2 justify-center hover:text-white text-xl font-bold"
              onClick={() => router.push('https://instagram.com/teetoobeez')}
            >
              <FaInstagram /> 
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const id = params?.id as string
  const product = await getPostById({id})

  return {
    props: {product},
    revalidate: 1, // Set this to a higher value if you don't need to update the data frequently
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // You can pre-generate the paths for all the posts in your dataset here
  // Or use fallback: 'blocking' to generate the paths on demand
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export default ProductDetail
