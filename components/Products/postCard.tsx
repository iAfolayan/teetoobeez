import { CurrencyFormat } from '@/utils/currency';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GrView } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import StarRating from '../Rating';


interface IProp {
    product: any
}
const PostCard: React.FC<IProp> = ({ product }) => {
    const router = useRouter()
    const { id, prdName, rating, prdImg, prdAmount} = product
     const messageWhatsApp =
       encodeURIComponent(`Hi, Teetoobeez, I found this product 
  ${(
    <Link href={`/product/${id}`} as={`${prdName}`}>
      <a>{prdName}</a>
    </Link>
  )} interesting and I am interested`);
  return (
    <div
      className="transition-all group duration-300h-auto w-full md:w-[220px] md:h-auto border rounded-md hover:shadow flex flex-col overflow-hidden my-4 ease-in-out relative"
      title={prdName}
    >
      <Image
        src={prdImg}
        alt="product1"
        className="transition duration-300 transform group-hover:scale-105 ease-in-out group-hover:cursor-pointer h-fit object-cover"
        width="220"
        height="300"
      />
      <div className="absolute top-1 right-1 hidden group-hover:flex justify-center items-center flex-col space-y-2">
        <Link
          href="https://instagram.com/teetoobeez"
          target="_blank"
          className="rounded-full bg-[#fca412] w-fit p-2"
        >
          <FaInstagram color="white" />
        </Link>
        <Link
          href={`https://api.whatsapp.com/send?phone=2348030614003&text=${messageWhatsApp}`}
          target="_blank"
          className="rounded-full bg-[#fca412] w-fit p-2"
        >
          <FaWhatsapp color="white" />
        </Link>
      </div>
      <h3 className="absolute top-1 bg-white w-fit px-2 font-bold rounded-r-md">
        {CurrencyFormat(prdAmount)}
      </h3>
      <div className="flex flex-col px-2 my-4">
        <StarRating rating={rating} />
        <h3 className="text-base">{prdName}</h3>
      </div>
      <div className="group-hover:flex justify-between bg-white border transition-all duration-300 ease-in-out items-center my-2 hidden absolute bottom-3 right-0 px-3 rounded-l-full">
        <span
          className="p-2 w-fit cursor-pointer hover:bg-[#fca412] rounded-full"
          onClick={() => router.push(`/product/${id}`)}
        >
          <GrView />
        </span>
        <p className="p-2 w-fit cursor-pointer hover:bg-[#fca412] rounded-full">
          <MdAddShoppingCart />
        </p>
      </div>
    </div>
  );
 
}

export default PostCard