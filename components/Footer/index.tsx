import React from 'react'

import { HiHome } from 'react-icons/hi'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t py-4 flex justify-between items-center bg-black text-white">
      <div className="flex justify-between items-center px-4 w-11/12 mx-auto">
        <HiHome />
        <div className="flex gap-x-2 items-center py-3">
          <span className="bg-[#fca412] text-white font-bold flex p-2 justify-center rounded-full w-10 h-10">
            T
          </span>
        </div>
        <div className="font-bold text-2xl flex justify-between gap-x-3 items-center">
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
}

export default Footer