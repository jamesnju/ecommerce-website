import Image from 'next/image';
import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
interface propsType{
    img: string;
    title: string;
    mainTitle:string;
    price: string;
    rating: number;
  
  }

  const generateRating = (rating: number)=>{
    switch (rating){
      case 1:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          </div>
        );
        case 2:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          </div>
        );
        case 3:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          </div>
        );
        case 4:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          </div>
        );
        case 5:
        return(
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          
          </div>
        );
        default:
        return null;
    }
  }

const ProductCard: React.FC<propsType> = ({img,title,mainTitle,price,rating}) => {
  return (
    <div className='px-4  border-[13px] border-gray-200 rounded-xl object-cover w-17 max-w-[400px]'>
        <div className="">
            <Image className='w-full h-3rem object-cover' src={img} alt={'title'} width={200} height={200} />
        </div>
        <div className="space-y-2 py-2">
            <h3 className="text-accent font-medium uppercase">{title}</h3>
            <p className='text-gray-500 max-w-[150px]'>{mainTitle}</p>
        </div>
        <div className="">{generateRating(rating)}</div>
        <div className="flex gap-4 font-bold">
          KSH{price}.00
          <del className='text-gray-500 font-normal'>KSH{parseInt(price) + 50}.00</del>
        </div>

    </div>
  )
}

export default ProductCard