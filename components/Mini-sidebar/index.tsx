import React from 'react'

const Categories = ["ANKLET (Leg Chain)","Earrings", "Bangles", "Necklaces"];

interface Props {
  onSelectCategory: (category: string | null) => void;
  navItems: any
}

const MiniSideBar = ({ onSelectCategory, navItems }: Props) => {
   const handleSelectCategory = (category: string | null) => {
    onSelectCategory(category);
  };
  return (
    <div className='hidden md:block h-auto md:w-[250px] border-r ml-4 relative'>
     <div className="sticky top-4">
        <p className="font-bold text-2xl p-2">Category</p>
        <button
        className="mr-2 px-3 py-1 rounded-full text-gray-700 mb-5"
        onClick={() => handleSelectCategory(null)}
      >
        All Products
      </button>
        {navItems.categories.map(cat => (
          <div className="flex flex-col border-b last:border-none border-[#f1f1f1] hover:bg-gray-200 cursor-pointer" key={cat._id}>
            <p className="p-2 text-xs text-gray-500" onClick={() => handleSelectCategory(cat.title)}>{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniSideBar