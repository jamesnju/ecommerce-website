import Image1 from '@/public/clothings.jpg';
import Image2 from '@/public/shoe1.jpg';
import Image3 from '@/public/woman.jpg';
import Image4 from '@/public/shoe2.jpg';
import ProductCard from './ProductCard';
const NewProducts = () => {
    const productData = [
        {
            id:0,
            img: '/clothings.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"100",
            rating:5
        },
        {
            id:1,
            img: '/shoe1.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20",
            rating:3
        },
        {
            id:2,
            img: '/woman.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"90",
            rating:2
        },
        {
            id:3,
            img: '/shoe2.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"60",
            rating:4
        },
        {
            id:4,
            img: '/clothings.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"120",
            rating:5
        },
        {
            id:5,
            img: '/shoe1.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"520",
            rating:2
        },
        {
            id:6,
            img: '/woman.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"270",
            rating:3
        },
        {
            id:7,
            img: '/shoe2.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"50",
            rating:4
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
                    rating={data.rating}
                    />
                )}
            </div>
            
        </div>  
    </div>
  )
}

export default NewProducts