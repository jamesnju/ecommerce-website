import React from 'react'

const Footer = () => {
    const   currentYear =  new  Date().getFullYear();
  return (
    <div  className='text-center bg-gray-500 py-4   pb-16   md:pb-4  text-white text-lg'>
        <p>All Rights  Reserved &copy; {currentYear}</p>

    </div>
  )
}

export default Footer