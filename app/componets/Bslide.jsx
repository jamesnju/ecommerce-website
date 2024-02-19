import Carousel from 'react-bootstrap/Carousel';
import SliderData from '../SliderData';
const Bslide = () => {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
    {SliderData.map((items)=>
    <>  
        <img src={items.img} alt="" />
        <p>{items.title}</p>
        <p>{items.price}</p>
        <p>{items.mainTitle}</p>
    </>
    
    )}
    <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
            
)
}

export default Bslide