import Image from 'next/image';
import React from 'react'
interface propsType{
    img: string;
    title: string;
    mainTitle:string;
    price: string;
  
  }

const ProductCard: React.FC<propsType> = ({img,title,mainTitle,price}) => {
  return (
    <div className='px-4  border-[13px] border-gray-200 rounded-xl object-cover w-17 max-w-[400px]'>
        <div className="">
            <Image className='w-full h-3rem object-cover' src={img} alt={'title'} width={200} height={200} />
        </div>
        {}

    </div>
  )
}

export default ProductCard