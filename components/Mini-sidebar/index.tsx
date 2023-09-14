import { capitalizeWord } from './../../utils/CapitalizeWord';
interface Props {
  onSelectCategory: (category: string | null) => void;
  navItems: any
}

const MiniSideBar = ({ onSelectCategory, navItems }: Props) => {
   const handleSelectCategory = (category: any) => {
    onSelectCategory(category);
  };

  return (
    <div className="hidden md:block h-auto md:w-auto border-r relative px-4">
      <div className="sticky top-4">
        <p className="font-bold text-xl p-2">Category</p>
        <button
          className="mr-2 px-1 py-1 rounded-full text-gray-700 mb-5"
          onClick={() => handleSelectCategory(null)}
        >
          All Products
        </button>
          {navItems.map((cat: any) => (
            <div
              className="flex flex-col border-b last:border-none border-[#f1f1f1] hover:bg-gray-200 cursor-pointer"
              key={cat._id}
            >
              <p
                className="p-2 text-xs text-gray-500"
                onClick={() => handleSelectCategory(cat.title)}
              >
              { capitalizeWord(cat.title)
  }            </p>
            </div>
          ))}
         {/*  <button
          className="mr-2 p-2 rounded-md text-sm my-2 text-white bg-red-500 text-gray-700 mb-5"
          onClick={() => handleSelectCategory("true")}
        >
          New Products
        </button> */}
      </div>
    </div>
  )
}

export default MiniSideBar
