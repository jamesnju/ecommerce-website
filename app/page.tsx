import Image from "next/image";
import SliderBar from "./componets/SliderBar";
import NewProducts from "./componets/NewProducts";

export default function Home() {
  return (
    <main >
      <SliderBar/>
      <NewProducts/>
    </main>
  );
}
