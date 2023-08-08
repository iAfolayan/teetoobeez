import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { TbSearch } from 'react-icons/tb';
import { MenuItems } from '@/utils/data';
import Menu from '../Menu';
import Logo from '../Logo';

const Navbar = () => {
  const router = useRouter()
  const [isEmptyCart, setIsEmptyCart] = useState([]);


  const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);
  const path = router.pathname;

/*   const NavMenu = (pathname: string, name: string, link: string) => {
    return (
    <Link href={link} 
      className={`flex items-center gap-x-2 w-fit py-1 px-2 ${pathname === link && "bg-[#fca412] text-white transition ease-in-out" } hover:bg-[#fca412] hover:text-white rounded-md`}>
        <HiHome />{name}
    </Link>)
  } */
  return (
    <>
      <div className="sticky top-0 bg-white z-30 shadow">
        <div className="container mx-auto p-6 flex justify-between">
            <Logo />
          <div className="flex space-x-1 items-center">
            {MenuItems.map((data:any) => (<Menu 
              path={path} 
              link={data.link}
              Icon={data.Icon}
              text={data.text} 
              key={data.path}
             />)
             )}
          </div>
          <div className="hidden flex space-x-3">
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
                <span className="absolute -top-1 right-0 p-2 bg-red-500 rounded-full h-2 w-2 flex justify-center items-center text-white text-[10px] justify-center">
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
          </div>
        </div>
      </div>
      {isUserSettingsOpen && (
        <div className="flex flex-col space-y-4 justify-between bg-white absolute right-[40px] z-30 w-fit p-4 border transition ease-in-out rounded-b-md">
          <p className="cursor-pointer w-fit py-2 text-xs px-4 rounded-md text-white bg-[#fca412]">
            Login
          </p>
        </div>
      )}
    </>
  )
}

export default Navbar