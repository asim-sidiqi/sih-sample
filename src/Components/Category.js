import React from 'react'

const Category = () => {
  return (
    <>
    <div className='m-8 mt-14 flex justify-center gap-52 text-white'>
      <button className='bg-gray-800 w-auto h-auto px-8 py-4 rounded-full text-xl transform hover:scale-110 duration-200  ease-in-out'>General</button>
      <button className='bg-gray-800 w-auto h-auto px-8 py-4 rounded-full text-xl transform hover:scale-110 duration-200  ease-in-out'>OPD</button>
      <button className='bg-gray-800 w-auto h-auto px-8 py-4 rounded-full text-xl transform hover:scale-110 duration-200  ease-in-out'>Emergency</button>
    </div>
    </>
  )
}

export default Category
