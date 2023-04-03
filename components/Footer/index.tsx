import React from 'react'

import { HiHome } from 'react-icons/hi'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="border-t py-4 flex justify-between items-center bg-black text-white">
      <div className="flex justify-between items-center px-4 w-11/12 mx-auto">
        <HiHome />
        <div className="flex gap-x-2 items-center py-3">
          <span className="bg-[#241f1f] text-white font-bold flex p-2 justify-center rounded-full w-10 h-10">
            <Image src="/Tee-Logo.jpg" width={70} height={70} alt="logo" />
          </span>
        </div>
        <div className="font-bold text-2xl flex justify-between gap-x-3 items-center">
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
        </div>
      </div>
    </div>
  )
}

export default Footer