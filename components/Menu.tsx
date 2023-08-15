import Link from 'next/link';

interface IProps {
    path: string
    text: string
    link: string
    Icon?: JSX.Element
}

const Menu: React.FC<IProps> = ({path, text, link, Icon}) => {
  return (
      <Link
        href={link}
        className={`flex items-center w-full md:w-fit p-1 px-2 text-sm ${
          path === link && 'bg-[#fca412] text-white transition ease-in-out'
        } hover:bg-[#f5ecde] hover:!text-black rounded-md group`}
      >
        {Icon && (<span className="w-6 h-6 flex items-center">{Icon}</span>)}
        <span className={`text-gray-600 text-center md:text-left group-hover:text-white ${path === link && `!text-white`}`}>
          {text}
        </span>
      </Link>
  )
}

export default Menu