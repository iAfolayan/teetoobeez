import React, { useState, useEffect } from 'react'
import PostCard from './postCard'
import MiniSideBar from "@/components/Mini-sidebar";
import { ProductItems } from '@/utils/data';
import MobileMenu from '../Mini-sidebar/Mobile-menu';
import {client, urlFor} from '../../utils/sanity';
import { GetStaticProps } from 'next';

type Product = {
  _id: string
  name: string
  description: string
  price: number
  category: {title: string}
  image: any
  rating: number
}

const Products = () => {
  const [state, setState] = useState({ products: []})
  const [categories, setCategories] = useState({ categories: []})

  useEffect(() => {
  const fetchData = async () => {
    try{
      const query = `*[_type == "category"]{ _id, title }`;
      const products = await client.fetch(`*[_type == "product"]{ _id, name, image, description, price, rating, category->{title}, author->{name}}`);
      
      const categories = await client.fetch(query)
      
      setCategories({categories})
      setState({products})
    } catch(err) {
      console.log(err)
    }
  }

  fetchData()
}, [])

const { products } = state

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

   const handleSelectCategory = (category: string | null) => {
     setSelectedCategory(category);
   };

   const filteredProducts = selectedCategory
    ? products.filter((product: Product) => product.category.title === selectedCategory)
    : products;
  return (
    <div className="flex gap-x-4">
      <MiniSideBar onSelectCategory={handleSelectCategory} navItems={categories} />
      <div className="flex flex-col w-full mt-5 mx-4 md:ml-10">
        <div className="flex justify-between items-center md:mr-16  py-4 border-b">
          <h1 className="text-base md:text-2xl font-bold uppercase w-fit">
            {selectedCategory === null ? 'All products' : selectedCategory}
          </h1>
          <div className="flex gap-x-4">
            <span className="hidden md:block">Sort by: Latest</span>
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
  )
}

/* export const getStaticProps = async () => {
  const query = `*[_type == "category"]{
    _id,
    title
  }`
  const categories = await client.fetch(query)
  return {
    props: {categories},
  }
} */

export default Products
