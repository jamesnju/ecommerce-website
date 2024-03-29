import Image from 'next/image'
import React from 'react'
import user from '../../public/woman.jpg'
import Quote from '../../public/shoe1.jpg'


const Testimonial = () => {
  return (
    <div>
        <div className="container pt-16 pb-16 grid-cols-2">
            <div className="pb-4 font-medium text-2xl ">Testimonial</div>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                    <div className="text-center flex flex-col items-center gap-1">
                        <Image
                            className='inline-block py-2'
                            src={user}
                            width={80}
                            height={80}
                            alt='user'
                        />
                        <h2 className="text-gray-500 font-black text-[20px]">James Nju</h2>
                        <p>SOFTWARE DEVELOPER</p>
                        <Image
                            className='inline-block py-2'
                            src={Quote}
                            width={80}
                            height={80}
                            alt='user'
                        />
                        <p className="max-w-[200px] text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illum nostrum reprehenderit tenetur! Aspernatur laborum beatae exercitationem vitae blanditiis
                        </p>
                    </div>

                </div>
                    <div className="bg-red-600 bg-[url('/public/shoe1.jpg')] bg-cover h-[500px] rounded-2xl grid place-items-center">
                        <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:py-8  px-2 grid place-items-center gap-3">
                            <button className="bg-black text-white p-2 rounded-md"> 30% DISCOUNT</button>
                            <h3 className="font-bold text-2xl text-[#272727]">SUMMER COLLECTION</h3>
                            <p className="text-gray-500 text-[20px]">Starting @ $20 <b>Shop Now</b></p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial