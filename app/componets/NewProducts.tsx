import Image1 from '@/public/clothings.jpg';
import Image2 from '@/public/shoe1.jpg';
import Image3 from '@/public/woman.jpg';
import Image4 from '@/public/shoe2.jpg';
import ProductCard from './ProductCard';
const NewProducts = () => {
    const productData = [
        {
            id:0,
            img: Image1,
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },
        {
            id:0,
            img: Image2,
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },
        // {
        //     id:0,
        //     img: Image3,
        //     title:"CLOTHING",
        //     mainTitle:"DIGITAL CLOTHING FOR WOMEN",
        //     price:"20"
        // },
        {
            id:0,
            img: Image4,
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },
    ]
  return (
    <div>
        <div className="container pt-16">
            <h3 className="font-medium text-2xl pb-2">New Products</h3>
            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
            lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productData.map((data, index)=>
                    <ProductCard 
                    key={index}
                    img={data.img}
                    title={data.title}
                    mainTitle={data.mainTitle}
                    price={data.price}
                    
                    />
                )}
            </div>
        
        </div>

    </div>
  )
}

export default NewProducts