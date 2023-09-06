import React, { useState, useEffect } from 'react'
import PostCard from './postCard'
import MiniSideBar from "@/components/Mini-sidebar";
import MobileMenu from '../Mini-sidebar/Mobile-menu';
import {client} from '../../utils/sanity';
import Pagination from 'react-js-pagination';

/* Pagination icons */
import PrevPageIcon from '@/icons/prev-page-icon';
import NextPageIcon from '@/icons/next-page-icon';
import LastPageIcon from '@/icons/last-page-icon';
import FirstPageIcon from '@/icons/first-page-icon';

import Loader from '@/components/Loader';
// import 'react-js-pagination/dist/Pagination.css'

interface Category {
  _id: string
  title: string
}

interface Image {
  _ref: string // This should be the Sanity asset reference
  asset: any
  // Add other image properties if needed
}

interface Product {
  _id: string
  name: string
  image: Image[]
  description: string
  price: number
  rating: number
  isLatest: any
  category: Category
  author: {
    name: string
  }
}

interface HomeProps {
  categories: Category[]
  products: Product[]
}

const ITEMS_PER_PAGE = 52

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
    try{
      const query = `*[_type == "category"]{_id, title }`;
      const productsResult = await client.fetch(`*[_type == "product"] | order(_createdAt desc){ _id, name, image, description, price, rating, isLatest, category->{title}}`);
      
      const categories = await client.fetch(query)
      
      setCategories(categories)
      setProducts(productsResult)
      setLoading(false)
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
   fetchData()
  }, [])


  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product: Product) => (product.category.title || product.isLatest) === selectedCategory)
    : products

  /* Pagination */
  // const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE)

  const paginatedItems = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  /* End pagination */

  return (
    <div className="flex gap-x-1 w-full md:w-11/12 px-2 md:px-0 md:mx-auto">
      <MiniSideBar onSelectCategory={handleSelectCategory} navItems={categories} />
      <div className="flex flex-col w-full mt-5 mx-1 md:mx-0 md:ml-12">
        <h1 className="flex flex-col text-3xl text-gray-600 uppercase text-center py-4">
          Our Products
          <span className="text-gray-300 text-xl italic normal-case">
            Adorning Elegance with our Exquisite Jewelry Collection
          </span>
        </h1>
        <div className="flex justify-between items-center py-2 border-b">
          <h1 className="text-base md:text-xl font-bold uppercase w-fit">
            {selectedCategory === null
              ? 'All products'
              : selectedCategory === "true"
              ? 'Lastest'
              : selectedCategory}
          </h1>
          <div className="flex md:gap-x-4">
            <span className="hidden md:block">Sort by: Latest</span>
            <MobileMenu onSelectCategory={handleSelectCategory} Categories={categories} />
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:gap-x-[30px] flex-wrap">
          {paginatedItems.map((product: any, index: any) => (
            <PostCard product={product} key={index} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-x-6 my-4">
          {loading ? (
            <Loader text="Loading All products" />
          ) : (
            <span className="inline-flex mt-4 text-sm font-normal">
              Total items: {filteredProducts.length}
            </span>
          )}
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={ITEMS_PER_PAGE}
            totalItemsCount={filteredProducts.length}
            pageRangeDisplayed={2}
            hideDisabled={true}
            firstPageText={<FirstPageIcon />}
            lastPageText={<LastPageIcon />}
            nextPageText={<NextPageIcon />}
            prevPageText={<PrevPageIcon />}
            onChange={handlePageChange}
            innerClass="flex items-center justify-center space-x-4 mt-4"
            activeClass="bg-blue-500 text-white"
            itemClass="inline-block p-2 rounded text-xl cursor-pointer"
            itemClassFirst="inline-block p-2 rounded-md cursor-pointer"
            itemClassPrev="inline-block rounded-md cursor-pointer text-white font-bold"
            itemClassNext="inline-block rounded-md cursor-pointer"
            itemClassLast="inline-block p-2 rounded-md cursor-pointer"
            activeLinkClass="bg-blue-500 text-white"
            linkClass="p-2 text-gray-700"
          />
        </div>
      </div>
    </div>
  )
}

/* export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const categories = await getAllCategories()
    const products = await getAllProducts()

    return {
      props: {
        categories,
        products,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error(error)
    return {
      props: {
        categories: [],
        products: [],
      },
      revalidate: 60,
    }
  }
} */

export default ProductsPage
