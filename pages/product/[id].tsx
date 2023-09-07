import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
// import { ProductItems } from "@/utils/data";
import Image from 'next/image'
import StarRating from '@/components/Rating';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CurrencyFormat } from "@/utils/currency";
import {GetStaticProps, GetStaticPaths} from 'next'
import { getPostById, getProductsByCategory, urlFor } from '@/utils/sanity';
import QuantityCounter from '@/components/QuantityCounter';
import PostCard from '@/components/Products/postCard';

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

    const [quantity, setQuantity] = useState<number>(1)
    const [moreProducts, setMoreProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(false)


    const {name, _id, price, rating, category} = product || {
      name: '',
      _id: '',
      price: 0,
      rating: 0,
      category: {title: ''},
    }

    const productTitle = category.title

   const messageWhatsApp = encodeURIComponent(
    `Hi, Teetoobeez, I found this product ${name} interesting and I am interested. Check it out: ${process.env.NEXT_PUBLIC_APP_URL}/product/${_id}`
  );

   useEffect(() => {
     const openWhatsAppWindow = () => {
       window.open(
         `https://api.whatsapp.com/send?phone=2347033010687&text=${messageWhatsApp}`
       )
     }

     const whatsappButton = document.getElementById('whatsapp-button')
     whatsappButton?.addEventListener('click', openWhatsAppWindow)

     return () => {
       whatsappButton?.removeEventListener('click', openWhatsAppWindow)
     }
   }, [messageWhatsApp])

   useEffect(() => {
   const fetchData = async () => {
     setLoading(true)
     try {
       const moreProductsQuery = await getProductsByCategory(category.title)
       const randomFiveProducts = moreProductsQuery.sort(() => Math.random() - 0.5).slice(0, 5)
       setMoreProducts(randomFiveProducts)
     } catch (err) {
       console.error(err)
     } finally {
       setLoading(false)
     }
   }

   fetchData()
  }, [category.title])

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change)
    setQuantity(newQuantity)
  }

  if (router.isFallback) {
    return <div className='h-screen flex justify-center items-center'>Loading...</div>;
  }

  if (!product) {
    return <div className='h-screen flex justify-center items-center'>Product not found</div>;
  }

  const getImageUrl = (imageRef: string | undefined) => {
    return urlFor(imageRef);
  };

  const imageUrl = getImageUrl(product.image?.[0]?.asset?._ref);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full md:w-7/12 md:mx-auto my-5 items-center gap-x-16">
        <div
          className="md:w-[450px] mx-auto shadow rounded-md overflow-hidden"
          data-aos="fade-right"
        >
          <Image
            src={imageUrl || ''}
            alt={name}
            width={250}
            height={340}
            priority
            className="object-contain w-full shadow"
          />
        </div>
        <div
          className="flex flex-col shadow p-6 w-11/12 md:w-[400px] text-center md:text-left rounded-md border mt-4 md:mt-0 mx-4 md:mx-0"
          data-aos="fade-left"
        >
          <div className="flex justify-center md:inline-block">
            <StarRating rating={rating} />
          </div>
          <p className="text-xs text-red-500 mt-1">Title</p>
          <h1 className="text-2xl font-bold">{name} </h1>
          <span className="text-sm text-red-500">{category.title}</span>
          <p className="text-xl font-bold mt-4">{CurrencyFormat(price * quantity)}</p>
          {/* quantity */}
          <p className="text-red-500 py-2">Quantity</p>
          <QuantityCounter handleQuantityChange={handleQuantityChange} quantity={quantity} />

          <div className="flex flex-col space-y-4 py-5">
            <p className="font-bold text-red-500">Order via:</p>
            <div className="flex gap-2 justify-between">
              <div
                id="whatsapp-button"
                className="flex p-2 px-4 cursor-pointer rounded items-center text-gray-500 hover:bg-[#25d366] border gap-x-1 justify-center hover:text-white transition"
                /* onClick={() => router.push(`https://api.whatsapp.com/send?phone=2347033010687&text=${messageWhatsApp}`)} */
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </div>
              <div
                className="flex p-2 px-4 cursor-pointer rounded items-center hover:bg-[#c32aa3] border gap-x-1 justify-center text-gray-500 hover:text-white"
                onClick={() => router.push('https://instagram.com/teetoobeez')}
              >
                <FaInstagram />
                <span>Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold md:text-2xl px-4 w-full md:w-11/12 mx-auto md:mt-8 md:mb-2">More like this: </h1>
      {loading ? <p className="text-xl text-center my-2">Loading more like products...</p> : (
      <div className="flex gap-x-1 w-full md:w-10/12 mx-auto flex-col px-2 md:px-0">
        <div className="grid grid-cols-2 md:flex md:gap-x-[5px] flex-wrap">
          {moreProducts.map((moreProduct: any, index: any) => (
            <PostCard product={moreProduct} key={index} />
          ))}
        </div>
      </div>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
  const id = params?.id as string
  const product = await getPostById({id})
  // const similarProducts = await getProductsByCategory({product?.category?.title}) 
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
