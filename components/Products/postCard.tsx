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
  const {_id, name, rating, price, image, isLatest} = product

console.log(product)
  // Create a function to resolve image URLs
  const getImageUrl = (imageRef: string | undefined) => {
    return urlFor(imageRef);
  };

  const imageUrl = getImageUrl(product.image[0].asset?._ref);

   const messageWhatsApp =
    encodeURIComponent(`Hi, Teetoobeez, I found this product 
  ${(
    <Link href={`/product/${_id}`} as={`${name}`}>
      {name}
    </Link>
  )} interesting and I am interested`);

  const handleImageClick = () => {
    router.push(`/product/${_id}`);
  };

  return (
    <div className="grid m-1 md:m-4 relative">
      <div
        className="transition-all group duration-300 h-52 w-[170px] border rounded-md hover:shadow flex flex-col overflow-hidden ease-in-out relative transition duration-300 transform group-hover:scale-105 ease-in-out group-hover:cursor-pointer bg-slate-400"
        data-aos="slide-up"
        title={name}
        onClick={handleImageClick}
      >
          {isLatest && (<div className="absolute -top-2 -right-2 z-20 p-2 w-fit rounded-full bg-red-500 flex justify-center font-normal items-center text-sm text-white">New</div>)}
        {imageUrl !== undefined ? (
          <Image
            src={imageUrl} // Display the first image
            alt={name}
            fill
            sizes="true"
            className="hover:scale-105 object-cover cursor-pointer transition-transform duration-300"
          />
        ) : (
          <Image
            src="/display.png" // Provide a placeholder image URL or a local image
            alt={name}
            fill
            sizes="true"
            className="h-1/2 transform hover:scale-105 cursor-pointer transition-transform duration-300 w-full object-cover"
          />
        )}
        <div className="absolute top-8 right-1 hidden group-hover:flex justify-center items-center flex-col space-y-2">
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
        <div
          className="group-hover:flex justify-between bg-white border transition-all duration-300 ease-in-out items-center my-2 hidden absolute bottom-3 right-0 px-3 rounded-l-full"
          data-aos="fade-right"
        >
          <span
            className="p-2 w-fit cursor-pointer hover:bg-[#fca412]/20 rounded-full"
            onClick={() => router.push(`/product/${_id}`)}
          >
            <GrView />
          </span>
          <p className="p-2 w-fit cursor-pointer hover:bg-[#fca412]/20 rounded-full">
            <MdAddShoppingCart />
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostCard