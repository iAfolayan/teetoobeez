import React, { useState } from 'react'
import PostCard from './postCard'
import MiniSideBar from "@/components/Mini-sidebar";
import { ProductItems } from '@/utils/data';
import MobileMenu from '../Mini-sidebar/Mobile-menu';


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

   const handleSelectCategory = (category: string | null) => {
     setSelectedCategory(category);
   };

  const filteredProducts = selectedCategory
    ? ProductItems.filter((product) => product.category === selectedCategory)
    : ProductItems;
  return (
    <div className="flex gap-x-4">
      <MiniSideBar onSelectCategory={handleSelectCategory} />
      <div className="flex flex-col w-full mt-5 mx-4 md:ml-10">
        <div className="flex justify-between items-center md:mr-16  py-4 border-b">
          <h1 className="text-base md:text-2xl font-bold uppercase w-fit">
            {selectedCategory === null ? "All products" : selectedCategory}
          </h1>
          <div className="flex gap-x-4">
            <span className='hidden md:block'>Sort by: Latest</span>
            <MobileMenu onSelectCategory={handleSelectCategory} />
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:gap-x-5 flex-wrap">
          {filteredProducts.map((product, index) => (
            <PostCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products
