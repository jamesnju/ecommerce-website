import Image from "next/image";
import SliderBar from "./componets/SliderBar";
import NewProducts from "./componets/NewProducts";
import Testimonial from "./componets/Testimonial";

export default function Home() {
  return (
    <main >
      <SliderBar/>
      <NewProducts/>
      <Testimonial/>
    </main>
  );
}
