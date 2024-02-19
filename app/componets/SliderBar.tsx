"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slides from './Slides';
import Image1 from '@/public/clothings.jpg';
import Image2 from '@/public/shoe1.jpg';
import Image3 from '@/public/woman.jpg';
import Image4 from '@/public/shoe2.jpg';
const SliderBar = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    };
    const SliderData = [
        {
            id:0,
            img: '/clothings.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },
        {
            id:0,
            img: '/shoe1.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },
        {
            id:0,
            img: '/woman.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },
        {
            id:0,
            img: '/shoe2.jpg',
            title:"CLOTHING",
            mainTitle:"DIGITAL CLOTHING FOR WOMEN",
            price:"20"
        },]
  return (
    <div>
        <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
            {SliderData.map((items)=>(
                <Slides key={items.id}  img={items.img} title={items.title} mainTitle={items.mainTitle} price={items.price} />
            ))}
            </Slider>
        </div>

    </div>
  )
}

export default SliderBar