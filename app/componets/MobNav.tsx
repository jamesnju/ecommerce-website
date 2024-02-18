import React from 'react'
import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoMenuOutline } from 'react-icons/io5'

const MobNav = () => {
  return (
    <div  className='lg:hidden cursor-pointer fixed bottom-0  w-full  bg-white  left-[50%]  -translate-x-[50%]  max-w-[500px] mobnav'>
      <div className="flex justify-between  text-[28px] py-2">
        <IoMenuOutline/>
        <div className="relative">
          <HiOutlineShoppingBag/>
          <div className="bg-red-600 rounded-full absolute  top-0 right-0 w-[18px]  h-[18px]  text-[12px] text-white  grid  place-items-center
          translate-x-1 -translate-y-1">0</div>
        </div>
        <AiOutlineHome/>
        <div className="relative">
          <FiHeart/>
          <div className="bg-red-500 rounded-full absolute  top-0 right-0 w-[18px]  h-18px  text-[12px] text-white  grid  place-items-center  translate-x-1 translate-y-1">
            0
          </div>

        </div>
      </div>
      <AiOutlineAppstore/>
      
    </div>
  )
}

export default MobNav