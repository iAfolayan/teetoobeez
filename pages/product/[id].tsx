import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import { ProductItems } from "@/utils/data";
import Image from 'next/image'
import StarRating from '@/components/Rating';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CurrencyFormat } from "@/utils/currency";


interface Product {
  id: any;
  prdImg: string;
  prdName: string;
  prdAmount: number;
  rating: number;
  stock: boolean;
  category: string;
}

const ProductDetail = () => {
    const router = useRouter()
    const { id } = router.query

  const product: Product | undefined = ProductItems.find(
    (product) => product.id === parseInt(id as string)
  );

  if (!product) {
    return <div className="text-2xl text-red-900 text-center mt-10">Product not found</div>;
  }

  /* 
  89,900
  323260 (150000) - 177,470
  8000
  50000
  40000
  365370
  */

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full md:w-9/12 md:mx-auto my-7 items-center gap-x-12">
        <div className="md:w-[450px] mx-auto bg-slate-500 rounded-3xl shadow-md overflow-hidden">
          <Image
            src={product.prdImg}
            alt={product.prdName}
            width={250}
            height={340}
            className="object-contain w-full shadow"
          />
        </div>
        <div className="flex flex-col shadow p-6 space-y-3 w-11/12 md:w-[400px] text-center md:text-left rounded-md border mx-4 md:mx-0">
          <div className="flex justify-center md:block">
            <StarRating rating={product.rating} />
          </div>
          <h1 className="text-5xl font-bold">{product.prdName} </h1>
          <span className="text-base text-red-500">{product.category}</span>
          <p className="font-bold text-3xl my-10">
            {CurrencyFormat(product.prdAmount)}
          </p>
          <div className="flex flex-col space-y-2 mt-5 py-5">
            <p className="text-xl font-bold text-red-900">Order via:</p>
            <div
              className="flex p-4 cursor-pointer rounded-full items-center bg-[#25d366] border gap-x-2 justify-center hover:text-white text-xl font-bold"
              onClick={() =>
                router.push("https://api.whatsapp.com/send?phone=2347033010687")
              }
            >
              <FaWhatsapp /> <span>WhatsApp</span>
            </div>
            <div
              className="flex p-4 cursor-pointer rounded-full items-center bg-[#c32aa3] border gap-x-2 justify-center hover:text-white text-xl font-bold"
              onClick={() => router.push("https://instagram.com/teetoobeez")}
            >
              <FaInstagram /> <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail