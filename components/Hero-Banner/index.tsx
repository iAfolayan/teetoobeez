import Image from 'next/image'
import { useRouter } from 'next/router'

interface HeroBannerProps {
  imageSrc: string
  title: string
  subtitle: string
  id?: string
}

const HeroBanner: React.FC<HeroBannerProps> = ({imageSrc, title, subtitle, id}) => {
  const router = useRouter()

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-96 py-4 md:py-10 bg-green-700">
      <div className="md:w-1/2 p-1 md:p-8 text-center flex flex-col">
        <h1 className="text-[25px] md:text-6xl font-extrabold md:mb-2 text-white">{title}</h1>
        <p className="text-xl md:text-2xl italic text-center text-white">{subtitle}</p>
        <div
          className="md:text-xl my-6 md:my-8 py-2 rounded-md uppercase bg-[#fca412]/20 hover:bg-[#fca412] w-3/4 md:w-1/2 mx-auto hover:text-white"
          onClick={() => router.push(`/product/category/${id}`)}
        >
          Shop now
        </div>
      </div>
      <div className="w-full md:w-[500px] h-[350px] mx-auto flex items-center justify-center relative mr-16 rounded-md overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          sizes="true" 
          className="object-cover rounded-md" 
        />
      </div>
    </div>
  )
}

export default HeroBanner
