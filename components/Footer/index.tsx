import { HiHome } from 'react-icons/hi'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="border-t py-2 px-2 flex justify-between items-center bottom-0 relative md:w-11/12 mx-auto">
        <HiHome />
        {/* <div className="bg-[#241f1f] text-white font-bold flex p-2 justify-center rounded-full w-10 h-10 object-cover">
          <Image src="/Tee-Logo.jpg" fill alt="logo" />
        </div> */}
        <div className="font-bold text-base flex justify-between gap-x-6 items-center cursor-pointer">
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
        </div>
    </div>
  )
}

export default Footer