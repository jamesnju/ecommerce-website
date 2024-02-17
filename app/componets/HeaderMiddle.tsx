import { FiHeart, FiSearch, FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const HeaderMiddle = () => {
  return (
    <div className='border-b border-gray-300 py-6'>
        <div className="container sm:flex justify-between items-center">
            <div className="font-bold text-xl text-center pb-4 sm:pb-0 text-blackish">NAFUU</div>
            <div className="w-full sm:w-[300px] md:w-[70%] relative">
                <input type="text" className='border-gray-200 border p-2 px-4 rounded-lg w-full' placeholder='Enter product name.....'/>
                <FiSearch className="absolute right-0 top-0 mr-3 mt-3 text-gray-500 cursor-pointer hover:border-green-400" size={25}/>
            </div>
            <div className="hidden lg:flex gap-4 text-gray-400 text-[30px]">
                <FiUser/>
                <div className="relative">
                    <FiHeart/><sup className="bg-red-400 rounded-full  top-[-40px] right-[0] left-[0] w-[18px] h-[18px] text-[12px]
                    text-white grid place-items-center translate-x-1 translate-y-1">0</sup>
                </div>
                <div className="relative">
                    <HiOutlineShoppingBag/>
                    <sup className="bg-red-400 rounded-full  top-[-40px] right-[0] left-[0] w-[18px] h-[18px] text-[12px]
                    text-white grid place-items-center translate-x-1 translate-y-1">0</sup>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default HeaderMiddle