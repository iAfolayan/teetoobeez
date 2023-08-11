import { AboutList } from '@/utils/data'
import React from 'react'

const List = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {AboutList.map((categoryObj, index) => (
        <div key={index}>
          {Object.entries(categoryObj).map(([categoryTitle, items]) => (
            <div key={categoryTitle}>
              <h2 className='text-xl font-extrabold space-y-2' data-aos="fade-right"
     data-aos-offset="350"
     data-aos-easing="ease-in-sine">{categoryTitle}</h2>
              {items.map((item, itemIndex) => (
                <div key={itemIndex} >
                  <p className="md:ml-3 py-2 text-justify" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"><span className='font-bold'>- {item.title}:</span> {item.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default List