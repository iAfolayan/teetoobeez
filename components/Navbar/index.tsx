import Link from 'next/link'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { TbSearch } from 'react-icons/tb';
import { MenuItems } from '@/utils/data';
import Menu from '../Menu';
import Logo from '../Logo';
import HamburgerIcon from '../HamburgerIcon';
import MobileMenu from '../MobileMenu';

const Navbar = () => {
  const router = useRouter()
  const path = router.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEmptyCart, setIsEmptyCart] = useState([]);
  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="sticky top-0 bg-white z-30 shadow">
        <div className="container mx-auto p-4 flex justify-between">
          <div className="flex justify-between items-center w-full z-50">
            <Logo />
            <HamburgerIcon onToggle={toggleMenu} />
          </div>
          <div className="hidden md:flex space-x-1 items-center">
            {MenuItems.map((data: any) => (
              <Menu
                path={path}
                link={data.link}
                Icon={data.Icon}
                text={data.text}
                key={data.path}
              />
            ))}
          </div>

          {/* <div className="hidden space-x-3">
            <Link
              href="/"
              className="flex gap-x-2 items-center text-xs p-2 w-8 h-8 rounded-full bg-yellow-50 hover:bg-[#fca412]"
            >
              <TbSearch />
            </Link>
            <Link
              href=""
              className="flex gap-x-2 items-center text-sm p-2 w-8 h-8 rounded-full bg-yellow-50 hover:bg-[#fca412] relative"
            >
              <HiOutlineShoppingCart />
              {isEmptyCart?.length !== 0 && (
                <span className="absolute -top-1 right-0 p-2 bg-red-500 rounded-full h-2 w-2 flex justify-center items-center text-white text-[10px]">
                  5
                </span>
              )}
            </Link>
            <div
              onClick={() => setIsUserSettingsOpen(!isUserSettingsOpen)}
              className="flex gap-x-2 items-center text-sm p-2 w-8 h-8 rounded-full bg-yellow-50 hover:bg-[#fca412] cursor-pointer"
            >
              <HiOutlineUser />
            </div>
          </div> */}
        </div>
      </div>
      {/* {isUserSettingsOpen && (
        <div className="flex flex-col space-y-4 justify-between bg-white absolute right-[40px] z-30 w-fit p-4 border transition ease-in-out rounded-b-md">
          <p className="cursor-pointer w-fit py-2 text-xs px-4 rounded-md text-white bg-[#fca412]">
            Login
          </p>
        </div>
      )} */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  )
}

export default Navbar
