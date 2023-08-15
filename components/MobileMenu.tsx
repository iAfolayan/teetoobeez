// components/MobileMenu.tsx
import { motion } from 'framer-motion'
import Menu from './Menu'
import { MenuItems } from '@/utils/data'
import { useRouter } from 'next/router';

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, onClose}) => {
     const router = useRouter()
    const path = router.pathname
  return (
    <motion.div
      className={`fixed inset-y-0 right-0 z-50 border-r shadow w-64 bg-white p-6 transform transition-transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      initial={{x: '100%'}}
      animate={{x: isOpen ? 0 : '100%'}}
    >
      {/* Menu content */}
      <button
        className="absolute top-0 right-0 p-4 text-gray-600 focus:outline-none"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      {MenuItems.map((data: any) => (
        <div key={data.path} className="my-4">
            <Menu path={path} link={data.link} Icon={data.Icon} text={data.text} />
        </div>
        ))}
    </motion.div>
  )
}

export default MobileMenu

/* import {useState} from 'react'
import Menu from './Menu'
import { MenuItems } from '@/utils/data'
import { useRouter } from 'next/router';

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({isOpen, onClose}) => {
    const router = useRouter()
    const path = router.pathname

  return (
    <div
      className={`z-20 fixed inset-0 top-16 transform md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform ease-in-out duration-300`}
    >
      <div className="bg-white w-60 h-screen p-4">
        {MenuItems.map((data: any) => (
          <Menu path={path} link={data.link} Icon={data.Icon} text={data.text} key={data.path} />
        ))}
      </div>
      <div
        onClick={onClose}
        className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-30`}
      />
    </div>
  )
}

export default MobileMenu
 */
