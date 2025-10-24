import Testimonials from "@/components/compliments";
import Hero from "@/components/hero";
import Fans from "@/components/whattoknow";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Fans />
      <Testimonials />
    </main>
  );
}
