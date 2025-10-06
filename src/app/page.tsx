import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="w-full h-[100%] bg-gradient-to-b from-sky-950 to-neutral-900 p-6">
      <div className="max-w-[90%] h-[2000px] mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
