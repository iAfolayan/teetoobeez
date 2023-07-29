// components/Pagination.tsx
import React from 'react'
import ReactPaginate from 'react-js-pagination'
import 'react-js-pagination/dist/Pagination.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: () => void
}

const PaginationPage: React.FC<PaginationProps> = ({currentPage, totalPages, onPageChange}) => {
  return (
    <div className="flex items-center justify-center my-4">
      <p className="text-red-400 text-2xl">{totalPages}</p>
      <ReactPaginate
        activePage={currentPage}
        totalItemsCount={totalPages}
        onChange={() => onPageChange}
        itemClass="inline-block px-4 py-2 rounded-md cursor-pointer"
        itemClassFirst="inline-block px-4 py-2 rounded-md cursor-pointer"
        itemClassPrev="inline-block px-4 py-2 rounded-md cursor-pointer"
        itemClassNext="inline-block px-4 py-2 rounded-md cursor-pointer"
        itemClassLast="inline-block px-4 py-2 rounded-md cursor-pointer"
        activeLinkClass="bg-blue-500 text-white"
        linkClass="bg-gray-300 text-gray-700"
      />
    </div>
  )
}

export default PaginationPage
