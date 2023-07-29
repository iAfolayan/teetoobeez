import { CurrencyFormat } from '@/utils/currency';
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { GrView } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import StarRating from '../Rating';
import {urlFor} from '../../utils/sanity';

interface IProp {
    product: any
}
const PostCard: React.FC<IProp> = ({ product }) => {
    const router = useRouter()
    const { _id, name, rating, category, price} = product
     const messageWhatsApp =
       encodeURIComponent(`Hi, Teetoobeez, I found this product 
  ${(
    <Link href={`/product/${_id}`} as={`${name}`}>
      <a>{name}</a>
    </Link>
  )} interesting and I am interested`);
  return (
    <div
      className="transition-all group duration-300 h-52 w-[185px] md:w-[220px] md:h-[250px] border rounded-md hover:shadow flex flex-col overflow-hidden my-4 ease-in-out relative transition duration-300 transform group-hover:scale-105 ease-in-out group-hover:cursor-pointer bg-slate-400"
      title={name}
      onClick={() => router.push(`/product/${_id}`)}
    >
      <Image
        src={urlFor(product.image[0].asset._ref).url()}
        alt={name}
        className="h-1/2 transform hover:scale-105 cursor-pointer transition-transform duration-300 w-full object-cover"
        fill
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
        {CurrencyFormat(price)}
      </h3>
      <div className="flex flex-col px-2 my-4">
        <StarRating rating={rating} />
        <h3 className="text-base">{name}</h3>
      </div>
      <div className="group-hover:flex justify-between bg-white border transition-all duration-300 ease-in-out items-center my-2 hidden absolute bottom-3 right-0 px-3 rounded-l-full">
        <span
          className="p-2 w-fit cursor-pointer hover:bg-[#fca412] rounded-full"
          onClick={() => router.push(`/product/${_id}`)}
        >
          <GrView />
        </span>
        <p className="p-2 w-fit cursor-pointer hover:bg-[#fca412] rounded-full">
          <MdAddShoppingCart />
        </p>
      </div>
    </div>
  )
 
}

export default PostCard