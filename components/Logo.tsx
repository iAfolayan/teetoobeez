import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
      <Link href="/" className="flex items-center space-x-2">
          <Image src="/Tee-Logo.jpg" width={42} height={42} alt="logo" className='rounded-full' />
          <span className="hidden md:inline-block font-extrabold text-2xl text-gray-700">Teetoobeez</span>
      </Link>
  )
}

export default Logo